/**
 * Archivo principal de JavaScript
 * Incluye todas las funcionalidades necesarias
 */

// Funcionalidad principal
document.addEventListener('DOMContentLoaded', function() {
    // Navegación móvil
    setupMobileNavigation();
    
    // Marcar página activa en navegación
    setActiveNavigation();
    
    // Scroll suave para indicadores de scroll
    setupScrollIndicators();
    
    // Animaciones al hacer scroll
    setupScrollAnimations();
    
    // Header siempre transparente (no necesita configuración especial)
    
    // Funcionalidad de galería (si estamos en la página de galería)
    if (window.location.pathname.includes('galeria.html')) {
        setupHeroCarousel();
        setupMeasurementCarousel();
        setupDesignCarousel();
    }
    
    // Funcionalidad de contacto (si estamos en la página de contacto)
    if (window.location.pathname.includes('contacto.html')) {
        setupContactForm();
    }
});

/**
 * Configura la navegación móvil
 */
function setupMobileNavigation() {
    console.log('🔍 Buscando elementos del menú móvil...');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const translateDropdown = document.querySelector('.translate-dropdown');
    const languageToggle = document.querySelector('.language-toggle');
    const translateOptions = document.querySelector('.translate-options');
    
    console.log('📱 mobileMenuToggle:', mobileMenuToggle);
    console.log('📋 mobileMenu:', mobileMenu);

    // Toggle del menú móvil
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            
            // Prevenir scroll del body cuando el menú está abierto
            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Cerrar menú al hacer click en un enlace móvil
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Cerrar menú al hacer click fuera de él
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Funcionalidad del dropdown de traducción (desktop)
    if (languageToggle && translateOptions) {
        languageToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            translateOptions.classList.toggle('show');
        });

        // Cerrar dropdown al hacer click fuera
        document.addEventListener('click', function() {
            translateOptions.classList.remove('show');
        });

        // Manejar selección de idioma (desktop)
        document.querySelectorAll('.translate-option').forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                handleLanguageChange(lang);
                translateOptions.classList.remove('show');
            });
        });
    }

    // Manejar selección de idioma (móvil)
    document.querySelectorAll('.mobile-translate-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            handleLanguageChange(lang);
            
            // Actualizar estado activo
            document.querySelectorAll('.mobile-translate-option').forEach(opt => {
                opt.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Cerrar menú móvil con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Maneja el cambio de idioma
 */
function handleLanguageChange(lang) {
    // Aquí puedes implementar la lógica de cambio de idioma
    console.log('Idioma seleccionado:', lang);
    
    // Ejemplo: guardar preferencia en localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Ejemplo: recargar página con nuevo idioma o aplicar traducciones
    // window.location.reload();
}

/**
 * Marca la página activa en la navegación
 */
function setActiveNavigation() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    // Remover clase active de todos los enlaces
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Agregar clase active al enlace correspondiente
    const pageMap = {
        'index.html': ['index.html', ''],
        'sobre-nosotros.html': ['sobre-nosotros.html'],
        'servicios.html': ['servicios.html'],
        'trabajamos-juntos.html': ['trabajamos-juntos.html'],
        'galeria.html': ['galeria.html'],
        'contacto.html': ['contacto.html']
    };
    
    // Buscar qué página corresponde
    let targetPage = 'index.html';
    for (const [page, patterns] of Object.entries(pageMap)) {
        if (patterns.includes(currentPage) || patterns.includes(currentPath)) {
            targetPage = page;
            break;
        }
    }
    
    // Marcar enlaces activos
    document.querySelectorAll(`[href="${targetPage}"], [href*="${targetPage}"]`).forEach(link => {
        if (link.classList.contains('nav-link') || link.classList.contains('mobile-nav-link')) {
            link.classList.add('active');
        }
    });
}

/**
 * Configura los indicadores de scroll
 */
function setupScrollIndicators() {
    document.querySelectorAll('.scroll-indicator').forEach(indicator => {
        indicator.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Buscar la siguiente sección después del hero
            const heroSection = document.querySelector('.hero-carousel-section, .hero-section, .page-hero');
            if (heroSection) {
                const nextSection = heroSection.nextElementSibling;
                if (nextSection) {
                    // Scroll suave a la siguiente sección
                    nextSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    // Si no hay siguiente sección, hacer scroll al final de la página
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    });
                }
            } else {
                // Si no hay hero section, buscar la primera sección con contenido
                const firstContentSection = document.querySelector('.featured-services, .about-content, .services-detailed, .partners-section, .measurement-carousel-section, .design-carousel-section, .contact-section');
                if (firstContentSection) {
                    firstContentSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    // Último recurso: scroll al final de la página
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/**
 * Configura las animaciones de scroll
 */
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    document.querySelectorAll('.service-card, .about-card, .partner-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Configura la galería con carrusel
 */
function setupGallery() {
    let currentSlide = 0;
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');

    if (!carouselTrack || carouselSlides.length === 0) return;

    const totalSlides = carouselSlides.length;

    // Configurar botones
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
            updateCarousel();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
            updateCarousel();
        });
    }

    // Configurar dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Auto-play
    let autoPlayInterval = setInterval(() => {
        currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
        updateCarousel();
    }, 5000);

    // Pausar auto-play al hacer hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(() => {
                currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
                updateCarousel();
            }, 5000);
        });
    }

    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Actualizar dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Inicializar carrusel
    updateCarousel();
}

/**
 * Configura el formulario de contacto
 */
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Configurar validación
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });

    // Configurar envío
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmission();
    });

    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Limpiar error anterior
        clearFieldError(field);

        // Validaciones específicas por campo
        switch (fieldName) {
            case 'nombre':
                if (!value) {
                    isValid = false;
                    errorMessage = 'El nombre es requerido';
                } else if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'El nombre debe tener al menos 2 caracteres';
                }
                break;

            case 'email':
                if (!value) {
                    isValid = false;
                    errorMessage = 'El email es requerido';
                } else if (!isValidEmail(value)) {
                    isValid = false;
                    errorMessage = 'Ingrese un email válido';
                }
                break;

            case 'telefono':
                if (value && !isValidPhone(value)) {
                    isValid = false;
                    errorMessage = 'Ingrese un teléfono válido';
                }
                break;

            case 'servicio':
                if (!value) {
                    isValid = false;
                    errorMessage = 'Seleccione un servicio';
                }
                break;

            case 'mensaje':
                if (!value) {
                    isValid = false;
                    errorMessage = 'El mensaje es requerido';
                } else if (value.length < 10) {
                    isValid = false;
                    errorMessage = 'El mensaje debe tener al menos 10 caracteres';
                }
                break;
        }

        if (!isValid) {
            showFieldError(field, errorMessage);
        }

        return isValid;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        return phoneRegex.test(phone) && phone.length >= 8;
    }

    function showFieldError(field, message) {
        field.classList.add('error');
        
        let errorElement = field.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            field.parentNode.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
    }

    function clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }

    function validateForm() {
        const fields = form.querySelectorAll('input, textarea, select');
        let isValid = true;

        fields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    async function handleFormSubmission() {
        if (!validateForm()) {
            return;
        }

        // Mostrar estado de carga
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
        }

        try {
            // Simular envío
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Mostrar éxito
            alert('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.');
            form.reset();
            
        } catch (error) {
            // Mostrar error
            alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
        } finally {
            // Restaurar botón
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar Mensaje';
            }
        }
    }
}

/**
 * Configura el carrusel hero de la galería
 */
function setupHeroCarousel() {
    let currentSlide = 0;
    const heroSlides = document.querySelectorAll('.hero-carousel-slide');
    const heroDots = document.querySelectorAll('.hero-dot');
    const prevBtn = document.querySelector('.hero-carousel-btn.prev-btn');
    const nextBtn = document.querySelector('.hero-carousel-btn.next-btn');

    if (!heroSlides.length) return;

    const totalSlides = heroSlides.length;

    // Configurar botones
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
            updateHeroCarousel();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
            updateHeroCarousel();
        });
    }

    // Configurar dots
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateHeroCarousel();
        });
    });

    // Auto-play
    let autoPlayInterval = setInterval(() => {
        currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
        updateHeroCarousel();
    }, 8000); // 8 segundos por slide

    // Pausar auto-play al hacer hover
    const heroCarousel = document.querySelector('.hero-carousel');
    if (heroCarousel) {
        heroCarousel.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        heroCarousel.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(() => {
                currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
                updateHeroCarousel();
            }, 8000);
        });
    }

    function updateHeroCarousel() {
        // Ocultar todas las slides
        heroSlides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Mostrar la slide actual
        heroSlides[currentSlide].classList.add('active');
        
        // Actualizar dots
        heroDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Inicializar carrusel
    updateHeroCarousel();
}

/**
 * Configura el carrusel de medición de puesta a tierra
 */
function setupMeasurementCarousel() {
    let currentSlide = 0;
    const measurementSlides = document.querySelectorAll('.measurement-slide');
    const measurementDots = document.querySelectorAll('.measurement-dot');
    const prevBtn = document.querySelector('.measurement-btn.prev-btn');
    const nextBtn = document.querySelector('.measurement-btn.next-btn');

    if (!measurementSlides.length) return;

    const totalSlides = measurementSlides.length;

    // Configurar botones
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
            updateMeasurementCarousel();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
            updateMeasurementCarousel();
        });
    }

    // Configurar dots
    measurementDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateMeasurementCarousel();
        });
    });

    // Auto-play
    let autoPlayInterval = setInterval(() => {
        currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
        updateMeasurementCarousel();
    }, 7000); // 7 segundos por slide

    // Pausar auto-play al hacer hover
    const measurementCarousel = document.querySelector('.measurement-carousel');
    if (measurementCarousel) {
        measurementCarousel.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        measurementCarousel.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(() => {
                currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
                updateMeasurementCarousel();
            }, 7000);
        });
    }

    function updateMeasurementCarousel() {
        // Ocultar todas las slides
        measurementSlides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Mostrar la slide actual
        measurementSlides[currentSlide].classList.add('active');
        
        // Actualizar dots
        measurementDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Inicializar carrusel
    updateMeasurementCarousel();
}

/**
 * Configura el carrusel de diseño de tableros
 */
function setupDesignCarousel() {
    let currentSlide = 0;
    const designSlides = document.querySelectorAll('.design-slide');
    const designDots = document.querySelectorAll('.design-dot');
    const prevBtn = document.querySelector('.design-btn.prev-btn');
    const nextBtn = document.querySelector('.design-btn.next-btn');

    if (!designSlides.length) return;

    const totalSlides = designSlides.length;

    // Configurar botones
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
            updateDesignCarousel();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
            updateDesignCarousel();
        });
    }

    // Configurar dots
    designDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateDesignCarousel();
        });
    });

    // Auto-play
    let autoPlayInterval = setInterval(() => {
        currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
        updateDesignCarousel();
    }, 7000); // 7 segundos por slide

    // Pausar auto-play al hacer hover
    const designCarousel = document.querySelector('.design-carousel');
    if (designCarousel) {
        designCarousel.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        designCarousel.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(() => {
                currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
                updateDesignCarousel();
            }, 7000);
        });
    }

    function updateDesignCarousel() {
        // Ocultar todas las slides
        designSlides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Mostrar la slide actual
        designSlides[currentSlide].classList.add('active');
        
        // Actualizar dots
        designDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Inicializar carrusel
    updateDesignCarousel();
}

/**
 * Configura el formulario de contacto
 */
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const origenSelect = document.getElementById('origen');
    const otrosOrigenGroup = document.getElementById('otros-origen-group');
    const otrosOrigenInput = document.getElementById('otros-origen');

    // Show/hide "otros" field based on selection
    if (origenSelect) {
        origenSelect.addEventListener('change', function() {
            if (this.value === 'otros') {
                otrosOrigenGroup.style.display = 'block';
                otrosOrigenInput.required = true;
            } else {
                otrosOrigenGroup.style.display = 'none';
                otrosOrigenInput.required = false;
                otrosOrigenInput.value = '';
                clearError('otros-origen');
            }
        });
    }

    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Prepare email content
            const formData = new FormData(form);
            const emailBody = prepareEmailBody(formData);
            
            // Open email client
            const mailtoLink = `mailto:39500455@terciariourquiza.edu.ar?subject=Nuevo mensaje de contacto - Alterna&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoLink;
        }
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

function validateForm() {
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input, select, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (input.required && !validateField(input)) {
            isValid = false;
        }
    });

    // Special validation for "otros" field
    const origenSelect = document.getElementById('origen');
    const otrosOrigenInput = document.getElementById('otros-origen');
    
    if (origenSelect.value === 'otros' && otrosOrigenInput.required) {
        if (!validateField(otrosOrigenInput)) {
            isValid = false;
        }
    }

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Clear previous error
    clearError(field.id);

    // Validation rules
    switch (fieldName) {
        case 'nombre':
        case 'apellido':
        case 'empresa':
            if (value.length < 2) {
                errorMessage = 'Este campo debe tener al menos 2 caracteres';
                isValid = false;
            } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
                errorMessage = 'Solo se permiten letras y espacios';
                isValid = false;
            }
            break;

        case 'email':
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                errorMessage = 'Ingresa un email válido';
                isValid = false;
            }
            break;

        case 'telefono':
            if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(value)) {
                errorMessage = 'Ingresa un número de teléfono válido';
                isValid = false;
            }
            break;

        case 'origen':
            if (value === '') {
                errorMessage = 'Selecciona una opción';
                isValid = false;
            }
            break;

        case 'otros-origen':
            if (field.required && value.length < 3) {
                errorMessage = 'Especifica cómo nos conociste (mínimo 3 caracteres)';
                isValid = false;
            }
            break;

        case 'mensaje':
            if (value.length < 10) {
                errorMessage = 'El mensaje debe tener al menos 10 caracteres';
                isValid = false;
            }
            break;
    }

    // Show/hide error
    if (!isValid) {
        showError(field.id, errorMessage);
        field.classList.add('error');
        field.classList.remove('success');
    } else {
        field.classList.remove('error');
        field.classList.add('success');
    }

    return isValid;
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearError(fieldId) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

function prepareEmailBody(formData) {
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    return `Nuevo mensaje de contacto desde el sitio web de Alterna

Datos del contacto:
- Nombre: ${data.nombre} ${data.apellido}
- Empresa: ${data.empresa}
- Email: ${data.email}
- Teléfono: ${data.telefono}
- Cómo nos conoció: ${data.origen}${data['otros-origen'] ? ` - ${data['otros-origen']}` : ''}

Mensaje:
${data.mensaje}

---
Este mensaje fue enviado desde el formulario de contacto de alterna.com`;
}


