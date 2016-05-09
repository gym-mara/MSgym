<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Caja extends CI_Controller {

    public function __construct(){
        
        parent::__construct();
		ssvalidar();

        }	
	public function index(){	
		
		$data['title']    = "GYM H2O";
		$data['subtitle'] = "Inicio";
		$data['js']       = "caja";
		$data['gym']      = "gym/H2O";
		
		$this->load->view('loop/header',$data);
		
			$this->load->view('loop/menu',$data);		

				$this->load->view('caja/caja',$data);		
			$this->load->view('loop/foot',$data);	
		
		}

}