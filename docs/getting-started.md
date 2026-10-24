# Getting started

How to run BuzzFest locally, what it needs, and which commands you will use.

[← Overview](index.md) · [Architecture →](architecture.md)

---

## On this page

1. [Prerequisites](#prerequisites)
2. [Environment variables](#environment-variables)
3. [First-time setup](#first-time-setup)
4. [Scripts](#scripts)
5. [Testing](#testing)
6. [Deployment and release](#deployment-and-release)
7. [Troubleshooting](#troubleshooting)
8. [Monitoring and logging](#monitoring-and-logging)

---

## Prerequisites

- Node.js 20.9 or later (Next.js 16 requirement) `[CONFIRM]`
- npm (a `package-lock.json` is present)
- A Neon PostgreSQL database
- A Cloudinary account

## Environment variables

| Variable | Purpose | Used by |
|---|---|---|
| `DATABASE_URL` | Runtime database connection (Neon pooled connection string) | `lib/prisma.ts`, seed scripts |
| `DIRECT_URL` | Direct (non-pooled) connection for the Prisma CLI | `prisma.config.ts` |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary account name required by `next-cloudinary` `CldImage` | `CldImage` `[CONFIRM]` exact name in Vercel settings |

Store them in `.env` (never commit it) and in the Vercel project settings.

## First-time setup

```bash
git clone https://github.com/rnijampure/buzzFest.git
cd buzzFest
npm install            # runs "prisma generate" automatically

# create .env with the variables above

npx prisma migrate deploy   # apply migrations to an empty database
npx prisma db seed          # runs: npx tsx prisma/seed.ts
npm run dev                 # http://localhost:3000
```

> **Warning:** `prisma/seed.ts` and `prisma/seedProducts.ts` do not delete existing rows. `[CONFIRM]` idempotency before running them against a populated database.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build`, `npm start` | Production build and server |
| `npm run lint` | ESLint |
| `npm run storybook`, `npm run build-storybook` | Component workbench |
| `npm run test:cards` | Card component tests |
| `npx vitest run --project=unit` | Unit tests |
| `npm run test-storybook` | Story tests in headless Chromium |

## Testing

| Tool | Scope | Command |
|---|---|---|
| Vitest unit | `lib/**/*.test.ts` (star rating, badge colours) | `npx vitest run --project=unit` |
| Vitest cards | `app/component/UI/card/**/*.test.tsx` (happy-dom) | `npm run test:cards` |
| Vitest storybook | Runs every story in Chromium through Playwright | `npm run test-storybook` |
| Storybook | Stories for ProductCard, BakerCard, CardImage, StarRating, BaseCardSkeleton, SectionDivider, BakersList | `npm run storybook` (port 6006) |

There are no tests for pages, filters, the cart store or the server action, and no end-to-end tests (KL-24).

## Deployment and release

| Component | Service | Plan |
|---|---|---|
| Application | Vercel, project connected to the GitHub repository | Free |
| Database | Neon PostgreSQL | Free |
| Images | Cloudinary | Free |

**Release procedure (manual)**

1. Merge to `main`. Vercel builds on push; preview builds are created per branch `[CONFIRM]`.
2. If the schema changed, run `npx prisma migrate deploy` against the production database before promoting.
3. Open the deployment and check Home, Products (filtered), a product page and Cart.
4. Roll back by re-promoting the previous Vercel deployment. Database changes are rolled back from Neon's history/branching feature; `[CONFIRM]` retention on the free tier.

## Troubleshooting

| Symptom | Likely cause | Action |
|---|---|---|
| First page load after idle is slow or fails | Neon cold start | Retry; the pool timeout is 15 s |
| "Too many connections" | Pool exceeded Neon limit | Keep pool at 2; use the pooled `DATABASE_URL` |
| A filter returns nothing | Tag case or hyphen mismatch (KL-07) | Compare the URL value with the stored tag |
| Catalogue edit not visible | 60-second data cache | Wait up to 60 s |
| Product page URL fails | Stray whitespace in slug (KL-19) | Fix the row in the database |
| Prisma CLI cannot connect | `DIRECT_URL` missing or wrong | Check `.env` |
| Images missing | Public ID not found in Cloudinary, or cloud name not set | Check the ID and the variable |

## Monitoring and logging

No monitoring, error tracking or analytics is configured. Debug `console.log` calls remain in `products/page.tsx` (3), `bakers/page.tsx`, `products/[slug]/page.tsx` and `ProductClient.tsx`, and log request parameters and fetched data to the server console (KL-23). `[CONFIRM]` whether Vercel Analytics is enabled in the project settings.

---

[← Overview](index.md) · [Architecture →](architecture.md)
