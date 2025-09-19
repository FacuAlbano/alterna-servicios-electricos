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
        'contact-hours': 'Horarios',
        'contact-hours-text': 'Lunes a Viernes: 8:00 - 18:00',
        'contact-maps': '📍 Ver en Google Maps',
        'contact-whatsapp': '💬 Contactar por WhatsApp',
        'contact-email-direct': '✉️ Enviar email directo',
        'contact-emergency': '⚡ Urgencias 24/7',
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
        
        // Proyectos específicos
        'project-1-title': 'Instalación Industrial',
        'project-1-desc': 'Sistema eléctrico completo para planta industrial',
        'project-2-title': 'Automatización',
        'project-2-desc': 'Sistema de control automatizado',
        'project-3-title': 'Tableros Eléctricos',
        'project-3-desc': 'Fabricación y montaje de tableros industriales',
        'project-4-title': 'Mediciones Eléctricas',
        'project-4-desc': 'Análisis y certificación de instalaciones',
        'project-5-title': 'Mantenimiento Preventivo',
        'project-5-desc': 'Servicios especializados de mantenimiento',
        'project-6-title': 'Instalación Comercial',
        'project-6-desc': 'Proyecto eléctrico para centro comercial',
        'project-7-title': 'Energía Solar',
        'project-7-desc': 'Sistema fotovoltaico industrial',
        'project-8-title': 'Sistemas de Control',
        'project-8-desc': 'Automatización de procesos industriales',
        'project-9-title': 'Iluminación LED',
        'project-9-desc': 'Modernización de sistemas de iluminación',
        'project-10-title': 'Sistemas de Seguridad',
        'project-10-desc': 'Instalación de sistemas de alarma y CCTV',
        
        // Métricas descripción
        'metric-exp-desc': 'Instalaciones eléctricas exitosas en diversas industrias',
        'metric-proj-desc': 'Proyectos exitosos en sector industrial y comercial',
        'metric-cli-desc': 'Empresas que confían en nuestros servicios especializados',
        'metric-spec-desc': 'Equipo altamente capacitado en tecnologías avanzadas',
        
        // Footer expandido
        'footer-description': 'Profesionalismo y calidad en cada proyecto eléctrico.',
        'footer-services': 'Servicios',
        'footer-company': 'Empresa',
        'footer-contact': 'Contacto',
        'footer-follow': 'Síguenos',
        'footer-address': 'Rosario, Santa Fe',
        'footer-copyright': 'Todos los derechos reservados.',
        
        // Botones y acciones
        'btn-view-project': 'Ver Proyecto',
        'btn-quote': 'Solicitar Cotización',
        'btn-more-info': 'Más Información',
        'scroll-indicator': 'Desplázate hacia abajo'
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
        'contact-hours': 'Hours',
        'contact-hours-text': 'Monday to Friday: 8:00 - 18:00',
        'contact-maps': '📍 View on Google Maps',
        'contact-whatsapp': '💬 Contact via WhatsApp',
        'contact-email-direct': '✉️ Send direct email',
        'contact-emergency': '⚡ Emergencies 24/7',
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
        
        // Specific Projects
        'project-1-title': 'Industrial Installation',
        'project-1-desc': 'Complete electrical system for industrial plant',
        'project-2-title': 'Automation',
        'project-2-desc': 'Automated control system',
        'project-3-title': 'Electrical Panels',
        'project-3-desc': 'Manufacturing and assembly of industrial panels',
        'project-4-title': 'Electrical Measurements',
        'project-4-desc': 'Analysis and certification of installations',
        'project-5-title': 'Preventive Maintenance',
        'project-5-desc': 'Specialized maintenance services',
        'project-6-title': 'Commercial Installation',
        'project-6-desc': 'Electrical project for shopping center',
        'project-7-title': 'Solar Energy',
        'project-7-desc': 'Industrial photovoltaic system',
        'project-8-title': 'Control Systems',
        'project-8-desc': 'Industrial process automation',
        'project-9-title': 'LED Lighting',
        'project-9-desc': 'Modernization of lighting systems',
        'project-10-title': 'Security Systems',
        'project-10-desc': 'Installation of alarm and CCTV systems',
        
        // Metrics description
        'metric-exp-desc': 'Successful electrical installations in various industries',
        'metric-proj-desc': 'Successful projects in industrial and commercial sector',
        'metric-cli-desc': 'Companies that trust our specialized services',
        'metric-spec-desc': 'Highly trained team in advanced technologies',
        
        // Extended Footer
        'footer-description': 'Professionalism and quality in every electrical project.',
        'footer-services': 'Services',
        'footer-company': 'Company',
        'footer-contact': 'Contact',
        'footer-follow': 'Follow Us',
        'footer-address': 'Rosario, Santa Fe',
        'footer-copyright': 'All rights reserved.',
        
        // Buttons and actions
        'btn-view-project': 'View Project',
        'btn-quote': 'Request Quote',
        'btn-more-info': 'More Information',
        'scroll-indicator': 'Scroll down'
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
        'contact-hours': 'Horários',
        'contact-hours-text': 'Segunda a Sexta: 8:00 - 18:00',
        'contact-maps': '📍 Ver no Google Maps',
        'contact-whatsapp': '💬 Contatar via WhatsApp',
        'contact-email-direct': '✉️ Enviar email direto',
        'contact-emergency': '⚡ Emergências 24/7',
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
        
        // Projetos específicos
        'project-1-title': 'Instalação Industrial',
        'project-1-desc': 'Sistema elétrico completo para planta industrial',
        'project-2-title': 'Automação',
        'project-2-desc': 'Sistema de controle automatizado',
        'project-3-title': 'Painéis Elétricos',
        'project-3-desc': 'Fabricação e montagem de painéis industriais',
        'project-4-title': 'Medições Elétricas',
        'project-4-desc': 'Análise e certificação de instalações',
        'project-5-title': 'Manutenção Preventiva',
        'project-5-desc': 'Serviços especializados de manutenção',
        'project-6-title': 'Instalação Comercial',
        'project-6-desc': 'Projeto elétrico para centro comercial',
        'project-7-title': 'Energia Solar',
        'project-7-desc': 'Sistema fotovoltaico industrial',
        'project-8-title': 'Sistemas de Controle',
        'project-8-desc': 'Automação de processos industriais',
        'project-9-title': 'Iluminação LED',
        'project-9-desc': 'Modernização de sistemas de iluminação',
        'project-10-title': 'Sistemas de Segurança',
        'project-10-desc': 'Instalação de sistemas de alarme e CCTV',
        
        // Descrição das métricas
        'metric-exp-desc': 'Instalações elétricas bem-sucedidas em várias indústrias',
        'metric-proj-desc': 'Projetos bem-sucedidos no setor industrial e comercial',
        'metric-cli-desc': 'Empresas que confiam em nossos serviços especializados',
        'metric-spec-desc': 'Equipe altamente treinada em tecnologias avançadas',
        
        // Rodapé expandido
        'footer-description': 'Profissionalismo e qualidade em cada projeto elétrico.',
        'footer-services': 'Serviços',
        'footer-company': 'Empresa',
        'footer-contact': 'Contato',
        'footer-follow': 'Siga-nos',
        'footer-address': 'Rosario, Santa Fe',
        'footer-copyright': 'Todos os direitos reservados.',
        
        // Botões e ações
        'btn-view-project': 'Ver Projeto',
        'btn-quote': 'Solicitar Orçamento',
        'btn-more-info': 'Mais Informações',
        'scroll-indicator': 'Role para baixo'
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
        const contactTexts = document.querySelectorAll('.contact-item p');
        const contactSubTexts = document.querySelectorAll('.contact-item small');
        
        if (contactItems.length >= 4) {
        contactItems[0].textContent = trans['contact-address'];
        contactItems[1].textContent = trans['contact-phone'];
        contactItems[2].textContent = trans['contact-email-label'];
            contactItems[3].textContent = trans['contact-hours'];
        }
        
        if (contactTexts.length >= 4) {
            // La dirección y números no se traducen, solo horarios
            contactTexts[3].textContent = trans['contact-hours-text'];
        }
        
        if (contactSubTexts.length >= 4) {
            contactSubTexts[0].textContent = trans['contact-maps'];
            contactSubTexts[1].textContent = trans['contact-whatsapp'];
            contactSubTexts[2].textContent = trans['contact-email-direct'];
            contactSubTexts[3].textContent = trans['contact-emergency'];
        }
    
    // ===== PROYECTOS ESPECÍFICOS =====
    const projectOverlays = document.querySelectorAll('#proyectos .project-overlay');
    if (projectOverlays.length >= 10) {
        // Traducir títulos y descripciones de proyectos específicos
        for (let i = 0; i < Math.min(10, projectOverlays.length); i++) {
            const title = projectOverlays[i].querySelector('h3');
            const desc = projectOverlays[i].querySelector('p');
            
            if (title) title.textContent = trans[`project-${i+1}-title`];
            if (desc) desc.textContent = trans[`project-${i+1}-desc`];
        }
    }
    
    // Traducir botones "Ver Proyecto"
    const viewProjectButtons = document.querySelectorAll('#proyectos .btn');
    viewProjectButtons.forEach(btn => {
        if (btn.textContent.includes('Ver Proyecto') || btn.textContent.includes('View Project') || btn.textContent.includes('Ver Projeto')) {
            btn.textContent = trans['btn-view-project'];
        }
    });

    // ===== MÉTRICAS EXPANDIDAS =====
    const metricDescriptionsElements = document.querySelectorAll('#metrics .metric-description');
    if (metricDescriptionsElements.length >= 4) {
        metricDescriptionsElements[0].textContent = trans['metric-exp-desc'];
        metricDescriptionsElements[1].textContent = trans['metric-proj-desc'];
        metricDescriptionsElements[2].textContent = trans['metric-cli-desc'];
        metricDescriptionsElements[3].textContent = trans['metric-spec-desc'];
    }

    // ===== FOOTER EXPANDIDO =====
    const footerSections = document.querySelectorAll('.footer-section h4');
    if (footerSections.length >= 3) {
        footerSections[0].textContent = trans['footer-services'];
        footerSections[1].textContent = trans['footer-company'];
        footerSections[2].textContent = trans['footer-contact'];
    }
    
    const footerDescription = document.querySelector('.footer-section p');
    if (footerDescription) footerDescription.textContent = trans['footer-description'];
    
    // Traducir dirección y copyright en footer
    const footerAddress = document.querySelector('.footer-content .contact-item span');
    if (footerAddress && footerAddress.textContent.includes('Rosario')) {
        footerAddress.textContent = trans['footer-address'];
    }
    
    const footerCopyright = document.querySelector('.footer-bottom p');
    if (footerCopyright) {
        const year = new Date().getFullYear();
        footerCopyright.innerHTML = `&copy; ${year} Alterna Servicios Eléctricos. ${trans['footer-copyright']}`;
    }
    
    // ===== BOTONES GENERALES =====
    const quoteButtons = document.querySelectorAll('.btn');
    quoteButtons.forEach(btn => {
        const text = btn.textContent.toLowerCase();
        if (text.includes('cotización') || text.includes('quote') || text.includes('orçamento')) {
            btn.textContent = trans['btn-quote'];
        } else if (text.includes('información') || text.includes('information') || text.includes('informações')) {
            btn.textContent = trans['btn-more-info'];
        }
    });
    
    // ===== CHATBOT =====
    const chatbotTitle = document.querySelector('#chatbot-title');
    if (chatbotTitle) chatbotTitle.textContent = trans['chatbot-title'];
    
    // ===== ACTUALIZAR SISTEMAS CONECTADOS =====
    
    // Actualizar chatbot si está disponible
    if (window.alternaAI) {
        window.alternaAI.updateLanguage(lang);
    }
    
    // Actualizar validator de formulario si está disponible
    if (window.formValidator) {
        window.formValidator.updateLanguage(lang);
    }
    
    // Actualizar placeholders dinámicos
    const placeholders = document.querySelectorAll('[data-translate-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (trans[key]) {
            element.placeholder = trans[key];
        }
    });
    
    // Actualizar tooltips y títulos
    const tooltips = document.querySelectorAll('[data-translate-title]');
    tooltips.forEach(element => {
        const key = element.getAttribute('data-translate-title');
        if (trans[key]) {
            element.title = trans[key];
        }
    });
    
    // Actualizar elementos con atributo data-translate
    const dataTranslateElements = document.querySelectorAll('[data-translate]');
    dataTranslateElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (trans[key]) {
            element.textContent = trans[key];
        }
    });
    
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
    console.log('🌍 Initializing translator...');
    
    // Buscar elementos del traductor
    const langToggle = document.querySelector('.language-toggle');
    const translateOptions = document.querySelector('.translate-options');
    const translateButtons = document.querySelectorAll('.translate-option');
    
    console.log('Found elements:', { 
        langToggle: !!langToggle, 
        translateOptions: !!translateOptions, 
        translateButtons: translateButtons.length 
    });
    
    if (langToggle && translateOptions) {
        
        // Función para mostrar/ocultar dropdown
        const toggleDropdown = (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('🔄 Toggle clicked, current show:', translateOptions.classList.contains('show'));
            
            const isShowing = translateOptions.classList.contains('show');
            
            if (isShowing) {
                translateOptions.classList.remove('show');
                console.log('❌ Dropdown closed');
            } else {
                translateOptions.classList.add('show');
                console.log('✅ Dropdown opened');
            }
        };
        
        // Event listener para el botón toggle
        langToggle.addEventListener('click', toggleDropdown);
        
        // También agregar para el caso de touch en móviles
        langToggle.addEventListener('touchend', (e) => {
            e.preventDefault();
            toggleDropdown(e);
        });
        
        // Event listeners para los botones de idioma
        translateButtons.forEach(button => {
            const lang = button.getAttribute('data-lang');
            
            // Remover onclick inline y agregar event listener
            button.removeAttribute('onclick');
            
            button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
                console.log(`🌍 Language selected: ${lang}`);
                
                // Cambiar idioma
                translateTo(lang);
                
                // Cerrar dropdown
                translateOptions.classList.remove('show');
            });
        });
        
        // Cerrar dropdown al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!translateOptions.contains(e.target) && 
                !langToggle.contains(e.target)) {
                translateOptions.classList.remove('show');
                console.log('📍 Clicked outside - dropdown closed');
            }
        });
        
        // Prevenir cierre al hacer click dentro del dropdown
        translateOptions.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // Cerrar con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && translateOptions.classList.contains('show')) {
                translateOptions.classList.remove('show');
                console.log('⌨️ Escape pressed - dropdown closed');
            }
        });
        
        console.log('✅ Translator initialized successfully');
    } else {
        console.error('❌ Translator elements not found!');
        console.log('Looking for:', {
            '.language-toggle': document.querySelector('.language-toggle'),
            '.translate-options': document.querySelector('.translate-options')
        });
    }
}

// Función de emergencia para diagnosticar problemas
function emergencyTranslatorFix() {
    console.log('🚨 EMERGENCY TRANSLATOR FIX ACTIVATED!');
    
    // Forzar creación del traductor
    createTranslatorBackup();
    
    // También crear un botón visible de emergencia
    const emergencyBtn = document.createElement('div');
    emergencyBtn.id = 'emergency-translator';
    emergencyBtn.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #ff6b6b, #ee5a52);
        color: white;
        padding: 10px 15px;
        border-radius: 25px;
        cursor: pointer;
        z-index: 10000;
        font-family: Arial, sans-serif;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
        border: 2px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
    `;
    emergencyBtn.innerHTML = '🌍 Idiomas';
    
    // Crear dropdown de emergencia
    const emergencyDropdown = document.createElement('div');
    emergencyDropdown.style.cssText = `
        position: absolute;
        top: 100%;
        right: 0;
        background: rgba(0, 0, 0, 0.9);
        border-radius: 10px;
        padding: 10px;
        margin-top: 5px;
        display: none;
        min-width: 120px;
    `;
    
    const languages = [
        { code: 'es', name: '🇪🇸 Español' },
        { code: 'en', name: '🇺🇸 English' },
        { code: 'pt', name: '🇧🇷 Português' }
    ];
    
    languages.forEach(lang => {
        const btn = document.createElement('div');
        btn.style.cssText = `
            padding: 8px 12px;
            cursor: pointer;
            border-radius: 5px;
            margin: 2px 0;
            transition: all 0.3s;
            color: white;
        `;
        btn.textContent = lang.name;
        btn.addEventListener('click', () => {
            translateTo(lang.code);
            emergencyDropdown.style.display = 'none';
        });
        btn.addEventListener('mouseenter', () => {
            btn.style.background = 'rgba(32, 178, 170, 0.5)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.background = 'none';
        });
        emergencyDropdown.appendChild(btn);
    });
    
    emergencyBtn.appendChild(emergencyDropdown);
    
    // Toggle dropdown
    emergencyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = emergencyDropdown.style.display === 'block';
        emergencyDropdown.style.display = isVisible ? 'none' : 'block';
    });
    
    // Cerrar al click fuera
    document.addEventListener('click', () => {
        emergencyDropdown.style.display = 'none';
    });
    
    // Remover cualquier botón de emergencia anterior
    const existing = document.getElementById('emergency-translator');
    if (existing) existing.remove();
    
    document.body.appendChild(emergencyBtn);
    
    console.log('✅ Emergency translator button created in top-right corner!');
    
    // Auto-remover después de 30 segundos si el traductor normal funciona
    setTimeout(() => {
        const normalTranslator = document.querySelector('.language-toggle');
        if (normalTranslator && normalTranslator.onclick) {
            emergencyBtn.remove();
            console.log('🗑️ Emergency translator removed - normal one works!');
        }
    }, 30000);
}

// Exportar funciones para uso global
window.translateTo = translateTo;
window.initializeTranslator = initializeTranslator;
window.emergencyTranslatorFix = emergencyTranslatorFix;
window.forceInitializeTranslator = forceInitializeTranslator;

// Función de inicialización más robusta
function forceInitializeTranslator() {
    console.log('🔧 FORCE initializing translator...');
    
    // Verificar elementos múltiples veces
    let attempts = 0;
    const maxAttempts = 20; // 2 segundos máximo
    
    const checkAndInit = () => {
        attempts++;
        console.log(`🔍 Attempt ${attempts}/${maxAttempts} - Looking for translator elements...`);
        
        const langToggle = document.querySelector('.language-toggle');
        const translateOptions = document.querySelector('.translate-options');
        const translateButtons = document.querySelectorAll('.translate-option');
        
        if (langToggle && translateOptions && translateButtons.length > 0) {
            console.log('✅ All elements found! Initializing...');
            initializeTranslator();
            return true;
        } else {
            console.log('❌ Elements missing:', {
                langToggle: !!langToggle,
                translateOptions: !!translateOptions,
                translateButtons: translateButtons.length
            });
            
            if (attempts < maxAttempts) {
                setTimeout(checkAndInit, 100);
                return false;
            } else {
                console.error('💥 Failed to initialize translator after max attempts');
                // Crear elementos manualmente como backup
                createTranslatorBackup();
                return false;
            }
        }
    };
    
    checkAndInit();
}

// Función backup para crear el traductor si no existe
function createTranslatorBackup() {
    console.log('🆘 Creating translator backup...');
    
    // Buscar el header donde debería estar
    const header = document.querySelector('header nav');
    if (!header) {
        console.error('No header found!');
        return;
    }
    
    // Crear el dropdown de traducción
    const navContact = header.querySelector('.nav-contact') || header;
    
    // Crear dropdown si no existe
    let translateDropdown = header.querySelector('.translate-dropdown');
    if (!translateDropdown) {
        translateDropdown = document.createElement('div');
        translateDropdown.className = 'translate-dropdown';
        translateDropdown.innerHTML = `
            <button class="language-toggle" aria-label="Cambiar idioma">
                <i class="fas fa-globe"></i>
            </button>
            <div class="translate-options">
                <button class="translate-option" data-lang="es">🇪🇸 Español</button>
                <button class="translate-option" data-lang="en">🇺🇸 English</button>
                <button class="translate-option" data-lang="pt">🇧🇷 Português</button>
            </div>
        `;
        
        // Agregar estilos inline como backup
        translateDropdown.style.cssText = `
            position: relative;
            display: inline-block;
            margin-left: 1rem;
        `;
        
        const toggleBtn = translateDropdown.querySelector('.language-toggle');
        toggleBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 4px;
            transition: all 0.3s;
        `;
        
        const options = translateDropdown.querySelector('.translate-options');
        options.style.cssText = `
            position: absolute;
            top: calc(100% + 10px);
            right: 0;
            background: rgba(15, 15, 15, 0.95);
            border-radius: 8px;
            border: 1px solid rgba(32, 178, 170, 0.3);
            padding: 0.5rem 0;
            min-width: 150px;
            display: none;
            z-index: 1000;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        `;
        
        const optionButtons = translateDropdown.querySelectorAll('.translate-option');
        optionButtons.forEach(btn => {
            btn.style.cssText = `
                display: block;
                width: 100%;
                padding: 0.5rem 1rem;
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                text-align: left;
                transition: all 0.3s;
            `;
            
            btn.addEventListener('mouseenter', () => {
                btn.style.background = 'rgba(32, 178, 170, 0.2)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.background = 'none';
            });
        });
        
        navContact.appendChild(translateDropdown);
        console.log('✅ Backup translator created!');
        
        // Inicializar el nuevo traductor
        setTimeout(() => {
            initializeTranslator();
        }, 100);
    }
}

// Auto-inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM loaded, force initializing translator...');
    setTimeout(forceInitializeTranslator, 200);
});

// También inicializar si el DOM ya está listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceInitializeTranslator);
} else {
    console.log('🚀 DOM already ready, force initializing translator immediately...');
    setTimeout(forceInitializeTranslator, 200);
}

// Backup adicional - inicializar después de que todo esté cargado
window.addEventListener('load', () => {
    console.log('🔄 Window loaded, checking translator one more time...');
    setTimeout(() => {
        const langToggle = document.querySelector('.language-toggle');
        if (!langToggle || !langToggle.onclick) {
            console.log('🆘 Translator still not working, force initializing...');
            forceInitializeTranslator();
            
            // Si después de más intentos sigue sin funcionar, activar emergencia
            setTimeout(() => {
                const langToggleAfter = document.querySelector('.language-toggle');
                if (!langToggleAfter) {
                    console.log('💥 ACTIVATING EMERGENCY TRANSLATOR!');
                    emergencyTranslatorFix();
                }
            }, 2000);
        }
    }, 500);
});

// TEST DIRECTO: Verificar si el traductor funciona después de 3 segundos
setTimeout(() => {
    console.log('🧪 TESTING translator functionality...');
    const langToggle = document.querySelector('.language-toggle');
    const translateOptions = document.querySelector('.translate-options');
    
    if (!langToggle) {
        console.error('❌ No language toggle button found!');
        emergencyTranslatorFix();
        return;
    }
    
    if (!translateOptions) {
        console.error('❌ No translate options dropdown found!');
        emergencyTranslatorFix();
        return;
    }
    
    // Verificar si tiene event listeners
    const hasClickHandler = langToggle.onclick !== null || 
                          langToggle.getAttribute('onclick') !== null ||
                          langToggle.listeners?.('click')?.length > 0;
    
    console.log('🔍 Translator status:', {
        hasToggleButton: !!langToggle,
        hasDropdown: !!translateOptions,
        hasClickHandler: hasClickHandler,
        dropdownVisible: translateOptions.style.display !== 'none'
    });
    
    // Crear indicador visual de que el traductor está siendo probado
    if (langToggle) {
        const originalStyle = langToggle.style.cssText;
        langToggle.style.cssText += '; animation: pulse 0.5s ease-in-out;';
        
        setTimeout(() => {
            langToggle.style.cssText = originalStyle;
        }, 1000);
        
        // Agregar los estilos de pulse si no existen
        if (!document.getElementById('pulse-animation')) {
            const style = document.createElement('style');
            style.id = 'pulse-animation';
            style.textContent = `
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
}, 3000);
