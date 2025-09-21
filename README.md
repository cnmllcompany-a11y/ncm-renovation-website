# NCM Renovation - Sitio Web Bilingüe

Un sitio web profesional para servicios de renovación de hogares con soporte completo para español e inglés, construido con HTML, CSS (Tailwind) y JavaScript.

## 🚀 **Repositorio: PRUEBA FINAL**

Este es el repositorio principal del sitio web de NCM Renovation, que incluye todas las funcionalidades implementadas y está listo para producción.

## 🌟 Características Principales

- **🌐 Bilingüe**: Soporte completo para español e inglés con cambio instantáneo
- **📱 Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **🌙 Tema Oscuro**: Soporte para modo oscuro y claro
- **🧭 Navegación Intuitiva**: Menú de navegación fácil de usar
- **📝 Formularios Funcionales**: Formularios de contacto con validación
- **🖼️ Portfolio Interactivo**: Filtros para proyectos por categoría
- **💾 Persistencia**: El idioma seleccionado se guarda entre sesiones
- **⚡ Cambio Instantáneo**: Traducción en tiempo real sin recargar la página

## Páginas Incluidas

1. **index.html** - Página principal con información general
2. **servicios.html** - Detalles de servicios ofrecidos
3. **portfolio.html** - Galería de proyectos con filtros
5. **contact.html** - Formulario de contacto e información

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **Tailwind CSS**: Framework de CSS para estilos
- **JavaScript**: Funcionalidad interactiva y sistema de idiomas
- **Google Fonts**: Tipografía Work Sans
- **Material Symbols**: Iconos
- **LocalStorage**: Persistencia del idioma seleccionado
- **CSS Grid & Flexbox**: Layouts responsivos

## 🚀 Cómo Usar

1. **Abrir el sitio**: Abre `index.html` en tu navegador web
2. **Cambiar idioma**: Haz clic en el botón 🌐 en la esquina superior derecha
3. **Navegar**: Usa el menú de navegación para explorar las páginas
4. **Contactar**: Usa el formulario de contacto para enviar consultas
5. **Explorar**: Revisa el portfolio con los filtros disponibles

## 📧 Sistema de Email

El sitio web incluye un sistema de envío de emails usando Resend API. Los formularios de contacto envían automáticamente los mensajes a `ncmllcompany@gmail.com`.

### Opciones de servidor:

1. **Servidor Node.js (Recomendado)**:
   ```bash
   npm install
   npm start
   ```

2. **Servidor PHP**:
   - Asegúrate de que PHP esté instalado
   - El archivo `send-email.php` manejará el envío

3. **Directo desde el navegador**:
   - Funciona sin servidor adicional
   - Usa la API de Resend directamente

## 🌐 Sistema de Idiomas

El sitio incluye un sistema completo de traducción:

- **Cambio instantáneo** entre español e inglés
- **Persistencia** del idioma seleccionado
- **Traducción completa** de todos los elementos
- **Formularios traducidos** con placeholders en ambos idiomas
- **Mensajes de éxito** traducidos

## 📁 Estructura del Proyecto

```
ncm-renovation-website/
├── index.html          # Página principal
├── servicios.html      # Página de servicios
├── portfolio.html      # Galería de proyectos
├── contact.html        # Formulario de contacto
├── language.js         # Sistema de traducción
├── send-email.js       # Sistema de envío de emails
├── send-email.php      # Servidor PHP para emails
├── server.js           # Servidor Node.js
├── package.json        # Dependencias de Node.js
├── .htaccess          # Configuración de Apache
├── .gitignore         # Archivos a ignorar en Git
└── README.md          # Documentación del proyecto
```

## 🎨 Personalización

Para personalizar el sitio web:

- **Colores**: Modifica la configuración de Tailwind CSS en cada archivo
- **Imágenes**: Reemplaza las URLs de las imágenes por las tuyas
- **Contenido**: Actualiza el texto directamente en los archivos HTML
- **Traducciones**: Modifica el archivo `language.js` para agregar nuevos idiomas
- **Proyectos**: Agrega más proyectos en `portfolio.html`

## Contacto

- Teléfono: (555) 123-4567
- Email: info@renovacionestexas.com
- Dirección: 123 Main St, Austin, TX 78701
