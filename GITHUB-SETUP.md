# 🚀 Configuración del Repositorio GitHub - PRUEBA FINAL

## 📋 Pasos para Subir el Proyecto a GitHub

### 1. **Instalar Git** (si no está instalado)
- Descargar desde: https://git-scm.com/download/win
- Instalar con configuración por defecto
- Reiniciar terminal/PowerShell

### 2. **Configurar Git** (primera vez)
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@gmail.com"
```

### 3. **Crear Repositorio en GitHub**
1. Ir a https://github.com
2. Hacer clic en "New repository"
3. Nombre: `PRUEBA-FINAL`
4. Descripción: "Sitio web bilingüe para NCM Renovation"
5. Seleccionar "Private"
6. NO marcar "Add a README file"
7. Hacer clic en "Create repository"

### 4. **Comandos para Subir el Código**
```bash
# Inicializar repositorio local
git init

# Agregar todos los archivos
git add .

# Hacer primer commit
git commit -m "Initial commit: Sitio web NCM Renovation completo"

# Conectar con GitHub (reemplazar TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/PRUEBA-FINAL.git

# Subir código a GitHub
git branch -M main
git push -u origin main
```

### 5. **Configurar GitHub Pages** (opcional)
1. Ir a Settings del repositorio
2. Scroll down a "Pages"
3. Source: "Deploy from a branch"
4. Branch: "main"
5. Folder: "/ (root)"
6. Hacer clic en "Save"

## 📁 **Estructura del Proyecto**

```
PRUEBA-FINAL/
├── index.html              # Página principal
├── servicios.html          # Página de servicios
├── portfolio.html          # Galería de proyectos
├── about.html              # Información de la empresa
├── contact.html            # Formulario de contacto
├── language.js             # Sistema de traducción
├── send-email.js           # Sistema de envío de emails
├── send-email.php          # Servidor PHP para emails
├── server.js               # Servidor Node.js
├── package.json            # Dependencias de Node.js
├── .htaccess              # Configuración de Apache
├── .gitignore             # Archivos a ignorar
├── .gitattributes         # Configuración de Git
├── README.md              # Documentación principal
├── GITHUB-SETUP.md        # Esta guía
└── start-server.bat       # Script para iniciar servidor
```

## 🌐 **Funcionalidades Implementadas**

- ✅ **Sistema bilingüe** (Español/Inglés)
- ✅ **Diseño responsivo** para móviles y desktop
- ✅ **Formularios de contacto** con envío de emails
- ✅ **Sistema de envío** usando Resend API
- ✅ **Botón de WhatsApp** flotante
- ✅ **Galería de proyectos** con filtros
- ✅ **Tema oscuro/claro**
- ✅ **Favicon personalizado**
- ✅ **Optimización SEO**

## 📧 **Configuración de Email**

El sitio incluye un sistema completo de envío de emails:
- **API**: Resend
- **Email destino**: ncmllcompany@gmail.com
- **Funcionalidad**: Formularios de contacto automáticos

## 🚀 **Para Desplegar**

1. **Desarrollo local**: Usar `start-server.bat`
2. **GitHub Pages**: Configurar en Settings > Pages
3. **Servidor propio**: Subir archivos via FTP

## 📞 **Contacto del Proyecto**

- **Empresa**: NCM Renovation
- **Email**: ncmllcompany@gmail.com
- **Teléfono**: 7372355952
- **Horario**: Lun - Sáb: 8 AM - 9 PM

