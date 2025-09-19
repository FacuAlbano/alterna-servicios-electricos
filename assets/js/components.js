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
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        
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
            <header>
                <nav>
                    <a href="index.html" class="logo">
                        <img src="../../assets/images/LogoAlterna-removebg-preview.png" alt="Logo Alterna">
                        <span>ALTERNA</span>
                    </a>
                    
                    <!-- Menú Desktop -->
                    <ul class="nav-menu">
                        <li><a href="index.html" class="nav-link">Inicio</a></li>
                        <li><a href="sobre-nosotros.html" class="nav-link">Sobre Nosotros</a></li>
                        <li><a href="servicios.html" class="nav-link">Servicios</a></li>
                        <li><a href="trabajamos-juntos.html" class="nav-link">Trabajamos Juntos</a></li>
                        <li><a href="galeria.html" class="nav-link">Galería</a></li>
                        <li><a href="contacto.html" class="nav-link">Contacto</a></li>
                    </ul>
                    
                    <!-- Contacto y Traductor Desktop -->
                    <div class="nav-contact">
                        <a href="https://wa.me/5493413856810" target="_blank" class="contact-info">
                            <i class="fab fa-whatsapp"></i>
                            <span>+54 9 341 3856810</span>
                        </a>
                        
                        <div class="translate-dropdown">
                            <button class="language-toggle">
                                <span>🌐</span>
                                <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="translate-options">
                                <button class="translate-option" data-lang="es">Español</button>
                                <button class="translate-option" data-lang="en">English</button>
                                <button class="translate-option" data-lang="pt">Português</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Botón Hamburguesa Móvil -->
                    <button class="mobile-menu-toggle" aria-label="Abrir menú">
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>
                </nav>
                
                <!-- Menú Móvil -->
                <div class="mobile-menu">
                    <div class="mobile-menu-content">
                        <!-- Enlaces de navegación -->
                        <div class="mobile-nav-links">
                            <a href="index.html" class="mobile-nav-link">
                                <i class="fas fa-home"></i>
                                <span>Inicio</span>
                            </a>
                            <a href="sobre-nosotros.html" class="mobile-nav-link">
                                <i class="fas fa-users"></i>
                                <span>Sobre Nosotros</span>
                            </a>
                            <a href="servicios.html" class="mobile-nav-link">
                                <i class="fas fa-cogs"></i>
                                <span>Servicios</span>
                            </a>
                            <a href="trabajamos-juntos.html" class="mobile-nav-link">
                                <i class="fas fa-handshake"></i>
                                <span>Trabajamos Juntos</span>
                            </a>
                            <a href="galeria.html" class="mobile-nav-link">
                                <i class="fas fa-images"></i>
                                <span>Galería</span>
                            </a>
                            <a href="contacto.html" class="mobile-nav-link">
                                <i class="fas fa-envelope"></i>
                                <span>Contacto</span>
                            </a>
                        </div>
                        
                        <!-- Sección de contacto -->
                        <div class="mobile-contact-section">
                            <h4 class="mobile-contact-title">Contacto</h4>
                            <a href="https://wa.me/5493413856810" target="_blank" class="mobile-contact-item">
                                <i class="fab fa-whatsapp"></i>
                                <span>+54 9 341 3856810</span>
                            </a>
                            <a href="mailto:tomasppendino@gmail.com" class="mobile-contact-item">
                                <i class="fas fa-envelope"></i>
                                <span>tomasppendino@gmail.com</span>
                            </a>
                            <a href="https://www.linkedin.com/company/alterna-servicios/" target="_blank" class="mobile-contact-item">
                                <i class="fab fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                        
                        <!-- Sección de idiomas -->
                        <div class="mobile-translate-section">
                            <h4 class="mobile-translate-title">Idioma</h4>
                            <div class="mobile-translate-options">
                                <button class="mobile-translate-option" data-lang="es">Español</button>
                                <button class="mobile-translate-option" data-lang="en">English</button>
                                <button class="mobile-translate-option" data-lang="pt">Português</button>
                            </div>
                        </div>
                    </div>
                </div>
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
    
    // Ejecutar la configuración de navegación móvil después de cargar los componentes
    setTimeout(() => {
        if (typeof setupMobileNavigation === 'function') {
            setupMobileNavigation();
        }
        if (typeof setActiveNavigation === 'function') {
            setActiveNavigation();
        }
    }, 100); // Pequeño delay para asegurar que el DOM esté completamente cargado
});
