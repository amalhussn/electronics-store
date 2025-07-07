import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center @container">
          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <Link
              to="/support"
              className="text-[#49689c] text-base font-normal leading-normal min-w-40"
            >
              Contact
            </Link>
          </div>

          <p className="text-[#49689c] text-base font-normal leading-normal">
            © 2025 Tech Emporium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
