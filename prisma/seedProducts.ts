import "dotenv/config";

import { PrismaClient, Prisma } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

/* async function main() {
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
  */

const products = [
  {
    name: "Classic Saffron Glaze",
    slug: "classic-saffron-glaze",
    description:
      "Infused with premium Kashmiri saffron and topped with crushed pistachios.",
    price: "120.00",
    category: ["best seller", "eggless", "yeast-raised"],
    starRating: 4.9,
    images: ["../assets/images/cupcake/3_il08on.jpg"],
    createdAt: new Date("2026-04-08 06:14:58.659"),
    updatedAt: new Date("2026-04-08 06:14:58.659"),
    creatorSlug: "meenakshi-iyer",
    isFeatured: true,
    isVeg: true,
    stock: 8,
  },
  {
    name: "Dark Chocolate & Sea Salt",
    slug: "dark-chocolate-sea-salt",
    description:
      "70% cocoa Belgian chocolate ganache with a hint of Himalayan pink salt.",
    price: "145.00",
    category: ["limited stock", "rich", "cake doughnut"],
    starRating: 4.8,
    images: ["../assets/images/cupcake/darkchocolateseasalt.jpg"],
    createdAt: new Date("2026-04-08 06:14:58.659"),
    updatedAt: new Date("2026-04-08 06:14:58.659"),
    creatorSlug: "priya-sharma",
    isFeatured: false,
    isVeg: false,
    stock: 3,
  },
  {
    name: "Mango Mousse",
    slug: "mango-mousse",
    description:
      "Stuffed with fresh Alphonso mango cream and dusted with cardamom sugar.",
    price: "160.00",
    category: ["seasonal", "vegan", "filled"],
    starRating: 4.7,
    images: ["../assets/images/cupcake/mangomoose.jpg"],
    createdAt: new Date("2026-04-08 06:14:58.659"),
    updatedAt: new Date("2026-04-08 06:14:58.659"),
    creatorSlug: "ananya-das",
    isFeatured: false,
    isVeg: true,
    stock: 0,
  },
  {
    name: "Filter Coffee Glaze",
    slug: "filter-coffee-glaze",
    description:
      "A crunchy exterior with a glaze made from authentic South Indian filter coffee decoction.",
    price: "110.00",
    category: ["new launch", "coffee", "old fashioned"],
    starRating: 5.0,
    images: ["../assets/images/cupcake/doughnot.jpg"],
    createdAt: new Date("2026-04-08 06:14:58.659"),
    updatedAt: new Date("2026-04-08 06:14:58.659"),
    creatorSlug: "sandhya-mandi",
    isFeatured: true,
    isVeg: false,
    stock: 15,
  },
  {
    name: "Midnight Velvet",
    slug: "midnight-velvet",
    description:
      "A deep cocoa sponge topped with a silky cream cheese frosting and edible gold leaf.",
    price: "180.00",
    category: ["best seller", "eggless", "chocolate", "cupcake"],
    starRating: 4.9,
    images: ["../assets/images/cupcake/vanilla-cupcakes.jpg"],
    createdAt: new Date("2026-04-08 06:14:58.659"),
    updatedAt: new Date("2026-04-08 06:14:58.659"),
    creatorSlug: "meenakshi-iyer",
    isFeatured: true,
    isVeg: true,
    stock: 12,
  },
  {
    name: "Zesty Lemon Tart",
    slug: "zesty-lemon-tart",
    description:
      "Light vanilla bean sponge filled with tangy house-made lemon curd and topped with toasted meringue.",
    price: "150.00",
    category: ["tangy", "seasonal", "citrus"],
    starRating: 4.7,
    images: ["../assets/images/cupcake/4.jpg"],
    createdAt: new Date("2026-04-08 06:14:58.659"),
    updatedAt: new Date("2026-04-08 06:14:58.659"),
    creatorSlug: "sandhya-mandi",
    isFeatured: false,
    isVeg: false,
    stock: 0,
  },
  {
    name: "Salted Caramel Crunch",
    slug: "salted-caramel-crunch",
    description:
      "Buttery caramel sponge with a hidden salted caramel center and sea-salt flakes.",
    price: "165.00",
    category: ["caramel", "sweet", "classic"],
    starRating: 4.8,
    images: ["../assets/images/cupcake/5.jpg"],
    createdAt: new Date("2026-04-08 06:14:58.659"),
    updatedAt: new Date("2026-04-08 06:14:58.659"),
    creatorSlug: "ananya-das",
    isFeatured: false,
    isVeg: false,
    stock: 8,
  },
  {
    name: "Pistachio Rose",
    slug: "pistachio-rose",
    description:
      "Fragrant rose-water sponge topped with crushed Iranian pistachios and dried rose petals.",
    price: "195.00",
    category: ["premium", "floral", "eggless", "fusion"],
    starRating: 5.0,
    images: ["../assets/images/cupcake/1.jpg"],
    createdAt: new Date("2026-04-08 06:14:58.659"),
    updatedAt: new Date("2026-04-08 06:14:58.659"),
    creatorSlug: "priya-sharma",
    isFeatured: true,
    isVeg: true,
    stock: 5,
  },
];

async function main() {
  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},

      create: {
        ...product,
        price: new Prisma.Decimal(product.price),
      },
    });
  }

  console.log("✅ Products seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
