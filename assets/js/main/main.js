document.addEventListener("DOMContentLoaded", function () {
    // Verificar si hay un hash en la URL
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1); // Obtener el ID del hash
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Desplazarse suavemente al elemento objetivo
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});