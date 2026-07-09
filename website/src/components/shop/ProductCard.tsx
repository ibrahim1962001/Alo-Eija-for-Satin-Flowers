import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Eye } from "lucide-react";
import type { Product } from "@/types";
import { useCartStore } from "@/lib/cart-store";
import { assetUrl, formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-burgundy-light/50 border border-gold/10 backdrop-blur-sm">
        <div className="relative aspect-4/5 overflow-hidden">
          <img
            src={assetUrl(product.image)}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-burgundy/80 via-transparent to-transparent opacity-60" />

          {product.badge && (
            <span className="absolute top-4 right-4 bg-gold text-burgundy text-xs font-bold px-3 py-1 rounded-full">
              {product.badge}
            </span>
          )}

          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              to={`/products/${product.id}`}
              className="w-12 h-12 rounded-full bg-cream/20 backdrop-blur-md flex items-center justify-center text-cream hover:bg-gold hover:text-burgundy transition-all"
              aria-label="عرض التفاصيل"
            >
              <Eye className="w-5 h-5" />
            </Link>
            <button
              onClick={() => addItem(product)}
              className="w-12 h-12 rounded-full bg-cream/20 backdrop-blur-md flex items-center justify-center text-cream hover:bg-gold hover:text-burgundy transition-all cursor-pointer"
              aria-label="أضف للسلة"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-display text-lg text-cream mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-cream/40 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-gold font-bold text-lg">
              {formatPrice(product.price)}
            </span>
            <button
              onClick={() => addItem(product)}
              className="text-sm text-rose-light hover:text-gold transition-colors cursor-pointer"
            >
              أضف للسلة +
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
