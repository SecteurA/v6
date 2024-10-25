import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY || '');

interface EmailData {
  name: string;
  email: string;
  phone: string;
}

interface SendGridError {
  code?: string;
  message?: string;
  response?: {
    body?: any;
  };
}

export const sendEmail = async (data: EmailData) => {
  // Validate API key
  if (!import.meta.env.VITE_SENDGRID_API_KEY) {
    console.error('SendGrid API key is not configured');
    return { success: false, error: 'Email service not configured' };
  }

  // Validate input data
  if (!data.name || !data.email || !data.phone) {
    console.error('Missing required fields:', data);
    return { success: false, error: 'Missing required fields' };
  }

  const msg = {
    to: 'contact@freescout-installation.com',
    from: {
      email: 'contact@freescout-installation.com',
      name: 'FreeScout Installation Service'
    },
    subject: 'New Contact Request - FreeScout Installation',
    text: `
      New contact request received:
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
    `,
    html: `
      <h2>New Contact Request</h2>
      <p>A new contact request has been received:</p>
      <ul>
        <li><strong>Name:</strong> ${data.name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
      </ul>
    `,
  };

  try {
    const response = await sgMail.send(msg);
    console.log('Email sent successfully:', response);
    return { success: true };
  } catch (error) {
    const sendGridError = error as SendGridError;
    
    // Log the full error for debugging
    console.error('SendGrid Error:', {
      error: sendGridError,
      statusCode: sendGridError.code,
      message: sendGridError.message,
      response: sendGridError.response?.body
    });
    
    return { 
      success: false, 
      error: sendGridError.message || 'Failed to send email'
    };
  }
};