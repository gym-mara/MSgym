<link rel="stylesheet" href="http://getbootstrap.com/examples/signin/signin.css">
<div class="container">

      <form class="form-signin text-center" action="<?php echo site_url('usuarios/entrar/'); ?>" method="POST">
        <img    src="<?php echo cdn(); ?>/img/logo.png" alt="" height="60" width="90">
        <label  for="inputUser" class="sr-only">Usuario</label>
        
        <input  name="user" type="text"     id="inputUser"     class="form-control" placeholder="User" required autofocus>
        
        <label  for="inputPassword" class="sr-only">Password</label>
        
        <input  name="pass" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        
        <div    class="checkbox text-left"><label><input type="checkbox" value="remember-me"> Recordarme.</label></div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Iniciar</button>
      </form>

</div> <!-- /container -->

