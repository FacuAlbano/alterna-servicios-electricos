// ===== CHATBOT ALTERNA AI =====

class AlternaAI {
    constructor() {
        this.botui = null;
        this.currentLanguage = 'es';
        this.isInitialized = false;
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
        
        this.userSession = {
            name: null,
            company: null,
            service: null,
            details: null
        };
    }

    init() {
        if (typeof BotUI === 'undefined') {
            console.log('BotUI not loaded yet, retrying...');
            setTimeout(() => this.init(), 1000);
            return;
        }

        this.botui = BotUI('botui-app');
        this.isInitialized = true;
        this.startConversation();
        console.log('Alterna AI Chatbot initialized');
    }

    updateLanguage(lang) {
        this.currentLanguage = lang;
        if (this.isInitialized) {
            this.botui.message.removeAll();
            this.startConversation();
        }
    }

    getResponse(key) {
        return this.responses[this.currentLanguage][key];
    }

    async startConversation() {
        await this.botui.message.add({
            content: this.getResponse('greeting'),
            delay: 500
        });

        this.showMainOptions();
    }

    showMainOptions() {
        const options = this.getResponse('options');
        this.botui.action.button({
            action: options.map((option, index) => ({
                text: option,
                value: index
            }))
        }).then((res) => {
            this.handleMainOption(res.value);
        });
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
        
        await this.botui.message.add({
            content: services.message,
            delay: 500
        });

        for (let service of services.list) {
            await this.botui.message.add({
                content: service,
                delay: 300
            });
        }

        await this.botui.message.add({
            content: services.question,
            delay: 500
        });

        this.askForMoreHelp();
    }

    async startQuoteProcess() {
        const quote = this.getResponse('quote');
        
        await this.botui.message.add({
            content: quote.message,
            delay: 500
        });

        // Nombre
        await this.botui.message.add({
            content: quote.name,
            delay: 500
        });

        const nameRes = await this.botui.action.text({
            action: {
                placeholder: 'Tu nombre...'
            }
        });

        this.userSession.name = nameRes.value;

        // Empresa
        await this.botui.message.add({
            content: quote.company,
            delay: 500
        });

        const companyRes = await this.botui.action.text({
            action: {
                placeholder: 'Nombre de la empresa...'
            }
        });

        this.userSession.company = companyRes.value;

        // Servicio
        await this.botui.message.add({
            content: quote.service,
            delay: 500
        });

        const serviceRes = await this.botui.action.text({
            action: {
                placeholder: 'Tipo de servicio requerido...'
            }
        });

        this.userSession.service = serviceRes.value;

        // Detalles
        await this.botui.message.add({
            content: quote.details,
            delay: 500
        });

        const detailsRes = await this.botui.action.text({
            action: {
                placeholder: 'Detalles del proyecto...'
            }
        });

        this.userSession.details = detailsRes.value;

        // Confirmación
        await this.botui.message.add({
            content: quote.thanks,
            delay: 1000
        });

        // Enviar datos al formulario (opcional)
        this.fillContactForm();

        this.askForMoreHelp();
    }

    async showContact() {
        const contact = this.getResponse('contact');
        
        await this.botui.message.add({
            content: contact.message,
            delay: 500
        });

        for (let info of contact.info) {
            await this.botui.message.add({
                content: info,
                delay: 300
            });
        }

        this.askForMoreHelp();
    }

    async showProjects() {
        const projects = this.getResponse('projects');
        
        await this.botui.message.add({
            content: projects.message,
            delay: 500
        });

        for (let type of projects.types) {
            await this.botui.message.add({
                content: type,
                delay: 300
            });
        }

        this.askForMoreHelp();
    }

    async connectSpecialist() {
        const specialist = this.getResponse('specialist');
        
        await this.botui.message.add({
            content: specialist.message,
            delay: 500
        });

        await this.botui.message.add({
            content: specialist.form,
            delay: 1000
        });

        // Scroll to contact form
        setTimeout(() => {
            document.getElementById('contacto').scrollIntoView({
                behavior: 'smooth'
            });
        }, 2000);

        this.askForMoreHelp();
    }

    async showFallback() {
        await this.botui.message.add({
            content: this.getResponse('fallback'),
            delay: 500
        });

        this.showMainOptions();
    }

    askForMoreHelp() {
        setTimeout(async () => {
            await this.botui.message.add({
                content: this.getResponse('more_help'),
                delay: 500
            });

            this.botui.action.button({
                action: [
                    { text: 'Sí, tengo otra consulta', value: 'yes' },
                    { text: 'No, eso es todo', value: 'no' }
                ]
            }).then(async (res) => {
                if (res.value === 'yes') {
                    this.showMainOptions();
                } else {
                    await this.botui.message.add({
                        content: this.getResponse('goodbye'),
                        delay: 500
                    });
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
    }

    // Make alternaAI globally available for language switching
    window.alternaAI = alternaAI;
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AlternaAI;
}
