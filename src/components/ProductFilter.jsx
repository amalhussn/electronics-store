export default function ProductFilter() {
  return (
    <aside className="flex flex-col w-80">
      <h3 className="text-[#0d121c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Filters
      </h3>

      {/* Filter Category */}
      <h4 className="text-[#49689c] text-sm font-bold leading-normal tracking-[0.015em] px-4 py-2 text-center">
        Category
      </h4>
      <div className="px-4">
        {["Laptops", "Phones", "Accessories"].map((item) => (
          <label key={item} className="flex gap-x-3 py-3">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#ced8e8] border-2 bg-transparent text-[#0a4dc1] checked:bg-[#0a4dc1] checked:border-[#0a4dc1] focus:ring-0 focus:outline-none"
            />
            <p className="text-[#0d121c] text-base font-normal">{item}</p>
          </label>
        ))}
      </div>

      {/* Filter Price */}
      <h4 className="text-[#49689c] text-sm font-bold leading-normal tracking-[0.015em] px-4 py-2 text-center">
        Price
      </h4>
      <div className="p-4">
        <div className="relative flex flex-col items-start gap-3">
          <p className="text-[#0d121c] text-base font-medium w-full">Price Range</p>
          {/* Fake slider (static for now) */}
          <div className="flex h-1 w-full rounded-sm bg-[#ced8e8] pl-[60%] pr-[15%]">
            <div className="relative">
              <div className="absolute -left-3 -top-1.5 flex flex-col items-center gap-1">
                <div className="size-4 rounded-full bg-[#0a4dc1]"></div>
                <p className="text-[#0d121c] text-sm">$200</p>
              </div>
            </div>
            <div className="h-1 flex-1 rounded-sm bg-[#0a4dc1]"></div>
            <div className="relative">
              <div className="absolute -left-3 -top-1.5 flex flex-col items-center gap-1">
                <div className="size-4 rounded-full bg-[#0a4dc1]"></div>
                <p className="text-[#0d121c] text-sm">$2000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Filters */}
      {[
        { title: "Brand", options: ["TechPro", "GadgetMaster", "ElectroLux", "Sonic"] },
        { title: "Customer Rating", options: ["4 Stars & Up", "3 Stars & Up", "2 Stars & Up", "1 Star & Up"] },
        { title: "Storage", options: ["256GB", "512GB", "1TB"] },
        { title: "Battery Life", options: ["Up to 8 Hours", "8-12 Hours", "12+ Hours"] },
        { title: "Performance", options: ["Basic", "Mid-Range", "High-End"] },
      ].map((filter) => (
        <div key={filter.title}>
          <h4 className="text-[#49689c] text-sm font-bold leading-normal tracking-[0.015em] px-4 py-2 text-center">
            {filter.title}
          </h4>
          <div className="px-4">
            {filter.options.map((option) => (
              <label key={option} className="flex gap-x-3 py-3">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-[#ced8e8] border-2 bg-transparent text-[#0a4dc1] checked:bg-[#0a4dc1] checked:border-[#0a4dc1] focus:ring-0 focus:outline-none"
                />
                <p className="text-[#0d121c] text-base font-normal">{option}</p>
              </label>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}
