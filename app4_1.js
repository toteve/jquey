// Encapsular lógica cuando el DOM esté listo
$(function () {
  const $caja = $("#caja");

  // show(): muestra inmediatamente
  $("#btn-show").click( function () {
    $caja.show();
  });

  // hide(): oculta inmediatamente
  $("#btn-hide").click( function () {
    $caja.hide();
  });
  

  // fadeIn(): aparición gradual con parámetros
  $("#btn-fadein").on("click", function () {
    // Ejemplo con palabra clave
    $caja.fadeIn("slow"); // duración lenta (~600 ms)

    // Ejemplo con número (milisegundos)
    // $caja.fadeIn(2000); // 2000 ms = 2 segundos
  });

  // fadeOut(): desaparición gradual con parámetros
  $("#btn-fadeout").on("click", function () {
    // Ejemplo con palabra clave
    /* $caja.fadeOut("fast"); */ // duración rápida (~200 ms)

    // Ejemplo con número (milisegundos)
    $caja.fadeOut(1500); // 1500 ms = 1.5 segundos
  });
});