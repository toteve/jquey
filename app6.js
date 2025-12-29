$(function() {
  // slideDown con parámetro palabra
  $("#btn-down").on("click", function() {
    $("#panel").slideDown("slow"); // palabra clave
    // También podrías usar un número: $("#panel").slideDown(1000);
  });

  // slideUp con parámetro número
  $("#btn-up").on("click", function() {
    $("#panel").slideUp(800); // número en milisegundos
    // También podrías usar una palabra: $("#panel").slideUp("fast");
  });
});