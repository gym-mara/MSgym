<!-- Socios Alta -->
<div id="dialog-personal-actualizar" title="Clientes - Actualizar" >
  
  <h5>Actuaizacion de la informacion del personal , Datos generales.</h5>    
  
  <hr>
    
    <label class="col-xs-4 control-label">foto del personal</label>

    <div class="col-xs-8 ">

      <div id="webcam3" style="width:100%;"></div>
      
      <div id="webcamResult3">
        <textarea id="formfield3" class="hidden"></textarea>
        <img      id="image3"                  style="width:320px; height:240px;"/>
      </div>

      <select id="cameraNames3" size="1" onChange="changeCamera()" style="width:245px;font-size:10px;height:25px;"></select>
      
      <hr >

      <button id="btn33" type="button" class=" btn btn-success">disparar</button>
      <button id="btn43" type="button" class=" btn btn-success">nueva</button>
      
      <hr>

    </div>

    <form class="form-horizontal">

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputTipopersonal">Tipo Personal</label>
        <div   class="col-xs-8">
              
        <select class="form-control i-e-alta-tipo" id="update-inputTipopersonal" placeholder="Tipo de personal">
          <option value="tipo">tipo</option>
          <option value="cajero">cajero</option>
          <option value="general">general</option>
        </select>

        </div>
      </div>

      <div class="update-userpass">

            <div class="form-group">
              <label class="col-xs-4 control-label" for="update-inputUsuario">Usuario</label>
              <div   class="col-xs-8"><input type="text"    class="form-control i-e-alta-nombre" id="update-inputUsuario" placeholder="Nombre del Usuario"></div>
            </div>

            <div class="form-group">
              <label class="col-xs-4 control-label" for="update-inputPassword">Password</label>
              <div   class="col-xs-8"><input type="text"    class="form-control i-e-alta-nombre" id="update-inputPassword" placeholder="Password del Socio"></div>
            </div>

      </div>


      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputNombreempleado">Nombre del Empleado</label>
        <div   class="col-xs-8"><input type="text"    class="form-control" id="inputActualizarNombreempleado" placeholder="Nombre del Socio"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputFecha">Fecha de Nacimiento</label>
        <div   class="col-xs-8"><input type="text" class="form-control" id="inputActualizarFechaempleado" placeholder="AAAA-MM-DD"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputFecha">Sexo</label>
        <div   class="col-xs-8">
          <div id="radio">
            <input type="radio" id="actualizar_radio1" name="radio3" value="Masculino"><label for="radio1">Masculino</label>
            <input type="radio" id="actualizar_radio2" name="radio3" value="Femenino"><label for="radio3">Femenino</label>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputTelefono">Telefono</label>
        <div   class="col-xs-8"><input type="tel"    class="form-control" id="inputActualizarTelefonoempleado" placeholder="Telefono"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputCelular">Celular</label>
        <div   class="col-xs-8"><input type="tel"    class="form-control" id="inputActualizarCelularempleado" placeholder="Celular"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputEmail">E-mail</label>
        <div   class="col-xs-8"><input type="email"    class="form-control" id="inputActualizarEmailempleado" placeholder="E-mail"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputDireccion">Dirección</label>
        <div   class="col-xs-8"><input type="text"    class="form-control" id="inputActualizarDireccionempleado" placeholder="Dirección"></div>
      </div>

    </form>
</div>