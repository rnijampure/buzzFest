//buzz-fest\app\component\UI\addToCartButton.tsx
"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "../../../store/store";
import type { product } from "../../products/getAllProducts";
type OptionalProduct = Partial<product>;
export type product1 = {
  id: string | undefined;
  name?: string;
  slug?: string;
  description?: string;
  price?: any;
  category?: string[];
  starRating?: number;
  images: string[];
  search?: string;
  createdAt: string;
  updatedAt: string;
  creatorSlug: string[] | string;
  isFeatured: boolean;
  isVeg: boolean;
  stock: number;
};

type CartItem = {
  id: string;
  name: string;
  price: number;

  image?: string;
  quantity: number;
  specialInstructions?: string;
  varient: string;
};
// Redefine 'id' as string and 'meta' as a partial object
type NewType = Omit<
  product,
  | "id"
  | "name"
  | "createdAt"
  | "updatedAt "
  | "creatorSlug"
  | "isFeatured"
  | "updatedAt"
  | "isVeg"
> & {
  id: string; // Redefined from number to string
  name: string;
  quantity?: number;
  size?: string;
  varient?: string;
  specialInstructions?: string;
  message?: string;
};
const AddToCartButton = ({
  id,
  name,
  images,
  quantity,
  description,
  starRating,
  message,
  category,
  stock,
  size,
  price,
  varient,
  specialInstructions,
}: NewType) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const setIsCartOpen = useCartStore((state) => state.setIsCartOpen);

  const handleAdd = () => {
    // Ensure we have a valid ID and Price before adding
    if (!id) return;
    let pro = {
      id: id, // IMPORTANT: unique id
      name: name,
      price: price,
      image: images?.[0],
      specialInstructions: specialInstructions || "", // default
      message: message || "",
      varient: "default", // or size/flavor later
      size: size,
      quantity: quantity ?? 1,
    }; /*   */
    //

    addToCart(pro);

    // setIsCartOpen(true); // optional UX
  };

  return (
    <Button variant="brand" onClick={handleAdd}>
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
