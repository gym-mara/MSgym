console.error('Run: Puro Flow !!!')

    $(document).on("ready",All);
    $(document).on("ready",Almacenall);
    $(document).on("ready",AlmacenNuevo);
    $(document).on("ready",AlmacenActualizar);
    $(document).on("ready",BtnItems);
    $(document).on("ready",BtnCi);

    /***************************************************    
    *                    Jquery                        * 
    ***************************************************/
    /*
    *
    *
    */
    //-----> (A) BENIG: All
    function All(){
        console.log('Begin: All');

            $("#h-ci , #h-almacen").hide();

            //---->   

            $(".btn-almacen").click(function(event) {
                /* Act on the event */
                $("#h-almacen").show()
                $("#h-ci").hide()
            });

            $(".btn-ci").click(function(event) {
                /* Act on the event */
                $("#h-almacen").hide()
                $("#h-ci").show()
            });    

            //----> (a)
            /*
            $.get(api_almacen_historial , function (data){
                
                $("#almacen_historial").empty()

                    $.each(data, function (key, val) {    
                    
                        if (val.codebar == '') {

                        var var_codebar = 'sin codigo de barras';

                        }else{

                            var var_codebar = val.codebar;

                            }

                        $("#almacen_historial").append("<tr class='success "+ val.tipo +" " + val.id_advance + "'><th scope='row' class='text-center'><input type='checkbox'  class='id_advance_ch' name='id_advance' value='" + val.id_advance + "'></th><td>" + val.fecha + "</td><td>"+ val.tipo +"</td><td>" + val.nombre + "</td><td>" + val.descripcion + "</td><td>" + val.precio_compra + "</td><td>" + val.precio_venta + "</td><td>" + val.cantidad +" "+ val.unidad +"</td><td>" + var_codebar + " yyy</td></tr>")

                    });
                
                }).done(function() {
                    alert( "second success" );
                }).fail(function() {
                    alert( "error" );
                }).always(function() {
                    alert( "finished" );
                });
            */
            //---->
            /*
            $.get('http://api.gymh2o.com/almacen/historialci/tipo/json/?date=' , function (data){
                
                $("#ci_historial").empty()

                $.each(data, function (key, val) {    
                    $("#ci_historial").append("<tr class='success "+ val.tipo +" " + val.id_advance + "'><th scope='row' class='text-center'><input type='checkbox'  class='id_advance_ch' name='id_advance' value='" + val.id_advance + "'></th><td>" + val.fecha + "</td><td>"+ val.tipo +"</td><td>" + val.nombre + "</td><td>" + val.descripcion + "</td><td>" + val.precio_compra + "</td><td>" + val.precio_venta + "</td><td>" + val.cantidad +" "+ val.unidad +"</td><td>" + val.codebar + " xxx</td></tr>")
                    });
                
                })  

            $(".almacen-datepicker").datepicker({
                onSelect: function(selectedDate) {
                    
                    //----> (e)
                    $.get(api_almacen_historial  + selectedDate, function (data){
                        $("#ci_historial").empty()

                        .each(data, function (key, val) {    
                            $("#ci_historial").append("<tr class='success'><th scope='row' class='text-center'><input type='checkbox'  class='id_advance_ch' name='id_advance' value=''></th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>")
                            });

                        })  

                    $.get('http://api.gymh2o.com/almacen/historialci/tipo/json/?date='  + selectedDate, function (data){
                        
                        $("#ci_historial").empty()

                        .each(data, function (key, val) {    
                            $("#ci_historial").append("<tr class='success'><th scope='row' class='text-center'><input type='checkbox'  class='id_advance_ch' name='id_advance' value=''></th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>")
                            });
                        })                      

                }
            });
            */

        console.log('End: All');
        }        
    
    //-----> (B) Begin All:
    function Almacenall(){
        
        $("#almacen_all").empty();
        
        //API Begin: Almacen All
        $.get(api_almacen_all, function (data){
            
            $("#img-load").hide();
            $.each(data, function (key, val) {    
                if (typeof(val.codebar) != 'undefined' && val.codebar != null){
                    var var_codebar = val.codebar;
                    }else{
                        var var_codebar = 'sin codigo de barras';
                        }

                if (val.tipo == "Producto"){

                    ui_color = "info";

                    }else if(val.tipo == "membresia" || val.tipo == "Membresia"){

                        ui_color = "danger";

                        }else if(val.tipo == "visita"){

                            ui_color = "";

                            }else if(val.tipo == "Consumo Interno"){

                                ui_color = "success";

                                }else if(val.tipo == "Vapor"){

                                    ui_color = "";

                                    }else if(val.tipo == "Clases"){

                                        ui_color = "";

                                        }else if(val.tipo == "Pago"){

                                            ui_color = "warning";

<<<<<<< HEAD
                                            }else{ui_color = " ";}
=======
                                            }else{
                                                ui_color = " ";
                                            }
>>>>>>> origin/Check-Error
                    
                    if ( val.cantidad >  10000) {          

                        cantidad_x = "Suficientes";
                        }else{
                            cantidad_x = val.cantidad;
                            }

                    $("#almacen_all").fadeIn(1000).append("<tr class='" + ui_color +" "+ val.tipo + " " + val.id_advance + "'><th scope='row' class='text-center'><input type='checkbox'  class='id_advance_ch' name='id_advance' value='" + val.id_advance + "'></th><td class='nombre text-capitalize'>"+ val.tipo +"</td><td class='nombre text-capitalize'>" + val.nombre + "</td><td class='nombre text-capitalize'>" + val.descripcion + "</td><td>" + val.precio_compra + "</td><td>" + val.precio_venta + "</td><td class='cantidad'>" + cantidad_x +" "+ val.unidad +"</td><td>" + var_codebar + "</td></tr>")
                });
            
            }).done(function() {
            
                console.log("Almacen: Producto Lista Success (ASx000001).");
                    
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

                        console.error("Almacen: Producto Lista Error (AEx000001 [" + fail_txt + "] ).");
                        alert("Almacen: Producto Lista Error (AEx000001 [" + fail_txt + "] ).");

                    }).always(function() {
            
                        console.log("Almacen: Producto Lista Success (ASx000002).");
            
                            });
        //API End: Almacen All


        }  
    
    //-----> (C) Begin Nuevo: AlmacenNuevo() -> ProductoNuevo()
    function AlmacenNuevo(){
        $("#producto-nuevo").hide()
            //-----> Click Link 
            $(".pro-nuevo").click(function(){
                
                //-----> UI Modal
                $("#producto-nuevo").dialog({

                    position: { my: "center top"},
                    resizable: false,
                    height:700,
                    width: 800,
                    modal: true,
                    buttons: {
                        "Registrar": function() {
                            
                            ProductoNuevo()
                            Almacenall()
                            $( this ).dialog( "close" )                        
                            },Cancel: function() {
                            
                            $( this ).dialog( "close" )
                            Almacenall()

                            }
                                }
                    })

                })
        }
    
    //-----> (C) Begin Nuevo: ProductoNuevo() 
    function ProductoNuevo(){

        var tipo             = $("#tipo").val()
        var p_n_nombre       = $("#inputNombre").val()
        var p_n_descripcion  = $("#inputDescripcion").val()
        var p_n_precioc      = $("#inputPCompra").val()
        var p_n_preciov      = $("#inputPVenta").val()
        var p_n_cantidad     = $("#inputCantidad").val()
        var p_n_unidad       = $("#inputUnidad").val()
        var p_n_codigobarras = $("#inputCodigobarras").val()

        //alert(tipo + p_n_nombre + p_n_descripcion + p_n_precioc+p_n_preciov+p_n_cantidad+p_n_unidad+p_n_codigobarras)

        data_alta = "tipo="              + tipo              +
                    "&p_n_nombre="       + p_n_nombre        +
                    "&p_n_descripcion="  + p_n_descripcion   +
                    "&p_n_precioc="      + p_n_precioc       +
                    "&p_n_preciov="      + p_n_preciov       +
                    "&p_n_cantidad="     + p_n_cantidad      +
                    "&p_n_unidad="       + p_n_unidad        +
                    "&p_n_codigobarras=" + p_n_codigobarras
        ;

            // Time --->
            
            //setTimeout(function(){},1000)
                
                // XMLHttpRequest --->
                $.ajax({
                    url: api_almacen_new,
                    type: 'POST',
                    dataType: 'json',
                    data: data_alta
                    }).done(function() {

                        console.log("Almacen: Producto Nuevo Registrado Success (ASx000003).");
                        alert("Almacen: Producto Nuevo Registrado.");

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

                            console.error("Almacen: Producto Nuevo Registrado Error (AEx000002 [" + fail_txt + "] ).");
                            alert("Almacen: Producto Nuevo Registrado Error (AEx000002 [" + fail_txt + "] ).");

                        }).always(function() {
                        
                            console.log("Almacen: Producto Nuevo Registrado Success (ASx000004).");
                            Almacenall();

                      });            
        }
    
    //-----> (D) Begin Actualizar: AlmacenActualizar() -> ProductoActualizar()
    function AlmacenActualizar(){
        $("#dialog-almacen-actualizar").hide()
        
        $(".btn-actualizar").click(function(event) {
            
            // Time --->
            //setTimeout(function(){},500)
            $("#dialog-almacen-actualizar-ci").hide();

                id_advance = $("input[name='id_advance']:checked").val()
                $(".id_advance").val(id_advance)
                
                //API Begin: Almacen One
                $.get(api_almacen_one + id_advance, function (data){
                    
                    $.each(data, function (key, val) {

                        $("#actualizar_inputNombre").val(val.nombre)
                        $("#actualizar_inputDescripcion").val(val.descripcion)
                        $("#actualizar_inputPCompra").val(val.precio_compra)

                        $("#actualizar_inputPVenta").val(val.precio_venta)

                        $("#actualizar_inputCantidad-a").html(val.cantidad)
                                                
                        $("#actualizar_inputUnidad").val(val.unidad)

                        $("#actualizar_inputCodigobarras").val(val.codebar)

                        })
                    
                    }).done(function() {
            
                        console.log("Almacen: Producto Actualizar Lista Unico Success (ASx000004).");

                        }).fail(function(jqXHR, textStatus , errorThrown) {
                        
                        if (jqXHR.status === 0){
                            fail_txt = "Not connect.n Verify Network.' + textStatus";
                            }else if (jqXHR.status == 200){
                            fail_txt = "Requested page Ok. [200]' + textStatus";
                                }else if (jqXHR.status == 404){
                                    alert('Requested page not found. [404]' + textStatus);
                                    }else if (jqXHR.status == 500){
                                        fail_txt = "Internal Server Error [500].' + textStatus";
                                        }else if (exception === 'parsererror' + textStatus){
                                            fail_txt = "Requested JSON parse failed.' + textStatus";
                                            }else if (exception === 'timeout' + textStatus){
                                                alert('Time out error.' + textStatus);
                                                }else if (exception === 'abort'){
                                                    fail_txt = "Ajax request aborted.' + textStatus";
                                                    }else{
                                                        fail_txt = "Uncaught Error.n' + jqXHR.responseText";
                                                        }

                        console.error("Almacen: Producto Actualizar Lista Unico Error (AEx000004 [" + fail_txt + "] ).");
                        alert("Almacen: Producto Actualizar Lista Unico Error (AEx000004 [" + fail_txt + "] ).");

                            }).always(function() {
                        
                            console.log("Almacen: Producto Actualizar Lista Unico Success (ASx000005).");
                        
                            });
                //API End:  Producto Actualizar Lista Unico 

                $("#dialog-almacen-actualizar").dialog({

                position: { my: "center middle"},
                resizable: false,
                height:500,
                width: 800,
                modal: true,
                buttons: {
                    "Actualizar Almacen": function() {
                        ProductoActualizar();
                        Almacenall();
                        $( this ).dialog( "close" );
                    },Cancel: function() {
                        Almacenall();
                        $( this ).dialog( "close" );

                        }

                    }

                })

                });
    
        }
    
    //-----> (D) Begin Actualizar: ProductoActualizar()
    function ProductoActualizar(){
        //----->
        id_advace       = $(".id_advance").val()

        p_n_tipo        = $("#actualizar_tipo option:selected").html()
                              
        p_n_nombre      = $("#actualizar_inputNombre").val()
        p_n_descripcion = $("#actualizar_inputDescripcion").val()
        p_n_precioc     = $("#actualizar_inputPCompra").val()

        p_n_preciov     = $("#actualizar_inputPVenta").val()
        

        //
        //p_n_cantidad_base = $("#actualizar_inputCantidad-a").html()
        //p_n_cantidad      = $("#actualizar_inputCantidad").val()

        if ($("#p_n_cantidad").html() == "" || $("#p_n_cantidad").html() == null ) {

            console.log('1');

            }else{

                console.log('2');

                }

        x_cantidad = $("#actualizar_inputCantidad-a").html();
        p_n_cantidad    = parseFloat(x_cantidad ) + parseFloat($("#actualizar_inputCantidad").val());
        

        if(isNaN(p_n_cantidad)) {

            p_n_cantidad = x_cantidad;
            
            }else{

                }

        p_n_unidad      = $("#actualizar_inputUnidad").val()
        p_n_codigobarras= $("#actualizar_inputCodigobarras").val()


        data = 
            "id_advace="         + id_advace        +
            "&p_n_tipo="         + p_n_tipo         +
            "&p_n_nombre="       + p_n_nombre       +
            "&p_n_descripcion="  + p_n_descripcion  +
            "&p_n_precioc="      + p_n_precioc      +
            "&p_n_preciov="      + p_n_preciov      +
            "&p_n_cantidad="     + p_n_cantidad     +
            "&p_n_unidad="       + p_n_unidad       +
            "&p_n_codigobarras=" + p_n_codigobarras ;

            alert(data);
            //API Begin: Almacen Actulizar

            $.ajax({
                url: api_almacen_update,
                type: 'POST',
                data: data
                }).done(function() {
            
                    console.log("Almacen: Producto Actualizar Success (ASx000005).");

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

                        console.error("Almacen: Producto Actualizar Error (AEx000003[" + fail_txt + "] ).");
                        alert("Almacen: Producto Actualizar Error (AEx000003 [" + fail_txt + "] ).");

                    }).always(function() {
                    
                        console.log("Almacen: Producto Actualizar Success (ASx000006).");
                        Almacenall();

                        });            
          
            //API End: Almacen Actulizar

        }

    //-----> (E) Begin BTN:BtnItems()
    function BtnItems(){
        
        $(".btn-primary").click(function() {
            
            $(".Producto ").show();
            $(".Interno, .membresia , .ajuste , .visita , .servicio").hide();

            $(".btn-actualizar-ci").hide();
            $(".btn-actualizar").show();

            });
        
        $(".btn-danger").click(function() {
            
            $(".membresia , .ajuste , .visita , .servicio").show();
            $(".Producto , .Interno").hide();

            $(".btn-actualizar-ci").hide();
            $(".btn-actualizar").show();

            });

        $(".btn-info").click(function() {
            
            $(".btn-actualizar-ci").show();
            $(".btn-actualizar").hide();

            $(".Interno").show();
            $(".Producto , .membresia , .ajuste , .visita , .servicio , .Vapor , .Spa , .Clases , .Pago").hide();

            });
        
            /*
            $(".btn-default").click(function() {

            id_advance_ci = $("input[name='id_advance']:checked").val()

            data_alta     = "id_advance_ci=" + id_advance_ci;            

                // XMLHttpRequest --->
                $.ajax({
                    url: "http://api.gymh2o.com/almacen/delete/tipo/json/",
                    type: 'POST',
                    dataType: 'json',
                    data: data_alta,
                    success: function (data) {

                        alert("OK Producto Borrado");
                        Almacenall();

                        }
                    }).done(function( msg ) {
                        
                        Almacenall();

                        });
            
                    setTimeout(function(){
                        javascript:location.reload()
                    },1000)

   

            });
            */
        }        

    //-----> (F) Begin BtnCi() -> ModalCi() -> DashboardTrabajadorBuscador() -> buscarpersonal()
    function BtnCi(){

        $(".btn-actualizar-ci").click(function() {


            id_advance_ci = $("input[name='id_advance']:checked").val()

            nombre_ci   = $("." + id_advance_ci).html();
            
            $(".copy_html").html("");
            $(".copy_html").append(nombre_ci);

            $(".copy_html").hide();      

           nombre_ci   = $(".copy_html .nombre").html();
           cantidad_ci = $(".copy_html .cantidad").html();

           $(".nombre_ci").html("");
           $(".cantidad_ci").html("");

           $(".nombre_ci").html(nombre_ci);
           $(".cantidad_ci").html(cantidad_ci);
           $(".id_advance_ci").val(id_advance_ci);

                //-----> (G) Begin ModalCi() -----> Buscar Personal() -----> Trabajador Buscador()

                ModalCi();
                buscarpersonal();

                dialogci.dialog( "open" );

            });    

        }

    //-----> (G) Begin ModalCi()
    function ModalCi(){

        dialogci = $("#dialog-almacen-actualizar-ci").dialog({

            position: { my: "center middle"},
            resizable: false,
            height:400,
            width: 600,
            modal: true,
            autoOpen: false,
            buttons: {
                "Actualizar Almacen": function() {

                id_advance_ci            = $(".id_advance_ci").val();
                cantidad_menos_ci        = $(".cantidad_menos_ci").val();
                id_advance_trabajador_ci = $(".id_advance_trabajador_ci").val();
                                                
                data_alta                 = "id_advance_ci="              + id_advance_ci     +
                                            "&cantidad_menos_ci="         + cantidad_menos_ci +
                                            "&id_advance_trabajador_ci="  + id_advance_trabajador_ci
                ;

                //API Begin: Almacen Nuevo Consumo Interno
                $.ajax({
                    url: api_almacen_new_ci,
                    type: 'POST',
                    dataType: 'json',
                    data: data_alta
                    }).done(function() {
            
                        console.log("Almacen: Producto Lista Success (ASx000001).");
                            
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

                                console.error("Almacen: Producto Lista Error (AEx000001 [" + fail_txt + "] ).");
                                alert("Almacen: Producto Lista Error (AEx000001 [" + fail_txt + "] ).");

                            }).always(function() {
                    
                                console.log("Almacen: Producto Lista Success (ASx000002).");
                                dialogci.dialog( "close" );
                                alert("OK Producto Nuevo");
                                Almacenall();         

                                    });
                    
                        
                //API End: Almacen Nuevo Consumo Interno

                    },Cancel: function() {
                        
                        dialogci.dialog( "close" );

                        }

                    }

                });

        
        }

    //-----> Trabajador Buscador
    function DashboardTrabajadorBuscador(){

        $(".p-buscar").toggle(function() {
            
            $("#info_trabajadores").hide()
            $("#buscar_trabajador").show()   

            alert(1);
            

            },function(){
                
                $("#buscar_trabajador").hide()  
                $("#info_trabajadores").hide()
                $("#info_trabajador").hide()    

                $("#info_trabajadores").show()
                
                alert(2);
                buscarpersonal();
                })

        }

    //-----> Buscar Personal         
    function buscarpersonal(){

                $('.nombre_trabajador_ci').val('')
                $('.nombre_trabajador_ci').focus()
                
                $(".nombre_trabajador_ci").autocomplete({
                    minLength: 4,
                    delay: 400,
                    source: function(req, add){ 

                        // XMLHttpRequest --->
                            $.getJSON(api_empleado_search , req, function(data) {  
                                var suggestions = [] ;  
                                    $.each(data, function(i,val){  
                                        suggestions.push({
                                            id              : val.id ,
                                            id_advance      : val.id_advance ,

                                            value           : val.nombre,
                                            nombre          : val.nombre,
                                            edad            : val.edad ,
                                            codebar         : val.codebar,
                                            fecha_inicio    : val.fecha_inicio,

                                            tel             : val.tel, 
                                            cell            : val.cell ,
                                            email           : val.email ,
                                            direccion       : val.direccion ,
                                            
                                            foto            : val.foto
                                        });
                                    });  
                                add(suggestions);  
                            });  

                        },select: function (event, ui) {
                            
                            $(".id_advance_trabajador_ci").val(ui.item.id_advance);                        

                        }
                    })  
                
                }