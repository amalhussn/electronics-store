import ProductFilter from "../components/ProductFilter";
import ProductResults from "../components/ProductResults";

export default function ProductPage() {
  return (
    <div className="flex flex-1 gap-1 px-6 py-5">
      {/* Sidebar Filters */}
      <ProductFilter />

      {/* Product Results */}
      <ProductResults />
    </div>
  );
}
