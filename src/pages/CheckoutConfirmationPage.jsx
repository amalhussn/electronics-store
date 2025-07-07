import { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

export default function CheckoutConfirmationPage() {
  const location = useLocation();
  const surveyRef = useRef(null);
  const purchasedItems = location.state?.purchasedItems || [];

  useEffect(() => {
    if (surveyRef.current) {
      surveyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const calculateTotal = () => {
    return purchasedItems.reduce((total, item) => {
      const price = item.isOnSale ? item.salePrice : item.price;
      return total + price;
    }, 0);
  };

  return (
    <section className="flex flex-col max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10 text-center">
      <ProgressBar currentStep={1} />

      {/* Success Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-green-100 p-4 rounded-full animate-bounce">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      {/* Header with item count */}
      <h2 className="text-[#0d121c] text-3xl font-bold mb-2">
        Thank You for Your Order! ({purchasedItems.length} {purchasedItems.length === 1 ? 'item' : 'items'})
      </h2>
      <p className="text-[#49689c] mb-6">Here’s a summary of your purchase:</p>

      {/* Items Summary */}
      {purchasedItems.length > 0 ? (
        <ul className="space-y-4 mb-6">
          {purchasedItems.map((item, idx) => (
            <li key={idx} className="flex items-center gap-4 border-b pb-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover border"
              />
              <div className="flex flex-col items-start">
                <p className="font-medium text-[#0d121c]">{item.name}</p>
                <p className="text-sm text-[#49689c]">{item.brand}</p>
                <p className="text-sm text-[#0d121c] mt-1">
                  {item.isOnSale ? (
                    <>
                      <span className="line-through text-[#49689c] mr-2">
                        ${item.price.toFixed(2)}
                      </span>
                      <span className="text-[#dc2626] font-semibold">
                        ${item.salePrice.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <>${item.price.toFixed(2)}</>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[#49689c] mb-6">No items found in this order.</p>
      )}

      {/* Total */}
      <div className="mt-6 flex justify-between items-center border-t pt-4 text-lg font-semibold text-[#0d121c]">
        <span>Total</span>
        <span>${calculateTotal().toFixed(2)}</span>
      </div>

      {/* Survey Call-to-Action */}
      <div className="text-[#0d121c] mt-6 mb-6">
        We’d love your feedback! Help us improve by completing a quick survey.
      </div>

      <div ref={surveyRef}>
        <Link
          to="/survey"
          className="inline-block bg-[#0a4dc1] text-white py-2 px-6 rounded-lg hover:bg-[#083a91] transition animate-pulse"
        >
          Take Survey
        </Link>
      </div>
    </section>
  );
}
