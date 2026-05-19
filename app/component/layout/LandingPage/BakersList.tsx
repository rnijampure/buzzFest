// app/components/landing/BakersList.tsx
import { GetAllBakers } from "@/app/feature/Bakers/GetAllBakers";
import { BakerCard } from "../../UI/card/BakerCard";

export default async function BakersList() {
  const bakers = await GetAllBakers({});
  const featuredBakers = bakers.slice(0, 4);
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 my-3 justify-items-center">
      {featuredBakers?.map((baker: any) => (
        <BakerCard key={baker.id} baker={baker} />
      ))}
    </section>
  );
}
