import React from "react";
import { ProductsCard } from "./ProductsCard";
import { GetAllProducts } from "../feature/Products/getAllProducts";
import { Props } from "@/lib/types";
import ClearFilters from "./clearFilters";

// Define what the filters object looks like
// It accepts any string key, and the value will be an array of strings

const ProductsPage = async ({ searchParams }: Props) => {
  // 1. Resolve the searchParams promise
  const params = await searchParams;
  // console.log("params 0", params);
  // 2. Normalize types (URL strings -> DB numbers)
  /*  const filters1 = {
    category: params.category
      ? params.category.toLowerCase().split(",")
      : undefined,
    creatorSlug: params.creatorSlug?.replaceAll(" ", "-").toLowerCase(),
  };
   let filters2: FilterState = {};
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (key == "price") {
        filters2[key] = [parseFloat(value + ".00")];
      } else {
        filters2[key] = value
          .toLowerCase()
          .split(",")
          .map((s: any) => s.toLowerCase());
      }
    }
  }
  console.log("params 1:::", filters2); */

  const filters = {
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
  console.log("filters PAGE.TSX Object:::", filters);
  const products = await GetAllProducts(filters);
  //console.log("products", products);
  return (
    <>
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
            No Items with these filters, try some other filters, or remove a few
            filter{" "}
          </p>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
