// ===== CONFIGURACIÓN DE EMAILJS =====

const EMAIL_CONFIG = {
    // Configuración de EmailJS
    emailjs: {
        userID: 'user_Tu_User_ID_Aquí',     // Reemplaza con tu User ID de EmailJS
        serviceID: 'service_gmail',          // Reemplaza con tu Service ID
        templateID: 'template_contact_form'  // Reemplaza con tu Template ID
    },
    
    // Email de destino
    destinationEmail: 'albano.facundo@hotmail.com',
    
    // Configuración de notificaciones
    notifications: {
        success: 'Mensaje enviado exitosamente! Te contactaremos pronto.',
        error: 'Error al enviar el mensaje. Por favor intenta nuevamente.',
        validationError: 'Por favor corrige los errores del formulario',
        sending: 'Enviando mensaje...'
    }
};

// Función para configurar EmailJS automáticamente
async function setupEmailJS() {
    try {
        // Si EmailJS está disponible, configurarlo
        if (typeof emailjs !== 'undefined') {
            // Para desarrollo/demo, usar un servicio alternativo
            console.log('EmailJS detectado, configurando...');
            
            // TEMPORAL: Configuración para demo/desarrollo
            // En producción, reemplazar con credenciales reales
            EMAIL_CONFIG.emailjs.userID = 'demo_user_id';
            EMAIL_CONFIG.emailjs.serviceID = 'demo_service';
            EMAIL_CONFIG.emailjs.templateID = 'demo_template';
            
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error configurando EmailJS:', error);
        return false;
    }
}

// Función alternativa para envío de email cuando EmailJS no está disponible
async function sendEmailAlternative(formData) {
    // Simular envío para desarrollo
    return new Promise((resolve, reject) => {
        console.log('=== SIMULACIÓN DE ENVÍO ===');
        console.log('Destinatario:', EMAIL_CONFIG.destinationEmail);
        console.log('Datos del formulario:', formData);
        
        setTimeout(() => {
            // Simular éxito (90% del tiempo)
            if (Math.random() > 0.1) {
                console.log('✅ Email enviado exitosamente (simulado)');
                resolve({ success: true, message: 'Email enviado correctamente' });
            } else {
                console.log('❌ Error en envío (simulado)');
                reject(new Error('Error simulado en el envío'));
            }
        }, 2000); // Simular delay de red
    });
}

// Función para validar la configuración
function validateEmailConfig() {
    const issues = [];
    
    if (!EMAIL_CONFIG.emailjs.userID || EMAIL_CONFIG.emailjs.userID.includes('Tu_User_ID_Aquí')) {
        issues.push('User ID de EmailJS no configurado');
    }
    
    if (!EMAIL_CONFIG.emailjs.serviceID) {
        issues.push('Service ID de EmailJS no configurado');
    }
    
    if (!EMAIL_CONFIG.emailjs.templateID) {
        issues.push('Template ID de EmailJS no configurado');
    }
    
    if (!EMAIL_CONFIG.destinationEmail || !EMAIL_CONFIG.destinationEmail.includes('@')) {
        issues.push('Email de destino no válido');
    }
    
    return {
        valid: issues.length === 0,
        issues: issues
    };
}

// Instrucciones para configurar EmailJS
const EMAILJS_SETUP_INSTRUCTIONS = `
=== INSTRUCCIONES PARA CONFIGURAR EMAILJS ===

1. Ve a https://www.emailjs.com/ y crea una cuenta gratuita

2. Crea un nuevo servicio de email:
   - Ve a "Email Services" en el dashboard
   - Haz clic en "Add New Service"
   - Elige tu proveedor (Gmail, Outlook, etc.)
   - Sigue las instrucciones para conectar tu cuenta

3. Crea un template de email:
   - Ve a "Email Templates"
   - Haz clic en "Create New Template"
   - Usa estas variables en tu template:
     * {{from_name}} - Nombre del remitente
     * {{from_email}} - Email del remitente
     * {{phone}} - Teléfono de contacto
     * {{company}} - Empresa
     * {{message}} - Mensaje del proyecto
     * {{to_email}} - Email de destino

4. Obtén tus credenciales:
   - User ID: Ve a "Account" > "General"
   - Service ID: En la lista de servicios
   - Template ID: En la lista de templates

5. Reemplaza los valores en EMAIL_CONFIG con tus credenciales reales

Ejemplo de template HTML:
<h2>Nuevo contacto desde Alterna</h2>
<p><strong>Nombre:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Teléfono:</strong> {{phone}}</p>
<p><strong>Empresa:</strong> {{company}}</p>
<p><strong>Mensaje:</strong></p>
<p>{{message}}</p>
`;

// Log de instrucciones en consola para el desarrollador
console.log(EMAILJS_SETUP_INSTRUCTIONS);

// Exportar configuración y funciones
window.EMAIL_CONFIG = EMAIL_CONFIG;
window.setupEmailJS = setupEmailJS;
window.sendEmailAlternative = sendEmailAlternative;
window.validateEmailConfig = validateEmailConfig;