export default function SurveyPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] overflow-x-hidden" style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ebf4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0d121c]">
            <div className="size-4">
              {/* Logo */}
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0_6_319">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#0d121c] text-lg font-bold leading-tight tracking-[-0.015em]">Tech Emporium</h2>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            <h2 className="text-[#0d121c] text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Your feedback matters!
            </h2>
            <p className="text-[#0d121c] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              We're always looking for ways to improve. Please take a moment to share your thoughts on your recent purchase.
            </p>

            <h3 className="text-[#0d121c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              How satisfied are you with your purchase?
            </h3>

            <div className="flex flex-wrap gap-3 p-4">
              {['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'].map((label) => (
                <label key={label} className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#ced8e8] px-4 h-11 text-[#0d121c] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#0a4dc1] relative cursor-pointer">
                  {label}
                  <input type="radio" name="satisfaction" className="invisible absolute" />
                </label>
              ))}
            </div>

            <h3 className="text-[#0d121c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              What could we have done better?
            </h3>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <textarea
                  placeholder="Your feedback"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d121c] focus:outline-0 focus:ring-0 border border-[#ced8e8] bg-[#f8f9fc] focus:border-[#ced8e8] min-h-36 placeholder:text-[#49689c] p-[15px] text-base font-normal leading-normal"
                ></textarea>
              </label>
            </div>

            <div className="flex px-4 py-3 justify-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#0a4dc1] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Submit Feedback</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
