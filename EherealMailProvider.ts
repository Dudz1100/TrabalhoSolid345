import { EtherealMailProvider } from '../providers/EtherealMailProvider';
import { getMailClient } from '../lib/mail';
import nodemailer from 'nodemailer';
import logger from '../lib/logger';

export class EtherealMailProvider implements IMailProvider {
  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    const transporter = await getMailClient();
    const info = await transporter.sendMail({
      from: '"DevStore" <noreply@devstore.com>',
      to,
      subject,
      text: body,
      html: `<b>${body}</b>`,
    });

    logger.info(`E-mail enviado! Visualize aqui: ${nodemailer.getTestMessageUrl(info)}`);
    const mailProvider = new EtherealMailProvider();
  }
}