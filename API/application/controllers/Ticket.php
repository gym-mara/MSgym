<?php

class Ticket extends CI_Controller {

    public function __construct(){
        parent::__construct();
            // Your own constructor code
            $this->load->database();
            $this->default= $this->load->database('default', TRUE);

            $this->load->model('ticket/Querys');  

        }

    public function index(){
        echo '
        <h1>API GYM 1.0</h1>
        <ul>    
            <li>Viwer</li>
            <li><a href="http://localhost/server/XR8/GYM/WEB/API/index.php/clientes/viwer/action/all/tipo/json">all</a>              : http://localhost/server/XR8/GYM/WEB/API/index.php/clientes/viwer/action/all/tipo/json</li>
            <li><a href="http://localhost/server/XR8/GYM/WEB/API/index.php/clientes/viwer/action/all-noimg/tipo/json">all no img </a>: http://localhost/server/XR8/GYM/WEB/API/index.php/clientes/viwer/action/all-noimg/tipo/json</li>
        </ul>
        ';                                   
        }  

    public function Newitem($tipo,$r_tipo){
       
        //-----> Viwer all
                $xr8_data= $this->Querys->ticketnew();

            //-----> Type
            if ($r_tipo == 'html'){
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        } 

    public function Newitemdos($tipo,$r_tipo){
        //-----> Viwer all
                $xr8_data= $this->Querys->ticketnew2();

            //-----> Type
            if ($r_tipo == 'html'){
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        }         
    
    public function Newitemtres($tipo,$r_tipo){
        //-----> Viwer all
                $xr8_data= $this->Querys->ticketnew3();

            //-----> Type
            if ($r_tipo == 'html'){
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        }         

    public function Folio($tipo,$r_tipo){
        //-----> Viwer all
                $xr8_data= $this->Querys->ticketfolio();

            //-----> Type
            if ($r_tipo == 'html'){
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        }

    public function Folio2($tipo,$r_tipo){
        //-----> Viwer all
                $xr8_data= $this->Querys->ticketfolio2();

            //-----> Type
            if ($r_tipo == 'html'){
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        }   

    public function Newitemcorte($tipo,$r_tipo){
        //-----> Viwer all
                $xr8_data= $this->Querys->ticketnewcorte();

            //-----> Type
            if ($r_tipo == 'html'){
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        } 

}