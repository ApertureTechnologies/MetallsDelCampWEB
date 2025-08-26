import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import brandConfig from '../../../brand.config';

// Initialize Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Validation schema
const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  email: z.string().email('Email inválido'),
  telefono: z.string().optional(),
  empresa: z.string().optional(),
  asunto: z.enum(['presupuesto', 'informacion', 'proyecto', 'otro']),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(2000),
  privacidad: z.boolean().refine(val => val === true, {
    message: 'Debes aceptar la política de privacidad'
  }),
  website: z.string().optional(), // Honeypot field
});

export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    const body = await request.json();

    // Honeypot check
    if (body.website && body.website.trim() !== '') {
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      );
    }

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Rate limiting could be added here
    // For now, we'll just process the request

    // Prepare email content
    const asuntoMap = {
      presupuesto: 'Solicitud de Presupuesto',
      informacion: 'Solicitud de Información',
      proyecto: 'Consulta sobre Proyecto',
      otro: 'Consulta General'
    };

    const emailSubject = `[Web] ${asuntoMap[validatedData.asunto]} - ${validatedData.nombre}`;
    
    const emailHtml = `
      <h2>Nueva consulta desde la web</h2>
      <p><strong>Asunto:</strong> ${asuntoMap[validatedData.asunto]}</p>
      <p><strong>Nombre:</strong> ${validatedData.nombre}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      ${validatedData.telefono ? `<p><strong>Teléfono:</strong> ${validatedData.telefono}</p>` : ''}
      ${validatedData.empresa ? `<p><strong>Empresa:</strong> ${validatedData.empresa}</p>` : ''}
      
      <h3>Mensaje:</h3>
      <p style="white-space: pre-line;">${validatedData.mensaje}</p>
      
      <hr>
      <p style="color: #666; font-size: 12px;">
        Enviado desde: ${brandConfig.company.name}<br>
        Fecha: ${new Date().toLocaleString('es-ES')}
      </p>
    `;

    const emailText = `
Nueva consulta desde la web

Asunto: ${asuntoMap[validatedData.asunto]}
Nombre: ${validatedData.nombre}
Email: ${validatedData.email}
${validatedData.telefono ? `Teléfono: ${validatedData.telefono}\n` : ''}
${validatedData.empresa ? `Empresa: ${validatedData.empresa}\n` : ''}

Mensaje:
${validatedData.mensaje}

---
Enviado desde: ${brandConfig.company.name}
Fecha: ${new Date().toLocaleString('es-ES')}
    `;

    // Check if Resend is configured
    if (!resend) {
      return NextResponse.json(
        { error: 'Servicio de email no configurado' },
        { status: 503 }
      );
    }

    // Send email
    await resend.emails.send({
      from: `Web ${brandConfig.company.name} <noreply@${process.env.RESEND_DOMAIN || 'localhost'}>`,
      to: [brandConfig.company.email],
      subject: emailSubject,
      html: emailHtml,
      text: emailText,
      replyTo: validatedData.email,
    });

    // Send confirmation email to user
    const confirmationHtml = `
      <h2>Gracias por contactar con ${brandConfig.company.name}</h2>
      <p>Hola ${validatedData.nombre},</p>
      <p>Hemos recibido tu consulta y nos pondremos en contacto contigo lo antes posible.</p>
      
      <h3>Resumen de tu consulta:</h3>
      <p><strong>Asunto:</strong> ${asuntoMap[validatedData.asunto]}</p>
      <p><strong>Mensaje:</strong></p>
      <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-line;">${validatedData.mensaje}</p>
      
      <p>Saludos cordiales,<br>
      El equipo de ${brandConfig.company.name}</p>
      
      <hr>
      <p style="color: #666; font-size: 12px;">
        ${brandConfig.company.name}<br>
        ${brandConfig.company.address.street}<br>
        ${brandConfig.company.address.city}, ${brandConfig.company.address.postal}<br>
        Tel: ${brandConfig.company.phone}<br>
        Email: ${brandConfig.company.email}
      </p>
    `;

    await resend.emails.send({
      from: `${brandConfig.company.name} <noreply@${process.env.RESEND_DOMAIN || 'localhost'}>`,
      to: [validatedData.email],
      subject: `Hemos recibido tu consulta - ${brandConfig.company.name}`,
      html: confirmationHtml,
    });

    return NextResponse.json(
      { 
        message: 'Mensaje enviado correctamente',
        success: true
      },
      { status: 200 }
    );

  } catch (error) {
    // Error will be logged by Next.js error handling system

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Datos inválidos',
          details: error.issues.map((issue) => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  );
}
