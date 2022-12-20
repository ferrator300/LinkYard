<?php

/*	
Class: LinkManager
A class that manages connection between Database and Link Bundle
*/
class LinkManager extends Link {
	/**
	 * Method: retrieveOneDB
	 * 
	 * 		Obtains a single link from the database.
	 * 
	 * Parameters: 
	 * 
	 * 		$id - (optional) The database's primary key of the link to be retrieved.
	 * 
	 * Returns: 
	 * 
	 * 		The instance of the LinkManager object from which the method has been called.
	 * 
	 */
	public function retrieveOneDB($id=null)
	{
		$output = null;
		if ($id != null) {
			try {
				$query = (BdD::$connection)->prepare('
					SELECT linkID, publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating
					FROM LINKS
					WHERE linkID = :linkID;');
				$query->bindParam('linkID',$id);
				$queryLines = $query->execute();
				if ($queryLines > 0) {
					$query->setFetchMode(PDO::FETCH_ASSOC); 
					$result = $query->fetchAll();
					foreach($result as $fila) {
						$output = $fila;
					}
					$this->linkID = $output["linkID"];
					$this->publicationDate = $output["publicationDate"];
					$this->url = $output["url"];
					$this->name = $output["name"];
					$this->lastTimeEdited = $output["lastTimeEdited"];
					$this->publisherUsername = $output["publisherUsername"];
					$this->accessibility = $output["accessibility"];
					$this->description = $output["description"];
					$this->rating = $output["rating"];
					$output = $this;
				}
			} catch(PDOException $e) {
				echo "Error: " . $e->getMessage();
			}
		}
		return $output;
	}

	/**
	 * Method: retrieveAllDB
	 * 
	 * 		Obtains all the links from the database that are accessible to by the currently logged user.
	 * 		That is, those marked as public and those that belong to the user.
	 * 
	 * Parameters:
	 * 		
	 * 		$username - (optional) The database's user primary key. If not provided, only public links will be retrieved.
	 * 
	 * Returns:
	 * 	
	 * 		An indexed array with a Link object for each entry retrieved from the database.
	 * 
	 */
	public function retrieveAllDB($order, $username="")
	{
		$output = null;
		try {
			$query = (BdD::$connection)->prepare('
				SELECT linkID, publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating
				FROM LINKS
				WHERE accessibility = "public" OR publisherUsername = :username
				ORDER BY ' . $order);
			$query->bindParam('username',$username);
			$queryLines = $query->execute();

			if ($queryLines > 0) {
				$query->setFetchMode(PDO::FETCH_ASSOC); 
				$result = $query->fetchAll();
				foreach($result as $line) {
					//The output will be an associative array with 2 keys: "linkInfo", which will store a link object, and "categories", which will store an array of category objects.
					$output[] = array("linkInfo"=>new Link($line), "categories"=>$this->checkLinkagoriesDB($line["linkID"]));
				}
			}
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}
		return $output;
	}
	public function retrieveLinksForLinkManagerDB($username)
	{
		$output = null;
		try {
			$query = (BdD::$connection)->prepare('
				SELECT linkID, publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating
				FROM LINKS
				WHERE publisherUsername = :username;
			');
			$query->bindParam('username',$username);

			$queryLines = $query->execute();
			if ($queryLines > 0) {
				$query->setFetchMode(PDO::FETCH_ASSOC); 
				$result = $query->fetchAll();
				foreach($result as $line) {
					//The output will be an associative array with 2 keys: "linkInfo", which will store a link object, and "categories", which will store an array of category objects.
					$output[] = array("linkInfo"=>new Link($line), "categories"=>$this->checkLinkagoriesDB($line["linkID"]));
				}
			}
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}
		return $output;
	}

	/**
	 * Method: checkLinkagoriesDB
	 * 
	 * 		Obtains all the categories that belong to a link in specific. 
	 * 
	 * Parameters:
	 * 		
	 * 		$linkID - The database's primary key of the link whose categories will be retrieved.
	 * 
	 * Returns:
	 * 	
	 * 		An indexed array that contains the checked link's ID, category ID and category name stored in an associative array for each resulting category.
	 * 
	 * Return format: 
	 * 
	 * 		array( array("categoryID"=>idValue, "name"=>nameValue, "publisherUsername"=>publisherUsernameValue), ...)
	 * 
	 */
	public function checkLinkagoriesDB($linkID) {
		$output = null;
		
		try {
			$query = (BdD::$connection)->prepare('
				SELECT L.categoryID AS "categoryID", C.name AS "name", C.publisherUsername AS "publisherUsername"
				FROM LINKAGORIES L 
				JOIN CATEGORIES C ON L.categoryID = C.categoryID 
				WHERE L.linkID = :linkID;
			');
			$query->bindParam('linkID', $linkID);

			$queryLines = $query->execute();
			if ($queryLines > 0) {
				$query->setFetchMode(PDO::FETCH_ASSOC); 
				$result = $query->fetchAll();
				foreach($result as $line) {
					$output[] = $line;
				}
			}

		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}
		return $output;
	}

	/**
	 * Method: insertLinkagoryDB
	 * 
	 * 		C
	 * 
	 * Returns:
	 * 	
	 * 		The number of lines that have been modified on the database after completing the operation.
	 * 
	 */
	public function insertLinkagoryDB($linkID, $categoryID)
	{
		$queryLines = 0;
		try {
			$query = (BdD::$connection)->prepare("
				INSERT INTO LINKAGORIES(linkID, categoryID)
				VALUES (:linkID,:categoryID);
			");
			$query->bindParam('linkID',$linkID);
			$query->bindParam('categoryID',$categoryID);


			$queryLines = $query->execute();
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}
		
		return $queryLines;
	}

	/**
	 * Method: updateDB
	 * 
	 * 		Stores the current state of the Link object's properties on the corresponding database entry within the LINKS table.
	 * 
	 * Returns:
	 * 	
	 * 		The number of lines that have been modified on the database after completing the operation.
	 * 
	 */
	public function updateDB() //$linkID, $publicationDate, $url, $name, $lastTimeEdited, $publisherUsername, $accessibility="private"
	{
		$queryLines = 0;
		try {
			$query = (BdD::$connection)->prepare("
				UPDATE LINKS 
				SET publicationDate = :publicationDate, url = :url, name = :name, lastTimeEdited = :lastTimeEdited, publisherUsername = :publisherUsername, accessibility = :accessibility, description = :description, rating = :rating
				WHERE  linkID = :linkID;
			");
			$query->bindParam('linkID',$this->linkID);
			$query->bindParam('publicationDate',$this->publicationDate);
			$query->bindParam('url',$this->url);
			$query->bindParam('name',$this->name);
			$query->bindParam('lastTimeEdited',$this->lastTimeEdited);
			$query->bindParam('publisherUsername',$this->publisherUsername);
			$query->bindParam('accessibility',$this->accessibility);
			$query->bindParam('description',$this->description);
			$query->bindParam('rating',$this->rating);


			$queryLines = $query->execute();
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}
		return $queryLines;
	}

	/**
	 * Method: insertDB
	 * 
	 * 		Creates a new entry on the LINKS table of the database with the current Link object's properties.
	 * 
	 * Returns:
	 * 	
	 * 		The number of lines that have been modified on the database after completing the operation.
	 * 
	 */
	public function insertDB()
	{
		$queryLines = 0;
		try {
			$query = (BdD::$connection)->prepare("
				INSERT INTO LINKS(publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating)
				VALUES (:publicationDate,:url,:name,:lastTimeEdited,:publisherUsername,:accessibility, :description, :rating);
			");
			$query->bindParam('publicationDate',$this->publicationDate);
			$query->bindParam('url',$this->url);
			$query->bindParam('name',$this->name);
			$query->bindParam('lastTimeEdited',$this->lastTimeEdited);
			$query->bindParam('publisherUsername',$this->publisherUsername);
			$query->bindParam('accessibility',$this->accessibility);
			$query->bindParam('description',$this->description);
			$query->bindParam('rating',$this->rating);

			$queryLines = $query->execute();
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}
		
		return $queryLines;
	}

	/**
	 * Method: deleteDB
	 * 
	 * 		Deletes the link entry associated with the values loaded on the current Link object from the database.
	 *  
	 * Returns:
	 * 	
	 * 		The number of lines that have been modified on the database after completing the operation.
	 * 
	 */
	public function deleteDB($linkID=null)
	{
		$queryLines = 0;
		try {
			$query = (BdD::$connection)->prepare("
				DELETE
				FROM LINKS 
				WHERE  linkID = :linkID;
			");
			if ($linkID == null) $query->bindParam('linkID',$this->linkID);
			else $query->bindParam('linkID',$linkID);

			$queryLines = $query->execute();
			$this->linkID = null;
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}

		return $queryLines;
	}

	/**
	 * Method: deleteLinkagoriesOfLinkDB
	 * 
	 * 		Deletes all the categories associated to the specified link (linkagories).
	 * 
	 * Parameters:
	 * 
	 * 		$linkID - primary key of the link whose categories are to be removed. If it's not provided as a parameter, the linkID property of the current instance of Link will be used instead.
	 *  
	 * Returns:
	 * 	
	 * 		The number of lines that have been modified on the database after completing the operation.
	 * 
	 */
	public function deleteLinkagoriesOfLinkDB($linkID=null, $removeLinkIDAfterwards=true)
	{
		$queryLines = 0;
		try {
			$query = (BdD::$connection)->prepare("
				DELETE
				FROM LINKAGORIES 
				WHERE  linkID = :linkID;
			");
			if ($linkID == null) $query->bindParam('linkID',$this->linkID);
			else $query->bindParam('linkID',$linkID);

			$queryLines = $query->execute();
			if ($removeLinkIDAfterwards == true) $this->linkID = null;
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}
		
		return $queryLines;
	}


	/**
	 * Method: loadLastAddedLinkDB
	 * 
	 * 		Retrieves the data of the last added link on the database and loads it on the current instance of the Link PHP class.
	 *  
	 * Returns:
	 * 	
	 * 		The current instance of LinkManager.
	 * 
	 */
	public function loadLastAddedLinkDB()
	{
		$output = null;
		try {
			$query = (BdD::$connection)->prepare('
				SELECT linkID, publicationDate, url, name, lastTimeEdited, publisherUsername, accessibility, description, rating
				FROM LINKS
				WHERE linkID = ( SELECT MAX(linkID) FROM LINKS);
				');

			$queryLines = $query->execute();
			if ($queryLines > 0) {
				$query->setFetchMode(PDO::FETCH_ASSOC); 
				$result = $query->fetchAll();
				foreach($result as $fila) {
					$output = $fila;
				}
				$this->linkID = $output["linkID"];
				$this->publicationDate = $output["publicationDate"];
				$this->url = $output["url"];
				$this->name = $output["name"];
				$this->lastTimeEdited = $output["lastTimeEdited"];
				$this->publisherUsername = $output["publisherUsername"];
				$this->accessibility = $output["accessibility"];
				$this->description = $output["description"];
				$this->rating = $output["rating"];
				$output = $this;
			}
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}

		return $output;
	}
}
?>