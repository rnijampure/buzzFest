//buzz-fest\app\bakers\page.tsx
import { revalidateTag } from "next/cache";
import { BakerCard } from "../component/UI/card";
import Filters from "../component/UI/Filters";
import { GetAllBakers } from "../feature/Bakers/GetAllBakers";
import { Props } from "@/lib/types";

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

  return (
    <div className=" flex flex-1 w-full flex-col">
      <section
        className="w-full gap-x-4 my-3
     grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 items-start "
      >
        <Filters />
      </section>
      <section
        className="w-full gap-x-4 my-3
     grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 items-start "
      >
        {Bakers &&
          Bakers.map((baker: any) => {
            return <BakerCard key={baker.name} {...baker} />;
          })}
      </section>
    </div>
  );
};

export default Bakerspage;
