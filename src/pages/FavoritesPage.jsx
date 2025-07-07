import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductResults from "../components/ProductResults";
import products from "../data/products";

export default function FavoritesPage() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col px-6 py-5">
        <h1 className="text-[#0d121c] text-2xl font-bold pb-4">My Favorites</h1>
        {favoriteProducts.length > 0 ? (
          <ProductResults products={favoriteProducts} favorites={favorites} onToggleFavorite={() => {}} />
        ) : (
          <p className="text-[#49689c] text-base">You have no favorites yet.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
