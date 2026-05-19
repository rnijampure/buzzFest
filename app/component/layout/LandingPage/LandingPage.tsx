//app\component\layout\LandingPage\LandingPage.tsxa
import { Suspense } from "react";
import { BakeryFeaturedCarousel } from "../../UI/carousel/BakeryFeaturedCarousel";
import SectionDivider from "../../UI/section-divider/SectionDivider";
import { BaseCardSkeleton } from "../../UI/card/BaseCardSkeleton";
import BakersList from "./BakersList";
import DoughnutsList from "./DoughnutsList";
import CupcakesList from "./CupcakesList";

const LandingPage = async () => {
  return (
    <div className="flex flex-1 w-full flex-col">
      <Suspense fallback={<CarouselSkeleton />}>
        <BakeryFeaturedCarousel />
      </Suspense>

      {/* Bakers Section */}
      <SectionDivider title="Our Star Partners" />
      <Suspense fallback={<GridSkeleton hasAction={false} />}>
        <BakersList />
      </Suspense>

      {/* Doughnuts Section */}
      <SectionDivider title="In Demand" />
      <Suspense fallback={<GridSkeleton hasAction={true} />}>
        <DoughnutsList />
      </Suspense>

      {/* Cupcakes Section */}
      <SectionDivider title="Guilt Free Indulgence" />
      <Suspense fallback={<GridSkeleton hasAction={true} />}>
        <CupcakesList />
      </Suspense>
    </div>
  );
};

// Internal Helper for the Loading State
const GridSkeleton = ({ hasAction }: { hasAction: boolean }) => (
  <section className="grid grid-cols-1 md:grid-cols-4 gap-4 my-3">
    {Array.from({ length: 4 }).map((_, i) => (
      <BaseCardSkeleton key={i} hasAction={hasAction} />
    ))}
  </section>
);
export default LandingPage;

const CarouselSkeleton = () => (
  <div className="relative w-full h-[300px] md:h-[420px] rounded-xl overflow-hidden bg-zinc-200">
    <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200" />
  </div>
);
