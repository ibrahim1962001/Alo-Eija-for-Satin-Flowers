import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductCard } from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import { categoryLabels, type Category } from "@/types";
import { cn } from "@/lib/utils";

const categories: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "الكل" },
  ...(
    Object.entries(categoryLabels) as [
      Category,
      (typeof categoryLabels)[Category]
    ][]
  ).map(([key, value]) => ({ key, label: value.ar })),
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const activeDescription =
    activeCategory !== "all"
      ? categoryLabels[activeCategory].description
      : "تصفحي تشكيلتنا من صواني ومرايات شبكه ومناديل كتب الكتاب وهوايات العروسة";

  return (
    <div className="pt-28 pb-24">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle="المتجر"
          title="مجموعتنا الكاملة"
          description={activeDescription}
        />

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
                activeCategory === cat.key
                  ? "bg-gold text-burgundy shadow-lg shadow-gold/20"
                  : "bg-burgundy-light/50 text-cream/60 hover:text-cream border border-gold/10 hover:border-gold/30"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-cream/40 text-lg py-20">
            لا توجد منتجات في هذا القسم حالياً
          </p>
        )}
      </div>
    </div>
  );
}
