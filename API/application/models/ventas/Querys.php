
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
            function vapor(){

                $fecha = $_GET['fecha'];

                if ($fecha == "") {
                    $fecha = Date('Y-m-d');
                    }else{}

                if ($_GET['id_advance_trabajdor'] == 'admin,kuc1XyJjGvDWwK') {
                        //----->
                    //echo "1";
                            $this->db->select ('*');
                            $this->db->like   ('gym_ventas.fecha', $fecha);
                            //$this->db->where  ('gym_ventas.id_advance_trabajador',$_GET['id_advance_trabajdor']);
                            $this->db->like  ('gym_ventas.item','vapor');
                            $this->db->from   ('gym_ventas');
                            //$this->db->join   ('gym_trabajadores', 'gym_trabajadores.id_advance = gym_ticket_vapor.id_advance_trabajador');

                            $query = $this->db->get();
                       
                                if ($query->num_rows() > 0) {
                                    foreach ($query->result() as $row) {$data[] = $row;}
                                        return $data;
                                    }else{
                                        return false;
                                        }
                        //----->
                    }else{
                        //----->
                        //echo "2";
                            $this->db->select ('*');
                            $this->db->like   ('gym_ventas.fecha', $fecha);
                            $this->db->where  ('gym_ventas.id_advance_trabajador',$_GET['id_advance_trabajdor']);
                            $this->db->like  ('gym_ventas.item','vapor');
                            $this->db->from   ('gym_ventas');
                            //$this->db->join   ('gym_trabajadores', 'gym_trabajadores.id_advance = gym_ticket_vapor.id_advance_trabajador');

                            $query = $this->db->get();
                       
                                if ($query->num_rows() > 0) {
                                    foreach ($query->result() as $row) {$data[] = $row;}
                                        return $data;
                                    }else{
                                        return false;
                                        }
                        //----->
                            }

                }

        //----->BEGIN New Empleado
            function membresia(){

    
                $fecha = $_GET['fecha'];

                if ($fecha == "") {
                    $fecha = Date('Y-m-d');
                    }else{}

                if ($_GET['id_advance_trabajdor'] == 'admin,kuc1XyJjGvDWwK') {
                        //----->
                    //echo "1";
                            $this->db->select ('*');
                            $this->db->like   ('gym_ventas.fecha', $fecha);
                            //$this->db->where  ('gym_ventas.id_advance_trabajador',$_GET['id_advance_trabajdor']);
                            $this->db->like  ('gym_ventas.item','membresia');
                            $this->db->from   ('gym_ventas');
                            //$this->db->join   ('gym_trabajadores', 'gym_trabajadores.id_advance = gym_ticket_vapor.id_advance_trabajador');

                            $query = $this->db->get();
                       
                                if ($query->num_rows() > 0) {
                                    foreach ($query->result() as $row) {$data[] = $row;}
                                        return $data;
                                    }else{
                                        return false;
                                        }
                        //----->
                    }else{
                        //----->
                        //echo "2";
                            $this->db->select ('*');
                            $this->db->like   ('gym_ventas.fecha', $fecha);
                            $this->db->where  ('gym_ventas.id_advance_trabajador',$_GET['id_advance_trabajdor']);
                            $this->db->like  ('gym_ventas.item','membresia');
                            $this->db->from   ('gym_ventas');
                            //$this->db->join   ('gym_trabajadores', 'gym_trabajadores.id_advance = gym_ticket_vapor.id_advance_trabajador');

                            $query = $this->db->get();
                       
                                if ($query->num_rows() > 0) {
                                    foreach ($query->result() as $row) {$data[] = $row;}
                                        return $data;
                                    }else{
                                        return false;
                                        }
                        //----->
                            }

                }

        //----->BEGIN New Empleado
            function productos(){

                $fecha = $_GET['fecha'];

                if ($fecha == "") {
                    $fecha = Date('Y-m-d');
                    }else{}

                if ($_GET['id_advance_trabajdor'] == 'admin,kuc1XyJjGvDWwK') {
                        //----->
                            $this->db->select ('*');
                            $this->db->like   ('gym_ventas.fecha', $fecha);
                            //$this->db->like   ('gym_ventas.item','membresía');
                            //$this->db->where  ('gym_ventas.id_advance_trabajador',$_GET['id_advance_trabajdor']);
                            $this->db->where  ('gym_tranferencia.tipo','Producto');
                            $this->db->from   ('gym_ventas');
                            $this->db->join('gym_tranferencia', 'gym_tranferencia.nombre = gym_ventas.item');                                


                            $query = $this->db->get();
                       
                                if ($query->num_rows() > 0) {
                                    foreach ($query->result() as $row) {$data[] = $row;}
                                        return $data;
                                    }else{
                                        return false;
                                        }                  
                        //----->
                    }else{
                        //----->
                            $this->db->select ('*');
                            $this->db->like   ('gym_ventas.fecha', $fecha);
                            //$this->db->like   ('gym_ventas.item','membresía');
                            $this->db->where  ('gym_ventas.id_advance_trabajador',$_GET['id_advance_trabajdor']);
                            $this->db->where  ('gym_tranferencia.tipo','Producto');
                            $this->db->from   ('gym_ventas');
                            $this->db->join('gym_tranferencia', 'gym_tranferencia.nombre = gym_ventas.item');                                


                            $query = $this->db->get();
                       
                                if ($query->num_rows() > 0) {
                                    foreach ($query->result() as $row) {$data[] = $row;}
                                        return $data;
                                    }else{
                                        return false;
                                        }                       
                        //----->
                            }

                }                

        //----->BEGIN New Empleado
            function servicios(){

                $fecha = $_GET['fecha'];

                if ($fecha == "") {
                    $fecha = Date('Y-m-d');
                    }else{}

                if ($_GET['id_advance_trabajdor'] == 'admin,kuc1XyJjGvDWwK') {
                        //----->
                            $this->db->select ('*');
                            $this->db->like   ('gym_ventas.fecha', $fecha);
                            //$this->db->like   ('gym_ventas.item','membresía');
                            //$this->db->where  ('gym_ventas.id_advance_trabajador',$_GET['id_advance_trabajdor']);
                            $this->db->where  ('gym_tranferencia.tipo','Servicios');
                            $this->db->from   ('gym_ventas');
                            $this->db->join('gym_tranferencia', 'gym_tranferencia.nombre = gym_ventas.item');                                


                            $query = $this->db->get();
                       
                                if ($query->num_rows() > 0) {
                                    foreach ($query->result() as $row) {$data[] = $row;}
                                        return $data;
                                    }else{
                                        return false;
                                        }                    
                        //----->
                    }else{
                        //----->
                            $this->db->select ('*');
                            $this->db->like   ('gym_ventas.fecha', $fecha);
                            //$this->db->like   ('gym_ventas.item','membresía');
                            $this->db->where  ('gym_ventas.id_advance_trabajador',$_GET['id_advance_trabajdor']);
                            $this->db->where  ('gym_tranferencia.tipo','Servicios');
                            $this->db->from   ('gym_ventas');
                            $this->db->join('gym_tranferencia', 'gym_tranferencia.nombre = gym_ventas.item');                                


                            $query = $this->db->get();
                       
                                if ($query->num_rows() > 0) {
                                    foreach ($query->result() as $row) {$data[] = $row;}
                                        return $data;
                                    }else{
                                        return false;
                                        }                        
                        //----->
                            }
                }                


        //----->BEGIN New Empleado
            //sirve para hacer la sumatoria del corte  total o por usuario
            function all_sum(){


                $id_advance_trabajdor = $_GET['id_advance_trabajdor'];
                
                if (empty($_GET['fecha'])) {
                        $fecha = Date('Y-m-d');
                    }else{
                        $fecha =$_GET['fecha'];
                        }


                    if ($id_advance_trabajdor == 'admin,kuc1XyJjGvDWwK') {

                            //Nombre  Precio  Cantidad    Precio Final
                            $this->db->select ('item,item_precio,count(item_precio_final) as cantidad,sum(item_precio_final) as item_precio_final');
                            
                            $this->db->like   ('gym_ventas.fecha', $fecha);
                            $this->db->from   ('gym_ventas');  
                            $this->db->group_by("item"); 

                        }else{

                            //Nombre  Precio  Cantidad    Precio Final
                            $this->db->select ('item,item_precio,count(item_precio_final) as cantidad,sum(item_precio_final) as item_precio_final');
                            $this->db->where ('id_advance_trabajador',$id_advance_trabajdor);
                            $this->db->like   ('gym_ventas.fecha', $fecha);
                            $this->db->from   ('gym_ventas');  
                            $this->db->group_by("item"); 

                            }



                        $query = $this->db->get();
                   
                            if ($query->num_rows() > 0) {
                                foreach ($query->result() as $row) {$data[] = $row;}
                                    return $data;
                                }else{
                                    return false;
                                    }  
                }                


            //sirve para hacer la sumatoria del corte  total o por usuario
            function all(){
                

                $id_advance_trabajdor = $_GET['id_advance_trabajdor'];
                
                if (empty($_GET['fecha'])) {
                        $fecha = Date('Y-m-d');
                    }else{
                        $fecha =$_GET['fecha'];
                        }
                

                    if ($id_advance_trabajdor == 'admin,kuc1XyJjGvDWwK') {
                                                  
                            //Nombre  Precio  Cantidad    Precio Final
                            //$this->db->select ('item,item_precio,count(item_precio_final) as cantidad,sum(item_precio_final) as item_precio_final');
                        $this->db->select ('*');
                            $this->db->where ('id_advance_trabajador',$id_advance_trabajdor);
                            $this->db->like   ('gym_ventas.fecha', $fecha);
                            $this->db->from   ('gym_ventas');  
                            

                        }else{

                            //Nombre  Precio  Cantidad    Precio Final
                            //$this->db->select ('item,item_precio,count(item_precio_final) as cantidad,sum(item_precio_final) as item_precio_final');
                            $this->db->select ('*');
                            $this->db->where ('id_advance_trabajador',$id_advance_trabajdor);
                            $this->db->like   ('gym_ventas.fecha', $fecha);
                            $this->db->from   ('gym_ventas');  
                            

                            }

                   
                /*                    
                if ($_GET['id_advance_trabajdor'] == 'admin,kuc1XyJjGvDWwK') {

                    $this->db->select ('*');
                    $this->db->like   ('gym_ventas.fecha', $fecha);
                    $this->db->from   ('gym_ventas');   

                    }else{

                        $this->db->select ('*');
                        $this->db->where  ('gym_ventas.id_advance_trabajador',$_GET['id_advance_trabajdor']);
                        $this->db->like   ('gym_ventas.fecha', $fecha);
                        $this->db->from   ('gym_ventas');   

                            }

                        $query = $this->db->get();
                   
                            if ($query->num_rows() > 0) {
                                foreach ($query->result() as $row) {$data[] = $row;}
                                    return $data;
                                }else{
                                    return false;
                                    }                            
                */

                        $query = $this->db->get();
                   
                            if ($query->num_rows() > 0) {
                                foreach ($query->result() as $row) {$data[] = $row;}
                                    return $data;
                                }else{
                                    return false;
                                    }  
                }                


        //----->BEGIN New Empleado
            //sirve para hacer la sumatoria del corte  total o por usuario
            function todo(){

                

                
                    $fecha = Date('Y-m-d');
                $id_advance_trabajdor = $_GET['id_advance_trabajdor'];
                
                if (empty($_GET['fecha'])) {
                        $fecha = Date('Y-m-d');
                    }else{
                        $fecha =$_GET['fecha'];
                        }
                

                if ($id_advance_trabajdor == 'admin,kuc1XyJjGvDWwK' or $id_advance_trabajdor == '') {

                    $this->db->select ('*');
                    $this->db->like   ('gym_ventas.fecha', $fecha);
                    $this->db->from   ('gym_ventas');   
                    $this->db->group_by('gym_ventas.item_precio');                          

                    }else{

                        $this->db->select ('*');
                        $this->db->where  ('gym_ventas.id_advance_trabajador',$_GET['id_advance_trabajdor']);
                        $this->db->like   ('gym_ventas.fecha', $fecha);
                        $this->db->from   ('gym_ventas');   
                        $this->db->group_by('gym_ventas.item_precio');                          

                            }

                        $query = $this->db->get();
                   
                            if ($query->num_rows() > 0) {
                                foreach ($query->result() as $row) {$data[] = $row;}
                                    return $data;
                                }else{
                                    return false;
                                    }                            

            }                

        //----->BEGIN New Empleado
            function todo2(){

                $fecha = Date('Y-m-d');

                    $this->db->select_sum  ('item_precio_final');
                    $this->db->like    ('gym_ventas.fecha', $fecha);

                        $query = $this->db->get('gym_ventas');
                   
                            if ($query->num_rows() > 0) {
                                foreach ($query->result() as $row) {$data[] = $row;}
                                    return $data;
                                }else{
                                    return false;
                                    }                             

                }                

        //----->BEGIN New Empleado
            function folio(){


                    $this->db->select('id');
                    $this->db->order_by('id','desc');
                    $this->db->limit(1);
                        $query = $this->db->get('gym_ticket');
                   
                            if ($query->num_rows() > 0) {
                                foreach ($query->result() as $row) {$data[] = $row;}
                                    return $data;
                                }else{
                                    return false;
                                    }    

                $query = $this->db->get();
               
                        if ($query->num_rows() > 0) {
                            foreach ($query->result() as $row) {$data[] = $row;}
                                return $data;
                            }else{
                                return false;
                                }                             
                }                
    }

/* End of file database.php */
