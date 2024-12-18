import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import debounce from 'lodash/debounce';
import Header from './components/Header/Header';
import AuctionCard from './components/AuctionCard';
import { api } from './services/api';
import type { Auction } from './types/auction';
import Footer from './components/Footer/Footer';

function App() {
  const [auctions, setAuctions] = useState<Auction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Auction[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const fetchAuctions = async () => {
    try {
      setLoading(true);
      const data = await api.getAuctions();
      setAuctions(data);
      setError(null);
    } catch (err) {
      setError('Failed to load auctions');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = debounce(async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const response = await fetch(`http://localhost:3000/api/search?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  }, 300);

  useEffect(() => {
    fetchAuctions();
  }, []);

  useEffect(() => {
    debouncedSearch(searchQuery);
    return () => debouncedSearch.cancel();
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#4B4ACF] to-[#5B87FF] rounded-lg p-8 mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#FFB6C1]">KIA ORA, READY TO START BIDDING?</h1>
          <p className="text-xl mb-6 text-white">Discover amazing auction deals on thousands of items</p>
          <div className="relative">
            <div className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search all of Trade Me"
                className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none"
              />
              <button 
                className="bg-[#0078C9] text-white px-8 py-3 rounded-r-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2"
              >
                <Search className="h-5 w-5" />
                Search
              </button>
            </div>

            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                {searchResults.map((item) => (
                  <div
                    key={item._id}
                    className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                  >
                    <div className="font-medium text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                ))}
              </div>
            )}
            
            {isSearching && (
              <div className="absolute w-full mt-2 p-4 text-center bg-white text-gray-500 rounded-lg border border-gray-200">
                Loading...
              </div>
            )}
          </div>
        </div>

        {/* Featured Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Categories</h2>
          <div className="grid grid-cols-5 gap-2">
            <div className="bg-[#E41E31] text-white p-4 text-center rounded">Marketplace</div>
            <div className="bg-[#F7941D] text-white p-4 text-center rounded">Jobs</div>
            <div className="bg-[#6C7A89] text-white p-4 text-center rounded">Motors</div>
            <div className="bg-[#2DAB66] text-white p-4 text-center rounded">Property</div>
            <div className="bg-[#4A4A4A] text-white p-4 text-center rounded">Services</div>
          </div>
        </section>

        {/* Featured Auctions */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Auctions</h2>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="text-red-600">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {auctions
                .filter((auction): auction is Auction & { _id: string } => !!auction._id)
                .map((auction) => (
                  <AuctionCard 
                    key={auction._id} 
                    {...auction}
                  />
                ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;