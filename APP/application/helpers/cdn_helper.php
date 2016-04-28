<?php 
	function cdn(){
		
		if (ZONA == "local") {
			$url_cdn = "http://localhost/MaraSport/CDN/";
			}else{}

		 return $url_cdn;
	}