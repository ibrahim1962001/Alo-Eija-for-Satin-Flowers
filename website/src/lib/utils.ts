import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Resolves a public asset path against Vite's base URL so images work both at
// the root (Netlify / local dev) and on a repo subpath (GitHub Pages).
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

export function generateWhatsAppOrder(
  items: { name: string; quantity: number }[]
): string {
  const lines = items.map((item) => `• ${item.name} × ${item.quantity}`);

  const message = `مرحباً Alo Eija! 🌸
أود الاستفسار عن المنتجات التالية والسعر:

${lines.join("\n")}

شكراً!`;

  return encodeURIComponent(message);
}

export const WHATSAPP_NUMBER = "201154641973";
