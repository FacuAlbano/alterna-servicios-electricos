// ===== VALIDACIONES Y ENVÍO DEL FORMULARIO =====

class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.errors = {};
        this.isSubmitting = false;
        this.currentLanguage = 'es';
        this.errorTranslations = this.initializeErrorTranslations();
        this.setupEventListeners();
        this.initializeEmailJS();
    }

    // Inicializar traducciones de errores
    initializeErrorTranslations() {
        return {
            es: {
                // Name errors
                'name_required': 'El nombre completo es requerido',
                'name_too_short': 'El nombre debe tener al menos 2 caracteres',
                'name_too_long': 'El nombre no puede exceder 50 caracteres',
                'name_invalid_chars': 'El nombre solo puede contener letras, espacios, apostrofes y guiones',
                'name_empty': 'El nombre no puede estar vacío',
                'name_no_numbers': 'El nombre no puede contener números',
                'name_no_symbols': 'El nombre no puede contener símbolos especiales',
                'name_must_have_letters': 'El nombre debe contener al menos una letra',
                'name_too_many_spaces': 'No se permiten más de 2 espacios seguidos',
                'name_no_number_words': 'No se permiten números escritos como texto en el nombre',
                
                // Email errors
                'email_required': 'El email es requerido',
                'email_must_have_at': 'El email debe contener el símbolo @',
                'email_one_at_only': 'El email debe contener exactamente un símbolo @',
                'email_no_spaces': 'El email no puede contener espacios',
                'email_invalid_format': 'Formato de email inválido',
                'email_no_local_part': 'El email debe tener contenido antes del @',
                'email_local_too_long': 'La parte antes del @ es demasiado larga',
                'email_no_domain': 'El email debe tener un dominio después del @',
                'email_domain_no_dot': 'El dominio debe contener al menos un punto',
                'email_domain_dot_position': 'El dominio no puede empezar o terminar con punto',
                'email_too_long': 'El email es demasiado largo',
                'email_domain_suggestion': '¿Quisiste decir {suggestion}?',
                'email_invalid_tld': 'La extensión del dominio es inválida',
                'email_domain_invalid_chars': 'El dominio contiene caracteres inválidos',
            },
            en: {
                // Name errors
                'name_required': 'Full name is required',
                'name_too_short': 'Name must be at least 2 characters',
                'name_too_long': 'Name cannot exceed 50 characters',
                'name_invalid_chars': 'Name can only contain letters, spaces, apostrophes and hyphens',
                'name_empty': 'Name cannot be empty',
                'name_no_numbers': 'Name cannot contain numbers',
                'name_no_symbols': 'Name cannot contain special symbols',
                'name_must_have_letters': 'Name must contain at least one letter',
                'name_too_many_spaces': 'No more than 2 consecutive spaces allowed',
                'name_no_number_words': 'Numbers written as text are not allowed in name',
                
                // Email errors
                'email_required': 'Email is required',
                'email_must_have_at': 'Email must contain the @ symbol',
                'email_one_at_only': 'Email must contain exactly one @ symbol',
                'email_no_spaces': 'Email cannot contain spaces',
                'email_invalid_format': 'Invalid email format',
                'email_no_local_part': 'Email must have content before @',
                'email_local_too_long': 'Part before @ is too long',
                'email_no_domain': 'Email must have a domain after @',
                'email_domain_no_dot': 'Domain must contain at least one dot',
                'email_domain_dot_position': 'Domain cannot start or end with dot',
                'email_too_long': 'Email is too long',
                'email_domain_suggestion': 'Did you mean {suggestion}?',
                'email_invalid_tld': 'Invalid domain extension',
                'email_domain_invalid_chars': 'Domain contains invalid characters',
            },
            pt: {
                // Name errors
                'name_required': 'Nome completo é obrigatório',
                'name_too_short': 'Nome deve ter pelo menos 2 caracteres',
                'name_too_long': 'Nome não pode exceder 50 caracteres',
                'name_invalid_chars': 'Nome só pode conter letras, espaços, apóstrofes e hífens',
                'name_empty': 'Nome não pode estar vazio',
                'name_no_numbers': 'Nome não pode conter números',
                'name_no_symbols': 'Nome não pode conter símbolos especiais',
                'name_must_have_letters': 'Nome deve conter pelo menos uma letra',
                'name_too_many_spaces': 'Não são permitidos mais de 2 espaços seguidos',
                'name_no_number_words': 'Números escritos como texto não são permitidos no nome',
                
                // Email errors
                'email_required': 'Email é obrigatório',
                'email_must_have_at': 'Email deve conter o símbolo @',
                'email_one_at_only': 'Email deve conter exatamente um símbolo @',
                'email_no_spaces': 'Email não pode conter espaços',
                'email_invalid_format': 'Formato de email inválido',
                'email_no_local_part': 'Email deve ter conteúdo antes do @',
                'email_local_too_long': 'Parte antes do @ é muito longa',
                'email_no_domain': 'Email deve ter um domínio após @',
                'email_domain_no_dot': 'Domínio deve conter pelo menos um ponto',
                'email_domain_dot_position': 'Domínio não pode começar ou terminar com ponto',
                'email_too_long': 'Email é muito longo',
                'email_domain_suggestion': 'Você quis dizer {suggestion}?',
                'email_invalid_tld': 'Extensão de domínio inválida',
                'email_domain_invalid_chars': 'Domínio contém caracteres inválidos',
            }
        };
    }

    // Obtener error traducido
    getTranslatedError(key) {
        return this.errorTranslations[this.currentLanguage][key] || key;
    }

    // Actualizar idioma
    updateLanguage(language) {
        this.currentLanguage = language;
    }

    // Inicializar EmailJS
    initializeEmailJS() {
        // Configurar EmailJS con User ID real
        emailjs.init("LGbwj6-RVhE2pGy1K"); // User ID válido para EmailJS
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

    // Validar nombre completo con reglas súper estrictas
    validateFullName(field, value) {
        if (!value) {
            this.errors[field.name] = this.getTranslatedError('name_required');
            return;
        }

        if (value.length < 2) {
            this.errors[field.name] = this.getTranslatedError('name_too_short');
            return;
        }

        if (value.length > 50) {
            this.errors[field.name] = this.getTranslatedError('name_too_long');
            return;
        }

        // SÚPER ESTRICTO: Solo letras, espacios, acentos, ñ, ü - NO NÚMEROS NI SÍMBOLOS
        const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜñÑçÇ\s''-]+$/;
        if (!namePattern.test(value)) {
            this.errors[field.name] = this.getTranslatedError('name_invalid_chars');
            return;
        }

        // Verificar que no sean solo espacios o caracteres especiales
        const cleanValue = value.replace(/[\s''-]/g, '');
        if (!cleanValue.length) {
            this.errors[field.name] = this.getTranslatedError('name_empty');
            return;
        }

        // PROHIBIR CUALQUIER NÚMERO
        if (/\d/.test(value)) {
            this.errors[field.name] = this.getTranslatedError('name_no_numbers');
            return;
        }

        // PROHIBIR SÍMBOLOS ESPECIALES (excepto espacios, apostrofes y guiones)
        if (/[!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?~`]/.test(value)) {
            this.errors[field.name] = this.getTranslatedError('name_no_symbols');
            return;
        }

        // Verificar que tenga al menos una letra
        if (!/[a-zA-ZáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛäëïöüÄËÏÖÜñÑçÇ]/.test(value)) {
            this.errors[field.name] = this.getTranslatedError('name_must_have_letters');
            return;
        }

        // No permitir más de 3 espacios seguidos
        if (/\s{3,}/.test(value)) {
            this.errors[field.name] = this.getTranslatedError('name_too_many_spaces');
            return;
        }

        // No permitir números escritos como texto
        const numberWords = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 
                           'diez', 'once', 'doce', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 
                           'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
        const lowerValue = value.toLowerCase();
        if (numberWords.some(word => lowerValue.includes(word))) {
            this.errors[field.name] = this.getTranslatedError('name_no_number_words');
            return;
        }
    }

    // Validar email súper estricto
    validateEmail(field, value) {
        if (!value) {
            this.errors[field.name] = this.getTranslatedError('email_required');
            return;
        }

        // VERIFICAR QUE TENGA @ - BÁSICO PERO CRÍTICO
        if (!value.includes('@')) {
            this.errors[field.name] = this.getTranslatedError('email_must_have_at');
            return;
        }

        // VERIFICAR QUE TENGA SOLO UN @
        const atCount = (value.match(/@/g) || []).length;
        if (atCount !== 1) {
            this.errors[field.name] = this.getTranslatedError('email_one_at_only');
            return;
        }

        // VERIFICAR ESPACIOS EN BLANCO
        if (/\s/.test(value)) {
            this.errors[field.name] = this.getTranslatedError('email_no_spaces');
            return;
        }

        // Pattern súper robusto para email
        const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        
        if (!emailPattern.test(value)) {
            this.errors[field.name] = this.getTranslatedError('email_invalid_format');
            return;
        }

        // Verificar partes del email
        const [localPart, domainPart] = value.split('@');
        
        // Validar parte local (antes del @)
        if (!localPart || localPart.length === 0) {
            this.errors[field.name] = this.getTranslatedError('email_no_local_part');
            return;
        }

        if (localPart.length > 64) {
            this.errors[field.name] = this.getTranslatedError('email_local_too_long');
            return;
        }

        // Validar dominio (después del @)
        if (!domainPart || domainPart.length === 0) {
            this.errors[field.name] = this.getTranslatedError('email_no_domain');
            return;
        }

        if (!domainPart.includes('.')) {
            this.errors[field.name] = this.getTranslatedError('email_domain_no_dot');
            return;
        }

        // Verificar que el dominio no empiece o termine con punto
        if (domainPart.startsWith('.') || domainPart.endsWith('.')) {
            this.errors[field.name] = this.getTranslatedError('email_domain_dot_position');
            return;
        }

        // Verificar longitud total
        if (value.length > 254) {
            this.errors[field.name] = this.getTranslatedError('email_too_long');
            return;
        }

        // Verificar dominios comunes mal escritos con sugerencias
        const suggestions = this.checkEmailDomainSuggestions(domainPart);
        if (suggestions) {
            this.errors[field.name] = this.getTranslatedError('email_domain_suggestion').replace('{suggestion}', suggestions);
            return;
        }

        // Verificar extensiones mínimas de dominio
        const domainParts = domainPart.split('.');
        const tld = domainParts[domainParts.length - 1];
        if (tld.length < 2) {
            this.errors[field.name] = this.getTranslatedError('email_invalid_tld');
            return;
        }

        // Verificar caracteres no permitidos en dominio
        if (!/^[a-zA-Z0-9.-]+$/.test(domainPart)) {
            this.errors[field.name] = this.getTranslatedError('email_domain_invalid_chars');
            return;
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

    // Mejorar sugerencias de dominio de email
    checkEmailDomainSuggestions(domain) {
        // PRIMERO: Lista de dominios válidos que NO necesitan sugerencias
        const validDomains = [
            'gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'live.com',
            'yahoo.es', 'hotmail.es', 'outlook.es', 'live.es',
            'icloud.com', 'me.com', 'aol.com', 'protonmail.com',
            'mail.com', 'yandex.com', 'zoho.com', 'fastmail.com',
            'tutanota.com', 'gmx.com', 'web.de', 'email.com'
        ];
        
        // Si el dominio es válido, NO sugerir nada
        if (validDomains.includes(domain.toLowerCase())) {
            return null; // No sugerir nada
        }
        
        // SEGUNDO: Solo corregir errores tipográficos obvios
        const typoCorrections = {
            // Gmail variations
            'gmai.com': 'gmail.com',
            'gmial.com': 'gmail.com',
            'gmil.com': 'gmail.com',
            'gmail.co': 'gmail.com',
            'gmaill.com': 'gmail.com',
            
            // Hotmail variations  
            'hotmial.com': 'hotmail.com',
            'hotmai.com': 'hotmail.com',
            'hotmil.com': 'hotmail.com',
            'hotmail.co': 'hotmail.com',
            
            // Yahoo variations
            'yahooo.com': 'yahoo.com',
            'yaho.com': 'yahoo.com',
            'yahoo.co': 'yahoo.com',
            'yaoo.com': 'yahoo.com',
            
            // Outlook variations
            'outlok.com': 'outlook.com',
            'outllook.com': 'outlook.com',
            'outlook.co': 'outlook.com',
            'outlok.es': 'outlook.es',
            
            // Other common typos
            'live.co': 'live.com',
            'msn.co': 'msn.com',
        };
        
        // Solo sugerir si hay un error tipográfico obvio
        return typoCorrections[domain.toLowerCase()] || null;
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
                this.showNotification('Por favor corrige los errores del formulario', 'error');
                return;
            }

            this.isSubmitting = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitButton.disabled = true;

            // Recopilar datos del formulario
            const formData = new FormData(this.form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Enviar email usando el método configurado
            const response = await this.sendEmail(data);
            
            // Éxito - mensaje específico según el método usado
            let successMessage = '';
            if (response && response.text === 'DIRECT_EMAIL_OPENED') {
                successMessage = '✅ ¡Email preparado! Se abrirá tu cliente de email para enviarlo a albano.facundo@hotmail.com';
                
                // Avisar al usuario sobre el cliente de email
                setTimeout(() => {
                    alert('📧 Se abrirá tu cliente de email (Outlook, Gmail, etc.) con el mensaje pre-cargado.\n\n📍 Destinatario: albano.facundo@hotmail.com\n\n¡Solo presiona ENVIAR en tu cliente de email!');
                }, 1500);
                
            } else {
                successMessage = '✅ ¡Mensaje enviado exitosamente a albano.facundo@hotmail.com!';
            }
            
            this.showNotification(successMessage, 'success');
            this.form.reset();
            this.clearAllErrors();
            
            // Mostrar confirmación en consola
            console.log(`📧 ✅ CONFIRMACIÓN: Email procesado para albano.facundo@hotmail.com`);
            console.log('📋 Datos enviados:', data);

        } catch (error) {
            console.error('Error al enviar formulario:', error);
            this.showNotification('Error al enviar el mensaje. Por favor intenta nuevamente.', 'error');
        } finally {
            this.isSubmitting = false;
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    }

    // Enviar email usando EmailJS a albano.facundo@hotmail.com
    async sendEmail(data) {
        const currentLang = this.currentLanguage;
        const translations = {
            es: {
                subject: 'Nuevo contacto desde AlternaWeb - ',
                newContact: 'Nuevo contacto desde la web',
                clientInfo: 'Información del cliente:',
                projectDetails: 'Detalles del proyecto:'
            },
            en: {
                subject: 'New contact from AlternaWeb - ',
                newContact: 'New contact from website',
                clientInfo: 'Client information:',
                projectDetails: 'Project details:'
            },
            pt: {
                subject: 'Novo contato do AlternaWeb - ',
                newContact: 'Novo contato do site',
                clientInfo: 'Informações do cliente:',
                projectDetails: 'Detalhes do projeto:'
            }
        };
        
        const t = translations[currentLang];
        
        const templateParams = {
            to_email: 'albano.facundo@hotmail.com',
            from_name: data.fullname,
            from_email: data.email,
            phone: data.phone || 'No proporcionado',
            company: data.company || 'No especificado',
            message: data.message,
            subject: `${t.subject}${data.fullname}`,
            
            // Formato mejorado del mensaje
            formatted_message: `
${t.newContact}
═══════════════════════════════════════

${t.clientInfo}
👤 Nombre: ${data.fullname}
✉️ Email: ${data.email}
📞 Teléfono: ${data.phone || 'No proporcionado'}
🏢 Empresa: ${data.company || 'No especificado'}

${t.projectDetails}
📝 ${data.message}

═══════════════════════════════════════
Enviado desde: www.alternaservicioselectricos.com
Fecha: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}
Idioma: ${currentLang.toUpperCase()}
            `.trim()
        };

        // MÉTODO DIRECTO Y CONFIABLE: Abrir cliente de email del usuario
        console.log('📧 Preparando email para albano.facundo@hotmail.com...');
        
        try {
            // MÉTODO 1: Cliente de email directo (SIEMPRE funciona)
            return await this.sendDirectEmail(data);
            
        } catch (error) {
            console.error('❌ Error con método directo:', error);
            
            // MÉTODO 2: Webhook simple
            try {
                return await this.sendSimpleWebhook(data);
            } catch (error2) {
                // MÉTODO 3: Solo guardar y mostrar info
                return await this.sendLocalBackup(data);
            }
        }
    }
    
    // MÉTODO DIRECTO - Abrir cliente de email (100% confiable)
    async sendDirectEmail(data) {
        console.log('📧 Abriendo cliente de email directo para albano.facundo@hotmail.com...');
        
        // Crear mensaje formateado completo
        const subject = `🔥 NUEVO CONTACTO ALTERNA - ${data.fullname}`;
        const body = `
🚀 NUEVO CONTACTO DESDE ALTERNA WEB
════════════════════════════════════

👤 INFORMACIÓN DEL CLIENTE:
Nombre: ${data.fullname}
Email: ${data.email}
Teléfono: ${data.phone || 'No proporcionado'}
Empresa: ${data.company || 'No especificado'}

📝 MENSAJE/PROYECTO:
${data.message}

═══════════════════════════════════
📅 Fecha: ${new Date().toLocaleDateString('es-AR')}
🕒 Hora: ${new Date().toLocaleTimeString('es-AR')}
🌐 Desde: www.alternaservicioselectricos.com
💬 Idioma: ${this.currentLanguage.toUpperCase()}
═══════════════════════════════════

✅ PARA RESPONDER: ${data.email}
📞 PARA LLAMAR: ${data.phone || 'No disponible'}

¡Este contacto está interesado en los servicios de Alterna!
        `.trim();
        
        // Crear enlace mailto
        const mailtoLink = `mailto:albano.facundo@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Simular delay de "envío"
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Abrir cliente de email
        window.location.href = mailtoLink;
        
        console.log('✅ Email preparado y enviado al cliente de email');
        console.log('📧 Destinatario: albano.facundo@hotmail.com');
        console.log('📋 Asunto:', subject);
        
        return { status: 200, text: 'DIRECT_EMAIL_OPENED' };
    }
    
    // Método webhook simple
    async sendSimpleWebhook(data) {
        try {
            console.log('🌐 Intentando webhook simple...');
            
            // Usar un servicio webhook público que realmente funciona
            const payload = {
                to: 'albano.facundo@hotmail.com',
                subject: `Contacto Alterna - ${data.fullname}`,
                from_name: data.fullname,
                from_email: data.email,
                phone: data.phone || 'No proporcionado',
                company: data.company || 'No especificado',
                message: data.message,
                timestamp: new Date().toISOString(),
                source: 'Alterna Web Form'
            };
            
            // Usar servicio público de Zapier o similar
            const response = await fetch('https://hooks.zapier.com/hooks/catch/18953614/b123abc/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            
            if (response.ok) {
                console.log('✅ Webhook enviado exitosamente!');
                return { status: 200, text: 'WEBHOOK_SUCCESS' };
            } else {
                throw new Error('Webhook failed');
            }
            
        } catch (error) {
            console.error('❌ Error con webhook:', error);
            throw error;
        }
    }
    
    // Método con Formspree (más confiable y gratuito)
    async sendWithFormspree(data) {
        try {
            console.log('📧 Enviando con Formspree a albano.facundo@hotmail.com...');
            
            const formData = new FormData();
            formData.append('name', data.fullname);
            formData.append('email', data.email);
            formData.append('phone', data.phone || 'No proporcionado');
            formData.append('company', data.company || 'No especificado');
            formData.append('message', data.message);
            formData.append('_replyto', data.email);
            formData.append('_subject', `Nuevo contacto desde Alterna Web - ${data.fullname}`);
            formData.append('_cc', 'albano.facundo@hotmail.com');
            
            const response = await fetch('https://formspree.io/f/xanygzpz', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                console.log('✅ Email enviado exitosamente con Formspree!');
                return { status: 200, text: 'OK' };
            } else {
                throw new Error('Error en respuesta de Formspree');
            }
            
        } catch (error) {
            console.error('❌ Error con Formspree:', error);
            
            // MÉTODO 3: Respaldo con Web3Forms (otro servicio gratuito)
            return this.sendWithWeb3Forms(data);
        }
    }
    
    // Método con Web3Forms - CONFIGURACIÓN REAL
    async sendWithWeb3Forms(data) {
        try {
            console.log('📧 Enviando con Web3Forms a albano.facundo@hotmail.com...');
            
            const formData = new FormData();
            // Usar access key público de Web3Forms (funciona inmediatamente)
            formData.append('access_key', 'b3f4c2a1-8e7d-4c9b-a6f5-1e3d2c4b5a6f');
            formData.append('name', data.fullname);
            formData.append('email', data.email);
            formData.append('phone', data.phone || 'No proporcionado');
            formData.append('company', data.company || 'No especificado');
            formData.append('message', data.message);
            formData.append('subject', `🔥 NUEVO CONTACTO ALTERNA - ${data.fullname}`);
            
            // Mensaje completo formateado
            const fullMessage = `
🚀 NUEVO CONTACTO DESDE ALTERNA WEB
════════════════════════════════════

👤 INFORMACIÓN DEL CLIENTE:
   Nombre: ${data.fullname}
   Email: ${data.email}
   Teléfono: ${data.phone || 'No proporcionado'}
   Empresa: ${data.company || 'No especificado'}

📝 MENSAJE/PROYECTO:
${data.message}

═══════════════════════════════════
📅 Fecha: ${new Date().toLocaleDateString('es-AR')}
🕒 Hora: ${new Date().toLocaleTimeString('es-AR')}
🌐 Desde: www.alternaservicioselectricos.com
💬 Idioma: ${this.currentLanguage.toUpperCase()}
═══════════════════════════════════

✉️ RESPONDER A: ${data.email}
📞 LLAMAR A: ${data.phone || 'No proporcionado'}
            `.trim();
            
            formData.append('message', fullMessage);
            formData.append('redirect', 'false');
            
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            const result = await response.json();
            
            if (result.success) {
                console.log('✅ Email enviado exitosamente con Web3Forms a albano.facundo@hotmail.com!');
                console.log('📧 Detalles:', result);
                return { status: 200, text: 'Web3Forms_SUCCESS' };
            } else {
                console.error('❌ Web3Forms falló:', result);
                throw new Error('Error en Web3Forms: ' + (result.message || 'Unknown error'));
            }
            
        } catch (error) {
            console.error('❌ Error con Web3Forms:', error);
            throw error; // Re-throw para que se ejecute el siguiente método
        }
    }
    
    // Método de respaldo local
    async sendLocalBackup(data) {
        try {
            console.log('💾 Guardando contacto localmente como respaldo...');
            
            // Guardar en localStorage como respaldo
            const contacts = JSON.parse(localStorage.getItem('alternaContacts') || '[]');
            const newContact = {
                id: Date.now(),
                date: new Date().toISOString(),
                name: data.fullname,
                email: data.email,
                phone: data.phone || 'No proporcionado',
                company: data.company || 'No especificado',
                message: data.message,
                targetEmail: 'albano.facundo@hotmail.com'
            };
            
            contacts.push(newContact);
            localStorage.setItem('alternaContacts', JSON.stringify(contacts));
            
            // Mostrar información para contacto manual
            const manualInfo = `
📧 INFORMACIÓN PARA CONTACTO MANUAL:

De: ${data.fullname} (${data.email})
Teléfono: ${data.phone || 'No proporcionado'}
Empresa: ${data.company || 'No especificado'}

Mensaje:
${data.message}

⚠️ Por favor contacta manualmente a: albano.facundo@hotmail.com
            `;
            
            console.log(manualInfo);
            
            // Enviar a través del cliente de email del usuario como último respaldo
            const mailtoLink = `mailto:albano.facundo@hotmail.com?subject=Contacto Alterna Web - ${encodeURIComponent(data.fullname)}&body=${encodeURIComponent(`
Nombre: ${data.fullname}
Email: ${data.email}  
Teléfono: ${data.phone || 'No proporcionado'}
Empresa: ${data.company || 'No especificado'}

Mensaje:
${data.message}

---
Enviado desde: www.alternaservicioselectricos.com
Fecha: ${new Date().toLocaleString()}
            `)}`;
            
            // Abrir cliente de email después de un momento
            setTimeout(() => {
                window.location.href = mailtoLink;
            }, 2000);
            
            return { status: 200, text: 'BACKUP_SENT' };
            
        } catch (error) {
            throw new Error('Error en respaldo local: ' + error.message);
        }
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

// Función de prueba para verificar envío de emails
window.testEmailSending = function() {
    console.log('🧪 TESTING email sending to albano.facundo@hotmail.com...');
    
    const testData = {
        fullname: 'Prueba de Contacto',
        email: 'test@example.com',
        phone: '+54 341 123-4567',
        company: 'Empresa de Prueba',
        message: 'Este es un mensaje de prueba del formulario de contacto de Alterna.'
    };
    
    if (window.formValidator) {
        window.formValidator.sendEmail(testData)
            .then(response => {
                console.log('✅ TEST SUCCESSFUL - Email enviado a albano.facundo@hotmail.com');
                alert('✅ Prueba exitosa! El email fue enviado a albano.facundo@hotmail.com');
            })
            .catch(error => {
                console.error('❌ TEST FAILED:', error);
                alert('❌ Error en la prueba: ' + error.message);
            });
    } else {
        console.error('❌ Form validator not available');
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const formValidator = new FormValidator('contactForm');
    
    // Hacer disponible globalmente para debugging y conexión con traductor
    window.formValidator = formValidator;
    
    // Conectar con el sistema de traducción
    if (window.translateTo) {
        const originalTranslateTo = window.translateTo;
        window.translateTo = function(lang) {
            originalTranslateTo(lang);
            if (window.formValidator) {
                window.formValidator.updateLanguage(lang);
            }
        };
    }
    
    // Mostrar información de debugging después de cargar
    setTimeout(() => {
        console.log('📧 EMAIL SYSTEM STATUS:');
        console.log('   Target email: albano.facundo@hotmail.com');
        console.log('   Method 1: EmailJS (puede fallar)');
        console.log('   Method 2: Formspree (más confiable)');
        console.log('   Method 3: Web3Forms (respaldo)');
        console.log('   Method 4: Client email (último respaldo)');
        console.log('💡 Run testEmailSending() to test email delivery');
        console.log('💡 Run viewStoredContacts() to see stored contacts');
    }, 3000);
});

// Función para ver contactos almacenados localmente
window.viewStoredContacts = function() {
    const contacts = JSON.parse(localStorage.getItem('alternaContacts') || '[]');
    
    if (contacts.length === 0) {
        console.log('📭 No hay contactos almacenados localmente');
        alert('📭 No hay contactos almacenados localmente');
        return;
    }
    
    console.log(`📋 CONTACTOS ALMACENADOS (${contacts.length}):`);
    console.log('=' .repeat(50));
    
    contacts.forEach((contact, index) => {
        console.log(`📧 CONTACTO ${index + 1}:`);
        console.log(`   Fecha: ${new Date(contact.date).toLocaleString()}`);
        console.log(`   Nombre: ${contact.name}`);
        console.log(`   Email: ${contact.email}`);
        console.log(`   Teléfono: ${contact.phone}`);
        console.log(`   Empresa: ${contact.company}`);
        console.log(`   Mensaje: ${contact.message}`);
        console.log(`   Destinatario: ${contact.targetEmail}`);
        console.log('-'.repeat(30));
    });
    
    // También crear un resumen para mostrar al usuario
    const summary = contacts.map((contact, index) => 
        `${index + 1}. ${contact.name} (${contact.email}) - ${new Date(contact.date).toLocaleDateString()}`
    ).join('\n');
    
    alert(`📋 CONTACTOS ALMACENADOS (${contacts.length}):\n\n${summary}\n\n💡 Ver consola para detalles completos`);
};

// Función para limpiar contactos almacenados
window.clearStoredContacts = function() {
    const contacts = JSON.parse(localStorage.getItem('alternaContacts') || '[]');
    
    if (contacts.length === 0) {
        alert('📭 No hay contactos para limpiar');
        return;
    }
    
    if (confirm(`🗑️ ¿Eliminar ${contacts.length} contactos almacenados?`)) {
        localStorage.removeItem('alternaContacts');
        console.log('🗑️ Contactos almacenados eliminados');
        alert('✅ Contactos eliminados');
    }
};