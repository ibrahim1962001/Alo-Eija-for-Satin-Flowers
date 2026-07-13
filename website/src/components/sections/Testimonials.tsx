import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface Testimonial {
  name: string;
  occasion: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "سارة م.",
    occasion: "عروسة",
    text: "البوكيه كان أحلى من الصور بكتير! الستان ناعم والتفاصيل مظبوطة. كل ضيوفي سألوني منين جبته. شكراً Alo Eija ❤️",
  },
  {
    name: "مريم ع.",
    occasion: "كتب كتاب",
    text: "مراية كتب الكتاب طلعت تحفة فنية، الأسماء والتاريخ بخط جميل جداً. التعامل راقي والتسليم في الميعاد.",
  },
  {
    name: "نورهان ط.",
    occasion: "هدية",
    text: "طلبت صينية خواتم هدية لأختي وكانت مبهرة! الجودة والتغليف والاهتمام بأدق التفاصيل فوق الممتاز.",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle="آراء عميلاتنا"
          title="ماذا قالوا عنّا"
          description="سعادة عميلاتنا هي أجمل ما نصنعه"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="glass rounded-2xl p-6 sm:p-8 relative"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <p className="text-cream/70 leading-relaxed text-sm sm:text-base mb-6">
                {t.text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-cream font-medium">{t.name}</h4>
                  <span className="text-gold/70 text-xs">{t.occasion}</span>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
