export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center @container">
          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <a className="text-[#49689c] text-base font-normal leading-normal min-w-40" href="/">
              About Us
            </a>
            <a className="text-[#49689c] text-base font-normal leading-normal min-w-40" href="/">
              Contact
            </a>
            <a className="text-[#49689c] text-base font-normal leading-normal min-w-40" href="/">
              Privacy Policy
            </a>
            <a className="text-[#49689c] text-base font-normal leading-normal min-w-40" href="/">
              Terms of Service
            </a>
          </div>

          {/* Social Icons (Placeholder Links for Now) */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/">
              <div className="text-[#49689c]">
                <span className="sr-only">Twitter</span>
              </div>
            </a>
            <a href="/">
              <div className="text-[#49689c]">
                <span className="sr-only">Facebook</span>
              </div>
            </a>
            <a href="/">
              <div className="text-[#49689c]">
                <span className="sr-only">Instagram</span>
              </div>
            </a>
          </div>

          <p className="text-[#49689c] text-base font-normal leading-normal">
            © 2023 Tech Emporium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
