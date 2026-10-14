// app/components/landing/CupcakesList.tsx
import { GetAllProducts } from "@/app/products/getAllProducts";
import { ProductCard } from "../../UI/card/ProductCard";

const filtersCupcakes = {
  category: ["cakes", "custom"],
};

export default async function CupcakesList() {
  const SpecialtyCupcakes = await GetAllProducts(filtersCupcakes);

  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6"
      data-testid="cupcakes-list-section "
    >
      {SpecialtyCupcakes?.map((cupcake, index: number) => {
        // Architecture Note: We transform the data at the boundary
        // to keep the UI components "Pure"
        const plainProduct = {
          ...cupcake,
          price: Number(cupcake.price),
          stock: Number(cupcake.stock),
        };

        return (
          <div
            key={cupcake.id}
            className={`
              ${index >= 1 ? "hidden sm:block" : ""}
              ${index >= 2 ? "sm:hidden lg:block" : ""}
              ${index >= 3 ? "lg:hidden xl:block" : ""}
            `}
          >
            <ProductCard product={plainProduct} />
          </div>
        );
      })}
    </section>
  );
}
