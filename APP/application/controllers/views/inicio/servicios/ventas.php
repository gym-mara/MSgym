<!-- Socios Alta -->
<div id="dialog-caja" title="" >
    <div class="row">
      <div class="col-xs-12 text-right">
        
        <h1 class="text-left text-uppercase text-primary">
          Caja <small class="text-capitalize">ventas</small>
        </h1>
        
        <hr>

        <input type="hidden" id="id_advance_ticket_servicio" value="<?php echo random_string('alnum', 20); ?>">
        <input type="hidden" id="fecha_ticket_servicio"      value="<?php echo date("Y-m-d H:m"); ?>">
        
        <hr>

        <div class="col-xs-8 text-left" > 

        <div class="col-xs-8 text-left" > 
          <input type="text" class="ss-venta             text-left form-control text-capitalize " placeholder="Buscar..." autocomplete="off">
        </div>
        <div class="col-xs-4 text-left" > 
          <button type="button" class=" btn btn-success btn-subtotal">Sub-Total</button>
        </div>
          
          <br>

          <div id="add_items"><br></div>
          
          <br>

          <div id="total_items">

          <br> 

            Total: $ <span id="servicios_total_items"></span>
          </div>
        </div>

         <hr></div>
        <div class="lista_servicios"></div>


      
    </div>
</div>

<style>
  #ui-id-1,.ui-id-3{
    z-index: 9990;
    position: relative;
    width: 400px;
  }  
</style>