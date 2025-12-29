$(function() {
  // Evento click
  $("#btn-click").on("click", function() {
    alert("¡Hiciste un click en el botón!");
  });

  // Evento doble click
  $("#btn-dblclick").on("dblclick", function() {
    alert("¡Hiciste doble click en el botón!");
  });

  // Evento mouseenter
  $("#caja-hover").on("mouseenter", function() {
    $("#caja-hover").css("background-color", "lightgreen")
           .text("¡Entraste con el mouse!");
  });

  // Evento mouseleave, para no repetir el mismo selecto dentro de funcion se usa this
  $("#caja-hover").on("mouseleave", function() {
    $(this).css("background-color", "#f0f0f0")
           .text("Pasa el mouse");
  });
});