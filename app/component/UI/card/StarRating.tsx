// app/component/UI/StarRating.tsx
import { Star } from "lucide-react";

export const StarRating = ({ rating }: { rating?: number }) => {
  // Fix: Check for missing data specifically, not just falsy values
  if (rating === undefined || rating === null) return null;
  return (
    <div className="flex items-center gap-1 text-sm font-bold text-brand-green">
      <Star className="w-3 h-3 fill-current" />
      <span>{rating}</span>
    </div>
  );
};
