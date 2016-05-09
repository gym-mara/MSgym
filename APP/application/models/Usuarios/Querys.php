<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
    
    class Querys extends CI_Model {
        
        function __construct(){
            // Call the Model constructor
            parent::__construct();
            }
    
        function session_in_one(){

            $user = $this->input->post_get('user', TRUE);
            $pass = $this->input->post_get('pass', TRUE);

                $this->db->select('*');
                $this->db->from('gym_trabajadores');
                $this->db->where('usuario',$user);
                $this->db->where('password',$pass);

                    $query = $this->db->get();
                   
                        if ($query->num_rows() > 0) {
                            foreach ($query->result() as $row) {$data[] = $row;}
                                return $data;
                            }else{return false;}  
            }
    
    }

/* End of file database.php */
