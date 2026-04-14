//buzz-fest\app\page.tsx
import LandingPage from "./component/layout/LandingPage";

export default function Home() {
  return (
    // Change flex-row to flex-col to stack Header -> Main -> Footer
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black overflow-x-hidden">
      {/* Removed h-[calc(100vh-100px)]. 
         On a home page, you want the content to grow. 
         Fixed heights can cut off your carousel or footer on smaller screens.
      */}
      <main className="flex-1 w-full flex flex-col items-center">
        <LandingPage />
      </main>
    </div>
  );
}
