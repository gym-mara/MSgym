<!-- Socios Alta -->
<div id="dialog-personal-nuevo" title="Clientes - Alta" >
  
  <h5>Registro de personal nuevo, Datos generales.</h5>    
  
  <hr>
    
    <label class="col-xs-4 control-label">foto del personal</label>

    <div class="col-xs-8 ">

      <div id="webcam2" style="width:100%;"></div>
      
      <div id="webcamResult2">
        <textarea id="formfield2" class="hidden"></textarea>
        <img      id="image2"                  style="width:320px; height:240px;"/>
      </div>

      <select id="cameraNames2" size="1" onChange="changeCamera()" style="width:245px;font-size:10px;height:25px;"></select>
      
      <hr >

      <button id="btn32" type="button" class=" btn btn-success">disparar</button>
      <button id="btn42" type="button" class=" btn btn-success">nueva</button>
      
      <hr>

    </div>

    <form class="form-horizontal">

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputNombreempleado">Nombre del Empleado</label>
        <div   class="col-xs-8"><input type="text"    class="form-control i-e-alta-nombre" id="inputNombreempleado" placeholder="Nombre del Socio"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputFecha">Fecha de Nacimiento</label>
        <div   class="col-xs-8"><input type="text" class="form-control i-e-alta-f-nacimiento" id="inputFechaempleado" placeholder="AAAA-MM-DD"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputFecha">Sexo</label>
        <div   class="col-xs-8">
          <div id="radio">
            <input type="radio" id="radio1" name="radio2" value="Masculino"><label for="radio1">Masculino</label>
            <input type="radio" id="radio3" name="radio2" value="Femenino"><label for="radio3">Femenino</label>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputTelefono">Telefono</label>
        <div   class="col-xs-8"><input type="tel"    class="form-control i-e-alta-telefono" id="inputTelefonoempleado" placeholder="Telefono"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputCelular">Celular</label>
        <div   class="col-xs-8"><input type="tel"    class="form-control i-e-alta-celular" id="inputCelularempleado" placeholder="Celular"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputEmail">E-mail</label>
        <div   class="col-xs-8"><input type="email"    class="form-control i-e-alta-email" id="inputEmailempleado" placeholder="E-mail"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputDireccion">Dirección</label>
        <div   class="col-xs-8"><input type="text"    class="form-control i-e-alta-direccion" id="inputDireccionempleado" placeholder="Dirección"></div>
      </div>

    </form>
</div>