import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fc]">
      <Header />

      <main className="flex flex-col flex-1 px-6 py-12 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-10 min-h-[500px] flex flex-col justify-center">
          <h1 className="text-[#0d121c] text-3xl font-bold mb-4 text-center">
            Support
          </h1>
          <p className="text-[#49689c] mb-8 text-base leading-relaxed text-center">
            Need help? Fill out the form below and we’ll get back to you.
          </p>

          {submitted ? (
            <div className="bg-green-100 text-green-700 p-6 rounded-lg text-center text-base font-medium">
              Thank you for reaching out! We’ll get back to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#0d121c] font-medium mb-2 text-base">
                  Your Message
                </label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we assist you?"
                  className="w-full p-5 border border-[#ced8e8] rounded-lg bg-white text-[#0d121c] focus:outline-none focus:ring-2 focus:ring-[#0a4dc1] resize-none text-base leading-normal min-h-[200px]"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#0a4dc1] text-white py-3 px-8 rounded-lg text-base font-semibold hover:bg-[#083a91] transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
