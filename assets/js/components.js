/**
 * Sistema de carga de componentes
 * Funciona sin servidor usando fetch o fallback a contenido estático
 */

class ComponentLoader {
    constructor() {
        this.components = {
            header: this.getHeaderHTML(),
            footer: this.getFooterHTML()
        };
        this.init();
    }

    /**
     * Inicializa la carga de componentes
     */
    init() {
        this.loadHeader();
        this.loadFooter();
        this.setupNavigation();
    }

    /**
     * Carga el header
     */
    loadHeader() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = this.components.header;
        }
    }

    /**
     * Carga el footer
     */
    loadFooter() {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = this.components.footer;
        }
    }

    /**
     * Configura la navegación activa
     */
    setupNavigation() {
        const currentPage = this.getCurrentPage();
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            if (href === `${currentPage}.html` || 
                (currentPage === 'home' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Obtiene la página actual
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
     * HTML del header
     */
    getHeaderHTML() {
        return `
            <header class="header">
                <nav class="navbar">
                    <div class="nav-container">
                        <div class="nav-logo">
                            <img src="../../assets/images/LogoAlterna.jpg" alt="Logo Alterna" class="logo-image">
                        </div>
                        
                        <ul class="nav-menu">
                            <li><a href="index.html" class="nav-link">Inicio</a></li>
                            <li><a href="sobre-nosotros.html" class="nav-link">Sobre Nosotros</a></li>
                            <li><a href="servicios.html" class="nav-link">Servicios</a></li>
                            <li><a href="trabajamos-juntos.html" class="nav-link">Trabajamos Juntos</a></li>
                            <li><a href="galeria.html" class="nav-link">Galería</a></li>
                            <li><a href="contacto.html" class="nav-link">Contacto</a></li>
                        </ul>
                        
                        <div class="nav-contact">
                            <a href="https://wa.me/549341856810" target="_blank" class="nav-whatsapp-link">
                                <i class="fab fa-whatsapp"></i>
                                <span>+54 9 341 856810</span>
                            </a>
                        </div>
                        
                        <div class="hamburger">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }

    /**
     * HTML del footer
     */
    getFooterHTML() {
        return `
            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-logo">
                            <img src="../../assets/images/LogoAlterna.jpg" alt="Logo Alterna" class="logo-image">
                        </div>
                        
                        <div class="footer-section">
                            <h4>Servicios</h4>
                            <ul>
                                <li><a href="servicios.html#diseno-proyectos">Diseño de Proyectos Electromecánicos Industriales</a></li>
                                <li><a href="servicios.html#puesta-tierra">Puesta a Tierra y Pararrayos SRT 900/15</a></li>
                                <li><a href="servicios.html#instalaciones-electricas">Instalaciones Eléctricas</a></li>
                                <li><a href="servicios.html#estudios-ingenieria">Estudios de Ingeniería</a></li>
                                <li><a href="servicios.html#energias-renovables">Energías Renovables</a></li>
                                <li><a href="servicios.html#mantenimiento">Mantenimiento Predictivo y Preventivo</a></li>
                                <li><a href="servicios.html#capacitacion">Capacitación Eléctrica</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h4>Contacto</h4>
                            <div class="contact-info">
                                <a href="https://wa.me/549341856810" target="_blank" class="footer-whatsapp-link">
                                    <i class="fab fa-whatsapp"></i>
                                    <span>+54 9 341 856810</span>
                                </a>
                                <a href="mailto:tomasppendino@gmail.com" class="footer-email-link">
                                    <i class="fas fa-envelope"></i>
                                    <span>tomasppendino@gmail.com</span>
                                </a>
                                <a href="https://www.linkedin.com/company/alterna-servicios/" target="_blank" class="footer-linkedin-link">
                                    <i class="fab fa-linkedin"></i>
                                    <span>Alterna Servicios Eléctricos</span>
                                </a>
                                <p><i class="fas fa-map-marker-alt"></i> Rosario, Santa Fe, Argentina</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <p>&copy; 2025 Alterna - Servicios Eléctricos. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.componentLoader = new ComponentLoader();
});
