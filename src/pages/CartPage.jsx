import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    const purchasedItems = [...cartItems];
    clearCart();
    navigate("/checkout-confirmation", { state: { purchasedItems } });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.isOnSale ? item.salePrice : item.price;
      return total + price;
    }, 0);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fc]">
      <Header />

      <main className="flex flex-col flex-1 px-6 py-5">
        <ProgressBar currentStep={0} />

        <section className="flex flex-col max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mt-6">
          <h2 className="text-[#0d121c] text-3xl font-bold mb-6">Your Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-[#49689c]">Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-4">
                {cartItems.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between gap-4 border-b pb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-md object-cover border"
                      />
                      <div>
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
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#0a4dc1] text-sm underline hover:text-[#083a91] transition"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              {/* Total */}
              <div className="mt-6 flex justify-between items-center border-t pt-4 text-lg font-semibold text-[#0d121c]">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="mt-6 bg-[#0a4dc1] text-white py-2 px-6 rounded-lg hover:bg-[#083a91] transition"
              >
                Checkout
              </button>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
