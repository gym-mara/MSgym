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

        //----->BEGIN VIEW
            //----->BEGIN: View All
                function asistencias_view_all(){
                    $hoy = date("Y-m-d");

                    $this->db->select('*');
                    $this->db->from('gym_asistencia');
                    $this->db->like('fecha',$hoy);

                    $query = $this->db->get();
               
                        if ($query->num_rows() > 0) {
                            foreach ($query->result() as $row) {
                                $data[] = $row;
                                $id[]= $row->id;
                            }
                                return $id;
                            }else{
                                return false;
                                }
                    }
            //----->END: View All
        //----->ENd VIEW

        //----->BEGIN NEW
            //----->BEGIN: New 
                function asistencia_new_one(){

                    
 
                    $id_advance_trabajdor  = $_POST['id_advance_trabajdor'];
                    $codebar_socio         = $_POST['codebar_socio'];

                    $fecha_now             = date('Y-m-d H:m');
                    $id_advance_socio      = $_POST['id_advance_socio'];
                    $id_advance            = random_string('alnum', 20);
                    
                    $a_comentario          = $_POST['a_comentario'];


                    $data = array(
                        'id_advance'            => $id_advance,           
                        'id_advance_trabajador' => $id_advance_trabajdor,
                        'id_advance_cliente'    => $id_advance_socio,
                        'codebar_cliente'       => $codebar_socio,
                        'fecha'                 => $fecha_now 

                    );
                    $data2 = array(
                        'id_advance'            => $id_advance,   
                        'id_advance_socio'      => $id_advance_socio,
                        'comentario'            => $a_comentario,
                        'fecha'                 => $fecha_now 

                    );
                    $this->db->insert('gym_asistencia', $data);
                    $this->db->insert('gym_socio_comentario', $data2);

                    $status = "{{Status:ok}}";
                    return $status;
                    }
            //----->END: New 
             
        //----->END NEW 
        }

/* End of file database.php */
