<?php

class Ventas extends CI_Controller {

    public function __construct(){
        parent::__construct();
            // Your own constructor code
            $this->load->database();
            $this->default= $this->load->database('default', TRUE);

            $this->load->model('ventas/Querys');  

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
    
    public function Viwer($tipo,$r_tipo,$action,$r_action){

        if ($r_action == 'vapor') {
            //-----> Viwer all
                $xr8_data= $this->Querys->vapor();
        }

        if ($r_action == 'membresia') {
            //-----> Viwer all
                $xr8_data= $this->Querys->membresia();
        }

        if ($r_action == 'productos') {
            //-----> Viwer all
                $xr8_data= $this->Querys->productos();
        }

        if ($r_action == 'servicios') {
            //-----> Viwer all
                $xr8_data= $this->Querys->servicios();
        }

        //ALL
        if ($r_action == 'all_sum') {
            //-----> Viwer all
            $xr8_data= $this->Querys->all_sum();
            }

        
        //ALL
        if ($r_action == 'all') {
            //-----> Viwer all
            $xr8_data= $this->Querys->all();
            }


        //Todo
        if ($r_action == 'todo') {
            //-----> Viwer all
            $xr8_data= $this->Querys->todo();
            }

        //Total
        if ($r_action == 'todogroup') {
            //-----> Viwer all
            $xr8_data= $this->Querys->todo2();
            }

        //Folio
        if ($r_action == 'folio') {
            //-----> Viwer all
            $xr8_data= $this->Querys->folio();
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