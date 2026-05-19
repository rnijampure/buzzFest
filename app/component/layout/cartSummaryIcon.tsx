"use client";
import { useCartStore } from "@/store/store";
import React from "react";
import { ListOrdered } from "lucide-react";
import { BarChart3 } from "lucide-react";
import { ClipboardList } from "lucide-react";
import { List } from "lucide-react";

import clsx from "clsx";

type IconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
};

export const BubbleCartIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Speech Bubble */}
    <path d="M4 5h16v10H8l-4 4V5z" />

    {/* Cart handle */}
    <path d="M9 9h2" />

    {/* Cart body */}
    <path d="M10 9h5l1.2-3H11" />

    {/* Wheels */}
    <circle cx="12" cy="14" r="1.2" />
    <circle cx="16" cy="14" r="1.2" />
  </svg>
);
const CartSummaryComponent = () => {
  // Select the state and actions you need
  const isOpen = useCartStore((state) => state.open);
  const setIsCartOpen = useCartStore((state) => state.setIsCartOpen);
  return (
    <>
      <button
        type="button"
        onClick={() => setIsCartOpen(!isOpen)}
        title="Cart Quick View"
        className="fixed top-25 right-0 z-50 flex cursor-pointer items-center gap-3 rounded-l-3xl bg-brand-gold/60 p-2 text-muted-foreground shadow-lg hover:text-foreground"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-bag-icon lucide-shopping-bag"
        >
          <path d="M16 10a4 4 0 0 1-8 0" />
          <path d="M3.103 6.034h17.794" />
          <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
        </svg>
      </button>
    </>
  );
};

export default CartSummaryComponent;
