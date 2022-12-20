<?php
/*	
Class: UsersManager
A class that connects Databse with Users bundle
*/
class UsersManager extends Users
{
	/**
	 * Function: signUp
	 * Inserts the User object into the Database.
	 * 
	 * Parameters:
	 * 
	 * $values - Array with values of each propertie defined [$username, $name, $surname, $password, $email, $signUpDate].
	 * 
	 * Returns:
	 * 
	 * *true* if the new user was succefully sign up. 
	 * *false* if the user already exists.
	 * 
	 */
	public function signUp()
	{
		$SQL = "INSERT INTO USERS (username, password, email, name, surname, signUpDate) VALUES(:username, :password, :email, :name, :surname, :signUpDate)";

		try {

			$query = (BdD::$connection)->prepare($SQL);
			$query->bindParam('username', $this->username);
			$query->bindParam('password', $this->password);
			$query->bindParam('email', $this->email);
			$query->bindParam('name', $this->name);
			$query->bindParam('surname', $this->surname);
			$query->bindParam('signUpDate', $this->signUpDate);

			//Realitzem nova entrada a la Base de Dades
			$queryLines = $query->execute();
			return $queryLines;

		} catch (PDOException $e) {
			echo "***Error at function signUp at UsersManager.php***: " . "<br>" . $e->getMessage();
		}
	}

	/**
	 * Function: logIn
	 * Identifies the User object into the Database.
	 * 
	 * Parameters:
	 * 
	 * $username - value of the username that the user enter.
	 * $password - value of the password that the user enter.
	 * 
	 * Returns:
	 * 
	 * *true* if the new user was succefully login. 
	 * *false* if the user not exists.
	 * 
	 */
	public function logIn($username, $password)
	{
		$SQL = "SELECT COUNT(*) 'USERS' FROM USERS WHERE username = :username AND password = :password";

		try {
			//Comprovem si l'usuari ja existeix comprovant a la base de dades
			$query = (BdD::$connection)->prepare($SQL);
			$query->bindParam('username', $username);
			$query->bindParam('password', $password);
			$queryLines = $query->execute();
			if ($queryLines > 0) {
				$query->setFetchMode(PDO::FETCH_ASSOC);
				$result = $query->fetchAll();
				foreach ($result as $fila) {
					$answer = $fila;
				}
			}
			if ($answer['USERS'] != 0) {
				$this->update($this->returnDataFromDb($username));
				return true;
			} else
				return false;

		} catch (PDOException $e) {
			echo "***Error at function logIn at class UsersManager***: " . "<br>" . $e->getMessage();
		}
	}

	/**
	 * Function: CheckIfUserIsRegistered
	 * Checks if a user is already registered on the database.
	 * 
	 * Parameters:
	 * 
	 * $username - value of the username entered by the user on the signup form.
	 * 
	 * Returns:
	 * 
	 * *true* if the user exits. 
	 * *false* if the user doesn't exist.
	 * 
	 */
	public function CheckIfUserIsRegistered($username)
	{
		$SQL = "SELECT COUNT(*) 'USERS' FROM USERS WHERE username = :username";

		try {
			//Comprovem si l'usuari ja existeix comprovant a la base de dades
			$query = (BdD::$connection)->prepare($SQL);
			$query->bindParam('username', $username);
			$queryLines = $query->execute();
			if ($queryLines > 0) {
				$query->setFetchMode(PDO::FETCH_ASSOC);
				$result = $query->fetchAll();
				foreach ($result as $fila) {
					$answer = $fila;
				}
			}
			if ($answer['USERS'] != 0) {
				return true;
			} else
				return false;

		} catch (PDOException $e) {
			echo "***Error at function logIn at class UsersManager***: " . "<br>" . $e->getMessage();
		}
	}

	/**
	 * Function: *STATIC* returnUser
	 * Return data from the Databse of a user, asked by his username
	 * 
	 * Parameters:
	 * 
	 * $username - username of the user that we want
	 * 
	 * Returns:
	 * 
	 * An array with all data of the query
	 * 
	 */
	private function returnDataFromDb($username)
	{
		$answer = null;
		$SQL = "SELECT * FROM USERS WHERE username = :username";
		try {
			$query = (BdD::$connection)->prepare($SQL);
			$query->bindParam('username', $username);
			$queryLines = $query->execute();
			if ($queryLines > 0) {
				$query->setFetchMode(PDO::FETCH_ASSOC);
				$result = $query->fetchAll();
				foreach ($result as $fila) {
					$answer = $fila;
				}
			}
		} catch (PDOException $e) {
			echo "***Error at function returnUser at UsersManager.php***: " . "<br>" . $e->getMessage();
		}
		return $answer;
	}
}
?>