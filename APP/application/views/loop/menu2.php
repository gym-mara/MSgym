    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="<?php echo site_url("inicio/"); ?>">
            <img src="<?php echo cdn(); ?>/img/logo.png" alt="" height="60" width="90">
          </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            
            
            <li><a href="<?php echo site_url('usuarios/salir') ?>">salir</a></li>
          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" id="buscar" class="form-control text-capitalize" placeholder="Buscar...">
          </form>
        </div>
      </div>
    </nav>