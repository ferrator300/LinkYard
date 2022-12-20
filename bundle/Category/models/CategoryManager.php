<?php
/**
 * Class: CategoryManager
 * A class that manages connection between Database and Categories Bundle
 */
class CategoryManager extends Category {

	/**
	 * Method: retrieveOneDB
	 * 
	 * 		Obtains a single category from the database.
	 * 
	 * Parameters:
	 * 
	 * 		$id - (optional) The database's primary key of the category to be retrieved.
	 * 
	 * Returns:
	 * 	
	 * 		The instance of the Category object from which the method has been called.
	 * 
	 */
	public function retrieveOneDB($id=null)
	{
		$output = null;
		if ($id != null) {
			try {
				$query = (BdD::$connection)->prepare('
					SELECT categoryID, name, publisherUsername
					FROM LINKS
					WHERE categoryID = :categoryID;');
				$query->bindParam('categoryID',$id);
				$qFiles = $query->execute();
				if ($qFiles > 0) {
					$query->setFetchMode(PDO::FETCH_ASSOC); 
					$result = $query->fetchAll();
					foreach($result as $fila) {
						$output = $fila;
					}
					$this->categoryID = $output["categoryID"];
					$this->name = $output["name"];
					$this->publisherUsername = $output["publisherUsername"];
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
	 * 		Obtains all the categories from the database.
	 * 
	 * Returns:
	 * 	
	 * 		An indexed array with a Category object for each entry retrieved from the database.
	 * 
	 */
	public function retrieveAllDB()
	{
		$output = null;
		try {
			$query = (BdD::$connection)->prepare('
				SELECT categoryID, name, publisherUsername
				FROM CATEGORIES;
			');
			$queryLines = $query->execute();
			if ($queryLines > 0) {
				$query->setFetchMode(PDO::FETCH_ASSOC); 
				$result = $query->fetchAll();
				foreach($result as $line) {
					$output[] = new Category($line);
				}
			}
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}
		return $output;
	}

	/**
	 * Method: insertDB
	 * 
	 * 		Creates a new entry on the CATEGORIES table of the database with the current Category object's properties.
	 * 
	 * Parameters:
	 * 
	 * Returns:
	 * 	
	 * 		The number of lines that have been modified on the database after completing the operation.
	 * 
	 */
	public function insertDB()
	{
		$qFiles = 0;
		try {
			$consulta = (BdD::$connection)->prepare("
				INSERT INTO CATEGORIES(name, publisherUsername)
				VALUES (:name,:publisherUsername);
			");
			$consulta->bindParam('name',$this->name);
			$consulta->bindParam('publisherUsername',$this->publisherUsername);

			$qFiles = $consulta->execute();
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}
		
		return $qFiles;
	}
	
	/**
	 * Method: deleteDB
	 * 
	 * 		Deletes the category entry associated with the values loaded on the current Category object from the database.

	 * Returns:
	 * 	
	 * 		The number of lines that have been modified on the database after completing the operation.
	 * 
	 */
	public function deleteDB()
	{
		$qFiles = 0;
		try {
			$consulta = (BdD::$connection)->prepare("
				DELETE
				FROM CATEGORIES 
				WHERE  categoryID = :categoryID;
			");
			$consulta->bindParam('categoryID',$this->categoryID);

			$qFiles = $consulta->execute();
			$this->idEditorial = null;
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
		}
		
		return $qFiles;
	}
}
?>