import { BakeryFeaturedCarousel } from "../UI/Carousel";
import SectionDivider from "../UI/SectionDivider";
import { BakerCard } from "../UI/card";

export const Bakers = [
  {
    name: "Sandhya Mandi",
    images: ["sandhya"],
    specialty: "Traditional Sourdough & Millet Breads",
    experience: "Baker since 2012",
    location: "Indiranagar, Bangalore",
    description:
      "Sandhya started baking to provide healthy, preservative-free bread for her family. Now, she specializes in ancient grain ferments.",
    rating: 4.9,
  },
  {
    name: "Priya Sharma",
    images: ["priya_dkdfnq"],
    specialty: "Custom Fondant Cakes & Cupcakes",
    experience: "Baker since 2018",
    location: "Koramangala, Bangalore",
    description:
      "A former software engineer who followed her passion for edible art. Priya is known for her intricate floral cake designs.",
    rating: 4.8,
  },
  {
    name: "Meenakshi Iyer",
    images: ["meenakshi_uj6sz8"],
    specialty: "Authentic South Indian Tea-time Snacks",
    experience: "Baker since 2005",
    location: "Jayanagar, Bangalore",
    description:
      "Bringing back the flavors of her grandmother's kitchen. Her 'Neyyappam' and savory biscuits are neighborhood favorites.",
    rating: 5.0,
  },
  {
    name: "Ananya Das",
    images: ["payal_vwvgkb"],
    specialty: "Vegan & Gluten-Free Pastries",
    experience: "Baker since 2020",
    location: "Whitefield, Bangalore",
    description:
      "Ananya focuses on inclusive baking, ensuring that everyone can enjoy a treat regardless of dietary restrictions.",
    rating: 4.7,
  },
];
export const SpecialtyDoughnuts = [
  {
    id: "d-1",
    name: "Classic Saffron Glaze",
    creator: "Meenakshi Iyer",
    type: "Yeast-Raised",
    specialty: "Signature",
    price: 120,
    currency: "INR",
    stock: 8,
    lastOrdered: "15 mins ago",
    description:
      "Infused with premium Kashmiri saffron and topped with crushed pistachios.",
    tags: ["Best Seller", "Eggless"],
    images: ["3_il08on"],
    rating: 4.9,
  },
  {
    id: "d-2",
    name: "Dark Chocolate & Sea Salt",
    creator: "Priya Sharma",
    type: "Cake Doughnut",
    specialty: "Indulgent",
    price: 145,
    currency: "INR",
    stock: 3,
    lastOrdered: "1 hour ago",
    description:
      "70% cocoa Belgian chocolate ganache with a hint of Himalayan pink salt.",
    tags: ["Limited Stock", "Rich"],
    images: ["DarkChocolateSeaSalt_knngkt"],
    rating: 4.8,
  },
  {
    id: "d-3",
    name: "Mango  Mousse",
    creator: "Ananya Das",
    type: "Filled/Bomboloni",
    specialty: "Seasonal",
    price: 160,
    currency: "INR",
    stock: 0, // This will trigger an "Out of Stock" UI
    lastOrdered: "2 hours ago",
    description:
      "Stuffed with fresh Alphonso mango cream and dusted with cardamom sugar.",
    tags: ["Seasonal", "Vegan"],
    images: ["mangomoose_cg190h"],
    rating: 4.7,
  },
  {
    id: "d-4",
    name: "Filter Coffee Glaze",
    creator: "Sandhya Mandi",
    type: "Old Fashioned",
    specialty: "Local Twist",
    price: 110,
    currency: "INR",
    stock: 15,
    lastOrdered: "5 mins ago",
    description:
      "A crunchy exterior with a glaze made from authentic South Indian filter coffee decoction.",
    tags: ["New Launch", "Caffeine Hit"],
    images: ["doughnot_koxmcl"],
    rating: 5.0,
  },
];
export const SpecialtyCupcakes = [
  {
    id: "cup-001",
    name: "Midnight Velvet",
    creator: "Anika Sharma",
    type: "Gourmet Cupcake",
    specialty: "Eggless Baking",
    price: 180,
    currency: "INR",
    stock: 12,
    lastOrdered: "2 hours ago",
    description:
      "A deep cocoa sponge topped with a silky cream cheese frosting and edible gold leaf.",
    tags: ["Best Seller", "Eggless", "Chocolate"],
    images: ["Vanilla-Cupcakes-with-Buttercream-Gluten-Free-Recipe-2_jjwpyd"],
    rating: 4.9,
  },
  {
    id: "cup-002",
    name: "Zesty Lemon Curd",
    creator: "Rohan Mehta",
    type: "Fruit Infused",
    specialty: "Citrus Pastries",
    price: 150,
    currency: "INR",
    stock: 0,
    lastOrdered: "5 mins ago",
    description:
      "Light vanilla bean sponge filled with tangy house-made lemon curd and topped with toasted meringue.",
    tags: ["Tangy", "Seasonal"],
    images: ["4_uddtef"],
    rating: 4.7,
  },
  {
    id: "cup-003",
    name: "Salted Caramel Crunch",
    creator: "Sarah Jenkins",
    type: "Classic",
    specialty: "Artisanal Toppings",
    price: 165,
    currency: "INR",
    stock: 8,
    lastOrdered: "1 day ago",
    description:
      "Buttery caramel sponge with a hidden salted caramel center and sea-salt flakes.",
    tags: ["Sweet & Salty", "Caramel"],
    images: ["5_tj9z1y"],
    rating: 4.8,
  },
  {
    id: "cup-004",
    name: "Pistachio Rose",
    creator: "Anika Sharma",
    type: "Fusion",
    specialty: "Eggless Baking",
    price: 195,
    currency: "INR",
    stock: 5,
    lastOrdered: "30 mins ago",
    description:
      "Fragrant rose-water sponge topped with crushed Iranian pistachios and dried rose petals.",
    tags: ["Premium", "Floral", "Eggless"],
    images: ["1a_ovxgef"],
    rating: 5.0,
  },
];
const LandingPage = () => {
  return (
    <div className=" flex flex-1 w-full flex-col">
      <BakeryFeaturedCarousel />
      <SectionDivider title="Our Star Parteners" />
      <section
        className="w-full gap-x-4 my-3
     grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 items-start "
      >
        {Bakers &&
          Bakers.map((baker: any) => {
            return <BakerCard key={baker.name} {...baker} />;
          })}
      </section>
      <SectionDivider title="In Demand" />
      <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 items-start">
        {SpecialtyDoughnuts &&
          SpecialtyDoughnuts.map((baker: any) => {
            return <BakerCard key={baker.id} {...baker} />;
          })}
      </section>
      <SectionDivider title="Guilt Free Indulgence" />
      <section className=" flex  gap-4 w-full flex-row items-center gap-x-4 my-3 align-top">
        {SpecialtyCupcakes &&
          SpecialtyCupcakes.map((baker: any) => {
            return <BakerCard key={baker.id} {...baker} />;
          })}
      </section>
    </div>
  );
};

export default LandingPage;
