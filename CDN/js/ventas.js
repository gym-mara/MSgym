console.error('Run: Puro Flow !!!')

    $(document).on("ready",All)
	
    $(document).on("ready",VaporHoy)
    $(document).on("ready",MembresiaHoy)
    //$(document).on("ready",ProductosHoy)
    //$(document).on("ready",ServiciosHoy)
    $(document).on("ready",TodoHoy)
    $(document).on("ready",TodoHoycount)
    
	$(document).on("ready",Fecha)
    console.debug('Run: All')

    /***************************************************    
    *                    Jquery                        * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: All

    function All(){
        console.log('Begin: All')
        id_advance_trabajdor = $("#id_advance_trabajdor").val()
        //alert(id_advance_trabajdor)
        	fecha = $( "#datepicker" ).datepicker();
            //api_ventas_folio2  folio-hoy

            $.get(api_ventas_folio2, function (data) {
                $.each(data, function (key, val) {
                    //alert(val.item_precio_final)
                    x = val.id;
                    
                    $(".folio-hoy,.ticket-folio").html(x);


                });
            })              
            /*
            $.get(api_ventas_todo + '?id_advance_trabajdor=' + id_advance_trabajdor, function (data) {
                $.each(data, function (key, val) {
                    //alert(val.item_precio_final)
                    //$(".total-hoy,.item-tiket-total-corte").html(val.item_precio_final);


                });
            })  
            */
            $(".total-hoy").empty();
            setTimeout(function () {

                //$(".total-hoy,.item-tiket-total-corte").html(taskArray2A);


                var taskArray2Axxx        = new Array();
             
                $(".precio-final-x").each(function() {
                   taskArray2Axxx.push($(this).html());
                    });

                // this is the variable that will store the result of your summation
                var result = 0;

                for (var i = 0; i< taskArray2Axxx.length; i++) {
                    result += parseFloat(taskArray2Axxx[i]);
                    }

                    $(".total-hoy").html(result);

                }, 5000);

        console.log('End: All')
        }   
    function Fecha(){
	    $("#datepicker").datepicker();
	    $("#datepicker").on("change",function(){
	        fecha = $(this).val();
	        VaporHoy2(fecha)
	        MembresiaHoy2(fecha)
	        //ProductosHoy2(fecha)
	        //ServiciosHoy2(fecha)
	        TodoHoy2(fecha)
            TodoHoycount2(fecha)
	    	});
    	}

    function VaporHoy(){
        console.log('Begin: Vapor');
        var id_advance_trabajdor = $("#id_advance_trabajdor").val()

        $("#vapor_viwer").empty()
        //Update url                          
            $.get(api_ventas_vapor + '?id_advance_trabajdor=' + id_advance_trabajdor + '&fecha=', function (data) {
                $.each(data, function (key, val) {
                    
					$("#vapor_viwer").append("<tr class='active'><th scope='row'>" + val.item + "</th><td>" + val.item_precio + "</td><td>- % " + val.item_descuento + " </td><td >" + val.item_precio_final + "</td></tr>")

                });
            })  



        console.log('End: Vapor');
        }
    function VaporHoy2(fecha){
        console.log('Begin: Vapor');
        var id_advance_trabajdor = $("#id_advance_trabajdor").val()

        $("#vapor_viwer").empty()
        //Update url                          
            $.get(api_ventas_vapor + '?id_advance_trabajdor=' + id_advance_trabajdor + '&fecha=' + fecha, function (data) {
                $.each(data, function (key, val) {
                    
					$("#vapor_viwer").append("<tr class='active'><th scope='row'>" + val.item + "</th><td>" + val.item_precio + "</td><td>- % " + val.item_descuento + " </td><td>" + val.item_precio_final + "</td></tr>")

                });
            })  



        console.log('End: Vapor');
        }

    function MembresiaHoy(){
        console.log('Begin: Vapor');
        var id_advance_trabajdor = $("#id_advance_trabajdor").val()

        $("#membresia_viwer").empty()
        //Update url                          
            $.get(api_ventas_membresia + '?id_advance_trabajdor=' + id_advance_trabajdor + '&fecha=', function (data) {
                $.each(data, function (key, val) {
                    
					$("#membresia_viwer").append("<tr class='active'><th scope='row'>" + val.item + "</th><td>" + val.item_precio + "</td><td>- % " + val.item_descuento + " </td><td>" + val.item_precio_final + "</td></tr>")

                });
            })  



        console.log('End: Vapor');
        }
    function MembresiaHoy2(fecha){
        console.log('Begin: Vapor');
        var id_advance_trabajdor = $("#id_advance_trabajdor").val()

        $("#membresia_viwer").empty()
        //Update url                          
            $.get(api_ventas_membresia + '?id_advance_trabajdor=' + id_advance_trabajdor + '&fecha=' + fecha, function (data) {
                $.each(data, function (key, val) {
                    
					$("#membresia_viwer").append("<tr class='active'><th scope='row'>" + val.item + "</th><td>" + val.item_precio + "</td><td>- % " + val.item_descuento + " </td><td>" + val.item_precio_final + "</td></tr>")

                });
            })  



        console.log('End: Vapor');
        }        

    //--->
    function ProductosHoy(){
        console.log('Begin: Vapor');
        var id_advance_trabajdor = $("#id_advance_trabajdor").val()

        $("#productos_viwer").empty()
        //Update url                          
            $.get(api_ventas_productos + '?id_advance_trabajdor=' + id_advance_trabajdor + '&fecha=', function (data) {
                $.each(data, function (key, val) {
                    
					$("#productos_viwer").append("<tr class='active'><th scope='row'>" + val.item + "</th><td>" + val.item_precio + "</td><td>- % " + val.item_descuento + " </td><td>" + val.item_precio_final + "</td></tr>")

                });
            })  



        console.log('End: Vapor');
        }
    function ProductosHoy2(fecha){
        console.log('Begin: Vapor');
        var id_advance_trabajdor = $("#id_advance_trabajdor").val()

        $("#productos_viwer").empty()
        //Update url                          
            $.get(api_ventas_productos + '?id_advance_trabajdor=' + id_advance_trabajdor + '&fecha=' + fecha, function (data) {
                $.each(data, function (key, val) {
                    
					$("#productos_viwer").append("<tr class='active'><th scope='row'>" + val.item + "</th><td>" + val.item_precio + "</td><td>- % " + val.item_descuento + " </td><td>" + val.item_precio_final + "</td></tr>")

                });
            })  



        console.log('End: Vapor');
        }        

    //---->    
    function ServiciosHoy(){
        console.log('Begin: Vapor');
        var id_advance_trabajdor = $("#id_advance_trabajdor").val()

        $("#servicios_viwer").empty()
        //Update url                          
            $.get(api_ventas_servicios + '?id_advance_trabajdor=' + id_advance_trabajdor + '&fecha=', function (data) {
                $.each(data, function (key, val) {
                    
					$("#servicios_viwer").append("<tr class='active'><th scope='row'>" + val.item + "</th><td>" + val.item_precio + "</td><td>- % " + val.item_descuento + " </td><td>" + val.item_precio_final + "</td></tr>")

                });
            })  



        console.log('End: Vapor');
        }
    function ServiciosHoy2(fecha){
        console.log('Begin: Vapor');
        var id_advance_trabajdor = $("#id_advance_trabajdor").val()

        $("#servicios_viwer").empty()
        //Update url                          
            $.get(api_ventas_servicios + '?id_advance_trabajdor=' + id_advance_trabajdor + '&fecha=' + fecha, function (data) {
                $.each(data, function (key, val) {
                    
					$("#servicios_viwer").append("<tr class='active'><th scope='row'>" + val.item + "</th><td>" + val.item_precio + "</td><td>- % " + val.item_descuento + " </td><td>" + val.item_precio_final + "</td></tr>")

                });
            })  



        console.log('End: Vapor');
        }        

    function TodoHoy(){
        console.log('Begin: Vapor');
        var id_advance_trabajdor = $("#id_advance_trabajdor").val()

        $("#todo_viwer").empty()
        //Update url                          
            $.get(api_ventas_all + '?id_advance_trabajdor=' + id_advance_trabajdor + '&fecha=', function (data) {
                $.each(data, function (key, val) {
                    
                    //if (id_advance_trabajdor == 'admin,kuc1XyJjGvDWwK') {

                        //var xcv = "<span class='label label-danger almacen cajero'>borrar</span>";
                        /*
                        var xcv = " ";
                        }else{
                        
                            var xcv = " ";
                        
                            }
                            */

					$("#todo_viwer").append("<tr class='active'><th scope='row'>" + val.item + "</th><td>" + val.item_precio_final + "</td><td>- % " + val.item_descuento + " </td><td  class='total_x'>" + val.item_precio_final + "</td></tr>")

                });
            })  


		Sumar_total()
                    $(".total-hoy").empty();
            setTimeout(function () {

                //$(".total-hoy,.item-tiket-total-corte").html(taskArray2A);


                var taskArray2Axxx        = new Array();
             
                $(".precio-final-x").each(function() {
                   taskArray2Axxx.push($(this).html());
                    });

                // this is the variable that will store the result of your summation
                var result = 0;

                for (var i = 0; i< taskArray2Axxx.length; i++) {
                    result += parseFloat(taskArray2Axxx[i]);
                    }

                    $(".total-hoy").html(result);

                }, 5000);

        console.log('End: Vapor');
        }
    function TodoHoy2(fecha){
        console.log('Begin: Vapor');
        var id_advance_trabajdor = $("#id_advance_trabajdor").val()

        $("#todo_viwer").empty()
        //Update url                 
        //total_x 
    
            $.get(api_ventas_todo + '?id_advance_trabajdor=' + id_advance_trabajdor + '&fecha=' + fecha, function (data) {
                $.each(data, function (key, val) {
                    
					$("#todo_viwer").append("<tr class='active'><th scope='row'>" + val.item + "</th><td>" + val.item_precio_final + "</td><td>- % " + val.item_descuento + " </td><td  class='total_x'>" + val.item_precio_final + "</td></tr>")
					
                });
            })  
        Sumar_total()
                    $(".total-hoy").empty();
            setTimeout(function () {

                //$(".total-hoy,.item-tiket-total-corte").html(taskArray2A);


                var taskArray2Axxx        = new Array();
             
                $(".precio-final-x").each(function() {
                   taskArray2Axxx.push($(this).html());
                    });

                // this is the variable that will store the result of your summation
                var result = 0;

                for (var i = 0; i< taskArray2Axxx.length; i++) {
                    result += parseFloat(taskArray2Axxx[i]);
                    }

                    $(".total-hoy").html(result);

                }, 5000);

        console.log('End: Vapor');
        }        

    function TodoHoycount(){
        console.log('Begin: Vapor');
        var id_advance_trabajdor = $("#id_advance_trabajdor").val()

        $("#todo_count_viwer").empty()
        $("#ticket-concepto-corte").empty();
        //Update url
            $.get(api_ventas_corte + '?id_advance_trabajdor=' + id_advance_trabajdor + '&fecha=', function (data) {
                $.each(data, function (key, val) {

                    $("#todo_count_viwer").append("<tr class='active'><th scope='row'>" + val.item + "</th><td>" + val.item_precio + "</td><td>" + val.cantidad + " </td><td class='precio-final-x'>" + val.item_precio_final + "</td></tr>")
                    $("#ticket-concepto-corte").append("<tr><th><h5>" + val.cantidad+ "</h5></th><td><h5>" + val.item + "</h5></td><td><h5>" + val.item_precio_final + "</h5></td></tr>")

                });
            })  


        Sumar_total()

        $(".print-corte").click(function(event) {
            PrintTicketCcorte()
            })     

        console.log('End: Vapor');
        }
    function TodoHoycount2(fecha){
        console.log('Begin: Vapor');
        var id_advance_trabajdor = $("#id_advance_trabajdor").val()

        $("#todo_count_viwer").empty()
        $("#ticket-concepto-corte").empty();
        //Update url                 
        //total_x 
    
            $.get(api_ventas_corte + '?id_advance_trabajdor=' + id_advance_trabajdor + '&fecha=' + fecha, function (data) {
                $.each(data, function (key, val) {
                    

                    $("#todo_count_viwer").append("<tr class='active'><th scope='row'>" + val.item + "</th><td>" + val.item_precio + "</td><td>" + val.cantidad + " </td><td class='precio-final-x'>" + val.item_precio_final + "</td></tr>")
                    $("#ticket-concepto-corte").append("<tr><th><h5>" + val.cantidad+ "</h5></th><td><h5>" + val.item + "</h5></td><td><h5>" + val.item_precio_final + "</h5></td></tr>")


                });
            })  
        Sumar_total()

        
        $(".print-corte").click(function(event) {
            PrintTicketCcorte()
            })        

        console.log('End: Vapor');
        }        

	function Sumar_total(){
		//----->
            setTimeout(function(){

				console.log('sumar total')

				var task_y = new Array();

		        

		        $(".total_x").each(function() {
		           task_y.push($(this).html());
		           //console.log(task_y)
		            })                              
                
		        // this is the variable that will store the result of your summation
		        var result_x = 0;

		        for (var i = 0; i< task_y.length; i++) {
		            result_x += parseFloat(task_y[i]);
		            }
                    
		            $("#subtotal").html(result_x)

		            setTimeout(function(){
			            var subtotal = parseFloat($("#subtotal").html())
			            //var caja     = parseFloat($("#caja").html())
                        var caja     = parseFloat(0)
			            var total    = parseFloat(subtotal + caja)
                        var total    = parseFloat(subtotal)

			            $("#total,.item-tiket-total-corte").html(total)
		        	},500)
		},1000)            
	   }        

    function PrintTicketCcorte(){
        
        id_advance_trabajdor = $("#id_advance_trabajdor").val()
        total_hoy            = $(".total-hoy").html()

        data_alta = 
            "id_advance_trabajdor=" + id_advance_trabajdor +
            "&total_hoy="           + total_hoy
        ;

        console.log(data_alta);

        $.ajax({
            url: app_url,
            type: 'POST',
            dataType: 'json',
            success: function (data) {},
            data: data_alta
            })
            .done(function( msg ) {
                alert("OK Actualizacioncorte Venta");
            });

        var contents = $("#dialog-ticket-corte").html();
        var frame1 = $('<iframe />');
        frame1[0].name = "frame1";
        frame1.css({ "position": "absolute", "top": "-1000000px" });
        $("body").append(frame1);
        var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
        frameDoc.document.open();
        //Create a new HTML document.

                                            frameDoc.document.write("<html><head><title>MaraSport</title><!-- Bootstrap --><link href='http://cdn.gymh2o.com/framework/bootstrap/css/bootstrap.css' rel='stylesheet'><style>body(font-weight: bold;)input{border:0px;font-size: 12pt;}h4{font-size: 12pt;}.table{font-size: 12pt;}</style></head><body><div id='ticket-print'  class='container text-uppercase'>                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center'>  <img src='" + cdn_url +  "img/logomara.PNG' class='text-center'><br><h4><b>:::MaraSport:::</b></h4><h4><b>    </b></h4></div><div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left'><div class='bs-example' data-example-id='simple-table'><table class='table'> ");
                    //Append the DIV contents.
                    frameDoc.document.write(contents);
                                            frameDoc.document.write("</div></div><div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center'>  <h4><b>** Gracias por su compra **</b></h4><h5>Direccion + Telefono.</h5></div></div></body></html>");

        frameDoc.document.close();

                    setTimeout(function () {

                        window.frames["frame1"].focus();

                        window.frames["frame1"].print();


                        frame1.remove();

                        }, 500);

                    setTimeout(function () {

                        window.location.replace(app_url);
                        
                        }, 500);
    }