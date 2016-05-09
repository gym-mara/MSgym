<div class="container">
    
    <div class="row">
      <div class="col-xs-12 text-right">
        
        <h1 class="text-left text-uppercase text-primary">
          personal <small class="text-capitalize">informes</small>
        </h1>
        
        <h4 class="text-left text-uppercase text-primary">
          <small class="text-capitalize p-inicio">Inicio </small> / 
          <small class="text-capitalize p-nuevo" >Nuevo   </small> / 
          <small class="text-capitalize p-buscar">Buscar </small>
        </h4>   
      </div>
    </div>

    <hr>
    
    <!--- BEGIN: trabajadores info -->    
    <div id="info_trabajadores" class="row">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>nombre</th>
            <th>sexo</th>
            <th>fecha inicio</th>
            <th>contacto</th>
          </tr>
        </thead>
        
        <tbody id="json_info_trabajadores"></tbody>

      </table>
    </div>

    <!--- BEGIN: trabajador info -->    
    <div  id="buscar_trabajador" class="row">
      
      <div class="
                  
                  col-xs-6  col-xs-offset-1
                  col-lg-6  col-lg-offset-1 
                  col-md-10 col-md-offset-1 
                  col-sm-12 
            "
      >

        <input type="text" class="buscador_trabajador  text-left form-control text-capitalize" placeholder="Buscar...">      

      </div>
        
      
      <div class="col-xs-12"><hr class="space"></div>
    </div>
   
    <!--- BEGIN: trabajador buscar -->   
    <div id="info_trabajador" class="row "> 
      <div class="
        col-xs-10 col-xs-offset-1 
        col-lg-10 col-lg-offset-1 
        col-md-12
        col-sm-12
        main" id="socio-info">
      
          <div class="col-md-4 text-center">
            <img class="img-circle t-foto" src="http://placehold.it/200x175/FF3D00/000000" style="width:200px; height:175px;">       
            <input type="text" id="id_advance-info-trabajador">
            <br>
            <span class="t-actualizar">Actualizar</span>
          </div>

          <div class="col-md-4 text-left">

            <br>Nobre:   <span class="t-nombre"></span>
            <br>Edad:    <span class="t-edad"></span> años
            <br>Codebar: <span class="t-codebar-1"></span>

            <br>Fecha de inicio: <span class="t-fecha_inicio"></span>
          </div>

          <div class="col-md-4 text-left">

            <br>Tel:       <span class="t-telefono"></span>
            <br>Cell:      <span class="t-cell"></span> 
            <br>Email:     <span class="t-mail"></span> 
            <br>Direccion: <span class="t-direccion"></span> 
          </div>
        
        <hr class="space">
          
          <!--BEGIN: Asistencia -->
          <div class="col-md-12 text-left"><h2>Asistencia</h2></div>
          <div class="col-md-12 text-center">

            <table class="table table-striped">
                  <thead>
                    <tr>
                      <th class="text-center">#</th>
                      <th class="text-center">codigo de barras</th>
                      <th class="text-center">fecha</th>

                    </tr>
                  </thead>
                  <tbody class='socio_asistencia'><tbody>
            </table>                  
                  
                  
            
          </div>
      </div>
    </div>

</div>

