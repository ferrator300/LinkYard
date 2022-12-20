<?php
//
// fitxer de dades
//

/*	
Class: Users
A class that manages new users
*/
class Users
{
	//camps de dades
	var $username;
	var $name;
	var $surname;
	var $password;
	var $email;
	var $signUpDate;

	/*	
	Constructor: Constructor
	Initializes a new user by using the <Update> function.
	Parameters: 
	$valors - Define an array with all data with we want create the user. If not defined, *NULL* will be assigned.
	*/
	function __construct($valors = null)
	{
		if ($valors == null) {
			$this->username = null;
			$this->name = null;
			$this->surname = null;
			$this->password = null;
			$this->email = null;
			$this->signUpDate = null;
		} else
			$this->Update($valors);
	}

	/**
	 * Function: Destructor
	 * Unitializes the User and saves the data on a COOKIE variable.
	 */
	function __destruct()
	{
		if ($this->username != null) {
			session_start();
			setcookie("user", serialize($this->get_Data()), time() + (3600 * 24), "/");
			$_SESSION['user'] = $this->get_Data();
		}
	}

	/**
	 * Function: redirect
	 * Redirect to other bundle
	 */
	static function redirect($url)
	{
		header('Location: ' . WEBROOT . $url);
		header('Connection: close');
		exit;
	}
	/*
	Function: logOut
	Destroy the session of the actual user
	*/
	public function logOut()
	{
		setcookie("user", serialize($this->get_Data()), time() - 360000, "/");
		unset($_COOKIE["user"]);
		unset($_SESSION["user"]);
		session_destroy();
	}

	/**
	 * Function: restoreUser
	 * Check cookies and session variables, if they exist, update the user with the data from them.
	 * 
	 * Returns:
	 * A user object with new properties recovered from cookies or session variables
	 */

	public function restoreUser()
	{
		if (isset($_SESSION['user'])) {
			$this->Update($_SESSION['user']);
			return true;
		} else if (isset($_COOKIE['user'])) {
			$this->Update(unserialize($_COOKIE['user']));
			return true;
		} else
			return false;
	}

	/* 
	Function: Update
	Assign new values to the properties of the actual object.
	
	Parameters:
	
	$valors - Array with values of each propertie wanted [$username, $name, $surname, $password, $email, $signUpDate].
	
	See Also:
	
	The properties *name*, *surname* can have *NULL* value assigned.
	The propertie *signUpDate* is handled automatically by Javascript on client side.
	*/
	public function Update($valors)
	{
		try {
			if (is_array($valors)) {
				if (isset($valors["username"]))
					$this->username = $valors["username"];
				if (isset($valors["name"]))
					$this->name = $valors["name"];
				else
					$this->name = null;
				if (isset($valors["surname"]))
					$this->surname = $valors["surname"];
				else
					$this->surname = null;
				if (isset($valors["password"]))
					$this->password = $valors["password"];
				if (isset($valors["signUpDate"]))
					$this->signUpDate = $valors["signUpDate"];
				if (isset($valors["email"]))
					$this->email = $valors["email"];
			}
		} catch (PDOException $th) {
			echo "ERROR at function Update from class Users: " . $th->getMessage();
		}
	}

	//Function: set_[property]
	//Assign a new value to the specified property
	public function set_username($val)
	{
		try {
			if ($val)
				$this->username = $val;
		} catch (PDOException $th) {
			echo "ERROR at function set_username from class Users: " . '<br>' . $th->getMessage();
		}
	}
	public function set_name($val = null)
	{
		try {
			if ($val)
				$this->name = $val;
		} catch (PDOException $th) {
			echo "ERROR at function set_name from class Users: " . '<br>' . $th->getMessage();
		}
	}
	public function set_surname($val = null)
	{
		try {
			if ($val)
				$this->username = $val;
		} catch (PDOException $th) {
			echo "ERROR at set_username from class Users: " . '<br>' . $th->getMessage();
		}
	}
	public function set_password($val)
	{
		try {
			if ($val)
				$this->username = $val;
		} catch (PDOException $th) {
			echo "ERROR at set_password from class Users: " . '<br>' . $th->getMessage();
		}
	}
	public function set_email($val)
	{
		try {
			if ($val)
				$this->email = $val;
		} catch (PDOException $th) {
			echo "***ERROR at set_email from class Users:***" . '<br>' . $th->getMessage();
		}
	}
	public function set_signUp($val)
	{
		try {
			if ($val)
				$this->signUpDate = $val;
		} catch (PDOException $th) {
			echo "ERROR at set_signUp from class Users: " . '<br>' . $th->getMessage();
		}
	}

	/*
	Function: get_Data
	Return an Array with all properties of the object
	*/
	public function get_Data()
	{
		return array(
			"username" => $this->username,
			"name" => $this->name,
			"surname" => $this->surname,
			"email" => $this->email,
			"signUpDate" => $this->signUpDate
		);
	}

	/*
	Function: get_[property]
	Return the value of the specified property
	*/
	public function get_username()
	{
		return ($this->username);
	}
	public function get_name()
	{
		return ($this->name);
	}
	public function get_surname()
	{
		return ($this->surname);
	}
	public function get_email()
	{
		return ($this->email);
	}
	public function get_password()
	{
		return ($this->password);
	}
	public function get_signUp()
	{
		return ($this->signUpDate);
	}

}
?>