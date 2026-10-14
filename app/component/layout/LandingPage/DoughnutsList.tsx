// app/component/layout/LandingPage/DoughnutsList.tsx
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
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-3">
      {SpecialtyDoughnuts?.map((doughnut: any, index: number) => {
        return (
          <div
            key={doughnut.id}
            className={`
              ${index >= 1 ? "hidden sm:block" : ""}
              ${index >= 2 ? "sm:hidden lg:block" : ""}
              ${index >= 3 ? "lg:hidden xl:block" : ""}
            `}
          >
            <ProductCard product={doughnut} />
          </div>
        );
      })}
    </section>
  );
}
