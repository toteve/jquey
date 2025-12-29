function cambiarContenido() {
    // Cambiar el contenido del párrafo
    $('#mi-parrafo').text('¡Nuevo contenido!');

    // Cambiar el color de fondo del párrafo
    $('#mi-parrafo').css('background-color', 'yellow');
}

// aplicar un evento sobre el boton que al hacer un clic llame o invoque a la funcion directamente
/* $('button').on('click', function() {
      cambiarContenido();
}); */

// aplicar un evento sobre el boton pasando la referencia a la funcion para que se ejecute
$('button').click(cambiarContenido);


