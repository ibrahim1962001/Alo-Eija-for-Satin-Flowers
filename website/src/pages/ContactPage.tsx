import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Facebook, MapPin, Clock, Send } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_NUMBER } from "@/lib/utils";

const TIKTOK_URL = "https://www.tiktok.com/@alo.eija.for.sati";
const FACEBOOK_URL = "https://www.facebook.com/share/1HHvSihG94/";

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `مرحباً Alo Eija! 🌸\nالاسم: ${formData.name}\n\n${formData.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle="تواصل معنا"
          title="نسعد بخدمتك"
          description="للطلبات والاستفسارات والتصاميم المخصصة، تواصلي معنا"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-2xl p-6 hover:border-gold/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-cream font-medium">واتساب</h3>
                <p className="text-cream/40 text-sm">للطلبات السريعة</p>
              </div>
            </a>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-2xl p-6 hover:border-gold/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Facebook className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-cream font-medium">فيسبوك</h3>
                <p className="text-cream/40 text-sm">Alo Eija for Satin Flowers</p>
              </div>
            </a>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-2xl p-6 hover:border-gold/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center">
                <TikTokIcon className="w-5 h-5 text-cream" />
              </div>
              <div>
                <h3 className="text-cream font-medium">تيك توك</h3>
                <p className="text-cream/40 text-sm">@alo.eija.for.sati</p>
              </div>
            </a>

            <div className="flex items-center gap-4 glass rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="text-cream font-medium">التوصيل</h3>
                <p className="text-cream/40 text-sm">متاح داخل جمهورية مصر</p>
              </div>
            </div>

            <div className="flex items-center gap-4 glass rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="text-cream font-medium">أوقات العمل</h3>
                <p className="text-cream/40 text-sm">
                  يومياً من 10 صباحاً — 10 مساءً
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 sm:p-8 space-y-6"
          >
            <h3 className="font-display text-xl text-cream">أرسلي رسالة</h3>

            <div>
              <label className="block text-cream/60 text-sm mb-2">الاسم</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-burgundy/50 border border-gold/10 rounded-xl px-4 py-3 text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/40 transition-colors"
                placeholder="اسمك الكريم"
              />
            </div>

            <div>
              <label className="block text-cream/60 text-sm mb-2">الرسالة</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-burgundy/50 border border-gold/10 rounded-xl px-4 py-3 text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                placeholder="اكتبي رسالتك أو تفاصيل طلبك المخصص..."
              />
            </div>

            <Button type="submit" variant="secondary" size="lg" className="w-full">
              <Send className="w-5 h-5" />
              إرسال عبر واتساب
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
