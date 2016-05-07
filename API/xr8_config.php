<?php 
/*
|--------------------------------------------------------------------------
| XR8 CONFIG API
|--------------------------------------------------------------------------
|
|
*/

date_default_timezone_set('America/Mexico_City');

//Local or Internet
define("ZONA","local");
define("ZONADB","local");

define("TITLE", "MaraSport");

if (ZONA == "local") {
	define('INDEX_PAGE','index.php');
	}else{
		define('INDEX_PAGE','');
		}
if (ZONA == "local") {
	define("BASE_DIR","//localhost/server/XR8/MSgym/");
	}else{
		}
if (ZONA == "local") {
	define("BASE_APP","//localhost/server/XR8/MSgym/APP/");
	}else{
		}

if (ZONA == "local") {
	define("BASE_API","//localhost/server/XR8/MSgym/API/");
	}else{
		}

if (ZONA == "local") {
	define("BASE_CDN","//localhost/server/XR8/MSgym/CDN/");
	}else{
		}


if (ZONADB == "local") {

	define("ZONADB_HOSTNAME","localhost");
	define("ZONADB_USERNAME","root");
	define("ZONADB_PASSWORD","");
	define("ZONADB_DATABASE","marasport");

        }else if (ZONADB == "INTERNET") {
	        }else{
	        	}