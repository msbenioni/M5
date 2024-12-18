import mongoose from 'mongoose';

const auctionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    start_price: {
        type: Number,
        required: true
    },
    current_bid: {
        type: Number,
        default: function() {
            return (this as any).start_price;
        }
    },
    reserve_price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
        default: "https://placehold.co/400x300?text=Auction+Item"
    },
    endDate: {
        type: Date,
        required: true,
        default: () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    },
    status: {
        type: String,
        enum: ['active', 'ended'],
        default: 'active'
    },
    location: {
        type: String,
        default: 'Auckland'
    }
});

// Virtual for reserveMet (shown in frontend as yellow badge)
auctionSchema.virtual('reserveMet').get(function() {
    return this.current_bid >= this.reserve_price;
});

// Virtual for timeLeft
auctionSchema.virtual('timeLeft').get(function() {
    const now = new Date();
    const end = new Date(this.endDate);
    const diff = end.getTime() - now.getTime();
    
    if (diff <= 0) return 'Ended';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    return `${days}d ${hours}h`;
});

auctionSchema.set('toJSON', { virtuals: true });

export const Auction = mongoose.model('Auction', auctionSchema); 