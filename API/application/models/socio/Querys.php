<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
    
    /**
    *
    *
    *
    *
    *
    **/

    class Querys extends CI_Model {        

        function socio_view_one_no_img(){

            $id_advance = $_GET['id_advance'];

            $this->db->select('*');
                $this->db->from('gym_clientes');
                
                $this->db->where('gym_clientes.id_advance',$id_advance);
                
                $this->db->join('gym_membresia'        , 'gym_clientes.membresia                = gym_membresia.id_advance');
                $this->db->join('gym_suscripcion'      , 'gym_suscripcion.id_advance_cliente    = gym_clientes.id_advance');  
                //$this->db->join('gym_socio_comentario' , 'gym_socio_comentario.id_advance_socio = gym_clientes.id_advance');  
                
                $this->db->order_by("fecha_proxima", "desc");

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

        function socio_view_one_comentario(){

            $id_advance = $_GET['id_advance'];

            $this->db->select('*');
                $this->db->from('gym_clientes');
                $this->db->where('gym_clientes.id_advance',$id_advance);

                $this->db->join('gym_socio_comentario', 'gym_socio_comentario.id_advance_socio = gym_clientes.id_advance');  
                
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
        

        function socio_view_two_no_img(){

            $id_advance = $_GET['id_advance'];

            $this->db->select('gym_clientes.id,gym_clientes.id_advance,gym_clientes.nombre,gym_clientes.sexo,gym_clientes.membresia,gym_clientes.codebar,gym_clientes.telefono,gym_clientes.cel,gym_clientes.email,gym_clientes.fecha_nacimiento,gym_clientes.direccion,gym_membresia.id_advance,gym_membresia.membresia,gym_membresia.precio,gym_suscripcion.fecha_inicio,gym_suscripcion.fecha_proxima');
                $this->db->from('gym_clientes');
                $this->db->where('gym_clientes.id_advance',$id_advance);

                $this->db->join('gym_membresia', 'gym_clientes.membresia = gym_membresia.id_advance');
                $this->db->join('gym_suscripcion', 'gym_suscripcion.id_advance_cliente = gym_clientes.id_advance');  
                
                $this->db->order_by("id", "desc"); 

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

        function socio_view_two_no_img_dos(){

            $id_advance = $_GET['id_advance'];
<<<<<<< HEAD
            /*
            $this->db->select('gym_clientes.id,gym_clientes.id_advance,gym_clientes.nombre,gym_clientes.fecha_nacimiento,gym_clientes.foto,gym_suscripcion.id as id_suscripcion,gym_suscripcion.fecha_inicio,gym_suscripcion.fecha_proxima,gym_membresia.membresia,gym_membresia.precio');
            */
                $this->db->select('*');
                $this->db->from('gym_clientes');
                $this->db->where('gym_clientes.id_advance',$id_advance);
                
=======
            $this->db->select('*');
            /*$this->db->select('gym_clientes.id,gym_clientes.id_advance,gym_clientes.nombre,gym_clientes.fecha_nacimiento,gym_clientes.foto,gym_suscripcion.id as id_suscripcion,gym_suscripcion.fecha_inicio,gym_suscripcion.fecha_proxima,gym_membresia.membresia,gym_membresia.precio');
            */
                $this->db->from('gym_clientes');
                $this->db->like('gym_clientes.id_advance',$id_advance);

>>>>>>> origin/Check-Error
                /*
                $this->db->join('gym_membresia', 'gym_clientes.membresia = gym_membresia.id_advance');
                $this->db->join('gym_suscripcion', 'gym_suscripcion.id_advance_cliente = gym_clientes.id_advance');  

                $this->db->order_by("id_suscripcion", "desc"); 
                $this->db->limit(1);
                */
                $query = $this->db->get();
       
                if ($query->num_rows() > 0) {

                    foreach ($query->result() as $row) {
                        //$row->fecha_nacimiento2  = edad($row->fecha_nacimiento);
                        $data[] = $row;
                        }

                        return $data;

                    }else{return false;}  
         }

        function socio_view_one_img(){

            $id_advance = $_GET['id_advance'];

            $this->db->select('gym_clientes.foto');
                $this->db->from('gym_clientes');
                $this->db->where('gym_clientes.id_advance',$id_advance);
                

                $query = $this->db->get();
       
                if ($query->num_rows() > 0) {
                    foreach ($query->result() as $row) {
                        $data[] = $row;
                    }
                        return $data;
                    }else{
                        return false;
                        }  

                        return $query;
         }

        function socio_view_historial(){
            //$id_advance = "P7xodpXCt9bFhuZvLBlj";
            $id_advance = $_GET['id_advance'];                    

            $this->db->select('*');
             
            $this->db->order_by('fecha_inicio', 'DESC');

            //$this->db->from('gym_suscripcion_historial');
            $this->db->from('gym_suscripcion');
            $this->db->where('id_advance_cliente',$id_advance);
            
                $this->db->join('gym_almacen', 'gym_almacen.id_advance = gym_suscripcion.id_advance_membresia');                                
                //$this->db->join('gym_clientes', 'gym_clientes.id_advance = gym_suscripcion_historial.id_advance_cliente');                                

            $query = $this->db->get();
       
                if ($query->num_rows() > 0) {
                    foreach ($query->result() as $row) {
                        $row->id_dos  = count($row);
                        $data[] = $row;
                    }
                        return $data;
                    }else{
                        return false;
                        }
            }                
        function socio_view_asistencia(){
            //$id_advance = "P7xodpXCt9bFhuZvLBlj";
            $id_advance = $_GET['id_advance'];                    

            $this->db->select('*');
            $this->db->limit(30);

            $this->db->from('gym_asistencia');
            $this->db->where('id_advance_cliente',$id_advance);
            
                //$this->db->join('gym_membresia', 'gym_membresia.id_advance = gym_suscripcion_historial.id_advance_membresia');                                
                //$this->db->join('gym_clientes', 'gym_clientes.id_advance = gym_asistencia.id_advance_cliente');                                

            $query = $this->db->get();
       
                if ($query->num_rows() > 0) {
                    foreach ($query->result() as $row) {
                        $row->id_dos  = count($row);
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
            //$id_advance = 'P7xodpXCt9bFhuZvLBlj';

            $this->db->select('*');
                $this->db->from('gym_clientes');
                $this->db->where('gym_clientes.id_advance',$id_advance);

                //$this->db->limit(1);
                //$this->db->order_by('gym_suscripcion.fecha_proxima', 'DESC');
                    
                    //$this->db->join('gym_suscripcion', 'gym_suscripcion.id_advance_cliente = gym_clientes.id_advance');                                                          
               /*

            $this->db->join('gym_membresia', 'gym_clientes.membresia = gym_membresia.id_advance');      
            
            */
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
            
            /*
            gym_clientes
            id - id_advance - nombre - foto - membresia - codebar - telefono - cel - email - fecha_nacimiento

            gym_suscripcion
            id - id_advance - id_advance_trabajador - id_advance_cliente - fecha_inicio - fecha_proxima - pago

            gym_membresia 
            id - id_advance - membresia - precio
            */
           /*                     
            $this->db->select('gym_clientes.id,gym_clientes.id_advance,gym_clientes.nombre,gym_clientes.membresia');
            $this->db->select('gym_suscripcion.fecha_proxima,gym_suscripcion.pago');
            $this->db->select('gym_membresia.membresia,gym_membresia.precio');
            */
            $this->db->select('*');

                $this->db->from('gym_clientes');
                
                $this->db->where('gym_clientes.codebar',$codebar);
                
                    $this->db->join('gym_suscripcion', 'gym_suscripcion.id_advance_cliente = gym_clientes.id_advance');                                
                    $this->db->join('gym_membresia', 'gym_clientes.membresia = gym_membresia.id_advance');                                
                
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
