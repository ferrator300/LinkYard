<?php
if (session_status() === PHP_SESSION_NONE) {
	session_start();
}
/**
 * Class: LinkController
 * A class that manages new Links
 */

class LinkController extends Controller
{

	/**
	 * Method: process
	 * 
	 * 		Checks the URL parameters and launches a specific action according to them.
	 * 
	 * Parameters:
	 * 
	 * 		$params - Parameters found on the URL, right after the current bundle.
	 * 
	 */
	public function process($params)
	{
		$linkManager = new LinkManager();
		$user = new UsersManager();
		$categoryManager = new CategoryManager();

		if (isset($_COOKIE['sort']))
			$order = $_COOKIE['sort'];
		else 
			$order = "name";

		if (isset($params)) {
			switch ($params[0]) {
				//If the user comes from the quickadd form:
				case 'quickadd':
					//We'll only allow the user to add a link if the login credentials are still valid.
					if ($user->restoreUser()) {
						if (isset($_POST)) {
							//We'll use the quickadd specific update method to load the form data on the user object.	
							$linkManager->updateForQuickLink($_POST["name"], $_POST["url"], $_POST["date"], $user->username);
							$linkManager->insertDB();
						}
					}
					header('Location: ' . WEBROOT . PGDEFAULT);
					header('Connection: close');
					break;
				
				case 'linkmanager':
					if ($params[1] == "delete") {
						//First, we keep the linkID and instanciate a linkManager object with it.
						$linkID = $_POST["linkID"];
						$linkManager->retrieveOneDB($linkID);
						//We need to remove the categories associated with the link before removing the link itself.
						$linkManager->deleteLinkagoriesOfLinkDB();
						$linkManager->retrieveOneDB($linkID); //Every time we call a DB method, we need to instanciate the linkManager object once again.

						$linkManager->deleteDB();
						$linkManager->retrieveOneDB($linkID);
						
						$user->restoreUser();
						$links = $linkManager->retrieveLinksForLinkManagerDB($user->get_username());
						$categories = $categoryManager->retrieveAllDB();

						$this->data = array("user" => $user->get_Data(), "links" => $links, "categories" => $categories);
						$this->twig = "linkManager.html";
					}
					else if ($params[1] == "update") {
						//First, we'll keep the linkagories in a variable.
						$postCategories = explode(";", $_POST["categoryIDs"]);
						
						
						//First, we keep the linkID and instanciate a linkManager object with it. This way we load the old data of the link we'll update on this LinkManager instance.
						$linkID = $_POST["linkID"];
						
						//Now we'll replace the current linkManager's property values those we were sent via POST.
						$linkManager->retrieveOneDB($linkID);
						$linkManager->updateForDBUpdate($_POST); 

						//We now call the update method.
						$linkManager->updateDB();
						$linkManager->retrieveOneDB($linkID);
						
						//Here we'll remove all linkagories associated with the link so that we can later input the selected ones.
						$linkManager->deleteLinkagoriesOfLinkDB($linkID, false);

						//Now we'll iterate throught the category IDs received by POST and add an entry on the LINKAGORIES table for each of them.
						foreach ($postCategories as $category) {
							$linkManager->insertLinkagoryDB($linkID, $category);
						}

						//We restore the user's data from Session or Cookies after the DB access.
						$user->restoreUser();
						
						//And we reload the twig data to then redirect the user back to the Link Manager view.
						$links = $linkManager->retrieveLinksForLinkManagerDB($user->get_username());
						$categories = $categoryManager->retrieveAllDB();

						$this->data = array("user" => $user->get_Data(), "links" => $links, "categories" => $categories);
						$this->twig = "linkManager.html";
					}
					else if ($params[1] == "add") {
						$postCategories = explode(";", $_POST["categoryIDs"]);
						$postData = $_POST;
						$user->restoreUser();

						//Here we establish the publisher username and the publication date on the link's data.
						$postData["publisherUsername"] = $user->username;
						$postData["lastTimeEdited"] = $postData["publicationDate"];

						//If the user marks the "private" checkbox on the front-end form, it'll generate a the accessibility field. But if they don't, this POST variable won't be defined. That's why, if it's not set, we know the accessibility needs to be public.
						if ( !isset($postData["accessibility"]) ) {
							$postData["accessibility"] = "public";
						}

						$linkManager->updateForInsert($postData);
						$linkManager->insertDB();

						//Now we'll retrieve the data of the link we just added on the database so that we know what ID it was assigned.
						$linkManager->loadLastAddedLinkDB();

						//Now we'll add the link-category relations (linkagories) to the database.
						foreach($postCategories as $category) {
							$linkManager->insertLinkagoryDB($linkManager->linkID, $category);
						} 
						

						$links = $linkManager->retrieveLinksForLinkManagerDB($user->get_username());
						$categories = $categoryManager->retrieveAllDB();
						$this->data = array("user" => $user->get_Data(), "links" => $links, "categories" => $categories);
						$this->twig = "linkManager.html";
					}
					else if ($params[1] == "addCategory") {
						$postData = $_POST;
						$user->restoreUser();

						//First, we'll create an instance of Categories manager with the data obtained via POST.
						$newCategory = new CategoryManager($postData);

						//Now we'll launch the insert on the database.
						$newCategory->insertDB();

						//And we'll redirect the user again to the Link Manager.
						$user->restoreUser();
						$links = $linkManager->retrieveLinksForLinkManagerDB($user->get_username());
						$categories = $categoryManager->retrieveAllDB();

						$this->data = array("user" => $user->get_Data(), "links" => $links, "categories" => $categories);
						$this->twig = "linkManager.html";
					}
					else {
						if ($user->restoreUser()) {
							$links = $linkManager->retrieveLinksForLinkManagerDB($user->get_username());
							$categories = $categoryManager->retrieveAllDB();
							$this->data = array("user" => $user->get_Data(), "links" => $links, "categories" => $categories);
							$this->twig = "linkManager.html";
						} else { //In case the user isn't valid, we redirect to the home page instead.
							$links = $linkManager->retrieveAllDB($order);
							$this->data = array("user" => $user->get_Data(), "links" => $links);
							$this->twig = "publicHomePage.html";
						}
					}
					break;

				//Sort case
				case 'sortmethod':
					if ($_POST['sortMethod'] == 'name')
						$order = 'name';
					else if ($_POST['sortMethod'] == 'rating')
						$order = 'rating';
					else if ($_POST['sortMethod'] == 'publicationDate')
						$order = 'publicationDate';
					else if ($_POST['sortMethod'] == 'url')
						$order = 'url';

					setcookie('sort', $order, time() + 60 + 60 * 24, "/");
					header('Location: ' . WEBROOT . PGDEFAULT);
					break;

				case 'legalnotice':
					if ($user->restoreUser()) {
						$this->data = array("user" => $user->get_Data());
						$this->twig = "legalNotice.html";
					} else { //In case the user isn't valid, we redirect to the home page instead.
						$links = $linkManager->retrieveAllDB($order);
						$this->data = array("links" => $links);
						$this->data = array("user" => $user->get_Data(), "links" => $links);
						$this->twig = "legalNotice.html";
					}
					break;
				
				//Generic case
				default:
					if ($user->restoreUser()) {
						$links = $linkManager->retrieveAllDB($order, $user->get_username());
						$this->data = array("user" => $user->get_Data(), "links" => $links);
						$this->twig = "publicHomePage.html";
					} else {
						$links = $linkManager->retrieveAllDB($order);
						$this->data = array("user" => $user->get_Data(), "links" => $links);
						$this->twig = "publicHomePage.html";
					}
					break;
			}
		}
	}
}