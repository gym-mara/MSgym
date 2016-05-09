<!-- Socios Alta -->
<div id="dialog-caja" title="" >
    <div class="row">
      <div class="col-xs-12 text-right">
        
        <h1 class="text-left text-uppercase text-primary">
          CAJA <small class="text-capitalize">venta</small>
        </h1>

        <input type="text" value="<?php echo random_string('alnum', 20); ?>" id="id_advance_ticket_servicio" class="j-hidden hidden">
        <input type="text" value="<?php echo date("Y-m-d H:m"); ?>"          id="fecha_ticket_servicio"      class="j-hidden hidden">
        

        <div class="col-xs-12 text-left" > 

          <div class="col-xs-8 text-left" > 
            <input type="text" class="ss-venta text-left form-control text-capitalize " placeholder="Buscar..." autocomplete="off">
          </div>

          <div class="col-xs-4 text-left" > 
            <button type="button" class="btn btn-warning btn-descuentos">Descuento</button>
          </div>
            
            <br>

            <table class="table">
              <thead>
                <tr>
                  <th>concepto</th>
                  <th>precio</th>
                  <th>% descuento</th>
                  <th>precio final</th>
                </tr>
              </thead>
              <tbody id="add_items"></tbody>
            </table>
            


            <div class="col-xs-12 text-left" id="venta-socio"><button type="button" class="btn btn-primary btn-subtotal">Sub-Total</button></div>
            
            <br>
            
            <div class="col-xs-12 text-left" id="total_items">Total: $ <span id="servicios_total_items"></span></div>
            
            <br>
            
            <div class="col-xs-12 text-left"><button type="button" class="btn btn-success btn-total">Total</button></div>

            <hr>

          </div>

        <div class="lista_servicios"></div>

    </div>
</div>


<!-- Ticket Cliente Nuevo -->
<div id="dialog-ticket-caja" title="Ticket Cliente Nuevo" >
    <div class="col-xs-12">
    
      
        <table class='table'> 
          <caption>
            <h4>Fecha: <span class="ticket-time"></span></h4>
            <h4>Folio: <span class="ticket-folio"></span></h4>
          </caption> 
          <thead> 
            <tr>
              <th><h4>Concepto </h4></th>
              <th><h4>Precio   </h4></th>
              <th><h4>Descuento</h4></th>
              <th><h4>Total    </h4></th>
            </tr> 
          </thead> 

          <tbody id="ticket-concepto"> </tbody> 
        </table>       
      <h4>Total: $<span class="item-tiket-total"></span> m.n.</h4>
    </div>  
</div>
