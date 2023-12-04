import Hero from "@/components/hero";
import LastPart from "@/components/lastpart";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8 lg:mx-auto lg:mt-[50px] lg:w-2/3">
      <Navbar />
      <Hero />
      <LastPart />
    </main>
  );
}
