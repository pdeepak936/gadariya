import nodemailer from 'nodemailer';
import { Logger } from '../utils/logger';

const logger = new Logger('Email');

let transporter: nodemailer.Transporter | null = null;

export function initializeEmail() {
  try {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    logger.info('Email transporter initialized');
    return transporter;
  } catch (error) {
    logger.error('Failed to initialize email:', error);
    throw error;
  }
}

export function getEmailTransporter(): nodemailer.Transporter {
  if (!transporter) {
    throw new Error('Email transporter not initialized');
  }
  return transporter;
}

export interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  attachments?: any[];
}

export async function sendEmail(options: EmailOptions) {
  try {
    const transporter = getEmailTransporter();
    
    const mailOptions = {
      from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
      ...options,
    };

    const result = await transporter.sendMail(mailOptions);
    logger.info(`Email sent to ${options.to}`);
    return result;
  } catch (error) {
    logger.error('Failed to send email:', error);
    throw error;
  }
}

export default {
  initializeEmail,
  getEmailTransporter,
  sendEmail,
};
