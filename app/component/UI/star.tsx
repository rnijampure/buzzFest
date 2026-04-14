import React from "react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  className?: string;
  rating: number; // e.g., 4.5
  maxStars?: number;
  size?: number;
}

const StarIcon = ({
  className,
  rating,
  maxStars = 5,
  size = 14,
}: StarRatingProps) => {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: maxStars }).map((_, index) => {
        // Calculate fill percentage for THIS specific star
        // Star 1 (index 0) gets 100% if rating is 4.5
        // Star 5 (index 4) gets 50% if rating is 4.5
        const calculateFill = () => {
          if (rating >= index + 1) return 100; // Fully filled
          if (rating <= index) return 0; // Fully empty
          return (rating - index) * 100; // Partial (e.g., 0.5 -> 50%)
        };

        const fillPercent = calculateFill();
        const gradientId = `star-grad-${index}-${fillPercent}`;

        return (
          <svg
            key={index}
            viewBox="0 0 24 24"
            width={size}
            height={size}
            stroke={fillPercent > 0 ? "#d97706" : "#d1d5db"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-sm"
          >
            <defs>
              <linearGradient id={gradientId}>
                <stop offset={`${fillPercent}%`} stopColor="#facc15" />
                <stop offset={`${fillPercent}%`} stopColor="#ffffff" />
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
};

export default StarIcon;
