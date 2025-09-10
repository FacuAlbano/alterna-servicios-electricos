// ===== LAZY LOADING SYSTEM =====

class LazyLoader {
    constructor() {
        this.observer = null;
        this.sections = [];
        this.init();
    }

    init() {
        // Configurar Intersection Observer
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadSection(entry.target);
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '100px 0px', // Cargar 100px antes de que sea visible
            threshold: 0.1
        });

        // Marcar secciones para lazy loading
        this.setupLazySections();
        
        // Configurar lazy loading de imágenes
        this.setupLazyImages();
    }

    setupLazySections() {
        // Solo el hero se carga inmediatamente, el resto se carga con scroll
        const lazySections = [
            '#metrics',
            '#nosotros', 
            '#servicios',
            '#proyectos',
            '#clientes',
            '#contacto'
        ];

        lazySections.forEach(selector => {
            const section = document.querySelector(selector);
            if (section) {
                // Ocultar inicialmente
                section.style.opacity = '0';
                section.style.transform = 'translateY(50px)';
                section.style.transition = 'all 0.8s ease-out';
                
                // Agregar al observer
                this.observer.observe(section);
                this.sections.push(section);
            }
        });
    }

    setupLazyImages() {
        // Configurar lazy loading para imágenes
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        img.classList.add('loaded');
                    }
                    observer.unobserve(img);
                }
            });
        });

        // Aplicar a todas las imágenes con data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    loadSection(section) {
        console.log('Loading section:', section.id);
        
        // Animar entrada de la sección
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
        
        // Inicializar componentes específicos de la sección
        this.initializeSectionComponents(section);
        
        // Trigger AOS animations si está disponible
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    initializeSectionComponents(section) {
        const sectionId = section.id;
        
        switch(sectionId) {
            case 'metrics':
                this.initializeCounters(section);
                break;
            case 'servicios':
                this.initializeServiceCards(section);
                break;
            case 'proyectos':
                this.initializeProjectSwiper(section);
                break;
            case 'clientes':
                this.initializeClientLogos(section);
                break;
            case 'contacto':
                this.initializeContactForm(section);
                break;
        }
    }

    initializeCounters(section) {
        // Inicializar contadores animados
        const counters = section.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target) || 0;
            const duration = 2000; // 2 segundos
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }

    initializeServiceCards(section) {
        // Animar cards de servicios secuencialmente
        const cards = section.querySelectorAll('.service-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    initializeProjectSwiper(section) {
        // Inicializar Swiper para proyectos si no está inicializado
        if (typeof Swiper !== 'undefined' && !section.swiper) {
            const swiperContainer = section.querySelector('.swiper');
            if (swiperContainer) {
                section.swiper = new Swiper(swiperContainer, {
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            }
        }
    }

    initializeClientLogos(section) {
        // Animar logos de clientes
        const logos = section.querySelectorAll('.client-logo');
        logos.forEach((logo, index) => {
            setTimeout(() => {
                logo.style.opacity = '1';
                logo.style.transform = 'scale(1)';
            }, index * 100);
        });
    }

    initializeContactForm(section) {
        // Inicializar validación de formulario
        const form = section.querySelector('form');
        if (form && !form.initialized) {
            this.setupFormValidation(form);
            form.initialized = true;
        }
    }

    setupFormValidation(form) {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.validateField(input);
                }
            });
        });
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateForm(form)) {
                this.submitForm(form);
            }
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let message = '';
        
        // Validaciones básicas
        if (field.required && !value) {
            isValid = false;
            message = 'Este campo es requerido';
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                message = 'Email inválido';
            }
        }
        
        // Aplicar estilos de validación
        if (isValid) {
            field.classList.remove('error');
            field.classList.add('valid');
        } else {
            field.classList.remove('valid');
            field.classList.add('error');
        }
        
        // Mostrar/ocultar mensaje de error
        let errorMsg = field.parentNode.querySelector('.error-message');
        if (!isValid) {
            if (!errorMsg) {
                errorMsg = document.createElement('span');
                errorMsg.className = 'error-message';
                field.parentNode.appendChild(errorMsg);
            }
            errorMsg.textContent = message;
        } else if (errorMsg) {
            errorMsg.remove();
        }
        
        return isValid;
    }

    validateForm(form) {
        const fields = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    submitForm(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Mostrar loading
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        // Simular envío (aquí iría la lógica real de EmailJS)
        setTimeout(() => {
            // Restaurar botón
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Mostrar éxito
            this.showFormSuccess();
            
            // Limpiar formulario
            form.reset();
            form.querySelectorAll('.valid, .error').forEach(field => {
                field.classList.remove('valid', 'error');
            });
        }, 2000);
    }

    showFormSuccess() {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            font-weight: 600;
            z-index: 10000;
            transform: translateX(300px);
            transition: transform 0.3s ease;
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
        `;
        notification.textContent = '¡Mensaje enviado correctamente!';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(300px)';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.lazyLoader = new LazyLoader();
});

// Función para scroll suave a secciones
function scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Exportar para uso global
window.scrollToSection = scrollToSection;
