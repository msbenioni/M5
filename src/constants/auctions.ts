import type { Auction } from '../types/auction';

export const featuredAuctions: Auction[] = [
  {
    title: "2020 Tesla Model 3 Long Range AWD",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800",
    currentBid: 45000,
    timeLeft: "2 days left",
    sellerName: "Premium Motors",
    reserveMet: true,
    shortDescription: "Electric vehicle in excellent condition"
  },
  {
    title: "Apple MacBook Pro 16\" M1 Max",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800",
    currentBid: 2100,
    timeLeft: "5 hours left",
    sellerName: "Apple Inc.",
    reserveMet: false,
    shortDescription: "High-performance laptop with M1 Max chip"
  },
  {
    title: "Luxury Waterfront Apartment",
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800",
    currentBid: 890000,
    timeLeft: "4 days left",
    sellerName: "Luxury Real Estate",
    reserveMet: true,
    shortDescription: "Luxurious apartment with stunning views"
  },
  {
    title: "Vintage Rolex Submariner",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800",
    currentBid: 15500,
    timeLeft: "1 day left",
    sellerName: "Vintage Watches",
    reserveMet: false,
    shortDescription: "Classic Rolex Submariner in excellent condition"
  }
];