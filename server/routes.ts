
import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";

const quoteRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  location: z.string().min(2),
  service: z.string().min(1),
  message: z.string().min(10),
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "info@gdcs.bg",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.post("/api/quote", async (req, res) => {
    try {
      const data = quoteRequestSchema.parse(req.body);
      
      const serviceLabels: Record<string, string> = {
        turnkey: "Цялостен ремонт",
        bathroom: "Ремонт на баня",
        painting: "Боядисване и шпакловка",
        flooring: "Подови настилки / плочки",
        drywall: "Гипсокартон / окачени тавани",
        finishing: "Довършителни работи",
        commercial: "Търговски обекти",
        other: "Друго",
      };

      const serviceLabel = serviceLabels[data.service] || data.service;

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2B4257; padding: 20px; text-align: center;">
            <h1 style="color: #F68B1F; margin: 0;">GDCS</h1>
            <p style="color: white; margin: 5px 0 0;">Нова заявка за оферта</p>
          </div>
          
          <div style="padding: 30px; background-color: #f5f7f9;">
            <h2 style="color: #2B4257; margin-top: 0;">Детайли на заявката</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; color: #2B4257;">Име:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; color: #2B4257;">Имейл:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; color: #2B4257;">Местоположение:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${data.location}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; color: #2B4257;">Услуга:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #F68B1F; font-weight: bold;">${serviceLabel}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px;">
              <h3 style="color: #2B4257; margin-bottom: 10px;">Описание на проекта:</h3>
              <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #F68B1F;">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="background-color: #2B4257; padding: 15px; text-align: center;">
            <p style="color: #888; margin: 0; font-size: 12px;">Изпратено от уебсайта на GDCS</p>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: '"GDCS Website" <info@gdcs.bg>',
        to: "info@gdcs.bg",
        replyTo: data.email,
        subject: `Нова заявка за оферта: ${serviceLabel} - ${data.name}`,
        html: emailHtml,
      });

      res.status(200).json({ success: true, message: "Заявката е изпратена успешно!" });
    } catch (err) {
      console.error("Email sending error:", err);
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: err.errors[0].message,
        });
      }
      return res.status(500).json({
        success: false,
        message: "Грешка при изпращане на заявката. Моля, опитайте отново.",
      });
    }
  });

  return httpServer;
}
