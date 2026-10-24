# Architecture

How BuzzFest is structured: tiers, code layout, server and client boundaries, caching and the database connection.

[← Getting started](getting-started.md) · [Overview](index.md)

---

## On this page

1. [Logical architecture](#logical-architecture)
2. [Repository layout](#repository-layout)
3. [Page-to-code map](#page-to-code-map)
4. [Server and client boundaries](#server-and-client-boundaries)
5. [Rendering and caching](#rendering-and-caching)
6. [Database connection](#database-connection)

---

## Logical architecture

```
Browser
  React UI (client components)
  Filter hooks (URL query string)      ── router.push(?query) ──┐
  Zustand cart store (localStorage:                              │
      buzz-fest-cart-storage)          ── cart payload ─────┐    │
                                                            ▼    ▼
Vercel (free plan), Next.js 16 App Router
  Server Components (pages, list sections)
        │ read
        ▼
  Data cache: unstable_cache, 60 s, tags: products, bakers
        │ miss / expired
        ▼
  Prisma Client 7 + pg adapter (pool max 2) ──SQL──► Neon PostgreSQL (free tier)
        ▲
  Server Action: createOrder (transaction)

Images: Cloudinary (public IDs stored in the database)
```

| Tier | Responsibility | Implementation |
|---|---|---|
| Presentation | Render pages and interactive widgets | Server Components for data pages; Client Components for filters, cart, carousel, image zoom |
| Application | Business rules and queries | Query modules `getAllProducts.ts`, `GetAllBakers.ts`; Server Action `checkout.ts` |
| Data access | Database connection and queries | `lib/prisma.ts` (Prisma Client with a `pg` pool) |
| Persistence | Relational data | Neon PostgreSQL |
| Static assets | Images | Cloudinary (public IDs stored in the database) |

There are **no REST or GraphQL API routes**. Reads happen inside Server Components. The only write is the `createOrder` Server Action.

## Repository layout

```
/
├── app/                    Next.js App Router (routes and page-level components)
│   ├── layout.tsx          Root layout: Header, children, CartSummary, CartSheet, Footer
│   ├── page.tsx            Home
│   ├── about_us/           About Us
│   ├── bakers/             Our Bakers (force-dynamic)
│   ├── cart/               Cart (client component)
│   ├── products/           Listing, query module, [slug]/ detail
│   ├── actions/checkout.ts Server Action: createOrder
│   ├── feature/Bakers/     Cached baker query
│   ├── component/layout/   Header, footer, landing sections, cart sheet and icon
│   ├── component/UI/       Cards, carousel, badges, filters, slider, star, buttons
│   └── globals.css         Design tokens and Tailwind theme
├── components/ui/          shadcn/ui primitives (button, card, sheet, sidebar, ...)
├── hooks/                  useUpdateFilters, useDebounce, useCart, use-mobile
├── lib/                    prisma.ts, types, utils, star-rating, badge-filter-colors
├── store/store.tsx         Zustand cart store
├── types/product.ts        Product type and display helpers
├── prisma/                 schema.prisma, migrations/, seed.ts, seedProducts.ts
├── public/                 Static images, logo
├── .storybook/             Storybook configuration
├── next.config.ts          serverExternalPackages: @prisma/client, pg
├── prisma.config.ts        Prisma datasource: DIRECT_URL, falling back to DATABASE_URL
└── vitest.config.ts        Test projects: unit, cards, storybook
```

## Page-to-code map

| Route | Entry file | Data source | Rendering |
|---|---|---|---|
| `/` | `app/page.tsx` → `LandingPage.tsx` | `BakersList` (`GetAllBakers({})`, first 4); `DoughnutsList` (category doughnut); `CupcakesList` (category cakes, custom); carousel uses constants | Server, Suspense per section |
| `/products` | `app/products/page.tsx` | `GetAllProducts(filters)` | Server per request (reads `searchParams`) |
| `/products/[slug]` | `app/products/[slug]/page.tsx` → `ProductClient.tsx` | `prisma.product.findUnique` with baker | Server fetch, client form |
| `/bakers` | `app/bakers/page.tsx` | `BakersList` | `force-dynamic` |
| `/about_us` | `app/about_us/page.tsx` | None (static copy) | Server |
| `/cart` | `app/cart/page.tsx` | Zustand store | Client |

**Layout and chrome** (`app/layout.tsx`): sticky header with navigation and cart badge, floating cart quick-view tab, cart side sheet, footer placeholder. Font: Montserrat via `next/font/google`.

## Server and client boundaries

| Concern | Runs on | Files |
|---|---|---|
| Catalogue and baker queries | Server | `products/getAllProducts.ts`, `feature/Bakers/GetAllBakers.ts` |
| Filter state | Client, reflected in the URL | `hooks/useUpdateFilters.ts`, `productsFilter.tsx`, `NavigationHelpers.tsx`, `Badge.tsx`, `slider.tsx`, `components/ui/search.tsx` |
| Cart | Client, saved in `localStorage` | `store/store.tsx`, `cart/page.tsx`, `cartSideSheet.tsx`, `shoppingCart.tsx` |
| Hero carousel | Client, desktop only, after mount | `BakeryFeaturedCarousel.tsx` |
| Order creation | Server Action | `actions/checkout.ts` |

## Rendering and caching

| Area | Mechanism | Detail |
|---|---|---|
| Product list | `unstable_cache` | Key `["products-list", JSON(filters)]`, `revalidate: 60`, tag `products`. Each filter combination caches separately |
| Baker list | `unstable_cache` | Key `["bakers", "bakers-{minRating}-{location}"]`, `revalidate: 60`, tag `bakers` |
| `/bakers` route | `export const dynamic = "force-dynamic"` | Rendered on every request |
| Product detail | None | Direct Prisma call on each request |
| Home | Streaming | Each section inside `<Suspense>` with a skeleton fallback |
| Mobile hero | Single eager, high-priority image | Fast Largest Contentful Paint; the interactive carousel mounts on desktop only |
| Images | Cloudinary `f_auto`, `q_auto` | Format and quality chosen automatically |

No code calls `revalidateTag`, so catalogue changes appear after at most 60 seconds.

`[CONFIRM]` whether `unstable_cache` is still the recommended API in Next.js 16. The repository's `AGENTS.md` warns that this Next.js version differs from older releases (KL-29).

## Database connection

Defined in `lib/prisma.ts`.

- Uses `PrismaClient` with the `PrismaPg` adapter and a `pg.Pool` limited to **2 connections** with a 15-second connection timeout, to stay inside the Neon free tier.
- The client is cached on `globalThis` outside production to avoid duplicate clients during hot reload.
- Logging: queries, warnings and errors in development; errors only otherwise.
- `prisma.config.ts` uses `DIRECT_URL` (direct connection) for Prisma CLI commands, falling back to `DATABASE_URL`.

---

[← Getting started](getting-started.md) · [Overview](index.md)
