import { CloudinaryImage } from "@/components/ui/CloudinaryImage";

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

export const CarouselShell = (item: any) => {
  const imageSrc = (
    <source
      media="(max-width: 767px)"
      srcSet={`https://res.cloudinary.com/your-cloud-name/image/upload/w_600,h_420,c_fill,g_auto,f_auto,q_auto/${item.src}`}
    />
  );
  return (
    <>
      {ITEMS.map((item, index) => (
        <div key={item.src} className="relative w-full h-105 overflow-hidden">
          <CloudinaryImage
            src={item.src}
            alt={item.name}
            fill
            priority={index === 0}
            // On screens smaller than 768px (mobile), request a ~600px wide image asset.
            // On larger screens (desktop), request a 1200px wide image asset.
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
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
