<div class="container">
  <div class="row">
      
    <!-- Informacion semanal + Icons -->
    <div class="col-xs-12 text-right">
      <hr class="space">
      <ol class="breadcrumb text-left">
        <li>
          <span class="n-trabajador"><?php  echo $_SESSION['data'][0]->nombre;?></span>
          <input type="text" name="" value="<?php  echo $_SESSION['data'][0]->id_advance;?>" id="id_advance_trabajdor" class="j-hidden">  
          <input type="text" name="" value="<?php  echo $_SESSION['data'][0]->tipo;?>"       id="tipo_trabajdor"       class="j-hidden">  
          <input type="text" name="" value=""                                                id="gymh2o_date"                 class="j-hidden">  
          <input type="text" name="" value=""                                                id="gymh2o_date_now"             class="j-hidden">  

        </li>
      </ol>

      <h1 class="text-left text-uppercase text-primary">informacion <strong>semanal</strong></h1>

    </div>
    
      <!--Icon 1 -->
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 tipo-almacen">
          <!--  -->
          <div class="col-xs-4 text-center">
            <img src="<?php echo cdn(); ?>img/icon2.png" alt="" class="b-icons1 img-responsive">
            
          </div>

          <div class="col-xs-8">
            <h3 class="text-left text-uppercase text-info">personal</h3>
          </div>
        
          <div class="col-xs-12">
            <p class="text-center text-primary p1">
              <span class="p-informes   tipo-cajera"><a href="<?php echo site_url("personal/"); ?>">/Informes</a></span>
              <span class="p-asistencia            ">Asistencia/</span>
            </p>
          </div>  
          <!--  -->
      </div>
        
        <hr class="space">

      <!--Icon 2 -->
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 tipo-almacen">
          <!--  -->
          <div class="col-xs-4">
            <img src="<?php echo cdn(); ?>img/icon.png" alt="" class="b-icons4 img-responsive">
            
            </div>
          <div class="col-xs-8">
            <h3 class="text-left text-uppercase text-info">clientes</h3>
          </div>
          <hr>
          <div class="col-xs-12">
            <p class="text-center text-primary p4"> 
            <ul>
              <li><span class="c-alta">/Alta/</span> </li>
              <li><a href="<?php echo site_url("caja/?btn=venta_membresias"); ?>">Venta de Membresias/</a></li>
              <li><span class="c-asistencia">Asistencia/</span></li>
            </ul>
            </p>
          </div>              
          <!--  -->
      </div> 
        
        <hr class="space">

      <!--Icon 3 -->
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 ">
          
          <!--  -->
          <div class="col-xs-4">
            <img src="<?php echo cdn(); ?>img/icon3.png" alt="" class="b-icons3 img-responsive">
          </div>
          <div class="col-xs-8">
            <h3 class="text-left text-uppercase text-info">productos</h3>
          </div>
          <hr>
          <div class="col-xs-12">
            <p class="text-center text-primary p3">
            <ul>
              <li><a href="<?php echo site_url("almacen"); ?>"                   class="tipo-cajera" >almacen/</a></li>
              <li><a href="<?php echo site_url("caja/?btn=venta_productos"); ?>" class="tipo-almacen">Venta de Productos/</a></li>
            </ul>
            </p>
          </div>              
          <!--  -->
      </div>


  </div>
</div>


<!-- Indicates a dangerous or potentially negative action -->


<hr>

<div class="tipo-almacen">
  <h1 class="text-left text-uppercase text-primary">SOCIOS <strong>pagos pendientes</strong></h1>
  <table class="table">
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody class="clientes_info"></tbody>
  </table>
</div>