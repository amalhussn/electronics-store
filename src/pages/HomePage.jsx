import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Promotions from "../components/Promotions";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-[#f8f9fc] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
        <Promotions />
      </main>
      <Footer />
    </div>
  );
}
