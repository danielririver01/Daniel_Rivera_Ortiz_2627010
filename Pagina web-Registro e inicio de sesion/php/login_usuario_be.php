<?php
session_start();
// Incluye el archivo de conexión a la base de datos
include 'conexion_be.php';

$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];

// Realiza la consulta para validar el inicio de sesión
$validar_login = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo' AND contrasena='$contrasena'");

// Verifica si se encontró un usuario que coincide con el correo y la contraseña
if (mysqli_num_rows($validar_login) > 0) {
    // Inicio de sesión exitoso, redirige a la página principal (ajusta el nombre del archivo si es diferente)
   if(mysqli_num_rows($validar_login)>0){
    $_SESSION['usuario'] = $correo;

    header("Location: /Proyecto-Web/JHOJHO/JHOJHO.php");
   }
    
    exit;
     // No se encontró usuario, redirige de nuevo a la página de inicio de sesión con un mensaje de error
} else {
    echo '<script>
    alert ("Usuario no existe por favor verifique los datos ingresados")
    window.location = "../index.php";
    </script>';
   exit;
  
}

// No olvides cerrar la conexión a la base de datos al final
mysqli_close($conexion);
?>
