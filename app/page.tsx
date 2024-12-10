import { About } from "@/components/sections/About";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TwoColumn } from "@/components/sections/TwoColumn";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TwoColumn />
      <About />
      <Footer />
    </main>
  );
}
