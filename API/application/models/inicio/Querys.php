<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
    
    /**
    *
    *
    *
    *
    *
    **/

    class Querys extends CI_Model {     

        function clientes_view_all_no_img_week($week_array){
            


            $this->db->select('*');
            $this->db->from('gym_suscripcion');

                $this->db->or_where('gym_suscripcion.fecha_proxima', $week_array['d']);
                $this->db->or_where('gym_suscripcion.fecha_proxima', $week_array['l']);
                $this->db->or_where('gym_suscripcion.fecha_proxima', $week_array['m']);
                $this->db->or_where('gym_suscripcion.fecha_proxima', $week_array['x']);
                $this->db->or_where('gym_suscripcion.fecha_proxima', $week_array['j']);
                $this->db->or_where('gym_suscripcion.fecha_proxima', $week_array['v']);
                $this->db->or_where('gym_suscripcion.fecha_proxima', $week_array['s']);


                $this->db->join('gym_clientes', 'gym_clientes.id_advance = gym_suscripcion.id_advance_cliente');   
                //$this->db->join('gym_membresia', 'gym_clientes.membresia = gym_membresia.id_advance');     


                $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {
                            //helpers fechas
                            //$row->fecha_nacimiento  = edad($row->fecha_nacimiento);
                            if (isset($row->foto)) {
                                # code...
                                echo "set";
                                $row->foto2  = $this->output->set_output($row->foto);
                                }else{
                                    echo " no set";
                                    //
                                    }
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
            //$id_advance = 'TwZUx4B3oADPpVXK79if';

            $this->db->select('*');
                $this->db->from('gym_clientes');
                $this->db->where('gym_clientes.id_advance',$id_advance);

                //$this->db->limit(1);
                //$this->db->order_by('gym_suscripcion.fecha_proxima', 'DESC');
                    
                    $this->db->join('gym_suscripcion', 'gym_suscripcion.id_advance_cliente = gym_clientes.id_advance');                                                          
                    $this->db->join('gym_membresia', 'gym_clientes.membresia = gym_membresia.id_advance');      
            
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
            $this->db->select('*');

                $this->db->from('gym_clientes');
                
                $this->db->where('gym_clientes.codebar',$codebar);
                
                    $this->db->join('gym_membresia', 'gym_clientes.membresia = gym_membresia.id_advance');                                
                    $this->db->join('gym_suscripcion', 'gym_suscripcion.id_advance_cliente = gym_clientes.id_advance'); 
                
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
