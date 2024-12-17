import React from 'react';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import binoculars from '../assets/images/binoculars.svg';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-[#00A2E3]" />
            <span className="ml-2 text-xl font-bold text-[#333333]">AuctionHub</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for anything..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#00A2E3]"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="flex items-center text-gray-600 hover:text-[#00A2E3]">
              <img src={binoculars} alt="binoculars" className="h-5 w-5" />
              <span className="ml-1">Watchlist</span>
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-[#00A2E3]">
              <User className="h-5 w-5" />
              <span className="ml-1">My Account</span>
            </a>
          </nav>

          {/* Mobile Menu */}
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-[#F5F5F5] border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-6 h-12 text-sm">
            <a href="#" className="text-gray-600 hover:text-[#00A2E3]">Motors</a>
            <a href="#" className="text-gray-600 hover:text-[#00A2E3]">Property</a>
            <a href="#" className="text-gray-600 hover:text-[#00A2E3]">Electronics</a>
            <a href="#" className="text-gray-600 hover:text-[#00A2E3]">Home & Living</a>
            <a href="#" className="text-gray-600 hover:text-[#00A2E3]">Fashion</a>
            <a href="#" className="text-gray-600 hover:text-[#00A2E3]">Sports</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;