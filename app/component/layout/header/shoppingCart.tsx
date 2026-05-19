"use client";
import { useCartStore } from "@/store/store";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation"; // Use 'next/router' for Pages Router
const ShoppingCartComponent = () => {
  // Select the state and actions you need
  const isOpen = useCartStore((state) => state.open);
  const cartItemsLength = useCartStore((state) => state.cartItems);
  const setIsCartOpen = useCartStore((state) => state.setIsCartOpen);

  const router = useRouter();

  const handleClick = () => {
    // Run any logic here
    router.push("/cart");
  };
  return (
    <div
      className="relative  justify-self-end mr-10 mt-5 cursor-pointer "
      onClick={handleClick}
    >
      <ShoppingCart
        className="w-10 h-10 text-white "
        color="white"
        strokeWidth={1.25}
      />
      <span className="absolute top-2 right-2 text-xs bg-brand-green text-white rounded-full px-1 z-11">
        {cartItemsLength.length}
      </span>
    </div>
  );
};

export default ShoppingCartComponent;
