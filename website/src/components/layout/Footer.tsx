import { Link } from "react-router-dom";
import { Flower2, Facebook, MessageCircle } from "lucide-react";

const TIKTOK_URL = "https://www.tiktok.com/@alo.eija.for.sati";
const FACEBOOK_URL = "https://www.facebook.com/share/1HHvSihG94/";
const WHATSAPP_URL = "https://wa.me/201154641973";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.5 3c.36 2.02 1.5 3.6 3.5 4.03v2.6c-1.2.03-2.36-.28-3.5-.86v5.9c0 3.36-2.5 5.83-5.75 5.83A5.6 5.6 0 0 1 5 14.9a5.53 5.53 0 0 1 6.5-5.42v2.72a2.9 2.9 0 0 0-1.1-.16 2.86 2.86 0 0 0-.9 5.55 2.86 2.86 0 0 0 3.75-2.72V3h3.25Z" />
    </svg>
  );
}

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
                  to={link.href}
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
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
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
