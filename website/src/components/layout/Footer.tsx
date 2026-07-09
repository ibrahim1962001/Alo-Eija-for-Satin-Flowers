import Link from "next/link";
import { Flower2, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-burgundy-dark border-t border-gold/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Flower2 className="w-6 h-6 text-gold" />
              <span className="font-display text-lg font-bold text-cream">
                Alo Eija
              </span>
            </div>
            <p className="text-cream/50 leading-relaxed text-sm">
              براند متخصص في صواني ومرايات شبكه ومناديل كتب الكتاب وهوايات
              العروسة الهاند ميد. كل قطعة مصنوعة بحب وعناية فائقة.
            </p>
          </div>

          <div>
            <h3 className="text-gold font-medium mb-4">روابط سريعة</h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/products", label: "المتجر" },
                { href: "/about", label: "عنّا" },
                { href: "/contact", label: "تواصل معنا" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream/50 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-gold font-medium mb-4">تابعينا</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 text-center">
          <p className="text-cream/30 text-sm">
            © {new Date().getFullYear()} Alo Eija for Satin Flowers. جميع
            الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
