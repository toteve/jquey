$(function () {
  const $caja = $("#caja");

  // fadeIn con duración numérica y callback
  $("#btn-fadein").on("click", function () {
    $caja.fadeIn(2000, function () {
      // Este código se ejecuta cuando termina el fadeIn
      alert("La caja ya apareció después de 2 segundos.");
    });
  });

  // fadeOut con duración numérica y callback
  $("#btn-fadeout").on("click", function () {
    $caja.fadeOut(1500, function () {
      // Este código se ejecuta cuando termina el fadeOut
      alert("La caja se ocultó después de 1.5 segundos.");
    });
  });
});