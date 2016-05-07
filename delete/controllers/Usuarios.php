<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuarios extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
    public function __construct(){
        parent::__construct();
        // Your own constructor code
        $this->load->database();
        $this->default= $this->load->database('default', TRUE);

        $this->load->model('Usuarios/Querys');  
        }	
	public function index(){

		ssdestruir();

		$data['title']    = "GYM H2O";
		$data['subtitle'] = "Inicio";
		$data['js']       = "usuarios";

			$this->load->view('loop/header',$data);
				$this->load->view('usuarios/inicio');
			$this->load->view('loop/foot',$data);

		}
		
	/*
	public function inicio(){
		$data['title']    = "GYM H2O";
		$data['subtitle'] = "Inicio";
		$data['js']       = "welcome";

		$this->load->view('loop/header',$data);

			$this->load->view('welcome_message');
		
		$this->load->view('loop/foot',$data);	
		}	
	*/
	
	public function entrar(){

		$data['title']    = "GYM H2O";
		$data['subtitle'] = "Inicio";
		$data['js']       = "welcome";
		$data['r_tipo']   = "json";

		//---> form -> $_POST -> DB
		$session_data = $this->Querys->session_in_one(); 
		
		//----> step 1 user == user & password ==password
		//$ssnuevo = ssnuevo($session_data);

		if ($session_data == "" or empty($session_data)) {
			
			header("Location: ".site_url('usuarios/'));
			exit; 
			
			}else{

				ssnuevo($session_data);

				header("Location: ".site_url('inicio/'));
				exit; 

						//$this->load->view('usuarios/entrar',$data);		

				}  



		}	

	public function salir(){
		sssalir();
		}			

}
;