$(function() {
  const $campo = $("#campo-texto");
  const $log = $("#log");

  // keydown: se dispara al presionar una tecla (antes de soltarla)
  $campo.on("keydown", function(event) {
    $log.append("<p>keydown: Tecla presionada → " + event.key + "</p>");
  });

  // keyup: se dispara al soltar la tecla
  $campo.on("keyup", function(event) {
    $log.append("<p>keyup: Tecla liberada → " + event.key + "</p>");
  });

  // keypress: se dispara al presionar una tecla que produce un carácter
  $campo.on("keypress", function(event) {
    $log.append("<p>keypress: Carácter ingresado → " + event.key + "</p>");
  });
});