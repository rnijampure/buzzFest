import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import AddToCartButton from "../addToCartButton";
import StarIcon from "../star";
import type { DoughnutCardProps } from "./types";

export const DoughnutCard = ({
  id,
  name,
  stock,
  images,
  starRating,
  creatorSlug,
  price,
}: DoughnutCardProps) => {
  return (
    <div className="absolute top-0">
      <h3 className="font-bold  text-md">by {creatorSlug.replace("-", " ")}</h3>
      {stock === 0 && (
        <div className="absolute inset-0 z-10 bg-white/60 flex items-center justify-center backdrop-blur-[1px]">
          <Badge variant="destructive" className="text-lg py-1 px-4">
            Sold Out
          </Badge>
        </div>
      )}

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <StarIcon
            className="cursor-pointer hover:opacity-80"
            rating={starRating}
          />
          <span className="ml-[-36] leading-snug text-xs"> {starRating}</span>

          <span className="text-xs text-zinc-500 italic">
            Stock Available: {stock}
          </span>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold text-lg">₹{price.toString()}</span>

          {stock === 0 ? (
            <Button variant="brand" type="button" disabled={stock === 0}>
              Waitlist
            </Button>
          ) : (
            <AddToCartButton
              id={id}
              name={name}
              images={images}
              price={price}
              stock={Number(stock)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
