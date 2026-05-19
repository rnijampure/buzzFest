import React from "react";
import { cn } from "@/lib/utils";
import { cssVars } from "@/lib/design-tokens";
import { getStarFillPercent, getStarGradientId } from "@/lib/star-rating";

export interface StarRatingProps {
  className?: string;
  rating: number;
  maxStars?: number;
  size?: number;
}

export function StarIcon({
  className,
  rating,
  maxStars = 5,
  size = 14,
}: StarRatingProps) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Rating: ${rating} out of ${maxStars} stars`}
    >
      {Array.from({ length: maxStars }).map((_, index) => {
        const fillPercent = getStarFillPercent(rating, index);
        const gradientId = getStarGradientId(index, fillPercent);
        const isActive = fillPercent > 0;

        return (
          <svg
            key={index}
            viewBox="0 0 24 24"
            width={size}
            height={size}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-sm"
            style={{
              stroke: isActive
                ? `var(${cssVars.starStrokeActive})`
                : `var(${cssVars.starStrokeInactive})`,
            }}
          >
            <defs>
              <linearGradient id={gradientId}>
                <stop
                  offset={`${fillPercent}%`}
                  stopColor={`var(${cssVars.starFill})`}
                />
                <stop
                  offset={`${fillPercent}%`}
                  stopColor={`var(${cssVars.starEmptyFill})`}
                />
              </linearGradient>
            </defs>
            <path
              fill={`url(#${gradientId})`}
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
        );
      })}
    </div>
  );
}

export default StarIcon;
