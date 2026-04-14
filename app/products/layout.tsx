import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ProductsSidebar } from "../component/UI/productsFilter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <ProductsSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
