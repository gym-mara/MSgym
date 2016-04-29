<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
    
    /**
    *
    *
    *
    *
    *
    **/

    class Querys extends CI_Model {
        
            function __construct(){
                // Call the Model constructor
                parent::__construct();
                }

            function clientes_view_all(){
                $this->db->select('*');
                $this->db->from('gym_clientes');

                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }
                }
            function clientes_view_all_no_img(){
                $this->db->select('gym_clientes.id,gym_clientes.id_advance,gym_clientes.nombre,gym_suscripcion.fecha_proxima,gym_suscripcion.pago');
                $this->db->from('gym_clientes');
                
                $this->db->join('gym_suscripcion', 'gym_suscripcion.id_advance_cliente = gym_clientes.id_advance');                                
                
                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }                                 
                }
            function clientes_view_all_no_img_week($week_array){

                $this->db->select('*');
                
                $this->db->from('gym_clientes');
                
                $this->db->order_by('fecha_inicio', 'asc');
                
                    $this->db->join('gym_membresia', 'gym_clientes.membresia = gym_membresia.id_advance');                                

                    $this->db->join('gym_suscripcion', 'gym_suscripcion.id_advance_cliente = gym_clientes.id_advance');                                
                  
                        $this->db->or_where('gym_suscripcion.fecha_proxima', $week_array['d']);
                        $this->db->or_where('gym_suscripcion.fecha_proxima', $week_array['l']);
                        $this->db->or_where('gym_suscripcion.fecha_proxima', $week_array['m']);
                        $this->db->or_where('gym_suscripcion.fecha_proxima', $week_array['x']);
                        $this->db->or_where('gym_suscripcion.fecha_proxima', $week_array['j']);
                        $this->db->or_where('gym_suscripcion.fecha_proxima', $week_array['v']);
                        $this->db->or_where('gym_suscripcion.fecha_proxima', $week_array['s']);

                    $query = $this->db->get();
               
                        if ($query->num_rows() > 0) {
                            foreach ($query->result() as $row) {
                                //helpers fechas
                                $row->fecha_nacimiento  = edad($row->fecha_nacimiento);
                                $data[] = $row;
                            }
                                return $data;
                            }else{
                                return false;
                                }                                 
                }   
            function clientes_view_one_no_img(){
                //----->
                $id_advance = $_GET['id_advance'];
                //$id_advance = 'P7xodpXCt9bFhuZvLBlj';

                $this->db->select('*');
                    $this->db->from('gym_clientes');
                    $this->db->where('gym_clientes.id_advance',$id_advance);

                    //$this->db->limit(1);
                    //$this->db->order_by('gym_suscripcion.fecha_proxima', 'DESC');
                        
                        //$this->db->join('gym_suscripcion', 'gym_suscripcion.id_advance_cliente = gym_clientes.id_advance');                                                          
                   /*

                $this->db->join('gym_membresia', 'gym_clientes.membresia = gym_membresia.id_advance');      
                
                */
                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {
                            $row->fecha_nacimiento  = edad($row->fecha_nacimiento);
                            $data[] = $row;
                        }
                            return $data;
                        }else{
                            return false;
                            }  
                }
            function clientes_view_one_no_img_cb(){
                $codebar = $_POST['codebar'];
                
                /*
                gym_clientes
                id - id_advance - nombre - foto - membresia - codebar - telefono - cel - email - fecha_nacimiento

                gym_suscripcion
                id - id_advance - id_advance_trabajador - id_advance_cliente - fecha_inicio - fecha_proxima - pago

                gym_membresia 
                id - id_advance - membresia - precio
                */
               /*                     
                $this->db->select('gym_clientes.id,gym_clientes.id_advance,gym_clientes.nombre,gym_clientes.membresia');
                $this->db->select('gym_suscripcion.fecha_proxima,gym_suscripcion.pago');
                $this->db->select('gym_membresia.membresia,gym_membresia.precio');
                */
                $this->db->select('*');

                    $this->db->from('gym_clientes');
                    
                    $this->db->where('gym_clientes.codebar',$codebar);
                    
                        $this->db->join('gym_suscripcion', 'gym_suscripcion.id_advance_cliente = gym_clientes.id_advance');                                
                        $this->db->join('gym_membresia', 'gym_clientes.membresia = gym_membresia.id_advance');                                
                    
                        $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }  
             }                

            function cliente_new_one(){
                
                $id_advance            = random_string('alnum', 20);
                $id_advance2           = random_string('alnum', 20);
                $id_advance3           = random_string('alnum', 20);
                $id_advance4           = random_string('alnum', 20);
                $id_advance5           = random_string('alnum', 20);
                $id_advance6           = random_string('alnum', 20);
                
                $id_advance_tiket      = random_string('alnum', 20);

                $codebar               = random_string('numeric', 10);

                $fecha_inicio          = date("Y-m-d");
                $fecha_proxima         = date('Y-m-d', strtotime('+30 days')) ;

                $id_advance_trabajador = $_POST['id_advance_trabajador'];
                $nombre                = $_POST['nombre_alta'];
                $nacimiento            = $_POST['i_c_alta_f_nacimiento'];
                $telefono              = $_POST['i_c_alta_telefono'];
                $cel                   = $_POST['i_c_alta_celular'];
                $email                 = $_POST['i_c_alta_email'];
                $membrecia             = $_POST['i_c_alta_membrecia'];
                $membrecia2            = $_POST['i_c_alta_membrecia2'];
                $direccion             = $_POST['i_c_direccion'];
                $sexo                  = $_POST['i_c_radio'];
                $i_c_formfield         = $_POST['i_c_formfield'];

                $nombre = strtolower ($nombre);

                $data1 = array(
                    'id_advance'       => $id_advance,
                    'fecha_registro'   => date("Y-m-d H:m"),
                    'nombre'           => $nombre,
                    'sexo'             => $sexo,
                    'foto'             => $i_c_formfield,
                    'membresia'        => $membrecia,
                    'codebar'          => $codebar,
                    'telefono'         => $telefono,
                    'cel'              => $cel,
                    'email'            => $email,
                    'fecha_nacimiento' => $nacimiento,
                    'direccion'        => $direccion 
                );

                $data2 = array(
                    'id_advance'            => $id_advance2,
                    'id_advance_trabajador' => $id_advance_trabajador,
                    'id_advance_cliente'    => $id_advance,
                    'id_advance_membresia'  => $membrecia,
                    //'fecha_inicio '         => $fecha_inicio,
                    //'fecha_proxima'         => $fecha_proxima,
                    'pago'                  => '1'
                );


                $data3 = array(
                    'id_advance'              => $id_advance3,
                    'id_advance_trabajador'   => $id_advance_trabajador,
                    'id_advance_cliente'      => $id_advance,
                    'id_advance_membresia'    => $membrecia,
                    'fecha_inicio '           => $fecha_inicio,
                    'fecha_proxima'           => $fecha_proxima,
                    'pago'                    => '1'
                );

              
                /*Ticket*/
                $data5 = array(
                    'id_advance'              => $id_advance5,
                    'fecha'                   => date("Y-m-d H:m"),
                    'id_advance_trabajador'   => $id_advance_trabajador
                );  

                $data4 = array(
                    'id_advance'              => $id_advance4,
                    'id_advance_ticket'       => $id_advance5,
                    'fecha'                   => date("Y-m-d H:m"),
                    'id_advance_trabajador'   => $id_advance_trabajador,
                    'nombre_socio'            => $nombre,
                    'concepto'                => $membrecia2
                );                  

                $data6 = array(
                    'id_advance'              => $id_advance6,
                    'id_advance_socio'       => $id_advance
                );

                $this->db->insert('gym_clientes', $data1);
                $this->db->insert('gym_socio_comentario', $data6);
                
                
                //$this->db->insert('gym_suscripcion', $data2);
                //$this->db->insert('gym_suscripcion_historial', $data3);
                
                //$this->db->insert('gym_ticket', $data5);
                //$this->db->insert('gym_ticket_socio_nuevo', $data4);

                $status = "{{Status:ok}}";

                return $status;
             }
            function cliente_update_one(){
                
                $id_advance  = random_string('alnum', 20);
                $id_advance2 = random_string('alnum', 20);
                $id_advance3 = random_string('alnum', 20);

                
                $fecha_inicio  = date("Y-m-d");
                $fecha_proxima = date('Y-m-d', strtotime('+30 days')) ;

                $i_c_id_advance = $_POST['i_c_id_advance'];
                $nombre         = $_POST['nombre_alta'];
                $nacimiento     = $_POST['i_c_alta_f_nacimiento'];
                $telefono       = $_POST['i_c_alta_telefono'];
                $cel            = $_POST['i_c_alta_celular'];
                $email          = $_POST['i_c_alta_email'];
                $membrecia      = $_POST['i_c_alta_membrecia'];
                $direccion      = $_POST['i_c_direccion'];
                $sexo           = $_POST['i_c_radio'];


                

                if ($_POST['i_c_formfield'] == '') {
                    
                    $data1 = array(
                        'id_advance'       => $i_c_id_advance,
                        'nombre'           => $nombre,
                        'sexo'             => $sexo,
                        'membresia'        => $membrecia,
                        'telefono'         => $telefono,
                        'cel'              => $cel,
                        'email'            => $email,
                        'fecha_nacimiento' => $nacimiento,
                        'direccion'        => $direccion 
                    );

                    }else{

                        $i_c_formfield  = $_POST['i_c_formfield'];
                        $data1 = array(
                            'id_advance'       => $i_c_id_advance,
                            'nombre'           => $nombre,
                            'sexo'             => $sexo,
                            'foto'             => $i_c_formfield,
                            'membresia'        => $membrecia,
                            'telefono'         => $telefono,
                            'cel'              => $cel,
                            'email'            => $email,
                            'fecha_nacimiento' => $nacimiento,
                            'direccion'        => $direccion 
                        );

                        }
                


                
                $this->db->where('id_advance', $i_c_id_advance);
                $this->db->update('gym_clientes', $data1);
                

                print_r($data1);

                $status = "{{Status:ok}}";

                return $status;
             }                 
            
            function clientes_search_find($r_query){

               $this->db->select('gym_clientes.id,gym_clientes.id_advance,gym_clientes.nombre');
                $this->db->from('gym_clientes');
                $this->db->like('nombre', $r_query);
                //$this->db->limit('1');
                //$this->db->join('gym_membresia', 'gym_membresia.id_advance = gym_clientes.membresia');

                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }
             }

            /*Begin: Asistencia Regresa [id,nombre]*/
            function clientes_search_find_cb(){

                $query = $_GET['term'];                
                
                $this->db->select('*');
                $this->db->select('gym_clientes.id,gym_clientes.id_advance,gym_clientes.nombre');
                $this->db->like('codebar', $query);
                //$this->db->limit('1');
                    //$this->db->join('gym_suscripcion', 'gym_suscripcion.id_advance_cliente = gym_clientes.id_advance');                                
                        //$this->db->join('gym_membresia', 'gym_clientes.membresia = gym_membresia.id_advance');                                
                    
                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }
                }               
            function clientes_search_find_nombre(){
                
                $query = $_GET['term'];                
                //no tocar sirve para pasar asistencia
                $this->db->select('gym_clientes.id,gym_clientes.id_advance,gym_clientes.nombre');

                /*$this->db->select('*');*/
                $this->db->from('gym_clientes');
                $this->db->like('nombre', $query);
                
                    /*
                    $this->db->join('gym_suscripcion', 'gym_clientes.id_advance = gym_suscripcion.id_advance_cliente');                                
                        $this->db->join('gym_membresia', 'gym_membresia.id_advance  = gym_suscripcion.id_advance_membresia');                               
                    
                    //$this->db->limit('1');
                        */
                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }
                }  
            function clientes_search_find_id(){
                
                $query = $_GET['term'];                
                
                
                //no tocar sirve para pasar asistencia
                //$this->db->select('gym_clientes.id,gym_clientes.nombre,gym_clientes.foto,gym_suscripcion.id_advance_cliente,gym_suscripcion.fecha_proxima,gym_membresia.membresia,,gym_membresia.precio,gym_suscripcion.id_advance_membresia,gym_suscripcion.fecha_proxima');
                
                $this->db->select('gym_clientes.id,gym_clientes.id_advance,gym_clientes.nombre');
                
                $this->db->from('gym_clientes');
                $this->db->where('gym_clientes.id', $query);

                    /*
                    $this->db->join('gym_suscripcion', 'gym_clientes.id_advance = gym_suscripcion.id_advance_cliente');                                
                        $this->db->join('gym_membresia', 'gym_membresia.id_advance  = gym_suscripcion.id_advance_membresia');                                
                    
                    $this->db->limit(1);
                    */

                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }
                }                              
            /*End: Asistencia Regresa [id,nombre]*/


            function clientes_view_historial(){
                    //$id_advance = "P7xodpXCt9bFhuZvLBlj";
                    $id_advance = $_GET['id_advance'];                    

                    $this->db->select('*');
                     
                    $this->db->order_by('fecha_inicio', 'DESC');

                    $this->db->from('gym_suscripcion_historial');
                    $this->db->where('id_advance_cliente',$id_advance);
                    
                        $this->db->join('gym_membresia', 'gym_membresia.id_advance = gym_suscripcion_historial.id_advance_membresia');                                
                        //$this->db->join('gym_clientes', 'gym_clientes.id_advance = gym_suscripcion_historial.id_advance_cliente');                                

                    $query = $this->db->get();
               
                        if ($query->num_rows() > 0) {
                            foreach ($query->result() as $row) {
                                $row->id_dos  = count($row);
                                $data[] = $row;
                            }
                                return $data;
                            }else{
                                return false;
                                }
                    }
            function clientes_view_asistencia(){
                    //$id_advance = "P7xodpXCt9bFhuZvLBlj";
                    $id_advance                = $_GET['id_advance'];                                  

                    $this->db->select('
                        gym_asistencia.id_advance_cliente,
                        gym_asistencia.codebar_cliente,
                        gym_asistencia.fecha
                    ');
                    
                    $this->db->limit(30);

                    $this->db->from('gym_asistencia');
                    $this->db->where('id_advance_cliente',$id_advance);
                    
                        //$this->db->join('gym_membresia', 'gym_membresia.id_advance = gym_suscripcion_historial.id_advance_membresia');                                
                        //$this->db->join('gym_clientes', 'gym_clientes.id_advance = gym_asistencia.id_advance_cliente');                                

                    $query = $this->db->get();
               
                        if ($query->num_rows() > 0) {
                            foreach ($query->result() as $row) {
                                $row->id_dos  = count($row);
                                $data[] = $row;
                            }
                                return $data;
                            }else{
                                return false;
                                }
                    }
              
            function clientes_info_nuevo(){
                $este_mes = date('Y-m');

                $this->db->select('gym_clientes.nombre,gym_clientes.sexo,gym_membresia.membresia,gym_clientes.fecha_registro');
                $this->db->from('gym_clientes');
               $this->db->like('fecha_registro', $este_mes); 

                    //$this->db->join('gym_clientes', 'gym_clientes.id_advance = gym_suscripcion_historial.id_advance_cliente');                                
                    $this->db->join('gym_membresia', 'gym_membresia.id_advance = gym_clientes.membresia');                                

                        $query = $this->db->get();
                   
                            if ($query->num_rows() > 0) {
                                foreach ($query->result() as $row) {
                                    $row->id_dos  = count($row);
                                    $data[] = $row;
                                }
                                    return $data;
                                }else{
                                    return false;
                                    }
                }
            function clientes_info_cumpleannos(){
                $este_mes = date('-m-');

                $this->db->select('*');
                $this->db->from('gym_clientes');
                $this->db->like('fecha_nacimiento', $este_mes); 

                    $this->db->join('gym_membresia', 'gym_membresia.id_advance = gym_clientes.membresia');                                
                        $query = $this->db->get();
                   
                            if ($query->num_rows() > 0) {
                                foreach ($query->result() as $row) {
                                    $row->id_dos  = count($row);
                                    $data[] = $row;
                                }
                                    return $data;
                                }else{
                                    return false;
                                    }
                }
            function clientes_info_pagado(){
                
                $este_mes = date('m');
                $este_mes = $este_mes + 1;

                if ($este_mes <= 10) {
                    $este_mes = "-0".$este_mes."-";
                    }else{
                        $este_mes = "-".$este_mes."-";
                        }
                
                
                $this->db->select('gym_clientes.nombre,gym_membresia.membresia,gym_suscripcion.fecha_inicio,gym_suscripcion.fecha_proxima');
                $this->db->from('gym_suscripcion');
                $this->db->like('fecha_proxima', $este_mes); 


                    $this->db->join('gym_clientes', 'gym_clientes.id_advance = gym_suscripcion.id_advance_cliente');                                
                    $this->db->join('gym_membresia', 'gym_membresia.id_advance = gym_clientes.membresia');      

                        $query = $this->db->get();
                   
                            if ($query->num_rows() > 0) {
                                foreach ($query->result() as $row) {
                                    $row->id_dos  = count($row);
                                    $data[] = $row;
                                }
                                    return $data;
                                }else{
                                    return false;
                                    }
                }
            function clientes_info_pen(){
                $este_d   = date('d');
                $este_d   = $este_d-1;
                $este_mes = date('m');

                if ($este_d <= 10) {
                    $este_d = $este_d;
                    }else{
                        $este_d = $este_d;
                        }
                
                $this->db->select('gym_clientes.nombre,gym_membresia.membresia,gym_suscripcion.fecha_inicio,gym_suscripcion.fecha_proxima');
                $this->db->from('gym_suscripcion');
                //$this->db->like('fecha_proxima', $este_d); 


                    $this->db->join('gym_clientes', 'gym_clientes.id_advance = gym_suscripcion.id_advance_cliente');                                
                    $this->db->join('gym_membresia', 'gym_membresia.id_advance = gym_clientes.membresia');      

                        $query = $this->db->get();
                   
                            if ($query->num_rows() > 0) {
                                foreach ($query->result() as $row) {

                                    $pieces = explode("-", $row->fecha_proxima);
                                    
                                    if ($pieces[2]<=$este_d and $pieces[1]==$este_mes) {

                                        $data[] = $row;

                                        }else{}
                                    
                                }
                                    return $data;
                                }else{
                                    return false;
                                    }
                }
            function clientes_info_inactivos(){
                $este_d   = date('d');
                $este_d   = $este_d-1;
                $este_mes = date('m');

                if ($este_d <= 10) {
                    $este_d = $este_d;
                    }else{
                        $este_d = $este_d;
                        }
                
                $this->db->select('gym_clientes.nombre,gym_membresia.membresia,gym_suscripcion.fecha_inicio,gym_suscripcion.fecha_proxima');
                $this->db->from('gym_suscripcion');
                //$this->db->like('fecha_proxima', $este_d); 


                    $this->db->join('gym_clientes', 'gym_clientes.id_advance = gym_suscripcion.id_advance_cliente');                                
                    $this->db->join('gym_membresia', 'gym_membresia.id_advance = gym_clientes.membresia');      

                        $query = $this->db->get();
                   
                            if ($query->num_rows() > 0) {
                                foreach ($query->result() as $row) {

                                    $pieces = explode("-", $row->fecha_proxima);
                                    $x = $pieces[1]-$este_mes;
                                    
                                    if ($x  >=  2) {

                                        $data[] = $row;

                                        }else{}
                                    
                                        
                                }
                                    return $data;
                                }else{
                                    return false;
                                    }
                }
    
    }

/* End of file database.php */
