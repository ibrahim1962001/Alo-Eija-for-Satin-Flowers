import type { Metadata } from "next";
import { Cairo, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/shop/CartDrawer";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alo Eija for Satin Flowers | صواني ومرايات ومناديل كتب الكتاب",
  description:
    "براند متخصص في صواني ومرايات شبكه ومناديل كتب الكتاب وهوايات العروسة الهاند ميد. هدايا فاخرة لكل المناسبات.",
  keywords: [
    "صواني خواتم",
    "مرايات شبكه",
    "مناديل كتب الكتاب",
    "هواية عروسة",
    "ورد ستان",
    "Alo Eija",
    "هاند ميد",
  ],
  openGraph: {
    title: "Alo Eija for Satin Flowers",
    description: "صواني ومرايات ومناديل كتب الكتاب الفاخرة — مصنوعة يدوياً بحب",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} ${playfair.variable} antialiased`}
        style={
          {
            "--font-body": "var(--font-cairo)",
            "--font-display": "var(--font-playfair)",
          } as React.CSSProperties
        }
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
