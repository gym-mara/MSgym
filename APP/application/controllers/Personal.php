<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Personal extends CI_Controller {

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
		$data['subtitle'] = "Personal";
		$data['js']       = "personal";
		$data['gym']      = "gym/H2O";

		$this->load->view('loop/header',$data);

			$this->load->view('loop/menu2',$data);			
			$this->load->view('personal/informes',$data);
			$this->load->view('personal/nuevo',$data);
			$this->load->view('personal/actualizar',$data);

		$this->load->view('loop/foot',$data);	
	}
}