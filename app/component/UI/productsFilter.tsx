"use client";

import { ChevronDown } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { PriceSlider } from "./slider";
import BadgeComponent from "./Badge";
import StarIcon from "./star";
import {
  NavListItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "./NavigationHelpers";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";

const categoriesList = [
  "bread",
  "artisan",
  "sweet",
  "cake",
  "cheesecake",
  "kids",
  "doughnut",
  "cream cupcake",
  "cupcake",
  "citrus",
  "fruit",
  "chocolate",
  "signature",
  "best-seller",
  "limited",
  "seasonal",
  "eggless",
  "vegan",
  "sugar-free",
  "diabitic-care",
  "custom",
  "birthday",
  "Snacks",
];

const menuList = [
  "Cupcake",
  "Doughnut",
  "Cake",
  "Featured",
  "Vegan",
  "Exclude Out Of Stock",
];
const bakerList = [
  "Sandhya Mandi",
  "Priya Sharma",
  "Meenakshi Iyer",
  "Ananya Das",
];

export function ProductsSidebar() {
  return (
    <Sidebar className=" bg-[#75372A] border-none ring-0 outline-none  border-b-2 border-b-[#75372A] ">
      <SidebarHeader className="flex items-start px-4  p-1   border-0 outline-0 bg-[#75372A]">
        <span className="font-bold text-xl">
          <CloudinaryImage
            src="logo.new_ndfwmw"
            width="85"
            height="85"
            className="rounded-3xl object-cover  "
            alt="Image with blur placeholder"
          />
        </span>
      </SidebarHeader>

      <SidebarContent className="border-2">
        {/* Products Group */}
        <SidebarGroup>
          <SidebarMenu>
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip="Products">
                    <span>Products</span>
                    <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem href="/products" title="All Products" />
                    {menuList.map((item) => (
                      <NavListItem key={item} item={item} type={"category"} />
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>

        <hr className="mx-4 opacity-50" />

        {/* Bakers Group */}
        <SidebarGroup>
          <SidebarMenu>
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip="Bakers">
                    <span>Bakers</span>
                    <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem href="/products" title="All Bakers" />
                    {bakerList.map((baker) => (
                      <NavListItem
                        key={baker}
                        item={baker}
                        type={"creatorSlug"}
                      />
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>

        {/* Filters Group */}
        <SidebarGroup>
          <SidebarMenu>
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip="Filters">
                    <span>Other Filters</span>
                    <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem href="#" title="Price" />
                    <li className="px-4 py-2">
                      <PriceSlider />
                    </li>
                    <SidebarMenuSubItem href="#" title="Categories" />
                    <div className="px-2">
                      <BadgeComponent items={categoriesList} />
                    </div>
                    <SidebarMenuSubItem href="#" title="Star Rating" />
                    <div className="flex flex-col gap-1 px-4 py-2">
                      <StarIcon
                        className="cursor-pointer hover:opacity-80"
                        rating={5}
                      />
                      <StarIcon
                        className="cursor-pointer hover:opacity-80"
                        rating={4}
                      />
                      <StarIcon
                        className="cursor-pointer hover:opacity-80"
                        rating={3}
                      />
                    </div>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
