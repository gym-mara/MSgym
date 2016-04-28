<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
    
    /**
    *
    *
    *
    *
    *
    **/

    class Querys extends CI_Model {
        
        //----->BEGIN CONSTRUCT
            function __construct(){
                // Call the Model constructor
                parent::__construct();
                }
        //----->END CONSTRUCT
        
        //----->BEGIN New Empleado
            function all(){
                $this->db->select('*');
                $this->db->from('gym_almacen');
                $this->db->order_by('tipo');

                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }
                }
            function historial(){

                if ($_GET['date'] == "") {

                    $fecha = date("Y-m");
                    //$fecha = "2016-01-";

                    $this->db->from('gym_almacen_historial');
                    $this->db->like('fecha', $fecha);
                    $this->db->order_by("id", "desc");                     

                    }else{

                        $fecha = $_GET['date'];

                        $this->db->from('gym_almacen_historial');
                        $this->db->like('fecha', $fecha);
                        $this->db->order_by("id", "desc");                         

                        }




                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }
                }                
            function historialci(){
                
                $this->db->select('
                    gym_almacen_ci.id,
                    gym_almacen_ci.id_advance,
                    gym_almacen_ci.fecha,
                    gym_almacen_ci.id_advance_trabajador,
                    gym_almacen_ci.id_advance_producto,
                    gym_almacen_ci.cantidad,
                    
                    gym_almacen.tipo,
                    gym_almacen.nombre,
                    gym_almacen.descripcion,
                    gym_almacen.precio_compra,
                    gym_almacen.precio_venta,
                    gym_almacen.codebar,

                    gym_trabajadores.nombre as nombre_trabajador

                    ');
                
/*
tipo Nombre  Descripcion Precio Compra   Precio Venta    Cantidad    Codigo barras
*/
                $this->db->from('gym_almacen_ci');

                if ($_GET['date'] == "") {
                    
                    $fecha = date("Y-m");
                    $this->db->like("gym_almacen_ci.fecha", $fecha);

                    }else{
                        
                        $fecha = $_GET['date'];
                        $this->db->like("gym_almacen_ci.fecha", $fecha);
                        
                        }

                //$this->db->join('gym_trabajadores','gym_trabajadores.id_advance = gym_almacen_ci.id_advance_trabajador');

                $this->db->join('gym_almacen','gym_almacen.id_advance = gym_almacen_ci.id_advance_producto');

                $this->db->join('gym_trabajadores','gym_trabajadores.id_advance = gym_almacen_ci.id_advance_trabajador');


                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }
                }                

            function historiagroup(){

                $this->db->select("fecha");
                $this->db->from('gym_almacen_historial');
                $this->db->order_by("id", "asc");                         
                $this->db->group_by("fecha");

                if ($_GET['date'] == "") {

                    $fecha = date("-m-");
                    $this->db->like('fecha', $fecha);

                    }else{

                        $this->db->like('fecha',$_GET['date']);

                        }


                    $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }
                }                
            function historiagroupci(){

                $this->db->select("fecha");
                $this->db->from('almacen_historial_ci');
                $this->db->order_by("id", "asc");                         
                $this->db->group_by("fecha");

                if ($_GET['date'] == "") {

                    $fecha = date("-m-");
                    $this->db->like('fecha', $fecha);

                    }else{

                        $this->db->like('fecha',$_GET['date']);

                        }


                    $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }
                }                

            function almacennew(){

               $id_advance  = random_string('alnum', 20);

                $data = array(
                    'id_advance'       => $id_advance,
                    'tipo'             => $_POST['tipo'],
                    'nombre'           => $_POST['p_n_nombre'],
                    'descripcion'      => $_POST['p_n_descripcion'],
                    'precio_compra'    => $_POST['p_n_precioc'],
                    'precio_venta'     => $_POST['p_n_preciov'],
                    'cantidad'         => $_POST['p_n_cantidad'],
                    'unidad'           => $_POST['p_n_unidad'],
                    'codebar'          => $_POST['p_n_codigobarras'],
                    'fecha'            => date("Y-m-d H:m")                    
                    );

                $data1 = array(
                    'id_advance'       => $id_advance,
                    'tipo'             => $_POST['tipo'],
                    'nombre'           => $_POST['p_n_nombre'],
                    'descripcion'      => $_POST['p_n_descripcion'],
                    'precio_compra'    => $_POST['p_n_precioc'],
                    'precio_venta'     => $_POST['p_n_preciov'],
                    'cantidad'         => $_POST['p_n_cantidad'],
                    'unidad'           => $_POST['p_n_unidad'],
                    'codebar'          => $_POST['p_n_codigobarras'],
                    'fecha'            => date("Y-m-d H:m")
                    );

                $data2 = array(
                    'id_advance'       => $id_advance,
                    'tipo'             => $_POST['tipo'],
                    'nombre'           => $_POST['p_n_nombre'],
                    'descripcion'      => $_POST['p_n_descripcion'],
                    'precio_compra'    => $_POST['p_n_precioc'],
                    'precio_venta'     => $_POST['p_n_preciov'],
                    'cantidad'         => '0',                    
                    'unidad'           => $_POST['p_n_unidad'],
                    'codebar'          => $_POST['p_n_codigobarras']
                    );

                $data3 = array(
                    'id_advance'       => $id_advance,
                    'tipo'             => $_POST['tipo'],
                    'nombre'           => $_POST['p_n_nombre'],
                    'descripcion'      => $_POST['p_n_descripcion'],
                    'precio_compra'    => $_POST['p_n_precioc'],
                    'precio_venta'     => $_POST['p_n_preciov'],
                    'cantidad'         => '0',                    
                    'unidad'           => $_POST['p_n_unidad'],
                    'codebar'          => $_POST['p_n_codigobarras'],
                    'fecha'            => date("Y-m-d H:m")
                    );                

                $this->db->insert('gym_almacen', $data);
                $this->db->insert('gym_almacen_historial', $data1);

                $this->db->insert('gym_tranferencia', $data2);
                $this->db->insert('gym_tranferencia_historial', $data3);

                $status = "{{Status:ok}}";

                return $status;
                }
            function almacennewci(){

                $id_advance               = random_string('alnum', 20);
                $id_advance_ci            = $_POST['id_advance_ci'];
                $cantidad_menos_ci        = $_POST['cantidad_menos_ci'];
                $id_advance_trabajador_ci = $_POST['id_advance_trabajador_ci'];

                    $this->db->where('id_advance', $id_advance_ci);     
                    $this->db->set('cantidad' , "cantidad - $cantidad_menos_ci", FALSE);    
                    $this->db->update('gym_almacen');


                $data1 = array(
                    'id_advance'            => random_string('alnum', 20),
                    'fecha'                 => date("Y-m-d H:m"),
                    'id_advance_producto'   => $id_advance_ci,
                    'cantidad_producto'     => $cantidad_menos_ci,
                    'id_advance_trabajador' => $id_advance_trabajador_ci
                    );                

                $data2 = array(
                    'id_advance'            => random_string('alnum', 20),
                    'fecha'                 => date("Y-m-d H:m"),
                    'id_advance_producto'   => $id_advance_ci,
                    'cantidad'     => $cantidad_menos_ci,
                    'id_advance_trabajador' => $id_advance_trabajador_ci
                    );    

                $this->db->insert('almacen_historial_ci', $data1);
                $this->db->insert('gym_almacen_ci', $data2);

                $status = "{{Status:ok}}";

                return $status;
                }

            function allone(){
                
                $this->db->select('gym_almacen.id,gym_almacen.id_advance,gym_almacen.nombre,gym_almacen.descripcion,gym_almacen.precio_compra,gym_almacen.precio_venta,gym_almacen.cantidad,gym_almacen.tipo,gym_almacen.unidad');
                $this->db->where('id_advance',$_GET['id_advance']);
                $this->db->from('gym_almacen');

                //$this->db->join('gym_almacen','gym_almacen.id_advance = gym_almacen_ci.id_advance_producto');

                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }
                }      
            function almacenupdate(){

                /*
                Array
                (
                    [id_advace] => XSq4nPEUDwxJBYNekbdt
                    [p_n_nombre] => Gatorade
                    [p_n_descripcion] => Gatorade sabor lima limón 600 ml
                    [p_n_precioc] => 16.00
                    [p_n_preciov] => 22.00
                    [p_n_cantidad] => 100
                    [p_n_unidad] => pz
                    [p_n_codigobarras] => 7003827
                )
                */
                
                print_r($_POST);

                $data = array(
                    //'id_advance'     => random_string('alnum', 20),
                    'tipo'           => $_POST['p_n_tipo'],
                    'fecha'          => date("Y-m-d H:m"),
                    'nombre'         => $_POST['p_n_nombre'],
                    'descripcion'    => $_POST['p_n_descripcion'],
                    'precio_compra'  => $_POST['p_n_precioc'],
                    'precio_venta'   => $_POST['p_n_preciov'],
                    'cantidad'       => $_POST['p_n_cantidad'],
                    'unidad'         => $_POST['p_n_unidad'],
                    'codebar'        => $_POST['p_n_codigobarras']
                );

                $data2= array(
                    'nombre'         => $_POST['p_n_nombre'],
                    'descripcion'    => $_POST['p_n_descripcion'],
                    'precio_compra'  => $_POST['p_n_precioc'],
                    'precio_venta'   => $_POST['p_n_preciov'],
                    'unidad'         => $_POST['p_n_unidad'],
                    'codebar'         => $_POST['p_n_codigobarras']
                );


                $this->db->where('gym_almacen.id_advance',$_POST['id_advace']);
                $this->db->update('gym_almacen', $data);

                //$this->db->where('gym_almacen_historial.id_advance',$_POST['id_advace']);
                $this->db->insert('gym_almacen_historial', $data);

                $this->db->where('gym_tranferencia.id_advance',$_POST['id_advace']);
                $this->db->update('gym_tranferencia', $data2);

                $this->db->where('gym_tranferencia_historial.id_advance',$_POST['id_advace']);
                $this->db->update('gym_tranferencia_historial', $data2);
                

                $status = "{{Status:ok}}";

                return $status;
                }                          

            function almacendelete(){
                print_r($_POST);
                print_r($_GET);

                $this->db->delete('gym_almacen', array('id_advance' => $_POST['id_advance_ci']));     

                $status = "{{Status:ok}}";

                return $status;                            
                }
            
            function search_transferencia_cb(){
               $this->db->select('*');
                $this->db->where('gym_tranferencia.cantidad > 0');
                $this->db->from('gym_tranferencia');
                $this->db->like('codebar', $_GET['term']);

                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }
                    $status = "{{Status:ok 1}}";
                }    
            function search_transferencia_nombre(){
               $this->db->select('*');
               $this->db->where('gym_tranferencia.cantidad > 0');
                $this->db->from('gym_tranferencia');
                $this->db->like('nombre', $_GET['term']);

                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {

                        foreach ($query->result() as $row) {

                            if ($row->nombre == 'vapor' ) {
                                
                                $vapor_count_x = $this->db->count_all('gym_ticket_vapor');
                                
                                if ($vapor_count_x <1) {
                                    $vapor_count_x = 1;
                                    }else{
                                        $vapor_count_x = $vapor_count_x + 1;
                                        }
                                //----->
                                if ($vapor_count_x < 10) {
                                    $vapor_count = "Serial: 000".$vapor_count_x;
                                    }

                                //----->
                                if ($vapor_count_x >= 10 or $vapor_count_x < 100) {
                                    $vapor_count = "Serial: 00".$vapor_count_x;
                                    }

                                $row->vapor_count = $vapor_count;

                                }

                            $data[] = $row;
                        }


                            return $data;
                        }else{
                            return false;
                            }
                }    
            function search_gym_membresia_nombre(){
               $this->db->select('*');
                $this->db->from('gym_membresia');
                $this->db->like('membresia', $_GET['term']);

                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }
                }    
            function search_gym_vapor_nombre(){
               $this->db->select('*');
                $this->db->from('gym_vapor');
                $this->db->like('vapor', $_GET['term']);

                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }
                }                    

            function venta_almacen_vapor(){

                $id_advance_ticket_servicio = $_POST['id_advance_ticket_servicio'];
                $fecha_ticket_servicio      = $_POST['fecha_ticket_servicio'];
                $id_trabajdor               = $_POST['id_trabajdor'];
                $demo                       = $_POST['myArray'];

                /*Ticket*/
                $id_advance5 = random_string('alnum', 20);

                $data5 = array(
                    'id_advance'              => $id_advance5,
                    'fecha'                   => date("Y-m-d H:m"),
                    'id_advance_trabajador'   => $id_trabajdor 
                );  


                $arrayx = count($demo);

                $Mydata = Array();

                for ($i=0; $i <$arrayx ; $i++) { 

                if ($demo[$i][2] == 'qv7iwSk2nZDJQ4E9N3zp') {
                    # code...
                    }else{
                        $Mydata[$i]['id_advance']            = random_string('alnum', 20);
                        $Mydata[$i]['id_advance_ticket']     = $id_advance5;
                        $Mydata[$i]['fecha']                 = $fecha_ticket_servicio;
                        $Mydata[$i]['id_advance_trabajador'] = $id_trabajdor;
                        $Mydata[$i]['item_id_advace_reader'] = $demo[$i][0];
                        $Mydata[$i]['item_precio']           = $demo[$i][1];
                        $Mydata[$i]['item_id_producto']      = $demo[$i][2];                    
                        }
                    
                    /***********/
                    /*
                    if(empty($Mydata2)){

                        }else{

                            if ($demo[$i][2] == 'qv7iwSk2nZDJQ4E9N3zp') {

                                $Mydata2[$i]['id_advance']            = random_string('alnum', 20);
                                $Mydata2[$i]['id_advance_ticket']     = $id_advance5;
                                $Mydata2[$i]['id_advance_servicio']   =$demo[$i][2];
                                $Mydata2[$i]['fecha']                 = date("Y-m-d H:m");
                                $Mydata2[$i]['id_advance_trabajador'] = $_POST['id_trabajdor'];
                                $Mydata2[$i]['total']                 = $demo[$i][1];
                                }

                            }
                            */
                    /***********/                            

                }

             

                $this->db->insert('gym_ticket', $data5);

                if(count($Mydata) >=2){

                    $this->db->insert_batch('gym_ventas', $Mydata); 

                    }else{

                    $this->db->insert_batch('gym_ventas', $Mydata);

                        }


                /***********/
                /*
                if(empty($Mydata2)){

                    }else{

                        function searcharray($value, $key, $array) {
                           foreach ($array as $k => $val) {
                               if ($val[$key] == $value) {
                                   return $k;
                               }
                           }
                           return null;
                        }
                        $results = searcharray('qv7iwSk2nZDJQ4E9N3zp', 2, $demo);   

                        if(count($Mydata2) >=2){

                    $this->db->insert_batch('gym_ticket_vapor', $Mydata2); 
                    
                    }else{

                        $this->db->insert('gym_ticket_vapor', $Mydata2); 

                        }


                    $status = "{{Status:ok}}";

                        return $status;

                        }
                */
                /***********/
                }

    }

/* End of file database.php */
