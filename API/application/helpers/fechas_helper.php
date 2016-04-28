<?php 
	function edad($fecha){
		$fecha = str_replace("/","-",$fecha);
		$fecha = date('Y/m/d',strtotime($fecha));
		$hoy = date('Y/m/d');
		$edad = $hoy - $fecha;
			return $edad;
	}

    function getStartAndEndDate($week, $year) {
        $dto = new DateTime();
        $dto->setISODate($year, $week ,1);
        $ret['d'] = $dto->format('Y-m-d');
        $dto->setISODate($year, $week ,2);
        $ret['l'] = $dto->format('Y-m-d');
        $dto->setISODate($year, $week ,3);
        $ret['m'] = $dto->format('Y-m-d');
        $dto->setISODate($year, $week ,4);
        $ret['x'] = $dto->format('Y-m-d');   
        $dto->setISODate($year, $week ,5);
        $ret['j'] = $dto->format('Y-m-d');
        $dto->setISODate($year, $week ,6);
        $ret['v'] = $dto->format('Y-m-d');     
        $dto->setISODate($year, $week ,7);
        $ret['s'] = $dto->format('Y-m-d');                                                             

            return $ret;
    }	

    function fecha_x($var){
        $var = explode(" ", $var);    
        $var = $var['0'];
            return $var;    
    }
    
    function hora_x($var){
        $var = explode(" ", $var);   
        $var = $var['1'];
            return $var;    
    }

    function dia_x($var){
        $var = explode(" ", $var);    
        $var = $var['0'];

        $var = explode("-", $var);    

            return $var;    
    }    