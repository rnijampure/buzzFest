import "dotenv/config";
import { PrismaClient, Prisma } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding Products with Variants...");

  // ================= BASE PRODUCTS =================
  const baseProducts = [
    {
      name: "Chocolate Truffle Cake",
      slug: "chocolate-truffle-cake",
      category: ["cake", "chocolate"],
      images: ["images_2_eevgrx"],
      creatorSlug: "priya-sharma",
      isVeg: true,
    },
    {
      name: "Blueberry Cheesecake",
      slug: "blueberry-cheesecake",
      category: ["cake", "cheesecake"],
      images: ["blueBerryCheeseCake_eskttu"],
      creatorSlug: "ananya-das",
      isVeg: true,
    },
    {
      name: "Minions Theme Cake",
      slug: "minions-theme-cake",
      category: ["cake", "kids"],
      images: ["blueBerryCheeseCake_eskttu"],
      creatorSlug: "meenakshi-iyer",
      isVeg: true,
    },
    {
      name: "Classic Chocolate Cupcake",
      slug: "classic-chocolate-cupcake",
      category: ["cupcake", "chocolate"],
      images: ["images_2_eevgrx"],
      creatorSlug: "sandhya-mandi",
      isVeg: true,
    },
    {
      name: "Rainbow Sparkles Cupcake",
      slug: "rainbow-sparkles-cupcake",
      category: ["cupcake", "fruit"],
      images: [
        "delicious-birthday-cake-with-candles_23-2151010608_ipfyry",
        "ai-generated-7833232_640_aucdjn",
      ],
      creatorSlug: "priya-sharma",
      isVeg: true,
    },
    {
      name: "Lemon Delight Cupcake",
      slug: "lemon-delight-cupcake",
      category: ["cupcake", "citrus"],
      images: ["fruit_cake_anfmus"],
      creatorSlug: "ananya-das",
      isVeg: true,
    },
    {
      name: "Classic Glazed Doughnut",
      slug: "classic-glazed-doughnut",
      category: ["doughnut", "sweet"],
      images: ["3_il08on"],
      creatorSlug: "meenakshi-iyer",
      isVeg: true,
    },
    {
      name: "Chocolate Doughnut",
      slug: "chocolate-doughnut",
      category: ["doughnut", "chocolate"],
      images: ["DarkChocolateSeaSalt_knngkt"],
      creatorSlug: "priya-sharma",
      isVeg: true,
    },
    {
      name: "Cream Filled Doughnut",
      slug: "cream-filled-doughnut",
      category: ["doughnut", "cream"],
      images: ["Rectangle_387_iisgcm"],
      creatorSlug: "sandhya-mandi",
      isVeg: true,
    },
    {
      name: "Artisan Sourdough Bread",
      slug: "artisan-sourdough-bread",
      category: ["bread", "artisan"],
      images: ["2_exefyi"],
      creatorSlug: "sandhya-mandi",
      isVeg: true,
    },
  ];

  // ================= VARIANT MAP =================
  const variantMap = {
    cake: [
      { name: "500g", price: 400 },
      { name: "1kg", price: 700 },
      { name: "2kg", price: 1200 },
    ],
    cupcake: [
      { name: "Box of 4", price: 150 },
      { name: "Box of 6", price: 220 },
      { name: "Box of 12", price: 400 },
    ],
    doughnut: [
      { name: "Pack of 3", price: 120 },
      { name: "Pack of 6", price: 200 },
      { name: "Pack of 12", price: 350 },
    ],
    bread: [
      { name: "Single Loaf", price: 180 },
      { name: "Pack of 2", price: 320 },
    ],
  };

  // ================= CREATE PRODUCTS =================
  for (const product of baseProducts) {
    const type = product.category.includes("cake")
      ? "cake"
      : product.category.includes("cupcake")
        ? "cupcake"
        : product.category.includes("doughnut")
          ? "doughnut"
          : "bread";
    const variants = variantMap[type as keyof typeof variantMap] || [];

    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        name: product.name,
        slug: product.slug,
        description: `Freshly baked ${product.name.toLowerCase()} made with premium ingredients.`,
        price: new Prisma.Decimal(variants[0]?.price || 100),
        images: product.images,
        category: product.category,
        stock: 50,

        // 🔥 SMART FIELDS
        starRating: Number((4 + Math.random()).toFixed(1)),
        isFeatured: Math.random() > 0.7,
        isVeg: product.isVeg,

        baker: {
          connect: { slug: product.creatorSlug },
        },

        variants: {
          create: variants.map((v) => ({
            name: v.name,
            price: new Prisma.Decimal(v.price),
            stock: Math.floor(Math.random() * 20) + 5,
          })),
        },
      },
    });
  }

  // ================= BULK EXPANSION =================
  console.log("⚡ Generating additional realistic items...");

  for (let i = 0; i < 40; i++) {
    const typeKeys = ["cake", "cupcake", "doughnut"];
    const type = typeKeys[i % 3] as keyof typeof variantMap;

    await prisma.product.create({
      data: {
        name: `Signature ${type} ${i + 1}`,
        slug: `signature-${type}-${i + 1}`,
        description: "Chef special handcrafted item",
        price: new Prisma.Decimal((100 + i * 10).toString()),
        images: ["../assets/images/cupcake/1.jpg"],
        category: [type, "signature"],
        stock: 30,

        starRating: Number((4 + Math.random()).toFixed(1)),
        isFeatured: i % 5 === 0,
        isVeg: true,

        baker: {
          connect: {
            slug: [
              "sandhya-mandi",
              "priya-sharma",
              "meenakshi-iyer",
              "ananya-das",
            ][i % 4],
          },
        },

        variants: {
          create: variantMap[type].map((v) => ({
            name: v.name,
            price: new Prisma.Decimal(v.price + i * 5),
            stock: 10 + (i % 10),
          })),
        },
      },
    });
  }

  console.log("✅ Products + Variants Seeded Successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
