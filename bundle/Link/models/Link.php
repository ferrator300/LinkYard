<?php

use JetBrains\PhpStorm\Internal\PhpStormStubsElementAvailable;
/*	
Class: Link
A class that manages new Links
*/
	class Link
	{
		var $linkID;
		var $publicationDate;
		var $url;
		var $name;
		var $lastTimeEdited;
		var $publisherUsername;
		var $accessibility;
		var $description;
		var $rating;
		
		/**
		 * Constructor: 
		 * 
		 * 		Sets value to each property of the current Link object instance.
		 * 
		 * Parameters:
		 * 
		 * 		$values - (optional) If set, the values assigned to the properties will be those of the associative array stored in $values. Else, all properties will be given null as their value.
		 * 
		 */
		function __construct($values=null)
		{
			if ($values == null) {
				$this->linkID = null;
				$this->publicationDate = null;
				$this->url = null;
				$this->name = null;
				$this->lastTimeEdited = null;
				$this->publisherUsername = null;
				$this->accessibility = null;
				$this->description = null;
				$this->rating = null;
			}
			else {
				if (is_array($values)) {
					if (isset($values["linkID"])) $this->linkID = $values["linkID"];
					else if (!isset($values["linkID"])) $this->linkID = null;
					if (isset($values["publicationDate"])) $this->publicationDate = $values["publicationDate"];
					if (isset($values["url"])) $this->url = $values["url"];
					if (isset($values["name"])) $this->name = $values["name"];
					if (isset($values["lastTimeEdited"])) $this->lastTimeEdited = $values["lastTimeEdited"];
					if (isset($values["publisherUsername"])) $this->publisherUsername = $values["publisherUsername"];
					if (isset($values["accessibility"])) $this->accessibility = $values["accessibility"];
					if (isset($values["description"])) $this->description = $values["description"];
					if (isset($values["rating"])) $this->rating = $values["rating"];
				}
			}
		}

		/**
		 * Method: update
		 * 
		 * 		Changes the properties' value of the current Link object instance according to the given parameters.
		 * 
		 * Parameters:
		 * 
		 * 		$publicationDate - The original publication date of the link. Perhaps changing this field should be forbidden.
		 * 		$url - The URL address given by the user.
		 * 		$name - The name given by the user to represent the link.
		 * 		$lastTimeEdited - The time sent by the client's browser at the time of sending the request. It will be assigned automatically by Javascript on the corresponding template.
		 * 		$publisherUsername - Username of the user who made the changes to the link.
		 * 		$accessibility - "public" if the link is available to everyone, or "private" if it's only visible by its publisher.
		 * 		$description - Additional explanations given to describe the link.
		 * 		$rating - Rating given to the link by its publisher.
		 * 
		 */
		public function update($publicationDate, $url, $name, $lastTimeEdited, $publisherUsername, $accessibility, $description, $rating)
		{
			// $this->linkID = $linkID;
			$this->publicationDate = $publicationDate; //To be changed.
			$this->url = $url;
			$this->name = $name;
			$this->lastTimeEdited = $lastTimeEdited;
			$this->publisherUsername = $publisherUsername;
			$this->accessibility = $accessibility;
			$this->description = $description;
			$this->rating = $rating;
		}

		public function updateForInsert($values)
		{
			if (isset($values["publicationDate"])) $this->publicationDate = $values["publicationDate"];
			if (isset($values["url"])) $this->url = $values["url"];
			if (isset($values["name"])) $this->name = $values["name"];
			if (isset($values["lastTimeEdited"])) $this->lastTimeEdited = $values["lastTimeEdited"];
			if (isset($values["publisherUsername"])) $this->publisherUsername = $values["publisherUsername"];
			if (isset($values["accessibility"])) $this->accessibility = $values["accessibility"];
			if (isset($values["description"])) $this->description = $values["description"];
			if (isset($values["rating"])) $this->rating = $values["rating"];
		}

		/**
		 * Method: updateForQuickLink
		 * 
		 * 		Changes the $name, $url and $publicationDate properties' value of the current Link object instance according to the given parameters, and sets the rest of them as null. This will be used only when using the Quick Add functionality.
		 * 
		 * Parameters:
		 * 
		 * 		$publicationDate - The original publication date of the link.
		 * 		$url - The URL address given by the user.
		 * 		$name - The name given by the user to represent the link.
		 * 		$publisherUsername - Username of the user who added the link.
		 * 
		 */
		public function updateForQuickLink($name, $url, $publicationDate, $publisherUsername) {
			$this->publicationDate = $publicationDate;
			$this->url = $url;
			$this->name = $name;
			$this->lastTimeEdited = null;
			$this->publisherUsername = $publisherUsername;
			$this->accessibility = "private";
			$this->description = "";
			$this->rating = 1; //The rating will be 1 by default.
		}

		/**
		 * Method: getInfo
		 * 
		 * 		Provides the values of all the parameters in the current Link instance.
		 * 
		 * Returns:
		 * 	
		 * 		An associative array with all the properties listed.
		 * 
		 */
		public function getInfo() {
			return array(
				"linkID" => $this->linkID,
				"name" => $this->name,
				"publicationDate" => $this->publicationDate,
				"url" => $this->url,
				"lastTimeEdited" => $this->lastTimeEdited,
				"publisherUsername" => $this->publisherUsername,
				"accessibility" => $this->accessibility,
				"description" => $this->description,
				"rating" => $this->rating
			);
		}

		/**
		 * Method: updateForDBUpdate
		 * 
		 * 		Updates the current Link object's methods from a given associative array of values. All properties are elegible to be updated except linkID, publicationData and publisherUsername.
		 * 
		 * Parameters:
		 * 
		 * 		$values - Associative array which should contain all the properties that want to be changed stated by their property name.
		 * 
		 */
		public function updateForDBUpdate($values) { //LinkID, publicationDate and publisherUsername don't show here because they're not elegible to be changed.
			if (isset($values["url"])) $this->url = $values["url"];
			if (isset($values["name"])) $this->name = $values["name"];
			if (isset($values["lastTimeEdited"])) $this->lastTimeEdited = $values["lastTimeEdited"];
			if (isset($values["publisherUsername"])) $this->publisherUsername = $values["publisherUsername"];
			if (isset($values["accessibility"])) $this->accessibility = $values["accessibility"];
			if (isset($values["description"])) $this->description = $values["description"];
			if (isset($values["rating"])) $this->rating = $values["rating"];
		}

		public function getID() {
			return ($this->linkID);
		}
	}
?>