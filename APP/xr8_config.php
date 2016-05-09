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
	}else{}

if (ZONA == "local") {
	define("BASE_API","//localhost/server/XR8/MSgym/APP/");
	}else{}

if (ZONA == "local") {
	define("BASE_CDN","//localhost/server/XR8/MSgym/CDN/");
	}else{}

if (ZONADB == "local") {
	define("BASE_HOSTNAME","localhost");
	define("BASE_USERNAME","root");
	define("BASE_PASSWORD","");
	define("BASE_DATEBASE","gymh2o");
	}else if (ZONADB == "INTERNET") {}else{}                