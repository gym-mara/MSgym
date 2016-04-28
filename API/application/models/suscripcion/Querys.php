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
            function __construct()
            {
                // Call the Model constructor
                parent::__construct();
            }
        //----->END CONSTRUCT

        //----->BEGIN VIEW
            //----->BEGIN: View All
                function suscripcion_view_all()
                {
                    $this->db->select('*');
                    $this->db->from('gym_membresia');

                    $query = $this->db->get();
               
                        if ($query->num_rows() > 0) {
                            foreach ($query->result() as $row) {$data[] = $row;}
                                return $data;
                            }else{
                                return false;
                                }
                }
            //----->END: View All
        //----->END VIEW


        //----->BEGIN UPDAET
            //----->BEGIN: UPDAET All
                function suscripcion_gym_clientes($data_gym_clientes,$id_advance_cliente)
                {
                    $this->db->where('id_advance',$id_advance_cliente);
                    $this->db->update('gym_clientes', $data_gym_clientes);
                                    
                        if($result = $this->db->affected_rows() == 1){

                            // Code here after successful insert
                            $x = strip_quotes('[{"valid":"Ok"}]');

                            }else{

                                // Code here after successful insert
                                $x = strip_quotes('[{"valid":"Not"}]');

                                }  

                                return $x; 
                }

                function suscripcion_gym_suscripcion($data_gym_suscripcion,$id_advance_cliente)
                {
                    $this->db->where('id_advance_cliente',$id_advance_cliente);
                    $this->db->update('gym_suscripcion', $data_gym_suscripcion);
                                    
                        if($result = $this->db->affected_rows() == 1){

                            // Code here after successful insert
                            $x = strip_quotes('[{"valid":"Ok"}]');

                            }else{

                                // Code here after successful insert
                                $x = strip_quotes('[{"valid":"Not"}]');

                                }  

                                return $x; 
                } 

                function suscripcion_gym_suscripcion_historial($data_gym_suscripcion_historial)
                {
                    $this->db->insert('gym_suscripcion_historial', $data_gym_suscripcion_historial);
                                    
                        if($result = $this->db->affected_rows() == 1){

                            // Code here after successful insert
                            $x = strip_quotes('[{"valid":"Ok"}]');

                            }else{

                                // Code here after successful insert
                                $x = strip_quotes('[{"valid":"Not"}]');

                                }  

                                return $x; 
                }                 

            //----->END: UPDAET All
        //----->END UPDAET
        }

/* End of file database.php */
