"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductCard } from "@/components/shop/ProductCard";
import { featuredProducts } from "@/data/products";

const HeroScene = dynamic(
  () =>
    import("@/components/3d/HeroScene").then((mod) => mod.HeroScene),
  { ssr: false, loading: () => <div className="absolute inset-0 bg-burgundy" /> }
);

const features = [
  {
    icon: Heart,
    title: "صناعة يدوية",
    description: "كل قطعة مصنوعة بحب وعناية فائقة بأيدي ماهرة",
  },
  {
    icon: Sparkles,
    title: "جودة فاخرة",
    description: "أقمشة ستان عالية الجودة بتفاصيل واقعية مذهلة",
  },
  {
    icon: Star,
    title: "تصاميم حصرية",
    description: "تصاميم فريدة تناسب كل المناسبات والأذواق",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />

        <div className="absolute inset-0 bg-gradient-to-b from-burgundy/40 via-burgundy/60 to-burgundy z-[1]" />

        <div className="relative z-10 container mx-auto px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="inline-block text-gold text-sm tracking-[0.3em] uppercase mb-6 font-medium">
              Handcrafted with Love
            </span>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight">
              Alo Eija
              <span className="block text-gradient text-3xl md:text-5xl lg:text-6xl mt-2">
                for Satin Flowers
              </span>
            </h1>

            <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              صواني ومرايات شبكه، مناديل كتب الكتاب، وهوايات العروسة — كل قطعة
              مصنوعة يدوياً بحب وتفاصيل فاخرة
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products">
                <Button variant="secondary" size="lg">
                  <Sparkles className="w-5 h-5" />
                  تسوقي الآن
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  اكتشفي قصتنا
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 rounded-full bg-gold"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy via-burgundy-light/30 to-burgundy" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass rounded-2xl p-8 text-center group hover:border-gold/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl text-cream mb-3">
                  {feature.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="مجموعتنا المميزة"
            title="أجمل التصاميم"
            description="اكتشفي مجموعة مختارة من صوانينا ومراياتنا ومناديل كتب الكتاب المصنوعة يدوياً"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/products">
              <Button variant="outline" size="lg">
                <ArrowLeft className="w-5 h-5" />
                عرض كل المنتجات
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-rose-deep/30 to-burgundy" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 md:p-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl text-cream mb-4">
              هدية لا تُنسى
            </h2>
            <p className="text-cream/50 text-lg mb-8 leading-relaxed">
              اطلبي تصميم مخصص لمناسبتك — كتب كتاب، خطوبة، فرح، أو أي مناسبة
              خاصة بأسماء وتواريخك
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                <Heart className="w-5 h-5" />
                اطلبي تصميم مخصص
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
