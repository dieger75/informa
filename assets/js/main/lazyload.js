document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img.lazy');
    const lazyBackgrounds = document.querySelectorAll('.lazy-background');

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.onload = () => lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });

        let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyBackground = entry.target;
                    lazyBackground.style.backgroundImage = `url('${lazyBackground.dataset.bg}')`;
                    // No eliminamos la clase 'lazy-background'
                    lazyBackgroundObserver.unobserve(lazyBackground);
                }
            });
        });

        lazyBackgrounds.forEach(function(lazyBackground) {
            lazyBackgroundObserver.observe(lazyBackground);
        });
    } else {
        // Fallback for older browsers that don't support IntersectionObserver
        const lazyLoad = function() {
            lazyImages.forEach(function(lazyImage) {
                if (lazyImage.getBoundingClientRect().top < window.innerHeight && lazyImage.getBoundingClientRect().bottom > 0 && getComputedStyle(lazyImage).display !== "none") {
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.onload = () => lazyImage.classList.remove("lazy");
                }
            });

            lazyBackgrounds.forEach(function(lazyBackground) {
                if (lazyBackground.getBoundingClientRect().top < window.innerHeight && lazyBackground.getBoundingClientRect().bottom > 0 && getComputedStyle(lazyBackground).display !== "none") {
                    lazyBackground.style.backgroundImage = `url('${lazyBackground.dataset.bg}')`;
                    // No eliminamos la clase 'lazy-background'
                }
            });

            if (lazyImages.length == 0 && lazyBackgrounds.length == 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
            }
        };

        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);

        // Ejecutar la función de carga inicial para navegadores sin IntersectionObserver
        lazyLoad();
    }
});
