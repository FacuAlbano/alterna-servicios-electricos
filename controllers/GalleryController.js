/**
 * Controlador para la galería
 * Maneja el carrusel y la funcionalidad de la galería
 */
class GalleryController {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 0;
        this.autoPlayInterval = null;
        this.init();
    }

    /**
     * Inicializa la galería
     */
    init() {
        this.setupCarousel();
        this.setupAutoPlay();
    }

    /**
     * Configura el carrusel
     */
    setupCarousel() {
        const carouselTrack = document.querySelector('.carousel-track');
        const carouselSlides = document.querySelectorAll('.carousel-slide');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const dots = document.querySelectorAll('.dot');

        if (!carouselTrack || carouselSlides.length === 0) return;

        this.totalSlides = carouselSlides.length;

        // Configurar botones
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevSlide());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // Configurar dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Actualizar carrusel inicial
        this.updateCarousel();
    }

    /**
     * Configura el auto-play
     */
    setupAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Cambiar slide cada 5 segundos

        // Pausar auto-play al hacer hover
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', () => {
                clearInterval(this.autoPlayInterval);
            });

            carouselContainer.addEventListener('mouseleave', () => {
                this.setupAutoPlay();
            });
        }
    }

    /**
     * Actualiza el carrusel
     */
    updateCarousel() {
        const carouselTrack = document.querySelector('.carousel-track');
        const dots = document.querySelectorAll('.dot');

        if (carouselTrack) {
            carouselTrack.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        }

        // Actualizar dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    /**
     * Va al slide anterior
     */
    prevSlide() {
        this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
        this.updateCarousel();
    }

    /**
     * Va al siguiente slide
     */
    nextSlide() {
        this.currentSlide = this.currentSlide === this.totalSlides - 1 ? 0 : this.currentSlide + 1;
        this.updateCarousel();
    }

    /**
     * Va a un slide específico
     */
    goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
    }

    /**
     * Limpia los intervalos al destruir
     */
    destroy() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// Inicializar el controlador de galería cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Solo inicializar si estamos en la página de galería
    if (window.location.pathname.includes('galeria.html')) {
        window.galleryController = new GalleryController();
    }
});
