$(function() {
  const $log = $("#log");

  // Evento change en input
  $("#nombre").on("change", function() {
    const valor = $(this).val();
    $log.append("<p>Input cambiado: " + valor + "</p>");
  });

  // Evento change en select
  $("#color").on("change", function() {
    const valor = $(this).val();
    console.log("VALOR: ", valor)
    if (valor) {
      $log.append("<p>Seleccionaste el color: " + valor + "</p>");
      /* $("p").css("background-color", "yellow"); */
      $log.css("background-color", valor);
    } else {
      $log.append("<p>No seleccionaste ningún color.</p>");
    }
  });
});