// app\component\UI\card\BakerCard.tsx
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

  const firstImage = baker.images?.[0] || "";
  const bakerName = baker.name || "Featured Baker";

  return (
    <Card className="w-full p-0 overflow-hidden transition-all hover:shadow-md border-zinc-200 bg-white">
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <CardImage src={firstImage} alt={bakerName} />
        <Badge
          className="absolute top-2 right-2 bg-white/90 text-zinc-800"
          variant="outline"
        >
          {baker.experience}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start gap-2">
          <div className="space-y-1 min-w-0">
            <CardTitle className="text-lg font-bold leading-tight truncate">
              {baker.name}
            </CardTitle>
            <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider truncate">
              {baker.specialty || "Baker"}
            </p>
          </div>
          <div className="flex-shrink-0">
            <StarRating rating={baker.rating} />
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0   justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-1 text-zinc-500 text-xs">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{baker.location}</span>
          </div>

          <CardDescription className="text-sm line-clamp-3 italic text-zinc-600">
            "{baker.description}"
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
