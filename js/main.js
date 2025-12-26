// Mensaje al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada correctamente");
});

// Ejemplo de interacción
function mostrarMensaje() {
  alert("¡Hola! Gracias por visitar mi proyecto 😊");
}


function cerrarMenu() {
  document.getElementById("menuLinks").style.display = "none";
}

function abrirMenu() {
  document.getElementById("menuLinks").style.display = "flex";
}
