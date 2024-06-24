document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.animate__animated.line-brand');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInLeft'); // Añade la clase de animación
                observer.unobserve(entry.target); // Deja de observar una vez que se activa la animación
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element); // Observa cada elemento con la clase animate__animated
    });
});
