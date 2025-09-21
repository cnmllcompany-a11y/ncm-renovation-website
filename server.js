const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Resend API configuration
const RESEND_API_KEY = 're_heLoQutw_3y5NWUxnuZopDpxumVvW1Xoi';
const FROM_EMAIL = 'ncmllcompany@gmail.com';
const TO_EMAIL = 'ncmllcompany@gmail.com';

// Serve static files
app.use(express.static('.'));

// Email sending endpoint
app.post('/send-email', async (req, res) => {
    try {
        const { name, email, phone, service, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid email format'
            });
        }

        // Generate email content
        const emailHTML = generateEmailHTML({ name, email, phone, service, message });
        const emailText = generateEmailText({ name, email, phone, service, message });

        // Send email via Resend API
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: FROM_EMAIL,
                to: [TO_EMAIL],
                subject: `Nuevo mensaje de contacto - ${name}`,
                html: emailHTML,
                text: emailText
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Resend API error: ${response.status} - ${errorText}`);
        }

        const result = await response.json();
        console.log('Email sent successfully:', result);

        res.json({
            success: true,
            data: result
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Generate HTML email template
function generateEmailHTML(formData) {
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
                Nuevo mensaje de contacto - NCM Renovation
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

// Generate text email template
function generateEmailText(formData) {
    return `
Nuevo mensaje de contacto - NCM Renovation

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

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Email sending endpoint: http://localhost:${PORT}/send-email');
});


