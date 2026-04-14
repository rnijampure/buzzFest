"use client";
import { FieldGroup, Field } from "@/components/ui/field";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useUpdateFilters1 } from "@/hooks/useUpdateFilters";

interface NavListItemProps {
  item: string;
  type: string;
}
function SidebarMenuSub({ children }: { children: React.ReactNode }) {
  return (
    <ul className="ml-4 mt-1 flex flex-col gap-1 border-l pl-2 pb-4">
      {children}
    </ul>
  );
}

function SidebarMenuSubItem({ href, title }: { href: string; title: string }) {
  return (
    <li>
      <SidebarMenuButton
        asChild
        size="sm"
        className="text-muted-foreground hover:text-foreground"
      >
        <Link href={href}>{title}</Link>
      </SidebarMenuButton>
    </li>
  );
}

const NavListItem = ({ item, type }: NavListItemProps) => {
  const { updateFilters, searchParams } = useUpdateFilters1();

  // 1. Generate the slug consistently
  const slug = item
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s+]+/g, "-");

  // 2. DERIVE state directly from the URL
  // We don't use useState or useEffect. Next.js re-renders this
  // automatically when searchParams changes.
  const currentValues = searchParams.get(type)?.split(",") || [];
  const isChecked = currentValues.includes(slug);

  const handleOnCheckedChange = (checked: boolean) => {
    // We pass the new boolean state to our filter handler
    updateFilters(type, slug, checked);
  };

  return (
    <li className="px-2">
      <FieldGroup className="max-w-sm my-2">
        <Field orientation="horizontal" className="gap-2">
          <Checkbox
            // Unique ID based on the slug to link Label and Checkbox
            id={`${slug}-checkbox`}
            // Controlled by the URL
            checked={isChecked}
            onCheckedChange={handleOnCheckedChange}
          />
          <Label
            htmlFor={`${slug}-checkbox`}
            className="cursor-pointer select-none"
          >
            {item}
          </Label>
        </Field>
      </FieldGroup>
    </li>
  );
};

export { SidebarMenuSub, SidebarMenuSubItem, NavListItem };
