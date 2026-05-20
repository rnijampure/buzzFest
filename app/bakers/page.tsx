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
    <div className=" flex flex-1 w-full flex-col px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Bakers</h2>
      <BakersList />
    </div>
  );
};

export default Bakerspage;
