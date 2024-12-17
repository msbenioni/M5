import React from 'react';
import { Clock } from 'lucide-react';
import binoculars from '../assets/images/binoculars.svg';

interface AuctionCardProps {
  title: string;
  image: string;
  currentBid: number;
  timeLeft: string;
  buyNow?: number;
  sellerName: string;
  reserveMet: boolean;
}

const AuctionCard: React.FC<AuctionCardProps> = ({
  title,
  image,
  currentBid,
  sellerName,
  timeLeft,
  reserveMet,
  buyNow,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {/* Restored binoculars with yellow background */}
        <button className="absolute top-2 right-2 p-1.5 bg-yellow-400 rounded-full shadow-md hover:bg-yellow-300">
          <img src={binoculars} alt="binoculars" className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Current bid</span>
            <span className="font-bold text-[#00A2E3]">${currentBid}</span>
          </div>
          
          {/* Restored buy now option */}
          {buyNow && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Buy now</span>
              <span className="font-bold text-[#00BFA5]">${buyNow}</span>
            </div>
          )}

          {/* Reserve status indicator */}
          <div className="flex items-center text-sm">
            <span className={`px-2 py-0.5 rounded ${
              reserveMet ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {reserveMet ? 'Reserve met' : 'Reserve not met'}
            </span>
          </div>

          {/* Seller information */}
          <div className="flex items-center text-sm text-gray-600">
            <span>Seller: {sellerName}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            <span>{timeLeft}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;