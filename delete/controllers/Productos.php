<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Productos extends CI_Controller {

    public function __construct(){
        
        parent::__construct();
		ssvalidar();

        }	
	public function index(){	
		
		$data['title']    = "GYM H2O";
		$data['subtitle'] = "Transferencia";
		$data['js']       = "productos";
		$data['gym']      = "gym/H2O";
		
		$this->load->view('loop/header',$data);
		$this->load->view('loop/menu2',$data);	
		$this->load->view('productos/inicio',$data);	

		$this->load->view('loop/foot',$data);	
		}
	public function historial(){	
		
		$data['title']    = "GYM H2O";
		$data['subtitle'] = "Historial";
		$data['js']       = "productos";
		$data['gym']      = "gym/H2O";
		
		$this->load->view('loop/header',$data);
		$this->load->view('loop/menu2',$data);	
		$this->load->view('productos/historial',$data);	
			

		$this->load->view('loop/foot',$data);	
		}		

}