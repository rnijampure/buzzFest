// app/component/UI/card/ProductCard.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import AddToCartButton from "../addToCartButton";
import StarIcon from "../star";
import { StarRating } from "./StarRating";
import { CardImage } from "./CardImage";
import {
  type Product,
  formatCreatorSlug,
  getProductDisplayPrice,
  getProductPriceNumber,
} from "@/types/product";

export type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  if (!product) return null;

  const formattedCreator = formatCreatorSlug(product.creatorSlug);
  const displayPrice = getProductDisplayPrice(product.price);
  const firstImage = product.images?.[0] ?? "/placeholder-bakery.png";

  return (
    <Card
      className="flex h-115 max-w-sm min-w-xs flex-col overflow-hidden border-border p-0 mx-5 transition-all hover:shadow-md"
      data-testid="product-card"
    >
      <div className="relative w-full">
        <CardImage src={firstImage} alt={product.name} />
      </div>

      <CardHeader className="p-4 pb-0">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <CardTitle
              className="line-clamp-1 text-lg font-bold leading-none"
              data-testid="product-name"
            >
              {product.name}
            </CardTitle>
          </div>
          <StarRating rating={Number(product.starRating)} />
        </div>
      </CardHeader>

      <CardContent className="relative flex flex-1 flex-col justify-between p-4 pt-2">
        <div>
          <h3 className="text-md font-bold" data-testid="product-creator">
            by {formattedCreator}
          </h3>

          <div className="mb-2 mt-2 flex items-start justify-between">
            <div className="flex items-center gap-1">
              <StarIcon rating={Number(product.starRating)} />
              <span className="text-xs font-medium">{product.starRating}</span>
            </div>

            <span
              className="text-xs italic text-muted-foreground"
              data-testid="product-stock"
            >
              Stock: {product.stock}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <span className="text-lg font-bold" data-testid="product-price">
              ₹{displayPrice}
            </span>

            <AddToCartButton
              id={product.id}
              name={product.name}
              images={product.images}
              price={getProductPriceNumber(product.price)}
              stock={Number(product.stock)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
