<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Define la codificación de caracteres para el documento -->
    <meta charset="UTF-8">
    <!-- Ajusta la escala inicial para dispositivos móviles -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Título de la página que aparecerá en la pestaña del navegador -->
    <title>Login y registro JHOJHO</title>
    <!-- Conecta con la fuente de Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- Enlace a la fuente Roboto desde Google Fonts -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,700;1,6..12,400&family=Roboto:wght@700&display=swap');
      </style>
    <!-- Enlaza la hoja de estilos CSS -->
    <link rel="stylesheet" href="CSS/estilos.CSS">
</head>
<body>
    <!-- Encabezado de la página -->
    <header>
        <!-- Aquí podrías agregar contenido al encabezado si es necesario -->
    </header>
    <!-- Cuerpo principal de la página -->
    <main>
        <!-- Aquí comenzaría el contenido principal de tu página -->
    </main>
</body>
</html>

<section class="contenedor__todo">
    <!-- Caja trasera con opción de iniciar sesión -->
    <div class="caja__trasera">
        <div class="caja__trasera-login">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>Inicia sesión para entrar a la página</p>
            <button id="btn__iniciar-sesion">Iniciar sesión</button>
        </div>
        <!-- Caja trasera con opción de registrarse -->
        <div class="caja__trasera-register">
            <h3>¿Aún no tienes cuenta?</h3>
            <p>Regístrate para que puedas iniciar sesión</p>
            <button id="btn__registrarse">Registrarse</button>
        </div>
    </div>
    <!-- Contenedor principal para el formulario de inicio de sesión y registro -->
    <div class="contenedor__login-register">
        <!-- Formulario de inicio de sesión -->
        <form action="php/login_usuario_be.php" method="POST" class="formulario__login">
    <h2>Iniciar sesión</h2>
    <input type="text" placeholder="Correo Electrónico" name="correo"> <!-- Agrega el atributo name -->
    <input type="password" placeholder="Contraseña" name="contrasena"> <!-- Agrega el atributo name -->
    <button>Entrar</button>
</form>

        <!-- Formulario de registro -->
        <form action="php/registro_usuario_be.php" method = "post" class="formulario__register">
            <h2>Registrarse</h2>
            <input type="text" placeholder="Nombre Completo" name="nombre_completo">
            <input type="text" placeholder="Correo Electrónico"name="correo">
            <input type="text" placeholder="Usuarios"name="usuario">
            <input type="password" placeholder="Contraseña"name="contrasena">
            <button>Registrarse</button>
        </form>
    </div>
</section>
</main>

    <script src="js/script.js"></script>
    <footer>
    </footer>
</body>
</html>
