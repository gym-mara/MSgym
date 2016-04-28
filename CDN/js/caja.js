console.error('Run: Puro Flow !!!')
    
    //-----> STEP 1
	$(document).on("ready",All);
    
    //-----> STEP 2
    $(document).on("ready",allModal);
	
    //-----> STEP 3
	$(document).on("ready",btnOpciones);

    //-----> STEP 4
    $(document).on("ready",subtotal);

    //-----> STEP 5
    $(document).on("ready",btnPrint);    


    //-----> STEP 6
    $(document).on("ready",btnDescuento);   


    //-----> STEP 7
    $(document).on("ready",btnCancelar);           

    //-----> STEP 8
    $(document).on("ready",btncajaventas);        


    //-----------------------------------------------------------------------------------------------> STEP 1

    /***************************************************    
    *                    Jquery                        * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: All
    function All(){
        console.debug('Begin: All');
        
        

        viwerFolio();
        listProductos();     

            //----->
       		   $("#list-caja .Consumo").hide()
       		   $("#dialog-ticket-caja,#ticket-print,#ticket-pago,#dialog-ticket-pago-all, #dialog-ticket-pago-all2, #dialog-ticket-pago-all3").hide();
       		   $(".ticket-socio").html($(".n-trabajador").html());
            
        console.debug('End: All');
        }     

    /***************************************************    
    *            All() ---> Button Opciones            * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: Button
    function viwerFolio(){

        console.debug("    Benig: Folio XHR");

                $(".ticket-folio").empty();

                // XMLHttpRequest --->
                    console.debug("        Benig: Folio XMLHttpRequest");

                    $.get(api_ticket_folio, function( data ) {

                        $.each(data, function (key, val) {
                            $(".ticket-folio").append(val.id);                              
                            });

                    }).done(function() {
                                
                                    console.log("Almacen: Folio Success (TPSx000001).");
                                        
                                    }).fail(function(jqXHR, textStatus , errorThrown) {
                                            
                                        error_net(jqXHR, textStatus );

                                            console.error("        Almacen: Folio Error (TPEx000001 [" + fail_txt + "] ).");
                                            alert("Almacen: Folio Error (TPEx000001 [" + fail_txt + "] ).");

                                        }).always(function() {
                                
                                            console.log("        Almacen: Folio Success (TPSx000002).");
                                
                                                });

                console.debug("        End: Folio XMLHttpRequest");
            //API End: Almacen All

        console.debug("    End: Folio XHR");
        }

    /***************************************************    
    *            All() ---> Lista de Productos         * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: Lista de Productos
    //2
    function listProductos(){
        console.debug("    Begin:Lista Productos");        

            $("#list-caja").empty();
            $("#list-caja .ticket-socio-i").hide();

                $("#list-caja").empty('');

            // XMLHttpRequest --->
                console.debug("        Begin: Lista Productos XMLHttpRequest");

                $("#fecha-especial").datepicker();

                $.get(api_productos_all, function( data ) {

                    $.each(data, function(key, val){

                        //-----> A
                        if (typeof(val.codebar) != 'undefined' && val.codebar != null){
                            var var_codebar = val.codebar;
                            }else{
                                var var_codebar = 'sin codigo de barras';
                                }
                        //----->A
                        
                        //-----> 
                        var x = randomString(20); 
                        //----->

                        //----->
                        if (val.tipo == 'membresia'  || val.tipo == 'Membresia') {
                            
                            //----->
                            if (val.cantidad > 100) {
                                cantidad_x = "Suficientes";
                            }
                            //----->

                            //----->
                            if ($("#tipo_trabajdor").val() == "cajero") {

                                $("#list-caja").append("<tr class='" + val.tipo + " '><th scope='row' class='list-caja-cantidad " + x + "'>" + cantidad_x + " " + val.unidad + "</th><td><div class='concepto membresia ' id='" + val.id_advance + "' value='"+val.nombre+"' >"+ val.nombre + "</div><div>Socio:<span id='txt-socio'></span> <div class='ticket-socio-i' style='visible:'><input type='text' id='venta-buscar-socio-xxx'/><input type='text' id='id_socio' name='id_socio'class='hidden'/></div></td><td class= '" + x + " precio " + val.id_advance + "'>" + val.precio_venta + "</td><td class='" + x + " descuento'><input id='" + val.id_advance + "'  class='" + x + " descuento "+val.id_advance + "' name='descuento' type='text' value='0' disabled/></td>                                              <td class='codigobarras'>" + var_codebar +"</td><td><input  class='" + val.id_advance + " preciofinal' name='preciofinal' type='text' value='" + val.precio_venta + " ' disabled/></td></tr>");                           
                                
                                }else{

                                    //----->
                                    /*
                                    if (val.nombre == "Membresia 1 Mes") {

                                        $("#list-caja").append("<tr class='" + val.tipo + " '><th scope='row' class='list-caja-cantidad " + x + "'>" + cantidad_x + " " + val.unidad + "</th><td><div class='concepto membresia ' id='" + val.id_advance + "' value='"+val.nombre+"' >"+ val.nombre + "</div><div>Socio:<span id='txt-socio'></span> <div class='ticket-socio-i' style='visible:'><input type='text' id='venta-buscar-socio-xxx'/><input type='text' id='id_socio' name='id_socio'class='hidden'/></div>Fecha Inicio de la Membresia: <div class='ticket-socio-i' style='visible:'><input type='text' class='" + x + " descuento fecha-especial' placeholder='2016-03-21'/></td><td class= '" + x + " precio " + val.id_advance + "'>" + val.precio_venta + "</td><td class='" + x + " descuento'><input id='" + val.id_advance + "'  class='" + x + " descuento "+val.id_advance + "' name='descuento' type='text' value='0' disabled/></td>                                              <td class='codigobarras'>" + var_codebar +"</td><td><input  class='" + val.id_advance + " preciofinal' name='preciofinal' type='text' value='" + val.precio_venta + " ' disabled/></td></tr>");                           
                                        
                                        }else{
                                        
                                            $("#list-caja").append("<tr class='" + val.tipo + " '><th scope='row' class='list-caja-cantidad " + x + "'>" + cantidad_x + " " + val.unidad + "</th><td><div class='concepto membresia ' id='" + val.id_advance + "' value='"+val.nombre+"' >"+ val.nombre + "</div><div>Socio:<span id='txt-socio'></span> <div class='ticket-socio-i' style='visible:'><input type='text' id='venta-buscar-socio-xxx'/><input type='text' id='id_socio' name='id_socio'class='hidden'/></div></td><td class= '" + x + " precio " + val.id_advance + "'>" + val.precio_venta + "</td><td class='" + x + " descuento'><input id='" + val.id_advance + "'  class='" + x + " descuento "+val.id_advance + "' name='descuento' type='text' value='0' disabled/></td>                                              <td class='codigobarras'>" + var_codebar +"</td><td><input  class='" + val.id_advance + " preciofinal' name='preciofinal' type='text' value='" + val.precio_venta + " ' disabled/></td></tr>");                           
                                        
                                        }
                                        */
                                        $("#list-caja").append("<tr class='" + val.tipo + " '><th scope='row' class='list-caja-cantidad " + x + "'>" + cantidad_x + " " + val.unidad + "</th><td><div class='concepto membresia ' id='" + val.id_advance + "' value='"+val.nombre+"' >"+ val.nombre + "</div><div>Socio:<span id='txt-socio'></span> <div class='ticket-socio-i' style='visible:'><input type='text' id='venta-buscar-socio-xxx'/><input type='text' id='id_socio' name='id_socio'class='hidden'/></div>Fecha Inicio de la Membresia: <div class='ticket-socio-i' style='visible:'><input type='text' class='" + x + " descuento fecha-especial' placeholder='2016-03-21'/></td><td class= '" + x + " precio " + val.id_advance + "'>" + val.precio_venta + "</td><td class='" + x + " descuento'><input id='" + val.id_advance + "'  class='" + x + " descuento "+val.id_advance + "' name='descuento' type='text' value='0' disabled/></td>                                              <td class='codigobarras'>" + var_codebar +"</td><td><input  class='" + val.id_advance + " preciofinal' name='preciofinal' type='text' value='" + val.precio_venta + " ' disabled/></td></tr>");                           
                                    //----->

                                }
                            //----->
                            }else{}
                        //----->

                        //----->
                        if (val.tipo == 'Producto') {
                            
                            //----->
                            if (val.cantidad > 0) {
                                console.info("x:todo" + val.tipo );

                                $("#list-caja").append("<tr class='" + val.tipo + " '><th scope='row' class='list-caja-cantidad " + x + "'>" + val.cantidad  + " " + val.unidad + "</th><td class='concepto' id='" + val.id_advance + "' value='"+val.nombre+"' > "+ val.nombre + "            </td>                                                                                                                                                                                                                 <td class= '" + x + " precio " + val.id_advance + "'>" + val.precio_venta + "</td><td class='" + x + " descuento'><input id='" + val.id_advance + "'  class='" + x + " descuento "+val.id_advance + "' name='descuento' type='text' value='0' disabled/></td><td class='codigobarras'>" + var_codebar +"</td><td><input  class='" + val.id_advance + " preciofinal' name='ajuste'   type='text' value='" + val.precio_venta + " ' disabled/></td></tr>");                                  
                                }else{}
                            //----->
                            }else{}
                        //----->

                        });

                    }).done(function() {
                        
                        console.log("    Almacen: Producto Lista Success (TPSx000003).");

                        $("#list-caja .descuento,#list-caja .preciofinal").hide();
                        $("#list-caja .ticket-socio-i,.nombre-socio,#id-socio").hide();

                        }).fail(function(jqXHR, textStatus , errorThrown) {
                                
                            error_net(jqXHR, textStatus );

                                console.error("        Almacen: Producto Lista Error (TPEx000001 [" + fail_txt + "] ).");
                                alert("Almacen: Producto Lista Error (TPEx000001 [" + fail_txt + "] ).");

                            }).always(function() {
                                
                                cloneRow();
                                console.log("        Almacen: Producto Lista Success (TPSx000004).");
                    
                                });
                    //API End: Almacen All

                console.debug("        End: Lista Productos XMLHttpRequest");
            //API End: Almacen All

        console.debug("    End: Lista Productos");        
        }                


        /***************************************************    
        *             Clonar Lista de Productos            * 
        ***************************************************/
        /*
        *
        *
        */
        /*
            buscarsocio
            txtPago
            totalChange
        */
        //BENIG: Clonar Lista de Productos
        function cloneRow(){
            console.debug("         Begin: Clone rOW");  

                    $("#list-caja tr").click(function() {
                        
                        $("#list-caja-activa").append("<tr class='list-caja-a' >" + $(this).html() + "</tr>")

                        $(".list-caja-a .list-caja-cantidad,.list-caja-a .codigobarras ").hide();
                        $(".list-caja-a .descuento ,.list-caja-a .preciofinal").show();

                        //----->                
                        totalChange()   
                        buscarsocio()           
                        txtPago();

                        $("#list-caja-activa .ticket-socio-i").show();
                    });

            console.debug("         End:  Clone rOW");     
            }         

            /***************************************************    
            *                                                  * 
            ***************************************************/
            /*
            *
            *
            */
            //BENIG: 
            function buscarsocio(){
                console.debug("             Begin: buscarsocio");

                    $("#venta-buscar-socio-xxx").autocomplete({
                        minLength: 4,
                        delay: 400,
                        source: function(req, add){  
                
                        // XMLHttpRequest --->
                            $.getJSON(api_search, req, function(data) {  
                                var suggestions = [] ;  
                                    $.each(data, function(i,val){  
                                        suggestions.push({
                                            id: val.id,
                                            id_advance: val.id_advance,
                                            nombre: val.nombre,
                                            value: val.nombre,
                                            membresia: val.membresia,
                                        });
                                    });  
                                add(suggestions);  
                            });  

                        },select: function (event, ui) {
                            $("#id_socio").val(ui.item.id_advance);
                            $(".ticket-txt-socio").html(ui.item.nombre + "<br> No. de socio: " + ui.item.id );
                            $("#venta-buscar-socio-xxx").hide();
                            //$(".venta-nombre").html(ui.item.nombre + " " + ui.item.membresia)
                            //$("#venta-buscar-socio,#venta-socio-id_advance").hide()

                            txt_socio = $("#txt-socio").html()
                            $(".t-txt-snom").append(ui.item.nombre) 
                            $("#ticket-print").fadeIn( "slow")   
               
                            }
                        })

                    console.debug("             End:  buscarsocio");    
                }                       

            /***************************************************    
            *                                                  * 
            ***************************************************/
            /*
            *
            *
            */
            //BENIG:                 
                function txtPago(){
                    console.debug("             Begin: txtPago");
                    
                        console.error("txt pago")
                        $( ".fecha-especial" ).datepicker();
                    console.debug("             End:  txtPago");    

                    }                

            /***************************************************    
            *                                                  * 
            ***************************************************/
            /*
            *
            *
            */
            //BENIG: 
            /*
                btnTotaltrue
                btnTotaltruesocio
            */
            function totalChange(){
                console.debug("             Begin: totalChange");  
                            
                    var taskArray2A        = new Array();

                    $("#list-caja-activa .preciofinal").each(function() {
                       taskArray2A.push($(this).val());
                        });

                    // this is the variable that will store the result of your summation
                    var result = 0;

                    for (var i = 0; i< taskArray2A.length; i++) {
                        result += parseFloat(taskArray2A[i]);
                        }

                        $(".total-total,.item-tiket-total").html(result.toFixed(2))

                        //----->
                        btnTotaltrue();

                        $("#ticket-concepto input[name=ajuste]").val($("#list-caja-activa input[name=ajuste]").val());


                        //$("#pf_x").removeAttr('disabled');
                        $("input[name=ajuste]").removeAttr('disabled')

                        //----->

                        var taskArray2Ax        = new Array();

                        $("#list-caja-activa .list-caja-a .concepto").each(function() {
                            
                            taskArray2Ax.push($(this).attr('id'));
                        });
                        



                        //alert(taskArray2A);

                            var basketItems = taskArray2Ax;
                            var returnObj = {};

                            $.each(basketItems, function(key,value) {

                                var numOccr = $.grep(basketItems, function (elem) {
                                    return elem === value;
                                }).length;
                                    returnObj[value] = numOccr
                            });

                                var array = new Array();
                                $("#ticket-concepto").empty();

                                    $.map(returnObj, function(value, index) {
                                        array = [index,value];
                                        
                                        var concepto  = $("#list-caja-activa .list-caja-a .concepto#" + array[0]).html();

                                        var fecha_especial  = $("#list-caja-activa .list-caja-a .fecha-especial#" + array[0]).html();


                                        var precio    = $("#list-caja-activa .list-caja-a .precio." + array[0]).html();
                                        var descuento = $("#list-caja-activa .list-caja-a .descuento." + array[0]).val();
                                        var total     = array[1] * precio;


                                        //alert( $("#list-caja-activa .list-caja-a .concepto#" + array[0]).html())
                                        /*<tr class="list-caja-a">
                                            <th scope="row t-cantidad " >array[1]</th>
                                            <td class="    t-concepto " >concepto </td>
                                            <td class="    t-precio   " >precio</td>
                                            <td class="    t-descuento" >descuento </td>
                                            <td class="    t-subtotal " >total</td>
                                            </tr>

                                            m9i8nuy7t6vr5ce4xw3z
                                            2z3wx4ec5rv6tb7yn8um
                                            i8ju7hy6b5tv4rcexmi8

                                            m8n7ub6yv5tc4rx3ezwm
                                            8mk7jnyh6btgvrfcedxw
                                            nuybtvrcj7uh6yg5tf4r

                                            j7uh6yg5tf4r8ij7uh6y                                    
                                            */
                                        console.log(array[0]);
                                        if (array[0] == 'm9i8nuy7t6vr5ce4xw3z' || array[0] == '2z3wx4ec5rv6tb7yn8um' || array[0] == 'i8ju7hy6b5tv4rcexmi8' || 
                                            array[0] == 'm8n7ub6yv5tc4rx3ezwm' || array[0] == '8mk7jnyh6btgvrfcedxw' || array[0] == 'nuybtvrcj7uh6yg5tf4r' || 
                                            array[0] == 'j7uh6yg5tf4r8ij7uh6y') {
                                            console.log('membresia');

                                            $(".t-all").hide()

                                            $(".t-txt-men").html(concepto)

                                            //----->
                                            btnTotaltruesocio();    

                                            var nticket = 1;

                                            }else{

                                                console.log('todo');
                                                $(".t-x-socio").hide();
                                                $("#ticket-concepto").append("<tr class='list-caja-a'><th scope='row t-cantidad ' >" +array[1]  + "</th><td class='    t-concepto' >" +concepto  + "</td><td class='    t-precio   ' >" +precio    + "</td><td class='    t-descuento' >" +descuento + "</td><td class='    t-subtotal ' >$ " + total    + "</td></tr>");                                       
                                                
                                                var nticket = 0;

                                                }
                                                console.log(nticket);
                                        /*
                                        if (concepto != 'membresia estudiante y adulto mayores') {
                                            
                                            $("#ticket-concepto").append("<tr class='list-caja-a'><th scope='row t-cantidad ' >" +array[1]  + "</th><td class='    t-concepto' >" +concepto  + "</td><td class='    t-precio   ' >" +precio    + "</td><td class='    t-descuento' >" +descuento + "</td><td class='    t-subtotal ' >$ " + total    + "</td></tr>");
                                            
                                            }else{

                                                $("#ticket-concepto").append("Membresia");

                                                }
                                                */
                                        
                                    });

                                console.log(array);     
                            
                console.debug("             End:  totalChange");    
                }

                /***************************************************    
                *                                                  * 
                ***************************************************/
                /*
                *
                *
                */
                //BENIG: 
                function  btnTotaltrue(){
                    console.log("btn Total true: ")
                        $("#ticket-print").fadeIn( "slow")      
                    }
                /***************************************************    
                *                                                  * 
                ***************************************************/
                /*
                *
                *
                */
                //BENIG: 
                function  btnTotaltruesocio(){
                    console.log("btn Total truesocio: ")
                        $("#ticket-print").fadeOut( "slow")     
                    }       


    //-----------------------------------------------------------------------------------------------> STEP 1





    //-----------------------------------------------------------------------------------------------> STEP 2

    /***************************************************    
    *                      allModal                    * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: Button
    function allModal(){
        console.debug("Begin: All Modal");

            listProductosmodal();
            btnListaproductos();

        console.debug("End: All Modal");
        }

    /***************************************************    
    *     allModal() ---> Lista de Productos Modal     * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: Lista de Productos Modal
    //3
    function listProductosmodal(){
        console.debug("    Begin: listProductosmodal");

        dialog = $( "#lista-productos" ).dialog({
            position: {
                my: "center middle",
                at: "center middle",
                of: window,
                collision: "none"
            },
            show: { effect: "blind", duration: 300 },
            resizable: false,                        
            autoOpen: false,
            height: 550,
            width: 850,
            modal: true,
            buttons: {
                Cerrar: function() {
                    
                    dialog.dialog("close");   

                    viwerFolio();
                    listProductos();     

                    }},
                close: function() {

                    dialog.dialog("close");      

                    }
            });

        console.debug("    End: listProductosmodal");
        }

    /***************************************************    
    *     allModal() ---> Listaproductos               * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: Listaproductos
    //1
    function btnListaproductos(){
        console.debug("    Begin: btnListaproductos");

            $(".btn-l-pro").click(function(event) {

                console.log('hide productos')

                //producto membresia vapor clases spa
                $("#list-caja .Producto , #list-caja .visita ").show()
                

                $("#list-caja .membresia,#list-caja .Membresia,#list-caja .Spa,#list-caja .Clases,#list-caja .Interno,#list-caja .Vapor,#list-caja .ajuste , #list-caja .Pago").hide()
                
                    dialog.dialog( "open" );
                
                });

        console.debug("    End: btnListaproductos");
        }

    //-----------------------------------------------------------------------------------------------> STEP 2






    //-----------------------------------------------------------------------------------------------> STEP 3

    /***************************************************    
    *                  Button Opciones                 * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: Button
    function btnOpciones(){
        console.debug("Begin: btnOpciones");
                    
            btnListamembresia();

            btnListavapor();

            btnListaclases();

            btnListaspa();

        console.debug("End: btnOpciones");
        }   

    /***************************************************    
    *     btnOpciones() ---> Listaproductos 	       * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: Listaproductos
    //1
	function btnListamembresia(){
        console.debug("    Begin: btnListamembresia");
            $(".btn-l-mem").click(function(event) {
			
        	//producto membresia vapor clases spa
        	$(" #list-caja .membresia ").show()
        	$("#list-caja .Producto , #list-caja .visita , #list-caja .ajuste,#list-caja .Spa,#list-caja .Clases,#list-caja .Interno,#list-caja .Vapor , #list-caja .Pago").hide()

        		dialog.dialog( "open" );
        	
        	});
        console.debug("    End: btnListamembresia");
		}

    /***************************************************    
    *     btnOpciones() ---> Listavapor			       * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: Listaproductos
    //1
	function btnListavapor(){
        console.debug("    Begin: btnListavapor");            
        $(".btn-l-vap").click(function(event) {

        	//producto membresia vapor clases spa
        	$("#list-caja .Vapor").show()
        	$("#list-caja .Consumo,#list-caja .Producto  , #list-caja .visita , #list-caja .membresia , #list-caja .ajuste,#list-caja .Spa,#list-caja .Clases,#list-caja .Internom , #list-caja .Pago").hide()

        	dialog.dialog( "open" );

        	});
        console.debug("    End: btnListavapor");            
		}

    /***************************************************    
    *     btnOpciones() ---> Listaclases		       * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: Listaproductos
    //1
	function btnListaclases(){
        console.debug("    Begin: btnListaclases");             
        $(".btn-l-cla").click(function(event) {

        	//producto membresia vapor clases spa
        	$("#list-caja .Clases").show()
        	$("#list-caja .Producto  , #list-caja .visita , #list-caja .membresia , #list-caja .ajuste,#list-caja .Spa ,#list-caja .Interno,#list-caja .Vapor , #list-caja .Pago , #list-caja .servicio ").hide()

        	dialog.dialog( "open" );

        	});
        console.debug("    End: btnListaclases");                
		}

    /***************************************************    
    *     btnOpciones() ---> Listaproductos 			       * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: Listaproductos
    //1
	function btnListaspa(){
        console.debug("    Begin: btnListaspa");

        $(".btn-l-spa").click(function(event) {
			
			$("#list-caja .Spa").show()
        	$("#list-caja .Producto , #list-caja .visita , #list-caja .membresia,#list-caja .Clases,#list-caja .Interno,#list-caja .Vapor,#list-caja .ajuste , #list-caja .Pago").hide()
        	dialog.dialog( "open" );

        	});

        console.debug("    End: btnListaspa");
		}

    //-----------------------------------------------------------------------------------------------> STEP 3

    //-----------------------------------------------------------------------------------------------> STEP 4

    /***************************************************    
    *                                                  * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: 
    function subtotal(){
        $("#subtotal").click(function(event) {
            totalChange();
        });
        }           
    //-----------------------------------------------------------------------------------------------> STEP 4



    //-----------------------------------------------------------------------------------------------> STEP 5
       /***************************************************    
        *                   Print Ticket                   * 
        ***************************************************/
        /*
        *
        *
        */
        /*
            ticketPrint
            ticketPrint
            TicketGuardar
        */
        //BENIG: Print Ticket               
        function btnPrint(){
            $("#ticket-print").one("click", function(event) {
                /* Act on the event */
                var xyz = $(".membresia").attr('id');

                if (typeof(xyz) != 'undefined' && xyz != null){
                    console.log('1');
                        ticketPrint();
                        ticketPrint();

                    }else{
                        console.log('2');
                            ticketPrint();
                            ticketPrint();

                        }

                TicketGuardar();


                //----->
                $("#ticket-print").hide();

                reloadon(500);
                });

            }    

            /***************************************************    
            *                                                  * 
            ***************************************************/
            /*
            *
            *
            */
            //BENIG: 
            function ticketPrint() {
                /*
                txt_socio_txt = $("#txt-socio").html();

                if (typeof(txt_socio_txt) != 'undefined' && txt_socio_txt != null){
                    $(".ticket-socio").html(txt_socio_txt);
                    }

                    */
                $(".item-id-tiket").html($("#id_advance_ticket_servicio").val());

                var contents = $("#dialog-ticket-caja").html();

                var frame1 = $('<iframe />');
                frame1[0].name = "frame1";
                frame1.css({ "position": "absolute", "top": "-1000000px" });
                $("body").append(frame1);
                var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
                frameDoc.document.open();
                /*    
                        //Create a new HTML document.
                        frameDoc.document.write('<html><head><title>H2O TICKET</title>');
                        frameDoc.document.write('</head><body>');
                        //Append the external CSS file.
                        
                        frameDoc.document.write('<link href="http://cdn.gymh2o.com/framework/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />');
                        frameDoc.document.write('<link href="http://cdn.gymh2o.com/css/print.css"                         rel="stylesheet" type="text/css" />');

                        //Append the DIV contents.
                        frameDoc.document.write(contents);
                        frameDoc.document.write('</body></html>');
                */
                        //Create a new HTML document.
                        /*
                        <html>
                            <head>
                                <title>H2O TICKET</title>
                                <link href='//cdn.gymh2o.com/framework/bootstrap/css/bootstrap.css' rel='stylesheet' type='text/css' />
                                <style>h5{font-size: 8pt;}.table{font-size: 6pt;}</style>
                            </head>
                            <body>
                                <div id='ticket-print'  class='container'>                  
                                    <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center'>  
                                        <img src='http://cdn.gymh2o.com/img/logogris2.jpg' class='text-center'><br>
                                        <h5>:::GYM H2O:::</h5><h5>PERSIA EN MOVIMIENTO</h5>
                                    </div>
                                    <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left'>
                                        <div class='bs-example' data-example-id='simple-table'><table class='table'> 
                        */
                        
                        frameDoc.document.write("<html><head><title>MaraSport</title><!-- Bootstrap --><link href='http://cdn.gymh2o.com/framework/bootstrap/css/bootstrap.css' rel='stylesheet'><style>body(font-weight: bold;)input{border:0px;font-size: 12pt;}h4{font-size: 12pt;}.table{font-size: 12pt;}</style></head><body><div id='ticket-print'  class='container text-uppercase'>                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center'>  <img src='" + cdn_url +  "img/logomara.PNG' class='text-center'><br><h4><b>:::MaraSport:::</b></h4><h4><b>    </b></h4></div><div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left'><div class='bs-example' data-example-id='simple-table'><table class='table'> ");
                        //Append the DIV contents.
                        frameDoc.document.write(contents);
                        frameDoc.document.write("</div></div><div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center'>  <h4><b>** Gracias por su compra **</b></h4><h5>Direccion + Telefono.</h5></div></div></body></html>");
                        /*

                        
                                        </div>
                                    </div>
                                    <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center'>  
                                        <h5>** Gracias por su compra **</h5>
                                    </div>

                                </div>
                            </body>
                        </html>
                        */
                        frameDoc.document.close();
                        setTimeout(function () {
                            window.frames["frame1"].focus();
                            window.frames["frame1"].print();
                            frame1.remove();
                        }, 500);
                
                
                
                
                }

            /***************************************************    
            *                                                  * 
            ***************************************************/
            /*
            *
            *
            */
            //BENIG: 
            function TicketGuardar(){
                
                //----->Begin: DB gym_ticket
                    //-----> id_advance fecha  id_advance_trabajador total

                    taskArray2Aticket_x          = new Array();

                    //var ticket_info = Array()
                        id_advance_trabajdor         = $("#id_advance_trabajdor").val()
                        servicios_total_items        = $(".total-total").html()
                        id_advance_ticket_servicio_2 = randomString(20);
                        fecha_ticket_servicio        = $("#gymh2o_date_now").val();
                    
                    //----->info ticket
                        ticket_info          = [id_advance_trabajdor,servicios_total_items,id_advance_ticket_servicio_2,fecha_ticket_servicio];
                        //alert(taskArray2Aticket_x);

                //----->End: DB gym_ticket

                //----->Begin: DB gym_ventas
                    //-----> id id_advance id_advance_trabajador id_advance_ticket fecha  item item_precio item_descuento item_precio_final
                    //----->                         #                    #          #      *       *              *            *              
                        
                        /*
                        taskArray2Aticket0           = new Array();
                        taskArray2Aticket1           = new Array();
                        */
                        taskArray2Aticket1           = new Array();
                        taskArray2Aticket2           = new Array();
                        taskArray2Aticket3           = new Array();
                        taskArray2Aticket4           = new Array();           
                        taskArray2Aticket5           = new Array();
                        taskArray2Aticket6           = new Array();
                
                    //----->id_advance concepto
                        $("#list-caja-activa .concepto").each(function() {
                           taskArray2Aticket1.push($(this).attr('id'));
                            });     

                    //----->concepto
                        $("#list-caja-activa .concepto").each(function() {
                           taskArray2Aticket2.push($(this).html());
                            });                   
                    //----->concepto    precio
                        $("#list-caja-activa .precio").each(function() {
                           taskArray2Aticket3.push($(this).html());
                            });                      
                    //----->concepto    precio  % descuento 
                        $("#list-caja-activa input[name=descuento]").each(function() {
                           taskArray2Aticket4.push($(this).val());
                            });            
                    //----->concepto    precio  % descuento preciofinal
                        $("#list-caja-activa #id_socio").each(function() {
                           taskArray2Aticket6.push($(this).val());
                            });



                    //----->concepto    precio  % descuento preciofinal
                        $("#list-caja-activa .preciofinal").each(function() {
                           taskArray2Aticket5.push($(this).val());
                            });
                            person = {
                                ticket_info          : ticket_info,  
                                taskArray2Aticket1   : taskArray2Aticket1,
                                taskArray2Aticket2   : taskArray2Aticket2,
                                taskArray2Aticket3   : taskArray2Aticket3,
                                taskArray2Aticket4   : taskArray2Aticket4,
                                taskArray2Aticket5   : taskArray2Aticket5,
                                taskArray2Aticket6   : taskArray2Aticket6,
                                taskArray2Aticket7   : $(".fecha-especial").val()
                                }

                        /*
                        if (typeof($('#list-caja-activa #id_socio').val()) != 'undefined' && $('#list-caja-activa #id_socio').val() != null){
                            alert(1)
                            }else{
                                alert(2)    
                                }
                                */

                //----->End: DB gym_ventas
             
                    // XMLHttpRequest --->

                    $.ajax({
                        url: api_ticket_new,
                        type: 'POST',
                        dataType: 'json',
                        data: person
                        }).done(function() {
                                    
                                        console.log("Caja: Ticket New Success (TPSx000001).");
                                            
                                        }).fail(function(jqXHR, textStatus , errorThrown) {
                                                error_net(jqXHR, textStatus );

                                                console.error("Caja: Ticket New Error (TPEx000001 [" + fail_txt + "] ).");
                                                alert("Caja: Ticket New Error (TPEx000001 [" + fail_txt + "] ).");

                                            }).always(function() {
                                    
                                                console.log("Caja: Ticket New Success (TPSx000002).");
                                    
                                                    });

                                //API End: Almacen All
            
                }           

    //-----------------------------------------------------------------------------------------------> STEP 5

    //-----------------------------------------------------------------------------------------------> STEP 6

    /***************************************************    
    *                   Descuento                      * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: Descuento
    /*
    totalChange
    */
    function btnDescuento(){
        
        $("#descuento").click(function(event) {
            $("#list-caja-activa .descuento input").removeAttr('disabled')


                $(".list-caja-a .descuento input[name=descuento]").change(function(){                
                    
                    y_xxx = $(this).attr('id')

                    

                    y_xxx_descuento = $("input[name=descuento]" + "." + y_xxx).val();

                    y_xxx_precio    = $("." + y_xxx + ".precio").html();
                    
                    console.log("id: " + y_xxx + " descuento: " + y_xxx_descuento + " precio: " + y_xxx_precio)

                    total_descuento = (y_xxx_precio * y_xxx_descuento / 100)
                    total           = y_xxx_precio - total_descuento                    

                    $("." + y_xxx + ".preciofinal").val(total);
                    
                    totalChange()

                    })


            })

        }


    //-----------------------------------------------------------------------------------------------> STEP 6

    

    //-----------------------------------------------------------------------------------------------> STEP 7

    /***************************************************    
    *                   Cancelar                       * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: Cancelar
    function btnCancelar(){
        $("#cancelar").click(function(event) {
            /* Act on the event */
            $("#list-caja-activa,#ticket-concepto,.ticket-folio").empty();
            $(".total-total,.item-tiket-total,.ticket-folio").html('');
            $("#ticket-print").fadeOut( "slow")
        });
        }      

    //-----------------------------------------------------------------------------------------------> STEP 7


//-----------------------------------------------------------------------------------------------> STEP 8
    
    /***************************************************    
    *                   Listaproductos                 * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: Listaproductos
    //1
    function btncajaventas(){
         btnListapago();
         btnListapago2();
        }

    /***************************************************    
    *                   Listaproductos                 * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: Listaproductos
    //1
    function btnListapago(){
        $(".btn-l-pago").click(function(event) {

            //producto membresia vapor clases spa
            $("#dialog-ticket-pago-all2").show();
            $("#ticket-pago").show();
            $("#dialog-ticket-pago-all3").hide();
            $("#dialog-ticket-caja-all1 , #dialog-ticket-caja-all2 ,#list-caja .membresia,#list-caja .Spa,#list-caja .Clases,#list-caja .Interno,#list-caja .Vapor,#list-caja .ajuste,#list-caja .Producto,#list-caja .visita").hide()
            

            });

            $("#ticket-pago").click(function(event) {

                id_advance_trabajdor         = $("#id_advance_trabajdor").val();
                fecha_ticket_servicio        = $("#gymh2o_date_now").val();

                txt_pago_concepto            = $("#txt-pago-concepto").val();
                txt_pago_pago                = $("#txt-pago-pago").val();



                //alert("fecha" + fecha_ticket_servicio + " id_advance_trabajador total " + id_advance_trabajdor+ " concepto " + txt_pago_concepto + " total  " +txt_pago_pago)

                /*
                    

                */
                    person = {
                        fecha                 :fecha_ticket_servicio,
                        id_advance_trabajador : id_advance_trabajdor,
                        total                 :txt_pago_pago,
                        fecha                 :fecha_ticket_servicio,
                        item                  :txt_pago_concepto,
                        item_precio_final     :txt_pago_pago
                        }

     
            // XMLHttpRequest --->
            
            $.ajax({
                url: api_new_salidadinero,
                type: 'POST',
                dataType: 'json',
                data: person
                
                }).done(function() {
                        
                            console.log("Caja: Tiket Success (TPSx000001).");
                                
                            }).fail(function(jqXHR, textStatus , errorThrown) {
                                    
                                        error_net(jqXHR, textStatus );

                                    console.error("Caja: Tiket Error (TPEx000001 [" + fail_txt + "] ).");
                                    alert("Caja: Tiket Error (TPEx000001 [" + fail_txt + "] ).");

                                }).always(function() {
                        
                                    console.log("Caja: Tiket Success (TPSx000002).");
                                    reloadon(0);

                                        });
                //API End: Almacen All

                

            

                });


        //----->
        }

    /***************************************************    
    *                   Listaproductos                 * 
    ***************************************************/
    /*
    *
    *
    */
    //BENIG: Listaproductos
    //1
    function btnListapago2(){
        $(".btn-l-salida").click(function(event) {

            //producto membresia vapor clases spa
            
            $("#dialog-ticket-pago-all2").hide();
            $("#dialog-ticket-pago-all3").show();
            $("#ticket-pago2").show();

            $("#dialog-ticket-caja-all1,#dialog-ticket-caja-all2 ,#list-caja .membresia,#list-caja .Spa,#list-caja .Clases,#list-caja .Interno,#list-caja .Vapor,#list-caja .ajuste,#list-caja .Producto,#list-caja .visita").hide()
            

            });



            $("#ticket-pago2").click(function(event) {

                id_advance_trabajdor         = $("#id_advance_trabajdor").val();
                fecha_ticket_servicio        = $("#gymh2o_date_now").val();

                txt_pago_concepto            = $("#txt-entrada-concepto").val();
                txt_pago_pago                = $("#txt-entrada-pago").val();


                    person = {
                        fecha                 :fecha_ticket_servicio,
                        id_advance_trabajador : id_advance_trabajdor,
                        total                 :txt_pago_pago,
                        fecha                 :fecha_ticket_servicio,
                        item                  :txt_pago_concepto,
                        item_precio_final     :txt_pago_pago
                        }

     
            // XMLHttpRequest --->
            
            $.ajax({
                url: api_new_entradadinero ,
                type: 'POST',
                dataType: 'json',
                data: person
                    }).done(function() {
                        
                        console.log("Caja: New Ticket Success (TPSx000003).");


                                    }).fail(function(jqXHR, textStatus , errorThrown) {
                                            
                                        error_net(jqXHR, textStatus );

                                            console.error("Caja: New Ticket Error (TPEx000001 [" + fail_txt + "] ).");
                                            alert("Caja: New Ticket Error (TPEx000001 [" + fail_txt + "] ).");

                                        }).always(function() {
                                            
                                            console.log("Caja: New Ticket Success (TPSx000004).");
                                
                                                    //------->                
                                                folio      = $(".ticket-folio").html()
                                                socio     = $(".ticket-socio").html()
                                                socio_txt = $(".txt-soci").html();

                                            var contents = "2: Fecha:" + fecha_ticket_servicio + "<br> Folio: " + folio + "<br>Empleado: " +socio + "<br>Socio:"+ socio_txt + "<br>Concepto: " + txt_pago_concepto +"<br> Monto: $" + txt_pago_pago+" <br>";

                                            var frame1 = $('<iframe />');
                                            frame1[0].name = "frame1";
                                            frame1.css({ "position": "absolute", "top": "-1000000px" });
                                            $("body").append(frame1);
                                            var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
                                            frameDoc.document.open();

                                                    frameDoc.document.write("<html><head><title>H2O TICKET</title><!-- Bootstrap --><link href='http://cdn.gymh2o.com/framework/bootstrap/css/bootstrap.css' rel='stylesheet'><style>body(font-weight: bold;)input{border:0px;font-size: 12pt;}h4{font-size: 12pt;}.table{font-size: 12pt;}</style></head><body><div id='ticket-print'  class='container text-uppercase'>                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center'>  <img src='http://cdn.gymh2o.com/img/logogris2.jpg' class='text-center'><br><h4><b>:::GYM H2O:::</b></h4><h4><b>PERSIA EN MOVIMIENTO</b></h4></div><div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left'><div class='bs-example' data-example-id='simple-table'><table class='table'> ");
                                                    //Append the DIV contents.
                                                    frameDoc.document.write(contents);
                                                    frameDoc.document.write("</div></div><div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center'>  xxxyyyzzz<h4><b>** Gracias por su compra **</b></h4><h5>Persia No 64,  colonia romero Rubió, CP. 15400 <br>Teléfono GymH2o 2616-4633 <br>Teléfono Spa 6553-7484</h5></div></div></body></html>");
 
                                                    frameDoc.document.close();
                                                    setTimeout(function () {
                                                        window.frames["frame1"].focus();
                                                        window.frames["frame1"].print();
                                                        frame1.remove();
                                                    }, 250);

                                                    reloadon(500);         

                                                    });


                                        });
                    //API End: Almacen All



        }


//-----------------------------------------------------------------------------------------------> STEP 8



 











