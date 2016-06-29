<!-- Cliente Nuevo -->
<div id="dialog-cliente-nuevo" title="Clientes - Alta" >
  
  <h5>Registro de socios nuevo, Datos generales.</h5>    
  
  <hr>
    
    <label class="col-xs-4 control-label">foto del socio</label>

    <div class="col-xs-8 ">

      <div id="webcam" style="width:100%;"></div>
      
      <div id="webcamResult">
        <textarea id="formfield" class="hide"></textarea>
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
        <div   class="col-xs-8"><input type="email"    class="form-control i-c-alta-nombre" id="inputNombre" placeholder="Nombre del Socio"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputFecha">Fecha de Nacimiento</label>
        <div   class="col-xs-8"><input type="text" class="form-control i-c-alta-f-nacimiento" id="inputFecha" placeholder="AAAA-MM-DD"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputFecha">Sexo</label>
        <div   class="col-xs-8">
          <div id="radio">
            <input type="radio" id="radio1" name="radio" value="Masculino"><label for="radio1">Masculino</label>
            <input type="radio" id="radio3" name="radio" value="Femenino"><label for="radio3">Femenino</label>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputTelefono">Telefono</label>
        <div   class="col-xs-8"><input type="tel"    class="form-control i-c-alta-telefono" id="inputTelefono" placeholder="Telefono"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputCelular">Celular</label>
        <div   class="col-xs-8"><input type="tel"    class="form-control i-c-alta-celular" id="inputCelular" placeholder="Celular"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputEmail">E-mail</label>
        <div   class="col-xs-8"><input type="email"    class="form-control i-c-alta-email" id="inputEmail" placeholder="E-mail"></div>
      </div>

      <div class="form-group">
        <label class="col-xs-4 control-label" for="inputDireccion">Dirección</label>
        <div   class="col-xs-8"><input type="text"    class="form-control i-c-alta-direccion" id="inputDireccion" placeholder="Dirección"></div>
      </div>
      

      <hr>

      <div class="hidden">
        <h4>Membresia</h4>
        <button id="btn-membresia-v" type="button" class=" btn btn-success">venta de membresia</button>

        <hr>
          <div class="bs-example" data-example-id="striped-table"> 
                  <table class="table table-striped"> 
                    <caption></caption> 
                    <thead> 
                      <tr>
                        <th>concepto</th> 
                        <th>precio</th> 
                        <th>% descuento</th> 
                        <th>preciofinal</th> 
                      </tr> 
                    </thead> 
                    <tbody id="list-caja-activa"></tbody> </table> 
          </div>
        <hr>
      </div>
      
    </form>
</div>

<!--X:Lista de productos -->
<div id="lista-productos" class="bs-example hidden" data-example-id="striped-table"> 
        <table class="table table-striped"> 
          <thead> 
            <tr> <th>existencia</th> <th>descripcion</th> <th>precio</th> <th>codigo barras</th> </tr> 
          </thead> 
          <tbody id="list-caja"></tbody> </table> 
</div>