import { Link } from "react-router-dom";

export default function Promotions() {
  return (
    <section className="@container bg-white shadow-md rounded-xl mx-4 my-10">
      <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-16">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-[#0d121c] text-[32px] font-bold leading-tight tracking-light @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto">
            Don’t Miss Our Latest Deals!
          </h1>
          <p className="text-[#49689c] text-base font-normal leading-normal max-w-[720px] mx-auto">
            Limited-time offers on select products. Sale ends July 17, 2025.
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            to="/deals"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0b57da] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow hover:bg-[#083a91] transition"
          >
            <span className="truncate">Shop Deals</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
