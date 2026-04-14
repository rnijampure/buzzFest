// buzz-fest/app/bakers/loading.tsx
export default function Loading() {
  return (
    <div className="grid grid-cols-4 gap-4 animate-pulse">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="h-64 bg-gray-200 rounded-lg" />
      ))}
    </div>
  );
}
