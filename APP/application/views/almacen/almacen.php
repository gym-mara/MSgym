<div class="container">
    
  <div class="row">
    <div class="col-xs-12 text-left">
      
      <h1 class="text-left text-uppercase text-primary">
        almacen <small class="text-capitalize">informes</small>
      </h1>

      <h4 class="text-left text-uppercase text-primary">
        <small class="text-capitalize pro-inicio"><a href="<?php echo site_url('almacen'); ?>">Inicio </a></small> / 
        <small class="text-capitalize pro-nuevo" >Nuevo</small> / 
        <small class="text-capitalize pro-historial" ><a href="<?php echo site_url('almacen/historial'); ?>">Historial</a></small>
      </h4>  

      <hr>
      <button type="button" class=" btn btn-success btn-actualizar text-left">Actualizar</button>
      
      <!-- Indicates caution should be taken with this action -->
      <!-- <button type="button" class="btn btn-warning btn-actualizar-ci text-left">Actualizar Consumo Interno</button> -->

      <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
      <button type="button" class="btn btn-primary text-left">Productos</button>

      <button type="button" class="btn btn-danger text-left">Servicios</button>

      <!-- Contextual button for informational alert messages -->
      <!-- <button type="button" class="btn btn-info text-left">Consumo Interno</button> -->


    </div>
  </div>

  <hr>

  <div class="bs-example" data-example-id="simple-responsive-table">
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tipo</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio Compra</th>
            <th>Precio Venta</th>
            <th>Cantidad</th>
            <th>Codigo barras</th>
          </tr>
        </thead>
        <tbody id="almacen_all" class="text-center"><img src="<?php echo cdn(); ?>/img/load.gif" alt="" id="img-load" class="text-center"></tbody>
      </table>
    </div><!-- /.table-responsive -->
  </div>

  <hr class="space">

</div>    

  <!--  nuevo producto-->
  <div id="producto-nuevo" title="Producto - Alta" >
    
    <h5>Registro de producto nuevo, Datos generales.</h5>    
    
    <hr>

      <form class="form-horizontal">

        <div class="form-group">
          <label class="col-xs-4 control-label" for="inputNombre">Tipo</label>
          <div   class="col-xs-8">
            <select id="tipo" size="00" >
              <option value="">-- Tipo --</option>
              <option value="Producto">Producto</option>
              <option value="Servicio">Servicio</option>
              <option value="Spa">Spa</option>
              <option value="Clases">Clases</option>
              <option value="Vapor">Vapor</option>
              <option value="Consumo Interno">Consumo Interno</option>
              <option value="membresia">Membresia</option>
              
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="col-xs-4 control-label" for="inputNombre">Nombre del Producto</label>
          <div   class="col-xs-8"><input type="email"    class="form-control p-n-nombre" id="inputNombre" placeholder="Nombre del Producto"></div>
        </div>

        <div class="form-group">
          <label class="col-xs-4 control-label" for="inputNombre">Descripcion del Producto</label>
          <div   class="col-xs-8"><input type="email"    class="form-control p-n-descripcion" id="inputDescripcion" placeholder="Descripcion del Producto"></div>
        </div>

        <div class="form-group">
          <label class="col-xs-4 control-label" for="inputNombre">Precio Compra</label>
          <div   class="col-xs-8"><input type="email"    class="form-control p-n-precioc" id="inputPCompra" placeholder="Precio Compra"></div>
        </div>          

        <div class="form-group">
          <label class="col-xs-4 control-label" for="inputNombre">Precio Venta</label>
          <div   class="col-xs-8"><input type="email"    class="form-control p-n-preciov" id="inputPVenta" placeholder="Precio Venta"></div>
        </div>    

        <div class="form-group">
          <label class="col-xs-4 control-label" for="inputNombre">Cantidad</label>
          <div   class="col-xs-8"><input type="email"    class="form-control p-n-cantidad" id="inputCantidad" placeholder="Cantidad"></div>
        </div>  

        <div class="form-group">
          <label class="col-xs-4 control-label" for="inputUnidad">Unidad</label>
          <div   class="col-xs-8"><input type="email"    class="form-control p-n-unidad" id="inputUnidad" placeholder="Unidad"></div>
        </div>  

        <div class="form-group">
          <label class="col-xs-4 control-label" for="inputCodigobarras">Codigo barras</label>
          <div   class="col-xs-8"><input type="email"    class="form-control p-n-codigobarras" id="inputCodigobarras" placeholder="Codigo barras"></div>
        </div>                                           
      
      </form>
  </div>  

  <!-- Socios Alta -->
  <div id="dialog-almacen-actualizar" title="Almacen - Actualizar" >
    
    <h5>Actuaizacion de la informacion del personal , Datos generales.</h5>    
    
    <hr>
      
        <form class="form-horizontal">
          
          <input type="hidden"    class="id_advance" >
          
          <div class="form-group">
            <label class="col-xs-4 control-label" for="inputNombre">Tipo</label>
            <div   class="col-xs-8">
              <select id="actualizar_tipo" size="00" >
                <option value="">-- Tipo --</option>
                <option value="Producto">Producto</option>
                <option value="Servicio">Servicio</option>
                <option value="Spa">Spa</option>
                <option value="Clases">Clases</option>
                <option value="Vapor">Vapor</option>
                <option value="Consumo Interno">Consumo Interno</option>
                <option value="membresia">Membresia</option>                
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="col-xs-4 control-label" for="inputNombre">Nombre del Producto</label>
            <div   class="col-xs-8"><input type="email"    class="form-control p-n-nombre" id="actualizar_inputNombre" placeholder="Nombre del Producto"></div>
          </div>

          <div class="form-group">
            <label class="col-xs-4 control-label" for="inputNombre">Descripcion del Producto</label>
            <div   class="col-xs-8"><input type="email"    class="form-control p-n-descripcion" id="actualizar_inputDescripcion" placeholder="Descripcion del Producto"></div>
          </div>

          <div class="form-group">
            <label class="col-xs-4 control-label" for="inputNombre">Precio Compra</label>
            <div   class="col-xs-8"><input type="email"    class="form-control p-n-precioc" id="actualizar_inputPCompra" placeholder="Precio Compra"></div>
          </div>          

          <div class="form-group">
            <label class="col-xs-4 control-label" for="inputNombre">Precio Venta</label>
            <div   class="col-xs-8"><input type="email"    class="form-control p-n-preciov" id="actualizar_inputPVenta" placeholder="Precio Venta"></div>
          </div>    

          <div>
            <label class="col-xs-4 control-label">Cantidad Actual</label>
            <div   class="col-xs-8"><span class="p-n-cantidad-a" id="actualizar_inputCantidad-a"></span>
              <hr>
          </div>  

          <div class="form-group">
            <label class="col-xs-4 control-label" for="inputNombre">Cantidad a Sumar</label>
            <div   class="col-xs-8"><input type="email"    class="form-control p-n-cantidad" id="actualizar_inputCantidad" placeholder="Cantidad"></div>
          </div>  

          <div class="form-group">
            <label class="col-xs-4 control-label" for="inputUnidad">Unidad</label>
            <div   class="col-xs-8"><input type="email"    class="form-control p-n-unidad" id="actualizar_inputUnidad" placeholder="Unidad"></div>
          </div>  

          <div class="form-group">
            <label class="col-xs-4 control-label" for="inputCodigobarras">Codigo barras</label>
            <div   class="col-xs-8"><input type="email"    class="form-control p-n-codigobarras" id="actualizar_inputCodigobarras" placeholder="Codigo barras"></div>
          </div>                                           
        
        </form>
  </div>

  <!-- Socios Alta -->
  <div id="dialog-almacen-actualizar-ci" title="Almacen - Actualizar Consumo Interno" >
    
    <h5>Actuaizacion Consumo Interno</h5>    
    
    <hr>
        

        

        <form class="form-horizontal">
          <input type="hidden"      class="id_advance_ci">
          <input type="hidden"    class="id_advance" >

          <div class="form-group">
            <div class="copy_html"></div>
            
              <label class="col-xs-4 col-xs-offset-1"><h5>Nombre 1:   <span class="nombre_ci"></span></h5></label>  

              <label class="col-xs-4 col-xs-offset-1"><h5>Cantidad 1: <span class="cantidad_ci"></span></h5></label>

          </div>

          <div class="form-group">
            <label class="col-xs-4 col-xs-offset-1 control-label" for="inputNombre">Cantidad</label>
            <div   class="col-xs-7"><input type="text" class="cantidad_menos_ci"></div>
          </div>
                                      

          <div class="form-group">
            <label class="col-xs-4 col-xs-offset-1 control-label" for="inputNombre">Nombre Trabajador</label>
            <div   class="col-xs-7"><input type="text" class="nombre_trabajador_ci"><input type="text" class="id_advance_trabajador_ci hidden"></div>
          </div>

        </form>
  </div>  
