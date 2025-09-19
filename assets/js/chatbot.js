// ===== CHATBOT ALTERNA AI MEJORADO =====

class AlternaAI {
    constructor() {
        this.chatContainer = null;
        this.messagesContainer = null;
        this.inputContainer = null;
        this.currentLanguage = 'es';
        this.isInitialized = false;
        this.isTyping = false;
        this.conversationState = 'start';
        this.userSession = {
            name: null,
            company: null,
            service: null,
            details: null
        };
        this.responses = {
            es: {
                greeting: '¡Hola! Soy el asistente virtual de Alterna. ¿En qué puedo ayudarte hoy?',
                options: [
                    'Servicios que ofrecemos',
                    'Solicitar cotización',
                    'Información de contacto',
                    'Proyectos realizados',
                    'Hablar con un especialista'
                ],
                services: {
                    message: 'Ofrecemos servicios especializados en:',
                    list: [
                        '⚡ Instalaciones Eléctricas Industriales',
                        '🔧 Mantenimiento Preventivo y Correctivo',
                        '🤖 Automatización de Procesos',
                        '📊 Tableros Eléctricos Personalizados',
                        '📏 Mediciones y Certificaciones',
                        '💡 Consultoría Técnica Especializada'
                    ],
                    question: '¿Te interesa algún servicio en particular?'
                },
                quote: {
                    message: 'Perfecto! Para preparar una cotización personalizada, necesito algunos datos:',
                    name: '¿Cuál es tu nombre?',
                    company: '¿De qué empresa nos contactas?',
                    service: '¿Qué tipo de servicio necesitas?',
                    details: 'Cuéntame más detalles sobre tu proyecto',
                    thanks: 'Excelente! Hemos recibido tu información. Un especialista se comunicará contigo en las próximas 24 horas.'
                },
                contact: {
                    message: 'Puedes contactarnos por estos medios:',
                    info: [
                        '📍 Ubicación: Rosario, Santa Fe, Argentina',
                        '📞 Teléfono: +54 341 512-3456',
                        '✉️ Email: info@alternaservicioselectricos.com',
                        '🕒 Horarios: Lunes a Viernes 8:00-18:00'
                    ]
                },
                projects: {
                    message: 'Hemos completado más de 150 proyectos exitosos incluyendo:',
                    types: [
                        '🏭 Instalaciones Industriales',
                        '🏢 Proyectos Comerciales',
                        '🏥 Instalaciones Hospitalarias',
                        '🏫 Centros Educativos',
                        '⚡ Sistemas de Energía Solar',
                        '🔒 Sistemas de Seguridad'
                    ]
                },
                specialist: {
                    message: 'Te conectaré con uno de nuestros especialistas. Por favor proporciona:',
                    form: 'Completa el formulario de contacto en la página y un ingeniero te contactará en breve.'
                },
                fallback: 'Lo siento, no entendí tu consulta. ¿Podrías reformularla o elegir una de las opciones disponibles?',
                more_help: '¿Hay algo más en lo que pueda ayudarte?',
                goodbye: '¡Gracias por contactar a Alterna! Que tengas un excelente día. ⚡'
            },
            en: {
                greeting: 'Hello! I\'m Alterna\'s virtual assistant. How can I help you today?',
                options: [
                    'Our services',
                    'Request quote',
                    'Contact information',
                    'Completed projects',
                    'Speak with specialist'
                ],
                services: {
                    message: 'We offer specialized services in:',
                    list: [
                        '⚡ Industrial Electrical Installations',
                        '🔧 Preventive and Corrective Maintenance',
                        '🤖 Process Automation',
                        '📊 Custom Electrical Panels',
                        '📏 Measurements and Certifications',
                        '💡 Specialized Technical Consulting'
                    ],
                    question: 'Are you interested in any particular service?'
                },
                quote: {
                    message: 'Perfect! To prepare a personalized quote, I need some information:',
                    name: 'What\'s your name?',
                    company: 'What company are you contacting us from?',
                    service: 'What type of service do you need?',
                    details: 'Tell me more details about your project',
                    thanks: 'Excellent! We have received your information. A specialist will contact you within the next 24 hours.'
                },
                contact: {
                    message: 'You can contact us through these channels:',
                    info: [
                        '📍 Location: Rosario, Santa Fe, Argentina',
                        '📞 Phone: +54 341 512-3456',
                        '✉️ Email: info@alternaservicioselectricos.com',
                        '🕒 Hours: Monday to Friday 8:00-18:00'
                    ]
                },
                projects: {
                    message: 'We have completed over 150 successful projects including:',
                    types: [
                        '🏭 Industrial Installations',
                        '🏢 Commercial Projects',
                        '🏥 Hospital Installations',
                        '🏫 Educational Centers',
                        '⚡ Solar Energy Systems',
                        '🔒 Security Systems'
                    ]
                },
                specialist: {
                    message: 'I\'ll connect you with one of our specialists. Please provide:',
                    form: 'Complete the contact form on the page and an engineer will contact you shortly.'
                },
                fallback: 'Sorry, I didn\'t understand your query. Could you rephrase it or choose one of the available options?',
                more_help: 'Is there anything else I can help you with?',
                goodbye: 'Thank you for contacting Alterna! Have a great day. ⚡'
            },
            pt: {
                greeting: 'Olá! Sou o assistente virtual da Alterna. Como posso ajudá-lo hoje?',
                options: [
                    'Nossos serviços',
                    'Solicitar orçamento',
                    'Informações de contato',
                    'Projetos realizados',
                    'Falar com especialista'
                ],
                services: {
                    message: 'Oferecemos serviços especializados em:',
                    list: [
                        '⚡ Instalações Elétricas Industriais',
                        '🔧 Manutenção Preventiva e Corretiva',
                        '🤖 Automação de Processos',
                        '📊 Painéis Elétricos Personalizados',
                        '📏 Medições e Certificações',
                        '💡 Consultoria Técnica Especializada'
                    ],
                    question: 'Você está interessado em algum serviço em particular?'
                },
                quote: {
                    message: 'Perfeito! Para preparar um orçamento personalizado, preciso de algumas informações:',
                    name: 'Qual é o seu nome?',
                    company: 'De que empresa você está nos contatando?',
                    service: 'Que tipo de serviço você precisa?',
                    details: 'Conte-me mais detalhes sobre seu projeto',
                    thanks: 'Excelente! Recebemos suas informações. Um especialista entrará em contato em até 24 horas.'
                },
                contact: {
                    message: 'Você pode nos contatar através destes canais:',
                    info: [
                        '📍 Localização: Rosario, Santa Fe, Argentina',
                        '📞 Telefone: +54 341 512-3456',
                        '✉️ Email: info@alternaservicioselectricos.com',
                        '🕒 Horários: Segunda a Sexta 8:00-18:00'
                    ]
                },
                projects: {
                    message: 'Completamos mais de 150 projetos bem-sucedidos incluindo:',
                    types: [
                        '🏭 Instalações Industriais',
                        '🏢 Projetos Comerciais',
                        '🏥 Instalações Hospitalares',
                        '🏫 Centros Educacionais',
                        '⚡ Sistemas de Energia Solar',
                        '🔒 Sistemas de Segurança'
                    ]
                },
                specialist: {
                    message: 'Vou conectá-lo com um de nossos especialistas. Por favor, forneça:',
                    form: 'Complete o formulário de contato na página e um engenheiro entrará em contato em breve.'
                },
                fallback: 'Desculpe, não entendi sua consulta. Poderia reformulá-la ou escolher uma das opções disponíveis?',
                more_help: 'Há mais alguma coisa em que eu possa ajudá-lo?',
                goodbye: 'Obrigado por entrar em contato com a Alterna! Tenha um ótimo dia. ⚡'
            }
        };
    }

    init() {
        this.setupChatInterface();
        this.isInitialized = true;
        this.startConversation();
        console.log('Alterna AI Chatbot initialized successfully');
    }

    setupChatInterface() {
        // Obtener el contenedor del chatbot
        const chatbotBody = document.getElementById('chatbot-body');
        if (!chatbotBody) {
            console.error('Chatbot container not found');
            return;
        }

        // Limpiar contenido existente
        chatbotBody.innerHTML = '';

        // Crear estructura del chat
        this.messagesContainer = document.createElement('div');
        this.messagesContainer.className = 'chat-messages';
        this.messagesContainer.style.cssText = `
            height: 350px;
            overflow-y: auto;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 10px 10px 0 0;
            scroll-behavior: smooth;
        `;

        this.inputContainer = document.createElement('div');
        this.inputContainer.className = 'chat-input-container';
        this.inputContainer.style.cssText = `
            padding: 1rem;
            background: white;
            border-top: 1px solid #e0e0e0;
            border-radius: 0 0 10px 10px;
        `;

        chatbotBody.appendChild(this.messagesContainer);
        chatbotBody.appendChild(this.inputContainer);
    }

    updateLanguage(lang) {
        this.currentLanguage = lang;
        if (this.isInitialized) {
            this.messagesContainer.innerHTML = '';
            this.startConversation();
        }
    }

    getResponse(key) {
        return this.responses[this.currentLanguage][key];
    }

    async startConversation() {
        await this.addBotMessage(this.getResponse('greeting'));
        setTimeout(() => {
        this.showMainOptions();
        }, 1000);
    }

    showMainOptions() {
        const options = this.getResponse('options');
        this.showOptionButtons(options, (selectedIndex) => {
            this.handleMainOption(selectedIndex);
        });
    }

    async addBotMessage(message, delay = 500) {
        if (this.isTyping) return;
        
        this.isTyping = true;
        this.showTypingIndicator();
        
        await new Promise(resolve => setTimeout(resolve, delay));
        
        this.hideTypingIndicator();
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'bot-message';
        messageDiv.style.cssText = `
            background: linear-gradient(135deg, var(--primary-color), #00d4aa);
            color: white;
            padding: 0.75rem 1rem;
            margin: 0.5rem 0;
            border-radius: 15px 15px 15px 5px;
            max-width: 80%;
            margin-left: 0;
            box-shadow: 0 2px 8px rgba(32, 178, 170, 0.3);
            animation: slideInLeft 0.3s ease-out;
        `;
        
        messageDiv.innerHTML = message.replace(/\n/g, '<br>');
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
        this.isTyping = false;
    }

    addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'user-message';
        messageDiv.style.cssText = `
            background: #007bff;
            color: white;
            padding: 0.75rem 1rem;
            margin: 0.5rem 0;
            border-radius: 15px 15px 5px 15px;
            max-width: 80%;
            margin-left: auto;
            margin-right: 0;
            text-align: right;
            box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
            animation: slideInRight 0.3s ease-out;
        `;
        
        messageDiv.textContent = message;
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    showOptionButtons(options, callback) {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'chat-options';
        buttonContainer.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin: 1rem 0;
        `;

        options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'chat-option-btn';
            button.style.cssText = `
                background: white;
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
                padding: 0.75rem 1rem;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: 500;
                text-align: left;
            `;
            
            button.textContent = option;
            button.addEventListener('click', () => {
                this.addUserMessage(option);
                buttonContainer.remove();
                callback(index);
            });
            
            button.addEventListener('mouseenter', () => {
                button.style.background = 'var(--primary-color)';
                button.style.color = 'white';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.background = 'white';
                button.style.color = 'var(--primary-color)';
            });
            
            buttonContainer.appendChild(button);
        });

        this.messagesContainer.appendChild(buttonContainer);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.style.cssText = `
            background: #e0e0e0;
            color: #666;
            padding: 0.5rem 1rem;
            margin: 0.5rem 0;
            border-radius: 15px 15px 15px 5px;
            max-width: 80%;
            animation: pulse 1.5s infinite;
        `;
        typingDiv.innerHTML = '💭 Escribiendo...';
        this.messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typing = this.messagesContainer.querySelector('.typing-indicator');
        if (typing) typing.remove();
    }

    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 100);
    }

    async handleMainOption(optionIndex) {
        switch(optionIndex) {
            case 0: // Servicios
                await this.showServices();
                break;
            case 1: // Cotización
                await this.startQuoteProcess();
                break;
            case 2: // Contacto
                await this.showContact();
                break;
            case 3: // Proyectos
                await this.showProjects();
                break;
            case 4: // Especialista
                await this.connectSpecialist();
                break;
            default:
                await this.showFallback();
        }
    }

    async showServices() {
        const services = this.getResponse('services');
        
        await this.addBotMessage(services.message);

        // Enviar servicios uno por uno con delay
        for (let service of services.list) {
            await this.addBotMessage(service, 300);
        }

        await this.addBotMessage(services.question);
        this.askForMoreHelp();
    }

    async startQuoteProcess() {
        const quote = this.getResponse('quote');
        
        await this.addBotMessage(quote.message);
        await this.addBotMessage(quote.name);
        
        // Solicitar nombre
        const name = await this.waitForUserInput('Tu nombre...');
        this.userSession.name = name;
        
        await this.addBotMessage(quote.company);
        const company = await this.waitForUserInput('Nombre de la empresa...');
        this.userSession.company = company;
        
        await this.addBotMessage(quote.service);
        const service = await this.waitForUserInput('Tipo de servicio requerido...');
        this.userSession.service = service;
        
        await this.addBotMessage(quote.details);
        const details = await this.waitForUserInput('Detalles del proyecto...');
        this.userSession.details = details;

        // Confirmación
        await this.addBotMessage(quote.thanks, 1000);

        // Llenar formulario automáticamente
        this.fillContactForm();

        this.askForMoreHelp();
    }

    waitForUserInput(placeholder) {
        return new Promise((resolve) => {
            const inputDiv = document.createElement('div');
            inputDiv.style.cssText = `
                display: flex;
                gap: 0.5rem;
                margin: 1rem 0;
            `;
            
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = placeholder;
            input.style.cssText = `
                flex: 1;
                padding: 0.75rem;
                border: 2px solid var(--primary-color);
                border-radius: 8px;
                font-size: 14px;
            `;
            
            const sendBtn = document.createElement('button');
            sendBtn.textContent = '→';
            sendBtn.style.cssText = `
                background: var(--primary-color);
                color: white;
                border: none;
                padding: 0.75rem 1rem;
                border-radius: 8px;
                cursor: pointer;
                font-weight: bold;
            `;
            
            const handleSubmit = () => {
                const value = input.value.trim();
                if (value) {
                    this.addUserMessage(value);
                    inputDiv.remove();
                    resolve(value);
                }
            };
            
            sendBtn.addEventListener('click', handleSubmit);
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleSubmit();
                }
            });
            
            inputDiv.appendChild(input);
            inputDiv.appendChild(sendBtn);
            this.messagesContainer.appendChild(inputDiv);
            this.scrollToBottom();
            
            // Enfocar el input
            setTimeout(() => input.focus(), 100);
        });
    }

    async showContact() {
        const contact = this.getResponse('contact');
        
        await this.addBotMessage(contact.message);

        for (let info of contact.info) {
            await this.addBotMessage(info, 300);
        }

        this.askForMoreHelp();
    }

    async showProjects() {
        const projects = this.getResponse('projects');
        
        await this.addBotMessage(projects.message);

        for (let type of projects.types) {
            await this.addBotMessage(type, 300);
        }

        this.askForMoreHelp();
    }

    async connectSpecialist() {
        const specialist = this.getResponse('specialist');
        
        await this.addBotMessage(specialist.message);
        await this.addBotMessage(specialist.form, 1000);

        // Scroll to contact form
        setTimeout(() => {
            const contactSection = document.getElementById('contacto');
            if (contactSection) {
                contactSection.scrollIntoView({
                behavior: 'smooth'
            });
            }
        }, 2000);

        this.askForMoreHelp();
    }

    async showFallback() {
        await this.addBotMessage(this.getResponse('fallback'));
        setTimeout(() => {
        this.showMainOptions();
        }, 1000);
    }

    askForMoreHelp() {
        setTimeout(async () => {
            await this.addBotMessage(this.getResponse('more_help'));
            
            const helpOptions = [
                this.currentLanguage === 'es' ? 'Sí, tengo otra consulta' : 
                this.currentLanguage === 'en' ? 'Yes, I have another question' : 
                'Sim, tenho outra consulta',
                this.currentLanguage === 'es' ? 'No, eso es todo' : 
                this.currentLanguage === 'en' ? 'No, that\'s all' : 
                'Não, isso é tudo'
            ];
            
            this.showOptionButtons(helpOptions, async (selectedIndex) => {
                if (selectedIndex === 0) {
                    this.showMainOptions();
                } else {
                    await this.addBotMessage(this.getResponse('goodbye'));
                }
            });
        }, 2000);
    }

    fillContactForm() {
        // Auto-fill contact form if session data exists
        if (this.userSession.name) {
            const nameField = document.getElementById('fullname');
            if (nameField) nameField.value = this.userSession.name;
        }

        if (this.userSession.company) {
            const companyField = document.getElementById('company');
            if (companyField) companyField.value = this.userSession.company;
        }

        if (this.userSession.details) {
            const messageField = document.getElementById('message');
            if (messageField) {
                messageField.value = `Servicio solicitado: ${this.userSession.service}\n\nDetalles: ${this.userSession.details}`;
            }
        }
    }
}

// Agregar estilos CSS para las animaciones
const chatStyles = `
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }

    .chat-messages::-webkit-scrollbar {
        width: 6px;
    }

    .chat-messages::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
    }

    .chat-messages::-webkit-scrollbar-thumb {
        background: var(--primary-color);
        border-radius: 3px;
    }

    .chat-messages::-webkit-scrollbar-thumb:hover {
        background: #16a085;
    }
`;

// Inyectar estilos
const chatStyleSheet = document.createElement('style');
chatStyleSheet.textContent = chatStyles;
document.head.appendChild(chatStyleSheet);

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Alterna AI
    const alternaAI = new AlternaAI();
    
    // Chatbot toggle functionality
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');

    if (chatbotToggle && chatbotWindow && chatbotClose) {
        chatbotToggle.addEventListener('click', function() {
            chatbotWindow.classList.toggle('active');
            if (chatbotWindow.classList.contains('active') && !alternaAI.isInitialized) {
                setTimeout(() => alternaAI.init(), 300);
            }
        });

        chatbotClose.addEventListener('click', function() {
            chatbotWindow.classList.remove('active');
        });

        // Close chatbot when clicking outside
        document.addEventListener('click', function(e) {
            if (!chatbotToggle.contains(e.target) && !chatbotWindow.contains(e.target)) {
                chatbotWindow.classList.remove('active');
            }
        });
        
        // Prevenir el cierre al hacer click dentro del chatbot
        chatbotWindow.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    } else {
        console.warn('Chatbot elements not found:', { chatbotToggle, chatbotWindow, chatbotClose });
    }

    // Make alternaAI globally available for language switching
    window.alternaAI = alternaAI;
    
    console.log('🤖 Alterna AI Chatbot loaded and ready!');
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AlternaAI;
}
