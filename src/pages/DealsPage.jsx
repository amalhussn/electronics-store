import Header from "../components/Header";
import Footer from "../components/Footer";
import products from "../data/products";
import ProductResults from "../components/ProductResults";

export default function DealsPage() {
  const dealProducts = products.filter((product) => product.isOnSale);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fc]">
      <Header />
      <main className="flex flex-col flex-1 px-6 py-10 max-w-6xl mx-auto">
        <h1 className="text-[#0d121c] text-3xl font-bold mb-2">Exclusive Deals</h1>
        <p className="text-[#dc2626] text-base font-semibold mb-6">
          For a limited time only — grab these offers while they last! <br />
          <span className="text-[#0d121c] font-normal">Sale ends July 17, 2025.</span>
        </p>

        {dealProducts.length > 0 ? (
          <ProductResults
            products={dealProducts}
            favorites={[]}
            onToggleFavorite={() => {}}
          />
        ) : (
          <p className="text-[#49689c] text-base">
            No deals available at the moment. Check back soon!
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}
