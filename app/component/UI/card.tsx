import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { Star, MapPin } from "lucide-react";

// Using an interface for better TypeScript support
interface BakerProps {
  name: string;
  images: string[];
  specialty: string;
  experience: string;
  location: string;
  description: string;
  rating: number;
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
export function BakerCard({
  name,
  images,
  specialty,
  experience,
  location,
  description,
  rating,
  type,
  stock,
  lastOrdered,
  creator,
  price,
}: CardProps) {
  return (
    <Card className="flex flex-col h-137.5 mx-5 min-w-xs max-w-sm p-0 overflow-hidden transition-all hover:shadow-md border-zinc-200">
      <div className="relative   w-full">
        <CloudinaryImage
          width="350"
          height="252"
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover  aspect-4/3"
        />
        <Badge
          className="absolute top-2 right-2  bg-white/90 text-zinc-800"
          variant="outline"
        >
          {experience}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start gap-2">
          <div className="space-y-1">
            <CardTitle className="text-lg font-bold leading-none">
              {name}
            </CardTitle>
            <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
              {specialty}
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm font-bold text-green-700">
            <Star className="w-3 h-3 fill-current" />
            {rating}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2 flex-1 flex flex-col justify-between">
        <div>
          {type == undefined && (
            <div className="flex items-center gap-1 text-zinc-500 text-xs mb-2">
              <MapPin className="w-3 h-3" />
              {location}
            </div>
          )}
          <CardDescription className="text-sm line-clamp-2 italic">
            "{description}"
          </CardDescription>
        </div>
        {type !== undefined && (
          <DoughnutCard
            name={name} // Pass the name from BakerCard props
            stock={stock}
            lastOrdered={lastOrdered}
            creator={creator}
            price={price}
            type={type}
          />
        )}
      </CardContent>
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
          <Button variant="brand" type="button" disabled={stock === 0}>
            {stock === 0 ? "Waitlist" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  );
};
