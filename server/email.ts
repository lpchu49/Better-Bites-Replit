import { Resend } from "resend";
import type { Order } from "@shared/schema";

let resend: Resend | null = null;

function getResend(): Resend {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export async function sendOrderConfirmationEmail(order: Order): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set, skipping email send");
    return;
  }

  const client = getResend();

  const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
  const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

  try {
    // Send email to customer
    await client.emails.send({
      from: fromEmail,
      to: order.email,
      subject: "Order Confirmation - Better Bites",
      html: `
        <h1>Thank you for your order!</h1>
        <p>Hi ${order.name},</p>
        <p>We've received your order for <strong>${order.product}</strong>.</p>
        ${order.message ? `<p>Your message: ${order.message}</p>` : ""}
        <p>We'll be in touch soon!</p>
        <p>Best regards,<br>Better Bites Team</p>
      `,
    });

    // Send email to admin
    await client.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Order from ${order.name}`,
      html: `
        <h1>New Order Received</h1>
        <p><strong>Customer:</strong> ${order.name}</p>
        <p><strong>Email:</strong> ${order.email}</p>
        ${order.phone ? `<p><strong>Phone:</strong> ${order.phone}</p>` : ""}
        <p><strong>Product:</strong> ${order.product}</p>
        ${order.message ? `<p><strong>Message:</strong> ${order.message}</p>` : ""}
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Date:</strong> ${new Date(order.createdAt).toLocaleString()}</p>
      `,
    });

    console.log(`Order confirmation emails sent for order ${order.id}`);
  } catch (error) {
    console.error("Failed to send order confirmation emails:", error);
    // Don't throw - we don't want email failure to fail the order creation
  }
}
