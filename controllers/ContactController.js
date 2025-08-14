/**
 * Controlador para el formulario de contacto
 * Maneja la validación y envío del formulario
 */
class ContactController {
    constructor() {
        this.form = null;
        this.init();
    }

    /**
     * Inicializa el controlador
     */
    init() {
        this.form = document.getElementById('contact-form');
        if (this.form) {
            this.setupFormValidation();
            this.setupFormSubmission();
        }
    }

    /**
     * Configura la validación del formulario
     */
    setupFormValidation() {
        const inputs = this.form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    /**
     * Configura el envío del formulario
     */
    setupFormSubmission() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission();
        });
    }

    /**
     * Valida un campo específico
     */
    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Limpiar error anterior
        this.clearFieldError(field);

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
                } else if (!this.isValidEmail(value)) {
                    isValid = false;
                    errorMessage = 'Ingrese un email válido';
                }
                break;

            case 'telefono':
                if (value && !this.isValidPhone(value)) {
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
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    /**
     * Valida el email
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Valida el teléfono
     */
    isValidPhone(phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        return phoneRegex.test(phone) && phone.length >= 8;
    }

    /**
     * Muestra error en un campo
     */
    showFieldError(field, message) {
        field.classList.add('error');
        
        let errorElement = field.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            field.parentNode.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
    }

    /**
     * Limpia el error de un campo
     */
    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }

    /**
     * Valida todo el formulario
     */
    validateForm() {
        const fields = this.form.querySelectorAll('input, textarea, select');
        let isValid = true;

        fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    /**
     * Maneja el envío del formulario
     */
    async handleFormSubmission() {
        if (!this.validateForm()) {
            return;
        }

        // Mostrar estado de carga
        this.showLoadingState();

        try {
            // Simular envío (aquí iría la lógica real de envío)
            await this.simulateFormSubmission();
            
            // Mostrar éxito
            this.showSuccessMessage();
            this.resetForm();
            
        } catch (error) {
            // Mostrar error
            this.showErrorMessage();
        } finally {
            this.hideLoadingState();
        }
    }

    /**
     * Simula el envío del formulario
     */
    simulateFormSubmission() {
        return new Promise((resolve) => {
            setTimeout(resolve, 2000); // Simular delay de 2 segundos
        });
    }

    /**
     * Muestra estado de carga
     */
    showLoadingState() {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
        }
    }

    /**
     * Oculta estado de carga
     */
    hideLoadingState() {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Mensaje';
        }
    }

    /**
     * Muestra mensaje de éxito
     */
    showSuccessMessage() {
        if (window.appController) {
            window.appController.showSuccess('Mensaje enviado correctamente');
        }
        
        // También mostrar alerta temporal
        alert('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.');
    }

    /**
     * Muestra mensaje de error
     */
    showErrorMessage() {
        if (window.appController) {
            window.appController.showError('Error al enviar el mensaje');
        }
        
        // También mostrar alerta temporal
        alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    }

    /**
     * Resetea el formulario
     */
    resetForm() {
        this.form.reset();
        const fields = this.form.querySelectorAll('input, textarea, select');
        fields.forEach(field => this.clearFieldError(field));
    }
}

// Inicializar el controlador de contacto cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Solo inicializar si estamos en la página de contacto
    if (window.location.pathname.includes('contacto.html')) {
        window.contactController = new ContactController();
    }
});
