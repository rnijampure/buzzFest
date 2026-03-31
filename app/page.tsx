import Image from "next/image";
import Main from "./component/layout/main";
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center  bg-amber-300 font-sans dark:bg-black">
      <Header />
      <main className="flex  w-full h-[calc(100vh-100px)] flex-col items-center justify-between  bg-zinc-50  dark:bg-black sm:items-start">
        <Main />
      </main>
      <Footer />
    </div>
  );
}
