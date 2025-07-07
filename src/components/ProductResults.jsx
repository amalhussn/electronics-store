import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductResults({ products, favorites, onToggleFavorite }) {
  const { addToCart } = useCart();
  const [addedProductId, setAddedProductId] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1500);
  };

  return (
    <section className="flex flex-col flex-1">
      <div className="flex justify-between gap-3 p-4">
        <p className="text-[#0d121c] text-[32px] font-bold leading-tight min-w-72">
          Browse Products ({products.length})
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-3 pb-3 relative">
            {/* Sale Badge */}
            {product.isOnSale && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow">
                Sale
              </div>
            )}

            {/* Image */}
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url("${encodeURI(product.image)}")` }}
            ></div>

            {/* Product Info */}
            <div>
              <p className="text-[#0d121c] text-base font-medium">{product.name}</p>
              <p className="text-[#49689c] text-sm">{product.brand}</p>
              <p className="text-[#49689c] text-sm">{product.category}</p>

              {/* Price Display */}
              <div className="mt-2">
                {product.isOnSale ? (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-[#d63031] font-semibold">
                      ${product.salePrice.toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <span className="text-[#0d121c] font-medium text-sm">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className={`mt-2 text-white text-xs px-3 py-1 rounded transition-all duration-300 ${
                  addedProductId === product.id ? "bg-green-600 scale-105" : "bg-[#0a4dc1]"
                }`}
              >
                {addedProductId === product.id ? "Added!" : "Add to Cart"}
              </button>
            </div>

            {/* Favorite Button */}
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
              onClick={() => onToggleFavorite(product.id)}
              aria-label="Toggle Favorite"
            >
              {favorites.includes(product.id) ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-red-500">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5c0-3.03 2.47-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.53 3 22 5.47 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.47 4.47 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.53 3 22 5.47 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
