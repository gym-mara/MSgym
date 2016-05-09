<?php
class Suscripcion extends CI_Controller {

    public function __construct()
    {
            parent::__construct();
            // Your own constructor code

            $this->load->database();
            $this->default= $this->load->database('default', TRUE);

            $this->load->model('suscripcion/Querys');  
    }

    public function index()
    {
        echo '
        <h1>API GYM 1.0</h1>
        <ul>    
            <li>Viwer</li>
            <li><a href="http://localhost/server/XR8/GYM/WEB/API/index.php/clientes/viwer/action/all/tipo/json">all</a>              : http://localhost/server/XR8/GYM/WEB/API/index.php/clientes/viwer/action/all/tipo/json</li>
            <li><a href="http://localhost/server/XR8/GYM/WEB/API/index.php/clientes/viwer/action/all-noimg/tipo/json">all no img </a>: http://localhost/server/XR8/GYM/WEB/API/index.php/clientes/viwer/action/all-noimg/tipo/json</li>
        </ul>
        ';                                   
    }    

    /*  Viwer
            all        :http://localhost/server/XR8/GYM/WEB/API/index.php/suscripcion/viwer/action/all/tipo/json
            Update     :suscripcion/update/action/update/tipo/json
    */

    public function Viwer($action,$r_action,$tipo,$r_tipo)
    {
        //-----> Viwer all
            if ($r_action == 'all')
            {
                //----->
                $xr8_data= $this->Querys->suscripcion_view_all();   
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

    public function Update($action,$r_action,$tipo,$r_tipo)
    {

        $id_advance_cliente = $_GET['id_advance_cliente'];
        $json_membresia_id  = $_GET['json_membresia_id'];

        $fecha_inicio       = date("Y-m-d");
        $fecha_proxima      = date('Y-m-d', strtotime('+30 days')) ;

        /*  Tabla  => gym_clientes
            Campos => id - id_advance - nombre - sexo - foto - membresia - codebar - telefono - cel - email - fecha_nacimiento - direccion            
        */
        $data_gym_clientes = array(
            'membresia' => $json_membresia_id
        );               
        $xr8_data = $this->Querys->suscripcion_gym_clientes($data_gym_clientes,$id_advance_cliente);  

        /*  Tabla  => gym_suscripcion
            Campos => id - id_advance - id_advance_trabajador - id_advance_cliente - id_advance_membresia - fecha_inicio - fecha_proxima - pago
        */
        $data_gym_suscripcion = array(
            'id_advance_cliente'       => $id_advance_cliente,
            'fecha_inicio'             => $fecha_inicio,
            'fecha_proxima'            => $fecha_proxima, 
            'pago'                     => '1'
        );               
        $xr8_data = $this->Querys->suscripcion_gym_suscripcion($data_gym_suscripcion,$id_advance_cliente); 

        /*  Tabla  => gym_suscripcion_historial
            Campos => id - id_advance - id_advance_trabajador - id_advance_cliente - id_advance_membresia - fecha_inicio - fecha_proxima - pago
        */
        $data_gym_suscripcion_historial = array(
            'id_advance_cliente'       => $id_advance_cliente,
            'id_advance_membresia'     => $json_membresia_id,
            'fecha_inicio'             => $fecha_inicio,
            'fecha_proxima'            => $fecha_proxima, 
            'pago'                     => '1'
        );              
        $xr8_data = $this->Querys->suscripcion_gym_suscripcion_historial($data_gym_suscripcion_historial);
        
            //-----> Type
            if ($r_tipo == 'html') 
            {
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
    }  

    public function Socio($action,$r_action,$tipo,$r_tipo)
    {
        //-----> Viwer all
        if ($r_action == 'one'){
            $xr8_data= $this->Querys->suscripcion_view_one();
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