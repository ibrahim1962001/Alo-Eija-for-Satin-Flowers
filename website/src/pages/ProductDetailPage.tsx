import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, MessageCircle } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice, WHATSAPP_NUMBER } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { categoryLabels } from "@/types";
import NotFoundPage from "./NotFoundPage";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const addItem = useCartStore((s) => s.addItem);

  if (!product) return <NotFoundPage />;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `مرحباً Alo Eija! 🌸\nأود طلب: ${product.name}\nالسعر: ${product.price} ج.م\n\nشكراً!`
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
            className="relative aspect-4/5 rounded-3xl overflow-hidden border border-gold/10"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
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

            <p className="text-2xl sm:text-3xl font-bold text-gold mb-6 sm:mb-8">
              {formatPrice(product.price)}
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
      </div>
    </div>
  );
}
