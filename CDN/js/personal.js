console.error('Run: Puro Flow !!!')

    $(document).on("ready",All);
    console.debug('Run: All');

    /***** TRABAJADORES *****/   
    
    $(document).on("ready",LoadInfoTrabajadorJson);
    
    
    $(document).on("ready",DashboardTrabajadorInfo);

    $(document).on("ready",DashboardTrabajadorNuevo);
    $(document).on("ready",DashboardTrabajadorBuscador);
    $(document).on("ready",DashboardTrabajadorActualizar);


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

        $("#info_trabajadores,#buscar_trabajador,#info_trabajador,#dialog-personal-nuevo").hide();
        
        //----->
        LoadInfoTrabajadores()

        console.log('End: All');
        }        

    //-----> Trabajador Informacion   
    function LoadInfoTrabajadores(){
        
        $("#info_trabajadores").fadeIn()
        $("#json_info_trabajadores").html(' ')
            
        $.get(api_empleado_info, function (data){
            $.each(data, function (key, val) {

                if (val.foto== "" || val.foto == "null" || empty(val.foto) ) {
                    var foto = 'http://placehold.it/175x150/FF3D00/000000'
                    }else{
                        var foto = val.foto;
                        foto = foto.split(' ').join('+');
                        }

                $("#json_info_trabajadores").append("<tr><th scope='row'><img id='" + val.id_advance  + "' class='img-circle img-trabajador' src='data:image/png;base64," + foto  + "' style='width: 175px;height: 150px;'></th><td>" + val.nombre + "</td><td>" + val.sexo + "</td><td>" + val.fecha_inicio + "</td><td>" + val.tel + "<br>" + val.cell + "<br>" + val.email + "</td></tr>");
                
                });
            })            

         }


    //-----> Lload info trabajador
    function LoadInfoTrabajadorJson(){

        setTimeout(function(){
            
            $( "#json_info_trabajadores img" ).click(function() {   

           // EmptyTrabajadoresJson()

            id_advance = $(this).attr('id')

                $.get(api_empleado_info_alone+id_advance+"&info=user", function (data) {
                    $.each(data, function (key, val) {
                        
                        $(".t-nombre").fadeIn().html(val.nombre)
                        $(".t-edad").fadeIn().html(val.edad)
                        $(".t-codebar-1").fadeIn().html(val.codebar)
                        $(".t-fecha_inicio").fadeIn().html(val.fecha_inicio)

                        $(".t-telefono").fadeIn().html(val.tel)
                        $(".t-cell").fadeIn().html(val.cell)
                        $(".t-mail").fadeIn().html(val.email)
                        $(".t-direccion").fadeIn().html(val.direccion)

                        $("#id_advance-info-trabajador").empty().val(val.id_advance)

                        if (val.foto== "") {
                            var foto = 'http://placehold.it/175x150/FF3D00/000000'
                            }else{
                                var foto = val.foto;
                                foto = foto.split(' ').join('+');
                                foto = "data:image/png;base64," + foto;
                                }
                            
                            $(".t-foto").fadeIn(2000).attr('src', foto);

                        //Actualizar
                        setTimeout(function(){
                            $("#inputActualizarNombreempleado").val(val.nombre)
                            $("#inputActualizarFechaempleado").val(val.fecha_nacimiento)
                            $("#inputActualizarTelefonoempleado").val(val.tel)
                            $("#inputActualizarCelularempleado").val(val.cell)
                            $("#inputActualizarEmailempleado").val(val.email)
                            $("#inputActualizarDireccionempleado").val(val.direccion)
                            
                            if (val.sexo == 'Masculino') {
                                $('#actualizar_radio1').prop( "checked", true );
                                }else{
                                    $('#actualizar_radio2').prop( "checked", true );
                                    }
                            var foto = val.foto;
                            
                            foto = foto.split(' ').join('+');

                            foto = "data:image/png;base64," + foto; 

                            $("#image3").attr('src',foto);

                            },500)                            

                        })
                    })

                    $("#info_trabajadores").hide()
                    $("#info_trabajador").show()  
                    
                    listaasistenciapersonal()
                })
            
            },15000)

        
        }

    function listaasistenciapersonal(){
        
        setTimeout(function(){
            $(".socio_asistencia").empty();
            
            var id_advance = $("#id_advance-info-trabajador").val()
            
        
            $.get(api_empleado_asistencia_lista + "?id_advance=" + id_advance, function (data){
                $.each(data, function (key, val) {    

                    function diasx(dia,tipo_cell){                  

                        if(val.dia_x[2]  == dia){
                            $(".socio_asistencia").append("<tr class='" + tipo_cell + "'><th scope='row' class='text-center'>#</th><td>" + val.codebar + "</td><td>" + val.fecha + "</td></tr></tbody></table>")    
                        }

                    }

                    var tipo_cell1 = 'info';
                    var tipo_cell2 = 'active';
                    
                    diasx(1,tipo_cell1)
                    diasx(2,tipo_cell2)
                    diasx(3,tipo_cell1)
                    diasx(4,tipo_cell2)
                    diasx(5,tipo_cell1)
                    diasx(6,tipo_cell2)
                    diasx(7,tipo_cell1)
                    diasx(8,tipo_cell1)
                    diasx(9,tipo_cell1)
                    diasx(10,tipo_cell1)

                    diasx(11,tipo_cell1)
                    diasx(12,tipo_cell2)
                    diasx(13,tipo_cell1)
                    diasx(14,tipo_cell2)
                    diasx(15,tipo_cell1)
                    diasx(16,tipo_cell2)
                    diasx(17,tipo_cell1)
                    diasx(18,tipo_cell1)
                    diasx(19,tipo_cell1)
                    diasx(20,tipo_cell1)

                    diasx(21,tipo_cell1)
                    diasx(22,tipo_cell2)
                    diasx(23,tipo_cell1)
                    diasx(24,tipo_cell2)
                    diasx(25,tipo_cell1)
                    diasx(26,tipo_cell2)
                    diasx(27,tipo_cell1)
                    diasx(28,tipo_cell1)
                    diasx(29,tipo_cell1)
                    diasx(30,tipo_cell1)                                

                    diasx(31,tipo_cell1)                                

                    
                
                    });
                
                })  
        
        

        },1000)
        }        

    //-----> Trabajador Informacion  
    /* 
    click -> .p-inicio  -> Run LoadInfoTrabajadores() 
    carga la informacion de los trabajadores
    */ 
    function DashboardTrabajadorInfo(){
        $( ".p-inicio" ).click(function(){
            
            $("#info_trabajadores,#buscar_trabajador,#info_trabajador,#dialog-personal-nuevo").hide();
            //LoadInfoTrabajadores()
            $("#info_trabajadores").fadeIn()

            })
        }


    //-----> Trabajador Nuevo
    function DashboardTrabajadorNuevo(){
        webCam642()

        $('.userpass').hide();

        $("#radio").buttonset()

        

        $( " #inputTipopersonal").change(function() { 
            
            if (this.value  == 'cajero') {
                $('.userpass').show();
            }else{$('.userpass').hide();}

        });
                
        $( ".p-nuevo" ).click(function(){
            
            $("#dialog-personal-nuevo").dialog({

                position: { my: "center top"},
                resizable: false,
                height:700,
                width: 800,
                modal: true,
                buttons: {
                    "Registrar Trabajador": function() {

                        var inputUsuario        = $('#inputUsuario').val()
                        var inputPassword       = $('#inputPassword').val()

                        var i_c_formfield2         = $('#formfield2').val()
                        var i_c_formfield2         = htmlEncode(i_c_formfield2)

                        var i_e_alta_nombre        = $("input#inputNombreempleado").val()
                        var i_e_alta_f_nacimiento  = $("input.i-e-alta-f-nacimiento").val()
                        var i_e_radio              = $('input[name="radio2"]:checked').val()
                        var i_e_alta_telefono      = $("input.i-e-alta-telefono").val()
                        var i_e_alta_celular       = $("input.i-e-alta-celular").val()

                        var i_e_alta_email         = $("input.i-e-alta-email").val()
                        var i_e_alta_direccion     = $("input.i-e-alta-direccion").val()
                        

                        data_alta                 = "i_c_formfield2="         + i_c_formfield2          +

                                                    "&inputUsuario="         + inputUsuario          +
                                                    "&inputPassword="         + inputPassword         +

                                                    "&i_e_alta_nombre="       + i_e_alta_nombre         +
                                                    "&i_e_alta_f_nacimiento=" + i_e_alta_f_nacimiento   +
                                                    "&i_e_radio="             + i_e_radio               +
                                                    "&i_e_alta_telefono="     + i_e_alta_telefono       +
                                                    "&i_e_alta_celular="      + i_e_alta_celular        +
                                                    "&i_e_alta_email="        + i_e_alta_email          +
                                                    "&i_e_alta_direccion="    + i_e_alta_direccion
                        ;

                        
                        // Time --->
                        setTimeout(function(){
                            
                            // XMLHttpRequest --->
                            $.ajax({
                                url: api_empleado_new,
                                type: 'POST',
                                dataType: 'json',
                                success: function (data) {},
                                data: data_alta
                                })
                                .done(function( msg ) {
                                    //----->
                                    LoadInfoTrabajadores()
                                });

                            },2000)
                        

                        
                        emptyNew2()
                        $( this ).dialog( "close" )

                    },Cancel: function() {

                        emptyNew2()
                        $( this ).dialog( "close" )

                        }


                }

                })

            })

        }

    //-----> Trabajador Buscador
    function DashboardTrabajadorBuscador(){

        $(".p-buscar").toggle(function() {
            
            $("#info_trabajadores").hide()
            $("#buscar_trabajador").show()   
            
            //----->function buscar personal
            buscarpersonal()

            },function(){
                
                $("#buscar_trabajador").hide()  
                $("#info_trabajadores").hide()
                $("#info_trabajador").hide()    

                $("#info_trabajadores").show()
                
                })

        }

        //-----> Buscar Personal         
        function buscarpersonal(){

                $('.buscador_trabajador').val('')
                $('.buscador_trabajador').focus()
                
                $(".buscador_trabajador").autocomplete({
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


                            $(".t-nombre").fadeIn().html(ui.item.nombre)
                            $(".t-edad").fadeIn().html(ui.item.edad)
                            $(".t-codebar-1").fadeIn().html(ui.item.codebar)
                            $(".t-fecha_inicio").fadeIn().html(ui.item.fecha_inicio)

                            $(".t-telefono").fadeIn().html(ui.item.tel)
                            $(".t-cell").fadeIn().html(ui.item.cell)
                            $(".t-mail").fadeIn().html(ui.item.email)
                            $(".t-direccion").fadeIn().html(ui.item.direccion)
                            
                                if (ui.item.foto== "") {
                                    var foto = 'http://placehold.it/175x150/FF3D00/000000'
                                    }else{
                                        var foto = ui.item.foto;
                                        foto = foto.split(' ').join('+');
                                        foto = "data:image/png;base64," + foto;
                                        }
                                
                                $(".t-foto").empty().fadeIn(2000).attr('src', foto );
                                $("#id_advance-info-trabajador").val(ui.item.id_advance)
                                    $("#info_trabajador").show() 

                                    listaasistenciapersonal()                           

                        }
                    })  
                
                }
    

    //----->
    function emptyNew2(){
        
        $("input.i-e-alta-nombre").val('')
        $("input.i-e-alta-f-nacimiento").val('')
        $("input.i-e-alta-telefono    ").val('')
        $("input.i-e-alta-celular").val('')
        $("input.i-e-alta-email").val('')
        $("input.i-e-alta-direccion").val('')
        $('#formfield2').val('')
        
        }    


    //-----> Trabajador Nuevo t-actualizar dialog-personal-actualizar  
    function DashboardTrabajadorActualizar(){

        $("#dialog-personal-actualizar").hide()

        $('.update-userpass').hide();

        $( " #update-inputTipopersonal").change(function() { 
            
            if (this.value  == 'cajero') {
                $('.update-userpass').show();
            }else{$('.update-userpass').hide();}

        });

        $("#radio").buttonset()
        
        $( ".t-actualizar" ).click(function(){

            webCam643()

            $("#dialog-personal-actualizar").dialog({
                position: { my: "center top"},
                resizable: false,
                height:700,
                width: 800,
                modal: true,
                buttons: {
                    "Registrar Trabajador": function() {
                        var update_inputUsuario        = $('#update-inputUsuario').val()
                        var update_inputPassword       = $('#update-inputPassword').val()

                        var i_c_update_formfield3    = $('#formfield3').val()
                        var i_c_update_formfield3    = htmlEncode(i_c_update_formfield3)

                        var i_e_update_nombre        = $("#inputActualizarNombreempleado").val()
                        var i_e_update_f_nacimiento  = $("input#inputActualizarFechaempleado").val()
                        var i_e_update_radio         = $('input[name="radio3"]:checked').val()
                        var i_e_update_telefono      = $("input#inputActualizarTelefonoempleado").val()
                        var i_e_update_celular       = $("input#inputActualizarCelularempleado").val()

                        var i_e_update_email         = $("input#inputActualizarEmailempleado").val()
                        var i_e_update_direccion     = $("input#inputActualizarDireccionempleado").val()
                        
                        var id_advance_info_trabajador = $("input#id_advance-info-trabajador").val()



                        data_alta = "id_advance_info_trabajador="  + id_advance_info_trabajador +
                                    
                                    "&update_inputUsuario="          + update_inputUsuario  +
                                    "&update_inputPassword="          + update_inputPassword  +

                                    "&i_e_update_nombre="          + i_e_update_nombre  +
                                    "&i_e_alta_f_nacimiento="      + i_e_update_f_nacimiento   +
                                    "&i_e_radio="                  + i_e_update_radio               +
                                    "&i_e_alta_telefono="          + i_e_update_telefono       +
                                    "&i_e_alta_celular="           + i_e_update_celular        +
                                    "&i_e_alta_email="             + i_e_update_email          +
                                    "&i_e_alta_direccion="         + i_e_update_direccion      +
                                    "&i_c_update_formfield3="      + i_c_update_formfield3   
                                    ;

                        //alert(data_alta)

                        // Time --->
                        
                        setTimeout(function(){
                            
                            // XMLHttpRequest --->
                            $.ajax({
                                url: api_empleado_update,
                                type: 'POST',
                                dataType: 'json',
                                success: function (data) {console.log('ok update')},
                                data: data_alta
                                }).done(function( msg ){
                                    LoadInfoTrabajadores()
                                    })

                            },2000)
                        
                        emptyNew2()

                        $( this ).dialog( "close" )

                        setTimeout(function(){
                            javascript:location.reload()    
                            },2000)
                        
                    },Cancel: function() {

                            emptyNew2()
                            $( this ).dialog( "close" )

                        }
                }

                })

            })

        }      