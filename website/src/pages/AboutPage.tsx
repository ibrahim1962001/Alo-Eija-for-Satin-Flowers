import { motion } from "framer-motion";
import { Heart, Scissors, Palette, Award } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const values = [
  {
    icon: Heart,
    title: "الشغف",
    description:
      "كل قطعة نصنعها تحمل جزءاً من قلبنا. الشغف هو ما يميز عملنا ويجعل كل تصميم فريداً.",
  },
  {
    icon: Scissors,
    title: "الحرفية",
    description:
      "سنوات من الخبرة في فن التطريز وصناعة الستان، مع اهتمام بأدق التفاصيل في كل قطعة.",
  },
  {
    icon: Palette,
    title: "الإبداع",
    description:
      "تصاميم مبتكرة تجمع بين الكلاسيك والعصري، تناسب كل ذوق ومناسبة.",
  },
  {
    icon: Award,
    title: "الجودة",
    description:
      "نستخدم أجود الخامات لنضمن لكِ جمالاً يدوم ولا يذبل أبداً.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle="قصتنا"
          title="عن Alo Eija"
          description="رحلة من الشغف والإبداع في عالم الهدايا الفاخرة"
        />

        <div className="max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 space-y-6 text-cream/70 leading-relaxed text-lg"
          >
            <p>
              <strong className="text-gold">Alo Eija for Satin Flowers</strong>{" "}
              براند متخصص في تصميم وصنع صواني ومرايات شبكه ومناديل كتب الكتاب
              وهوايات العروسة الهاند ميد. بدأت رحلتنا من حب عميق لفن التفاصيل
              والرغبة في تقديم هدايا فاخرة تحفظ ذكريات أجمل المناسبات.
            </p>
            <p>
              كل صينية وكل منديل وكل مراية نصنعها تمر بمراحل دقيقة من التصميم
              والتطريز والتشكيل يدوياً، لنقدم لكِ قطعة فنية تحمل روح الحرفة
              اليدوية وجمال الستان الناعم.
            </p>
            <p>
              نؤمن أن الهدية المثالية هي التي تبقى جميلة للأبد — ولهذا صممنا
              مجموعتنا لتكون رفيقة ذكرياتكِ الجميلة في كل مناسبة.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <value.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl text-cream mb-2">
                  {value.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
