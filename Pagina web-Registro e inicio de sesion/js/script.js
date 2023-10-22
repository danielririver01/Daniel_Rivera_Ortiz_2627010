// Agregar eventos a los botones para escuchar clics y realizar acciones
document.getElementById("btn__registrarse").addEventListener("click", register); // Botón "Registrarse"
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarsesion); // Botón "Iniciar sesión"
window.addEventListener('resize', anchopagina); // Evento de cambio de tamaño de ventana

// Declaración de variables para elementos de la página
var contenedor__login_register = document.querySelector(".contenedor__login-register"); // Contenedor de formularios
var formulario_login = document.querySelector(".formulario__login"); // Formulario de inicio de sesión
var formulario_register = document.querySelector(".formulario__register"); // Formulario de registro
var caja__trasera_login = document.querySelector(".caja__trasera-login"); // Caja trasera de "Iniciar sesión"
var caja__trasera_register = document.querySelector(".caja__trasera-register"); // Caja trasera de "Registrarse"



// Función para manejar la acción de "Iniciar sesión"
function iniciarsesion() {
  // Verificar el ancho de la ventana para decidir cómo presentar los elementos
  if (window.innerWidth > 850) {
    // Si la ventana es lo suficientemente ancha
    formulario_register.style.display = "none"; // Ocultar formulario de registro
    contenedor__login_register.style.left = "10px"; // Mover el contenedor de formularios
    formulario_login.style.display = "block"; // Mostrar formulario de inicio de sesión
    caja__trasera_register.style.opacity = "1"; // Mostrar caja trasera de "Registrarse"
    caja__trasera_login.style.opacity = "0"; // Ocultar caja trasera de "Iniciar sesión"
  } else {
    // Si la ventana no es lo suficientemente ancha
    formulario_register.style.display = "none"; // Ocultar formulario de registro
    contenedor__login_register.style.left = "0"; // Mover el contenedor de formularios
    formulario_login.style.display = "block"; // Mostrar formulario de inicio de sesión
    caja__trasera_register.style.display = "block"; // Mostrar caja trasera de "Registrarse"
    caja__trasera_login.style.opacity = "1"; // Mostrar caja trasera de "Iniciar sesión"
    caja__trasera_login.style.display = "none"; // Ocultar caja trasera de "Iniciar sesión"
  }
}

// Función para ajustar los estilos de acuerdo al ancho de la ventana
function ajustarEstilos() {
  if (window.innerWidth > 850) {
    // Si la ventana es lo suficientemente ancha
    formulario_register.style.display = "block"; // Mostrar formulario de registro
    contenedor__login_register.style.left = "410px"; // Ajustar la posición del contenedor
    formulario_login.style.display = "none"; // Ocultar formulario de inicio de sesión
    caja__trasera_register.style.opacity = "0"; // Ocultar caja trasera de "Registrarse"
    caja__trasera_login.style.opacity = "1"; // Mostrar caja trasera de "Iniciar sesión"
  } else {
    // Si la ventana no es lo suficientemente ancha
    formulario_register.style.display = "block"; // Mostrar formulario de registro
    contenedor__login_register.style.left = "0px"; // Ajustar la posición del contenedor
    formulario_login.style.display = "none"; // Ocultar formulario de inicio de sesión
    caja__trasera_register.style.display = "none"; // Ocultar caja trasera de "Registrarse"
    caja__trasera_login.style.display = "block"; // Mostrar caja trasera de "Iniciar sesión"
    caja__trasera_login.style.opacity = "1"; // Mostrar caja trasera de "Iniciar sesión"
  }
}


// Función para ajustar los estilos al ancho de la ventana
function anchopagina() {
  ajustarEstilos(); // Llama a la función para ajustar los estilos
}

// Función para manejar la acción de "Registrarse"
function register() {
  ajustarEstilos(); // Llama a la función para ajustar los estilos
}

// Agregar evento al botón "Registrarse"
document.getElementById("btn__registrarse").addEventListener("click", () => {
  // Actualizar el modelo para mostrar el formulario de registro
  modelo.formularioRegistroVisible = true;
  modelo.formularioLoginVisible = false;
  actualizarVista(); // Actualiza la vista con los cambios
});

// Agregar evento al botón "Iniciar sesión"
document.getElementById("btn__iniciar-sesion").addEventListener("click", () => {
  // Actualizar el modelo para mostrar el formulario de inicio de sesión
  modelo.formularioRegistroVisible = false;
  modelo.formularioLoginVisible = true;
  actualizarVista(); // Actualiza la vista con los cambios
});

// Agregar evento al cambio de tamaño de la ventana
window.addEventListener('resize', () => {
  ajustarEstilos(); // Ajusta los estilos según el ancho de la ventana
  actualizarVista(); // Actualiza la vista con los cambios
});

anchopagina(); // Llama a la función para ajustar los estilos al inicio

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("registroButton").addEventListener("click", function(event) {
      event.preventDefault(); // Evita el comportamiento de envío predeterminado del formulario
      
      // Obtener los valores del formulario
      var formData = new FormData(document.getElementById("registroForm"));
      
      // Enviar solicitud AJAX
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "php/registro_usuario_be.php", true);
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                  var response = xhr.responseText;
                  alert(response); // Mostrar la respuesta del servidor en una alerta (puedes personalizar esto)
                  if (response === "Registro exitoso") {
                      window.location = "../index.php"; // Redirigir si el registro fue exitoso
                  }
              } else {
                  alert("Error en la solicitud AJAX");
              }
          }
      };
      xhr.send(formData);
  });
});



