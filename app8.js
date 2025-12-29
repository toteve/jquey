$(function() {
  // Scroll hacia un elemento específico
  $("#btn-destino").on("click", function() {
    $("html, body").animate({
      scrollTop: $("#destino").offset().top
    }, 1000); // 1000 ms = 1 segundo
  });

  // Scroll hacia arriba (inicio de la página)
  $("#btn-top").on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, "slow"); // palabra clave
  });

  // Scroll horizontal
  $("#btn-horizontal").on("click", function() {
    $("html, body").animate({ scrollLeft: 800 }, 1200); // 1200 ms = 1.2 segundos
  });


  // Scroll horizontal de regreso al inicio
  $("#btn-horizontal-inicio").on("click", function() {
    $("html, body").animate({ scrollLeft: 0 }, 1000);
  });


});