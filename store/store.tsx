import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  specialInstructions?: string;
  variant?: string;
  size?: string;
  message?: string;
};

interface CartState {
  cartItems: CartItem[];
  open: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  incrementQty: (id: string) => void;
  decrementQty: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      open: false,

      setIsCartOpen: (isOpen) => set({ open: isOpen }),

      addToCart: (item) =>
        set((state) => {
          const existing = state.cartItems.find((i) => i.id === item.id);

          if (existing) {
            return {
              cartItems: state.cartItems.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i,
              ),
            };
          }

          // Optimized new item insertion
          const newItem: CartItem = {
            ...item,
            originalPrice: item.originalPrice ?? item.price + 50, // UI Architectural touch: show a discount
            variant: item.variant || "Default",
            message: item.message?.trim() || "No Message given",
            specialInstructions:
              item.specialInstructions?.trim() || "No special requests",
          };

          return {
            cartItems: [...state.cartItems, newItem],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((i) => i.id !== id),
        })),

      incrementQty: (id) =>
        set((state) => ({
          cartItems: state.cartItems.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        })),

      decrementQty: (id) =>
        set((state) => ({
          cartItems: state.cartItems
            .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
            .filter((i) => i.quantity > 0),
        })),

      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "buzz-fest-cart-storage", // Key for LocalStorage
      storage: createJSONStorage(() => localStorage),
      // PARTIALIZE: This ensures we ONLY save items.
      // The 'open' state will always reset to false on refresh.
      partialize: (state) => ({ cartItems: state.cartItems }),
    },
  ),
);
