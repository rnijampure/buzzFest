// app\component\layout\LandingPage\DoughnutsList.tsx
import { GetAllBakers } from "@/app/feature/Bakers/GetAllBakers";
import { BakerCard } from "../../UI/card/BakerCard";
import { GetAllProducts } from "@/app/products/getAllProducts";
import { ProductCard } from "../../UI/card/ProductCard";
const filtersDoughnuts = {
  category: ["doughnut"],
};
export default async function DoughnutsList() {
  const SpecialtyDoughnuts = await GetAllProducts(filtersDoughnuts);

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 my-3  justify-items-center">
      {SpecialtyDoughnuts?.map((doughnut: any) => {
        return <ProductCard key={doughnut.id} product={doughnut} />;
      })}
    </section>
  );
}
