export interface Auction {
  _id: string;
  title: string;
  description: string;
  image: string;
  startPrice: number;
  currentBid: number;
  reservePrice: number;
  buyNow?: number;
  sellerName: string;
  endTime: Date;
  createdAt: Date;
}

// Helper function to format time left
export const getTimeLeft = (endTime: Date): string => {
  const now = new Date();
  const diff = endTime.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (days > 0) return `${days} days left`;
  if (hours > 0) return `${hours} hours left`;
  return 'Ending soon';
};