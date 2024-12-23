const details = document.getElementById('details');
const navbar = document.getElementById('navbar');
const detailsContent = document.querySelector('.details-content');
const links = document.querySelectorAll('.li-text');

// Cambia el padding y el borde de la navbar dependiendo de si details está abierto
details.addEventListener('toggle', () => {
    if (details.open) {
        // Abrir el contenido del details con animación
        detailsContent.style.maxHeight = '500px';  // Ajusta el max-height según el contenido
        detailsContent.style.opacity = '1';
        navbar.style.padding = '18% 0'; // Aumenta el padding
    } else {
        // Cerrar el contenido del details con animación
        detailsContent.style.maxHeight = '0';
        detailsContent.style.opacity = '0';
        navbar.style.padding = '10% 0'; // Restaura el padding
        navbar.style.border = 'none'; // Quita el borde
        
        // Forzamos un reflujo para que la transición funcione nuevamente
        setTimeout(() => {
            detailsContent.style.transition = 'none'; // Quitamos la transición
            detailsContent.offsetHeight; // Forzamos el reflujo
            detailsContent.style.transition = 'max-height 0.5s ease, opacity 0.5s ease'; // Reaplicamos la transición
        }, 200); // Esperamos un tiempo antes de resetear la transición
    }
});

// Cerrar el <details> cuando se hace clic en cualquier enlace dentro de <details>
links.forEach(link => {
    link.addEventListener('click', () => {
        details.open = false; // Cierra el <details>
    });
});

