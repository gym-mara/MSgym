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
        <h2 id="tables-contextual-classes">Folio: <span class="folio-hoy">total</span></h2>
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
    
    <!-- Productos -->
    <div class="col-md-6 hidden">
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
    <div class="col-md-6 hidden">
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
          <caption>
            <h5>
            <p>Fecha Inicio: <span><?php  echo $_SESSION['inicio_session'];?></span></p>
            <p>Usuario: <span class="ticket-user"><?php  echo $_SESSION['data'][0]->nombre;?></span></p>
            <p>Monto de inicio: <span>$1000.00</span></p>
            <p>Folio: <span class="ticket-folio"></span></p>
            </h5>
          </caption>           
              <thead>
                <tr>
                  <th><h5>Cantidad</h5></th>
                  <th><h5>Concepto</h5></th>
                  <th><h5>Total</h5></th>
                </tr>
              </thead>

              <tbody id="ticket-concepto-corte"></tbody>
            </table>

          <h5>
          <p>Fecha Cierre: <span class="ticket-time"></span></p>
          <p>TOTAL: $<span class="total-hoy"></span> M.N</p>
          
          </h5>
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
