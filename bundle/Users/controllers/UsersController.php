<?php

/**
 * Class: UserController
 * A class that manages new users
 */
class UsersController extends Controller
{
	/**
	 * Function: process
	 * Get the information from forms of login or sign up and create an User type object
	 */
	public function process($params)
	{
		$user = new UsersManager();
		if (isset($params)) {
			switch ($params[0]) {
				//Comprovem si hem passat formulari de identificació 
				case 'login':
					if (isset($_POST))
						$user->logIn($_POST['username'], $_POST['password']);
					Users::redirect(PGDEFAULT);
					break;
				//Comprovem si hem passat formulari de registre
				case 'signup':
					if (isset($_POST)) {
						if ( !$user->CheckIfUserIsRegistered($_POST["username"]) ) {
							$user->Update($_POST);
							$user->signUp($_POST);
						}
					}
					Users::redirect(PGDEFAULT);
					break;
				case 'logout':
					$user->logOut();
					Users::redirect(PGDEFAULT);
					break;
				default:
					# code...
					break;
			}
		}
	}

}