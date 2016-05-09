<div class="container">
  <div class="row">
      
    
    <div class="col-xs-12 text-right">
      <hr class="space">
      <ol class="breadcrumb text-left">
        <li>
          <?php  echo $_SESSION['data'][0]->nombre;?>
          <input type="hidden" name="" value="<?php  echo $_SESSION['data'][0]->id_advance;?>" id="id_advance_trabajdor">  
        </li>
      </ol>

      <h1 class="text-left text-uppercase text-primary">informacion <strong>Ventas</strong></h1>
      <hr>
        <p class="text-left"> Fecha: <input type="text" id="datepicker" ></p>
    </div>

    <hr>

    <!-- Corte -->
    <div class="col-md-12">
      <div class="bs-example" data-example-id="contextual-table">
        <h2 id="tables-contextual-classes">Corte: $<span class="total-hoy">total</span></h2>
        <!-- Indicates a successful or positive action -->
        <button type="button" class="btn btn-success print-corte">Imprimir</button>
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Precio Final</th>
            </tr>
          </thead>

          <tbody id="todo_count_viwer"></tbody>
        </table>

      </div>    


      <br>
    </div>

    <hr>

    <!-- Membresias -->
    <div class="col-md-6">
      <div class="bs-example" data-example-id="contextual-table">
        <h2 id="tables-contextual-classes">Membresias</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Precio</th>
              <th>Descuento</th>
              <th>Precio Final</th>
            </tr>
          </thead>

          <tbody id="membresia_viwer"></tbody>
        </table>
      </div>    
    </div>

    <!-- Vapor -->
    <div class="col-md-6">
      <div class="bs-example" data-example-id="contextual-table">
        <h2 id="tables-contextual-classes">Vapor</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Precio</th>
              <th>Descuento</th>
              <th>Precio Final</th>
            </tr>
          </thead>

          <tbody id="vapor_viwer"></tbody>
        </table>
      </div>    
    </div>

    <hr>
    
    <!-- Productos -->
    <div class="col-md-6">
      <div class="bs-example" data-example-id="contextual-table">
        <h2 id="tables-contextual-classes">Productos</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Precio</th>
              <th>Descuento</th>
              <th>Precio Final</th>
            </tr>
          </thead>

          <tbody id="productos_viwer"></tbody>
        </table>
      </div>    
    </div>
    
    <!-- Servicios -->
    <div class="col-md-6">
      <div class="bs-example" data-example-id="contextual-table">
        <h2 id="tables-contextual-classes">Servicios</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Precio</th>
              <th>Descuento</th>
              <th>Precio Final</th>
            </tr>
          </thead>

          <tbody id="servicios_viwer"></tbody>
        </table>
      </div>    
    </div>

    <hr>
    
    <!-- Todo -->
    <div class="col-md-12">
      <div class="bs-example" data-example-id="contextual-table">
        <h2 id="tables-contextual-classes">Todo</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descuento</th>
              <th>Precio Final</th>
            </tr>
          </thead>

          <tbody id="todo_viwer"></tbody>
        </table>

        <h2 class="hide">Sub-total: $<span id="subtotal"></span> m.n.</h2>

        <h2 class="hide">Total:     $<span id="total">   </span> m.n.</h2>

      </div>    
    </div>

    <!-- Ticket Cliente Nuevo -->
    <div id="dialog-ticket-corte" title="Ticket Cliente Nuevo" class="hidden">
        <div id="ticket-print" class="col-xs-12">

        <?php echo ticket_header();?>
          <table class="table">
              <thead>
                <tr>
                  <th>Concepto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Precio Final</th>
                </tr>
              </thead>

              <tbody id="ticket-concepto-corte"></tbody>
            </table>

          TOTAL: $<span class="item-tiket-total-corte"></span> M.N<br>

        </div>  
    </div>

    <style>
      #dialog-ticket-corte{
        max-width: 8cm;
        font-size: 60%;
      }
      #item-tiket-total-corte{
        max-width: 8cm;
        font-size: 30%;
      }
        #ui-id-1,.ui-id-3{
          z-index: 9990;
          position: relative;
          width: 400px;
        }  
    </style>


  </div>
</div>    
