<?php

use JetBrains\PhpStorm\Internal\PhpStormStubsElementAvailable;
/**
 * Class: Category
 * A class that manages new Categories
 */
	class Category
	{
		var $categoryID;
		var $name;
		var $publisherUsername;
		
		/**
		 * Constructor: 
		 * 
		 * 		Sets value to each property of the current Category object instance.
		 * 
		 * Parameters:
		 * 
		 * 		$values - (optional) If set, the values assigned to the properties will be those of the associative array stored in $values. Else, all properties will be given null as their value.
		 * 
		 */
		function __construct($values=null)
		{
			if ($values == null) {
				$this->categoryID = null;
				$this->name = null;
				$this->publisherUsername = null;
			}
			else {
				if (is_array($values)) {
					if (isset($values["categoryID"])) $this->categoryID = $values["categoryID"];
					else $this->categoryID = null;
					if (isset($values["name"])) $this->name = $values["name"];
					if (isset($values["publisherUsername"])) $this->publisherUsername = $values["publisherUsername"];
				}
			}
		}
		
		/**
		 * Method: insertDB
		 * 
		 * 		Changes the properties' value of the current Category object instance according to the given parameters.
		 * 
		 * Parameters:
		 * 
		 * 		$name - The name given by the user to represent the category.
		 * 		$publisherUsername - Username of the user who made the changes to the category.
		 * 
		 */
		public function update($name, $publisherUsername)
		{
			// $this->categoryID = $categoryID;
			$this->name = $name;
			$this->publisherUsername = $publisherUsername;
		}

		/**
		 * Method: getInfo
		 * 
		 * 		Provides the values of all the parameters in the current Category instance.
		 * 
		 * Returns:
		 * 	
		 * 		An associative array with all the properties listed.
		 * 
		 */
		public function getInfo($parameter = null) {
			return array(
				"categoryID" => $this->categoryID,
				"name" => $this->name,
				"publisherUsername" => $this->publisherUsername
			);
		}
		public function getID() {
			return ($this->categoryID);
		}
	}
?>