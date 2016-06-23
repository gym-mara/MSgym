console.error('Run: Puro Flow !!!')

    $(document).on("ready",All);

    /*************************
    *                        *
    *                        *
    *      TRABAJADORES      *
    *                        *
    *                        *
    *************************/  

    $(document).on("ready",DashboardPersonalAsistencia);

    /*************************/ 

    /*************************
    *                        *
    *                        *
    *         SOCIOS         *
    *                        *
    *                        *
    *************************/ 

    $(document).on("ready",DashboardClientesNuevo);
    $(document).on("ready",DashboardClientesAsistencia);

    /*************************/ 

    $(document).on("ready",DashboardClientes);
    $(document).on("ready",DashboardClientesPago);


    $(document).on("ready",btnlistProductos);

    //$(document).on("ready",DashboardSociosAsistencia);

    //$(document).on("ready",DasboardVentasVapor);
    
    //$(document).on("ready",DasboardVentasServicio);
                          
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
            $("#dialog-ticket-caja").hide()

        console.log('End: All');
        }        

    /*************************
    *                        *
    *                        *
    *      TRABAJADORES      *
    *                        *
    *                        *
    *************************/  
    function DashboardPersonalAsistencia(){
        
        $(".asistencia-info").hide()
        $("#dialog-asistencia2").hide();
        
        $( ".p-asistencia" ).click(function() {

            d            = new Date();
            var date     = d.getFromFormat('yyyy-mm-dd');
            var datetime = d.getFromFormat('yyyy-mm-dd hh:ii:ss');
            $("#peronal-time-now").html(datetime);

            //DashboardClientesAsistencia (e)
            console.info('DashboardClientesAsistencia (e)')     
            $( "#dialog-asistencia2" ).dialog({
                resizable: false,
                height:550,
                width: 800,
                modal: true,
                buttons: {
                    "Registrar": function() {
                        
                        //autocompletarAsistencia2()
                        
                        registrarAsistencaHoy2()

                        $( this ).dialog( "close" )
                        $('.asistencia-info').hide()
                        
            
                        },"Cancel": function() {

                            $( this ).dialog( "close" )
                            $('.asistencia-info').hide()
                            

                            }

                    }

                    })

                $('#personal-fecha').empty()
                $("#personal-nombre").empty()

                autocompletarAsistencia2()
                autocompletarAsistenciaClear()

            })

            }

        function autocompletarAsistenciaClear(){
            $("input.p-i-codebar,input#personal-id_advance,input#personal-codebar").val("")

            var foto = 'http://placehold.it/175x150/FF3D00/000000'

            $("#personal-foto").fadeIn(2000).attr('src', foto );
            $("#personal-nombre").empty()
            $("#personal-id_advance").empty()
            $("#personal-codebar").empty()
            }
        function autocompletarAsistencia2(){

            $("input.p-i-codebar").autocomplete({
                minLength: 4,
                delay: 400,
                source: function(req, add){

                    // XMLHttpRequest --->
                    $.getJSON(api_empleado_search, req, function(data) {  
                        var suggestions = [] ;  
                            $.each(data, function(i,val){  
                                suggestions.push({
                                    nombre     : val.nombre,
                                    value      : val.nombre,
                                    foto       : val.foto,
                                    id_advance : val.id_advance,
                                    codebar    : val.codebar
                                });
                            });  
                        add(suggestions);  
                    })

                },select: function (event, ui) {

                    $('#personal-fecha').empty()
                    //api_empleado_asistencia_hoy
                    $.get(api_empleado_asistencia_hoy + ui.item.id_advance, function (data) {
                        $.each(data, function (key, val) {
                            $('#personal-fecha').append(val.fecha + "<br>");
                        })
                    })                    


                    if (ui.item.foto== "") {
                        var foto = 'http://placehold.it/175x150/FF3D00/000000'
                        }else{
                            var foto = ui.item.foto;
                            foto = foto.split(' ').join('+');

                            foto = "data:image/png;base64," + foto;
                            }

                    $("#personal-foto").fadeIn(2000).attr('src', foto );
                    $("#personal-nombre").empty().append(ui.item.nombre);
                    $("#personal-id_advance").empty().val(ui.item.id_advance);
                    $("#personal-codebar").empty().val(ui.item.codebar);

                    $('.p-asistencia-info').fadeIn()

                }

            })

            }        
        function registrarAsistencaHoy2(){
            
            setTimeout(function(){

                var id_advance       = $("#personal-id_advance").val()
                var cb               = $("#personal-codebar").val()
                var peronaltimenow   = $("#peronal-time-now").html()

                var person           = {cb:cb,id_advance:id_advance,peronaltimenow:peronaltimenow}

                // XMLHttpRequest --->
                $.ajax({

                    url: api_empleado_asistencia ,
                    type: 'POST',
                    dataType: 'json',
                    success: function (data) {},
                    data: person

                    }).done(function() {

                        alert('Asistencia OK')

                        }).fail(function() {

                            alert('Asistencia error');

                            })

                },2000)

            }

    /*************************/  

    /*************************
    *                        *
    *                        *
    *         SOCIOS         *
    *                        *
    *                        *
    *************************/    

    function DashboardClientesNuevo(){

        webCam64()

        $("#dialog-ticket-cliente-nuevo").hide()
        $("#dialog-cliente-nuevo").hide()

        $( "#radio" ).buttonset()
                
        $( ".c-alta" ).click(function() {

            function emptyNew(){
                $("input.i-c-alta-nombre").val('')
                $("input.i-c-alta-f-nacimiento").val('')
                $("input.i-c-alta-telefono    ").val('')
                $("input.i-c-alta-celular").val('')
                $("input.i-c-alta-email").val('')
                $("input.i-c-alta-direccion").val('')
                $(".json_membresia_new").val('')
                                                
                $('.json_membresia_new').empty()                
            }

            $("#dialog-cliente-nuevo").dialog({
                position: { my: "center top"},
                resizable: false,
                height:700,
                width: 800,
                modal: true,
                buttons: {
                    "Registrar": function() {
                        
                        var i_c_alta_nombre        = $("input.i-c-alta-nombre").val()
                        var i_c_alta_nosocio       = $("input.i-c-alta-nosocio").val()
                        
                        var i_c_alta_f_nacimiento  = $("input.i-c-alta-f-nacimiento").val()
                        var i_c_alta_telefono      = $("input.i-c-alta-telefono    ").val()
                        var i_c_alta_celular       = $("input.i-c-alta-celular").val()
                        var i_c_alta_email         = $("input.i-c-alta-email").val()
                        var i_c_alta_direccion     = $("input.i-c-alta-direccion").val()
                        var i_c_alta_membresia_new  = $(".json_membresia_new").val()
                        var i_c_alta_membresia_new2 = $(".json_membresia_new option:selected").html()


                        var i_c_radio              = $('input[name="radio"]:checked').val()
                        var id_advance_trabajador  = $("#id_advance_trabajdor").val()
                        /*
                        function htmlEncode( html ) {
                            return document.createElement( 'a' ).appendChild( 
                                document.createTextNode( html ) ).parentNode.innerHTML;
                        };
                        */

                        //var i_c_formfield = $('#image').attr('src')
                        var i_c_formfield = $('#formfield').val()
                        i_c_formfield =  htmlEncode(i_c_formfield)

                        ventaMembresia = ventaMembresia();

                        data_alta = "nombre_alta="              + i_c_alta_nombre        + 
                                    "&i_c_alta_f_nacimiento="   + i_c_alta_f_nacimiento  +
                                    "&i_c_alta_telefono="       + i_c_alta_telefono      +
                                    "&i_c_alta_celular="        + i_c_alta_celular       +
                                    "&i_c_alta_email="          + i_c_alta_email         +
                                    "&i_c_alta_direccion="      + i_c_alta_direccion     +    
                                    "&i_c_alta_membrecia="      + i_c_alta_membresia_new +
                                    "&i_c_alta_membrecia2="     + i_c_alta_membresia_new2+
                                    "&i_c_direccion="           + i_c_alta_direccion     +
                                    "&i_c_radio="               + i_c_radio              +
                                    "&i_c_formfield="           + i_c_formfield          +
                                    "&id_advance_trabajador="   + id_advance_trabajador  +
                                    "&ventaMembresia="          + ventaMembresia
                                    ;

                            $(".item-tiket-nombre").append(i_c_alta_nombre)
                            $(".item-tiket-concepto").append(i_c_alta_membresia_new2)

                            //save data socio 
                            setTimeout(function(){

                                $.ajax({
                                    url: api_cliente_new,
                                    type: 'POST',
                                    dataType: 'json',
                                    success: function (data) {},
                                    data: data_alta
                                    }).done(function( msg ) {
                                        alert("Socio Nuevo OK")
                                        javascript:location.reload(); 
                                    });

                                },1000)

                            $( this ).dialog( "close" )
                            emptyNew()
                            //DashboardClientesNuevoTicket()

                    },Cancel: function() {

                      $( this ).dialog( "close" )
                      emptyNew()

                    }

                }
            })   
            
            $.get(api_suscripcion_all, function (data) {
                $.each(data, function (key, val) {
                    $('.json_membresia_new').append("<option  id='option_membresia' value='" + val.id_advance + "'>" + val.membresia+ " -  $" + val.precio + "</option>");
                })
            })
            })

        }        
        function DashboardClientesNuevoTicket(){
            $("#dialog-ticket-cliente-nuevo").dialog({
                position: { my: "center top"},
                resizable: false,
                height:400,
                width: 400,
                modal: true,
                buttons: {
                    "Imprimir Ticket": function() {
                        ticketPrint()
                        $( this ).dialog( "close" )
                    },Cerrar: function() {
                      $( this ).dialog( "close" )
                    }
                }
                })   
            }        
    function DashboardSociosAsistencia(){
        $("#p-dialog-asistencia").hide()
        Sociospdialogcb()
        Sociosautocb()
        }
            //----->
            function Sociospdialogcb(){
                //DashboardClientesAsistencia (d)
                console.info('DashboardClientesAsistencia (d)')     

                $( ".p-asistencia" ).click(function() {

                    $('.p-asistencia-info').hide();
                    $(".p-a-i-codebar").val('').focus();

                    //DashboardClientesAsistencia (e)
                    console.info('DashboardClientesAsistencia (e)')     
                    $( "#p-dialog-asistencia" ).dialog({
                        resizable: false,
                        height:400,
                        width: 700,
                        modal: true,
                        buttons: {
                            "Registrar": function() {

                                //registrarasistencia()
                                
                                $( this ).dialog( "close" )
                                $('.p-asistencia-info').hide()

                            },Cancel: function() {

                              $( this ).dialog( "close" )
                              $('.p-asistencia-info').hide()

                            }
                        }
                    })

                })

                }
            //----->
            function Sociosautocb(){
                $(".p-a-i-codebar").autocomplete({
                    minLength: 1,
                    delay: 400,
                    source: function(req, add){ 

                        // XMLHttpRequest --->
                        $.getJSON(api_search_cb , req, function(data) {  

                            var suggestions = [] ;  
                                $.each(data, function(i,val){  

                                    suggestions.push({
                                        id              : val.id ,
                                        id_advance      : val.id_advance ,
                                        value           : val.nombre,
                                        nombre          : val.nombre
                                    });
                                });  
                            add(suggestions);  
                        });  

                        },select: function (event, ui) {
                            alert(hola)

                            }
                    }) 
                }
    function DashboardClientesAsistencia(){
        
        $('.asistencia-info').hide()
        $( "#dialog-asistencia" ).hide();

        refreshAsistencaHoy()

            $(".a-i-codebar").click(function(event) {
                $(".a-i-codebar").val('').focus()   
            });

            $( ".c-asistencia" ).click(function() {
            $(".a-i-codebar").val('').focus()    
            //DashboardClientesAsistencia (e)
            console.info('DashboardClientesAsistencia (e)')     
            $( "#dialog-asistencia" ).dialog({
                resizable: false,
                height:400,
                width: 700,
                modal: true,
                buttons: {
                    "Registrar": function() {
                        
                        autocompletarAsistencia()
                        
                        registrarAsistencaHoy()

                        //refreshAsistencaHoy()

                        $( this ).dialog( "close" )
                        $('.asistencia-info').hide()

                        },"Cancel": function() {

                            //refreshAsistencaHoy()

                            $( this ).dialog( "close" )
                            $('.asistencia-info').hide()

                            }

                    }

                    })

            autocompletarAsistencia()
            
            })

        }

        function refreshAsistencaHoy(){
       
            }  
        
        function autocompletarAsistencia(){
            $(".asistencia-info").hide();
            $("input.a-i-codebar").autocomplete({
                minLength: 1,
                delay: 400,
                source: function(req, add){

                    // XMLHttpRequest --->
                    $.getJSON(api_search_cb, req, function(data) {  
                        var suggestions = [] ;  
                            $.each(data, function(i,val){  
                               suggestions.push({
                                    value: val.nombre,
                                    id_advance: val.id_advance
                                    });
                            });  
                        add(suggestions);  
                        })

                    },select: function (event, ui) {
                        $(".asistencia-info").show();

                        // XMLHttpRequest --->
                            $.getJSON(api_socio_one2 + ui.item.id_advance,function(data) {  

                                $.each(data, function(i,val){  
                                    
                                    if (val.foto== "") {
                                    var foto = 'http://placehold.it/175x150/FF3D00/000000'
                                    }else{
                                        var foto = val.foto;
                                        foto = foto.split(' ').join('+');
                                        foto = "data:image/png;base64," + foto;
                                        }

                                        $(".socio-url").removeAttr('href').attr('href',app_url + 'socio/?id_advance=' + val.id_advance);
                                        
                                        $("#s-socio-asistencia").empty().fadeIn(2000).attr('src', foto );

                                        $(".a-nombre_pago").html(val.nombre);
                                        $(".a-numero_pago").html(val.id);
                                        $(".a-tipo_pago").html(val.membresia);
                                        $(".a-precio_pago").html(val.precio);
                                        $(".a-fecha_renovacion_pago").html(val.fecha_proxima);
                                        $("input.s-id_advance").val(val.id_advance);

                                        
                                    });  

                                }).done(function() {
                                        
                                    console.log("Caja: Tiket Success (TPSx000001).");

                                    // XMLHttpRequest --->
                                        $.getJSON(api_socio_one3 + ui.item.id_advance,function(data) {  

                                            $.each(data, function(i,val){  
                                                
                                                $(".a-tipo_pago").empty().html(val.membresia);    
                                                $(".a-fecha_renovacion_pago").empty().html(val.fecha_proxima);    
                                                
                                                //color_asistencia
                                                if (val.color == 'verde') {
                                                    $(".color_asistencia").addClass('color-verde');
                                                    }else if (val.color == 'amarillo') {
                                                        $(".color_asistencia").addClass('color-amarillo');
                                                        }else if (val.color == 'rojo') {
                                                            $(".color_asistencia").addClass('color-rojo');
                                                            }else{
                                                                $(".color_asistencia").addClass('');
                                                                }
                                                });  

                                            }).done(function() {
                                                    
                                                console.log("Caja: Tiket Success (TPSx000001).");

                                                }).fail(function(jqXHR, textStatus , errorThrown) {
                                                        
                                                    error_net(jqXHR, textStatus );

                                                    console.error("Caja: Tiket Error (TPEx000001 [" + fail_txt + "] ).");
                                                    alert("Caja: Tiket Error (TPEx000001 [" + fail_txt + "] ).");

                                                    }).always(function() {
                                            
                                                        console.log("Caja: Tiket Success (TPSx000002).");
                                                        

                                                        });
                                            //API End: Almacen All

                                          

                                    }).fail(function(jqXHR, textStatus , errorThrown) {
                                            
                                        error_net(jqXHR, textStatus );

                                        console.error("Caja: Tiket Error (TPEx000001 [" + fail_txt + "] ).");
                                        alert("Caja: Tiket Error (TPEx000001 [" + fail_txt + "] ).");

                                        }).always(function() {
                                
                                            console.log("Caja: Tiket Success (TPSx000002).");
                                            

                                            });
                                //API End: Almacen All
                    }

            })

            }        

        function registrarAsistencaHoy(){

                var id_advance_trabajdor = $("input#id_advance_trabajdor").val()
                var id_advance_socio     = $("input.s-id_advance").val()
                var codebar_socio        = $("input.s-codebar").val()
                var a_comentario         = $(".a-comentario").val()


                //alert(a_comentario)

                var person               = {
                    id_advance_trabajdor:id_advance_trabajdor,
                    id_advance_socio:id_advance_socio,
                    codebar_socio :codebar_socio,
                    a_comentario:a_comentario
                    }
                
                // XMLHttpRequest --->
                    console.debug("        Benig: Inicio Asistencia XMLHttpRequest");
                $.ajax({
                    
                    url: api_asistencia_new_one,
                    type: 'POST',
                    dataType: 'json',
                    data: person
                    }).done(function() {
                                
                        console.log("Inicio: Asistencia Success (IASx000001).");
                            
                        }).fail(function(jqXHR, textStatus , errorThrown) {
                                
                            error_net(jqXHR, textStatus );

                                console.error("        Inicio: Asistencia Error (IAEx000001 [" + fail_txt + "] ).");
                                alert("Inicio: Asistencia Error (IAEx000001 [" + fail_txt + "] ).");

                            }).always(function() {
                                reloadon(500);
                                console.log("        Inicio: Asistencia Success (IASx000002).");
                    
                                    });

                console.debug("        End: Inicio Asistencia XMLHttpRequest");
            //API End: Almacen All

            }
    
    /*************************/           

    /*************************
    *                        *
    *                        *
    *        PRODUCTOS       *
    *                        *
    *                        *
    *************************/    
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
                                        $("#list-caja").append("<tr class='" + val.tipo + " '><th scope='row' class='list-caja-cantidad " + x + "'>" + cantidad_x + " " + val.unidad + "</th><td><div class='concepto membresia ' id='" + val.id_advance + "' value='"+val.nombre+"' >"+ val.nombre + "</div></td><td class= '" + x + " precio " + val.id_advance + "'>" + val.precio_venta + "</td><td class='" + x + " descuento'><input id='" + val.id_advance + "'  class='" + x + " descuento "+val.id_advance + "' name='descuento' type='text' value='0' disabled/></td>                                              <td class='codigobarras'>" + var_codebar +"</td><td><input  class='" + val.id_advance + " preciofinal' name='preciofinal' type='text' value='" + val.precio_venta + " ' disabled/></td></tr>");                           
                                    //----->

                                }
                            //----->
                            }else{}
                        //----->

                        //----->
                        /*
                        if (val.tipo == 'Producto') {
                            
                            //----->
                            if (val.cantidad > 0) {
                                console.info("x:todo" + val.tipo );

                                $("#list-caja").append("<tr class='" + val.tipo + " '><th scope='row' class='list-caja-cantidad " + x + "'>" + val.cantidad  + " " + val.unidad + "</th><td class='concepto' id='" + val.id_advance + "' value='"+val.nombre+"' > "+ val.nombre + "            </td>                                                                                                                                                                                                                 <td class= '" + x + " precio " + val.id_advance + "'>" + val.precio_venta + "</td><td class='" + x + " descuento'><input id='" + val.id_advance + "'  class='" + x + " descuento "+val.id_advance + "' name='descuento' type='text' value='0' disabled/></td><td class='codigobarras'>" + var_codebar +"</td><td><input  class='" + val.id_advance + " preciofinal' name='ajuste'   type='text' value='" + val.precio_venta + " ' disabled/></td></tr>");                                  
                                }else{}
                            //----->
                            }else{}
                        */    
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

                $("#lista-productos").dialog({

                position: { my: "center middle"},
                resizable: false,
                height:400,
                width: 800,
                modal: true,
                buttons: {
                    "Cerrar": function() {
                        $( this ).dialog( "close" );
                        }

                    }

                });

        console.debug("    End: listProductosmodal");
        }
    /*************************/  
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
                        /*
                        totalChange()   
                        buscarsocio()           
                        txtPago();
                        */

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
            function ventaMembresia(){
                
                //----->Begin: DB gym_ticket
                    //-----> id_advance fecha  id_advance_trabajador total

                    taskArray2Aticket_x          = new Array();

                    //var ticket_info = Array()
                        //id_advance_trabajdor         = $("#id_advance_trabajdor").val()
                        //servicios_total_items        = $(".total-total").html()
                        //id_advance_ticket_servicio_2 = randomString(20);
                        //fecha_ticket_servicio        = $("#gymh2o_date_now").val();
                    
                    //----->info ticket
                        //ticket_info          = [id_advance_trabajdor,servicios_total_items,id_advance_ticket_servicio_2,fecha_ticket_servicio];
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
                                //ticket_info          : ticket_info,  
                                taskArray2Aticket1   : taskArray2Aticket1,
                                taskArray2Aticket2   : taskArray2Aticket2,
                                taskArray2Aticket3   : taskArray2Aticket3,
                                taskArray2Aticket4   : taskArray2Aticket4,
                                taskArray2Aticket5   : taskArray2Aticket5,
                                taskArray2Aticket6   : taskArray2Aticket6
                                }
                            return person;
                }           


    function btnlistProductos(){
        $("#btn-membresia-v").click(function(event) {
            /* Act on the event */
            $("#lista-producto").hide();

            listProductos();

            listProductosmodal();

            cloneRow();
            $(".list-caja-a").click(function(event) {
                /* Act on the event */
                $(this).empty();
            });
        });    
    }
    /*************************
    *                        *
    *                        *
    *        SERVICIOS       *
    *                        *
    *                        *
    *************************/  

    /********* VAPOR ********/
    /*
    Begin CAJA: 
        Step (1)  ---> Hidden div caja ventas
        Step (2)  ---> Click 'caja'
        Step (3)  ---> setTimeout 500 -> Vaporservicio_dialog()
        Step (4)  ---> open dialog
        Step (5)  ---> Vaporservicio_json(),BtnSubTotal(),BtnDescuento()
        Step (6)  ---> autocomplete
        Step (7)  ---> XMLHttpRequest ---> api_productos_search
        Step (8)  ---> VaporsumarsubTotal()
        Step (9)  ---> BtnSubTotal
        Step (10) ---> BtnDescuento


    */ 
    function DasboardVentasVapor(){
        //$("#venta-socio").hide()

        //-----> Step (1) 
        $("#dialog-caja").hide()

        //-----> Step (2)
        $("#caja,#vapor-caja").click(function() {
            
            $("input.ss-venta").focus().val("")
            $("#id_advance_ticket_servicio").val(randomString(20))
            
            //-----> Step (3)
            setTimeout(function(){

                Vaporservicio_dialog()
                
                },500)
            
            })
            }

    /***[ A (1) Jquery UI dialog ----->aporservicio_json ]***/        
    function Vaporservicio_dialog(){

        $("#servicios_total_items").empty()
        $("#add_items").empty()
        $("#ticket-concepto").empty()
        
        //-----> Step (4)
        $("#dialog-caja").dialog({
            show: { effect: "blind", duration: 300 },
            resizable: false,
            height:600,
            width: 950,
            modal: true,
            buttons: {
                Cerrar: function() {
                        $( this ).dialog( "close" )
                        javascript:location.reload()
                        }
                    }
            }) 
        
        //-----> Step (5)
        setTimeout(function(){
            Vaporservicio_json(),BtnSubTotal(),BtnDescuento(),TicketGuardar(),buscarsocio()
            },500)
            
            $(".j-hidden").hide()
        }

    /***[ B (1) Autocompletar ----->VaporsumarsubTotal ]***/
    //-----> Step (6)
    function Vaporservicio_json(){

        $("input.ss-venta").autocomplete({
            minLength: 4,
            delay: 400,
            source: function(req, add){

                //-----> Step (7)
                setTimeout(function(){
                    // XMLHttpRequest --->
                    $.getJSON(api_productos_search , req, function(data) {  
                        var suggestions = [] ;  
                            $.each(data, function(i,val){  

                                if (val.tipo == 'Producto' || val.tipo == 'Servicio') {
                                    
                                    if (val.cantidad > 0) {   
                                        //alert("P o S ")
                                        suggestions.push({
                                            value        : val.descripcion,
                                            descripcion  : val.nombre,
                                            id_advance   : val.id_advance,
                                            precio_venta : val.precio_venta,
                                            vapor_count  : val.vapor_count,
                                            tipo         : val.tipo
                                        });   
                                    }
                                }

                                if (val.tipo == 'membresia' || val.tipo == 'monto'|| val.tipo == 'visita'){
                                    //alert("membresias")
                                    suggestions.push({
                                        value        : val.membresia + " $" + val.precio,
                                        descripcion  : val.membresia,
                                        id_advance   : val.id_advance,
                                        precio_venta : val.precio,
                                        tipo         : val.tipo
                                    }); 
                                    
                                    $("#venta-socio").show()    
                                }

                                if (val.tipo == 'vapor'){
                                    //alert("vapor")
                                    suggestions.push({
                                        value        : val.vapor,
                                        descripcion  : val.vapor,
                                        id_advance   : val.id_advance,
                                        precio_venta : val.precio,
                                        tipo         : val.tipo
                                    }); 
                                }

                                if (val.tipo == 'ajuste'){
                                    //alert("membresias")
                                    suggestions.push({
                                        value        : val.membresia + " $" + val.precio,
                                        descripcion  : val.membresia,
                                        id_advance   : val.id_advance,
                                        precio_venta : val.precio,
                                        tipo         : val.tipo
                                    }); 
                                }

                            });  
                        add(suggestions);  
                    })
                    },500)

            },select: function (event, ui) {
                
                var id_advance_item = randomValue = randomString(20);
                var descripcion = descripcion

                if (ui.item.vapor_count == null){

                    var descripcion = ui.item.descripcion

                    }else{

                       var descripcion = ui.item.descripcion + " "+ ui.item.vapor_count

                        }

                if (ui.item.tipo == 'membresia'){
                            
                    $("#add_items").append("<tr><th scope='row'>  <div class='col-xs-12 text-left' id='venta-socio'><h5>socio <span class='venta-nombre'></span></h5><input type='text' id='venta-buscar-socio'     class=''><input type='text' id='venta-socio-id_advance' class='j-hidden hidden'></div>   </th></tr><tr><th scope='row'>                          " + descripcion         + "<input class='j-hidden hidden col-xs-12 ' " + id_advance_item     + "' name='nombre'          type='text' value='" + descripcion          +"'><input class='j-hidden hidden col-xs-12 ' " + id_advance_item     + "' name='id_advance_item' type='text' value='" + id_advance_item      +"'><input class='j-hidden hidden col-xs-12 ' " + id_advance_item     + "' name='id_advance'      type='text' value='" + ui.item.id_advance   +"'></th><td>                                     " + ui.item.precio_venta + "<input class='j-hidden hidden            " + id_advance_item      + "' name='precio_venta'    type='text' value='" + ui.item.precio_venta + "'         ></td><td><input class='"                            + id_advance_item      + "' name='descuento'       type='text' value='0'                            disabled ></td><td><input class='            " + id_advance_item      + "' name='precio_total'    type='text' value='" + ui.item.precio_venta + "'  disabled ></td></tr>")
                        
                    }else if (ui.item.tipo == 'ajuste') {

                            $("#add_items").append("<tr><th scope='row'> <input class=' " + id_advance_item + "' name='nombre'          type='text' value='Ajuste de precio'><input class='j-hidden hidden " + id_advance_item + "' name='id_advance_item' type='text' value='" + id_advance_item +      "'><input class='j-hidden hidden " + id_advance_item + "' name='id_advance'      type='text' value='" + ui.item.id_advance +   "'></th><td></td><td>                                        </td><td>                                          <input class='" + id_advance_item   + "' name='precio_total'    type='text' value='" + ui.item.precio_venta + "'></td></tr>")

                        }else{

                            $("#add_items").append("<tr><th scope='row'>" + descripcion     + "<input class='j-hidden hidden " + id_advance_item + "' name='nombre'          type='text' value='" + descripcion +      "'><input class='j-hidden hidden " + id_advance_item + "' name='id_advance_item' type='text' value='" + id_advance_item +      "'><input class='j-hidden hidden " + id_advance_item + "' name='id_advance'      type='text' value='" + ui.item.id_advance +   "'></th><td>"+ ui.item.precio_venta + "<input class='j-hidden hidden " + id_advance_item + "' name='precio_venta'    type='text' value='" + ui.item.precio_venta + "'         ></td><td>                                          <input class='" + id_advance_item   + "' name='descuento'       type='text' value='0'                            disabled></td><td>                                          <input class='" + id_advance_item   + "' name='precio_total'    type='text' value='" + ui.item.precio_venta + "'  disabled></td></tr>")

                        }



                setTimeout(function(){
                    
                    $("input.ss-venta").focus().val("");

                    //-----> Step (8)
                    VaporsumarsubTotal()
                    buscarsocio()

                    },500)                    
                
                }

            })
        }
    
    /***[ B (2) BTN Subtotal -----> VaporsumarsubTotal ]***/
    //-----> Step (9)
    function BtnSubTotal(){

        $(".btn-subtotal").click(function(event) {
            VaporsumarsubTotal()
            })

        }                
    
    /***[ B (3) BTN Descuento ----->VaporsumarsubTotal ]***/
    //-----> Step (10)
    function BtnDescuento(){
        
        $(".btn-descuentos").click(function(event) {

            $("input[name=descuento]").removeAttr('disabled')

            $("#add_items input[name=descuento] , #add_items input[name=nombre]").change(function(){

                x_xxx = $(this).val()
                y_xxx = $(this).attr('class')


                    pre_venta       = $('#add_items input[name=precio_venta].' + y_xxx ).val()
                    descuento       = $('#add_items input[name=descuento].' + y_xxx ).val()
                    total_descuento = (pre_venta * descuento / 100)
                    total           = pre_venta - total_descuento 

                    $('#add_items input[name=precio_total].' + y_xxx ).val(total)

                })

            
            })

        }

    /***[ (1) Subtotal ----->TicketEcho ]***/
    function VaporsumarsubTotal(){

        var taskArray2A        = new Array();
        var taskArray2Aticket1 = new Array();
        var taskArray2Aticket2 = new Array();
        var taskArray2Aticket3 = new Array();
        var taskArray2Aticket4 = new Array();           
        
        $("#add_items input[name=precio_total]").each(function() {
           //x = $(this).attr('class');
           //alert(x)
           taskArray2A.push($(this).val());
            });

        $("#add_items input[name=nombre]").each(function() {
           taskArray2Aticket1.push($(this).val());
           console.log(taskArray2Aticket1)
            })
        
        $("#add_items input[name=precio_venta]").each(function() {
           taskArray2Aticket2.push($(this).val());
           //console.log(taskArray2Aticket2)
            })                
        
        $("#add_items input[name=descuento]").each(function() {
           taskArray2Aticket3.push($(this).val());
           //console.log(taskArray2Aticket3)
            })         

        $("#add_items input[name=precio_total]").each(function() {
           taskArray2Aticket4.push($(this).val());
           //console.log(taskArray2Aticket4)
            })                              
        
        TicketEcho(taskArray2Aticket1,taskArray2Aticket2,taskArray2Aticket3,taskArray2Aticket4)

        // this is the variable that will store the result of your summation
        var result = 0;

        for (var i = 0; i< taskArray2A.length; i++) {
            result += parseFloat(taskArray2A[i]);
            }

            $("#servicios_total_items").html(result.toFixed(2))

        }

    /***[ (2) Autocompletar ----->TicketGuardar ]***/
    function TicketEcho(taskArray2Aticket1,taskArray2Aticket2,taskArray2Aticket3,taskArray2Aticket4){
        
        //console.log(taskArray2Aticket1,taskArray2Aticket2,taskArray2Aticket3,taskArray2Aticket4)
        id_advance_ticket_servicio_2 = $("#id_advance_ticket_servicio").val()

        items_no = taskArray2Aticket1.length;
        
        var items_array = Array()
        var items_array2 = Array()

        for (i = 0; i < items_no; i++) { 

            //items_array[i]  = " | C -- " + taskArray2Aticket1[i] + " | P -- $" + taskArray2Aticket2[i] + " | % D -- " + taskArray2Aticket3[i] + " | Pf -- $" +taskArray2Aticket4[i] + "<br>";
            items_array[i]  = "<tr><th scope='row'><h4>" + taskArray2Aticket1[i] + "</h4></th><td><h4>$" + taskArray2Aticket2[i] + "</h4></td><td><h4>%" + taskArray2Aticket3[i] + " </h4></td><td><h4>$" +taskArray2Aticket4[i] + "<h4></td></tr>";
            items_array2[i] = id_advance_ticket_servicio_2 + "," + taskArray2Aticket1[i] + "," + taskArray2Aticket2[i] + "," + taskArray2Aticket3[i] + "," + taskArray2Aticket4[i];
        
            }

            /*
        <tr> 
              <th scope='row'>1</th> 
              <td>Agua 500 ml</td> 
              <td>$ 100.00</td> 
            </tr> 

            </tr> 
            */

            $("#ticket-concepto").empty().append(items_array)

            //----->
            setTimeout(function(){

                //var ticket_info = Array()
                servicios_total_items        = $("#servicios_total_items").html()
                id_advance_trabajdor         = $("#id_advance_trabajdor").val()
                
                ticket_info = {id_advance_ticket_servicio_2,servicios_total_items,id_advance_trabajdor}

                $(".item-tiket-total").html(servicios_total_items)
                
                },500)

        }
    
    /***[ (3) Ticket print y save ----->ticketPrint ]***/
    function TicketGuardar(ticket_info,items_array2){

        $(".btn-total").click(function(event) { 

            var taskArray2Aticket_x  = new Array();
            var taskArray2Aticket0 = new Array();
            var taskArray2Aticket1 = new Array();
            var taskArray2Aticket2 = new Array();
            var taskArray2Aticket3 = new Array();
            var taskArray2Aticket4 = new Array();           
            var taskArray2Aticket5 = new Array();  

            //var ticket_info = Array()
                servicios_total_items        = $("#servicios_total_items").html()
                id_advance_trabajdor         = $("#id_advance_trabajdor").val()
                id_advance_ticket_servicio_2 = $("#id_advance_ticket_servicio").val()

            taskArray2Aticket_x  = [id_advance_trabajdor,servicios_total_items,id_advance_ticket_servicio_2]

            $("#add_items input[name=precio_total]").each(function() {
               taskArray2Aticket0.push($(this).val());
                });

            $("#add_items input[name=nombre]").each(function() {
               taskArray2Aticket1.push($(this).val());
                })

            $("#add_items input[name=id_advance]").each(function() {
               taskArray2Aticket5.push($(this).val());
                })

            
            $("#add_items input[name=precio_venta]").each(function() {
               taskArray2Aticket2.push($(this).val());
                })                
            
            $("#add_items input[name=descuento]").each(function() {
               taskArray2Aticket3.push($(this).val());
                })         

            $("#add_items input[name=precio_total]").each(function() {
               taskArray2Aticket4.push($(this).val());
                })                              

            /*
            taskArray2Aticket5 = [taskArray2Aticket1,taskArray2Aticket2,taskArray2Aticket3,taskArray2Aticket4,taskArray2Aticket5]
            
            console.log(taskArray2Aticket_x)
            console.log(taskArray2Aticket5)
            */
            console.log(taskArray2Aticket5)
            //----->
            setTimeout(function(){
                
                var id_advance_membresia = $("#venta-socio-id_advance").val()
                
                var person = {
                    ticket_info          : taskArray2Aticket_x,
                    taskArray2Aticket1   : taskArray2Aticket1,
                    taskArray2Aticket2   : taskArray2Aticket2,
                    taskArray2Aticket3   : taskArray2Aticket3,
                    taskArray2Aticket4   : taskArray2Aticket4,
                    taskArray2Aticket5   : taskArray2Aticket5,
                    id_advance_membresia : id_advance_membresia
                    }                

                // XMLHttpRequest --->
                $.ajax({
                    url: api_ticket_new,
                    type: 'POST',
                    dataType: 'json',
                    success: function (data) {},
                    data: person
                    })  

                },500)
            

            $( "#dialog-caja" ).dialog( "close" )
            
            //----->
            setTimeout(function(){
                ticketPrint()
                },500)
            
            //----->
            setTimeout(function(){
                javascript:location.reload()
                },2000)
            })

        }
    
    /***[ (4) Ticket print]***/        
    function ticketPrint() {

        
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
                frameDoc.document.write("<html><head><title>H2O TICKET</title><link href='//cdn.gymh2o.com/framework/bootstrap/css/bootstrap.css' rel='stylesheet' type='text/css' /><style>h5{font-size: 8pt;}.table{font-size: 6pt;}</style></head><body><div id='ticket-print'  class='container'>                  <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center'>  <img src='http://cdn.gymh2o.com/img/logogris2.jpg' class='text-center'><br><h4>:::GYM H2O:::</h4><h4>PERSIA EN MOVIMIENTO</h4></div><div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left'><div class='bs-example' data-example-id='simple-table'><table class='table'> ");
                //Append the DIV contents.
                frameDoc.document.write(contents);
                frameDoc.document.write("</div></div><div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center'>  <h4>** Gracias por su compra **</h4></div></div></body></html>");
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

    function buscarsocio(){
        $("#venta-buscar-socio").autocomplete({
            minLength: 4,
            delay: 400,
            source: function(req, add){  
    
            // XMLHttpRequest --->
                $.getJSON(api_search, req, function(data) {  
                    var suggestions = [] ;  
                        $.each(data, function(i,val){  
                            suggestions.push({
                                id_advance: val.id_advance,
                                nombre: val.nombre,
                                value: val.nombre,
                                membresia: val.membresia,
                            });
                        });  
                    add(suggestions);  
                });  

            },select: function (event, ui) {
                $("#venta-socio-id_advance").val(ui.item.id_advance)
                $(".venta-nombre").html(ui.item.nombre + " " + ui.item.membresia)
                $("#venta-buscar-socio,#venta-socio-id_advance").hide()
                }
            })
        }
    /*************************/     
    function DashboardClientes(){
        console.log('Begin: Clientes')   
            
            $('.clientes_info').empty()

            // XMLHttpRequest --->            
            $.getJSON(api_inicio_all_noimg  , function(data) {

                //process response  
                $.each(data, function(i, val){  

                    if (val.pago == 1) {
                        var pago = 'Pagado'
                        }else{
                            var pago = 'no Pagado'
                            }

                    if (val.foto == "") {
                        var foto = 'http://placehold.it/175x150/FF3D00/000000'
                        }else{
                            var foto = val.foto;
                            foto = foto.split(' ').join('+');
                            }

                    if (val.pago == 1) {
                        $('.clientes_info').delay( 800 ).fadeIn(2000).append("<tr class='danger' id='" + val.id_advance_cliente + "'><td class='text-uppercase text-center'>   <a href='" + app_url + "socio/?id_advance=" + val.id_advance_cliente + "'><img class='img-circle' src='data:image/png;base64," + foto + "'    style='width: 175px;height: 150px;'></a><br />" + val.nombre + "<br />Edad:" + val.fecha_nacimiento + "</td><td><span>Fecha de inicio suscripción:</span><br />" + val.fecha_inicio + "<br /><span>Fecha próxima pago:</span><br />" + val.fecha_proxima + "</td><td class='text-capitalize text-center'>" + val.membresia + "<br />$" + val.precio + "</td><td>" + pago + "</td></tr>")
                        }else{
                            $('.clientes_info').delay( 800 ).fadeIn(2000).append("<tr class='success'  id='" + val.id_advance_cliente + "<td class='text-uppercase text-center'> <a href='" + app_url + "socio/?id_advance=" + val.id_advance_cliente + "'>  <img class='img-circle' src='data:image/png;base64," + foto + "'  style='width: 175px;height: 150px;'></a><br />" + val.nombre + "<br />Edad:" + val.fecha_nacimiento + "</td><td><span>Fecha de inicio suscripción:</span><br />" + val.fecha_inicio +  "<br /><span>Fecha próxima pago:</span><br />" + val.fecha_proxima + "</td><td class='text-capitalize text-center'>" + val.membresia + "<br />$" + val.precio + "</td><td>" + pago + "</td></tr>")
                        }
                    
                })

                })

        console.log('End: Clientes')
        }

    function DashboardClientesPago()
        {
        // DashboardClientesPago (a)
        //hide modal
        console.info('DashboardClientesPago  (a)')
        $("#dialog-confirm").hide()
            // DashboardClientesPago (b)
            //impide que se selecciones mas de 2 checkbox
            console.info('DashboardClientesPago  (b)')
            $( window ).load(function() {
                $('input.id_advance_ch').on('change', function() {
                    $('input.id_advance_ch').not(this).prop('checked', false);  
                });       
                console.log( "ready!" );
            })
        
            // DashboardClientesPago (c)
            //Botton  de pago
            console.info('DashboardClientesPago  (c)')
            $( ".btn-pago" ).click(function() {

                var id_advance           = $("input[name='id_advance']:checked").val(); 
                var id_advance_membresia = $( "select .json_membresia  option:selected").attr('id_advance');



                if (typeof id_advance != 'undefined'){  

                    // DashboardClientesPago (d)
                    //carga la informacion del socio
                    console.info('DashboardClientesPago  (d)')
                    var person = {id_advance: id_advance,membresia:id_advance_membresia }
                    
        // XMLHttpRequest --->  
        //Update url
                    $.ajax({
                        url: api_inicio_all_noimg_one,
                        type: 'GET',
                        dataType: 'json',
                        success: function (data) {

                                if (data[0].fecha_proxima== "") {
                                    var foto = 'http://placehold.it/175x150/FF3D00/000000'
                                    }else{
                                        var foto = data[0].foto;
                                        foto = foto.split(' ').join('+');
                                        }
                                $('.pago_socio_info').empty()        
                                $('.pago_socio_info').append("<div class='col-xs-4'><img class='img-circle pago_socio' src='data:image/png;base64," + foto + "' style='width: 175px;height: 150px;'></div><div class='col-xs-8'><p >Nombre:              <span class='nombre_pago'>" + data[0].nombre + "</span></p><p >Edad:                <span class='edad_pago'>" + data[0].fecha_nacimiento + "</span></p>  <p >Tipo de suscripción: <span class='tipo_pago'>" + data[0].membresia + " </span></p><p >Precio:              <span class='precio_pago'>" + data[0].precio + "</span></p><p >Fecha de Renovación: <span class='fecha_renovacion_pago'>" + data[0].fecha_proxima + "</span></p></div>");       

                        },
                        data: person
                    })

                    // DashboardClientesPago (e)
                    console.info('DashboardClientesPago  (e)')

        // XMLHttpRequest ---> 
        //Update url                          
                    $.get(api_suscripcion_all, function (data) {
                        $.each(data, function (key, val) {
                            $('.json_membresia').append("<option  id='option_membresia' value='" + val.precio + "' id_advance='" + val.id_advance + "' >" + val.membresia+ "</option>");
                        });
                    })
                    

                    // DashboardClientesPago (f)
                    //select 
                    console.info('DashboardClientesPago  (f)')

                    $(".nuevo_precio_pago").empty().append($(this).val())


                    $("select").change(function(){
                        var element = $("option:selected", this)
                        var myTag = element.attr("id_advance")
                        var myprecio = element.val()

                        $('.nuevo_precio_pago').empty().append(myprecio)
                        $('.json_membresia_id').empty().val(myTag)

                    })
                    
                    // DashboardClientesPago (g)
                    console.info('DashboardClientesPago  (g)')
                    $( "#dialog-confirm" ).dialog({
                        resizable: false,
                        height:500,
                        width: 700,
                        modal: true,
                        buttons: {
                            "Pagar": function() {

                            // DashboardClientesPago (h)
                            console.info('DashboardClientesPago  (h)')
                            var json_membresia_id = $('.json_membresia_id').val()

        // XMLHttpRequest --->   
        //Update url               
                            $.ajax({
                              method: "POST",
                              url: api_suscripcion_update,
                              data: { id_advance_cliente: id_advance,json_membresia_id: json_membresia_id}
                            }).done(function( msg ) {
                                alert("El pago de la renovación de la suscripción fue aceptada.");
                            });
                            
                            // DashboardClientesPago (i)
                            console.info('DashboardClientesPago  (i)')
                            setTimeout(function(){
                               DashboardClientes()
                            },1500)
                            
                            $( this ).dialog( "close" )
                            $('.json_membresia').empty()
                                                            
                            },
                            Cancel: function() {
                              $( this ).dialog( "close" )
                              $('.json_membresia').empty()
                            }
                        }
                    })

                }else{alert('zzz');}
            })
        }

    //checar
     
    function DashboardClientes(){
        console.log('Begin: Clientes')   
            
            $('.clientes_info').empty()

        // XMLHttpRequest --->            
            $.getJSON(api_inicio_all_noimg  , function(data) {

                //process response  
                $.each(data, function(i, val){  

                    if (val.pago == 1) {
                        var pago = 'Pagado'
                        }else{
                            var pago = 'no Pagado'
                            }

                    if (val.foto == "") {
                        var foto = 'http://placehold.it/175x150/FF3D00/000000'
                        }else{
                            var foto = val.foto;
                            foto = foto.split(' ').join('+');
                            }

                    if (val.pago == 1) {
                        $('.clientes_info').delay( 800 ).fadeIn(2000).append("<tr class='danger' id='" + val.id_advance_cliente + "'><td>#</td><td class='text-uppercase text-center'>   <a href='" + app_url + "socio/?id_advance=" + val.id_advance_cliente + "'><img class='img-circle' src='data:image/png;base64," + foto + "'    style='width: 175px;height: 150px;'></a><br />" + val.nombre + "<br />Edad:" + val.fecha_nacimiento + "</td><td><span>Fecha de inicio suscripción:</span><br />" + val.fecha_inicio + "<br /><span>Fecha próxima pago:</span><br />" + val.fecha_proxima + "</td><td class='text-capitalize text-center'>" + val.membresia + "<br />$" + val.precio + "</td><td>" + pago + "</td></tr>")
                        }else{
                            $('.clientes_info').delay( 800 ).fadeIn(2000).append("<tr class='success'  id='" + val.id_advance_cliente + "'><td>#</td><td class='text-uppercase text-center'> <a href='" + app_url + "socio/?id_advance=" + val.id_advance_cliente + "'>  <img class='img-circle' src='data:image/png;base64," + foto + "'  style='width: 175px;height: 150px;'></a><br />" + val.nombre + "<br />Edad:" + val.fecha_nacimiento + "</td><td><span>Fecha de inicio suscripción:</span><br />" + val.fecha_inicio +  "<br /><span>Fecha próxima pago:</span><br />" + val.fecha_proxima + "</td><td class='text-capitalize text-center'>" + val.membresia + "<br />$" + val.precio + "</td><td>" + pago + "</td></tr>")
                        }
                    
                })

                })

        console.log('End: Clientes')
        

        }