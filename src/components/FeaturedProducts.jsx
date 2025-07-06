export default function FeaturedProducts() {
  return (
    <section className="flex flex-col max-w-[960px] mx-auto px-4">
      {/* Featured Products Section */}
      <h2 className="text-[#0d121c] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Featured Products
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {/* Featured Product Cards */}
          {[
            {
              title: "Laptop Pro 16",
              description: "Powerful performance in a sleek design.",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuABCG60AwjqsEy0cIxijCJh0J0vxzf5t7YalHne9wK9lNjFqKlbj2esLW4BM_2m3VFOcoGm-xacy5cN24LrWVodFsrHMjOMMRXW9O3yBX77qzITMv9w8TGzEl2KTtl1-NYedWzaKkP8BmbQ-Z_3PN-r0BIOSAg7-aSLzvPG5wQB6GNqAm-eUE7K08ly9RI2BgHlvdnNgjmZqB6xHuZRkXniWofb-osVuhbTfJ03X54m9FFrvHU-g_DC2e1I-Ege6oSO5evvaD1tpAfI",
            },
            {
              title: "Wireless SoundBuds",
              description:
                "Immersive audio experience with noise cancellation.",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBMexr5_LYrz7YX4L4ib80r-I9bNThNGrY9OcGFvqtWeLwBRTrCcM-nJaxMrEUXFQNetIyCwxzn_2a07sZwVCpfzdVgN99ObOW69aIiqjt-KUWSa-6eVfWXkOytqRUB23nWKAuFLQ32nqSlXUU5z--c7TVwavVDVr9MPZrMKTX7RZ0vcGdrIzSm9tcBSZf50gN-PCBcAezrbtThHu7_j87mCiLK5L9OaADm1NJVINbCQKoR3KqDViiZt6hcpY6PwPnJ6KVGKuOe1VFY",
            },
            {
              title: "SmartTime Watch",
              description: "Stay connected and track your fitness.",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAyukuOr_67jwD8d_0r5t1hsXEHoRHaTav15A8THmyeog4LuX6VOIuBxjYUCGjlq8Ko7giKD_v_vNORHY7rN6dF60aJaoTRnjEKUkAbUyXkg_x3Obupp7Lg59R7ROwuhWdP96c_bNKB0PJUDxuid6GVfBMRI1DzQ-efWkHForI0RdT0gm9XmBXOw04dJ2OkYbpZ268OMq6DsDpZgT1qWLr_1IQ_-zSHc1CpGtseELDXupwTTow45astpZRBE5tUDF-o_2sTMAZOTtWf",
            },
            {
              title: "Tab X10",
              description: "Versatile tablet for work and play.",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB1U5SOeuzqbsUwzdCljyxrYYuR9zgP9DO6FNThhiFXJtQPFt04f2-JsYm8e0b6ZBIuYcGR3kQl4Wmwr_1cB8N3gygJkv1OoeKcUlYNCEJe7kIbC1Dano_zAWrZAYGjJ020UJ5kq1Ra5t0zJYvod-LpL_q7irsbGHGgsVACg6aauE1OUZSeg0IEKmQ7OEs_KD9bKqPqZ6Rh8KGUwvhqsPbxBzS8d11_-e5N81svqK0e1SkuYYo4ZxvqCWVgNFVlDzLhKeEac0TqD1Wg",
            },
          ].map((product, idx) => (
            <div
              key={idx}
              className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
              <div>
                <p className="text-[#0d121c] text-base font-medium leading-normal">
                  {product.title}
                </p>
                <p className="text-[#49689c] text-sm font-normal leading-normal">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Arrivals Section */}
      <h2 className="text-[#0d121c] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        New Arrivals
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {/* New Arrival Product Cards */}
        {[
          {
            title: "Ultra HD TV",
            description: "Experience stunning visuals with our latest 4K TVs.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuB7zXNvWzt1J0KEoia-SdtFZkEeabbiJb_qpXuwLvRPyXEwqGhnHj6sPp_zR6b-zgR-EyHRKQddROsUwknwaoxNgxv_zwehYomjVXSfw0BY1sVgyJBsK26Nf7PUuDDeHnXQUr0BMROZ0mxLy6e-uRc19W8DP6w8InG6S3xIdApXXEOWJPx5dm9p9wP6Xp0FaawA60YeM-lZMjtvrz58ez9TjkdAQ3ARYTClK7WeaCSbVyA87c4U7MxpftXNrmsbi87Yv4aFMXvqHwm-",
          },
          {
            title: "Gaming Console X",
            description:
              "Next-gen gaming console for ultimate entertainment.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAtpP1bA1RvpjWmnA1OzAVZG0w4cZgN5VPEk2SPJjtr_QSSprns4o5P0aoun58K4AYSuYed6jXBzsKuBOlV8z0jMyXRMSIzZ9Y7E_ezXeKPnes5LH-nv24r0WbpsSguKDZefgdXWxc48pNIrm3NNO4M9usab_-gO87jOKaLWi0AHj6anZsTIDrXZKKU_V2y4h0mlW2t4QOnFaQ4vwvTcn2JzO1N6KeC3oV1cBMLUEMNjLal3acRm8hWGwt8yv2TmnPUw5gJytM5Uf1h",
          },
          {
            title: "Smart Home Hub",
            description: "Control your home with voice commands.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAQUvBxSWoZYluNayyY0Vvfx76rfUsTA-JZSFOPrB0Q3H3v3LTylyL4CDsfZ2SVLxYJHmn4NO7GroJ4Lrw6BJl1j3bmEKYeHNu4vOYaZ8j2sdSFatW2HHgl-tu1Kf078w4yACM9ouA-d4mTK5SHVECaevfBeU5jdoJHfEqUqriVXURCTp_jZutelrmOYt4T8R-6S6WA5DXrn215I24FqBfxUKSH6wtdmGe0PVKqYwNVSgr4m3SMTZaZu2KPgTfwZxA1BUQORXLKHuZY",
          },
          {
            title: "Wireless Charger Pad",
            description: "Fast and convenient wireless charging.",
            image:
              "https://lh3.googleusercontent.com/aida-public/AB6AXuD0strJtb5ob3ZpJimXaxmdej956iF5ksabY48p2n9bnK3r_TQUwkGZYKhvf5R-AJa0owwnlzvC6xbM4DREpNeyh3RbN53QkVjvfluJ-WI9sSPS8z2-JVPoXPN5MS0wgbjpWQOIjdRAGFoWWXxEJpcOM3RYwc2sJ68_y3SQIOTASN-pPJgZIwHbLVO0eORamuabBhVzQhUcJc85inD-mIQW_HoJhkT8FALa1B8eWEZLtBQMl9vpBEkgOQsAMnbcyUs8FR-m9xilz0pF",
          },
        ].map((product, idx) => (
          <div key={idx} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>
            <div>
              <p className="text-[#0d121c] text-base font-medium leading-normal">
                {product.title}
              </p>
              <p className="text-[#49689c] text-sm font-normal leading-normal">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
