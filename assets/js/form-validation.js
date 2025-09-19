// ===== VALIDACIONES Y ENVÍO DEL FORMULARIO =====

class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.errors = {};
        this.isSubmitting = false;
        this.setupEventListeners();
        this.initializeEmailJS();
    }

    // Inicializar EmailJS
    async initializeEmailJS() {
        // Configurar EmailJS usando el archivo de configuración
        if (window.setupEmailJS) {
            await window.setupEmailJS();
        }
        
        // Validar configuración
        if (window.validateEmailConfig) {
            const validation = window.validateEmailConfig();
            if (!validation.valid) {
                console.warn('⚠️ EmailJS no configurado correctamente:', validation.issues);
                console.log('Usando modo de simulación para desarrollo');
            }
        }
    }

    // Configurar event listeners
    setupEventListeners() {
        if (!this.form) return;

        // Validación en tiempo real
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', (e) => this.validateField(e.target));
            input.addEventListener('input', (e) => this.clearFieldError(e.target));
        });

        // Envío del formulario
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    // Validar un campo individual
    validateField(field) {
        const fieldName = field.name;
        const value = field.value.trim();
        
        // Limpiar error previo
        delete this.errors[fieldName];
        this.clearFieldError(field);

        // Validaciones por campo
        switch(fieldName) {
            case 'fullname':
                this.validateFullName(field, value);
                break;
            case 'email':
                this.validateEmail(field, value);
                break;
            case 'phone':
                this.validatePhone(field, value);
                break;
            case 'company':
                this.validateCompany(field, value);
                break;
            case 'message':
                this.validateMessage(field, value);
                break;
        }

        // Mostrar error si existe
        if (this.errors[fieldName]) {
            this.showFieldError(field, this.errors[fieldName]);
            return false;
        }

        this.showFieldSuccess(field);
        return true;
    }

    // Validar nombre completo
    validateFullName(field, value) {
        if (!value) {
            this.errors[field.name] = 'El nombre completo es requerido';
            return;
        }

        if (value.length < 2) {
            this.errors[field.name] = 'El nombre debe tener al menos 2 caracteres';
            return;
        }

        if (value.length > 50) {
            this.errors[field.name] = 'El nombre no puede exceder 50 caracteres';
            return;
        }

        // Solo letras, espacios, tildes y ñ
        const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
        if (!namePattern.test(value)) {
            this.errors[field.name] = 'El nombre solo debe contener letras y espacios';
            return;
        }

        // Verificar que no sean solo espacios
        if (!value.replace(/\s/g, '').length) {
            this.errors[field.name] = 'El nombre no puede estar vacío';
            return;
        }

        // Verificar que no sean números disfrazados
        const numberPattern = /\d/;
        if (numberPattern.test(value)) {
            this.errors[field.name] = 'El nombre no puede contener números';
            return;
        }
    }

    // Validar email
    validateEmail(field, value) {
        if (!value) {
            this.errors[field.name] = 'El email es requerido';
            return;
        }

        // Pattern robusto para email
        const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        
        if (!emailPattern.test(value)) {
            this.errors[field.name] = 'Por favor ingresa un email válido';
            return;
        }

        // Verificar que no tenga espacios
        if (value.includes(' ')) {
            this.errors[field.name] = 'El email no puede contener espacios';
            return;
        }

        // Verificar longitud
        if (value.length > 254) {
            this.errors[field.name] = 'El email es demasiado largo';
            return;
        }

        // Verificar dominios comunes mal escritos
        const commonDomains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com'];
        const domain = value.split('@')[1];
        if (domain) {
            const suggestions = this.suggestDomain(domain, commonDomains);
            if (suggestions) {
                this.errors[field.name] = `¿Quisiste decir ${suggestions}?`;
                return;
            }
        }
    }

    // Validar teléfono
    validatePhone(field, value) {
        // El teléfono es opcional, pero si se proporciona debe ser válido
        if (!value) return;

        // Remover todos los espacios, guiones y paréntesis
        const cleanPhone = value.replace(/[\s\-\(\)]/g, '');

        // Verificar que solo contenga números y el símbolo +
        const phonePattern = /^\+?[\d]+$/;
        if (!phonePattern.test(cleanPhone)) {
            this.errors[field.name] = 'El teléfono solo debe contener números, espacios, guiones y paréntesis';
            return;
        }

        // Verificar longitud (entre 7 y 15 dígitos según estándares internacionales)
        const digitsOnly = cleanPhone.replace(/\+/g, '');
        if (digitsOnly.length < 7 || digitsOnly.length > 15) {
            this.errors[field.name] = 'El teléfono debe tener entre 7 y 15 dígitos';
            return;
        }

        // Verificar formatos argentinos comunes
        if (value.startsWith('+54') || value.startsWith('54') || value.startsWith('11') || value.startsWith('341')) {
            // Validación específica para Argentina
            if (cleanPhone.replace(/^\+?54/, '').length < 8) {
                this.errors[field.name] = 'Formato de teléfono argentino incorrecto';
                return;
            }
        }
    }

    // Validar empresa (opcional)
    validateCompany(field, value) {
        // La empresa es opcional
        if (!value) return;

        if (value.length > 100) {
            this.errors[field.name] = 'El nombre de la empresa no puede exceder 100 caracteres';
            return;
        }

        // Permitir letras, números, espacios y algunos caracteres especiales comunes
        const companyPattern = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s\.\-&\/\(\)]+$/;
        if (!companyPattern.test(value)) {
            this.errors[field.name] = 'El nombre de la empresa contiene caracteres no válidos';
            return;
        }
    }

    // Validar mensaje/descripción del proyecto
    validateMessage(field, value) {
        if (!value) {
            this.errors[field.name] = 'La descripción del proyecto es requerida';
            return;
        }

        if (value.length < 10) {
            this.errors[field.name] = 'La descripción debe tener al menos 10 caracteres';
            return;
        }

        if (value.length > 2000) {
            this.errors[field.name] = 'La descripción no puede exceder 2000 caracteres';
            return;
        }

        // Verificar que no sea solo espacios o saltos de línea
        if (!value.replace(/[\s\n\r]/g, '').length) {
            this.errors[field.name] = 'La descripción no puede estar vacía';
            return;
        }
    }

    // Sugerir dominio correcto
    suggestDomain(domain, commonDomains) {
        const threshold = 0.7;
        for (let commonDomain of commonDomains) {
            const similarity = this.calculateSimilarity(domain.toLowerCase(), commonDomain);
            if (similarity > threshold && similarity < 1) {
                return commonDomain;
            }
        }
        return null;
    }

    // Calcular similitud entre strings
    calculateSimilarity(str1, str2) {
        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length > str2.length ? str2 : str1;
        
        if (longer.length === 0) return 1.0;
        
        const editDistance = this.levenshteinDistance(longer, shorter);
        return (longer.length - editDistance) / longer.length;
    }

    // Algoritmo de Levenshtein para calcular distancia de edición
    levenshteinDistance(str1, str2) {
        const matrix = [];
        
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        
        return matrix[str2.length][str1.length];
    }

    // Mostrar error en campo
    showFieldError(field, message) {
        field.classList.add('error');
        field.classList.remove('success');
        
        // Remover mensaje de error anterior
        this.removeFieldMessage(field);
        
        // Crear mensaje de error
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error-message';
        errorDiv.textContent = message;
        errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        
        field.parentNode.appendChild(errorDiv);
    }

    // Mostrar éxito en campo
    showFieldSuccess(field) {
        field.classList.add('success');
        field.classList.remove('error');
        
        // Remover mensaje anterior
        this.removeFieldMessage(field);
    }

    // Limpiar error de campo
    clearFieldError(field) {
        field.classList.remove('error', 'success');
        this.removeFieldMessage(field);
    }

    // Remover mensaje de campo
    removeFieldMessage(field) {
        const existingMessage = field.parentNode.querySelector('.field-error-message, .field-success-message');
        if (existingMessage) {
            existingMessage.remove();
        }
    }

    // Validar todo el formulario
    validateForm() {
        const inputs = this.form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        // Validar campos opcionales que tienen contenido
        const optionalInputs = this.form.querySelectorAll('input:not([required]), textarea:not([required])');
        optionalInputs.forEach(input => {
            if (input.value.trim()) {
                if (!this.validateField(input)) {
                    isValid = false;
                }
            }
        });

        return isValid;
    }

    // Manejar envío del formulario
    async handleSubmit(e) {
        e.preventDefault();

        if (this.isSubmitting) return;

        const submitButton = this.form.querySelector('.btn-submit');
        const originalText = submitButton.innerHTML;

        try {
            // Validar formulario
            if (!this.validateForm()) {
                const message = window.EMAIL_CONFIG?.notifications?.validationError || 'Por favor corrige los errores del formulario';
                this.showNotification(message, 'error');
                return;
            }

            this.isSubmitting = true;
            const sendingText = window.EMAIL_CONFIG?.notifications?.sending || 'Enviando...';
            submitButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${sendingText}`;
            submitButton.disabled = true;

            // Recopilar datos del formulario
            const formData = new FormData(this.form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Enviar email usando EmailJS
            await this.sendEmail(data);

            // Éxito
            const successMessage = window.EMAIL_CONFIG?.notifications?.success || '¡Mensaje enviado exitosamente! Te contactaremos pronto.';
            this.showNotification(successMessage, 'success');
            this.form.reset();
            this.clearAllErrors();

        } catch (error) {
            console.error('Error al enviar formulario:', error);
            const errorMessage = window.EMAIL_CONFIG?.notifications?.error || 'Error al enviar el mensaje. Por favor intenta nuevamente.';
            this.showNotification(errorMessage, 'error');
        } finally {
            this.isSubmitting = false;
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    }

    // Enviar email usando EmailJS
    async sendEmail(data) {
        const templateParams = {
            from_name: data.fullname,
            from_email: data.email,
            phone: data.phone || 'No proporcionado',
            company: data.company || 'No proporcionado',
            message: data.message,
            to_email: window.EMAIL_CONFIG?.destinationEmail || 'albano.facundo@hotmail.com'
        };

        // Verificar si EmailJS está configurado y disponible
        if (typeof emailjs !== 'undefined' && window.EMAIL_CONFIG) {
            const validation = window.validateEmailConfig();
            
            if (validation.valid) {
                // Usar EmailJS real
                return emailjs.send(
                    window.EMAIL_CONFIG.emailjs.serviceID, 
                    window.EMAIL_CONFIG.emailjs.templateID, 
                    templateParams
                );
            }
        }

        // Fallback: usar función alternativa de envío
        if (window.sendEmailAlternative) {
            return window.sendEmailAlternative(templateParams);
        }

        throw new Error('No se pudo configurar el servicio de email');
    }

    // Limpiar todos los errores
    clearAllErrors() {
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            this.clearFieldError(input);
        });
        this.errors = {};
    }

    // Mostrar notificación
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `form-notification ${type}`;
        
        const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
        
        notification.innerHTML = `
            <i class="fas ${icon}"></i>
            <span>${message}</span>
            <button class="close-notification" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
        
        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
    }
}

// CSS dinámico para estilos de validación
const validationStyles = `
    .form-input.error, .form-textarea.error {
        border-color: #e74c3c !important;
        box-shadow: 0 0 0 2px rgba(231, 76, 60, 0.2) !important;
        background-color: rgba(231, 76, 60, 0.05) !important;
    }

    .form-input.success, .form-textarea.success {
        border-color: #27ae60 !important;
        box-shadow: 0 0 0 2px rgba(39, 174, 96, 0.2) !important;
        background-color: rgba(39, 174, 96, 0.05) !important;
    }

    .field-error-message {
        color: #e74c3c;
        font-size: 0.85rem;
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideDown 0.3s ease-out;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .form-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    }

    .form-notification.show {
        transform: translateX(0);
    }

    .form-notification.success {
        border-left: 4px solid #27ae60;
        color: #27ae60;
    }

    .form-notification.error {
        border-left: 4px solid #e74c3c;
        color: #e74c3c;
    }

    .form-notification.info {
        border-left: 4px solid #3498db;
        color: #3498db;
    }

    .close-notification {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        opacity: 0.6;
        transition: opacity 0.2s;
    }

    .close-notification:hover {
        opacity: 1;
    }
`;

// Inyectar estilos
const styleSheet = document.createElement('style');
styleSheet.textContent = validationStyles;
document.head.appendChild(styleSheet);

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const formValidator = new FormValidator('contactForm');
    
    // Hacer disponible globalmente para debugging
    window.formValidator = formValidator;
});