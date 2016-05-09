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
        <tbody id="almacen_all"></tbody>
      </table>
    </div><!-- /.table-responsive -->
  </div>

  <hr class="space">

  <!--  nuevo producto-->
  <div id="producto-nuevo" title="Producto - Alta" >
    
    <h5>Registro de producto nuevo, Datos generales.</h5>    
    
    <hr>

      <form class="form-horizontal">

        <div class="form-group">
          <label class="col-xs-4 control-label" for="inputNombre">Tipo</label>
          <div   class="col-xs-8"><select id="tipo" size="00" ><option value="">-- Tipo --</option><option value="Producto">Producto</option><option value="Servicio">Servicio</option></select></div>
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

</div>    


<!-- Socios Alta -->
<div id="dialog-almacen-actualizar" title="Almacen - Actualizar" >
  
  <h5>Actuaizacion de la informacion del personal , Datos generales.</h5>    
  
  <hr>
    
      <form class="form-horizontal">
        
        <input type="hidden"    class="id_advance" >
        
        <div class="form-group">
          <label class="col-xs-4 control-label" for="inputNombre">Tipo</label>
          <div   class="col-xs-8"><select id="actualizar_tipo" size="00" ><option value="">-- Tipo --</option><option value="Producto">Producto</option><option value="Servicio">Servicio</option></select></div>
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

        <div class="form-group">
          <label class="col-xs-4 control-label" for="inputNombre">Cantidad</label>
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