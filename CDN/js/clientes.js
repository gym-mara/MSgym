console.error('Run: Puro Flow !!!')

    $(document).on("ready",All);
    console.debug('Run: All');
 
    $(document).on("ready",InfoClientesNuevos);
    $(document).on("ready",InfoClientesPagado);
    $(document).on("ready",InfoClientesCumpleannos);
    
    $(document).on("ready",InfoClientesPendiente);
    $(document).on("ready",InfoClientesInactivos);

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

        console.log('End: All');
        }        

    function InfoClientesNuevos (){
        $.get(api_clientes_info_nuevos, function (data) {
            $.each(data, function (key, val) {
                $('#socios-nuevos').append("<tr class='info'><th scope='row'>" + val.nombre + "</th><td>" + val.sexo + "</td><td>" + val.membresia + "</td><td>" + val.fecha_registro + "</td></tr>");
            })
        })
        }

    function InfoClientesCumpleannos (){
        $.get(api_clientes_info_cumpleannos, function (data) {
            $.each(data, function (key, val) {
                $('#socios-cumpleannos').append("<tr class='warning'><th scope='row'>" + val.nombre + "</th><td>" + val.fecha_nacimiento + "</td><td>" + val.membresia + "</td><td> Tel:" + val.telefono + "<br />cel:" + val.cel + "<br />email:" + val.email +"</td></tr>");
            })
        })
        }

    function InfoClientesPagado (){
        $.get(api_clientes_info_pagado, function (data) {
            $.each(data, function (key, val) {
                $('#socios-pagado').append("<tr class='success'><th scope='row'>" + val.nombre + "</th><th>" + val.membresia + "</th><th>" + val.fecha_inicio + "</th><th>" + val.fecha_proxima + "</th></tr>");
            })
        })
        }    

    function InfoClientesPendiente (){
        $.get(api_clientes_info_pendiente, function (data) {
            $.each(data, function (key, val) {
                $('#socios-pendiente').append("<tr class='danger'><th scope='row'>" + val.nombre + "</th><th>" + val.membresia + "</th><th>" + val.fecha_proxima + "</th></tr>");
            })
        })
        }    

    function InfoClientesInactivos () {
        $.get(api_clientes_info_inactivo, function (data) {
            $.each(data, function (key, val) {
                $('#socios-inactivos').append("<tr class='danger'><th scope='row'>" + val.nombre + "</th><th>" + val.membresia + "</th><th>" + val.fecha_inicio + "</th></tr>");
            })
        })
        }    

    //END: Dashboard
