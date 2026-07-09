import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number): string {
  return `${price.toLocaleString("ar-EG")} ج.م`;
}

export function generateWhatsAppOrder(
  items: { name: string; quantity: number; price: number }[],
  total: number
): string {
  const lines = items.map(
    (item) =>
      `• ${item.name} × ${item.quantity} = ${(item.price * item.quantity).toLocaleString("ar-EG")} ج.م`
  );

  const message = `مرحباً Alo Eija! 🌸
أود طلب المنتجات التالية:

${lines.join("\n")}

━━━━━━━━━━━━━━
الإجمالي: ${total.toLocaleString("ar-EG")} ج.م

شكراً!`;

  return encodeURIComponent(message);
}

export const WHATSAPP_NUMBER = "201000000000";
