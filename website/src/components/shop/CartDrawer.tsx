"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import {
  formatPrice,
  generateWhatsAppOrder,
  WHATSAPP_NUMBER,
} from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const {
    items,
    isOpen,
    setCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    totalPrice,
  } = useCartStore();

  const total = totalPrice();

  const handleWhatsAppOrder = () => {
    const orderItems = items.map((item) => ({
      name: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
    }));
    const message = generateWhatsAppOrder(orderItems, total);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-full max-w-md bg-burgundy border-r border-gold/10 z-[70] flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-gold/10">
              <h2 className="font-display text-xl text-cream">سلة التسوق</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 text-cream/50 hover:text-cream transition-colors"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-cream/40 text-lg mb-4">السلة فارغة</p>
                  <Link href="/products" onClick={() => setCartOpen(false)}>
                    <Button variant="outline">تسوق الآن</Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 p-3 rounded-xl bg-burgundy-light/50 border border-gold/5"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-cream text-sm font-medium truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-gold text-sm font-bold mt-1">
                          {formatPrice(item.product.price)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1
                              )
                            }
                            className="w-7 h-7 rounded-full bg-burgundy flex items-center justify-center text-cream/60 hover:text-cream cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-cream text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1
                              )
                            }
                            className="w-7 h-7 rounded-full bg-burgundy flex items-center justify-center text-cream/60 hover:text-cream cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="mr-auto text-cream/30 hover:text-red-400 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gold/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-cream/60">الإجمالي</span>
                  <span className="text-gold font-bold text-xl">
                    {formatPrice(total)}
                  </span>
                </div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  onClick={handleWhatsAppOrder}
                >
                  <MessageCircle className="w-5 h-5" />
                  اطلب عبر واتساب
                </Button>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-cream/30 hover:text-cream/60 text-sm transition-colors cursor-pointer"
                >
                  إفراغ السلة
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
