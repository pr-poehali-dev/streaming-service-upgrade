import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Catalog from "@/components/Catalog";
import GraniteCatalog from "@/components/GraniteCatalog";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Catalog />
      <GraniteCatalog />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;