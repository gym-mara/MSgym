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
                /*
                    $this->db->select('
                        gym_almacen.id_advance,
                        gym_almacen.tipo,gym_almacen.nombre,
                        gym_almacen.descripcion,
                        gym_almacen.precio_compra,
                        gym_almacen.precio_venta,
                        gym_almacen.cantidad,
                        gym_almacen.codebar,
                        gym_almacen.unidad,
                        gym_tranferencia.cantidad as cantidad_dos
                        ');
                    */
                    $this->db->select('*');
                    //$this->db->select('*');
                    /*
                    $this->db->or_like('gym_almacen.tipo','Producto');
                    $this->db->or_like('gym_almacen.tipo','ajuste');
                    $this->db->or_like('gym_almacen.tipo','visita');
                    $this->db->or_like('gym_almacen.tipo','servicio');
                    */
                    //$this->db->or_like('gym_almacen.tipo','Consumo Interno');

                    $this->db->from('gym_almacen');
                    //$this->db->from('gym_tranferencia');
                    //$this->db->where('cantidad >', '0'); 

                    //$this->db->join('gym_almacen', 'gym_almacen.id_advance = gym_tranferencia.id_advance');    

                    //$this->db->limit(100000);
                    $this->db->order_by('tipo');

                    $query = $this->db->get();
               
                        if ($query->num_rows() > 0) {
                            foreach ($query->result() as $row) {
                                //$row->cantidad_dos  = $row->cantidad;
                                    $data[] = $row;
                                }

                                return $data;

                            }else{

                                return false;
                                
                                }
                }

        //----->BEGIN New Empleado
            function all2(){
                    /*
                    $this->db->select('gym_almacen.id_advance,gym_almacen.tipo,gym_almacen.nombre,gym_almacen.descripcion,gym_almacen.precio_compra,gym_almacen.precio_venta,gym_almacen.cantidad,gym_almacen.codebar,gym_almacen.unidad,gym_tranferencia.cantidad as cantidad_dos');
                    
                    //$this->db->or_like('gym_almacen.tipo','Producto');

                    $this->db->from('gym_almacen');

                    $this->db->join('gym_tranferencia', 'gym_almacen.id_advance = gym_tranferencia.id_advance');    
                */
                    $this->db->select('gym_almacen.id_advance,gym_almacen.tipo,gym_almacen.nombre,gym_almacen.descripcion,gym_almacen.precio_compra,gym_almacen.precio_venta,gym_almacen.cantidad,gym_almacen.codebar,gym_almacen.unidad,gym_tranferencia.cantidad as cantidad_dos');
                    //$this->db->select('*');
                    /*
                    $this->db->or_like('gym_almacen.tipo','Producto');
                    $this->db->or_like('gym_almacen.tipo','ajuste');
                    $this->db->or_like('gym_almacen.tipo','visita');
                    $this->db->or_like('gym_almacen.tipo','servicio');
                    */
                    //$this->db->or_like('gym_almacen.tipo','Consumo Interno');

                    $this->db->from('gym_almacen');

                    $this->db->join('gym_tranferencia', 'gym_almacen.id_advance = gym_tranferencia.id_advance');    
                    
                    $query = $this->db->get();
               
                        if ($query->num_rows() > 0) {
                            foreach ($query->result() as $row) {$data[] = $row;}
                                return $data;
                            }else{
                                return false;
                                }
                }
            function update(){


                $id_advance_ch         = $_POST['id_advance_ch'];
                $cantidad_trasferencia = $_POST['cantidad_trasferencia'];
                $cantidad_tranferir    = $_POST['cantidad_tranferir'];
                
                $cantidad_total        = $_POST['cantidad_total'];

                $cantidad_tipo         = $_POST['almacen_tipo_'];

                $cantidad_x            = $cantidad_trasferencia + $cantidad_tranferir;

                $data_tranferencia1 = array(
                    'id_advance'   => $id_advance_ch,
                    'cantidad'     => "$cantidad_x + cantidad",
                    'fecha'        => date("Y-m-d H:m")
                );

                
                if ($cantidad_tipo =='Consumo Interno') {
                    # code...
                   // print_r($_POST);
                   // print_r($cantidad_x);
                   // print_r($data_tranferencia1);

                        //---------->
                            //gym_tranferencia & gym_tranferencia_historial
                            $data_tranferencia = array(
                                'id_advance'   => $id_advance_ch
                            );

                            $this->db->where('id_advance', $id_advance_ch);     
                            $this->db->set('cantidad' , "cantidad - $cantidad_tipo", FALSE);    
                            $this->db->update('gym_almacen', $data_tranferencia);


                    }else{

                        //---------->
                            
                            //gym_almacen & gym_almacen_historial
                            
                            $data_almacen = array(
                                'id_advance' => $id_advance_ch,
                                'cantidad'   => $cantidad_total
                            );
                            

                            //=>1
                            $this->db->where('id_advance', $id_advance_ch);
                            $this->db->set('cantidad' , "cantidad + $cantidad_x", FALSE);    
                            $this->db->update('gym_almacen', $data_almacen);    
                            
                            //=>2
                            $this->db->insert('gym_almacen_historial', $data_almacen);  
                        //---------->

                        //---------->
                            //gym_tranferencia & gym_tranferencia_historial
                            $data_tranferencia = array(
                                'id_advance'   => $id_advance_ch
                            );

                            $this->db->where('id_advance', $id_advance_ch);     
                            $this->db->set('cantidad' , "cantidad + $cantidad_x", FALSE);    
                            $this->db->update('gym_tranferencia', $data_tranferencia);

                            /*
                            if ($data_tranferencia1['tipo'] == '') {
                                # code...
                                }else{
                                    
                                    }

                                    */
                            $data_tranferencia_h = array(
                                'id_advance' => random_string('alnum', 20),
                                'fecha'      => date("Y-m-d H:m"),
                                'tipo'       => $cantidad_tipo,
                                'nombre'     => $_POST['almacen_nombre_'],
                                'cantidad'   => "$cantidad_x + cantidad"
                            );
                            $this->db->insert('gym_tranferencia_historial', $data_tranferencia_h);
                        //---------->

                        }


                    $status        = "{{Status:ok update}}";

                        return $status;
                }

            function historial(){
                $this->db->select(
                '
                gym_almacen.tipo,
                gym_almacen.nombre,
                gym_almacen.descripcion,
                gym_almacen.precio_compra,
                gym_almacen.precio_venta,
                gym_tranferencia_historial.cantidad,
                gym_almacen.unidad,
                gym_almacen.codebar
                '
                    );
                $this->db->from('gym_tranferencia_historial');
                $this->db->like('fecha', $_GET['date']);

                $this->db->join('gym_almacen', 'gym_almacen.id_advance = gym_tranferencia_historial.id_advance');      

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
