$(function () {
    // slideToggle con parámetro simple
    $("#btn-slidetoggle").on("click", function () {
        // Alterna entre slideDown y slideUp automáticamente
        $("#panel").slideToggle("slow"); // palabra clave
        // También podrías usar un número: $("#panel").slideToggle(1000);
    });


    $("#btn-toggle").on("click", function () {
        $("#panel").toggle(); // aparece y desaparece sin animación
    });
});