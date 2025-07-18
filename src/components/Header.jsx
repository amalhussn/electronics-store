import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import products from '../data/products';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (product) => {
    navigate(`/products?search=${encodeURIComponent(product.name)}`);
    setSearchTerm('');
    setSuggestions([]);
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.length > 0) {
      const lowerTerm = term.toLowerCase();
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerTerm) ||
          product.category.toLowerCase().includes(lowerTerm) ||
          product.brand.toLowerCase().includes(lowerTerm)
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const breadcrumbsMap = {
    '/': 'Home',
    '/products': 'Products',
    '/deals': 'Deals',
    '/favorites': 'Favorites',
    '/cart': 'Cart',
    '/checkout-confirmation': 'Order Confirmation',
    '/survey': 'Survey',
    '/support': 'Support',
  };

  const pathnames = location.pathname.split('/').filter(Boolean);
  const breadcrumbs = (
    <nav className="text-sm text-[#49689c] flex gap-2">
      <Link to="/" className="hover:underline">Home</Link>
      {pathnames.map((value, index) => {
        const to = '/' + pathnames.slice(0, index + 1).join('/');
        return (
          <span key={to} className="flex items-center gap-2">
            / <Link to={to} className="hover:underline">
              {breadcrumbsMap[`/${value}`] || value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
          </span>
        );
      })}
    </nav>
  );

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ebf4] px-10 py-3">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-4 text-[#0d121c]">
            <div className="size-4">
              {/* Logo Icon */}
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
            <h2 className="text-[#0d121c] text-lg font-bold leading-tight tracking-[-0.015em]">
              Tech Emporium
            </h2>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            <Link to="/products" className="text-[#0d121c] text-sm font-medium leading-normal">Products</Link>
            <Link to="/deals" className="text-[#0d121c] text-sm font-medium leading-normal">Deals</Link>
            <Link to="/support" className="text-[#0d121c] text-sm font-medium leading-normal">Support</Link>
          </div>
        </div>

        {/* Search & Icons */}
        <div className="flex flex-1 justify-end gap-8 relative">
          <form onSubmit={handleSearch} className="flex flex-col min-w-40 h-10 max-w-64 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div className="text-[#49689c] flex border-none bg-[#e7ebf4] items-center justify-center pl-4 rounded-l-xl border-r-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              </div>
              <input
                placeholder="Search"
                value={searchTerm}
                onChange={handleInputChange}
                className="form-input w-full min-w-0 flex-1 rounded-xl text-[#0d121c] bg-[#e7ebf4] px-4 rounded-l-none text-base placeholder:text-[#49689c] focus:outline-none"
              />
            </div>

            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                {suggestions.map((product) => (
                  <li
                    key={product.id}
                    className="cursor-pointer p-4 hover:bg-gray-100 whitespace-normal"
                    onClick={() => handleSuggestionClick(product)}
                  >
                    <div className="text-[#0d121c] font-medium">{product.name}</div>
                    <div className="text-[#49689c] text-sm">
                      ({product.brand}, {product.category})
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </form>

          {/* Buttons */}
          <div className="flex gap-2">
            <Link to="/favorites" className="flex items-center justify-center rounded-full h-10 bg-[#e7ebf4] text-[#0d121c] px-2.5">
              <span className="sr-only">Favorites</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32Z" />
              </svg>
            </Link>
            <Link to="/cart" className="flex items-center justify-center rounded-full h-10 bg-[#e7ebf4] text-[#0d121c] px-2.5">
              <span className="sr-only">Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87Z" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="px-10 py-2">
        {breadcrumbs}
      </div>
    </>
  );
}
