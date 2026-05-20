import { CloudinaryImage } from "@/components/ui/CloudinaryImage";

interface CarouselShellProps {
  item: {
    name: string;
    baker: string;
    src: string;
  };
  isFirst: boolean;
}

export const CarouselShell = ({ item, isFirst }: CarouselShellProps) => {
  return (
    <div className="relative w-full h-105 overflow-hidden">
      <CloudinaryImage
        src={item.src}
        alt={item.name}
        fill
        // 1. First image is discoverable in initial document immediately
        priority={isFirst}
        // 2. Forces high asset fetch order if it's the visible hero slide
        fetchPriority={isFirst ? "high" : "low"}
        // 3. Explicitly breaks any down-stream lazy-loading dependencies
        loading={isFirst ? "eager" : "lazy"}
        sizes="(max-width: 767px) 600px, 1200px"
        crop="fill"
        gravity="auto"
        className="object-cover"
      />

      {/* Logo overlay */}
      <div className="absolute inset-0 flex items-end justify-end p-2">
        <div className="px-5 rounded-xl">
          <CloudinaryImage
            src="logo.new_ndfwmw"
            alt="brand logo"
            width={200}
            height={200}
            // Prevents the overlay logo from blocking your main LCP product image asset load
            priority={false}
            loading="lazy"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export const ITEMS = [
  {
    name: "Sourdough Bread",
    baker: "Sarah's Kitchen",
    src: "1_withoutLogo_ejducv",
  },
  {
    name: "Chocolate Ganache",
    baker: "Maria's Sweets",
    src: "2_pf3lhm",
  },
  { name: "Lemon Tart", baker: "Emma's Pastries", src: "3_r0f7fx" },
];
