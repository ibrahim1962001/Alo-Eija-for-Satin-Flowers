"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "right";
}

export function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-right"}`}
    >
      {subtitle && (
        <span className="mb-3 inline-block text-sm font-medium tracking-widest text-gold uppercase">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-4 leading-tight">
        {title}
      </h2>
      <div
        className={`h-px w-20 bg-gradient-to-l from-gold to-transparent mb-4 ${
          align === "center" ? "mx-auto" : "mr-0"
        }`}
      />
      {description && (
        <p className="text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
