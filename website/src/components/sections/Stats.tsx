import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 300, suffix: "+", label: "عميلة سعيدة" },
  { value: 50, suffix: "+", label: "تصميم فريد" },
  { value: 4, suffix: "", label: "أقسام مميزة" },
  { value: 100, suffix: "%", label: "صناعة يدوية" },
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-14 md:py-20 relative">
      <div className="absolute inset-0 bg-linear-to-l from-rose-deep/20 via-burgundy to-gold/5" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-cream/60 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
