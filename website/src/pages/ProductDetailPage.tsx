import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShoppingBag,
  MessageCircle,
  ZoomIn,
  X,
} from "lucide-react";
import { getProductById, products } from "@/data/products";
import { useCartStore } from "@/lib/cart-store";
import { assetUrl, WHATSAPP_NUMBER } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/shop/ProductCard";
import { categoryLabels } from "@/types";
import NotFoundPage from "./NotFoundPage";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const addItem = useCartStore((s) => s.addItem);
  const [zoomed, setZoomed] = useState(false);

  if (!product) return <NotFoundPage />;

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `مرحباً Alo Eija! 🌸\nأود الاستفسار عن: ${product.name}\nوالسعر من فضلك\n\nشكراً!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="container mx-auto px-6">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-cream/50 hover:text-gold transition-colors mb-6 sm:mb-8 text-sm"
        >
          <ArrowRight className="w-4 h-4" />
          العودة للمتجر
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative aspect-4/5 rounded-3xl overflow-hidden border border-gold/10 cursor-zoom-in"
            onClick={() => setZoomed(true)}
          >
            <img
              src={assetUrl(product.image)}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/20 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 rounded-full bg-cream/20 backdrop-blur-md flex items-center justify-center text-cream">
                <ZoomIn className="w-5 h-5" />
              </span>
            </div>
            {product.badge && (
              <span className="absolute top-6 right-6 bg-gold text-burgundy text-sm font-bold px-4 py-1.5 rounded-full">
                {product.badge}
              </span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gold text-sm font-medium">
              {categoryLabels[product.category].ar}
            </span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-cream mt-2 mb-4">
              {product.name}
            </h1>
            <p className="text-cream/40 text-sm mb-6">{product.nameEn}</p>

            <p className="text-gold/90 text-sm mb-6 sm:mb-8 inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2">
              للسعر تواصلي معنا عبر واتساب
            </p>

            <p className="text-cream/60 leading-relaxed text-base sm:text-lg mb-8 sm:mb-10">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => addItem(product)}
                className="w-full sm:w-auto"
              >
                <ShoppingBag className="w-5 h-5" />
                أضف للسلة
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                اطلب عبر واتساب
              </Button>
            </div>

            <div className="mt-8 sm:mt-12 glass rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-cream/40">الصناعة</span>
                <span className="text-cream">يدوية 100%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-cream/40">الخامة</span>
                <span className="text-cream">ستان فاخر</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-cream/40">التوصيل</span>
                <span className="text-cream">متاح داخل مصر</span>
              </div>
            </div>
          </motion.div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-24">
            <h2 className="font-display text-2xl sm:text-3xl text-cream mb-2 text-center">
              قد يعجبك أيضاً
            </h2>
            <div className="h-px w-20 bg-linear-to-l from-gold to-transparent mb-8 sm:mb-10 mx-auto" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(false)}
            className="fixed inset-0 z-80 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              onClick={() => setZoomed(false)}
              aria-label="إغلاق"
              className="absolute top-5 inset-e-5 w-11 h-11 rounded-full bg-cream/10 text-cream flex items-center justify-center hover:bg-cream/20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={assetUrl(product.image)}
              alt={product.name}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-full rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
