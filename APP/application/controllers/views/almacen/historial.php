<div class="container">
    
  <div class="row">
    <div class="col-xs-12 text-left">
      
      <h1 class="text-left text-uppercase text-primary">
        almacen <small class="text-capitalize">informes</small>
      </h1>

      <h4 class="text-left text-uppercase text-primary">
        <small class="text-capitalize pro-inicio"><a href="<?php echo site_url('almacen'); ?>">Inicio </a></small> / 
        <small class="text-capitalize pro-historial" ><a href="<?php echo site_url('almacen/historial'); ?>">Historial</a></small>
      </h4>  
      
      <input type="text" class="almacen-datepicker">

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
        <tbody id="almacen_historial"></tbody>
      </table>
    </div><!-- /.table-responsive -->
  </div>

</div>