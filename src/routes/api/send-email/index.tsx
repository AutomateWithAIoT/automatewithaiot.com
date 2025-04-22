import { Resend } from 'resend';
import { type RequestHandler } from '@builder.io/qwik-city';

// Initialize Resend with your API key
const resend = new Resend(import.meta.env.PUBLIC_RESEND_API_KEY); // Replace with your actual API key

export const onPost: RequestHandler = async ({ request, json }) => {
  try {
    const { name, email, message } = await request.json();

    // Send the email using Resend
    const emailResponse = await resend.emails.send({
      from: 'dev@automatewithaiot.com', // Replace with a verified sender email
      to: 'support@automatewihtaiot.com',  // Replace with the recipient (your inbox)
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    json(200, { success: true, data: emailResponse });
  } catch (error: any) {
    json(500, { success: false, error: error.message });
  }
};