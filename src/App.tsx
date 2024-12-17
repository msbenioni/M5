import Header from './components/Header/Header';
import AuctionCard from './components/AuctionCard';
import { featuredAuctions } from './constants/auctions';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#4B4ACF] to-[#5B87FF] rounded-lg p-8 mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#FFB6C1]">KIA ORA, READY TO START BIDDING?</h1>
          <p className="text-xl mb-6 text-white">Discover amazing auction deals on thousands of items</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Search all of Trade Me"
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none"
            />
            <button className="bg-[#0078C9] text-white px-8 py-3 rounded-r-lg font-semibold hover:bg-opacity-90 transition-colors">
              Search
            </button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAuctions.map((auction, index) => (
              <AuctionCard key={index} {...auction} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;