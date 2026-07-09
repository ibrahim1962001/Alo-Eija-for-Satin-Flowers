"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, Flower2 } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/products", label: "المتجر" },
  { href: "/about", label: "عنّا" },
  { href: "/contact", label: "تواصل معنا" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCartStore();
  const itemCount = totalItems();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-burgundy/90 backdrop-blur-xl shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Flower2 className="w-8 h-8 text-gold transition-transform group-hover:rotate-12" />
            <div className="absolute inset-0 blur-lg bg-gold/20 rounded-full" />
          </div>
          <div>
            <span className="font-display text-xl font-bold text-cream block leading-tight">
              Alo Eija
            </span>
            <span className="text-[10px] text-gold/80 tracking-widest uppercase">
              Satin Flowers
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-cream/70 hover:text-gold transition-colors text-sm font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 right-0 w-0 h-px bg-gold transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleCart}
            className="relative p-2 text-cream hover:text-gold transition-colors"
            aria-label="سلة التسوق"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -left-1 w-5 h-5 bg-gold text-burgundy text-xs font-bold rounded-full flex items-center justify-center"
              >
                {itemCount}
              </motion.span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-cream"
            aria-label="القائمة"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-burgundy/95 backdrop-blur-xl border-t border-gold/10"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/80 hover:text-gold transition-colors py-2 text-lg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
