<?php

//valors per defecte
define('WEBBASE', $_SERVER['REQUEST_SCHEME'] . "://linkyard.daw.institutmontilivi.cat/");
define('DIRBASE', "/var/www/");
define('WEBROOT', str_replace("index.php", "", $_SERVER["SCRIPT_NAME"]));
define('ESTILS', "./styles");
define('PGDEFAULT', "Link");
define('ERRDEFAULT', "./error.html");
define('TITOL', "Benvinguts !!!!");
define('DESCRIPCIO', "... a exemple MVC ...");

/**
 * 	Funció que treu WEBROOT de la URL
 **/
function treuWEBROOT($cadena)
{
	if (stripos($cadena, WEBROOT) == 0) {
		$retorn = substr($cadena, strlen(WEBROOT));
	} else {
		$retorn = $cadena;
	}
	return $retorn;
}

function autoloadFunction($class)
{
	// Ends with a string "Controller"?
	if (($class == "Controller") or ($class == "RouterController") or ($class == "BdD"))
		$dirClass = "../vendors/me/";
	else if (preg_match('/.Controller$/', $class))
		$dirClass = str_replace("Controller", "", $class) . "/controllers/";
	else
		$dirClass = str_replace("Manager", "", $class) . "/models/";
	require("./bundle/" . $dirClass . $class . ".php");
}

// Afegit per Twig
require_once './vendors/Twig/Autoloader.php';
Twig_Autoloader::register();
spl_autoload_register("autoloadFunction");
?>