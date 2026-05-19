import { useState, useEffect } from "react";
import { useCartStore } from "@/store/store";

export const useCart = () => {
  const result = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? result : { ...result, cartItems: [] };
};
