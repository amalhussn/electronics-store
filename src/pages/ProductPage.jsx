import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductFilter from "../components/ProductFilter";
import ProductResults from "../components/ProductResults";
import products from "../data/products";

export default function ProductPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const location = useLocation();

  // Load favorites from localStorage (optional)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  // Save favorites to localStorage (optional)
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search")?.toLowerCase() || "";

  const handleFilterChange = (categories, brands) => {
    setSelectedCategories(categories);
    setSelectedBrands(brands);
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const searchMatch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery) ||
      product.brand.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery);
    return categoryMatch && brandMatch && searchMatch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 gap-1 px-6 py-5">
        <ProductFilter onFilterChange={handleFilterChange} />
        <ProductResults
          products={filteredProducts}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </main>
      <Footer />
    </div>
  );
}
