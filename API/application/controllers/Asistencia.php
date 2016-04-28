<?php
class Asistencia extends CI_Controller {

    public function __construct(){
        parent::__construct();
        // Your own constructor code
        $this->load->helper('string');
        $this->load->database();
        $this->default= $this->load->database('default', TRUE);

        $this->load->model('asistencia/Querys');  
        }

    public function index(){
        echo '
        <h1>API GYM 1.0</h1>
        ';                                   
        }    

    public function Viwer($action,$r_action,$tipo,$r_tipo){
        //-----> Viwer all
            if ($r_action == 'all')
            {
                //----->
            }    

            if ($r_action == 'count')
            {
                //----->
                $xr8_data=  $this->Querys->asistencias_view_all();   
                $x= count($xr8_data);
                $string=strip_quotes($x);
                $xr8_data = $string;
                
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
    /* 
        NEW
    */

    public function Newitems($action,$r_action,$tipo,$r_tipo){
        

        //-----> Viwer all
            if ($r_action == 'one'){   
                $xr8_data= $this->Querys->asistencia_new_one();
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