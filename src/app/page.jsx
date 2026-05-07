import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import EditorialSections from "@/components/EditorialSections";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductGrid />
      </Suspense>
      <EditorialSections />
      <Footer />
    </main>
  );
}
