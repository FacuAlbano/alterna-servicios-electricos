// ===== TRADUCTOR FUNCIONAL =====
let currentLanguage = 'es';

const translations = {
    es: {
        // Navegación
        'nav': ['Inicio', 'Nosotros', 'Servicios', 'Proyectos', 'Clientes', 'Contacto'],
        // Hero
        'hero-title': 'ALTERNA',
        'hero-subtitle': 'Servicios Eléctricos',
        'hero-description': 'Alterna es una empresa joven con un staff de Ingenieros y una metodología de trabajo profesionalizada que busca brindar soluciones en instalaciones eléctricas, en todo tipo de obras civiles e industriales.',
        'btn-about': 'Sobre Nosotros',
        'btn-services': 'Servicios',
        // Sobre Nosotros
        'about-title': 'Números que Hablan',
        'about-subtitle': 'Experiencia y Profesionalismo',
        'about-description': 'Resultados que demuestran nuestro compromiso y excelencia en cada proyecto',
        'about-experience': 'Años de Experiencia',
        'about-projects': 'Proyectos Completados',
        'about-clients': 'Clientes Satisfechos',
        'about-specialists': 'Especialistas',
        'about-exp-desc': 'Instalaciones eléctricas exitosas en diversas industrias',
        'about-proj-desc': 'Empresas que confían en nuestros servicios especializados',
        'about-cli-desc': 'Desde 2018 revolucionando el sector eléctrico',
        'about-spec-desc': 'Equipo altamente capacitado en tecnologías avanzadas',
        // Sección Bienvenidos
        'welcome-title': 'Bienvenidos a Alterna',
        'welcome-description': 'Alterna es una empresa joven con un staff de Ingenieros y una metodología de trabajo profesionalizada que busca brindar soluciones en instalaciones eléctricas, en todo tipo de obras civiles e industriales.',
        // Métricas descripción adicional
        'about-description': 'Resultados que demuestran nuestro compromiso y excelencia en cada proyecto',
        // Timeline
        'timeline-title': 'Nuestra Historia',
        'timeline-subtitle': 'Creciendo Juntos',
        'timeline-2018-title': 'Fundación',
        'timeline-2018-desc': 'Alterna inicia sus actividades como una empresa joven con un equipo de ingenieros eléctricos y electrónicos especializados en buscar soluciones prácticas y eficientes para cada cliente.',
        'timeline-2020-title': 'Crecimiento y Especialización',
        'timeline-2020-desc': 'Incorporación de tecnologías de medición avanzadas y sistemas de análisis. Ampliación del equipo técnico y desarrollo de metodologías de trabajo profesionalizadas.',
        'timeline-2022-title': 'Expansión en Energías Renovables',
        'timeline-2022-desc': 'Nos especializamos en instalación de sistemas de energía solar y optimización energética. Obtención de certificaciones para proyectos de eficiencia energética.',
        'timeline-2024-title': 'Liderazgo e Innovación',
        'timeline-2024-desc': 'Consolidación como empresa líder en servicios eléctricos industriales. Integración de tecnologías modernas para diagnósticos predictivos y mantenimiento inteligente.',
        // Servicios
        'services-title': 'Nuestros Servicios',
        'services-subtitle': 'Soluciones Eléctricas Integrales',
        'service-1-title': 'Instalaciones Eléctricas',
        'service-1-desc': 'Diseño e instalación de sistemas eléctricos completos para todo tipo de proyectos.',
        'service-2-title': 'Mantenimiento Industrial',
        'service-2-desc': 'Servicios de mantenimiento preventivo y correctivo para equipos industriales.',
        'service-3-title': 'Automatización',
        'service-3-desc': 'Sistemas de control y automatización para optimizar procesos industriales.',
        'service-4-title': 'Tableros Eléctricos',
        'service-4-desc': 'Fabricación y armado de tableros eléctricos según normativas vigentes.',
        'service-5-title': 'Mediciones',
        'service-5-desc': 'Mediciones eléctricas especializadas y certificaciones de calidad.',
        'service-6-title': 'Consultoría Técnica',
        'service-6-desc': 'Asesoramiento técnico especializado para proyectos eléctricos complejos.',
        // Proyectos
        'projects-title': 'Proyectos Realizados',
        'projects-subtitle': 'Calidad en Cada Detalle',
        'project-view': 'Ver Proyecto',
        // Clientes
        'clients-title': 'Nuestros Clientes',
        'clients-subtitle': 'Empresas que Confían en Nosotros',
        // Contacto
        'contact-title': 'Contáctanos',
        'contact-subtitle': 'Estamos Aquí Para Ayudarte',
        'contact-name': 'Nombre',
        'contact-email': 'Email',
        'contact-message': 'Mensaje',
        'contact-send': 'Enviar Mensaje',
        'contact-info-title': 'Información de Contacto',
        'contact-address': 'Dirección',
        'contact-phone': 'Teléfono',
        'contact-email-label': 'Email',
        // Formulario expandido
        'form-fullname': 'Nombre Completo',
        'form-phone': 'Teléfono de Contacto',
        'form-company': 'Empresa / Organización',
        'form-company-placeholder': 'Nombre de tu empresa (opcional)',
        'form-project': 'Descripción del Proyecto',
        'form-submit': 'Iniciar Proyecto Revolucionario',
        // Chatbot
        'chatbot-title': 'Asistente Alterna AI',
        'chatbot-greeting': '¡Hola! Soy el asistente virtual de Alterna. ¿En qué puedo ayudarte hoy?',
        // Footer
        'footer-description': 'Alterna Servicios Eléctricos - Profesionalismo y calidad en cada proyecto eléctrico.',
        'footer-services': 'Servicios',
        'footer-company': 'Empresa',
        'footer-contact': 'Contacto',
        'footer-follow': 'Síguenos'
    },
    en: {
        // Navigation
        'nav': ['Home', 'About Us', 'Services', 'Projects', 'Clients', 'Contact'],
        // Hero
        'hero-title': 'ALTERNA',
        'hero-subtitle': 'Electrical Services',
        'hero-description': 'Alterna is a young company with a staff of Engineers and a professionalized work methodology that seeks to provide solutions in electrical installations, in all types of civil and industrial works.',
        'btn-about': 'About Us',
        'btn-services': 'Services',
        // About Us
        'about-title': 'Numbers That Speak',
        'about-subtitle': 'Experience and Professionalism',
        'about-description': 'Results that demonstrate our commitment and excellence in every project',
        'about-experience': 'Years of Experience',
        'about-projects': 'Completed Projects',
        'about-clients': 'Satisfied Clients',
        'about-specialists': 'Specialists',
        'about-exp-desc': 'Successful electrical installations in various industries',
        'about-proj-desc': 'Companies that trust our specialized services',
        'about-cli-desc': 'Since 2018 revolutionizing the electrical sector',
        'about-spec-desc': 'Highly trained team in advanced technologies',
        // Welcome Section
        'welcome-title': 'Welcome to Alterna',
        'welcome-description': 'Alterna is a young company with a staff of Engineers and a professionalized work methodology that seeks to provide solutions in electrical installations, in all types of civil and industrial works.',
        // Timeline
        'timeline-title': 'Our History',
        'timeline-subtitle': 'Growing Together',
        'timeline-2018-title': 'Foundation',
        'timeline-2018-desc': 'Alterna begins its activities as a young company with a team of electrical and electronic engineers specialized in finding practical and efficient solutions for each client.',
        'timeline-2020-title': 'Growth and Specialization',
        'timeline-2020-desc': 'Incorporation of advanced measurement technologies and analysis systems. Expansion of the technical team and development of professionalized work methodologies.',
        'timeline-2022-title': 'Renewable Energy Expansion',
        'timeline-2022-desc': 'We specialize in the installation of solar energy systems and energy optimization. Obtaining certifications for energy efficiency projects.',
        'timeline-2024-title': 'Leadership and Innovation',
        'timeline-2024-desc': 'Consolidation as a leading company in industrial electrical services. Integration of modern technologies for predictive diagnostics and intelligent maintenance.',
        // Services
        'services-title': 'Our Services',
        'services-subtitle': 'Comprehensive Electrical Solutions',
        'service-1-title': 'Electrical Installations',
        'service-1-desc': 'Design and installation of complete electrical systems for all types of projects.',
        'service-2-title': 'Industrial Maintenance',
        'service-2-desc': 'Preventive and corrective maintenance services for industrial equipment.',
        'service-3-title': 'Automation',
        'service-3-desc': 'Control and automation systems to optimize industrial processes.',
        'service-4-title': 'Electrical Panels',
        'service-4-desc': 'Manufacturing and assembly of electrical panels according to current regulations.',
        'service-5-title': 'Measurements',
        'service-5-desc': 'Specialized electrical measurements and quality certifications.',
        'service-6-title': 'Technical Consulting',
        'service-6-desc': 'Specialized technical advice for complex electrical projects.',
        // Projects
        'projects-title': 'Completed Projects',
        'projects-subtitle': 'Quality in Every Detail',
        'project-view': 'View Project',
        // Clients
        'clients-title': 'Our Clients',
        'clients-subtitle': 'Companies That Trust Us',
        // Contact
        'contact-title': 'Contact Us',
        'contact-subtitle': 'We Are Here To Help You',
        'contact-name': 'Name',
        'contact-email': 'Email',
        'contact-message': 'Message',
        'contact-send': 'Send Message',
        'contact-info-title': 'Contact Information',
        'contact-address': 'Address',
        'contact-phone': 'Phone',
        'contact-email-label': 'Email',
        // Extended Form
        'form-fullname': 'Full Name',
        'form-phone': 'Contact Phone',
        'form-company': 'Company / Organization',
        'form-company-placeholder': 'Your company name (optional)',
        'form-project': 'Project Description',
        'form-submit': 'Start Revolutionary Project',
        // Chatbot
        'chatbot-title': 'Alterna AI Assistant',
        'chatbot-greeting': 'Hello! I am Alterna\'s virtual assistant. How can I help you today?',
        // Footer
        'footer-description': 'Alterna Electrical Services - Professionalism and quality in every electrical project.',
        'footer-services': 'Services',
        'footer-company': 'Company',
        'footer-contact': 'Contact',
        'footer-follow': 'Follow Us'
    },
    pt: {
        // Navegação
        'nav': ['Início', 'Sobre Nós', 'Serviços', 'Projetos', 'Clientes', 'Contato'],
        // Hero
        'hero-title': 'ALTERNA',
        'hero-subtitle': 'Serviços Elétricos',
        'hero-description': 'Alterna é uma empresa jovem com uma equipe de Engenheiros e uma metodologia de trabalho profissionalizada que busca fornecer soluções em instalações elétricas, em todos os tipos de obras civis e industriais.',
        'btn-about': 'Sobre Nós',
        'btn-services': 'Serviços',
        // Sobre Nós
        'about-title': 'Números que Falam',
        'about-subtitle': 'Experiência e Profissionalismo',
        'about-description': 'Resultados que demonstram nosso compromisso e excelência em cada projeto',
        'about-experience': 'Anos de Experiência',
        'about-projects': 'Projetos Concluídos',
        'about-clients': 'Clientes Satisfeitos',
        'about-specialists': 'Especialistas',
        'about-exp-desc': 'Instalações elétricas bem-sucedidas em várias indústrias',
        'about-proj-desc': 'Empresas que confiam em nossos serviços especializados',
        'about-cli-desc': 'Desde 2018 revolucionando o setor elétrico',
        'about-spec-desc': 'Equipe altamente treinada em tecnologias avançadas',
        // Seção de Boas-vindas
        'welcome-title': 'Bem-vindos à Alterna',
        'welcome-description': 'Alterna é uma empresa jovem com uma equipe de Engenheiros e uma metodologia de trabalho profissionalizada que busca fornecer soluções em instalações elétricas, em todos os tipos de obras civis e industriais.',
        // Timeline
        'timeline-title': 'Nossa História',
        'timeline-subtitle': 'Crescendo Juntos',
        'timeline-2018-title': 'Fundação',
        'timeline-2018-desc': 'Alterna inicia suas atividades como uma empresa jovem com uma equipe de engenheiros elétricos e eletrônicos especializados em encontrar soluções práticas e eficientes para cada cliente.',
        'timeline-2020-title': 'Crescimento e Especialização',
        'timeline-2020-desc': 'Incorporação de tecnologias de medição avançadas e sistemas de análise. Expansão da equipe técnica e desenvolvimento de metodologias de trabalho profissionalizadas.',
        'timeline-2022-title': 'Expansão em Energias Renováveis',
        'timeline-2022-desc': 'Especializamo-nos na instalação de sistemas de energia solar e otimização energética. Obtenção de certificações para projetos de eficiência energética.',
        'timeline-2024-title': 'Liderança e Inovação',
        'timeline-2024-desc': 'Consolidação como empresa líder em serviços elétricos industriais. Integração de tecnologias modernas para diagnósticos preditivos e manutenção inteligente.',
        // Serviços
        'services-title': 'Nossos Serviços',
        'services-subtitle': 'Soluções Elétricas Integrais',
        'service-1-title': 'Instalações Elétricas',
        'service-1-desc': 'Design e instalação de sistemas elétricos completos para todos os tipos de projetos.',
        'service-2-title': 'Manutenção Industrial',
        'service-2-desc': 'Serviços de manutenção preventiva e corretiva para equipamentos industriais.',
        'service-3-title': 'Automação',
        'service-3-desc': 'Sistemas de controle e automação para otimizar processos industriais.',
        'service-4-title': 'Painéis Elétricos',
        'service-4-desc': 'Fabricação e montagem de painéis elétricos de acordo com as regulamentações vigentes.',
        'service-5-title': 'Medições',
        'service-5-desc': 'Medições elétricas especializadas e certificações de qualidade.',
        'service-6-title': 'Consultoria Técnica',
        'service-6-desc': 'Assessoramento técnico especializado para projetos elétricos complexos.',
        // Projetos
        'projects-title': 'Projetos Realizados',
        'projects-subtitle': 'Qualidade em Cada Detalhe',
        'project-view': 'Ver Projeto',
        // Clientes
        'clients-title': 'Nossos Clientes',
        'clients-subtitle': 'Empresas que Confiam em Nós',
        // Contato
        'contact-title': 'Entre em Contato',
        'contact-subtitle': 'Estamos Aqui Para Ajudá-lo',
        'contact-name': 'Nome',
        'contact-email': 'Email',
        'contact-message': 'Mensagem',
        'contact-send': 'Enviar Mensagem',
        'contact-info-title': 'Informações de Contato',
        'contact-address': 'Endereço',
        'contact-phone': 'Telefone',
        'contact-email-label': 'Email',
        // Formulário Estendido
        'form-fullname': 'Nome Completo',
        'form-phone': 'Telefone de Contato',
        'form-company': 'Empresa / Organização',
        'form-company-placeholder': 'Nome da sua empresa (opcional)',
        'form-project': 'Descrição do Projeto',
        'form-submit': 'Iniciar Projeto Revolucionário',
        // Chatbot
        'chatbot-title': 'Assistente Alterna AI',
        'chatbot-greeting': 'Olá! Sou o assistente virtual da Alterna. Como posso ajudá-lo hoje?',
        // Rodapé
        'footer-description': 'Alterna Serviços Elétricos - Profissionalismo e qualidade em cada projeto elétrico.',
        'footer-services': 'Serviços',
        'footer-company': 'Empresa',
        'footer-contact': 'Contato',
        'footer-follow': 'Siga-nos'
    }
};

function translateTo(lang) {
    console.log('translateTo called with:', lang);
    if (!translations[lang]) {
        console.log('No translations found for:', lang);
        return;
    }
    
    currentLanguage = lang;
    const trans = translations[lang];
    console.log('Translation object:', trans);
    
    // ===== NAVEGACIÓN =====
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        if (trans.nav[index]) {
            link.textContent = trans.nav[index];
        }
    });
    
    // ===== HERO SECTION =====
    const heroTitle = document.querySelector('.hero-logo h1');
    const heroSubtitle = document.querySelector('.hero-logo p');
    const heroDesc = document.querySelector('.hero-description p');
    const btnAbout = document.querySelector('.hero-buttons .btn-primary span');
    const btnServices = document.querySelector('.hero-buttons .btn-secondary span');
    
    if (heroTitle) heroTitle.textContent = trans['hero-title'];
    if (heroSubtitle) heroSubtitle.textContent = trans['hero-subtitle'];
    if (heroDesc) heroDesc.textContent = trans['hero-description'];
    if (btnAbout) btnAbout.textContent = trans['btn-about'];
    if (btnServices) btnServices.textContent = trans['btn-services'];
    
    // ===== METRICS SECTION =====
    const metricsTitle = document.querySelector('#metrics .section-title');
    const metricsSubtitle = document.querySelector('#metrics .section-subtitle');
    const metricTitles = document.querySelectorAll('#metrics .metric-title');
    const metricDescriptions = document.querySelectorAll('#metrics .metric-description');
    
    if (metricsTitle) metricsTitle.textContent = trans['about-title'];
    if (metricsSubtitle) metricsSubtitle.textContent = trans['about-subtitle'];
    
    // Description adicional si existe
    const metricsDescription = document.querySelector('#metrics .about-description');
    if (metricsDescription) metricsDescription.textContent = trans['about-description'];
    
    if (metricTitles.length >= 4) {
        metricTitles[0].textContent = trans['about-experience'];
        metricTitles[1].textContent = trans['about-projects'];
        metricTitles[2].textContent = trans['about-clients'];
        metricTitles[3].textContent = trans['about-specialists'];
    }
    
    if (metricDescriptions.length >= 4) {
        metricDescriptions[0].textContent = trans['about-exp-desc'];
        metricDescriptions[1].textContent = trans['about-proj-desc'];
        metricDescriptions[2].textContent = trans['about-cli-desc'];
        metricDescriptions[3].textContent = trans['about-spec-desc'];
    }
    
    // ===== ABOUT SECTION =====
    const welcomeTitle = document.querySelector('.welcome-title');
    const mainDescription = document.querySelector('.main-description p');
    const timelineTitle = document.querySelector('.timeline-title');
    
    if (welcomeTitle) welcomeTitle.textContent = trans['welcome-title'];
    if (mainDescription) mainDescription.textContent = trans['welcome-description'];
    if (timelineTitle) timelineTitle.textContent = trans['timeline-title'];
    
    // Timeline items
    const timelineItems = document.querySelectorAll('.timeline-content h4');
    const timelineDescs = document.querySelectorAll('.timeline-content p');
    
    if (timelineItems.length >= 4) {
        timelineItems[0].textContent = trans['timeline-2018-title'];
        timelineItems[1].textContent = trans['timeline-2020-title'];
        timelineItems[2].textContent = trans['timeline-2022-title'];
        timelineItems[3].textContent = trans['timeline-2024-title'];
    }
    
    if (timelineDescs.length >= 4) {
        timelineDescs[0].textContent = trans['timeline-2018-desc'];
        timelineDescs[1].textContent = trans['timeline-2020-desc'];
        timelineDescs[2].textContent = trans['timeline-2022-desc'];
        timelineDescs[3].textContent = trans['timeline-2024-desc'];
    }
    
    // ===== SERVICES SECTION =====
    const servicesTitle = document.querySelector('#servicios .section-title');
    const servicesSubtitle = document.querySelector('#servicios .section-subtitle');
    const serviceTitles = document.querySelectorAll('#servicios .service-card h3');
    const serviceDescs = document.querySelectorAll('#servicios .service-card p');
    
    if (servicesTitle) servicesTitle.textContent = trans['services-title'];
    if (servicesSubtitle) servicesSubtitle.textContent = trans['services-subtitle'];
    
    if (serviceTitles.length >= 6) {
        serviceTitles[0].textContent = trans['service-1-title'];
        serviceTitles[1].textContent = trans['service-2-title'];
        serviceTitles[2].textContent = trans['service-3-title'];
        serviceTitles[3].textContent = trans['service-4-title'];
        serviceTitles[4].textContent = trans['service-5-title'];
        serviceTitles[5].textContent = trans['service-6-title'];
    }
    
    if (serviceDescs.length >= 6) {
        serviceDescs[0].textContent = trans['service-1-desc'];
        serviceDescs[1].textContent = trans['service-2-desc'];
        serviceDescs[2].textContent = trans['service-3-desc'];
        serviceDescs[3].textContent = trans['service-4-desc'];
        serviceDescs[4].textContent = trans['service-5-desc'];
        serviceDescs[5].textContent = trans['service-6-desc'];
    }
    
    // ===== PROJECTS SECTION =====
    const projectsTitle = document.querySelector('#proyectos .section-title');
    const projectsSubtitle = document.querySelector('#proyectos .section-subtitle');
    const projectButtons = document.querySelectorAll('#proyectos .btn');
    
    if (projectsTitle) projectsTitle.textContent = trans['projects-title'];
    if (projectsSubtitle) projectsSubtitle.textContent = trans['projects-subtitle'];
    
    projectButtons.forEach(btn => {
        if (btn.textContent.includes('Ver Proyecto') || btn.textContent.includes('View Project') || btn.textContent.includes('Ver Projeto')) {
            btn.textContent = trans['project-view'];
        }
    });
    
    // ===== CLIENTS SECTION =====
    const clientsTitle = document.querySelector('#clientes .section-title');
    const clientsSubtitle = document.querySelector('#clientes .section-subtitle');
    
    if (clientsTitle) clientsTitle.textContent = trans['clients-title'];
    if (clientsSubtitle) clientsSubtitle.textContent = trans['clients-subtitle'];
    
    // ===== CONTACT SECTION =====
    const contactTitle = document.querySelector('#contacto .section-title');
    const contactSubtitle = document.querySelector('#contacto .section-subtitle');
    const contactInfoTitle = document.querySelector('.contact-info h3');
    
    if (contactTitle) contactTitle.textContent = trans['contact-title'];
    if (contactSubtitle) contactSubtitle.textContent = trans['contact-subtitle'];
    if (contactInfoTitle) contactInfoTitle.textContent = trans['contact-info-title'];
    
    // Form labels
    const formLabels = document.querySelectorAll('.form-label');
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    const submitBtn = document.querySelector('.btn-submit');
    
    if (formLabels.length >= 5) {
        formLabels[0].textContent = trans['form-fullname'];
        formLabels[1].textContent = trans['contact-email'];
        formLabels[2].textContent = trans['form-phone'];
        formLabels[3].textContent = trans['form-company'];
        formLabels[4].textContent = trans['form-project'];
    }
    
    if (formInputs.length >= 4) {
        formInputs[3].placeholder = trans['form-company-placeholder'];
    }
    
    if (submitBtn) submitBtn.innerHTML = `<i class="fas fa-paper-plane"></i> ${trans['form-submit']}`;
    
    // Contact info items
    const contactItems = document.querySelectorAll('.contact-item h4');
    if (contactItems.length >= 3) {
        contactItems[0].textContent = trans['contact-address'];
        contactItems[1].textContent = trans['contact-phone'];
        contactItems[2].textContent = trans['contact-email-label'];
    }
    
    // ===== FOOTER =====
    const footerSections = document.querySelectorAll('.footer-section h4');
    if (footerSections.length >= 3) {
        footerSections[0].textContent = trans['footer-services'];
        footerSections[1].textContent = trans['footer-company'];
        footerSections[2].textContent = trans['footer-contact'];
    }
    
    const footerDescription = document.querySelector('.footer-section p');
    if (footerDescription) footerDescription.textContent = trans['footer-description'];
    
    // ===== CHATBOT =====
    const chatbotTitle = document.querySelector('#chatbot-title');
    if (chatbotTitle) chatbotTitle.textContent = trans['chatbot-title'];
    
    // Actualizar chatbot si está disponible
    if (window.alternaAI) {
        window.alternaAI.updateLanguage(lang);
    }
    
    // Cerrar dropdown
    const dropdown = document.querySelector('.translate-options');
    if (dropdown) dropdown.classList.remove('show');
    
    // Notificación moderna
    const messages = {
        'es': 'Idioma cambiado a',
        'en': 'Language changed to',
        'pt': 'Idioma alterado para'
    };
    showNotification(`${messages[lang]} ${lang.toUpperCase()}`);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary-color), #00d4aa);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(300px);
        transition: transform 0.3s ease;
        box-shadow: 0 10px 30px rgba(32, 178, 170, 0.3);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(300px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Inicializar dropdown del traductor
function initializeTranslator() {
    console.log('Initializing translator...');
    const langToggle = document.querySelector('.language-toggle');
    const translateOptions = document.querySelector('.translate-options');
    
    console.log('Found elements:', { langToggle, translateOptions });
    
    if (langToggle && translateOptions) {
        // Mostrar/ocultar dropdown
        langToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Toggle clicked');
            translateOptions.classList.toggle('show');
        });
        
        // Cerrar al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!translateOptions.contains(e.target) && e.target !== langToggle) {
                translateOptions.classList.remove('show');
            }
        });
        
        // Prevenir cierre al hacer click dentro del dropdown
        translateOptions.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        console.log('Translator initialized successfully');
    } else {
        console.log('Translator elements not found');
    }
}

// Exportar funciones para uso global
window.translateTo = translateTo;
window.initializeTranslator = initializeTranslator;
