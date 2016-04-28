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
            function empleadonew(){

                $id_advance            = random_string('alnum', 20);
                $codebar               = random_string('numeric', 10);
                $fecha                 = date("Y-m-d");

                $i_c_formfield2        = $_POST['i_c_formfield2'];
                
                $inputUsuario       = $_POST['inputUsuario'];
                $inputPassword       = $_POST['inputPassword'];

                $i_e_alta_nombre       = $_POST['i_e_alta_nombre'];
                $i_e_alta_f_nacimiento = $_POST['i_e_alta_f_nacimiento'];
                $i_e_alta_telefono     = $_POST['i_e_alta_telefono'];
                $i_e_alta_celular      = $_POST['i_e_alta_celular'];
                $i_e_alta_email        = $_POST['i_e_alta_email'];

                $i_e_alta_direccion    = $_POST['i_e_alta_direccion'];
                $i_e_radio             = $_POST['i_e_radio'];

                $data = array(
                    'id_advance'       => $id_advance,
                    'codebar'          => $codebar,
                    'nombre'           => $i_e_alta_nombre,
                    'foto'             => $i_c_formfield2,
                    'usuario'          => $inputUsuario,
                    'password'         => $inputPassword,
                    'fecha_inicio'     => $fecha,
                    'fecha_nacimiento' => $i_e_alta_f_nacimiento,
                    'sexo'             => $i_e_radio,
                    'tel'              => $i_e_alta_telefono,
                    'cell'             => $i_e_alta_celular,
                    'email'            => $i_e_alta_email,
                    'direccion'        => $i_e_alta_direccion

                );

                    $this->db->insert('gym_trabajadores', $data);
                        $status        = "{{Status:ok}}";

                        return $status;
                }
        
        //----->BEGIN New Empleado
            function empleadoupdate(){

                $id_advance              = $_POST['id_advance_info_trabajador'];
                $i_c_formfield3          = $_POST['i_c_update_formfield3'];

                $update_inputUsuario       = $_POST['update_inputUsuario'];
                $update_inputPassword       = $_POST['update_inputPassword'];





                $i_e_update_nombre       = $_POST['i_e_update_nombre'];
                $i_e_update_f_nacimiento = $_POST['i_e_alta_f_nacimiento'];
                $i_e_radio               = $_POST['i_e_radio'];
                $i_e_update_telefono     = $_POST['i_e_alta_telefono'];

                $i_e_update_celular      = $_POST['i_e_alta_celular'];
                $i_e_update_email        = $_POST['i_e_alta_email'];
                $i_e_update_direccion    = $_POST['i_e_alta_direccion'];

                if ($i_c_formfield3 == "") {
                    $data = array(


                    'usuario'          => $update_inputUsuario,
                    'password'         => $update_inputPassword,         
                    'tipo'             => 'tipo',     
                              
                        'nombre'    => $i_e_update_nombre ,
                        'fecha'     => $i_e_update_f_nacimiento,
                        'sexo'      => $i_e_radio ,
                        'tel'       => $i_e_update_telefono,
                        'cell'      => $i_e_update_celular,
                        'email'     => $i_e_update_email,
                        'direccion' => $i_e_update_direccion
                        );
                    }else{
                        $data = array(

                    'usuario'          => $update_inputUsuario,
                    'password'         => $update_inputPassword,   
                    'tipo'             => 'tipo',                           
                            'nombre'    => $i_e_update_nombre ,
                            'foto'      => $i_c_formfield3 ,
                            'fecha'     => $i_e_update_f_nacimiento,
                            'sexo'      => $i_e_radio ,
                            'tel'       => $i_e_update_telefono,
                            'cell'      => $i_e_update_celular,
                            'email'     => $i_e_update_email,
                            'direccion' => $i_e_update_direccion
                            );
                        }


                    $this->db->where('id_advance', $id_advance);
                    $this->db->update('gym_trabajadores', $data);                    
                        $status        = "{{Status:ok}}";

                        return $status;
                }

        //----->BEGIN Search Empleado
            function empleado_search_find_nombre(){
                $query = $_GET['term']; 
                $this->db->select('*');
                $this->db->from('gym_trabajadores');
                $this->db->like('nombre', $query);

                $query = $this->db->get();
               
                        if ($query->num_rows() > 0) {
                            foreach ($query->result() as $row) {
                                $row->edad  = edad($row->fecha_nacimiento);
                                $data[] = $row;
                            }

                                return $data;
                            }else{
                                return false;
                                }
                
                }             
            function empleado_search_find_cb(){
                $query = $_GET['term']; 
                $this->db->select('*');
                $this->db->from('gym_trabajadores');
                $this->db->like('codebar', $query);

                $query = $this->db->get();
               
                        if ($query->num_rows() > 0) {
                            foreach ($query->result() as $row) {
                                $row->edad  = edad($row->fecha_nacimiento);
                                $data[] = $row;
                            }

                                return $data;
                            }else{
                                return false;
                                }
                
                }             

        //----->BEGIN Viwer Empleado
            function empleadoviwer(){

                $id_advance = $_GET['id_advance'];

                if ($id_advance == 'null') {
                    
                    $this->db->select('*');
                    $this->db->from('gym_trabajadores');
                    
                    }else{

                            $this->db->select('*');
                            $this->db->from('gym_trabajadores');
                            $this->db->where('id_advance', $id_advance);

                        }

                    
                    $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {
                            $row->edad  = edad($row->fecha_nacimiento);
                            $data[] = $row;
                            }
                            return $data;
                        }else{
                            return false;
                            }                         

                }
            function asistencia_new_one($cb,$id_advance,$peronaltimenow){

                $id_advance_r = random_string('alnum', 20);

                $data = array(
                    'id_advance'            => $id_advance_r,
                    'id_advance_trabajador' => $id_advance,
                    'codebar'               => $cb,
                    'fecha'                 => $peronaltimenow
                );

                $this->db->insert('gym_asistencia_trabajadores', $data);

                $status = "{{Status:ok}}";
                return $status;
                }                
            function listaasistenciapersonal(){
                $id_advance    = $_GET['id_advance'];

                $this->db->select('*');
                $this->db->from('gym_asistencia_trabajadores');
                $this->db->like('id_advance_trabajador', $id_advance);

                    $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {
                            
                            $row->fecha_x = fecha_x($row->fecha);
                            $row->dia_x   = dia_x($row->fecha_x);
                            $row->hora_x  = hora_x($row->fecha);

                            $data[] = $row;
                            }
                            return $data;
                        }else{
                            return false;
                            }  

                }
        
            function asistencia_hoy(){

                $id_advance = $_GET['id_advance'];

                $this->db->select('*');
                $this->db->from('gym_asistencia_trabajadores');
                $this->db->like('id_advance_trabajador', $id_advance);
                $this->db->like('fecha', date("Y-m-d"));

                    $query = $this->db->get();
           
                    if ($query->num_rows() > 0) {
                        foreach ($query->result() as $row) {
                            $data[] = $row;
                            }
                            return $data;
                        }else{
                            return false;
                            }  

                }                
    }

/* End of file database.php */
