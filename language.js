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
                'index.about.text': 'En CNM, transformamos tus ideas en un programa arquitectónico claro y una línea de tiempo basada en hitos. Integramos diseño interior/exterior, estructura y MEP (es decir, HVAC, eléctrico y plomería) para garantizar la comodidad, seguridad y eficiencia de tu hogar. Seleccionamos materiales de alto rendimiento y aplicamos ingeniería de valor (optimizando la relación costo-beneficio sin sacrificar la calidad).\n\nEn cada etapa, realizamos QA/QC (Aseguramiento y Control de Calidad), con listas de verificación, pruebas y revisiones de acabados para asegurar que todo esté perfecto. Tú defines el estilo; nosotros lo hacemos realidad con detalle técnico y calidez, siempre considerando cómo vive tu familia hoy... y mañana.',
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
                
                // Commercial projects page
                'commercial.hero.tag': 'Hutto, Texas · 2.5M USD',
                'commercial.hero.title': '💎 PROYECTOS COMERCIALES',
                'commercial.hero.subtitle': 'Diseñamos y entregamos experiencias residenciales de ultra lujo para inversores que buscan diferenciación real.',
                'commercial.hero.ctaPrimary': 'Agenda una reunión privada',
                'commercial.hero.ctaSecondary': 'Ver alcance completo',
                'commercial.services.heading': '🔧 Lo que hicimos en la mansión',
                'commercial.services.paint.title': 'Pintura y acabados premium',
                'commercial.services.paint.item1': 'Sello antihumedad y aislamiento térmico en toda la envolvente',
                'commercial.services.paint.item2': 'Paletas personalizadas con acabados mate y alto brillo',
                'commercial.services.paint.item3': 'Revestimientos decorativos en yeso veneciano y paneles 3D',
                'commercial.services.electrical.title': 'Electricidad y domótica',
                'commercial.services.electrical.item1': 'Rediseño eléctrico certificado con paneles inteligentes',
                'commercial.services.electrical.item2': 'Iluminación arquitectónica controlada por escenas',
                'commercial.services.electrical.item3': 'Sistema domótico integral (clima, seguridad, audio)',
                'commercial.services.carpentry.title': 'Carpintería y madera fina',
                'commercial.services.carpentry.item1': 'Mobiliario integrado en biblioteca, bar y suites',
                'commercial.services.carpentry.item2': 'Puertas macizas con tallados personalizados',
                'commercial.services.carpentry.item3': 'Revestimientos en nogal americano y roble blanco',
                'commercial.services.plumbing.title': 'Instalaciones hidráulicas y climatización',
                'commercial.services.plumbing.item1': 'Renovación de plomería de alta capacidad y eficiencia',
                'commercial.services.plumbing.item2': 'Sistema HVAC zonificado con filtración hospitalaria',
                'commercial.services.plumbing.item3': 'Spa interior y piscina climatizada con control remoto',
                'commercial.services.structure.title': 'Estructura y envolvente',
                'commercial.services.structure.item1': 'Refuerzo estructural para grandes claros y dobles alturas',
                'commercial.services.structure.item2': 'Ventanería de alto rendimiento con control UV',
                'commercial.services.structure.item3': 'Impermeabilización y aislamiento acústico integral',
                'commercial.services.exterior.title': 'Exteriores y paisajismo',
                'commercial.services.exterior.item1': 'Diseño de jardines xeriscape adaptado a Hutto, TX',
                'commercial.services.exterior.item2': 'Iluminación exterior teatral y senderos en piedra natural',
                'commercial.services.exterior.item3': 'Terraza panorámica con cocina exterior y fire pit',
                'commercial.metrics.specialties': 'Especialidades coordinadas',
                'commercial.metrics.rework': 'Retrabajos entregados',
                'commercial.metrics.satisfaction': 'Satisfacción del cliente',
                'commercial.value.heading': '¿Por qué CNM Renovation para tu inversión?',
                'commercial.value.paragraph': 'Acompañamos a desarrolladores y propietarios de alto perfil desde la planeación hasta la entrega. Gestionamos permisos, presupuesto, proveedores y calidad para que tu proyecto salga a tiempo y con la estética que enamora a nuevos compradores.',
                'commercial.value.bullet1': 'Equipo senior con 15+ años coordinando mansiones y residencias boutique en Texas.',
                'commercial.value.bullet2': 'Dirección de obra con reportes semanales, control de costos y atención personalizada.',
                'commercial.value.bullet3': 'Red de proveedores de lujo: piedra natural importada, domótica premium, carpintería artesanal.',
                'commercial.value.ctaHeading': 'Lleva esta experiencia a tu proyecto',
                'commercial.value.ctaParagraph': 'Coordinamos una visita privada a la mansión o un workshop en tu lote para mapear el alcance ideal.',
                'commercial.value.ctaPrimary': 'Solicitar visita guiada',
                'commercial.value.ctaSecondary': 'Agendar una llamada',
                'commercial.cta.title': '¿Quieres un Proyecto Similar?',
                'commercial.cta.subtitle': 'Contáctanos para discutir tu proyecto comercial de lujo',
                'commercial.cta.button': 'Solicitar Consulta',
                
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
                'index.about.text': 'At CNM, we transform your ideas into a clear architectural program and a milestone-based timeline. We integrate interior/exterior design, structure, and MEP—that is, HVAC, electrical, and plumbing—to ensure your home\'s comfort, safety, and efficiency. We select high-performance materials and apply value engineering (optimizing cost-benefit without sacrificing quality).\n\nAt every stage, we perform QA/QC (Quality Assurance and Control), with checklists, testing, and finish reviews to ensure everything is just right. You define the style; we bring it to life with technical detail and warmth, always considering how your family lives today… and tomorrow.',
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
                
                // Commercial projects page
                'commercial.hero.tag': 'Hutto, Texas · $2.5M USD',
                'commercial.hero.title': '💎 COMMERCIAL PROJECTS',
                'commercial.hero.subtitle': 'We design and deliver ultra-luxury residential experiences for investors who demand real differentiation.',
                'commercial.hero.ctaPrimary': 'Schedule a private meeting',
                'commercial.hero.ctaSecondary': 'See full scope',
                'commercial.services.heading': '🔧 What we completed in the mansion',
                'commercial.services.paint.title': 'Premium paint & finishes',
                'commercial.services.paint.item1': 'Moisture sealing and thermal insulation across the envelope',
                'commercial.services.paint.item2': 'Custom palettes with matte and high-gloss finishes',
                'commercial.services.paint.item3': 'Decorative Venetian plaster and 3D wall panels',
                'commercial.services.electrical.title': 'Electrical & smart home',
                'commercial.services.electrical.item1': 'Certified electrical redesign with smart panels',
                'commercial.services.electrical.item2': 'Architectural lighting with scene-based controls',
                'commercial.services.electrical.item3': 'Integrated automation system (climate, security, audio)',
                'commercial.services.carpentry.title': 'Fine carpentry & millwork',
                'commercial.services.carpentry.item1': 'Built-in furniture for library, bar, and suites',
                'commercial.services.carpentry.item2': 'Solid wood doors with custom carvings',
                'commercial.services.carpentry.item3': 'American walnut and white oak wall cladding',
                'commercial.services.plumbing.title': 'Plumbing & climate systems',
                'commercial.services.plumbing.item1': 'High-capacity, high-efficiency plumbing upgrade',
                'commercial.services.plumbing.item2': 'Zoned HVAC system with medical-grade filtration',
                'commercial.services.plumbing.item3': 'Indoor spa and heated pool with remote control',
                'commercial.services.structure.title': 'Structure & envelope',
                'commercial.services.structure.item1': 'Structural reinforcement for wide spans and double heights',
                'commercial.services.structure.item2': 'High-performance glazing with UV control',
                'commercial.services.structure.item3': 'Comprehensive waterproofing and acoustic insulation',
                'commercial.services.exterior.title': 'Exteriors & landscaping',
                'commercial.services.exterior.item1': 'Xeriscape garden design tailored to Hutto, TX',
                'commercial.services.exterior.item2': 'Theatrical exterior lighting and natural stone walkways',
                'commercial.services.exterior.item3': 'Panoramic terrace with outdoor kitchen and fire pit',
                'commercial.metrics.specialties': 'Coordinated specialties',
                'commercial.metrics.rework': 'Rework delivered',
                'commercial.metrics.satisfaction': 'Client satisfaction',
                'commercial.value.heading': 'Why CNM Renovation for your investment?',
                'commercial.value.paragraph': 'We partner with high-profile developers and owners from planning through handover. We manage permits, budgets, vendors, and quality so your project finishes on time with the aesthetics that attract new buyers.',
                'commercial.value.bullet1': 'Senior team with 15+ years coordinating mansions and boutique residences in Texas.',
                'commercial.value.bullet2': 'Site management with weekly reports, cost control, and personalized attention.',
                'commercial.value.bullet3': 'Luxury supplier network: imported stone, premium automation, bespoke millwork.',
                'commercial.value.ctaHeading': 'Bring this experience to your project',
                'commercial.value.ctaParagraph': 'We arrange a private mansion tour or an on-site workshop to outline the ideal scope.',
                'commercial.value.ctaPrimary': 'Request guided tour',
                'commercial.value.ctaSecondary': 'Schedule a call',
                'commercial.cta.title': 'Want a similar project?',
                'commercial.cta.subtitle': 'Contact us to discuss your luxury commercial project',
                'commercial.cta.button': 'Request Consultation',
                
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
