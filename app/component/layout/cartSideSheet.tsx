"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useCartStore } from "@/store/store";
import { Trash2, Plus, Minus } from "lucide-react";
import React from "react";
import type { CartItem } from "@/store/store";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { useRouter } from "next/navigation";
// Cart item type with variants

export function CartSheet() {
  //alert(open);
  const router = useRouter();
  // Select the state and actions you need
  const isOpen = useCartStore((state) => state.open);
  const removeItem = useCartStore((state) => state.removeFromCart);
  const decrement = useCartStore((state) => state.decrementQty);

  const increment = useCartStore((state) => state.incrementQty);
  const setIsCartOpen = useCartStore((state) => state.setIsCartOpen);
  const cart = useCartStore((state) => state.cartItems);

  // Calculations
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const originalTotal = cart.reduce(
    (acc, item) => acc + (item.originalPrice || item.price) * item.quantity,
    0,
  );
  const savings = originalTotal - subtotal;
  const delivery = subtotal > 500 ? 0 : 40;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + tax;

  function goToCart() {
    setIsCartOpen(false);
    router.push("cart");
  }
  return (
    <Sheet open={isOpen} onOpenChange={() => setIsCartOpen(!isOpen)}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle>Your Cart</SheetTitle>
          <SheetClose asChild>
            <button className="text-sm"> </button>
          </SheetClose>
        </SheetHeader>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto space-y-4 py-4">
          {cart.length === 0 && (
            <p className="text-sm text-gray-500">Your cart is empty</p>
          )}

          {cart.map((item: CartItem) => (
            <div key={item.id} className="flex gap-3 border rounded-xl p-3">
              <CloudinaryImage
                src={item.image}
                width="16"
                height="16"
                className="w-16 h-16 rounded-lg object-cover"
                alt="Image with blur placeholder"
              />
              <div className="flex-1 space-y-2">
                {/* NAME + DELETE */}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium leading-tight">
                      {item.name}
                    </p>
                    {item.quantity && (
                      <span className="text-xs text-gray-500">
                        Quantity: {item.quantity}
                      </span>
                    )}
                  </div>

                  <button onClick={() => removeItem(item.id)}>
                    <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                  </button>
                </div>

                {/* PRICE + STEPPER */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">₹{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-xs line-through text-gray-400">
                        ₹{item.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* STEP CONTROLS */}
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => decrement(item.id)}
                      className="px-2 py-1"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3 text-sm">{item.quantity}</span>
                    <button
                      onClick={() => increment(item.id)}
                      className="px-2 py-1"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <SheetFooter className="border-t pt-4">
          <div className="w-full space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>{delivery === 0 ? "Free" : `₹${delivery}`}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>₹{tax}</span>
            </div>
            {savings > 0 && (
              <div className="flex justify-between text-green-600">
                <span>You saved</span>
                <span>-₹{savings}</span>
              </div>
            )}
            <div className="flex justify-between font-semibold text-base pt-2 border-t">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <Button variant="brand" onClick={goToCart}>
              Go to Cart
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
