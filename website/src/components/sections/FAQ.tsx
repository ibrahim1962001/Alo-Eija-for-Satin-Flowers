import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface QA {
  question: string;
  answer: string;
}

const faqs: QA[] = [
  {
    question: "كيف أطلب منتج؟",
    answer:
      "اختاري القطعة التي تعجبك ثم اضغطي على زر واتساب، وسنساعدك في التخصيص وتأكيد الطلب ومعرفة السعر مباشرةً.",
  },
  {
    question: "هل يمكن تخصيص التصميم بالأسماء والتواريخ؟",
    answer:
      "بالتأكيد! معظم قطعنا قابلة للتخصيص بالكامل — الأسماء، التواريخ، الألوان، والعبارات. فقط أخبرينا بتفاصيلك عبر واتساب.",
  },
  {
    question: "كم يستغرق تجهيز الطلب؟",
    answer:
      "يعتمد وقت التجهيز على نوع القطعة ودرجة التخصيص، وغالباً من 3 إلى 7 أيام. نتفق معك على الموعد عند تأكيد الطلب.",
  },
  {
    question: "هل التوصيل متاح؟",
    answer:
      "نعم، التوصيل متاح داخل جمهورية مصر العربية. نتفق على تفاصيل وتكلفة الشحن حسب المحافظة عبر واتساب.",
  },
  {
    question: "هل الزهور طبيعية أم صناعية؟",
    answer:
      "نستخدم ورد الستان والورد الصناعي عالي الجودة الذي يدوم طويلاً ولا يذبل، مع لمسات من الزهور المجففة في بعض التصاميم.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-linear-to-b from-burgundy via-burgundy-light/20 to-burgundy" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          subtitle="أسئلة شائعة"
          title="كل ما تريدين معرفته"
          description="إجابات على أكثر الأسئلة تكراراً"
        />

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="glass rounded-2xl overflow-hidden border border-gold/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-right cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-cream text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-cream/60 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
