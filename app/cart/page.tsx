"use client";
//buzz-fest\app\cart\page.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pencil } from "lucide-react";
import CartLoading from "./loading";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ChevronLeft,
  Truck,
  ShieldCheck,
  MessageSquareQuote,
  AlertCircle,
} from "lucide-react";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { useRouter } from "next/navigation";
// 1. Import the Server Action (adjust path if your file is named differently)
import { createOrder } from "@/app/actions/checkout";
// 2. Use next/navigation instead of next/router for App Router

export default function CartPage() {
  const { cartItems, incrementQty, decrementQty, removeFromCart, clearCart } =
    useCartStore();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isPending, setIsPending] = useState(false); // Add loading state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <CartLoading />;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const handleCheckout = async () => {
    setIsPending(true); // Start loading
    try {
      const payload = {
        email: "customer@example.com", // Replace with real auth email later
        name: "Customer Name",
        total: subtotal + deliveryFee,
        items: cartItems,
      };

      const response = await createOrder(payload);

      if (response.success) {
        clearCart();
        router.push(`/checkout/success/${response.orderId}`);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      alert("Checkout failed.");
    } finally {
      setIsPending(false); // Stop loading
    }
  };
  const deliveryFee = subtotal > 1500 ? 0 : 70;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 px-4 text-center">
        <div className="p-8 rounded-full bg-muted/50">
          <ShoppingBag className="w-16 h-16 text-brand-green/30" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-foreground uppercase tracking-tighter italic">
            Your Basket is Empty
          </h2>
          <p className="text-lighter-foreground max-w-sm mx-auto font-medium">
            Looks like you haven't added any artisanal treats yet. Our bakers
            are waiting!
          </p>
        </div>
        <Link href="/products">
          <Button className="bg-brand-green hover:opacity-90 h-btn-h-mbl md:h-btn-h-dsktp px-12 text-lg font-bold rounded-xl">
            Explore Menu
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-20 selection:bg-brand-green/10">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/products"
          className="flex items-center text-xs font-bold text-lighter-foreground hover:text-brand-green mb-8 transition-colors group w-fit uppercase tracking-widest"
        >
          <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Bakery
        </Link>

        <h1 className="text-2xl md:text-2xl  mb-3 text-brand-brown tracking-tighter  uppercase underline decoration-brand-green/10  ">
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* PRODUCT LIST */}
          <div className="lg:col-span-8 space-y-6">
            <div className="divide-y-2 divide-border border-b-2 border-border">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="group py-8 flex flex-col md:flex-row gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  {/* Image Block */}
                  <div className="relative h-20 w-full md:w-40 shrink-0 overflow-hidden rounded-xl bg-muted border-2 border-border shadow-sm">
                    <CloudinaryImage
                      width="200"
                      height="100"
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Details Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div className="space-y-1">
                        <h3 className="text-xl text-brand-green leading-none  tracking-tight">
                          {item.name}
                        </h3>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {item.variant && (
                            <span className="text-[10px] bg-brand-green text-white px-2 py-0.5 rounded-sm font-black uppercase tracking-tighter">
                              {item.variant}
                            </span>
                          )}
                          {item.size && (
                            <span className="text-[10px] bg-muted-foreground/20 text-foreground px-2 py-0.5 rounded-sm font-black uppercase tracking-tighter">
                              {item.size}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xl font-black text-brand-green leading-none italic font-mono">
                          ₹{item.price * item.quantity}
                        </p>
                        <p className="text-[10px] text-lighter-foreground font-bold uppercase mt-1">
                          ₹{item.price} / unit
                        </p>
                      </div>
                    </div>

                    {/* Logic for Message & Instructions */}
                    <div className="space-y-3 my-4">
                      {item.message && (
                        <div className="flex flex-row justify-between items-start gap-2 p-2 bg-brand-green/5 border border-brand-green/10 rounded-sm italic">
                          <p className="inline-flex text-xs text-lighter-foreground">
                            <MessageSquareQuote className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                            <span className=" pl-2 font-black not-italic uppercase text-brand-green text-[9px] mr-2">
                              Note on Cake:
                            </span>
                            "{item.message}"
                          </p>
                          <button className="flex items-center gap-1 text-[10px] font-black text-brand-green hover:underline">
                            <Pencil className="w-3 h-3" />
                          </button>
                        </div>
                      )}

                      {item.specialInstructions && (
                        <div className="flex flex-row justify-between items-start gap-2 p-1 bg-muted/30 border border-border rounded-sm">
                          <p className=" inline-flex leading-6 text-xs text-lighter-foreground">
                            <AlertCircle className="w-4 h-4 text-lighter-foreground shrink-0 mt-0.5" />
                            <span className=" pl-2 font-black uppercase text-[9px] mr-2">
                              Requests:
                            </span>
                            {item.specialInstructions}
                          </p>
                          <button className="flex items-center gap-1 text-[10px] font-black text-brand-green hover:underline">
                            <Pencil className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Controls */}
                    <div className="mt-auto flex justify-between items-center pt-2">
                      <div className="flex items-center bg-background border-2 border-border rounded-sm overflow-hidden shadow-sm">
                        <button
                          onClick={() => decrementQty(item.id)}
                          className="px-1 py-1 hover:bg-brand-green hover:text-white transition-colors active:bg-brand-green/80"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-black text-sm border-x-2 border-border">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => incrementQty(item.id)}
                          className="px-1 py-1 hover:bg-brand-green hover:text-white transition-colors active:bg-brand-green/80"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="group/trash flex items-center gap-2 text-[10px] font-black text-destructive/60 hover:text-destructive transition-colors p-2"
                      >
                        <Trash2 className="w-4 h-4 group-hover/trash:scale-110 transition-transform" />
                        REMOVE ITEM
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Marketplace USP */}
            <div className="flex items-center gap-4 p-6 bg-muted/20 border-2 border-border border-dashed rounded-xl">
              <Truck className="w-8 h-8 text-brand-green" />
              <div>
                <p className="text-sm font-black uppercase tracking-tight">
                  Standard Morning Delivery
                </p>
                <p className="text-xs text-lighter-foreground">
                  All orders placed now will be delivered between 8:00 AM -
                  11:00 AM tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* SUMMARY SIDEBAR */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24">
            <Card className="p-8 border-2 border-brand-green shadow-2xl shadow-brand-green/5 rounded-xl bg-card overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 -mr-16 -mt-16 rounded-full" />

              <h2 className="text-2xl font-black mb-8 italic uppercase underline decoration-brand-green/20 ">
                Checkout Detail
              </h2>

              <div className="space-y-4 text-sm mb-10">
                <div className="flex justify-between items-center text-lighter-foreground font-bold uppercase tracking-widest text-[10px]">
                  <span>Item Total</span>
                  <span className="text-foreground text-sm font-black font-mono">
                    ₹{subtotal}
                  </span>
                </div>
                <div className="flex justify-between items-center text-lighter-foreground font-bold uppercase tracking-widest text-[10px]">
                  <span>Delivery Fee</span>
                  <span
                    className={`text-sm font-black font-mono ${deliveryFee === 0 ? "text-brand-green" : "text-foreground"}`}
                  >
                    {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                  </span>
                </div>

                {deliveryFee > 0 && (
                  <div className="bg-brand-green/5 border border-brand-green/20 p-3 text-center rounded-sm">
                    <p className="text-[10px] font-black text-brand-green uppercase tracking-tighter">
                      Add ₹{1500 - subtotal} more for Free Delivery
                    </p>
                  </div>
                )}

                <div className="pt-6 border-t-2 border-border border-dotted flex justify-between items-end">
                  <span className="text-2xl font-black italic uppercase tracking-tighter">
                    Total Amount
                  </span>
                  <div className="text-right">
                    <span className="text-4xl font-black text-brand-green tracking-tighter font-mono">
                      ₹{total}
                    </span>
                    <p className="text-[9px] font-bold text-lighter-foreground uppercase tracking-widest mt-1">
                      Tax Included
                    </p>
                  </div>
                </div>
              </div>

              <Button
                variant="brand"
                onClick={handleCheckout} // 3. ADD THIS
                disabled={isPending} // 4. DISABLE while loading
                className="w-full italic uppercase h-11.25 md:h-11.25 rounded-xl shadow-xl shadow-brand-green/20 transition-all active:scale-[0.97]"
              >
                {isPending ? "Processing..." : "Proceed to Pay"}
              </Button>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-[9px] font-black text-lighter-foreground uppercase tracking-[0.2em]">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                  Verified Secure Payment
                </div>
              </div>
            </Card>

            <p className="mt-6 text-[10px] text-center text-lighter-foreground font-medium px-4">
              By clicking "Proceed to Pay", you agree to Buzz Fest's quality
              guidelines and delivery timelines.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
