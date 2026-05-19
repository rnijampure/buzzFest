export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-8 lg:gap-12 items-start">
        {/* LEFT: IMAGE */}
        <div className="w-full lg:sticky lg:top-24">
          <div className="w-full aspect-square bg-gray-200 rounded-xl" />
        </div>

        {/* RIGHT: DETAILS */}
        <div className="space-y-6 lg:space-y-8">
          {/* TITLE + CREATOR */}
          <div className="space-y-3">
            <div className="h-8 w-3/4 bg-gray-200 rounded" />

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gray-200 rounded-full" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-4 w-10 bg-gray-200 rounded" />
            </div>
          </div>

          {/* RATING */}
          <div className="flex items-center gap-2">
            <div className="h-4 w-20 bg-gray-200 rounded" />
            <div className="h-4 w-8 bg-gray-200 rounded" />
            <div className="h-3 w-16 bg-gray-200 rounded" />
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-2 max-w-xl">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-4/6" />
          </div>

          {/* OPTIONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
            {/* Quantity */}
            <div className="space-y-2">
              <div className="h-4 w-20 bg-gray-200 rounded" />
              <div className="h-10 bg-gray-200 rounded" />
            </div>

            {/* Size */}
            <div className="space-y-2">
              <div className="h-4 w-16 bg-gray-200 rounded" />
              <div className="h-10 bg-gray-200 rounded" />
            </div>
          </div>

          {/* TEXTAREAS */}
          <div className="space-y-4 max-w-xl">
            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-200 rounded" />
              <div className="h-20 bg-gray-200 rounded-xl" />
            </div>

            <div className="space-y-2">
              <div className="h-4 w-40 bg-gray-200 rounded" />
              <div className="h-20 bg-gray-200 rounded-xl" />
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t">
            <div className="h-6 w-20 bg-gray-200 rounded" />
            <div className="h-10 w-36 bg-gray-200 rounded-xl" />
          </div>

          {/* STOCK */}
          <div className="h-3 w-32 bg-gray-200 rounded" />
        </div>
      </div>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex items-center justify-between lg:hidden">
        <div className="h-5 w-20 bg-gray-200 rounded" />
        <div className="h-10 w-28 bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
}
