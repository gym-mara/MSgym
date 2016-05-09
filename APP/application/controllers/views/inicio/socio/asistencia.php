<!--  -->
<div id="dialog-asistencia" title="Clientes - Asistencia" >

  <div class="row">
    <div class="col-xs-7"><h5>Registro de asistencia del dia. <?php 
    echo date('Y-m-d H:m:s'); 

    ?></h5></div>
    <div class="col-xs-5">
      <input type="text" class="text-capitalize a-i-codebar">
      <input type="hidden" class="s-id_advance">
      <input type="hidden" class="s-codebar">
    </div>
  </div>
  
  <hr class="">

  <div class="row asistencia-info">
    <div class="col-xs-4">
      <img id="s-socio-asistencia" class="img-circle" src='http://placehold.it/200x150' style="width: 175px;height: 150px;.saturate {-webkit-filter: saturate(250%);}">
    </div>
    <div class="col-xs-8">
      <p >Nombre del cliente:  <span class="a-nombre_pago">info json</span></p>
      <p >Tipo de suscripción: <span class="a-tipo_pago">info json</span></p>
      <p >Precio:              <span class="a-precio_pago">info json</span></p>
      <p >Fecha de Renovación  <span class="a-fecha_renovacion_pago">info json</span></p>
      <p >Comentario           </p>
      <textarea name="" id="" cols="30" rows="10" class="a-comentario"></textarea>
    </div>
  </div>
</div>
