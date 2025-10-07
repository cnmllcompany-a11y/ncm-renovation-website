// Email sending functionality using Resend API
class EmailService {
    constructor() {
        this.apiKey = 're_heLoQutw_3y5NWUxnuZopDpxumVvW1Xoi';
        this.fromEmail = 'ncmllcompany@gmail.com';
        this.toEmail = 'ncmllcompany@gmail.com';
    }

    async sendEmail(formData) {
        try {
            // Try Node.js server first (if available)
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Email sent successfully via Node.js server:', result);
                return { success: true, data: result };
            } else {
                // Fallback to PHP server
                return await this.sendEmailPHP(formData);
            }
        } catch (error) {
            console.log('Node.js server not available, trying PHP...');
            // Fallback to PHP server
            return await this.sendEmailPHP(formData);
        }
    }

    async sendEmailPHP(formData) {
        try {
            // Try PHP server
            const response = await fetch('send-email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Email sent successfully via PHP:', result);
                return { success: true, data: result };
            } else {
                // Fallback to direct Resend API
                return await this.sendEmailDirect(formData);
            }
        } catch (error) {
            console.log('PHP server not available, trying direct API...');
            // Fallback to direct Resend API
            return await this.sendEmailDirect(formData);
        }
    }

    async sendEmailDirect(formData) {
        try {
            const response = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from: this.fromEmail,
                    to: [this.toEmail],
                    subject: `Nuevo mensaje de contacto - ${formData.name}`,
                    html: this.generateEmailHTML(formData),
                    text: this.generateEmailText(formData)
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Email sent successfully via direct API:', result);
            return { success: true, data: result };
        } catch (error) {
            console.error('Error sending email:', error);
            return { success: false, error: error.message };
        }
    }

    generateEmailHTML(formData) {
        return `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
                    Nuevo mensaje de contacto - CNM Renovation
                </h2>
                
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #374151; margin-top: 0;">Información del cliente:</h3>
                    <p><strong>Nombre:</strong> ${formData.name}</p>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    <p><strong>Teléfono:</strong> ${formData.phone || 'No proporcionado'}</p>
                    <p><strong>Servicio:</strong> ${formData.service || 'Consulta general'}</p>
                </div>
                
                <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                    <h3 style="color: #374151; margin-top: 0;">Mensaje:</h3>
                    <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
                    <p style="margin: 0; color: #1e40af; font-size: 14px;">
                        <strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}
                    </p>
                </div>
            </div>
        `;
    }

    generateEmailText(formData) {
        return `
Nuevo mensaje de contacto - CNM Renovation

Información del cliente:
- Nombre: ${formData.name}
- Email: ${formData.email}
- Teléfono: ${formData.phone || 'No proporcionado'}
- Servicio: ${formData.service || 'Consulta general'}

Mensaje:
${formData.message}

Fecha: ${new Date().toLocaleString('es-ES')}
        `;
    }
}

// Initialize email service
const emailService = new EmailService();

// Function to handle form submission
async function handleContactForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        service: document.getElementById('service') ? document.getElementById('service').value : 'Consulta general',
        message: document.getElementById('message').value.trim()
    };

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Por favor, ingresa un email válido.');
        return;
    }

    // Show loading state
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;

    try {
        // Send email
        const result = await emailService.sendEmail(formData);
        
        if (result.success) {
            // Show success message
            const successMessage = window.languageManager ? 
                window.languageManager.getTranslation('form.success.contact') : 
                '¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos en las próximas 24 horas.';
            
            alert(successMessage);
            
            // Reset form
            event.target.reset();
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctanos directamente por teléfono.');
    } finally {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

// Function to handle contact page form
async function handleContactPageForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        service: document.getElementById('service').value,
        message: document.getElementById('message').value.trim()
    };

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Por favor, ingresa un email válido.');
        return;
    }

    // Show loading state
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;

    try {
        // Send email
        const result = await emailService.sendEmail(formData);
        
        if (result.success) {
            // Show success message
            const successMessage = window.languageManager ? 
                window.languageManager.getTranslation('form.success.contact') : 
                '¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos en las próximas 24 horas.';
            
            alert(successMessage);
            
            // Reset form
            event.target.reset();
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctanos directamente por teléfono.');
    } finally {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

// Export functions for use in HTML
window.handleContactForm = handleContactForm;
window.handleContactPageForm = handleContactPageForm;
