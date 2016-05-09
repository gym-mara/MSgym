<?php 

	function ssnuevo($session_data){
		
		session_start();

		$_SESSION['login'] = True;
		$_SESSION['data']  = $session_data ;
		$_SESSION['inicio_session']  = date("Y-m-d H:m") ;

			if (empty($_SESSION['count'])) {
				$_SESSION['count'] = 1;
				}else{
					$_SESSION['count']++;
					}
		}

	function ssvalidar(){
		
		session_start();
		
		$data['session']  = $_SESSION;	
		$login_true       = $data['session']['login'];

		if ($login_true != 1) {
			session_start();
			session_destroy();
				header("Location: ".site_url('usuarios/'));
				exit;
			}

		}
	
	function ssdestruir(){
		session_start();
		session_destroy();
		}	
			
	function sssalir(){
		session_start();
		session_destroy();
			header("Location: ".site_url('usuarios/'));
			exit;
		}					