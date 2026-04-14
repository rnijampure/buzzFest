//buzz-fest\prisma\seed.ts
import "dotenv/config";
import { PrismaClient, Prisma } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });
async function main() {
  const bakersData = [
    {
      name: "Sandhya Mandi",
      slug: "sandhya-mandi",
      images: ["sandhya"],
      specialty: "Traditional Sourdough & Millet Breads",
      experience: "Baker since 2012",
      location: "Indiranagar, Bangalore",
      description:
        "Sandhya started baking to provide healthy, preservative-free bread for her family.",
      rating: 4.9,
    },
    {
      name: "Priya Sharma",
      slug: "priya-sharma",
      images: ["priya_dkdfnq"],
      specialty: "Custom Fondant Cakes & Cupcakes",
      experience: "Baker since 2018",
      location: "Koramangala, Bangalore",
      description:
        "A former software engineer turned cake artist known for floral designs.",
      rating: 4.8,
    },
    {
      name: "Meenakshi Iyer",
      slug: "meenakshi-iyer",
      images: ["meenakshi_uj6sz8"],
      specialty: "South Indian Tea-time Snacks",
      experience: "Baker since 2005",
      location: "Jayanagar, Bangalore",
      description:
        "Bringing back nostalgic flavors from her grandmother's kitchen.",
      rating: 5.0,
    },
    {
      name: "Ananya Das",
      slug: "ananya-das",
      images: ["payal_vwvgkb"],
      specialty: "Vegan & Gluten-Free Pastries",
      experience: "Baker since 2020",
      location: "Whitefield, Bangalore",
      description: "Focused on inclusive baking for all dietary needs.",
      rating: 4.7,
    },
  ];

  const productsData = [
    {
      slug: "classic-saffron-glaze",
      name: "Classic Saffron Glaze",
      creatorSlug: "meenakshi-iyer",
      type: "Yeast-Raised",
      price: 120,
      stock: 8,
      images: ["3_il08on"],
      tags: ["Best Seller", "Eggless"],
      description: "Kashmiri saffron and pistachios.",
      rating: 4.9,
    },
    {
      slug: "dark-chocolate-sea-salt",
      name: "Dark Chocolate & Sea Salt",
      creatorSlug: "priya-sharma",
      type: "Cake Doughnut",
      price: 145,
      stock: 3,
      images: ["DarkChocolateSeaSalt_knngkt"],
      tags: ["Limited", "Rich"],
      description: "70% cocoa Belgian chocolate.",
      rating: 4.8,
    },
  ];

  console.log("🌱 Seeding Bakers...");
  for (const b of bakersData) {
    await prisma.baker.upsert({
      where: { slug: b.slug }, // ✅ use slug (unique)
      update: {},
      create: b,
    });
  }

  console.log("🍩 Seeding Products...");
  for (const p of productsData) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        name: p.name,
        slug: p.slug,
        description: p.description,
        price: new Prisma.Decimal(p.price), // ✅ Decimal fix
        starRating: p.rating,
        images: p.images,
        stock: p.stock,
        category: [p.type, ...(p.tags || [])],
        isVeg: p.tags?.some((t) => ["Eggless", "Vegan"].includes(t)) || false,

        // ✅ Correct relation (slug-based)
        baker: {
          connect: { slug: p.creatorSlug },
        },
      },
    });
  }

  console.log("✅ Seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
