<div class="container">
    
    <div class="row">
      <div class="col-xs-12 text-right">
        
        <h1 class="text-left text-uppercase text-primary">
          productos <small class="text-capitalize">informes</small>
        </h1>
        
        <h4 class="text-left text-uppercase text-primary">
          <small class="text-capitalize p-inicio">Inicio </small> / 
          <small class="text-capitalize p-nuevo" >Tranferir   </small> / 
        </h4>   
      </div>
    </div>

       <hr>
      <button type="button" class=" btn btn-success btn-actualizar text-left">Tranferir</button>

    <hr>
    <!--- BEGIN: trabajadores info -->    
    <div id="info_productos" class="row">
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
        
        <tbody id="json_info_productos"></tbody>

      </table>
    </div>

<!-- Socios Alta -->
<div id="dialog-productos-actualizar" title="Almacen - Actualizar" >
  
  <h5>Actuaizacion de la informacion del personal , Datos generales.</h5>    
  
  <hr>
    
      <form class="form-horizontal">



        
        <div class="form-group">
          <label class="col-xs-4 control-label" for="inputNombre">nombre</label>
          <div   class="col-xs-8"><span class="almacen_nombre"></span></div>
        </div>                                       
      
        <div class="form-group">
          <label class="col-xs-4 control-label" for="inputNombre">cantidad</label>
          <div   class="col-xs-8"><span class="almacen_cantidad"></span></div>
        </div>       

        <div class="form-group">
          <label class="col-xs-4 control-label" for="inputCodigobarras">Cantidad Tranferir</label>
          <div   class="col-xs-8"><input type="text" class="form-control cantidad-tranferir" ></div>
        </div> 
        <div class="hidden">
          <br>
          id trabajador:   <input type="text" class="id_advance_trabajador" name="" value="<?php  echo $_SESSION['data'][0]->id_advance;?>" id="id_advance_trabajdor">  
          <br>
          id trabajador item:   <input type="text" class="id_advance_x" name="" value="" id="">  
          <br>        
          cantidad almacen:<input type="text" class="cantidad" >
          <br>
          cantidad tranferencia:<input type="text" class="cantidad_transferencia" >        
          <br>
          cantidad total:  <input type="text" class="cantidad_total" >
          <br>
        </div>

      </form>
</div>



</div>

