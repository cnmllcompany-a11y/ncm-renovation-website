// Language management system
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'es';
        this.translations = {
            es: {
                // Navigation
                'nav.home': 'Inicio',
                'nav.services': 'Servicios',
                'nav.portfolio': 'Proyectos',
                'nav.about': 'Nosotros',
                'nav.contact': 'Contacto',
                
                // Common
                'common.requestQuote': 'Solicitar Presupuesto',
                'common.viewProjects': 'Ver Proyectos',
                'common.seeAllProjects': 'Ver Todos los Proyectos',
                'common.sendMessage': 'Enviar Mensaje',
                'common.phone': 'Teléfono',
                'common.email': 'Correo Electrónico',
                'common.address': 'Dirección',
                'common.officeHours': 'Horario de Oficina',
                'common.all': 'Todos',
                'common.kitchens': 'Cocinas',
                'common.bathrooms': 'Baños',
                'common.living': 'Salas',
                
                // Index page
                'index.title': 'Transforma tu hogar con NCM Renovation',
                'index.subtitle': 'Expertos en renovaciones de casas, creando espacios que reflejan tu estilo y mejoran tu calidad de vida.',
                'index.about.title': 'Sobre Nosotros',
                'index.about.text': 'En NCM, transformamos tus ideas en un programa arquitectónico claro y una línea de tiempo basada en hitos. Integramos diseño interior/exterior, estructura y MEP (es decir, HVAC, eléctrico y plomería) para garantizar la comodidad, seguridad y eficiencia de tu hogar. Seleccionamos materiales de alto rendimiento y aplicamos ingeniería de valor (optimizando la relación costo-beneficio sin sacrificar la calidad).\n\nEn cada etapa, realizamos QA/QC (Aseguramiento y Control de Calidad), con listas de verificación, pruebas y revisiones de acabados para asegurar que todo esté perfecto. Tú defines el estilo; nosotros lo hacemos realidad con detalle técnico y calidez, siempre considerando cómo vive tu familia hoy... y mañana.',
                'index.services.title': 'Nuestros Servicios',
                'index.services.subtitle': 'Ofrecemos una amplia gama de servicios de renovación para transformar tu hogar en el espacio de tus sueños.',
                'index.services.integral.title': 'Renovaciones Integrales',
                'index.services.integral.desc': 'Transformación completa de tu hogar',
                'index.services.kitchen.title': 'Cocinas y Baños',
                'index.services.kitchen.desc': 'Remodelación especializada',
                'index.services.painting.title': 'Pintura',
                'index.services.painting.desc': 'Interior y exterior profesional',
                'index.services.landscaping.title': 'Paisajismo',
                'index.services.landscaping.desc': 'Diseño de exteriores',
                'index.projects.title': 'Proyectos Destacados',
                'index.projects.subtitle': 'Descubre algunos de nuestros trabajos más recientes y exitosos.',
                'index.projects.kitchen.title': 'COCINA MODERNA EN TX',
                'index.projects.kitchen.desc': 'Transformación completa de una cocina, combinando funcionalidad y diseño contemporáneo.',
                'index.projects.bathroom.title': 'BAÑO DE LUJO TX',
                'index.projects.bathroom.desc': 'Remodelación de un baño, creando un espacio relajante y sofisticado con acabados de alta calidad.',
                'index.projects.living.title': 'SALA DE ESTAR TX',
                'index.projects.living.desc': 'Renovación de una sala de estar, maximizando el espacio y la luz natural con un estilo minimalista.',
                'index.contact.title': '¿Listo para tu próximo proyecto?',
                'index.contact.subtitle': 'Contáctanos hoy para una consulta gratuita y descubre cómo podemos transformar tu hogar.',
                'index.contact.name': 'Nombre',
                'index.contact.email': 'Correo Electrónico',
                'index.contact.phone': 'Teléfono',
                'index.contact.message': 'Mensaje',
                'index.contact.messagePlaceholder': 'Cuéntanos sobre tu proyecto',
                'index.contact.officeHours': 'Lun - Sáb: 8 AM - 9 PM',
                'index.contact.address': '123 Main St, Austin, TX 78701',
                'index.contact.phoneNumber': '7372355952',
                'index.contact.emailAddress': 'ncmllcompany@gmail.com',
                
                // Services page
                'services.title': 'Nuestros Servicios',
                'services.subtitle': 'Transformamos tu hogar con servicios profesionales de renovación. Desde cocinas hasta ampliaciones, creamos espacios que reflejan tu estilo y mejoran tu calidad de vida.',
                'services.kitchen.title': 'Renovaciones de Cocinas',
                'services.kitchen.desc': 'Transforma el corazón de tu hogar con nuestras renovaciones de cocinas. Desde diseños modernos hasta estilos clásicos, creamos espacios funcionales y estéticamente agradables que se adaptan a tu estilo de vida.',
                'services.kitchen.custom': 'Diseño personalizado y funcional',
                'services.kitchen.materials': 'Materiales de alta calidad',
                'services.kitchen.installation': 'Instalación profesional',
                'services.bathroom.title': 'Renovaciones de Baños',
                'services.bathroom.desc': 'Convierte tu baño en un oasis de relajación con nuestras renovaciones. Ofrecemos soluciones personalizadas, desde pequeñas actualizaciones hasta transformaciones completas, utilizando materiales de alta calidad y diseños innovadores.',
                'services.bathroom.innovative': 'Diseños innovadores y modernos',
                'services.bathroom.luxury': 'Acabados de lujo y calidad',
                'services.bathroom.solutions': 'Soluciones personalizadas',
                'services.expansion.title': 'Ampliaciones de Viviendas',
                'services.expansion.desc': 'Expande tu espacio vital con nuestras ampliaciones de viviendas. Ya sea que necesites una nueva habitación, una oficina en casa o una sala de estar más grande, te ayudamos a crear el hogar de tus sueños.',
                'services.expansion.rooms': 'Nuevas habitaciones y espacios',
                'services.expansion.office': 'Oficinas en casa funcionales',
                'services.expansion.design': 'Diseño integrado y armonioso',
                
                // Portfolio page
                'portfolio.title': 'Nuestro Último Trabajo',
                'portfolio.subtitle': 'Descubre algunos de nuestros recientes trabajos, se adjuntan fotos reales de la última remodelación, nuestro compromiso con la calidad y la excelencia en el diseño es nuestra prioridad.',
                'portfolio.kitchen.title': 'Renovación de Cocina Moderna',
                'portfolio.kitchen.desc': 'Transformación completa con diseño contemporáneo y funcionalidad máxima.',
                'portfolio.bathroom.title': 'Transformación de Baño',
                'portfolio.bathroom.desc': 'Espacio de lujo con acabados premium y diseño innovador.',
                'portfolio.living.title': 'Renovación de Sala de Estar',
                'portfolio.living.desc': 'Espacio acogedor con diseño minimalista y máxima funcionalidad.',
                'portfolio.outdoor.title': 'Espacio de Vida Exterior',
                'portfolio.outdoor.desc': 'Terraza moderna con diseño integrado y materiales duraderos.',
                'portfolio.luxury.title': 'Cocina de Lujo en Austin',
                'portfolio.luxury.desc': 'Diseño de alta gama con electrodomésticos premium y acabados exclusivos.',
                'portfolio.spa.title': 'Baño Spa en Dallas',
                'portfolio.spa.desc': 'Experiencia de spa en casa con tecnología avanzada y diseño relajante.',
                
                // About page
                'about.title': 'Sobre Nosotros',
                'about.subtitle': 'Conoce la historia y valores que nos impulsan a crear hogares extraordinarios',
                'about.history.title': 'Nuestra Historia',
                'about.history.text': 'Fundada en 2015, comenzamos como un pequeño equipo con un gran sueño: transformar casas en hogares que reflejen el estilo único y las necesidades de cada familia. Nuestro viaje comenzó en Austin, Texas, y desde entonces se ha expandido por todo el estado, tocando las vidas de innumerables propietarios.',
                'about.stats.projects': 'Proyectos Completados',
                'about.stats.experience': 'Años de Experiencia',
                'about.stats.satisfaction': 'Satisfacción del Cliente',
                'about.mission.title': 'Nuestra Misión',
                'about.mission.text': 'Proporcionar servicios excepcionales de renovación de hogares que mejoren la calidad de vida de nuestros clientes, manteniendo los más altos estándares de artesanía y satisfacción del cliente.',
                'about.values.title': 'Nuestros Valores',
                'about.values.integrity.title': 'Integridad',
                'about.values.integrity.desc': 'Honestidad, transparencia y prácticas éticas en cada proyecto.',
                'about.values.quality.title': 'Calidad',
                'about.values.quality.desc': 'Artesanía superior y los mejores materiales disponibles.',
                'about.values.innovation.title': 'Innovación',
                'about.values.innovation.desc': 'Creatividad para satisfacer necesidades en evolución.',
                'about.values.collaboration.title': 'Colaboración',
                'about.values.collaboration.desc': 'Trabajo en equipo para resultados excepcionales.',
                'about.team.title': 'Conoce al Equipo',
                'about.team.ceo.name': 'Ethan Carter',
                'about.team.ceo.position': 'CEO & Fundador',
                'about.team.ceo.desc': 'Con más de 15 años de experiencia en construcción y renovación, Ethan lidera la visión estratégica de la empresa.',
                'about.team.design.name': 'Olivia Bennett',
                'about.team.design.position': 'Líder de Diseño',
                'about.team.design.desc': 'Arquitecta de interiores con pasión por crear espacios funcionales y hermosos que reflejen la personalidad de cada cliente.',
                'about.team.project.name': 'Noah Thompson',
                'about.team.project.position': 'Gerente de Proyectos',
                'about.team.project.desc': 'Especialista en gestión de proyectos con enfoque en entregas puntuales y presupuestos precisos.',
                'about.testimonials.title': 'Lo que Dicen Nuestros Clientes',
                'about.testimonials.1.text': '"El equipo fue increíblemente profesional y atento a nuestras necesidades. ¡Transformaron nuestra cocina anticuada en una obra maestra moderna!"',
                'about.testimonials.1.author': '- Sophia Rodriguez',
                'about.testimonials.2.text': '"De principio a fin, el proceso de renovación fue perfecto. ¡No podríamos estar más felices con los resultados!"',
                'about.testimonials.2.author': '- Liam Walker',
                
                // Contact page
                'contact.title': 'Contáctanos',
                'contact.subtitle': 'Estamos aquí para ayudarte con tus necesidades de renovación de hogar. Contáctanos para una consulta gratuita y descubre cómo podemos transformar tu espacio.',
                'contact.form.title': 'Envíanos un Mensaje',
                'contact.form.name': 'Nombre Completo',
                'contact.form.email': 'Correo Electrónico',
                'contact.form.phone': 'Teléfono',
                'contact.form.service': 'Tipo de Servicio',
                'contact.form.service.select': 'Selecciona un servicio',
                'contact.form.service.general': 'Consulta General',
                'contact.form.service.kitchen': 'Renovación de Cocina',
                'contact.form.service.bathroom': 'Renovación de Baño',
                'contact.form.service.expansion': 'Ampliación de Vivienda',
                'contact.form.service.painting': 'Pintura Interior/Exterior',
                'contact.form.service.landscaping': 'Paisajismo',
                'contact.form.message': 'Mensaje',
                'contact.form.messagePlaceholder': 'Cuéntanos sobre tu proyecto',
                'contact.info.title': 'Información de Contacto',
                'contact.info.phone': 'Teléfono',
                'contact.info.email': 'Correo Electrónico',
                'contact.info.hours': 'Horario de Oficina',
                'contact.info.address': 'Dirección',
                'contact.info.phoneNumber': '7372355952',
                'contact.info.emailAddress': 'ncmllcompany@gmail.com',
                'contact.info.officeHours': 'Lun - Sáb: 8 AM - 9 PM',
                'contact.info.addressText': '123 Main St, Austin, TX 78701',
                
                // Footer
                'footer.description': 'Transformamos casas en hogares de ensueño, la reciprocidad y la confianza es la clave para poder generar Calidad, innovación y excelencia en cada proyecto.',
                'footer.navigation': 'Navegación',
                'footer.contact': 'Contacto',
                'footer.copyright': '© 2025 NCM Renovaciones. Todos los derechos reservados.',
                
                // Form messages
                'form.success': '¡Gracias por contactarnos! Te responderemos pronto.',
                'form.success.contact': '¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos en las próximas 24 horas.'
            },
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.services': 'Services',
                'nav.portfolio': 'Projects',
                'nav.about': 'About Us',
                'nav.contact': 'Contact',
                
                // Common
                'common.requestQuote': 'Request Quote',
                'common.viewProjects': 'View Projects',
                'common.seeAllProjects': 'See All Projects',
                'common.sendMessage': 'Send Message',
                'common.phone': 'Phone',
                'common.email': 'Email',
                'common.address': 'Address',
                'common.officeHours': 'Office Hours',
                'common.all': 'All',
                'common.kitchens': 'Kitchens',
                'common.bathrooms': 'Bathrooms',
                'common.living': 'Living Rooms',
                
                // Index page
                'index.title': 'Transform your home with NCM Renovation',
                'index.subtitle': 'Home renovation experts, creating spaces that reflect your style and improve your quality of life.',
                'index.about.title': 'About Us',
                'index.about.text': 'At NCM, we transform your ideas into a clear architectural program and a milestone-based timeline. We integrate interior/exterior design, structure, and MEP—that is, HVAC, electrical, and plumbing—to ensure your home\'s comfort, safety, and efficiency. We select high-performance materials and apply value engineering (optimizing cost-benefit without sacrificing quality).\n\nAt every stage, we perform QA/QC (Quality Assurance and Control), with checklists, testing, and finish reviews to ensure everything is just right. You define the style; we bring it to life with technical detail and warmth, always considering how your family lives today… and tomorrow.',
                'index.services.title': 'Our Services',
                'index.services.subtitle': 'We offer a wide range of renovation services to transform your home into the space of your dreams.',
                'index.services.integral.title': 'Complete Renovations',
                'index.services.integral.desc': 'Complete transformation of your home',
                'index.services.kitchen.title': 'Kitchens & Bathrooms',
                'index.services.kitchen.desc': 'Specialized remodeling',
                'index.services.painting.title': 'Painting',
                'index.services.painting.desc': 'Professional interior and exterior',
                'index.services.landscaping.title': 'Landscaping',
                'index.services.landscaping.desc': 'Exterior design',
                'index.projects.title': 'Featured Projects',
                'index.projects.subtitle': 'Discover some of our most recent and successful works.',
                'index.projects.kitchen.title': 'MODERN KITCHEN IN TX',
                'index.projects.kitchen.desc': 'Complete kitchen transformation, combining functionality and contemporary design.',
                'index.projects.bathroom.title': 'LUXURY BATHROOM TX',
                'index.projects.bathroom.desc': 'Bathroom remodeling, creating a relaxing and sophisticated space with high-quality finishes.',
                'index.projects.living.title': 'LIVING ROOM TX',
                'index.projects.living.desc': 'Living room renovation, maximizing space and natural light with a minimalist style.',
                'index.contact.title': 'Ready for your next project?',
                'index.contact.subtitle': 'Contact us today for a free consultation and discover how we can transform your home.',
                'index.contact.name': 'Name',
                'index.contact.email': 'Email',
                'index.contact.phone': 'Phone',
                'index.contact.message': 'Message',
                'index.contact.messagePlaceholder': 'Tell us about your project',
                'index.contact.officeHours': 'Mon - Sat: 8 AM - 9 PM',
                'index.contact.address': '123 Main St, Austin, TX 78701',
                'index.contact.phoneNumber': '7372355952',
                'index.contact.emailAddress': 'ncmllcompany@gmail.com',
                
                // Services page
                'services.title': 'Our Services',
                'services.subtitle': 'We transform your home with professional renovation services. From kitchens to expansions, we create spaces that reflect your style and improve your quality of life.',
                'services.kitchen.title': 'Kitchen Renovations',
                'services.kitchen.desc': 'Transform the heart of your home with our kitchen renovations. From modern designs to classic styles, we create functional and aesthetically pleasing spaces that adapt to your lifestyle.',
                'services.kitchen.custom': 'Custom and functional design',
                'services.kitchen.materials': 'High-quality materials',
                'services.kitchen.installation': 'Professional installation',
                'services.bathroom.title': 'Bathroom Renovations',
                'services.bathroom.desc': 'Turn your bathroom into a relaxation oasis with our renovations. We offer personalized solutions, from small updates to complete transformations, using high-quality materials and innovative designs.',
                'services.bathroom.innovative': 'Innovative and modern designs',
                'services.bathroom.luxury': 'Luxury and quality finishes',
                'services.bathroom.solutions': 'Personalized solutions',
                'services.expansion.title': 'Home Expansions',
                'services.expansion.desc': 'Expand your living space with our home expansions. Whether you need a new room, a home office, or a larger living room, we help you create the home of your dreams.',
                'services.expansion.rooms': 'New rooms and spaces',
                'services.expansion.office': 'Functional home offices',
                'services.expansion.design': 'Integrated and harmonious design',
                
                // Portfolio page
                'portfolio.title': 'Our Latest Work',
                'portfolio.subtitle': 'Discover some of our recent works, real photos of the latest renovation are attached, our commitment to quality and excellence in design is our priority.',
                'portfolio.kitchen.title': 'Modern Kitchen Renovation',
                'portfolio.kitchen.desc': 'Complete transformation with contemporary design and maximum functionality.',
                'portfolio.bathroom.title': 'Bathroom Transformation',
                'portfolio.bathroom.desc': 'Luxury space with premium finishes and innovative design.',
                'portfolio.living.title': 'Living Room Renovation',
                'portfolio.living.desc': 'Cozy space with minimalist design and maximum functionality.',
                'portfolio.outdoor.title': 'Outdoor Living Space',
                'portfolio.outdoor.desc': 'Modern terrace with integrated design and durable materials.',
                'portfolio.luxury.title': 'Luxury Kitchen in Austin',
                'portfolio.luxury.desc': 'High-end design with premium appliances and exclusive finishes.',
                'portfolio.spa.title': 'Spa Bathroom in Dallas',
                'portfolio.spa.desc': 'Spa experience at home with advanced technology and relaxing design.',
                
                // About page
                'about.title': 'About Us',
                'about.subtitle': 'Learn about the history and values that drive us to create extraordinary homes',
                'about.history.title': 'Our History',
                'about.history.text': 'Founded in 2015, we started as a small team with a big dream: to transform houses into homes that reflect the unique style and needs of each family. Our journey began in Austin, Texas, and has since expanded throughout the state, touching the lives of countless homeowners.',
                'about.stats.projects': 'Completed Projects',
                'about.stats.experience': 'Years of Experience',
                'about.stats.satisfaction': 'Customer Satisfaction',
                'about.mission.title': 'Our Mission',
                'about.mission.text': 'To provide exceptional home renovation services that improve our clients\' quality of life, maintaining the highest standards of craftsmanship and customer satisfaction.',
                'about.values.title': 'Our Values',
                'about.values.integrity.title': 'Integrity',
                'about.values.integrity.desc': 'Honesty, transparency and ethical practices in every project.',
                'about.values.quality.title': 'Quality',
                'about.values.quality.desc': 'Superior craftsmanship and the best materials available.',
                'about.values.innovation.title': 'Innovation',
                'about.values.innovation.desc': 'Creativity to meet evolving needs.',
                'about.values.collaboration.title': 'Collaboration',
                'about.values.collaboration.desc': 'Teamwork for exceptional results.',
                'about.team.title': 'Meet the Team',
                'about.team.ceo.name': 'Ethan Carter',
                'about.team.ceo.position': 'CEO & Founder',
                'about.team.ceo.desc': 'With over 15 years of experience in construction and renovation, Ethan leads the company\'s strategic vision.',
                'about.team.design.name': 'Olivia Bennett',
                'about.team.design.position': 'Design Leader',
                'about.team.design.desc': 'Interior architect with a passion for creating functional and beautiful spaces that reflect each client\'s personality.',
                'about.team.project.name': 'Noah Thompson',
                'about.team.project.position': 'Project Manager',
                'about.team.project.desc': 'Project management specialist focused on timely deliveries and accurate budgets.',
                'about.testimonials.title': 'What Our Clients Say',
                'about.testimonials.1.text': '"The team was incredibly professional and attentive to our needs. They transformed our outdated kitchen into a modern masterpiece!"',
                'about.testimonials.1.author': '- Sophia Rodriguez',
                'about.testimonials.2.text': '"From start to finish, the renovation process was perfect. We couldn\'t be happier with the results!"',
                'about.testimonials.2.author': '- Liam Walker',
                
                // Contact page
                'contact.title': 'Contact Us',
                'contact.subtitle': 'We are here to help you with your home renovation needs. Contact us for a free consultation and discover how we can transform your space.',
                'contact.form.title': 'Send us a Message',
                'contact.form.name': 'Full Name',
                'contact.form.email': 'Email',
                'contact.form.phone': 'Phone',
                'contact.form.service': 'Service Type',
                'contact.form.service.select': 'Select a service',
                'contact.form.service.general': 'General Consultation',
                'contact.form.service.kitchen': 'Kitchen Renovation',
                'contact.form.service.bathroom': 'Bathroom Renovation',
                'contact.form.service.expansion': 'Home Expansion',
                'contact.form.service.painting': 'Interior/Exterior Painting',
                'contact.form.service.landscaping': 'Landscaping',
                'contact.form.message': 'Message',
                'contact.form.messagePlaceholder': 'Tell us about your project',
                'contact.info.title': 'Contact Information',
                'contact.info.phone': 'Phone',
                'contact.info.email': 'Email',
                'contact.info.hours': 'Office Hours',
                'contact.info.address': 'Address',
                'contact.info.phoneNumber': '7372355952',
                'contact.info.emailAddress': 'ncmllcompany@gmail.com',
                'contact.info.officeHours': 'Mon - Sat: 8 AM - 9 PM',
                'contact.info.addressText': '123 Main St, Austin, TX 78701',
                
                // Footer
                'footer.description': 'We transform houses into dream homes, reciprocity and trust is the key to generate Quality, innovation and excellence in every project.',
                'footer.navigation': 'Navigation',
                'footer.contact': 'Contact',
                'footer.copyright': '© 2025 NCM Renovations. All rights reserved.',
                
                // Form messages
                'form.success': 'Thank you for contacting us! We will respond soon.',
                'form.success.contact': 'Thank you for contacting us! We have received your message and will respond within the next 24 hours.'
            }
        };
        
        this.init();
    }
    
    init() {
        this.updateLanguage();
        this.setupLanguageToggle();
    }
    
    updateLanguage() {
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage;
        
        // Update all elements with data-translate attribute
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translations[this.currentLanguage][key];
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update elements with data-translate-placeholder attribute
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            const translation = this.translations[this.currentLanguage][key];
            if (translation) {
                element.placeholder = translation;
            }
        });
        
        // Update select options with data-translate attribute
        const selectOptions = document.querySelectorAll('option[data-translate]');
        selectOptions.forEach(option => {
            const key = option.getAttribute('data-translate');
            const translation = this.translations[this.currentLanguage][key];
            if (translation) {
                option.textContent = translation;
            }
        });
        
        // Update language button text
        const languageButton = document.querySelector('#language-button');
        if (languageButton) {
            const languageText = languageButton.querySelector('.language-text');
            if (languageText) {
                languageText.textContent = this.currentLanguage === 'es' ? 'Español' : 'English';
            }
        }
    }
    
    setupLanguageToggle() {
        const languageButton = document.querySelector('#language-button');
        if (languageButton) {
            languageButton.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }
    
    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
        localStorage.setItem('language', this.currentLanguage);
        this.updateLanguage();
    }
    
    getTranslation(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageManager;
}
