import React from 'react';
import { User } from 'lucide-react';
import binoculars from '../../assets/images/binoculars.svg'

const Navigation = () => {
  return (
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
  );
};

export default Navigation;