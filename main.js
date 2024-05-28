// Inicialización del menú haburguesa
var options = {};

document.addEventListener('DOMContentLoaded', function () {
    // Inicialización del menú hamburguesa
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    // Función para manejar el desplazamiento suave y cerrar el menú
    function smoothScrollAndClose(event) {
        event.preventDefault();
        var target = $(this).attr('href');

        // Asegurarse de que el target sea un selector válido
        if (target && target.startsWith('#') && $(target).length) {
            // Cerrar el menú hamburguesa
            var sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
            sidenavInstance.close();

            // Desplazarse a la sección objetivo con margen superior
            $('html, body').animate({
                scrollTop: $(target).offset().top - 40 // Ajustar el margen aquí
            }, 500);
        }
    }

    // Adjuntar el manejador de clics a los elementos del menú
    $('.sidenav a, .nav-wrapper a').on('click', smoothScrollAndClose);
});

// Activación de wow.js
new WOW().init();