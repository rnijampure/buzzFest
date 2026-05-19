import React from "react";
import { Card } from "@/components/ui/card";

export default function CartLoading() {
  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Skeleton */}
        <div className="h-4 w-32 bg-muted animate-pulse rounded-[var(--radius)] mb-6" />

        {/* Title Skeleton */}
        <div className="h-10 w-48 bg-muted animate-pulse rounded-[var(--radius)] mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Items Skeleton */}
          <div className="lg:col-span-8 space-y-4">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="p-4 md:p-6 rounded-[var(--radius)] border-border"
              >
                <div className="flex gap-4 md:gap-6">
                  <div className="h-24 w-24 md:h-32 md:w-32 bg-muted animate-pulse rounded-[var(--radius)] shrink-0" />
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between">
                      <div className="h-6 w-1/3 bg-muted animate-pulse rounded" />
                      <div className="h-6 w-16 bg-muted animate-pulse rounded" />
                    </div>
                    <div className="h-4 w-1/4 bg-muted animate-pulse rounded" />
                    <div className="flex justify-between items-end mt-auto">
                      <div className="h-10 w-28 bg-muted animate-pulse rounded" />
                      <div className="h-4 w-16 bg-muted animate-pulse rounded" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right: Summary Skeleton */}
          <aside className="lg:col-span-4">
            <Card className="p-8 border-border rounded-[var(--radius)] space-y-6">
              <div className="h-8 w-1/2 bg-muted animate-pulse rounded" />
              <div className="space-y-4">
                <div className="h-4 w-full bg-muted animate-pulse rounded" />
                <div className="h-4 w-full bg-muted animate-pulse rounded" />
                <div className="h-1 bg-muted animate-pulse rounded" />
                <div className="h-12 w-full bg-muted animate-pulse rounded" />
              </div>
              <div className="h-[85px] w-full bg-muted animate-pulse rounded-[var(--radius)]" />
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
