// app/components/landing/BakersList.tsx
import { GetAllBakers } from "@/app/feature/Bakers/GetAllBakers";
import { BakerCard } from "../../UI/card/BakerCard";

export default async function BakersList() {
  const bakers = await GetAllBakers({});
  const featuredBakers = bakers.slice(0, 4); // Keep your max fetch at 4

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {featuredBakers?.map((baker: any, index: number) => (
        <div
          key={baker.id}
          className={`
        ${index >= 1 ? "hidden sm:block" : ""}
        ${index >= 2 ? "sm:hidden lg:block" : ""}
        ${index >= 3 ? "lg:hidden xl:block" : ""}
      `}
        >
          <BakerCard baker={baker} />
        </div>
      ))}
    </div>
  );
}
