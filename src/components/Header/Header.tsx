import React from 'react';
import { Menu } from 'lucide-react';
import Navigation from './Navigation';
import Categories from './Categories';
import TradeMeLogo from '../../assets/images/Trade Me.svg'

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-[#F5F5F5] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={TradeMeLogo} 
              alt="Trade Me Logo" 
              className="h-[200px] w-auto"
            />
          </div>

      <Categories />
          <Navigation />

          {/* Mobile Menu */}
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

    </header>
  );
};

export default Header;