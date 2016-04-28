<?php

class Almacen extends CI_Controller {

    public function __construct(){
        parent::__construct();
            // Your own constructor code
            $this->load->database();
            $this->default= $this->load->database('default', TRUE);

            $this->load->model('almacen/Querys');  

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

    public function Viwer($tipo,$r_tipo){
        //-----> Viwer all
                $xr8_data= $this->Querys->all();
            //-----> Type
            if ($r_tipo == 'html') 
            {
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}                
        }

    public function Historial($tipo,$r_tipo){
        //-----> Viwer all
                $xr8_data= $this->Querys->historial();
            //-----> Type
            if ($r_tipo == 'html') 
            {
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}                
        }
    public function Historialgroup($tipo,$r_tipo){
        //-----> Viwer all
                $xr8_data= $this->Querys->historiagroup();
            //-----> Type
            if ($r_tipo == 'html') 
            {
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}                
        }
    public function Historialgroupci($tipo,$r_tipo){
        //-----> Viwer all
                $xr8_data= $this->Querys->historiagroupci();
            //-----> Type
            if ($r_tipo == 'html') 
            {
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}                
        }        

    public function Historialci($tipo,$r_tipo){
        //-----> Viwer all
                $xr8_data= $this->Querys->historialci();
            //-----> Type
            if ($r_tipo == 'html') 
            {
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}                
        }        

    public function Newitem($tipo,$r_tipo){
        
        //-----> Viwer all
                $xr8_data= $this->Querys->almacennew();

            //-----> Type
            if ($r_tipo == 'html'){
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        } 

    public function Newitemci($tipo,$r_tipo){
        
        //-----> Viwer all
            $xr8_data= $this->Querys->almacennewci();

            //-----> Type
            if ($r_tipo == 'html'){
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{/*echo"blank";*/}
        } 

    public function ViwerOne($tipo,$r_tipo){
        //-----> Viwer all
                $xr8_data= $this->Querys->allone();
            //-----> Type
            if ($r_tipo == 'html') 
            {
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}                
        }

    public function Update($tipo,$r_tipo){
        
        //-----> Viwer all
                $xr8_data= $this->Querys->almacenupdate();

            //-----> Type
            if ($r_tipo == 'html'){
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{}
        } 

    public function Delete($tipo,$r_tipo){
        
        //-----> Viwer all
                $xr8_data= $this->Querys->almacendelete();

            //-----> Type
            if ($r_tipo == 'html'){
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        }

    public function SearchtransFerencia($tipo,$r_tipo){
       //-----> Transferencia
        $xr8_data= $this->Querys->search_transferencia_cb();   

        if ($xr8_data==false) {
            $xr8_data= $this->Querys->search_transferencia_nombre();
        }

        //-----> Membrecia
        if ($xr8_data==false) {
            $xr8_data= $this->Querys->search_gym_membresia_nombre();
        }

        //-----> Vapor
        if ($xr8_data==false) {
            $xr8_data= $this->Querys->search_gym_vapor_nombre();
        }

            //-----> Type
            if ($r_tipo == 'html'){
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}

        }

    public function Venta($tipo,$r_tipo,$transferencia,$transferencia_r){
        
        if ($transferencia_r=='vapor') {
            $xr8_data= $this->Querys->venta_almacen_vapor();   
        }

            //-----> Type
            if ($r_tipo == 'html') 
            {
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}

        
        }

}