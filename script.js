// Animación activa en la barra de navegación responsiva
function ajustarSelector() {
  var navbar = $("#navbarSupportedContent");
  var itemActivo = navbar.find(".active");
  var posicionItem = itemActivo.position();
  var alturaItem = itemActivo.innerHeight();
  var anchoItem = itemActivo.innerWidth();

  // Ajustar la posición y tamaño del selector
  $(".hori-selector").css({
    top: posicionItem.top + "px",
    left: posicionItem.left + "px",
    height: alturaItem + "px",
    width: anchoItem + "px"
  });
}

// Evento al hacer clic en un ítem del navbar
$("#navbarSupportedContent").on("click", "li", function () {
  $("#navbarSupportedContent ul li").removeClass("active");
  $(this).addClass("active");
  ajustarSelector();
});

// Ajustar el selector cuando el documento está listo y al redimensionar la ventana
$(document).ready(ajustarSelector);
$(window).on("resize", function () {
  setTimeout(ajustarSelector, 500);
});

// Ajustar el selector cuando se hace clic en el botón de navbar en móviles
$(".navbar-toggler").click(function () {
  $(".navbar-collapse").slideToggle(300);
  setTimeout(ajustarSelector, 300);
});
// Activar clase 'active' en el enlace de la página actual
jQuery(document).ready(function ($) {
  var path = window.location.pathname.split("/").pop();
  if (path == "") path = "index.html";

  var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
  target.parent().addClass("active");
});

// Manejar la navegación tipo SPA
document.addEventListener("DOMContentLoaded", function () {
  function mostrarSeccion(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll("section").forEach(function (section) {
      section.style.display = "none";
    });

    // Mostrar la sección seleccionada
    const seccionSeleccionada = document.getElementById(sectionId);
    if (seccionSeleccionada) {
      seccionSeleccionada.style.display = "block";
    }
  }

  // Escuchar clics en la barra de navegación
  document.querySelectorAll(".navbar-nav a").forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute("href").substring(1);
      mostrarSeccion(sectionId);
    });
  });

  // Mostrar "Dashboard" por defecto
  mostrarSeccion("addressBook");
});