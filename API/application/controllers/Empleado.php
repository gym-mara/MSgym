<?php

class Empleado extends CI_Controller {

    public function __construct(){
        parent::__construct();
            // Your own constructor code
            $this->load->database();
            $this->default= $this->load->database('default', TRUE);

            $this->load->model('empleado/Querys');  
            $this->load->library('encrypt');
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

    public function Viwer($action,$r_action,$tipo,$r_tipo){
        //-----> Viwer all
                $xr8_data= $this->Querys->empleadoviwer();

            //-----> Type
            if ($r_tipo == 'html'){
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        }

    public function Newitem($action,$r_action,$tipo,$r_tipo){
        //-----> Viwer all
            if ($r_action == 'one'){  
                $xr8_data= $this->Querys->empleadonew();
                }  

            //-----> Type
            if ($r_tipo == 'html'){
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        } 

    public function Updateitem($tipo,$r_tipo){

        $xr8_data= $this->Querys->empleadoupdate();

            //-----> Type
            if ($r_tipo == 'html'){
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        } 
   
    public function Search($action,$r_action,$tipo,$r_tipo){

        //-----> Viwer all
            if ($r_action == 'query'){    
                //----->
                $xr8_data= $this->Querys->empleado_search_find_nombre();   
                
                if ($xr8_data == false) {
                    $xr8_data= $this->Querys->empleado_search_find_cb();   
                    }    
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

    public function Asistencia($tipo,$r_tipo){
        
        $cb             = $_POST['cb'];
        $id_advance     = $_POST['id_advance'];
        $peronaltimenow = $_POST['peronaltimenow'];

        $xr8_data= $this->Querys->asistencia_new_one($cb,$id_advance,$peronaltimenow);
    
            //-----> Type
            if ($r_tipo == 'html') 
            {
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        
        }  

    public function Asistenciahoy($tipo,$r_tipo){
        
        $xr8_data= $this->Querys->asistencia_hoy();
    
            //-----> Type
            if ($r_tipo == 'html') {
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}

        }  

    public function Listaasistenciapersonal($tipo,$r_tipo){

        $xr8_data= $this->Querys->listaasistenciapersonal();
    
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