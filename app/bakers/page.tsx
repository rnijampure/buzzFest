//buzz-fest\app\bakers\page.tsx
import { revalidateTag } from "next/cache";
import { BakerCard } from "../component/UI/card/BakerCard";
import Filters from "../component/UI/Filters";
import { GetAllBakers } from "../feature/Bakers/GetAllBakers";
import { Props } from "@/lib/types";
import BakersList from "../component/layout/LandingPage/BakersList";

export const dynamic = "force-dynamic";
const Bakerspage = async ({ searchParams }: Props) => {
  // 1. Resolve the searchParams promise
  const params = await searchParams;

  // 2. Normalize types (URL strings -> DB numbers)
  const filters = {
    minRating: params.minRating ? Number(params.minRating) : undefined,
    location: params.location, // Already a string
  };

  // 3. Fetch data
  const Bakers = await GetAllBakers(filters);
  console.log("Fetched bakers data in page component:", Bakers); // Debug log to check data structure
  return (
    <div className=" flex flex-1 w-full flex-col">
      <section
        className="w-full gap-x-4 my-3
     grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 items-start "
      >
        <Filters />
      </section>

      <BakersList {...Bakers} />
    </div>
  );
};

export default Bakerspage;
