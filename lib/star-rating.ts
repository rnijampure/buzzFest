/**
 * Pure star-rating math — safe to unit test without rendering SVG.
 */
export function getStarFillPercent(rating: number, starIndex: number): number {
  if (rating >= starIndex + 1) return 100;
  if (rating <= starIndex) return 0;
  return (rating - starIndex) * 100;
}

export function getStarGradientId(
  starIndex: number,
  fillPercent: number,
): string {
  return `star-grad-${starIndex}-${fillPercent}`;
}
