export default function Promotions() {
  return (
    <section className="@container">
      <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-[#0d121c] text-[32px] font-bold leading-tight tracking-light @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto">
            Exclusive Offers
          </h1>
          <p className="text-[#0d121c] text-base font-normal leading-normal max-w-[720px] mx-auto">
            Sign up for our newsletter and get 10% off your first purchase.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0b57da] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
            <span className="truncate">Subscribe</span>
          </button>
        </div>
      </div>
    </section>
  );
}
