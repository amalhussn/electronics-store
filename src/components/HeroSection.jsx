import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="flex justify-center py-5 px-40">
      <div className="flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuC68iy0f3qenvodcP-8Ow8CfVPzppXFTaaAJvXoLzSUP-85EIwu0FLhz552EomKz9Wsm55GCwjFUJz7XN-mqz1venxGDhITWHY5WCOGrHf7pxongJk6HznBGYfOfJK-PxxFXuFTHK04DpfVr2HrpkSIBx0RuKGZy40VL7ItyHESb6mOSZ04RyTyUy28UWUvDegNZHsaY3wcPt5dmDSbzjnEGp2UAaldhvXlEnjnz6wGvEl1-XeyzJjqhjBrjnR07UR2WtOOLP_xTM65')`,
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Experience the Future of Technology
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  Explore our curated collection of cutting-edge electronics, designed to enhance your digital lifestyle.
                </h2>
              </div>
              
              <Link to="/products">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0b57da] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-[#083a91] transition">
                  <span className="truncate">Shop Now</span>
                </button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
