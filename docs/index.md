# BuzzFest Developer Documentation

> Architecture, design, interfaces, setup and operations, **as built**.
> Product: BuzzFest (concept name: **Apna Bakery**), a marketplace for home bakers in Bangalore.

| | |
|---|---|
| **Live site** | <https://buzz-fest.vercel.app/> |
| **Repository** | <https://github.com/rnijampure/buzzFest> (branch `main`) |
| **Product journey** | <https://rnijampure.github.io/portfolio/product_journey/intro.html> |
| **Portfolio** | <https://rnijampure.github.io/portfolio/> |
| **Status** | Beta proof of concept (free-tier). Documentation v1.0 draft |
| **Author** | Rohini Nijampure: concept, research, UX, UI, build and documentation |

---

## On this page

1. [What is BuzzFest?](#what-is-buzzfest)
2. [Project status](#project-status)
3. [Scope](#scope)
4. [Constraints and assumptions](#constraints-and-assumptions)
5. [Technology stack](#technology-stack)
6. [How these docs are organised](#how-these-docs-are-organised)
7. [Conventions](#conventions)
8. [The story behind the product](#the-story-behind-the-product)

---

!!! note "How these docs were written"
    These docs describe BuzzFest **as built**. They were written from the repository source, the Prisma migrations, the Neon table exports and the live site (verified 18 Oct 2026). Items marked `[CONFIRM]` could not be verified from that material and need the owner to check.

## What is BuzzFest?

Customers browse products from four independent home bakers, filter and search the catalogue, view product detail and build a cart. A server action can write an order and baker tasks to the database.

These docs describe how BuzzFest is built and how to run, test, deploy and extend it. They are the reference a developer uses to understand the system. What each page should do, and the on-screen copy, is described in the page-by-page guide; these docs link that behaviour to code.

## Project status

BuzzFest is a free-tier beta proof of concept. **The customer journey ends at the cart.** It is documented as it exists. Future work is collected in the known limitations and future scope page (next batch) and is not planned for build.

## Scope

| In scope | Out of scope |
|---|---|
| Customer storefront (Next.js `app/`) | Operations / baker dashboard (not started) |
| Database model | Payment gateway |
| Order-creation server action | Authentication |
| Shared components and hooks | Notifications |
| Tests and deployment | |

## Constraints and assumptions

| # | Constraint / assumption |
|---|---|
| C1 | Free tiers only: Vercel free plan, Neon free tier, Cloudinary free plan |
| C2 | Neon free tier limits connections; the app uses a pool of 2 and tolerates cold starts |
| C3 | No user accounts: orders are placed with a placeholder customer |
| C4 | Catalogue is small (4 bakers, 28 products), so all filtering is done in database queries without pagination |
| C5 | All prices are in Indian rupees, whole numbers |

## Technology stack

From `package.json`.

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | ^16.2.4 |
| UI library | React | 19.2.4 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS, `tw-animate-css` | ^4 |
| Component kit | shadcn/ui (style `radix-nova`) on Radix UI | radix-ui ^1.4.3 |
| Icons | lucide-react | ^1.7.0 |
| Carousel | embla-carousel-react, embla-carousel-autoplay | ^8.6.0 |
| Client state | Zustand with `persist` middleware | ^5.0.12 |
| ORM | Prisma Client with `@prisma/adapter-pg` and `pg` | ^7.8.0 |
| Database | PostgreSQL on Neon | n/a |
| Images | Cloudinary via `next-cloudinary` (`CldImage`) | ^6.17.5 |
| Unit and component tests | Vitest, happy-dom | ^4.1.5 |
| Component workbench | Storybook (`@storybook/nextjs-vite`), a11y addon, Chromatic addon | ^10.3.6 |
| Browser tests | Playwright (through Vitest) | ^1.59.1 |
| Linting | ESLint 9 with `eslint-config-next` | 16.2.1 |
| Hosting | Vercel (free plan) | n/a |

## How these docs are organised

| Page | What you will find |
|---|---|
| **Overview** (this page) | Purpose, scope, stack, conventions |
| [Getting started](getting-started.md) | Prerequisites, environment variables, setup, scripts |
| [Architecture](architecture.md) | Tiers, repository layout, rendering and caching, database connection |
| Data design _(next batch)_ | Tables, relationships, design decisions, schema drift, seed data |
| Pages _(next batch)_ | One section per page: URL, screen, link map, build flow, JSON |
| Filters and cart _(next batch)_ | URL contract, search, cart store, pricing rules |
| Order creation _(next batch)_ | The `createOrder` server action and its defects |
| Components _(next batch)_ | Component library, design tokens, testing |
| Known limitations _(next batch)_ | The KL register and future scope |

## Conventions

| Label | Meaning |
|---|---|
| `[VERIFIED]` | Confirmed in source code and, where possible, on the live site |
| `[CONFIRM]` | Could not be verified from the material available; needs the owner to check |
| `KL-nn` | Entry in the Known Limitations register |
| `[AS BUILT]` | Matches the live site |
| `[GAP]` | The live site shows a defect or incomplete behaviour |
| `[NOT BUILT]` | Intended but absent |

Paths are relative to the repository root. `@/` is the alias for the root folder.

## The story behind the product

BuzzFest started as a concept called Apna Bakery and ended, so far, as a working beta: a long way to go, and a long way already come. The design story (idea, user research, refining, iterative design and the final product) is told in the **[product journey](https://rnijampure.github.io/portfolio/product_journey/intro.html)**. More of Rohini's work is on her **[portfolio](https://rnijampure.github.io/portfolio/)**.

Apna Bakery / BuzzFest is a conceptual product built for showcase; there is no real store behind it.
