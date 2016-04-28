console.error('Run: Puro Flow !!!')

    $(document).on("ready",All);
    $(document).on("ready",Historial_days);
    $(document).on("ready",Historial_now);
    $(document).on("ready",Historial_date);
    
    console.debug('Run: All');

    /***************************************************    
    *                    Jquery                        * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: All
    function All(){
        console.log('Begin: All');


            $(".btn-almacen").click(function(event) {
                /* Act on the event */
                $(".xxx-h").show()
                $(".xxx-ci").hide()

                });

            $(".btn-ci").click(function(event) {
                /* Act on the event */
                $(".xxx-h").hide()
                $(".xxx-ci").show()

                });
                            

        console.log('End: All');
        }            

    /***************************************w************    
    *                    Jquery                        * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: All
    function Historial_days(){
		console.error('Historial days');
 
		$('select#fecha_mes').on('change', function() {
			//----->			
	    		var dia = $(this).val();

	    		//-----> Historial Almacen Fecha
	            $("#lista-dias").empty();
		        $.get("http://api.gymh2o.com/almacen/historialgroup/tipo/json/?date=-" + dia + "-", function (data){
		            
		            $.each(data, function (key, val) {    
		                $("#lista-dias").append("<li>" + val.fecha + "</li>")            
		                });
		            
		            })    

		        //-----> Historial Almacen CI #lista-ci-dias
	            $("#lista-ci-dias").empty();
		        $.get("http://api.gymh2o.com/almacen/historialgroupci/tipo/json/?date=-" + dia + "-", function (data){
		            
		            $.each(data, function (key, val) {    
		                $("#lista-ci-dias").append("<li>" + val.fecha + "</li>")            
		                });
		            
		            })  

	        //----->
			})

    	}

    /***************************************************    
    *                    Jquery                        * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: All
    function Historial_now(){

		//-----> Historial Almacen
        $("#almacen_historial").empty();
        
        $.get('http://api.gymh2o.com/almacen/historial/tipo/json/?date=', function (data){
            $.each(data, function (key, val) {    

                if (val.tipo == "Consumo Interno"){

                    
                    $("#ci_historial").append("<tr class='success 1-3'><th scope='row' class='text-center'>#</th><td>" + val.fecha + "</td><td>" + val.tipo + "</td><td>" + val.nombre + "</td><td>" + val.descripcion + "</td><td>" + val.precio_compra + "</td><td>" + val.precio_venta + "</td><td>" + val.cantidad + " " + val.unidad + "</td><td>" + val.codebar + "</td></tr>")            
                    
            
                    }else{

                        $("#almacen_historial").append("<tr class='success 1-2'><th scope='row' class='text-center'>#</th><td>" + val.fecha + "</td><td>" + val.tipo + "</td><td>" + val.nombre + "</td><td>" + val.descripcion + "</td><td>" + val.precio_compra + "</td><td>" + val.precio_venta + "</td><td>" + val.cantidad + " " + val.unidad + "</td><td>" + val.codebar + "</td></tr>")            
            
                        }

                });

            })  
          	

    }
    /***************************************************    
    *                    Jquery                        * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: All
    function Historial_date(){
    	//----->

    		//----->
            $(".almacen-datepicker").datepicker({
                onSelect: function(selectedDate) {
                    
		        $("#almacen_historial").empty();
		        
		        $.get('http://api.gymh2o.com/almacen/historial/tipo/json/?date='+ selectedDate, function (data){
		            $.each(data, function (key, val) {    

		                $("#almacen_historial").append("<tr class='success 3'><th scope='row' class='text-center'>#</th><td>" + val.fecha + "</td><td>" + val.tipo + "</td><td>" + val.nombre + "</td><td>" + val.descripcion + "</td><td>" + val.precio_compra + "</td><td>" + val.precion_venta + "</td><td>" + val.cantidad + " " + val.unidad + "</td><td>" + val.codebar + "</td></tr>")            
		                });
		            
		            
		            })  

			//-----> Historial Almacen CI

		       $("#ci_historial").empty();
		        
		        $.get('http://api.gymh2o.com/almacen/historialci/tipo/json/?date='+ selectedDate, function (data){
		            $.each(data, function (key, val) {
                        $("#ci_historial").append("<tr class='success 3'><th scope='row' class='text-center'>#</th><td>" + val.fecha + "</td><td>" + val.tipo + "</td><td>" + val.nombre + "</td><td>" + val.descripcion + "</td><td>" + val.precio_compra + "</td><td>" + val.precion_venta + "</td><td>" + val.cantidad + " " + val.unidad + "</td><td>" + val.nombre_trabajador + "</td></tr>")            
                        });
		            })  


		        }
			});
           	//----->

 
        //----->
    	}       	