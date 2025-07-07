import { useState } from "react";

const categories = [
  "Laptops", "Monitors", "Tablets", "Phones", "Printers",
  "Cameras", "Headphones", "Earbuds"
];
const brands = [
  "Apple", "Asus", "Acer", "Samsung", "Lenovo", "MSI", "Motorola",
  "Canon", "Brother", "Epson", "Fujifilm", "JBL", "LG", "Nikon",
  "Polaroid", "Sony", "TCL", "Doogee", "Beats"
];

export default function ProductFilter({ onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const toggleCategory = (category) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updated);
    onFilterChange(updated, selectedBrands);
  };

  const toggleBrand = (brand) => {
    const updated = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(updated);
    onFilterChange(selectedCategories, updated);
  };

  return (
    <aside className="flex flex-col w-80">
      <h3 className="text-[#0d121c] text-lg font-bold px-4 pb-2 pt-4">
        Filters
      </h3>

      <h4 className="text-[#49689c] text-sm font-bold px-4 py-2 text-center">
        Category
      </h4>
      <div className="px-4">
        {categories.map((category) => (
          <label key={category} className="flex gap-x-3 py-3">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => toggleCategory(category)}
              className="h-5 w-5 rounded border-[#ced8e8] border-2 text-[#0a4dc1] focus:ring-0"
            />
            <p className="text-[#0d121c] text-base">{category}</p>
          </label>
        ))}
      </div>

      <h4 className="text-[#49689c] text-sm font-bold px-4 py-2 text-center">
        Brand
      </h4>
      <div className="px-4">
        {brands.map((brand) => (
          <label key={brand} className="flex gap-x-3 py-3">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
              className="h-5 w-5 rounded border-[#ced8e8] border-2 text-[#0a4dc1] focus:ring-0"
            />
            <p className="text-[#0d121c] text-base">{brand}</p>
          </label>
        ))}
      </div>
    </aside>
  );
}
