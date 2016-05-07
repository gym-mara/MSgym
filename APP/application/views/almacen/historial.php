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
      
      <div class="col-xs-6">
        <span>Buscar por fecha:</span>
        <input type="text" class="almacen-datepicker">
      </div>
      <div class="col-xs-6">
      
        <span>Buscar por mes:</span>
        <select id="fecha_mes">
          <option value="null"> --- Mes---     </option>

          <option value="01"> --- Enero ---     </option>
          <option value="02"> --- Febrero ---   </option>
          <option value="03"> --- Marzo ---     </option>
          <option value="04"> --- Abril---      </option>
          <option value="05"> --- Mayo ---      </option>
          <option value="06"> --- Junio---      </option>

          <option value="07"> --- Julio ---      </option>
          <option value="08"> --- Agosto ---     </option>
          <option value="09"> --- Septiembre --- </option>
          <option value="10"> --- Octubre ---   </option>
          <option value="11"> --- Noviembre --- </option>
          <option value="12"> --- Diciembre --- </option>

        </select>
        
      </div>


      <hr class="space">

        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
        <button type="button" class="btn btn-primary btn-almacen">Almacen</button>

        <!-- Indicates a successful or positive action -->
        <button type="button" class="btn btn-success btn-ci">Consumo Interno</button>

      <div class="col-xs-12">
        
        <div class="xxx-h">
          <h4>Lista de Dias Almacen:</h4>
            <ul style="list-style-type:circle" id="lista-dias"></ul> 
        </div>
        
        <div class="xxx-ci">
          <h4>Lista de Dias Consumo Interno:</h4>         
            <ul style="list-style-type:circle" id="lista-ci-dias"></ul>  
        </div>
          
        </div>
      </div>  
      
    </div>
  </div>

  <hr>

  <div class="xxx-h" id="lista-ci-table-h">
    <h2>Historial Almacen</h2>
    <div class="bs-example" data-example-id="simple-responsive-table" id="h-almacen">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>fecha</th>
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


  <div class="xxx-ci" id="lista-dias-table-ci">
    <h2>Historial Consumo Interno</h2>
    <div class="bs-example" data-example-id="simple-responsive-table" id="h-ci">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>fecha</th>
              <th>Tipo</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Precio Compra</th>
              <th>Precio Venta</th>
              <th>Cantidad</th>
              <th>nombre trabajador</th>
            </tr>
          </thead>
          <tbody id="ci_historial"></tbody>
        </table>
      </div><!-- /.table-responsive -->
    </div>
  </div>

</div>