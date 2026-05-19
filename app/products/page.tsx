//buzz-fest\app\products\page.tsx
import React from "react";
import { ProductsCard } from "./ProductsCard";
import { GetAllProducts } from "./getAllProducts";
import { Props } from "@/lib/types";
import ClearFilters from "./clearFilters";
import { SearchComponent } from "@/components/ui/search";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ProductsSidebar } from "../component/UI/productsFilter";

// Define what the filters object looks like
// It accepts any string key, and the value will be an array of strings

const ProductsPage = async ({ searchParams }: Props) => {
  // 1. Resolve the searchParams promise
  const params = await searchParams;
  console.log("params", Object.keys(params).includes("search"));
  const filters = Object.keys(params).includes("search")
    ? {
        search: params?.search
          ? params?.search.toString().toLowerCase()
          : undefined,
      }
    : {
        category: params.category
          ? params.category
              .toLowerCase()
              .split(",")
              .map((s: any) => s.toLowerCase())
          : undefined,
        creatorSlug: params.creatorSlug
          ? params.creatorSlug
              .replaceAll(" ", "-")
              .toLowerCase()
              .split(",")
              .map((s: any) => s.toLowerCase())
          : undefined,
        price: params.price
          ? params.price
              .toString()
              .split(",")
              .map((s: any) => s.toLowerCase())
          : undefined,
      };
  const products = await GetAllProducts(filters);

  //console.log("filters PAGE.TSX Object:::", filters);
  //if (Object.keys(params))
  // const products = await GetAllProducts(filters);
  //console.log("products", products);
  /*
    <SidebarProvider>
      <ProductsSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
*/
  return (
    <>
      <SidebarProvider>
        <ProductsSidebar />
        <main>
          <SidebarTrigger />
          <SearchComponent />
          <section className="flex flex-row  w-full align-middle justify-between">
            <p className="flex flex-col ml-1.5 w-50 gap-10 px-6">
              {" "}
              {products.length} Items found
            </p>
            <ClearFilters />
          </section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-6">
            {products &&
              products?.map((product: any) => {
                // 1. Changed .contains to .includes (standard JS)
                // 2. Added lowercase check to make the filter case-insensitive
                if (product.name.toLowerCase().includes("signature")) {
                  return null;
                }

                // Return null instead of an empty string to avoid React rendering noise
                return (
                  <ProductsCard key={product.id || product.name} {...product} />
                );
              })}

            {products.length == 0 && (
              <p className="flex flex-row w-full">
                {" "}
                No Items with these filters, try some other filters, or remove a
                few filter{" "}
              </p>
            )}
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default ProductsPage;
