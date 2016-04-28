console.error('Run: Puro Flow !!!')

    $(document).on("ready",All)
    console.debug('Run: All')

    $(document).on("ready",DashboardClienteInfo)
    console.debug('Run: Dashboard Cliente Info')

    $(document).on("ready",DashboardClienteFoto)
    console.debug('Run: Dashboard Cliente Foto')

    $(document).on("ready",DashboardClienteHistorial)
    console.debug('Run: Dashboard Cliente Historial')

    $(document).on("ready",DashboardClienteAsistenciaViwer)
    console.debug('Run: Dashboard Cliente Asistencia Viwer')    

    $(document).on("ready",SocioActualizar)
    $(document).on("ready",DashboardClientesPago)
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
            u_id_advance = $("#id_advance").val()
        console.log('End: All');
        }     
    
    function DashboardClienteInfo(){

        $.getJSON(api_socio_one2 + u_id_advance, function(data) {
                //process response  
                $.each(data, function(i, val){  

                    


                    $(".i-c-actualizar-id_a_s").val(val.id_advance)
                    //Informacion Socio
                    $(".s-nombre").empty().fadeIn(2000).append(val.nombre)
                    //Actualizar Socio
                    $(".i-c-actualizar-nombre").empty().fadeIn(2000).val(val.nombre)

                    //Informacion
                    $(".s-fecha_nacimiento").empty().fadeIn(2000).append(val.fecha_nacimiento2)
                    //Actualizar
                    $(".i-c-actualizar-f-nacimiento").val(val.fecha_nacimiento)
                    

                    $(".s-codebar-1").empty().fadeIn(2000).append(val.codebar)
                    
                    $(".s-precio").empty().fadeIn(2000).append(val.precio)

                    $(".s-fecha_inicio").empty().fadeIn(2000).append(val.fecha_inicio)
                    $(".s-fecha_proxima").empty().fadeIn(2000).append(val.fecha_proxima)

                    //Informacion
                    $(".s-telefono").empty().fadeIn(2000).append(val.telefono)
                    //Actualizar
                    $(".i-c-actualizar-telefono").empty().fadeIn(2000).val(val.telefono)

                    //Informacion
                    $(".s-cell").empty().fadeIn(2000).append(val.cel)
                    //Actualizar
                    $(".i-c-actualizar-celular").empty().fadeIn(2000).val(val.cel)

                    //Informacion
                    $(".s-mail").empty().fadeIn(2000).append(val.email)
                    //Actualizar
                    $(".i-c-actualizar-email").empty().fadeIn(2000).val(val.email)

                    //Informacion
                    $(".s-direccion").empty().fadeIn(2000).append(val.direccion)
                    //Actualizar
                    $(".i-c-actualizar-direccion").empty().fadeIn(2000).val(val.direccion)

                    if (val.sexo== "Masculino") {
                        $('input#radio3').not(this).prop('checked', true);  
                        }else{
                            $('input#radio4').not(this).prop('checked', true);                              
                            }

                    //alert(val.foto);
                    
                    if (!val.foto) {
                        //alert("foto vacia");
                        var foto = 'http://placehold.it/175x150/FF3D00/000000'
                        }else{
                            //alert("foto llena");
                            var foto = val.foto;
                            foto = foto.split(' ').join('+');

                            foto = "data:image/png;base64," + foto;
                            }

                            $("#s-socio").attr('src',foto);


                })

            }).done(function() {

                        
                console.log("Almacen: Folio Success (TPSx000001).");
                    
                }).fail(function(jqXHR, textStatus , errorThrown) {
                        
                    error_net(jqXHR, textStatus );

                        console.error("        Almacen: Folio Error (TPEx000001 [" + fail_txt + "] ).");
                        alert("Almacen: Folio Error (TPEx000001 [" + fail_txt + "] ).");

                    }).always(function() {
            
                        console.log("        Almacen: Folio Success (TPSx000002).");
            
                            });

        console.debug("        End: Socio XMLHttpRequest");
    //API End: Almacen All


        $.getJSON(api_socio_comentario  + u_id_advance, function(data) {
            
            $.each(data, function(i, val){  
               
               if (val.comentario  == null) {
                    $('.s-comentario').empty().append("Sin Comentarios")
                    }else{
                        $('.s-comentario').empty().append("<br>" + val.fecha + " - " + val.comentario + "<br>")
                        }
                

                })

            }).done(function() {

                console.log("Almacen: Folio Success (TPSx000001).");
                    
                }).fail(function(jqXHR, textStatus , errorThrown) {
                        
                    error_net(jqXHR, textStatus );

                        console.error("        Almacen: Folio Error (TPEx000001 [" + fail_txt + "] ).");
                        alert("Almacen: Folio Error (TPEx000001 [" + fail_txt + "] ).");

                    }).always(function() {
            
                        console.log("        Almacen: Folio Success (TPSx000002).");
            
                            });

        console.debug("        End: Socio XMLHttpRequest");
    //API End: Almacen All

          
        }

    function SocioActualizar(){
        $("#dialog-socio-update").hide()
        webCam64()

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


            function cambio(inputName){
                $("input." + inputName ).change(function(){
                    cambioresult = true;

                    if (cambioresult == true){
                        var inputnombre        = $("input." + inputName ).val()
                        }else{
                            var inputnombre        = ""
                            }

                        return inputnombre;
                });     
            } 
                               

        $( ".c-actualizar").click(function() {

            $("#dialog-socio-update").dialog({
                position: { my: "center top"},
                resizable: false,
                height:700,
                width: 800,
                modal: true,
                buttons: {
                    "Actualizar": function() {
                        
                        /*
                        var x               = 'i-c-actualizar-nombre';
                        var i_c_alta_nombre = cambio(x);            
                            
                        alert(i_c_alta_nombre) 
                        */    
                        var i_c_id_advance         = $(".i-c-actualizar-id_a_s").val()
                        var i_c_alta_nombre        = $("input.i-c-actualizar-nombre" ).val()
                        var i_c_alta_f_nacimiento  = $("input.i-c-actualizar-f-nacimiento").val()
                        var i_c_alta_telefono      = $("input.i-c-actualizar-telefono    ").val()
                        var i_c_alta_celular       = $("input.i-c-actualizar-celular").val()
                        var i_c_alta_email         = $("input.i-c-actualizar-email").val()
                        var i_c_alta_direccion     = $("input.i-c-actualizar-direccion").val()
                        var i_c_alta_membresia_new = $(".json_membresia_new").val()

                        var i_c_alta_radio = $('input[name="radio2"]:checked').val()

                        //var i_c_formfield = $('#image').attr('src')
                        var i_c_formfield = $('#formfield').val()
                        i_c_formfield =  htmlEncode(i_c_formfield)

                        data_alta = "i_c_id_advance="              + i_c_id_advance         + 
                                    "&nombre_alta="              + i_c_alta_nombre        + 
                                    "&i_c_alta_f_nacimiento="   + i_c_alta_f_nacimiento  +
                                    "&i_c_alta_telefono="       + i_c_alta_telefono      +
                                    "&i_c_alta_celular="        + i_c_alta_celular       +
                                    "&i_c_alta_email="          + i_c_alta_email         +
                                    "&i_c_alta_direccion="      + i_c_alta_direccion     +    
                                    "&i_c_alta_membrecia="      + i_c_alta_membresia_new +
                                    "&i_c_direccion="           + i_c_alta_direccion     +
                                    "&i_c_radio="               + i_c_alta_radio         +
                                    "&i_c_formfield="           + i_c_formfield
                                    ;
                                
                                $.ajax({
                                    url: api_cliente_update,
                                    type: 'POST',
                                    dataType: 'json',
                                    success: function (data) {},
                                    data: data_alta
                                        }).done(function() {
                                                    
                                            console.log("Inicio: Asistencia Success (IASx000001).");
                                            alert("Socio: Actualizacion ok");


                                            }).fail(function(jqXHR, textStatus , errorThrown) {
                                                    
                                                error_net(jqXHR, textStatus );

                                                    console.error("        Inicio: Asistencia Error (IAEx000001 [" + fail_txt + "] ).");
                                                    alert("Inicio: Asistencia Error (IAEx000001 [" + fail_txt + "] ).");

                                                }).always(function() {
                                                    DashboardClienteInfo();
                                                    console.log("        Inicio: Asistencia Success (IASx000002).");
                                        
                                                        });

                                    console.debug("        End: Inicio Asistencia XMLHttpRequest");

                                //API End: Almacen All


                                
                            
                            
                        alert('Alta Socio Nuevo ')
                        $( this ).dialog( "close" )

                        },
                    Cerrar: function() {
                      $( this ).dialog( "close" )
                      
                    }
                }
            })   
        })
        }

    function DashboardClienteFoto(){
        }
    
    function DashboardClienteHistorial(){
        //historial
        $.getJSON(api_socio_historial_one + u_id_advance, function(data) {    
            //process response  
            $.each(data, function(i, val){
                $(".socio_historial").append("<tr><th scope='row'>" + val.id_dos + "</th><td>" + val.fecha_inicio + "</td><td>" + val.fecha_proxima + "</td><td>" + val.nombre + "</td><td>$ " + val.precio_venta + "</td></tr>");
            })                      
        })
        }
    
    function DashboardClienteAsistenciaViwer(){   
        //historial
        $.getJSON(api_socio_asistencia_one + u_id_advance, function(data) {    
            //process response  
            $.each(data, function(i, val){
                $(".socio_asistencia").append("<tr><th scope='row'>" + val.id_dos + "</th><td>" + val.fecha + "</td></tr>");
            })                      
        })     
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

                var id_advance           = $("#id_advance").val(); 
                var id_advance_membresia = $( "select .json_membresia  option:selected").attr('id_advance');



 

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
                            var fecha_proxima_x = $(".s-fecha_proxima").html();

                            $.ajax({
                              method: "POST",
                              url: api_suscripcion_update + "?fecha_proxima=" + fecha_proxima_x,
                              data: { id_advance_cliente: id_advance,json_membresia_id: json_membresia_id}
                            })
                              .done(function( msg ) {
                                alert("El paga de la renovación de la suscripción fue aceptada.");
                            });
                            
                            // DashboardClientesPago (i)
                            console.info('DashboardClientesPago  (i)')
                            setTimeout(function(){
                               DashboardClientes()
                            },1500)
                            
                            $( this ).dialog( "close" )
                            $('.json_membresia').empty()
                            
                                DashboardClienteInfo();
                                DashboardClienteHistorial();

                            },
                            Cancel: function() {
                              $( this ).dialog( "close" )
                              $('.json_membresia').empty()
                            }
                        }
                    })
                if (typeof id_advance != 'undefined'){ 
                }else{alert('zzz');}
            })
        }
    
    //END: Dashboard