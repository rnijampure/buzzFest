//app\component\UI\card\BakerCard.tsx
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { StarRating } from "./StarRating";
import { CardImage } from "./CardImage";
import { BakerProps } from "./types";

export function BakerCard({ baker }: { baker: BakerProps }) {
  if (!baker) return null;

  // 2. Data Unwrapping: Ensure these match your DB/Mock schema
  const firstImage = baker.images?.[0] || "";
  const bakerName = baker.name || "Featured Baker";
  const specialty = baker.specialty || "Baker";

  return (
    <Card
      className={`flex flex-col  h-135 mx-5 min-w-xs max-w-sm p-0 overflow-hidden transition-all hover:shadow-md border-zinc-200`}
    >
      <div className="relative   w-full">
        <CardImage src={firstImage} alt={bakerName} />
        <Badge
          className="absolute top-2 right-2  bg-white/90 text-zinc-800"
          variant="outline"
        >
          {baker.experience}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start gap-2">
          <div className="space-y-1">
            <CardTitle className="text-lg font-bold leading-none">
              {baker.name}
            </CardTitle>
            <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
              {baker.specialty}
            </p>
          </div>
          <StarRating rating={baker.rating} />
        </div>
      </CardHeader>

      <CardContent className="p-4 relative pt-2 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1 text-zinc-500 text-xs mb-2">
            <MapPin className="w-3 h-3" />
            {baker.location}
          </div>

          <CardDescription className="text-sm line-clamp-2 italic">
            "{baker.description}"
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
