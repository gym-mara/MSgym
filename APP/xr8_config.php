<?php 
/*
|--------------------------------------------------------------------------
| XR8 CONFIG APP
|--------------------------------------------------------------------------
|
|
*/

date_default_timezone_set('America/Mexico_City');

//Local or Internet
define("ZONA","local");
define("ZONADB","local");
define("TITLE","local");

if (ZONA == "local") {
	define('INDEX_PAGE','index.php');
	}else{
		define('INDEX_PAGE','');
		}

if (ZONA == "local") {
	define("BASE_APP","//localhost/server/XR8/MSgym/APP/");
	}else{
		define("BASE_APP","http://app.gymh2o.com/");
		}

if (ZONA == "local") {
	define("BASE_API","//localhost/server/XR8/MSgym/APP/");
	}else{
		define("BASE_API","http://app.gymh2o.com/");
		}

if (ZONA == "local") {
	define("BASE_CDN","//localhost/server/XR8/MSgym/CDN/");
	}else{
		define("BASE_CDN","http://cdn.gymh2o.com/"); 
		}

if (ZONADB == "local") {

	define("BASE_HOSTNAME","localhost");
	define("BASE_USERNAME","root");
	define("BASE_PASSWORD","");
	define("BASE_DATEBASE","gymh2o");

        }else if (ZONADB == "INTERNET") {
        	
        	// mysql.us.cloudlogin.co 198.23.53.110:3306
			define("BASE_HOSTNAME","mysql.us.cloudlogin.co");
			define("BASE_USERNAME","luxza_gymh2o");
			define("BASE_PASSWORD","12345aeiou");
			define("BASE_DATEBASE","luxza_gymh2o");

	        }else{

				define("BASE_HOSTNAME","dvrviena.sytes.net");
				define("BASE_USERNAME","biohizard");
				define("BASE_PASSWORD","12345aeiou");
				define("BASE_DATEBASE","gymh2o");

	                }                