export interface Auction {
  _id?: string;
  title: string;
  description: string;
  image: string;
  start_price: number;
  current_bid?: number;
  reserve_price: number;
  buyNow?: number;
  sellerName: string;
  timeLeft?: string;
  reserveMet?: boolean;
  createdAt?: Date;
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