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

        function ticketnew(){
            //print_r($_POST);
            

            $ticket_info        = $_POST['ticket_info'];
            $taskArray2Aticket1 = $_POST['taskArray2Aticket1'];
            $taskArray2Aticket2 = $_POST['taskArray2Aticket2'];
            $taskArray2Aticket3 = $_POST['taskArray2Aticket3'];
            $taskArray2Aticket4 = $_POST['taskArray2Aticket4'];
            $taskArray2Aticket5 = $_POST['taskArray2Aticket5'];
           
            /*-----[ DATA GYM TICKET]-----*/
                $data_tiket = array(
                    'id_advance'              => $ticket_info[2], 
                    'fecha'                   => date("Y-m-d H:m"),
                    'id_advance_trabajador'   => $ticket_info[0], 
                    'total'                   => $ticket_info[1] 
                    );      

            /*-----[ DATA GYM VENTAS]-----*/
                for ($i=0; $i < count($taskArray2Aticket1); $i++) { 
                        $item[$i]['id_advance']            = random_string('alnum', 20);
                        $item[$i]['id_advance_trabajador'] = $ticket_info[0];
                        $item[$i]['id_advance_ticket']     = $ticket_info[2];
                        $item[$i]['fecha']                 = date("Y-m-d H:m");
                        //$item[$i]['id_advance_item']       = $taskArray2Aticket1[$i];
                        $item[$i]['item']                  = $taskArray2Aticket2[$i];
                        $item[$i]['item_precio']           = $taskArray2Aticket3[$i];
                        $item[$i]['item_descuento']        = $taskArray2Aticket4[$i];
                        $item[$i]['item_precio_final']     = $taskArray2Aticket5[$i];
                    }      

            /*-----[ DB GYM TICKET]-----*/
                $this->db->insert('gym_ticket', $data_tiket);

                $this->db->insert_batch('gym_ventas', $item);  
                
                /*-----[ ARRAY TICKET venta]-----*/

                    for ($i=0; $i < count($taskArray2Aticket1); $i++) { 
                        //$item2[$i]['id_advance']  = $taskArray2Aticket5[$i];   
                        //$item2[$i]['cantidad']    = 'cantidad-1';  

                        $this->db->where ('id_advance', $taskArray2Aticket1[$i]);
                        $this->db->set   ('cantidad', 'cantidad-1', FALSE);
                        //almacen a caja sin pasar por tranferencia
                        $this->db->update('gym_almacen');

                        }

            if( isset($_POST['taskArray2Aticket6']) ){
                $taskArray2Aticket6 = $_POST['taskArray2Aticket6'];
                /*-----[ DATA GYM VENTAS]-----*/
                    for ($i=0; $i < count($taskArray2Aticket1); $i++) { 
                        //echo $i;
                            //------>
                            if ($taskArray2Aticket2[$i] == 'Membresia 1 Mes') {
                                //echo 'm1';
                                $m = 'EXVRUg8IkqJKaFdDbujY';
                            }

                            if ($taskArray2Aticket2[$i] == 'Membresia 6 meses') {
                                //echo 'm1';
                                $m = 'p4UNBoeXb1DI7uFY0CG6';
                            }

                            if ($taskArray2Aticket2[$i] == 'Membresia 3 meses') {
                                //echo 'm1';
                                $m = 'bAiJWPrldeV93yIu8ajF';
                            }

                            if ($taskArray2Aticket2[$i] == 'Membresia 1 Año') {
                                //echo 'm1';
                                $m = '4YxPAFlwhcQBIqNv7gyo';
                            }
                            

                            //------>
                            if ($taskArray2Aticket2[$i] == 'inscripcion anual') {
                                echo 'm2';
                                $m = 'lKRChsBo6ZiJ21NrzHOy';
                            }

                            //------>
                            if ($taskArray2Aticket2[$i] == 'mantenimiento') {
                                echo 'm3';
                                $m = 'eZO09vugy8HMPFNkBic2';
                            }
                            //------>
                            if ($taskArray2Aticket2[$i] == 'casillero renta mensual') {
                                echo 'm4';
                                $m = 'LFeQadYIjVCb6AqmrfGZ';
                            }
                                            
                            //echo $m;
                            //echo $taskArray2Aticket2[$i];
                            //echo $_POST['taskArray2Aticket7'];
                            //echo $taskArray2Aticket2[$i];

                            if( !$_POST['taskArray2Aticket7'] ){

                                    //echo "Fecha normal:";

                                                                //------>
                                    if ($taskArray2Aticket2[$i] == 'Membresia 1 Año') {
                                            $item2[$i]['fecha_inicio']          = date('Y-m-d');
                                            $item2[$i]['fecha_proxima']         = date('Y-m-d', strtotime("+1 year"));                                        
                                        }
                                    if ($taskArray2Aticket2[$i] == 'Membresia 6 meses') {
                                            $item2[$i]['fecha_inicio']          = date('Y-m-d');
                                            $item2[$i]['fecha_proxima']         = date('Y-m-d', strtotime("+182 day"));                                        
                                            }                                        

                                    if ($taskArray2Aticket2[$i] == 'Membresia 3 meses') {
                                            $item2[$i]['fecha_inicio']          = date('Y-m-d');
                                            $item2[$i]['fecha_proxima']         = date('Y-m-d', strtotime("+92 day"));                                        
                                            }    

                                    if ($taskArray2Aticket2[$i] == 'Membresia 1 Mes') {
                                            $item2[$i]['fecha_inicio']          = date('Y-m-d');
                                            $item2[$i]['fecha_proxima']         = date('Y-m-d', strtotime("+30 days"));                                        
                                            }

                                    if ($taskArray2Aticket2[$i] == 'inscripcion') {
                                            $item2[$i]['fecha_inicio']          = date('Y-m-d');
                                            $item2[$i]['fecha_proxima']         = date('Y-m-d', strtotime("+30 days"));
                                        }
                                    if ($taskArray2Aticket2[$i] == 'mantenimiento') {
                                            $item2[$i]['fecha_inicio']          = date('Y-m-d');
                                            $item2[$i]['fecha_proxima']         = date('Y-m-d', strtotime("+30 days"));
                                        }
                                    if ($taskArray2Aticket2[$i] == 'casillero renta mensual') {
                                            $item2[$i]['fecha_inicio']          = date('Y-m-d');
                                            $item2[$i]['fecha_proxima']         = date('Y-m-d', strtotime("+30 days"));
                                        }
                                                                                                                        


                                }else{

                                    //echo "Fecha especial:";

                                    //$fecha_especial = $_POST['taskArray2Aticket7'];

                                    $date           = $_POST['taskArray2Aticket7'];
                                    
                                    if ($taskArray2Aticket2[$i] == 'Membresia 1 Mes') {

                                        $newdate        = strtotime ( '+30 day' , strtotime ( $date ) ) ;
                                        $fecha_especial =  date ( 'Y-m-d' , $newdate );

                                        $item2[$i]['fecha_inicio']          = $_POST['taskArray2Aticket7'];
                                        $item2[$i]['fecha_proxima']         = $fecha_especial;


                                        }
                                    if ($taskArray2Aticket2[$i] == 'Membresia 3 meses') {

                                        $newdate        = strtotime ( '+92 day' , strtotime ( $date ) ) ;
                                        $fecha_especial =  date ( 'Y-m-d' , $newdate );

                                        $item2[$i]['fecha_inicio']          = $_POST['taskArray2Aticket7'];
                                        $item2[$i]['fecha_proxima']         = $fecha_especial;


                                        }                                              
                                    if ($taskArray2Aticket2[$i] == 'Membresia 6 meses') {

                                        $newdate        = strtotime ( '+182 day' , strtotime ( $date ) ) ;
                                        $fecha_especial =  date ( 'Y-m-d' , $newdate );

                                        $item2[$i]['fecha_inicio']          = $_POST['taskArray2Aticket7'];
                                        $item2[$i]['fecha_proxima']         = $fecha_especial;


                                        }                                        
                                    if ($taskArray2Aticket2[$i] == 'Membresia 1 Año') {

                                        $newdate        = strtotime ( '+1 year' , strtotime ( $date ) ) ;
                                        $fecha_especial =  date ( 'Y-m-d' , $newdate );

                                        $item2[$i]['fecha_inicio']          = $_POST['taskArray2Aticket7'];
                                        $item2[$i]['fecha_proxima']         = $fecha_especial;
                                        }
                                    if ($taskArray2Aticket2[$i] == 'inscripcion') {
                                            $item2[$i]['fecha_inicio']          = date('Y-m-d');
                                            $item2[$i]['fecha_proxima']         = date('Y-m-d', strtotime("+30 days"));
                                        }
                                    if ($taskArray2Aticket2[$i] == 'mantenimiento') {
                                            $item2[$i]['fecha_inicio']          = date('Y-m-d');
                                            $item2[$i]['fecha_proxima']         = date('Y-m-d', strtotime("+30 days"));
                                        }
                                    if ($taskArray2Aticket2[$i] == 'casillero renta mensual') {
                                            $item2[$i]['fecha_inicio']          = date('Y-m-d');
                                            $item2[$i]['fecha_proxima']         = date('Y-m-d', strtotime("+30 days"));
                                        }
                                    }      

                            //print_r($item2);

                            $item2[$i]['id_advance']            = random_string('alnum', 20);
                            $item2[$i]['id_advance_trabajador'] = $ticket_info[0];
                            
                            $item2[$i]['pago']                  = 1;
                            $item2[$i]['id_advance_membresia']  = $m;
                            $item2[$i]['id_advance_cliente']    = $taskArray2Aticket6[0];

                            
                            $this->db->where ('id_advance', $taskArray2Aticket6[$i]);
                            $this->db->set   ('membresia', $m);
                            $this->db->update('gym_clientes');  
                            
                            

                        }      
                        //print_r($item2);
                        $this->db->insert_batch('gym_suscripcion', $item2);   
            }else{

            }

            
            $status = "{{Status:ok}}";
            return $status;
         }

        function ticketnew2(){

            /*
                Array
                (
                    [fecha] => 2016-01-28 17:25:31
                    [id_advance_trabajador] => cajeramOlCdJF2hTos6t
                    [total] => 101
                    [item] => 101
                    [item_precio_final] => 101
                )
            */
           
           $id_advance_ticket = random_string('alnum', 20);
           $item_precio_final = ($_POST['item_precio_final'] * -1);

            /*-----[ DATA GYM TICKET]-----*/
                $data_tiket = array(
                    'id_advance'              => $id_advance_ticket, 
                    'fecha'                   => $_POST['fecha'],
                    'id_advance_trabajador'   => $_POST['id_advance_trabajador'], 
                    'total'                   => $item_precio_final
                    );      

            /*-----[ DATA GYM TICKET]-----*/
                $data_tiket_ventas = array(
                    'id_advance'              => random_string('alnum', 20), 
                    'id_advance_ticket'       => $id_advance_ticket, 
                    'id_advance_trabajador'   => $_POST['id_advance_trabajador'], 
                    'fecha'                   => $_POST['fecha'],
                    'item'                    => $_POST['item'],
                    'item_precio'             => $item_precio_final,
                    'item_descuento'          => '0',
                    'item_precio_final'       => $item_precio_final
                    );     
            /*-----[ DB GYM TICKET]-----*/
                $this->db->insert('gym_ticket', $data_tiket);

                $this->db->insert('gym_ventas',  $data_tiket_ventas);  
                

            
            $status = "{{Status:ok}}";
            return $status;
         }         

        function ticketnew3(){


            /*
                Array
                (
                    [fecha] => 2016-01-28 17:25:31
                    [id_advance_trabajador] => cajeramOlCdJF2hTos6t
                    [total] => 101
                    [item] => 101
                    [item_precio_final] => 101
                )
            */
           
           $id_advance_ticket = random_string('alnum', 20);
           $item_precio_final = $_POST['item_precio_final'];

            /*-----[ DATA GYM TICKET]-----*/
                $data_tiket = array(
                    'id_advance'              => $id_advance_ticket, 
                    'fecha'                   => $_POST['fecha'],
                    'id_advance_trabajador'   => $_POST['id_advance_trabajador'], 
                    'total'                   => $item_precio_final
                    );      

            /*-----[ DATA GYM TICKET]-----*/
                $data_tiket_ventas = array(
                    'id_advance'              => random_string('alnum', 20), 
                    'id_advance_ticket'       => $id_advance_ticket, 
                    'id_advance_trabajador'   => $_POST['id_advance_trabajador'], 
                    'fecha'                   => $_POST['fecha'],
                    'item'                    => $_POST['item'],
                    'item_precio'             => $item_precio_final,
                    'item_descuento'          => '0',
                    'item_precio_final'       => $item_precio_final
                    );     
            /*-----[ DB GYM TICKET]-----*/
                $this->db->insert('gym_ticket', $data_tiket);

                $this->db->insert('gym_ventas',  $data_tiket_ventas);  
                

            
            $status = "{{Status:ok}}";
            return $status;
         }                  

        function ticketnewcorte(){

            print_r($_POST);

            $id_advance_trabajador = $_POST['id_advance_trabajdor'];
            $total_hoy = $_POST['total_hoy'];
             

            $data = array(
                'id_advance'            => random_string('alnum', 20),
                'fecha'                 => date("Y-m-d H:m"),
                'id_advance_trabajador' => $id_advance_trabajador,
                'total'                 => $total_hoy 
            );

            //=>2
            $this->db->insert('gym_ticket_corte', $data);   
            
            $status = "{{Status:ok}}";
            return $status;
         }

        function ticketfolio(){
            
            $this->db->select('id');
                $this->db->from('gym_ticket');
                $this->db->order_by("id", "desc"); 
                $this->db->limit(1);

                    $query = $this->db->get();
       
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {$data[] = $row;}
                            return $data;
                        }else{
                            return false;
                            }  
                    }    

        function ticketfolio2(){
            
            $this->db->select('id');
                $this->db->from('gym_ticket_corte');
                $this->db->order_by("id", "desc"); 
                $this->db->limit(1);

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

