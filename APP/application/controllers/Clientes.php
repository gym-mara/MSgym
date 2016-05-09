<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Clientes extends CI_Controller {

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
	public function index()
	{
		$data['title']    = "GYM H2O";
		$data['subtitle'] = "Inicio";
		$data['js']       = "clientes";
		$data['gym']      = "gym/H2O";

		$this->load->view('loop/header',$data);

			$this->load->view('loop/menu2',$data);			
			$this->load->view('clientes/clientes',$data);	

		$this->load->view('loop/foot',$data);	
	}
}