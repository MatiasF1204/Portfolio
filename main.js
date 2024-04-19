const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');
const enlacesMenu = document.querySelectorAll('.nav__list--item a');

abrir.addEventListener("click", () => {
    setTimeout(() => {
        nav.classList.add("visible");
    }, 100); // Retraso de 100 milisegundos para permitir la transición
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

// Evento de clic para cada enlace del menú que apunta a una sección interna
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', (event) => {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();

        // Cerrar el menú hamburguesa
        nav.classList.remove("visible");
        
        // Obtener el destino del enlace
        const destino = enlace.getAttribute('href');

        // Desplazarse suavemente hasta la sección correspondiente
        document.querySelector(destino).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
