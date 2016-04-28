	console.error('Run: Puro Flow !!!')	
    
    $(document).on("ready",All);
    console.debug('Run: All');

	$(document).on("ready",Productosall);
	$(document).on("ready",ProductosActualizar);
    
    $(document).on("ready",BtnItems);

    function All(){
        console.log('Begin: All');

            $(".productos-datepicker").datepicker({
                onSelect: function(selectedDate) {

        			//API Begin: 
                    $.get(api_productos_historial  + selectedDate, function (data){
                        
                        $("#productos_historial").empty()
						
                        $.each(data, function (key, val) {    
                            $("#productos_historial").append("<tr class='success'><th scope='row' class='text-center'><input type='checkbox'  class='id_advance_ch' name='id_advance' value='" + val.id_advance + "'></th><td>"+ val.tipo +"</td><td>" + val.nombre + "</td><td>" + val.descripcion + "</td><td>" + val.precio_compra + "</td><td>" + val.precio_venta + "</td><td>" + val.cantidad +" "+ val.unidad +"</td><td>" + val.codebar + "</td></tr>")
                            });
                        
						}).done(function() {
						            
						                console.log("Almacen: Producto Lista Success (TPSx000001).");
						                    
						                }).fail(function(jqXHR, textStatus , errorThrown) {
						                        
						                        if (jqXHR.status === 0){
						                            fail_txt = "Not connection Verify Network [   ]. " + textStatus;
						                            }else if (jqXHR.status == 200){
						                                fail_txt = "Requested page Ok [200]. " + textStatus;
						                                }else if (jqXHR.status == 404){
						                                    fail_txt = "Requested page not found [404]. " + textStatus;
						                                    }else if (jqXHR.status == 500){
						                                        fail_txt = "Internal Server Error [500]. " + textStatus;
						                                        }else if (exception === 'parsererror'){
						                                            fail_txt = "Requested JSON parse failed [   ]. " + textStatus;
						                                            }else if (exception === 'timeout'){
						                                                fail_txt = "Time out error [   ]. " + textStatus;
						                                                }else if (exception === 'abort'){
						                                                    fail_txt = "Ajax request aborted [   ]. " + textStatus;
						                                                    }else{
						                                                        fail_txt = "Uncaught Error [   ]. " + jqXHR.responseText;
						                                                        }

						                        console.error("Almacen: Producto Lista Error (TPEx000001 [" + fail_txt + "] ).");
						                        alert("Almacen: Producto Lista Error (TPEx000001 [" + fail_txt + "] ).");

						                    }).always(function() {
						            
						                        console.log("Almacen: Producto Lista Success (TPSx000002).");
						            
						                            });
					//API End: Almacen All 

                }
            });

        console.log('End: All');
        }    

    function Productosall(){
        
        $("#json_info_productos").empty();
        
        $.get(api_productos_all, function (data){
            $.each(data, function (key, val) {    
            	
                if (typeof(val.codebar) != 'undefined' && val.codebar != null){
                    var var_codebar = val.codebar;
                    }else{
                        var var_codebar = 'sin codigo de barras';
                        }

            	if (val.tipo == 'Producto') {
            		$("#json_info_productos").append("<tr class='success "+ val.tipo +"' D><th scope='row' class='text-center'><input type='checkbox'  class='id_advance_ch' name='id_advance' value='" + val.id_advance + "'></th><td>"+ val.tipo +"</td><td>" + val.nombre + "</td><td>" + val.descripcion + "</td><td>" + val.precio_compra + "</td><td>" + val.precio_venta + "</td><td>" + val.cantidad_dos +" "+ val.unidad +"<input type='text' id='" + val.id_advance + "' class='cantidad_x hidden' value='" + val.cantidad_dos  +"' /></td><td>" + val.cantidad  +"</td><td>" + var_codebar +"</td></tr>")
            		}else{}
                
            
                });
			}).done(function() {
			            
			                console.log("Almacen: Producto Lista Success (TPSx000001).");
			                    
			                }).fail(function(jqXHR, textStatus , errorThrown) {
			                        
			                        if (jqXHR.status === 0){
			                            fail_txt = "Not connection Verify Network [   ]. " + textStatus;
			                            }else if (jqXHR.status == 200){
			                                fail_txt = "Requested page Ok [200]. " + textStatus;
			                                }else if (jqXHR.status == 404){
			                                    fail_txt = "Requested page not found [404]. " + textStatus;
			                                    }else if (jqXHR.status == 500){
			                                        fail_txt = "Internal Server Error [500]. " + textStatus;
			                                        }else if (exception === 'parsererror'){
			                                            fail_txt = "Requested JSON parse failed [   ]. " + textStatus;
			                                            }else if (exception === 'timeout'){
			                                                fail_txt = "Time out error [   ]. " + textStatus;
			                                                }else if (exception === 'abort'){
			                                                    fail_txt = "Ajax request aborted [   ]. " + textStatus;
			                                                    }else{
			                                                        fail_txt = "Uncaught Error [   ]. " + jqXHR.responseText;
			                                                        }

			                        console.error("Almacen: Producto Lista Error (TPEx000001 [" + fail_txt + "] ).");
			                        alert("Almacen: Producto Lista Error (TPEx000001 [" + fail_txt + "] ).");

			                    }).always(function() {
			            
			                        console.log("Almacen: Producto Lista Success (TPSx000002).");
			            
			                            });
			        //API End: Almacen All
        }  

    function ProductosActualizar(){
	
		$("#dialog-productos-actualizar").hide()
        
            $( ".btn-actualizar" ).click(function(){
            	
            	LeeAlmacenOne()


			    $('.cantidad-tranferir').change(function() { 

			    	$(".cantidad_total").val($('.cantidad').val() - $('.cantidad-tranferir').val());
			    });

				$("#dialog-productos-actualizar").dialog({

					position: { my: "center top"},
					resizable: false,
					height:400,
					width: 800,
					modal: true,
					buttons: {
						"Actualizar": function() {
							
							CantidadTranferir()
							$( this ).dialog( "close" )
							
							},Cancel: function() {
								
								CantidadTranferir()
								$( this ).dialog( "close" )
							
							}	
						}

                	})
            	})
		
		}
	
	function LeeAlmacenOne(){
		id_advance = $("input[name='id_advance']:checked").val()

			//Actualizar
			    $.get(api_almacen_one + id_advance, function (data){
			        $.each(data, function (key, val) {
						
			        	$('.almacen_nombre').html(val.nombre)
			        	$('.almacen_cantidad').html(val.cantidad)
			        	$('.cantidad').val(val.cantidad)	
			        	$('.almacen_tipo').html(val.tipo)	       	

			            });
					}).done(function() {
					            
					                console.log("Almacen: Producto Lista Success (TPSx000001).");
					                    
					                }).fail(function(jqXHR, textStatus , errorThrown) {
					                        
					                        if (jqXHR.status === 0){
					                            fail_txt = "Not connection Verify Network [   ]. " + textStatus;
					                            }else if (jqXHR.status == 200){
					                                fail_txt = "Requested page Ok [200]. " + textStatus;
					                                }else if (jqXHR.status == 404){
					                                    fail_txt = "Requested page not found [404]. " + textStatus;
					                                    }else if (jqXHR.status == 500){
					                                        fail_txt = "Internal Server Error [500]. " + textStatus;
					                                        }else if (exception === 'parsererror'){
					                                            fail_txt = "Requested JSON parse failed [   ]. " + textStatus;
					                                            }else if (exception === 'timeout'){
					                                                fail_txt = "Time out error [   ]. " + textStatus;
					                                                }else if (exception === 'abort'){
					                                                    fail_txt = "Ajax request aborted [   ]. " + textStatus;
					                                                    }else{
					                                                        fail_txt = "Uncaught Error [   ]. " + jqXHR.responseText;
					                                                        }

					                        console.error("Almacen: Producto Lista Error (TPEx000001 [" + fail_txt + "] ).");
					                        alert("Almacen: Producto Lista Error (TPEx000001 [" + fail_txt + "] ).");

					                    }).always(function() {
					            
					                        console.log("Almacen: Producto Lista Success (TPSx000002).");
					            
					                            });
					        //API End: Almacen All    

    	}

    function CantidadTranferir(){

		/*cantidad-tranferir cantidad_total*/
		id_advance_ch		  = $("input[name='id_advance']:checked").val(); 
		cantidad_trasferencia = $("#54t76u34wrw4erseasdf").val();
		cantidad_total        = $(".cantidad_total").val();
		cantidad_tranferir    = $(".cantidad-tranferir").val();
		almacen_tipo          = $('.almacen_tipo').html();
		
		almacen_nombre        =$('.almacen_nombre').html();

   		data= 
   			"id_advance_ch="          + id_advance_ch+
   			"&cantidad_trasferencia=" + cantidad_trasferencia+
   			"&cantidad_total="        + cantidad_total +
   			"&cantidad_tranferir="    + cantidad_tranferir +
   			"&almacen_tipo ="         + almacen_tipo   +      
   			"&almacen_nombre ="       + almacen_nombre ;   

	
		        
		        // XMLHttpRequest --->
		        $.ajax({
		            url: api_productos_update,
		            type: 'POST',
		            dataType: 'json',
		            data: data
					}).done(function() {
					            
					                console.log("Almacen: Producto Lista Success (TPSx000001).");
					                    
					                }).fail(function(jqXHR, textStatus , errorThrown) {
					                        
					                        if (jqXHR.status === 0){
					                            fail_txt = "Not connection Verify Network [   ]. " + textStatus;
					                            }else if (jqXHR.status == 200){
					                                fail_txt = "Requested page Ok [200]. " + textStatus;
					                                }else if (jqXHR.status == 404){
					                                    fail_txt = "Requested page not found [404]. " + textStatus;
					                                    }else if (jqXHR.status == 500){
					                                        fail_txt = "Internal Server Error [500]. " + textStatus;
					                                        }else if (exception === 'parsererror'){
					                                            fail_txt = "Requested JSON parse failed [   ]. " + textStatus;
					                                            }else if (exception === 'timeout'){
					                                                fail_txt = "Time out error [   ]. " + textStatus;
					                                                }else if (exception === 'abort'){
					                                                    fail_txt = "Ajax request aborted [   ]. " + textStatus;
					                                                    }else{
					                                                        fail_txt = "Uncaught Error [   ]. " + jqXHR.responseText;
					                                                        }

					                        console.error("Almacen: Producto Lista Error (TPEx000001 [" + fail_txt + "] ).");
					                        alert("Almacen: Producto Lista Error (TPEx000001 [" + fail_txt + "] ).");

					                    }).always(function() {
					            			Productosall();
					                        console.log("Almacen: Producto Lista Success (TPSx000002).");
					            
					                            });
					        //API End: Almacen All

		            
		       

		
    	}

    function BtnItems(){
        
        $(".btn-primary").click(function() {
            
            
            $(".Producto , .membresia , .ajuste , .visita , .servicio").show();
            $(".Interno").hide();

            });

        $(".btn-info").click(function() {
            
            
            $(".Producto , .membresia , .ajuste , .visita , .servicio").hide();
            $(".Interno").show();

            });
        
        }            	