// app/component/UI/skeletons/BaseCardSkeleton.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BaseCardSkeletonProps {
  hasAction?: boolean; // For the "Add to Cart" button in ProductCard
  lines?: number; // Number of description lines
}

export function BaseCardSkeleton({
  hasAction = false,
  lines = 2,
}: BaseCardSkeletonProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden border-zinc-200 animate-pulse">
      {/* 1. Shared Image Atom Placeholder */}
      <div className="w-full aspect-4/3 bg-zinc-200" />

      <CardHeader className="p-4 pb-0 space-y-2">
        <div className="flex justify-between items-start">
          {/* Title Area */}
          <div className="h-5 w-1/2 bg-zinc-200 rounded" />
          {/* Rating Area */}
          <div className="h-4 w-10 bg-zinc-200 rounded" />
        </div>
        {/* Subtitle/Specialty Area */}
        <div className="h-3 w-3/4 bg-zinc-200 rounded" />
      </CardHeader>

      <CardContent className="p-4 pt-4 flex-1 flex flex-col justify-between">
        {/* Description/Bio Area */}
        <div className="space-y-2">
          {Array.from({ length: lines }).map((_, i) => (
            <div key={i} className="h-3 w-full bg-zinc-100 rounded" />
          ))}
        </div>

        {/* Optional Action Button Placeholder */}
        {hasAction && (
          <div className="mt-4 flex justify-between items-center">
            <div className="h-6 w-16 bg-zinc-200 rounded" /> {/* Price */}
            <div className="h-9 w-24 bg-zinc-300 rounded-md" /> {/* Button */}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
