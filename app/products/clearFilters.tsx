"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const ClearFilters = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("category");
  const hasParams = searchParams.size > 0;
  if (hasParams) {
    return (
      <div>
        <p className="flex flex-col w-35 text-center text-white text-sm font-bold mr-5 ">
          <a
            href="/products"
            title="All Products"
            className="border {isActive ? 'bg-blue-500' : 'bg-gray-500'} disabled: border-[#d36d19] p-2 rounded-2xl outline-0 ring-0 bg-[#d36d19]"
          >
            Clear Filters
          </a>
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default ClearFilters;
