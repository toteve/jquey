$(function() {
  // Inicializar tooltip
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Abrir modal con jQuery
  $("#btn-modal").on("click", function() {
    const modal = new bootstrap.Modal(document.getElementById("miModal"));
    modal.show();
  });

  // Ejemplo adicional: mostrar mensaje al abrir collapse
  $("#contenidoCollapse").on("shown.bs.collapse", function() {
    alert("El contenido colapsable está visible.");
  });

  /* The collapse plugin utilizes a few classes to handle:

    .collapse hides the content
    .collapse.show shows the content */

});