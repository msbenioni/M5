import React from 'react';
import binoculars from '../assets/images/binoculars.svg';

interface AuctionCardProps {
  _id?: string;
  title: string;
  image: string;
  current_bid?: number;
  endDate: string | Date;
  location?: string;
  reserveMet?: boolean;
  onWatchlist?: () => void;
}

const AuctionCard: React.FC<AuctionCardProps> = ({
  title,
  image,
  current_bid,
  endDate,
  location = 'Auckland',
  reserveMet,
  onWatchlist
}) => {
  const formatTimeLeft = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end.getTime() - now.getTime();
    
    if (diff <= 0) return 'Ended';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours < 24) {
      return `${hours} hr ${minutes} mins`;
    }
    
    const days = Math.floor(hours / 24);
    return `${days} days`;
  };

  const isClosingSoon = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end.getTime() - now.getTime();
    return diff <= 2 * 60 * 60 * 1000; // 2 hours in milliseconds
  };

  return (
    <div className={`
      rounded-lg overflow-hidden transition-all duration-300
      ${isClosingSoon() ? 'border-2 border-yellow-400 bg-yellow-50' : 'shadow-md bg-white'}
    `}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <button 
          onClick={onWatchlist}
          className="absolute top-2 right-2 p-1.5 bg-yellow-400 rounded-full hover:bg-yellow-300 transition-colors duration-200"
          aria-label="Add to watchlist"
        >
          <img src={binoculars} alt="" className="h-5 w-5" />
        </button>
      </div>
      
      <div className={`p-4 ${isClosingSoon() ? 'bg-yellow-50' : 'bg-white'}`}>
        {/* Location and Closing Time */}
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>{location}</span>
          <span>Closes: {formatTimeLeft()}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        
        <div className="space-y-2">
          {/* Current Bid and Reserve Status */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Current bid</span>
            <span className="font-bold text-[#00A2E3]">
              ${current_bid?.toFixed(2)}
            </span>
          </div>
          
          {/* Reserve Status */}
          <div className="flex items-center text-sm">
            <span className={`px-2 py-0.5 rounded ${
              reserveMet ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {reserveMet ? 'Reserve met' : 'Reserve not met'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;