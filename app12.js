$(function () {
    const $log = $("#log");
    // forzar a no usar cache del navegador para cargar imagen y permite se ejecute el evento load
    /* $("#mi-imagen").attr("src", "https://images.pexels.com/photos/35337346/pexels-photo-35337346.jpeg?_gl=1*1ibayg1*_ga*MTU2Nzk3MTkyOS4xNzY0NjkyNTgw*_ga_8JE65Q40S6*czE3NjY3NjMwMzkkbzIkZzAkdDE3NjY3NjMwMzkkajYwJGwwJGgw" + Date.now()); */

    // Evento submit en el formulario
    $("#mi-formulario").on("submit", function (event) {
        event.preventDefault(); // evita que se recargue la página
        const nombre = $("#nombre").val();
        $log.append("<p>Formulario enviado con nombre: " + nombre + "</p>");
    });

    // Evento load en la imagen
    $("#mi-imagen").on("load", function () {
        $log.append("<p>La imagen se cargó correctamente.</p>");
    });

    // evento aplicable a la carga de todo
    $(window).on("load", function () {
        $("#log").append("<p>La página completa se cargó correctamente.</p>");
    });

});