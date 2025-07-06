export default function ProductResults() {
  const activeFilters = ["Laptops", "TechPro", "512GB"];
  const products = [
    {
      name: "TechPro X15",
      description: "15-inch, 512GB SSD",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBiRHskfNVWBxzlh4rF8qT4FKbENV0WbEAFBxvcIr_oVHa-cwcD0NzSBKXrEZbp8mkKz-f52n42D8MdRqUNmS8u_Opcp04_jzPmdc_PG7Jr7e1luMWl41DrTyb6nuYXYDHS2LqcW-4P-fjKBzLivzML3V_x7xIvDY0w-EkV22nE9uIE2fjDLo1U5Nxujf9Y7Y9JrIHQu6MzKvs00v7x4Y5FNN3N9tqzCBzfHcyOw_S8DcOeMEkhEMxfuI6Dghs7emW05r9J50AQIVMz",
    },
    {
      name: "GadgetMaster Pro",
      description: "14-inch, 256GB SSD",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCVlDc40pIZfIe6DSUz0pJsERtQexpCgSmZ26W32VGcbPNeTiMYHHeM6WHpp87B5t-qUIUDzwqYk31GJ1KnnvaHP082QmY1REtBVTdcpw1E2n2-5TKY32F98lGrWnc6EkHOz5x1bbLJEE4HV71VTZk0jvI2wzIy6Tai_QIKXV47GRHcUoYRiHuTUpjVcTTSXxr7qJq2pszQ8pgKi8x24MtKx7UzsHt4cKi2_De3LZ8fd65tlDFCmHvWSEzJrj__eYqYWrxG-Cdfv3GZ",
    },
    {
      name: "ElectroLux Air",
      description: "13-inch, 512GB SSD",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDMEEwcQfwln_yQjULbJyGJZxTM8qJIqdE4jWqy94xzbq7cHAMx9rdgp9uNympYvGH2OaEu2JzwV9eV523vpFrJMX1EYQEA28LnqWNexzELunIR4mSIMLgmm8OO0QEkM9elw3lIpcl6JLngYCkfllwGbvcnk03Zb38mDQM4u2fyG08ARmJWLY6fo5E2YDMTLIRUxtmK5m9oCSJaA2bdtKpoJAi9aoYZaDhpLQxLWwxOWZRPO928wCFpHBWZvI9ui20j86Nqbs8uyWDF",
    },
    {
      name: "Sonic Book",
      description: "16-inch, 1TB SSD",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD-_W8y8aq0P2ibiGpWrZ-hI_LeY1GLbC21dbr199dvR-528V008MR3xp8wRqWHO2sslAn8nrDMTTzHEZlik9qGKlPKVaN8O2DH7jeIDhs9zI6Gd-P8P8-QRksRiYy6HZcv-qxCGZPdNVT7aouxZOokmyOqlpcxcRnkVspTfUnIFGdAkpT6eI1h21tVlQ3fiogrDpnYXrw2vKBAmq-8XU2qMmqEkpZUbmBfn_ptUjkRYdeWN_K_tWN7i1rm3D0tAEtP8xvDTRMFECWW",
    },
  ];

  return (
    <section className="flex flex-col flex-1">
      <div className="flex justify-between gap-3 p-4">
        <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Search Results
        </p>
      </div>

      {/* Active Filters */}
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        {activeFilters.map((filter) => (
          <div
            key={filter}
            className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7ebf4] pl-4 pr-4"
          >
            <p className="text-[#0d121c] text-sm font-medium">{filter}</p>
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {products.map((product) => (
          <div key={product.name} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>
            <div>
              <p className="text-[#0d121c] text-base font-medium">
                {product.name}
              </p>
              <p className="text-[#49689c] text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
