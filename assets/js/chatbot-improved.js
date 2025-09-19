// ===== CHATBOT ALTERNA AI MEJORADO =====

class AlternaAIImproved {
    constructor() {
        this.currentLanguage = 'es';
        this.isInitialized = false;
        this.isOpen = false;
        this.messageIndex = 0;
        this.conversation = [];
        this.userSession = {
            name: null,
            company: null,
            service: null,
            details: null
        };
        
        // Respuestas por idioma
        this.responses = {
            es: {
                greeting: '¡Hola! 👋 Soy el asistente virtual de Alterna. ¿En qué puedo ayudarte hoy?',
                options: [
                    '⚡ Servicios que ofrecemos',
                    '💰 Solicitar cotización',
                    '📞 Información de contacto', 
                    '🏗️ Proyectos realizados',
                    '👨‍💼 Hablar con un especialista'
                ],
                services: {
                    message: 'Ofrecemos servicios especializados en instalaciones eléctricas:',
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
                    message: 'Hemos completado más de 150 proyectos exitosos:',
                    types: [
                        '🏭 Instalaciones Industriales',
                        '🏢 Proyectos Comerciales', 
                        '🏥 Instalaciones Hospitalarias',
                        '🏫 Centros Educativos',
                        '⚡ Sistemas de Energía Solar',
                        '🔒 Sistemas de Seguridad'
                    ]
                },
                quote: {
                    start: 'Perfecto! Te ayudaré a solicitar una cotización. Completa nuestro formulario de contacto y un especialista te responderá en menos de 2 horas.',
                    redirect: '¿Te llevo directamente al formulario?'
                },
                specialist: {
                    message: 'Te conectaré con uno de nuestros ingenieros especialistas.',
                    redirect: 'Completa el formulario de contacto y un ingeniero te contactará en breve.'
                },
                more_help: '¿Hay algo más en lo que pueda ayudarte?',
                goodbye: '¡Gracias por contactar a Alterna! Que tengas un excelente día. ⚡',
                yes: 'Sí',
                no: 'No, eso es todo',
                go_to_form: 'Ir al formulario',
                main_menu: 'Menú principal'
            },
            en: {
                greeting: 'Hello! 👋 I\'m Alterna\'s virtual assistant. How can I help you today?',
                options: [
                    '⚡ Our services',
                    '💰 Request quote',
                    '📞 Contact information',
                    '🏗️ Completed projects', 
                    '👨‍💼 Speak with specialist'
                ],
                services: {
                    message: 'We offer specialized electrical installation services:',
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
                    message: 'We have completed over 150 successful projects:',
                    types: [
                        '🏭 Industrial Installations',
                        '🏢 Commercial Projects',
                        '🏥 Hospital Installations', 
                        '🏫 Educational Centers',
                        '⚡ Solar Energy Systems',
                        '🔒 Security Systems'
                    ]
                },
                quote: {
                    start: 'Perfect! I\'ll help you request a quote. Complete our contact form and a specialist will respond in less than 2 hours.',
                    redirect: 'Should I take you directly to the form?'
                },
                specialist: {
                    message: 'I\'ll connect you with one of our specialist engineers.',
                    redirect: 'Complete the contact form and an engineer will contact you shortly.'
                },
                more_help: 'Is there anything else I can help you with?',
                goodbye: 'Thank you for contacting Alterna! Have a great day. ⚡',
                yes: 'Yes',
                no: 'No, that\'s all',
                go_to_form: 'Go to form',
                main_menu: 'Main menu'
            },
            pt: {
                greeting: 'Olá! 👋 Sou o assistente virtual da Alterna. Como posso ajudá-lo hoje?',
                options: [
                    '⚡ Nossos serviços',
                    '💰 Solicitar orçamento', 
                    '📞 Informações de contato',
                    '🏗️ Projetos realizados',
                    '👨‍💼 Falar com especialista'
                ],
                services: {
                    message: 'Oferecemos serviços especializados em instalações elétricas:',
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
                    message: 'Completamos mais de 150 projetos bem-sucedidos:',
                    types: [
                        '🏭 Instalações Industriais',
                        '🏢 Projetos Comerciais',
                        '🏥 Instalações Hospitalares',
                        '🏫 Centros Educacionais',
                        '⚡ Sistemas de Energia Solar',
                        '🔒 Sistemas de Segurança'
                    ]
                },
                quote: {
                    start: 'Perfeito! Vou ajudá-lo a solicitar um orçamento. Complete nosso formulário de contato e um especialista responderá em menos de 2 horas.',
                    redirect: 'Devo levá-lo diretamente ao formulário?'
                },
                specialist: {
                    message: 'Vou conectá-lo com um de nossos engenheiros especialistas.',
                    redirect: 'Complete o formulário de contato e um engenheiro entrará em contato em breve.'
                },
                more_help: 'Há mais alguma coisa em que eu possa ajudá-lo?',
                goodbye: 'Obrigado por entrar em contato com a Alterna! Tenha um ótimo dia. ⚡',
                yes: 'Sim',
                no: 'Não, isso é tudo',
                go_to_form: 'Ir para o formulário',
                main_menu: 'Menu principal'
            }
        };

        this.init();
    }

    init() {
        this.setupChatbotHTML();
        this.setupEventListeners();
        console.log('✅ Alterna AI Chatbot mejorado inicializado');
    }

    setupChatbotHTML() {
        // Verificar si ya existe el contenedor
        let container = document.getElementById('chatbot-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'chatbot-container';
            container.className = 'chatbot-container';
            document.body.appendChild(container);
        }

        container.innerHTML = `
            <div id="chatbot-toggle" class="chatbot-toggle">
                <i class="fas fa-robot"></i>
                <span class="chatbot-badge">AI</span>
            </div>
            
            <div id="chatbot-window" class="chatbot-window">
                <div class="chatbot-header">
                    <h3 id="chatbot-title">Asistente Alterna AI</h3>
                    <button id="chatbot-close" class="chatbot-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div id="chatbot-body" class="chatbot-body">
                    <div id="chatbot-messages" class="chatbot-messages"></div>
                    <div id="chatbot-input-area" class="chatbot-input-area"></div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        const toggle = document.getElementById('chatbot-toggle');
        const window = document.getElementById('chatbot-window');
        const close = document.getElementById('chatbot-close');

        if (toggle) {
            toggle.addEventListener('click', () => this.toggleChatbot());
        }

        if (close) {
            close.addEventListener('click', () => this.closeChatbot());
        }

        // Cerrar al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!toggle?.contains(e.target) && !window?.contains(e.target)) {
                this.closeChatbot();
            }
        });
    }

    toggleChatbot() {
        const window = document.getElementById('chatbot-window');
        if (!window) return;

        if (window.classList.contains('active')) {
            this.closeChatbot();
        } else {
            this.openChatbot();
        }
    }

    openChatbot() {
        const window = document.getElementById('chatbot-window');
        if (!window) return;

        window.classList.add('active');
        this.isOpen = true;

        if (!this.isInitialized) {
            setTimeout(() => {
                this.startConversation();
                this.isInitialized = true;
            }, 300);
        }
    }

    closeChatbot() {
        const window = document.getElementById('chatbot-window');
        if (!window) return;

        window.classList.remove('active');
        this.isOpen = false;
    }

    updateLanguage(lang) {
        this.currentLanguage = lang;
        
        // Actualizar título
        const title = document.getElementById('chatbot-title');
        if (title) {
            const titles = {
                'es': 'Asistente Alterna AI',
                'en': 'Alterna AI Assistant', 
                'pt': 'Assistente Alterna AI'
            };
            title.textContent = titles[lang] || titles['es'];
        }

        if (this.isInitialized && this.isOpen) {
            this.clearMessages();
            setTimeout(() => this.startConversation(), 200);
        }
    }

    getResponse(key) {
        const keys = key.split('.');
        let response = this.responses[this.currentLanguage];
        
        for (const k of keys) {
            response = response[k];
            if (!response) break;
        }
        
        return response || key;
    }

    clearMessages() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const inputArea = document.getElementById('chatbot-input-area');
        
        if (messagesContainer) messagesContainer.innerHTML = '';
        if (inputArea) inputArea.innerHTML = '';
        
        this.conversation = [];
        this.messageIndex = 0;
    }

    async startConversation() {
        await this.addBotMessage(this.getResponse('greeting'));
        this.showMainOptions();
    }

    async addBotMessage(content, delay = 800) {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (!messagesContainer) return;

        // Mostrar indicador de typing
        this.showTypingIndicator();

        return new Promise(resolve => {
            setTimeout(() => {
                this.hideTypingIndicator();
                
                const messageElement = document.createElement('div');
                messageElement.className = 'chatbot-message bot-message';
                messageElement.innerHTML = `
                    <div class="message-content">
                        <div class="message-text">${content}</div>
                        <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                    </div>
                `;

                messagesContainer.appendChild(messageElement);
                this.scrollToBottom();
                this.conversation.push({type: 'bot', content});
                resolve();
            }, delay);
        });
    }

    addUserMessage(content) {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (!messagesContainer) return;

        const messageElement = document.createElement('div');
        messageElement.className = 'chatbot-message user-message';
        messageElement.innerHTML = `
            <div class="message-content">
                <div class="message-text">${content}</div>
                <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
            </div>
        `;

        messagesContainer.appendChild(messageElement);
        this.scrollToBottom();
        this.conversation.push({type: 'user', content});
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (!messagesContainer) return;

        const typingElement = document.createElement('div');
        typingElement.className = 'chatbot-message bot-message typing-indicator';
        typingElement.innerHTML = `
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;

        messagesContainer.appendChild(typingElement);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    showMainOptions() {
        const options = this.getResponse('options');
        this.showButtons(options, (index) => this.handleMainOption(index));
    }

    showButtons(options, onClickCallback) {
        const inputArea = document.getElementById('chatbot-input-area');
        if (!inputArea) return;

        inputArea.innerHTML = `
            <div class="chatbot-buttons">
                ${options.map((option, index) => 
                    `<button class="chatbot-button" data-index="${index}">${option}</button>`
                ).join('')}
            </div>
        `;

        // Agregar event listeners
        inputArea.querySelectorAll('.chatbot-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                const text = e.target.textContent;
                
                this.addUserMessage(text);
                inputArea.innerHTML = '';
                onClickCallback(index);
            });
        });
    }

    async handleMainOption(optionIndex) {
        switch(optionIndex) {
            case 0: // Servicios
                await this.showServices();
                break;
            case 1: // Cotización
                await this.showQuote();
                break;
            case 2: // Contacto
                await this.showContact();
                break;
            case 3: // Proyectos
                await this.showProjects();
                break;
            case 4: // Especialista
                await this.showSpecialist();
                break;
            default:
                await this.showFallback();
        }
    }

    async showServices() {
        const services = this.getResponse('services');
        
        await this.addBotMessage(services.message);
        
        for (const service of services.list) {
            await this.addBotMessage(service, 200);
        }
        
        await this.addBotMessage(services.question, 400);
        this.askForMoreHelp();
    }

    async showQuote() {
        const quote = this.getResponse('quote');
        
        await this.addBotMessage(quote.start);
        await this.addBotMessage(quote.redirect);
        
        this.showButtons([
            this.getResponse('go_to_form'),
            this.getResponse('main_menu')
        ], (index) => {
            if (index === 0) {
                this.goToContactForm();
            } else {
                this.showMainOptions();
            }
        });
    }

    async showContact() {
        const contact = this.getResponse('contact');
        
        await this.addBotMessage(contact.message);
        
        for (const info of contact.info) {
            await this.addBotMessage(info, 200);
        }
        
        this.askForMoreHelp();
    }

    async showProjects() {
        const projects = this.getResponse('projects');
        
        await this.addBotMessage(projects.message);
        
        for (const type of projects.types) {
            await this.addBotMessage(type, 200);
        }
        
        this.askForMoreHelp();
    }

    async showSpecialist() {
        const specialist = this.getResponse('specialist');
        
        await this.addBotMessage(specialist.message);
        await this.addBotMessage(specialist.redirect);
        
        this.showButtons([
            this.getResponse('go_to_form'),
            this.getResponse('main_menu')
        ], (index) => {
            if (index === 0) {
                this.goToContactForm();
            } else {
                this.showMainOptions();
            }
        });
    }

    async showFallback() {
        await this.addBotMessage('Lo siento, no entendí tu consulta. ¿Podrías elegir una de las opciones disponibles?');
        this.showMainOptions();
    }

    askForMoreHelp() {
        setTimeout(async () => {
            await this.addBotMessage(this.getResponse('more_help'));
            
            this.showButtons([
                this.getResponse('yes'),
                this.getResponse('no')
            ], async (index) => {
                if (index === 0) {
                    this.showMainOptions();
                } else {
                    await this.addBotMessage(this.getResponse('goodbye'));
                }
            });
        }, 1500);
    }

    goToContactForm() {
        // Cerrar chatbot
        this.closeChatbot();
        
        // Scroll al formulario de contacto
        setTimeout(() => {
            const contactSection = document.getElementById('contacto');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Focus en el primer campo del formulario
                setTimeout(() => {
                    const firstInput = document.getElementById('fullname');
                    if (firstInput) {
                        firstInput.focus();
                    }
                }, 1000);
            }
        }, 500);
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbot-messages');
        if (messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }
}

// Estilos adicionales para el chatbot mejorado
const additionalStyles = `
.chatbot-messages {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    max-height: 350px;
}

.chatbot-message {
    display: flex;
    animation: messageSlideIn 0.3s ease-out;
}

.chatbot-message.bot-message {
    justify-content: flex-start;
}

.chatbot-message.user-message {
    justify-content: flex-end;
}

.chatbot-message .message-content {
    max-width: 85%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 0.75rem;
    position: relative;
}

.chatbot-message.user-message .message-content {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    border-color: var(--primary-color);
    color: white;
}

.chatbot-message .message-text {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 0.25rem;
}

.chatbot-message .message-time {
    font-size: 0.7rem;
    opacity: 0.6;
    text-align: right;
}

.typing-indicator .typing-dots {
    display: flex;
    gap: 0.25rem;
    align-items: center;
}

.typing-indicator .typing-dots span {
    width: 6px;
    height: 6px;
    background: var(--primary-color);
    border-radius: 50%;
    animation: typingDot 1.4s infinite ease-in-out both;
}

.typing-indicator .typing-dots span:nth-child(1) { animation-delay: -0.32s; }
.typing-indicator .typing-dots span:nth-child(2) { animation-delay: -0.16s; }

@keyframes typingDot {
    0%, 80%, 100% {
        transform: scale(0);
        opacity: 0.5;
    }
    40% {
        transform: scale(1);
        opacity: 1;
    }
}

.chatbot-input-area {
    padding: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(10, 15, 20, 0.8);
}

.chatbot-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.chatbot-button {
    background: rgba(32, 178, 170, 0.2);
    border: 1px solid rgba(32, 178, 170, 0.4);
    color: var(--text-primary);
    padding: 0.75rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
    font-size: 0.85rem;
    line-height: 1.3;
}

.chatbot-button:hover {
    background: rgba(32, 178, 170, 0.4);
    border-color: var(--primary-color);
    color: white;
    transform: translateY(-1px);
}

.chatbot-button:active {
    transform: translateY(0);
}

.chatbot-messages::-webkit-scrollbar {
    width: 4px;
}

.chatbot-messages::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
}

.chatbot-messages::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 2px;
}

.chatbot-messages::-webkit-scrollbar-thumb:hover {
    background: var(--accent-color);
}

@keyframes messageSlideIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

// Inyectar estilos
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Crear instancia del chatbot mejorado
    window.alternaAI = new AlternaAIImproved();
    
    // Integrar con el sistema de traducción
    if (window.translateTo) {
        const originalTranslateTo = window.translateTo;
        window.translateTo = function(lang) {
            originalTranslateTo(lang);
            if (window.alternaAI && window.alternaAI.updateLanguage) {
                window.alternaAI.updateLanguage(lang);
            }
        };
    }
});

// Exportar para uso como módulo
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AlternaAIImproved;
}