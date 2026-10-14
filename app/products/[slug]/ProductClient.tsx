"use client";
import React, { useState } from "react";
import ProductImageCarousel from "./productImage";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AvatarComponent } from "@/app/component/UI/avatar";
import StarIcon from "@/app/component/UI/star";
import AddToCartButton from "@/app/component/UI/addToCartButton";
import { getProductPriceNumber } from "@/lib/types/product";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductClient({ product }: any) {
  const [form, setForm] = useState({
    quantity: 2,
    size: "500",
    message: "No Message",
    specialInstructions: "No Special Instructions",
  });

  const {
    id,
    name,
    images,
    baker,
    isVeg,
    stock,
    starRating,
    description,
    price,
    creatorSlug,
  } = product;

  console.log("SLUG", product);
  /*  const { name, images, creatorSlug, isVeg, stock, starRating } = {
    name: "Rainbow Sparkles Cupcake",
    images: [
      "delicious-birthday-cake-with-candles_23-2151010608_ipfyry",
      "ai-generated-7833232_640_aucdjn",
    ],
    creatorSlug: "priya-sharma",
    isVeg: true,
    stock: 9,
    starRating: 4.5,
  };
 */
  const creatorName = creatorSlug
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  /**/
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-8 lg:gap-12 items-start">
        {/* LEFT: IMAGE */}
        <div className="w-full lg:sticky lg:top-24">
          <ProductImageCarousel images={images} name={name} />
        </div>

        {/* RIGHT: DETAILS */}
        <div className="space-y-6 lg:space-y-8">
          {/* TITLE + CREATOR */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
              {name}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <AvatarComponent classes="w-6 h-6" />
              <span>{creatorName}</span>
              {isVeg && (
                <span className="text-green-600 font-medium">● Veg</span>
              )}
            </div>
          </div>

          {/* RATING */}
          <div className="flex items-center gap-2">
            <StarIcon rating={starRating} size={18} />
            <span className="text-sm font-medium">{starRating}</span>
            <span className="text-xs text-gray-500">(120 reviews)</span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed max-w-xl">
            Freshly baked rainbow sparkles cupcake made with premium
            ingredients. Perfect for birthdays and celebrations.
          </p>

          {/* OPTIONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
            <div className="space-y-1">
              <label className="text-sm font-medium">Quantity</label>
              <Select
                value={form.quantity.toString()}
                onValueChange={(val) =>
                  setForm((prev) => ({ ...prev, quantity: Number(val) }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {[1, 2, 3, 4, 5].map((q) => (
                      <SelectItem key={q} value={q.toString()}>
                        {q}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Size</label>
              <Select
                value={form.size.toString()}
                onValueChange={(val) =>
                  setForm((prev) => ({ ...prev, size: val }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="200">200 g</SelectItem>
                    <SelectItem value="500">500 g</SelectItem>
                    <SelectItem value="1000">1 kg</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* TEXTAREAS */}
          {/* TEXTAREAS */}
          <div className="space-y-4 max-w-xl">
            {/* 1. Message on Cake */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Message on Cake</label>
              <textarea
                value={form.message} // Bind value to state
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black/20 min-h-[80px]"
                placeholder="Enter message (e.g. Happy Birthday)..."
              />
            </div>

            {/* 2. Special Instructions */}
            <div className="space-y-1">
              <label className="text-sm font-medium">
                Special Instructions
              </label>
              <textarea
                value={form.specialInstructions} // Bind value to state
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    specialInstructions: e.target.value,
                  }))
                }
                name="specialInstructions"
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black/20 min-h-[80px]"
                placeholder="Any allergies or delivery preferences..."
              />
            </div>
          </div>
          {/* CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t">
            <span className="text-xl font-semibold">₹{price}</span>
            <AddToCartButton
              id={product.id}
              name={product.name}
              images={product.images}
              price={getProductPriceNumber(product.price)}
              stock={Number(product.stock)}
              slug={product.slug}
              description={product.description}
              category={product.category}
              starRating={product.starRating}
              search={`${product.name} ${product.description} ${product.category.join(" ")}`}
              {...form}
            />
          </div>

          {/* STOCK */}
          <p className="text-xs text-gray-500">Only {stock} left in stock</p>
        </div>
      </div>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex items-center justify-between lg:hidden">
        <span className="font-semibold">₹299</span>
      </div>
    </div>
  );
}

// ===================== CART SHEET (ENHANCED) =====================
