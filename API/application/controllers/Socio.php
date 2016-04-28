<?php
class Socio extends CI_Controller {
    //--->

    public function __construct()
    {
        parent::__construct();
        // Your own constructor code
        $this->load->database();
        $this->default= $this->load->database('default', TRUE);

        $this->load->model('socio/Querys');  
        }
    public function index()
    {
        echo '
        <h1>API GYM 1.0</h1>
        <ul>    
            <li>Socio</li>
            <li>socio/viwer/action/one-noimg/tipo/json/filter/week?id_advance=S25bddfgdk,jmhngbfIl</li>
        </ul>
        ';                                   
        }  
    public function Viwer($action,$r_action,$tipo,$r_tipo,$filter,$r_filter)
    {
        //-----> Viwer all no img
            //Sin fotosocio/viwer/action/one-noimg/tipo/json/filter/one/
            //socio/viwer/action/one-noimg/tipo/json/filter/one/?id_advance=1M7p64oQbVUmPvhcYFBG
            if ($r_action == 'one-noimg') 
            {
                if ($r_filter == 'one') {
                    $xr8_data= $xr8_data= $this->Querys->socio_view_one_no_img();
                }elseif ($r_filter == 'two') {
                   $xr8_data= $xr8_data= $this->Querys->socio_view_two_no_img();
                }elseif ($r_filter == 'dos') {
                   $xr8_data= $xr8_data= $this->Querys->socio_view_two_no_img_dos();
                }
            }

            //Sin foto
            if ($r_action == 'one-img') 
            {
               $xr8_data= $this->Querys->socio_view_one_img();
                }   

            //Sin foto
            if ($r_action == 'comentario') 
            {
               $xr8_data= $this->Querys->socio_view_one_comentario();
                }                   

            //-----> Type
            if ($r_tipo == 'html') 
            {

                $data['foto'] =  $xr8_data;

                $this->load->view('socio/img',$data);

                }elseif ($r_tipo == 'json') {

                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  

                    }else{echo"blank";}            
        }     
    public function Historial($action,$r_action,$tipo,$r_tipo)
    {

        //-----> lientes/historial/action/all/tipo/json/
        $xr8_data= $this->Querys->socio_view_historial();   

            //-----> Type
            if ($r_tipo == 'html') 
            {
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        }    
    public function Asistencia($action,$r_action,$tipo,$r_tipo)    
    {
        //-----> lientes/historial/action/all/tipo/json/
        $xr8_data= $this->Querys->socio_view_asistencia();   

            //-----> Type
            if ($r_tipo == 'html') 
            {
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        }

    //--->
    }  