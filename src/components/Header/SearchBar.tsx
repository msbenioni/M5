import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;