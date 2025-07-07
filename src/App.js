import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SurveyPage from './pages/SurveyPage';
import FavoritesPage from './pages/FavoritesPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';  
import CheckoutConfirmationPage from "./pages/CheckoutConfirmationPage";
import SupportPage from './pages/SupportPage';
import DealsPage from "./pages/DealsPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout-confirmation" element={<CheckoutConfirmationPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/deals" element={<DealsPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
