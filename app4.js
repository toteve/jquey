// Encapsular lógica cuando el DOM esté listo
$(function () {
  const $caja = $("#caja");

  // show(): muestra inmediatamente (sin animación) si está oculto
  $("#btn-show").on("click", function () {
    $caja.show(); // puedes usar $caja.show("fast") para una animación breve
  });

  // hide(): oculta inmediatamente (sin animación)
  $("#btn-hide").on("click", function () {
    $caja.hide(); // puedes usar $caja.hide("fast") para una animación breve
  });

  // fadeIn(): aparición gradual (con opacidad), acepta duración en ms o "fast"/"slow"
  $("#btn-fadein").on("click", function () {
    // Si ya está visible, no hace nada; si está oculto (display:none), aparece con fade
    $caja.fadeIn(600); // 600 ms
  });

  // fadeOut(): desaparición gradual (con opacidad)
  $("#btn-fadeout").on("click", function () {
    $caja.fadeOut(600); // 600 ms
  });
});