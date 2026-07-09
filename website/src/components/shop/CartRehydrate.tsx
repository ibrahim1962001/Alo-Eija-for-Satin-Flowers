"use client";

import { useEffect } from "react";
import { useCartStore } from "@/lib/cart-store";

export function CartRehydrate() {
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return null;
}
