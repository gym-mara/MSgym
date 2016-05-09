
<div class="container-fluid">
  <div class="row">

    <h1 class="text-left text-uppercase text-primary">informacion <strong>semanal</strong></h1>

    <!-- Informacion semanal + Icons -->
    <div class="col-xs-12 text-right">
      <hr class="space">
      <ol class="breadcrumb text-left">
        <li>
          <?php  echo $_SESSION['data'][0]->nombre;?>
          
          <input type="text" name="" value="<?php  echo $_SESSION['data'][0]->id_advance;?>" id="id_advance_trabajdor" class="j-hidden">  
          <input type="text" name="" value="<?php  echo $_SESSION['data'][0]->tipo;?>"       id="tipo_trabajdor"       class="j-hidden">  
        </li>
      </ol>

      

    </div>


    <div class="col-sm-12 col-md-12 ">

      <div class="col-xs-12 text-right">
        <h1 class="text-left text-uppercase text-primary">socio <small class="text-capitalize">información</small></h1>
      </div>

      <hr>

      <div class="row">
       
        <div class="col-md-4 text-center">
          <img id="s-socio" class="img-circle" src="http://placehold.it/200x175/FF3D00/000000" style="width:200px; height:175px;">       
          <br>
          <span class="c-actualizar">Actualizar</span>
          <span class="btn-pago">Pagar</span>
        </div>
        <div class="col-md-4 text-left">

          <br><span class="" >Nobre:   <span class="s-nombre"></span></span>
          <br><span class="tipo-cajera" >Edad:    <span class="s-fecha_nacimiento"></span> años</span>
          <br><span class="" >Codebar: <span class="s-codebar-1"></span></span>

          <br><span class="" ><span class="s-membresia"></span> $<span class="s-precio"></span></span>
          <br><span class="" >Fecha de inicio suscripción: <span class="s-fecha_inicio"></span></span>
          <br><span class="" >Fecha próxima pago: <span class="s-fecha_proxima"></span>  </span>
           
        </div>
        <div class="col-md-4 text-left">

          <br><span class="tipo-cajera" >Tel: <span class="s-telefono"></span></span>
          <br><span class="tipo-cajera" >Cell: <span class="s-cell"></span> </span>
          <br><span class="tipo-cajera" >Email: <span class="s-mail"></span> </span>
          <br><span class="tipo-cajera" >Direccion: <span class="s-direccion"></span> </span>
          <br><span class="" >Comentario: <span class="s-comentario"></span> </span>
        
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 text-left"><h2>Historial</h2></div>
        <div class="col-md-12 text-center">

          <table class="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>fecha de inicio</th>
                    <th>fecha de renovacion</th>
                    <th>membresia</th>
                    <th>precio</th>
                  </tr>
                </thead>
                <tbody class="socio_historial"></tbody>
          </table>
    
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 text-left"><h2>Asistencia</h2></div>
        <div class="col-md-12 text-center">

          <table class="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>codigo de barras</th>
                    <th>fecha</th>

                  </tr>
                </thead>
                <tbody class="socio_asistencia"></tbody>
          </table>
    
        </div>
      </div>

    </div>

  </div>
</div>

<input type="hidden" id="id_advance" value="<?php echo $_GET['id_advance']; ?>">


<!-- Socio Actualizar -->
<div id="dialog-socio-update" title="Clientes - Actualizar" >
  
  <h5>Actualizacion socios , Datos generales.</h5>    
  
  <hr>
    
    <label class="col-xs-4 control-label">foto del socio</label>

    <div class="col-xs-8 ">

      <div id="webcam" style="width:100%;"></div>
      
      <div id="webcamResult">
        <textarea id="formfield" class="hide" style="width:320px; height:240px;"></textarea>
        <img      id="image"                  style="width:320px; height:240px;"/>
      </div>

      <select id="cameraNames" size="1" onChange="changeCamera()" style="width:245px;font-size:10px;height:25px;"></select>
      
      <hr >

      <button id="btn3" type="button" class=" btn btn-success">disparar</button>
      <button id="btn4" type="button" class=" btn btn-success">nueva</button>
      
      <hr>

    </div>

    <form class="form-horizontal">

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputNombre">Nombre del Cliente</label>
        <div   class="col-xs-8"><input type="text"    class="form-control i-c-actualizar-nombre" id="inputNombre2" placeholder="Nombre del Socio"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputFecha">Fecha de Nacimiento</label>
        <div   class="col-xs-8"><input type="text" class="form-control i-c-actualizar-f-nacimiento" id="inputFecha2" placeholder="AAAA-MM-DD"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputFecha">Sexo</label>
        <div   class="col-xs-8">
          <div id="radio">
            <input type="radio" id="radio3" name="radio2" value="Masculino"><label for="radio1">Masculino</label>
            <input type="radio" id="radio4" name="radio2" value="Femenino"><label for="radio3">Femenino</label>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputTelefono">Telefono</label>
        <div   class="col-xs-8"><input type="tel"    class="form-control i-c-actualizar-telefono" id="inputTelefono" placeholder="Telefono"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputCelular">Celular</label>
        <div   class="col-xs-8"><input type="tel"    class="form-control i-c-actualizar-celular" id="inputCelular" placeholder="Celular"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputEmail">E-mail</label>
        <div   class="col-xs-8"><input type="email"    class="form-control i-c-actualizar-email" id="inputEmail" placeholder="E-mail"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputDireccion">Dirección</label>
        <div   class="col-xs-8"><input type="text"    class="form-control i-c-actualizar-direccion" id="inputDireccion" placeholder="Dirección"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputSuscripcion">Tipo de suscripción</label>
        <div   class="col-xs-8">
          <select class="form-control json_membresia_new text-uppercase" id="inputSuscripcion"  placeholder="Tipo de suscripción"><option value="null">Tipo de suscripción</option></select>
        </div>
      </div>
    </form>
</div>

<!-- Socio Pagar -->
<div id="dialog-confirm" title="Clientes - Pagar suscripción" >

  <p><span class="ui-icon ui-icon-alert" style="float:left; margin:0 7px 20px 0;"></span>Pago de la suscripción, por favor checar que los datos se han correctos.</p>

    <hr>
  <div class="row pago_socio_info"></div>

      <hr>

    <h4>Tipo de Pago</h4>
      <p >Tipo de suscripción: <span class="nuevo_tipo_pago">
        <select class="json_membresia text-uppercase"><option value="null">Tipo de suscripción</option></select>
        <input type="hidden" class="json_membresia_id">
      </span></p>
      <p >Precio: $            <span class="nuevo_precio_pago">Precio de la suscripción</span></p>
</div>