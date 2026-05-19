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
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-3  justify-items-center"
      data-testid="cupcakes-list-section "
    >
      {SpecialtyCupcakes?.map((cupcake) => {
        // Architecture Note: We transform the data at the boundary
        // to keep the UI components "Pure"
        const plainProduct = {
          ...cupcake,
          price: Number(cupcake.price),
          stock: Number(cupcake.stock),
        };

        return <ProductCard key={cupcake.id} product={plainProduct} />;
      })}
    </section>
  );
}
