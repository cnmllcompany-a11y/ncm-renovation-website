// Language management system
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.translations = {
            es: {
                // Navigation
                'nav.home': 'Inicio',
                'nav.services': 'Servicios',
                'nav.portfolio': 'Proyectos',
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
                'index.title': 'Transforma tu hogar con CNM Renovation',
                'index.subtitle': 'Expertos en renovaciones de casas, creando espacios que reflejan tu estilo y mejoran tu calidad de vida.',
                'index.about.title': 'Sobre Nosotros',
                'index.about.text': 'En CNM Renovation, puede que seamos nuevos, pero estamos construyendo una base sólida — un proyecto, un cliente satisfecho a la vez.\n\nNuestra misión es simple: entregar excelencia y satisfacción en cada remodelación que completamos. Combinamos mano de obra de calidad, atención al detalle y los mejores precios del mercado para hacer realidad tu visión.\n\nPorque estamos creciendo, estamos comprometidos a destacarnos ofreciendo un valor inigualable — resultados premium sin el costo premium. Nuestro trabajo habla por sí mismo, desde casas personalizadas hasta remodelaciones a gran escala en Austin, Round Rock y Hutto. Explora nuestra galería y descubre por qué nuestros clientes confían en nosotros para transformar sus espacios en algo extraordinario.',
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
                'portfolio.title': 'Nuestro Portafolio Completo',
                'portfolio.subtitle': 'Descubre algunos de nuestros trabajos más recientes. Cada proyecto refleja nuestro compromiso con la calidad y la excelencia en el diseño.',
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
                'footer.copyright': '© 2025 CNM Renovaciones. Todos los derechos reservados.',
                
                // Form messages
                'form.success': '¡Gracias por contactarnos! Te responderemos pronto.',
                'form.success.contact': '¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos en las próximas 24 horas.',
                'form.error': 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.',

                // Thank You page
                'thankyou.title': '¡Gracias por contactarnos!',
                'thankyou.message': 'Hemos recibido tu mensaje exitosamente. Nuestro equipo revisará tu solicitud y te responderemos en las próximas 24 horas.',
                'thankyou.next.title': '¿Qué sigue?',
                'thankyou.step1.title': 'Revisión',
                'thankyou.step1.desc': 'Revisaremos tu proyecto en detalle',
                'thankyou.step2.title': 'Contacto',
                'thankyou.step2.desc': 'Te llamaremos para coordinar una cita',
                'thankyou.step3.title': 'Propuesta',
                'thankyou.step3.desc': 'Te enviaremos una propuesta personalizada',
                'thankyou.urgent.title': '¿Necesitas ayuda urgente?',
                'thankyou.urgent.desc': 'Si tu proyecto es urgente, puedes contactarnos directamente:',
                'thankyou.button.home': 'Volver al Inicio',
                'thankyou.button.portfolio': 'Ver Nuestros Proyectos'
            },
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.services': 'Services',
                'nav.portfolio': 'Projects',
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
                'index.title': 'Transform your home with CNM Renovation',
                'index.subtitle': 'Home renovation experts, creating spaces that reflect your style and improve your quality of life.',
                'index.about.title': 'About Us',
                'index.about.text': 'At CNM Renovation, we may be new, but we\'re building a strong foundation — one project, one satisfied client at a time.\n\nOur mission is simple: to deliver excellence and satisfaction in every remodel we complete. We combine quality craftsmanship, attention to detail, and the best prices in the market to make your vision a reality.\n\nBecause we\'re growing, we\'re committed to standing out by offering unmatched value — premium results without the premium cost. Our work speaks for itself, from custom homes to large-scale remodels across Austin, Round Rock, and Hutto. Explore our gallery and see why our clients trust us to transform their spaces into something extraordinary.',
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
                'portfolio.title': 'Our Complete Portfolio',
                'portfolio.subtitle': 'Discover some of our most recent works. Each project reflects our commitment to quality and excellence in design.',
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
                'footer.copyright': '© 2025 CNM Renovations. All rights reserved.',
                
                // Form messages
                'form.success': 'Thank you for contacting us! We will respond soon.',
                'form.success.contact': 'Thank you for contacting us! We have received your message and will respond within the next 24 hours.',
                'form.error': 'There was an error sending your message. Please try again.',

                // Thank You page
                'thankyou.title': 'Thank you for contacting us!',
                'thankyou.message': 'We have successfully received your message. Our team will review your request and respond within the next 24 hours.',
                'thankyou.next.title': 'What\'s next?',
                'thankyou.step1.title': 'Review',
                'thankyou.step1.desc': 'We will review your project in detail',
                'thankyou.step2.title': 'Contact',
                'thankyou.step2.desc': 'We will call you to schedule an appointment',
                'thankyou.step3.title': 'Proposal',
                'thankyou.step3.desc': 'We will send you a personalized proposal',
                'thankyou.urgent.title': 'Need urgent help?',
                'thankyou.urgent.desc': 'If your project is urgent, you can contact us directly:',
                'thankyou.button.home': 'Back to Home',
                'thankyou.button.portfolio': 'View Our Projects'
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
