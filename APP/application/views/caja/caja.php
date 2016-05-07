<div class="container">
  <div class="row">

  <hr>
         
    <div class="col-xs-12 text-right">
      <ol class="breadcrumb text-left">
        <li>
          <span class="n-trabajador"><?php  echo $_SESSION['data'][0]->nombre;?></span>
          <input type="text" name="" value="<?php  echo $_SESSION['data'][0]->id_advance;?>" id="id_advance_trabajdor" class="j-hidden">  
          <input type="text" name="" value="<?php  echo $_SESSION['data'][0]->tipo;?>"       id="tipo_trabajdor"       class="j-hidden">  
          <input type="text" name="" value=""                                                id="gymh2o_date"          class="j-hidden">  
          <input type="text" name="" value=""                                                id="gymh2o_date_now"      class="j-hidden">  

        </li>
      </ol>
      <h1 class="text-left text-uppercase text-primary"><strong>Ventas</strong></h1>
      <hr>
    </div>

    <!-- Begin: col-xs-12 -->
    <div class="col-xs-12">

      <h4>Fecha: <span class="ticket-time"></span></h4>
      <h4>Folio: <span class="ticket-folio"></span></h4>
      
      <?php 

        if (isset($_GET['btn'])) { 

          if ($_GET['btn'] =="venta_membresias") {
            echo"<button type='button' class='btn btn-info btn-l-mem'>Membresia</button>"; 
            }else{}

          if ($_GET['btn'] =="venta_productos") {
            echo"<button type='button' class='btn btn-info btn-l-pro'>Productos</button>";
            }else{}

          if ($_GET['btn'] =="venta_vapor") {
            echo"<button type='button' class='btn btn-info btn-l-vap'>Vapor</button>  ";
            }else{}

          if ($_GET['btn'] =="venta_clases") {
            echo "<button type='button' class='btn btn-info btn-l-cla'>Clases</button>   ";
            }else{}

          if ($_GET['btn'] =="venta_spa") {
            echo "<button type='button' class='btn btn-info btn-l-spa'>Spa</button>";
            }else{}

          if ($_GET['btn'] =="venta_pago") {
            echo "<button type='button' class='btn btn-info btn-l-pago'>Salida de dinero</button>";
            }else{}

          if ($_GET['btn'] =="venta_salida") {
            echo "<button type='button' class='btn btn-info btn-l-salida'>Entrada de dinero</button>";
            }else{}

          }else{

            echo " 
              <button type='button' class='btn btn-info btn-l-pago'>Salida de dinero</button>
              <button type='button' class='btn btn-info btn-l-salida'>Entrada de dinero</button>
              ";

            }

      ?>
   


    </div>

    <!-- Begin: col-xs-10 -->
    <div class="col-xs-10">
      
    </div>
    
    <!-- Begin: col-xs-2 -->
    <div class="col-xs-2">
      
    </div>

    <div class="col-xs-10 " id="dialog-ticket-caja-all">

      <!--X:Lista de productos -->
      <div class="bs-example" data-example-id="striped-table"> 
              <table class="table table-striped"> 
                <caption></caption> 
                <thead > 
                  <tr>
                    <th>concepto</th> 
                    <th>precio</th> 
                    <th>% descuento</th> 
                    <th>preciofinal</th> 
                  </tr> 
                </thead> 
                <tbody id="list-caja-activa" ></tbody> </table> 
      </div>
      
      Total:<span class="total-total"></span>
    </div>

    <div class="col-xs-10 " id="dialog-ticket-pago-all2">

      <h2>Salida de Efectivo</h2>
      <div class="col-xs-6"><h5>Concepto: </h5> <input type="text" id="txt-pago-concepto"></div>
      <div class="col-xs-6"><h5>Monto: </h5> <input type="text" id="txt-pago-pago"></div>
      
      <div class="col-xs-12">
        <hr class="space">
        <!-- Indicates a successful or positive action -->
        <button type="button" id="ticket-pago" class="btn btn-success">Salida de Efectivo</button>
          <hr class="space"> 
      </div>

    </div>

    <div class="col-xs-10 " id="dialog-ticket-pago-all3">

      <h2>Entrada de Efectivo</h2>
      <div class="col-xs-6"><h5>Concepto: </h5> <input type="text" id="txt-entrada-concepto"></div>
      <div class="col-xs-6"><h5>Monto: </h5> <input type="text" id="txt-entrada-pago"></div>
      
      <div class="col-xs-12">
        <hr class="space">
        <!-- Indicates a successful or positive action -->
        <button type="button" id="ticket-pago2" class="btn btn-success">Entrada de Efectivo</button>
          <hr class="space"> 
      </div>
    </div>

    <div class="col-xs-2  ">

      <!-- Indicates caution should be taken with this action -->
      <button type="button" id="descuento" class="btn btn-warning">Descuento</button>
        <hr class="space">
      <!-- Indicates a dangerous or potentially negative action -->
      <button type="button" id="cancelar" class="btn btn-danger">Cancelar</button>
        <hr class="space">    

        <!-- Indicates a successful or positive action -->
      <button type="button" id="subtotal" class="btn btn-primary">SubTotal</button>
        <hr class="space">
      <!-- Indicates a successful or positive action -->
      <button type="button" id="ticket-print" class="btn btn-success">Total</button>
        <hr class="space">


    </div>

    <!--X:Lista de productos -->
    <div id="lista-productos" class="bs-example" data-example-id="striped-table"> 
            <table class="table table-striped"> 
              <thead> 
                <tr> <th>existencia</th> <th>descripcion</th> <th>precio</th> <th>codigo barras</th> </tr> 
              </thead> 
              <tbody id="list-caja"></tbody> </table> 
    </div>

    </div>
  </div>



    </div>
  </div>

  <!-- Ticket Cliente Nuevo -->
<div id="dialog-ticket-caja" title="Ticket Cliente Nuevo" >
    <div class="col-xs-12 text-uppercase">
        <table class='table'> 
          <caption>
            <h4><b>Fecha: <span class="ticket-time"></span></b></h4>
            <h4><b>Empleado: <span class="ticket-socio"></span></b></h4>
            <h4><b>Folio: <span class="ticket-folio"></span></b></h4>
            <h4><b>Socio: <span class="ticket-txt-socio"></span></b></h4>
          </caption> 
          <thead class="t-all"> 
            <tr>
              <th><h4><b># </b></h4></th>
              <th><h4><b>Concepto </b></h4></th>
              <th><h4><b>Precio   </b></h4></th>
              <th><h4><b>%</b></h4></th>
              <th><h4><b>Total    </b></h4></th>
            </tr> 
          </thead> 

          <tbody id="ticket-concepto" class="t-all"> </tbody> 
        </table>  

        <div class="t-x-socio">
          <h4>Socio: <br><span class="t-txt-snom"></span></h4>
          <h4>Tipo:  <br><span class="t-txt-men"></span></h4>
        </div>

      <h4><b>Total: $</b><span class="item-tiket-total"></span> <b>m.n.</b></h4>
    </div>  
</div>
