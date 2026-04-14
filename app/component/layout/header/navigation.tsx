"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavMenu() {
  return (
    <NavigationMenu className="m-auto">
      <NavigationMenuList className="list-none">
        <NavigationMenuItem className="text-white">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="text-white">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/bakers">Our Bakers</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-white">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/about_us">About Us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-white">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/about_us" className="list-none">
              Join Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white list-none">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/products" title="All Products">
                Hand-rolled by her. Scaled by us.
              </ListItem>
              <ListItem href="/products?category=cupcake" title="Cupcakes">
                Handmade with Love! Choose from "sugarfree", "vagan", "boutique"
                varities
              </ListItem>
              <ListItem href="/products?category=doughnut" title="Doughnuts">
                Glazed with Grit! Powdred with love, Choose from "sugarfree",
                "vagan", "allergy-free".
              </ListItem>
              <ListItem href="/products?category=cake" title="Cakes">
                Enterprise-grade taste. Home-grown heart! We make custom made
                cakes to suit your every need.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
