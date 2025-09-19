// ===== SISTEMA DE TRADUCCIÓN MEJORADO PARA ALTERNA =====

class AlternaTranslator {
    constructor() {
        this.currentLanguage = 'es';
        this.isInitialized = false;
        
        // Mapeo completo de traducciones
        this.translations = {
            es: {
                // Navegación
                'nav-inicio': 'Inicio',
                'nav-nosotros': 'Nosotros', 
                'nav-servicios': 'Servicios',
                'nav-proyectos': 'Proyectos',
                'nav-clientes': 'Clientes',
                'nav-contacto': 'Contacto',
                
                // Hero Section
                'hero-title': 'ALTERNA',
                'hero-subtitle': 'Servicios Eléctricos',
                'hero-description': 'Alterna es una empresa joven con un staff de Ingenieros y una metodología de trabajo profesionalizada que busca brindar soluciones en instalaciones eléctricas, en todo tipo de obras civiles e industriales.',
                'btn-about': 'Sobre Nosotros',
                'btn-services': 'Servicios',
                
                // Métricas
                'metrics-title': 'Números que Hablan',
                'metrics-subtitle': 'Experiencia y Profesionalismo',
                'metric-experience': 'Años de Experiencia',
                'metric-projects': 'Proyectos Completados',
                'metric-clients': 'Clientes Satisfechos',
                'metric-specialists': 'Especialistas',
                'metric-exp-desc': 'Instalaciones eléctricas exitosas en diversas industrias',
                'metric-proj-desc': 'Proyectos exitosos en sector industrial y comercial',
                'metric-cli-desc': 'Empresas que confían en nuestros servicios especializados',
                'metric-spec-desc': 'Equipo altamente capacitado en tecnologías avanzadas',
                
                // Sobre Nosotros
                'about-welcome': 'Bienvenidos a Alterna',
                'about-description': 'Alterna es una empresa joven con un staff de Ingenieros y una metodología de trabajo profesionalizada que busca brindar soluciones en instalaciones eléctricas, en todo tipo de obras civiles e industriales.',
                'timeline-title': 'Nuestra Historia',
                'timeline-2018-title': 'Fundación',
                'timeline-2018-desc': 'Alterna inicia sus actividades como una empresa joven con un equipo de ingenieros eléctricos y electrónicos especializados en buscar soluciones prácticas y eficientes para cada cliente.',
                'timeline-2020-title': 'Crecimiento y Especialización',
                'timeline-2020-desc': 'Incorporación de tecnologías de medición avanzadas y sistemas de análisis. Ampliación del equipo técnico y desarrollo de metodologías de trabajo profesionalizadas.',
                'timeline-2022-title': 'Expansión en Energías Renovables',
                'timeline-2022-desc': 'Nos especializamos en la instalación de sistemas de energía solar y optimización energética. Obtención de certificaciones para proyectos de eficiencia energética.',
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
                'project-btn': 'Ver Proyecto',
                
                // Clientes
                'clients-title': 'Nuestros Clientes',
                'clients-subtitle': 'Empresas que Confían en Nosotros',
                
                // Contacto
                'contact-title': 'Contáctanos',
                'contact-subtitle': 'Estamos Aquí Para Ayudarte',
                'contact-info-title': 'Información de Contacto',
                'form-fullname': 'Nombre Completo',
                'form-email': 'Email',
                'form-phone': 'Teléfono de Contacto',
                'form-company': 'Empresa / Organización',
                'form-project': 'Descripción del Proyecto',
                'form-submit': 'Iniciar Proyecto Revolucionario',
                'contact-address-label': 'Dirección',
                'contact-phone-label': 'Teléfono',
                'contact-email-label': 'Email',
                'contact-schedule-label': 'Horario de Atención',
                'contact-response-label': 'Tiempo de Respuesta',
                'contact-address-value': 'Rosario, Santa Fe, Argentina',
                'contact-phone-value': '+54 341 512-3456',
                'contact-email-value': 'info@alternaservicioselectricos.com',
                'contact-schedule-value': 'Lunes a Viernes: 8:00 - 18:00<br>Sábados: 8:00 - 13:00',
                'contact-response-value': 'Respuesta en menos de 2 horas<br>Urgencias 24/7',
                'contact-cta-title': '¿Listo para tu próximo proyecto eléctrico?',
                'contact-cta-desc': 'Nuestro equipo de ingenieros especializados está preparado para brindarte soluciones personalizadas. Desde instalaciones industriales hasta proyectos de automatización, trabajamos con las últimas tecnologías para garantizar resultados excepcionales.',
                
                // Footer
                'footer-desc': 'Profesionalismo y calidad en cada proyecto eléctrico.',
                'footer-services-title': 'Servicios',
                'footer-company-title': 'Empresa',
                'footer-contact-title': 'Contacto',
                'footer-copyright': '© 2024 Alterna Servicios Eléctricos. Todos los derechos reservados.',
                
                // Chatbot
                'chatbot-title': 'Asistente Alterna AI'
            },
            
            en: {
                // Navigation
                'nav-inicio': 'Home',
                'nav-nosotros': 'About Us',
                'nav-servicios': 'Services',
                'nav-proyectos': 'Projects',
                'nav-clientes': 'Clients',
                'nav-contacto': 'Contact',
                
                // Hero Section
                'hero-title': 'ALTERNA',
                'hero-subtitle': 'Electrical Services',
                'hero-description': 'Alterna is a young company with a staff of Engineers and a professionalized work methodology that seeks to provide solutions in electrical installations, in all types of civil and industrial works.',
                'btn-about': 'About Us',
                'btn-services': 'Services',
                
                // Metrics
                'metrics-title': 'Numbers That Speak',
                'metrics-subtitle': 'Experience and Professionalism',
                'metric-experience': 'Years of Experience',
                'metric-projects': 'Completed Projects',
                'metric-clients': 'Satisfied Clients',
                'metric-specialists': 'Specialists',
                'metric-exp-desc': 'Successful electrical installations in various industries',
                'metric-proj-desc': 'Successful projects in industrial and commercial sector',
                'metric-cli-desc': 'Companies that trust our specialized services',
                'metric-spec-desc': 'Highly trained team in advanced technologies',
                
                // About Us
                'about-welcome': 'Welcome to Alterna',
                'about-description': 'Alterna is a young company with a staff of Engineers and a professionalized work methodology that seeks to provide solutions in electrical installations, in all types of civil and industrial works.',
                'timeline-title': 'Our History',
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
                'project-btn': 'View Project',
                
                // Clients
                'clients-title': 'Our Clients',
                'clients-subtitle': 'Companies That Trust Us',
                
                // Contact
                'contact-title': 'Contact Us',
                'contact-subtitle': 'We Are Here To Help You',
                'contact-info-title': 'Contact Information',
                'form-fullname': 'Full Name',
                'form-email': 'Email',
                'form-phone': 'Contact Phone',
                'form-company': 'Company / Organization',
                'form-project': 'Project Description',
                'form-submit': 'Start Revolutionary Project',
                'contact-address-label': 'Address',
                'contact-phone-label': 'Phone',
                'contact-email-label': 'Email',
                'contact-schedule-label': 'Business Hours',
                'contact-response-label': 'Response Time',
                'contact-address-value': 'Rosario, Santa Fe, Argentina',
                'contact-phone-value': '+54 341 512-3456',
                'contact-email-value': 'info@alternaservicioselectricos.com',
                'contact-schedule-value': 'Monday to Friday: 8:00 - 18:00<br>Saturdays: 8:00 - 13:00',
                'contact-response-value': 'Response in less than 2 hours<br>24/7 emergencies',
                'contact-cta-title': 'Ready for your next electrical project?',
                'contact-cta-desc': 'Our team of specialized engineers is prepared to provide you with personalized solutions. From industrial installations to automation projects, we work with the latest technologies to guarantee exceptional results.',
                
                // Footer
                'footer-desc': 'Professionalism and quality in every electrical project.',
                'footer-services-title': 'Services',
                'footer-company-title': 'Company',
                'footer-contact-title': 'Contact',
                'footer-copyright': '© 2024 Alterna Electrical Services. All rights reserved.',
                
                // Chatbot
                'chatbot-title': 'Alterna AI Assistant'
            },
            
            pt: {
                // Navegação
                'nav-inicio': 'Início',
                'nav-nosotros': 'Sobre Nós',
                'nav-servicios': 'Serviços',
                'nav-proyectos': 'Projetos',
                'nav-clientes': 'Clientes',
                'nav-contacto': 'Contato',
                
                // Hero Section
                'hero-title': 'ALTERNA',
                'hero-subtitle': 'Serviços Elétricos',
                'hero-description': 'Alterna é uma empresa jovem com uma equipe de Engenheiros e uma metodologia de trabalho profissionalizada que busca fornecer soluções em instalações elétricas, em todos os tipos de obras civis e industriais.',
                'btn-about': 'Sobre Nós',
                'btn-services': 'Serviços',
                
                // Métricas
                'metrics-title': 'Números que Falam',
                'metrics-subtitle': 'Experiência e Profissionalismo',
                'metric-experience': 'Anos de Experiência',
                'metric-projects': 'Projetos Concluídos',
                'metric-clients': 'Clientes Satisfeitos',
                'metric-specialists': 'Especialistas',
                'metric-exp-desc': 'Instalações elétricas bem-sucedidas em várias indústrias',
                'metric-proj-desc': 'Projetos bem-sucedidos no setor industrial e comercial',
                'metric-cli-desc': 'Empresas que confiam em nossos serviços especializados',
                'metric-spec-desc': 'Equipe altamente treinada em tecnologias avançadas',
                
                // Sobre Nós
                'about-welcome': 'Bem-vindos à Alterna',
                'about-description': 'Alterna é uma empresa jovem com uma equipe de Engenheiros e uma metodologia de trabalho profissionalizada que busca fornecer soluções em instalações elétricas, em todos os tipos de obras civis e industriais.',
                'timeline-title': 'Nossa História',
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
                'project-btn': 'Ver Projeto',
                
                // Clientes
                'clients-title': 'Nossos Clientes',
                'clients-subtitle': 'Empresas que Confiam em Nós',
                
                // Contato
                'contact-title': 'Entre em Contato',
                'contact-subtitle': 'Estamos Aqui Para Ajudá-lo',
                'contact-info-title': 'Informações de Contato',
                'form-fullname': 'Nome Completo',
                'form-email': 'Email',
                'form-phone': 'Telefone de Contato',
                'form-company': 'Empresa / Organização',
                'form-project': 'Descrição do Projeto',
                'form-submit': 'Iniciar Projeto Revolucionário',
                'contact-address-label': 'Endereço',
                'contact-phone-label': 'Telefone',
                'contact-email-label': 'Email',
                'contact-schedule-label': 'Horário de Atendimento',
                'contact-response-label': 'Tempo de Resposta',
                'contact-address-value': 'Rosario, Santa Fe, Argentina',
                'contact-phone-value': '+54 341 512-3456',
                'contact-email-value': 'info@alternaservicioselectricos.com',
                'contact-schedule-value': 'Segunda a Sexta: 8:00 - 18:00<br>Sábados: 8:00 - 13:00',
                'contact-response-value': 'Resposta em menos de 2 horas<br>Emergências 24/7',
                'contact-cta-title': 'Pronto para seu próximo projeto elétrico?',
                'contact-cta-desc': 'Nossa equipe de engenheiros especializados está preparada para fornecer soluções personalizadas. Desde instalações industriais até projetos de automação, trabalhamos com as mais recentes tecnologias para garantir resultados excepcionais.',
                
                // Rodapé
                'footer-desc': 'Profissionalismo e qualidade em cada projeto elétrico.',
                'footer-services-title': 'Serviços',
                'footer-company-title': 'Empresa',
                'footer-contact-title': 'Contato',
                'footer-copyright': '© 2024 Alterna Serviços Elétricos. Todos os direitos reservados.',
                
                // Chatbot
                'chatbot-title': 'Assistente Alterna AI'
            }
        };

        this.elementMap = [
            // Navegación
            { selector: '.nav-link:nth-child(1)', key: 'nav-inicio' },
            { selector: '.nav-link:nth-child(2)', key: 'nav-nosotros' },
            { selector: '.nav-link:nth-child(3)', key: 'nav-servicios' },
            { selector: '.nav-link:nth-child(4)', key: 'nav-proyectos' },
            { selector: '.nav-link:nth-child(5)', key: 'nav-clientes' },
            { selector: '.nav-link:nth-child(6)', key: 'nav-contacto' },
            
            // Hero
            { selector: '.hero-logo h1', key: 'hero-title' },
            { selector: '.hero-logo p', key: 'hero-subtitle' },
            { selector: '.hero-description p', key: 'hero-description' },
            { selector: '.hero-buttons .btn-primary span', key: 'btn-about' },
            { selector: '.hero-buttons .btn-secondary span', key: 'btn-services' },
            
            // Métricas
            { selector: '#metrics .section-title', key: 'metrics-title' },
            { selector: '#metrics .section-subtitle', key: 'metrics-subtitle' },
            { selector: '#metrics .metric-title:nth-of-type(1)', key: 'metric-experience' },
            { selector: '#metrics .metric-title:nth-of-type(2)', key: 'metric-projects' },
            { selector: '#metrics .metric-title:nth-of-type(3)', key: 'metric-clients' },
            { selector: '#metrics .metric-title:nth-of-type(4)', key: 'metric-specialists' },
            { selector: '#metrics .metric-description:nth-of-type(1)', key: 'metric-exp-desc' },
            { selector: '#metrics .metric-description:nth-of-type(2)', key: 'metric-proj-desc' },
            { selector: '#metrics .metric-description:nth-of-type(3)', key: 'metric-cli-desc' },
            { selector: '#metrics .metric-description:nth-of-type(4)', key: 'metric-spec-desc' },
            
            // About
            { selector: '.welcome-title', key: 'about-welcome' },
            { selector: '.main-description p', key: 'about-description' },
            { selector: '.timeline-title', key: 'timeline-title' },
            { selector: '.timeline-item:nth-child(1) h4', key: 'timeline-2018-title' },
            { selector: '.timeline-item:nth-child(1) p', key: 'timeline-2018-desc' },
            { selector: '.timeline-item:nth-child(2) h4', key: 'timeline-2020-title' },
            { selector: '.timeline-item:nth-child(2) p', key: 'timeline-2020-desc' },
            { selector: '.timeline-item:nth-child(3) h4', key: 'timeline-2022-title' },
            { selector: '.timeline-item:nth-child(3) p', key: 'timeline-2022-desc' },
            { selector: '.timeline-item:nth-child(4) h4', key: 'timeline-2024-title' },
            { selector: '.timeline-item:nth-child(4) p', key: 'timeline-2024-desc' },
            
            // Servicios
            { selector: '#servicios .section-title', key: 'services-title' },
            { selector: '#servicios .section-subtitle', key: 'services-subtitle' },
            { selector: '#servicios .service-card:nth-child(1) h3', key: 'service-1-title' },
            { selector: '#servicios .service-card:nth-child(1) p', key: 'service-1-desc' },
            { selector: '#servicios .service-card:nth-child(2) h3', key: 'service-2-title' },
            { selector: '#servicios .service-card:nth-child(2) p', key: 'service-2-desc' },
            { selector: '#servicios .service-card:nth-child(3) h3', key: 'service-3-title' },
            { selector: '#servicios .service-card:nth-child(3) p', key: 'service-3-desc' },
            { selector: '#servicios .service-card:nth-child(4) h3', key: 'service-4-title' },
            { selector: '#servicios .service-card:nth-child(4) p', key: 'service-4-desc' },
            { selector: '#servicios .service-card:nth-child(5) h3', key: 'service-5-title' },
            { selector: '#servicios .service-card:nth-child(5) p', key: 'service-5-desc' },
            { selector: '#servicios .service-card:nth-child(6) h3', key: 'service-6-title' },
            { selector: '#servicios .service-card:nth-child(6) p', key: 'service-6-desc' },
            
            // Proyectos
            { selector: '#proyectos .section-title', key: 'projects-title' },
            { selector: '#proyectos .section-subtitle', key: 'projects-subtitle' },
            
            // Clientes
            { selector: '#clientes .section-title', key: 'clients-title' },
            { selector: '#clientes .section-subtitle', key: 'clients-subtitle' },
            
            // Contacto
            { selector: '#contacto .section-title', key: 'contact-title' },
            { selector: '#contacto .section-subtitle', key: 'contact-subtitle' },
            { selector: '.contact-info h3', key: 'contact-info-title' },
            { selector: 'label[for="fullname"]', key: 'form-fullname' },
            { selector: 'label[for="email"]', key: 'form-email' },
            { selector: 'label[for="phone"]', key: 'form-phone' },
            { selector: 'label[for="company"]', key: 'form-company' },
            { selector: 'label[for="message"]', key: 'form-project' },
            { selector: '.btn-submit', key: 'form-submit', isHTML: true },
            
            // Información de contacto
            { selector: '.contact-item:nth-child(1) h4', key: 'contact-address-label' },
            { selector: '.contact-item:nth-child(1) p', key: 'contact-address-value' },
            { selector: '.contact-item:nth-child(2) h4', key: 'contact-phone-label' },
            { selector: '.contact-item:nth-child(2) p', key: 'contact-phone-value' },
            { selector: '.contact-item:nth-child(3) h4', key: 'contact-email-label' },
            { selector: '.contact-item:nth-child(4) h4', key: 'contact-schedule-label' },
            { selector: '.contact-item:nth-child(4) p', key: 'contact-schedule-value', isHTML: true },
            { selector: '.contact-item:nth-child(5) h4', key: 'contact-response-label' },
            { selector: '.contact-item:nth-child(5) p', key: 'contact-response-value', isHTML: true },
            { selector: '.contact-additional h4', key: 'contact-cta-title' },
            { selector: '.contact-additional p', key: 'contact-cta-desc' },
            
            // Footer
            { selector: '.footer-section:nth-child(1) p', key: 'footer-desc' },
            { selector: '.footer-section:nth-child(2) h4', key: 'footer-services-title' },
            { selector: '.footer-section:nth-child(3) h4', key: 'footer-company-title' },
            { selector: '.footer-section:nth-child(4) h4', key: 'footer-contact-title' },
            { selector: '.footer-bottom p', key: 'footer-copyright' },
            
            // Chatbot
            { selector: '#chatbot-title', key: 'chatbot-title' }
        ];
        
        this.init();
    }

    init() {
        this.setupDropdown();
        console.log('✅ AlternaTranslator inicializado');
        
        // Auto-detectar idioma del navegador
        const browserLang = navigator.language.split('-')[0];
        if (this.translations[browserLang] && browserLang !== 'es') {
            setTimeout(() => this.translateTo(browserLang), 500);
        }
    }

    setupDropdown() {
        const toggle = document.querySelector('.language-toggle');
        const options = document.querySelector('.translate-options');
        
        if (!toggle || !options) {
            console.warn('❌ Elementos de traducción no encontrados');
            return;
        }

        // Toggle dropdown
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            options.classList.toggle('show');
        });

        // Cerrar al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!options.contains(e.target) && e.target !== toggle) {
                options.classList.remove('show');
            }
        });

        // Prevenir cierre al hacer clic dentro
        options.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    translateTo(lang) {
        if (!this.translations[lang]) {
            console.warn(`❌ Idioma ${lang} no disponible`);
            return;
        }

        console.log(`🌐 Traduciendo a ${lang.toUpperCase()}`);
        this.currentLanguage = lang;

        // Traducir todos los elementos
        this.elementMap.forEach(({ selector, key, isHTML }) => {
            const elements = document.querySelectorAll(selector);
            const translation = this.translations[lang][key];
            
            if (!translation) {
                console.warn(`⚠️ Traducción faltante para: ${key}`);
                return;
            }

            elements.forEach(element => {
                if (element) {
                    if (isHTML) {
                        element.innerHTML = translation.includes('<i class="fas fa-paper-plane"></i>') 
                            ? translation 
                            : (key === 'form-submit' ? `<i class="fas fa-paper-plane"></i> ${translation}` : translation);
                    } else {
                        element.textContent = translation;
                    }
                }
            });
        });

        // Manejar elementos específicos de proyectos
        this.translateProjectButtons(lang);

        // Actualizar placeholders
        this.updatePlaceholders(lang);

        // Cerrar dropdown
        const dropdown = document.querySelector('.translate-options');
        if (dropdown) dropdown.classList.remove('show');

        // Notificar al chatbot
        if (window.alternaAI && window.alternaAI.updateLanguage) {
            window.alternaAI.updateLanguage(lang);
        }

        // Mostrar notificación
        this.showNotification(lang);
    }

    translateProjectButtons(lang) {
        const projectButtons = document.querySelectorAll('#proyectos .btn');
        const buttonText = this.translations[lang]['project-btn'];
        
        projectButtons.forEach(btn => {
            if (btn.textContent.includes('Ver Proyecto') || 
                btn.textContent.includes('View Project') || 
                btn.textContent.includes('Ver Projeto')) {
                btn.textContent = buttonText;
            }
        });
    }

    updatePlaceholders(lang) {
        const placeholderMap = {
            'fullname': lang === 'es' ? 'Tu nombre completo' : lang === 'en' ? 'Your full name' : 'Seu nome completo',
            'email': lang === 'es' ? 'tu@email.com' : lang === 'en' ? 'your@email.com' : 'seu@email.com',
            'phone': lang === 'es' ? '+54 341 123-4567 (opcional)' : lang === 'en' ? '+54 341 123-4567 (optional)' : '+54 341 123-4567 (opcional)',
            'company': lang === 'es' ? 'Nombre de tu empresa (opcional)' : lang === 'en' ? 'Your company name (optional)' : 'Nome da sua empresa (opcional)',
            'message': lang === 'es' ? 'Describe tu proyecto eléctrico, instalaciones necesarias, timeline, etc.' : 
                      lang === 'en' ? 'Describe your electrical project, necessary installations, timeline, etc.' :
                      'Descreva seu projeto elétrico, instalações necessárias, cronograma, etc.'
        };

        Object.entries(placeholderMap).forEach(([id, placeholder]) => {
            const element = document.getElementById(id);
            if (element) {
                element.placeholder = placeholder;
            }
        });
    }

    showNotification(lang) {
        const messages = {
            'es': 'Idioma cambiado a Español',
            'en': 'Language changed to English',
            'pt': 'Idioma alterado para Português'
        };

        const notification = document.createElement('div');
        notification.className = 'translation-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-globe"></i>
                <span>${messages[lang]}</span>
            </div>
        `;

        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Estilos para notificación de traducción
const translationStyles = `
.translation-notification {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
}

.translation-notification.show {
    transform: translateX(0);
}

.notification-content {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    box-shadow: 0 10px 30px rgba(32, 178, 170, 0.3);
    font-size: 0.9rem;
}

.notification-content i {
    font-size: 1.1rem;
}
`;

// Inyectar estilos
const styleSheet = document.createElement('style');
styleSheet.textContent = translationStyles;
document.head.appendChild(styleSheet);

// Función global para compatibilidad
function translateTo(lang) {
    if (window.alternaTranslator) {
        window.alternaTranslator.translateTo(lang);
    }
}

function initializeTranslator() {
    window.alternaTranslator = new AlternaTranslator();
}

// Auto-inicializar cuando DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    if (!window.alternaTranslator) {
        initializeTranslator();
    }
});

// Exportar funciones
window.translateTo = translateTo;
window.initializeTranslator = initializeTranslator;