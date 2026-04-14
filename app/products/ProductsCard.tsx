import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardAction,
} from "@/components/ui/card";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { Star, MapPin } from "lucide-react";
import BadgeComponent from "../component/UI/Badge";
import StarIcon from "../component/UI/star";

// Using an interface for better TypeScript support
interface BakerProps {
  name: string;
  images: string[];
  specialty: string;
  experience: string;
  location: string;
  description: string;
  id?: string;
  slug: string;
  price: string | number;
  category: string[];
  starRating: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  creatorSlug: string;
  isFeatured: boolean;
  isVeg: boolean;
  stock: number;
}

interface DoughnutCardProps {
  stock: number | string;
  type: string;
  lastOrdered: string;
  name: string;
  creator: string;
  price: number;
}
type CardProps = BakerProps & DoughnutCardProps;
export function ProductsCard({
  name,
  images,
  creatorSlug,
  description,
  starRating,
  category,
  price,
  isVeg,
}: CardProps) {
  return (
    <Card className="group flex flex-col h-full overflow-hidden transition-all hover:shadow-lg pt-0 border-zinc-200">
      {/* Image Wrapper with Aspect Ratio */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <CloudinaryImage
          width="400"
          height="300"
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-white/90 text-zinc-900 backdrop-blur-sm border-none shadow-sm">
            ₹{price.toString()}
          </Badge>
        </div>
      </div>

      <CardHeader className="p-4 pb-0 relative">
        {isVeg && (
          <div className="flex w-15 mt-2 items-center gap-1  px-2 py-1 absolute -top-10.5 right-0">
            <CloudinaryImage
              width="200"
              height="200"
              src="vegan_ibsivi"
              alt="Vegan"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex justify-between items-start gap-2 ">
          <div className="space-y-1">
            <CardTitle className="text-base font-bold uppercase">
              {name}
            </CardTitle>
            <p className="text-[12px] font-bold text-orange-600 capitalize tracking-tighter">
              By {creatorSlug.replace("-", " ")}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2 flex-1 flex flex-col justify-between gap-4 ">
        <CardDescription className="text-sm line-clamp-3 text-zinc-500 italic ">
          "{description}"
        </CardDescription>

        <div className="flex mt-2 items-center gap-1 text-xs font-bold bg-green-50 text-green-700 px-2 py-1 rounded">
          <StarIcon rating={starRating} size={18} />
          {starRating}
        </div>
        {/* Category Badges at bottom */}
        <div className="pt-2 border-t border-zinc-100">
          <BadgeComponent items={category} color="green" />
        </div>
      </CardContent>
      <CardAction className="text-center justify-around flex w-full">
        <Button variant="brand" type="button">
          Add to cart
        </Button>
        <Button type="button" variant="brand">
          More Details
        </Button>
      </CardAction>
    </Card>
  );
}
export const DoughnutCard = ({
  stock,
  type,
  lastOrdered,
  name,
  creator,
  price,
}: DoughnutCardProps) => {
  return (
    <div className="relative overflow-hidden mt-4 border rounded-lg">
      {stock === 0 && (
        <div className="absolute inset-0 z-10 bg-white/60 flex items-center justify-center backdrop-blur-[1px]">
          <Badge variant="destructive" className="text-lg py-1 px-4">
            Sold Out
          </Badge>
        </div>
      )}

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="text-[10px] uppercase">
            {type}
          </Badge>
          <span className="text-xs text-zinc-500 italic">
            Last: {lastOrdered}
          </span>
        </div>

        <h3 className="font-bold text-md">{name}</h3>
        <p className="text-xs text-zinc-600">by {creator}</p>

        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold text-lg">₹{price.toString()}</span>
          <Button size="sm" disabled={stock === 0}>
            {stock === 0 ? "Waitlist" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  );
};
