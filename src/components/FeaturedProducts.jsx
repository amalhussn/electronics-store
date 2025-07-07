import { Link } from "react-router-dom";
import products from "../data/products";

export default function FeaturedProducts() {
  const featuredProducts = [
    products[1], // ASUS laptop
    products[11], // Apple airpods
    products[9],  // iPhone 16 Plus
    products[12], // Asus Zenbook
  ];

  const newArrivals = [
    products[10], // MacBook Air
    products[7],  // Doogee Phone
    products[44], // Polaroid Camera
    products[42], // Nikon Camera
  ];

  const getProductLink = (product) => 
    `/products?search=${encodeURIComponent(product.name)}`;

  const renderPrice = (product) => {
    if (product.isOnSale) {
      return (
        <p className="text-sm">
          <span className="text-[#49689c] line-through mr-2">${product.price.toFixed(2)}</span>
          <span className="text-red-500 font-medium">${product.salePrice.toFixed(2)}</span>
        </p>
      );
    }
    return (
      <p className="text-[#49689c] text-sm">${product.price.toFixed(2)}</p>
    );
  };

  return (
    <section className="flex flex-col max-w-[960px] mx-auto px-4">
      {/* Featured Products Section */}
      <h2 className="text-[#0d121c] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Featured Products
      </h2>
      <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-[#ced8e8] scrollbar-track-[#f1f5f9]">
        <div className="flex items-stretch p-4 gap-3">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={getProductLink(product)}
              className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                style={{
                  backgroundImage: `url(${encodeURI(product.image)})`,
                }}
              ></div>
              <div>
                <p className="text-[#0d121c] text-base font-medium leading-normal">
                  {product.name}
                </p>
                <p className="text-[#49689c] text-sm font-normal leading-normal">
                  {product.brand}
                </p>
                {renderPrice(product)}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* New Arrivals Section */}
      <h2 className="text-[#0d121c] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        New Arrivals
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {newArrivals.map((product) => (
          <Link
            key={product.id}
            to={getProductLink(product)}
            className="flex flex-col gap-3 pb-3"
          >
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage: `url(${encodeURI(product.image)})`,
              }}
            ></div>
            <div>
              <p className="text-[#0d121c] text-base font-medium leading-normal">
                {product.name}
              </p>
              <p className="text-[#49689c] text-sm font-normal leading-normal">
                {product.brand}
              </p>
              {renderPrice(product)}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
