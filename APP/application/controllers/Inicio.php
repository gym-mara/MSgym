<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Inicio extends CI_Controller {

    public function __construct(){
        
        parent::__construct();
		ssvalidar();

        }	
	public function index(){	
		
		$data['title']    = "GYM H2O";
		$data['subtitle'] = "Inicio";
		$data['js']       = "inicio";
		$data['gym']      = "gym/H2O";
		
		$this->load->view('loop/header',$data);
			
		
			$this->load->view('loop/menu',$data);		

				$this->load->view('inicio/menu',$data);	

					$this->load->view('inicio/personal/personal',$data);

					$this->load->view('inicio/socio/alta',$data);
					$this->load->view('inicio/socio/asistencia',$data);	
					$this->load->view('inicio/socio/suscripcion',$data);

					//$this->load->view('inicio/productos/ventas',$data);

					//$this->load->view('inicio/caja/ventas',$data);

			/*
			$this->load->view('inicio/dashboard',$data);	
			$this->load->view('inicio/socios',$data);	
			$this->load->view('inicio/personal',$data);	
			$this->load->view('inicio/ventas',$data);	
			*/

		$this->load->view('loop/foot',$data);	
		}

}