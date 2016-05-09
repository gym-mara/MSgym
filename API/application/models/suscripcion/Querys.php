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

   
                function suscripcion_view_one()
                {


                    $this->db->select('
                        gym_suscripcion.id,
                        gym_suscripcion.id_advance,
                        gym_suscripcion.id_advance_trabajador,
                        gym_suscripcion.id_advance_cliente,
                        gym_suscripcion.id_advance_membresia,
                        gym_suscripcion.fecha_inicio,
                        gym_suscripcion.fecha_proxima,
                        gym_suscripcion.pago,

                        gym_membresia.membresia
                        ');

                    $this->db->from('gym_suscripcion');
                    $this->db->where('gym_suscripcion.id_advance_cliente',$_GET['id_advance']);
                    $this->db->join('gym_membresia', 'gym_membresia.id_advance = gym_suscripcion.id_advance_membresia');
                
                    $this->db->order_by("gym_suscripcion.id", "desc"); 
                    $this->db->limit(1);
                
                        $query = $this->db->get();
                   
                            if ($query->num_rows() > 0) {
                                foreach ($query->result() as $row) {
                                    $row->fecha_hoy = Date("Y-m-d");

                                    $datetime1 = new DateTime($row->fecha_hoy);
                                    $datetime2 = new DateTime($row->fecha_proxima);
                                    $interval = $datetime1->diff($datetime2);

                                    $row ->intervalo = $interval ->format('%d');
    
                                    if ($interval ->format('%d') >= 4) {
                                        $row->color = "verde";    
                                        }else if ($interval ->format('%d') == 3){
                                            $row->color = "amarillo";    
                                            }else if ($interval ->format('%d') == 0){
                                                $row->color = "rojo";    
                                            }



                                       
                                        $data[] = $row;
                                    }

                                    return $data;
                                
                                }else{return false;}

                }
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
