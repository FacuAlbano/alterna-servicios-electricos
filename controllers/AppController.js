/**
 * Controlador principal de la aplicación
 * Maneja la lógica general y la inicialización
 */
class AppController {
    constructor() {
        this.currentPage = this.getCurrentPage();
        this.init();
    }

    /**
     * Obtiene la página actual basada en la URL
     */
    getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        
        if (filename === '' || filename === 'index.html') {
            return 'home';
        }
        
        return filename.replace('.html', '');
    }

    /**
     * Inicializa la aplicación
     */
    init() {
        this.loadComponents();
        this.setupEventListeners();
        this.updateActiveNavigation();
    }

    /**
     * Carga los componentes dinámicamente
     */
    async loadComponents() {
        try {
            // Cargar header
            const headerResponse = await fetch('views/components/header.html');
            const headerHtml = await headerResponse.text();
            document.getElementById('header-placeholder').innerHTML = headerHtml;

            // Cargar footer
            const footerResponse = await fetch('views/components/footer.html');
            const footerHtml = await footerResponse.text();
            document.getElementById('footer-placeholder').innerHTML = footerHtml;

        } catch (error) {
            console.error('Error cargando componentes:', error);
        }
    }

    /**
     * Configura los event listeners
     */
    setupEventListeners() {
        // Navegación móvil
        document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');

            if (hamburger && navMenu) {
                hamburger.addEventListener('click', () => {
                    hamburger.classList.toggle('active');
                    navMenu.classList.toggle('active');
                });

                // Cerrar menú al hacer click en un enlace
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.addEventListener('click', () => {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                    });
                });
            }
        });

        // Scroll suave para indicadores de scroll
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('scroll-indicator')) {
                e.preventDefault();
                const nextSection = document.querySelector('.featured-services');
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    /**
     * Actualiza la navegación activa
     */
    updateActiveNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            const href = link.getAttribute('href');
            if (href === `${this.currentPage}.html` || 
                (this.currentPage === 'home' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Muestra un mensaje de éxito
     */
    showSuccess(message) {
        // Implementar notificación de éxito
        console.log('Éxito:', message);
    }

    /**
     * Muestra un mensaje de error
     */
    showError(message) {
        // Implementar notificación de error
        console.error('Error:', message);
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.appController = new AppController();
});
