import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

export function FloatingWhatsApp() {
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTip(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const message = encodeURIComponent(
    "مرحباً Alo Eija! 🌸\nأود الاستفسار عن منتجاتكم والأسعار من فضلك."
  );
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div className="fixed bottom-5 left-5 z-50 flex items-center gap-3">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصلي معنا عبر واتساب"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-110"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-40" />
        <MessageCircle className="relative h-7 w-7" />
      </a>

      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.9 }}
            className="relative hidden sm:flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-medium text-burgundy shadow-lg"
          >
            اطلبي الآن عبر واتساب
            <button
              onClick={() => setShowTip(false)}
              aria-label="إغلاق"
              className="text-burgundy/40 hover:text-burgundy"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
