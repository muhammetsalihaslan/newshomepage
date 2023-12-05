import Hero from "@/components/hero";
import LastPart from "@/components/lastpart";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="w-11/12 mx-auto mt-[50px] xl:w-2/3">
      <Navbar />
      <Hero />
      <LastPart />
    </main>
  );
}
