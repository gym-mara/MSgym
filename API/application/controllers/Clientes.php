<?php

class Clientes extends CI_Controller {

    public function __construct(){
        parent::__construct();
            // Your own constructor code
            $this->load->database();
            $this->default= $this->load->database('default', TRUE);

            $this->load->model('clientes/Querys');  
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

    public function Viwer($action,$r_action,$tipo,$r_tipo,$filter,$r_filter){
        //-----> Viwer all
            if ($r_action == 'all')
            {
                //----->
                $xr8_data= $this->Querys->clientes_view_all();   
            }     

        //-----> Viwer all no img
            if ($r_action == 'all-noimg') 
            {
                if ($r_filter =="week") {

                    //----->
                    $date      = new DateTime(date("y-m-d"));
                    $week_now  = $date->format("W");

                    //helpers fechas
                    $week_array = getStartAndEndDate($week_now,2015);

                    //----->
                    $xr8_data= $this->Querys->clientes_view_all_no_img_week($week_array); 
                    
                }else{
                    
                    if ($r_filter =="none") {

                        //----->
                        $xr8_data= $this->Querys->clientes_view_all_no_img();

                    }else{$xr8_data= "Error xr80000002";}

                    $xr8_data= "Error xr80000001";
                }
            }                    

        //-----> Viwer all no img
        ///clientes/viwer/action/all-noimg-one/tipo/json/filter/none/
            if ($r_action == 'all-noimg-one') 
            {

               if ($r_filter =="none") {

                    $xr8_data = $this->Querys->clientes_view_one_no_img();
                   //$xr8_data = "erro 0000000006";

                }elseif($r_filter =="cb") {

                    //----->
                    
                    $xr8_data= $this->Querys->clientes_view_one_no_img_cb();
                }else{$xr8_data= "Error xr80000003";}
            }    

        //-----> Viwer all no img
            if ($r_action == 'one-noimg') 
            {
                $xr8_data= $xr8_data= $this->Querys->clientes_view_one_no_img();

                }   
        //-----> Viwer Nuevos
            if ($r_action == 'info-nuevos') 
            {
                $xr8_data= $xr8_data= $this->Querys->clientes_info_nuevo();
                }

        //-----> Viwer Nuevos
            if ($r_action == 'info-cumpleannos') 
            {
                $xr8_data= $xr8_data= $this->Querys->clientes_info_cumpleannos();
                }

        //-----> Viwer Nuevos
            if ($r_action == 'info-pagado') 
            {
                $xr8_data= $xr8_data= $this->Querys->clientes_info_pagado();
                }

        //-----> Viwer Nuevos
            if ($r_action == 'info-pendientes') 
            {
                $xr8_data= $xr8_data= $this->Querys->clientes_info_pen();
                }

        //-----> Viwer Nuevos
            if ($r_action == 'info-inactivos') 
            {
                $xr8_data= $xr8_data= $this->Querys->clientes_info_inactivos();
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

    public function Newitem($action,$r_action,$tipo,$r_tipo){
        //-----> Viwer all
            if ($r_action == 'one'){  
                $xr8_data= $this->Querys->cliente_new_one();
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
   
    public function Updateitem($action,$r_action,$tipo,$r_tipo){
        //-----> Viwer all
            if ($r_action == 'one')
            {  
                $xr8_data= $this->Querys->cliente_update_one();
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

    public function Search($action,$r_action,$tipo,$r_tipo){

        //-----> Viwer all
            if ($r_action == 'query'){   
                $query = $_GET['term'];                
                //----->
                $xr8_data= $this->Querys->clientes_search_find($query);   
                }     

        //-----> Viwer all
            if ($r_action == 'query_cb'){   
                
                //-----> clientes/search/action/query_cb/tipo/json
                 $xr8_data= $this->Querys->clientes_search_find_id();


                if ($xr8_data == false) {
                    $xr8_data= $this->Querys->clientes_search_find_nombre();
                    } 

                }  

            //-----> Type
            if ($r_tipo == 'html') {
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        }  

    public function Historial($action,$r_action,$tipo,$r_tipo){

        //-----> lientes/historial/action/all/tipo/json/
        $xr8_data= $this->Querys->clientes_view_historial();   

            //-----> Type
            if ($r_tipo == 'html') 
            {
                echo "html";
                }elseif ($r_tipo == 'json') {
                    //----->json
                    $this->output->set_content_type('application/json')->set_output(json_encode($xr8_data));  
                    }else{echo"blank";}
        }

    public function Asistencia($action,$r_action,$tipo,$r_tipo){
        //-----> lientes/historial/action/all/tipo/json/ 
        $xr8_data= $this->Querys->clientes_view_asistencia();   

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