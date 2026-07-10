import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
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

const isCategory = (value: string | null): value is Category =>
  value != null && value in categoryLabels;

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get("cat");
  const activeCategory: Category | "all" = isCategory(catParam) ? catParam : "all";

  const [query, setQuery] = useState("");

  const setActiveCategory = (key: Category | "all") => {
    if (key === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ cat: key });
    }
  };

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = products
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .filter((p) => {
      if (!normalizedQuery) return true;
      return (
        p.name.toLowerCase().includes(normalizedQuery) ||
        p.nameEn.toLowerCase().includes(normalizedQuery) ||
        p.description.toLowerCase().includes(normalizedQuery)
      );
    });

  const activeDescription =
    activeCategory !== "all"
      ? categoryLabels[activeCategory].description
      : "تصفحي تشكيلتنا من صواني ومرايات شبكه ومناديل كتب الكتاب وهوايات العروسة";

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="container mx-auto px-6">
        <SectionTitle
          subtitle="المتجر"
          title="مجموعتنا الكاملة"
          description={activeDescription}
        />

        <div className="max-w-md mx-auto mb-6 sm:mb-8 relative">
          <Search className="absolute top-1/2 -translate-y-1/2 inset-s-4 w-5 h-5 text-cream/30 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحثي عن منتج..."
            className="w-full bg-burgundy-light/50 border border-gold/10 rounded-full ps-12 pe-11 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/40 transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="مسح البحث"
              className="absolute top-1/2 -translate-y-1/2 inset-e-4 text-cream/40 hover:text-cream cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer",
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-cream/40 text-lg py-20">
            {normalizedQuery
              ? "لا توجد نتائج مطابقة لبحثك"
              : "لا توجد منتجات في هذا القسم حالياً"}
          </p>
        )}
      </div>
    </div>
  );
}
