import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Command } from 'commander';

// Initialize environment variables
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/auction-seeder';

// Define a schema matching the acceptance criteria
const auctionSchema = new mongoose.Schema({
  title: String,
  description: String,
  start_price: Number,
  current_bid: Number,
  reserve_price: Number,
  sellerName: String,
  image: String,
  endDate: Date,
  status: String,
  watchlist: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

// Create a model
const Auction = mongoose.model('Auction', auctionSchema);

// Sample data matching exactly what's shown in frontend
const auctions = [
    {
      title: "Limited Edition Tennis Racket",
      description: "Signed by Roger Federer, mint condition",
      start_price: 1000,
      current_bid: 1200,
      reserve_price: 1500,
      location: "Auckland",
      image: "https://images.unsplash.com/photo-1617883861744-13b534e3b928?w=400&h=300&fit=crop",
      endDate: new Date(Date.now() + 1.5 * 60 * 60 * 1000), // 1.5 hours from now
      status: "active"
    },
    {
      title: "Vintage Camera Collection",
      description: "Set of 3 rare Leica cameras from 1950s",
      start_price: 2000,
      current_bid: 2200,
      reserve_price: 2500,
      location: "Auckland",
      image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=400&h=300&fit=crop",
      endDate: new Date(Date.now() + 1 * 60 * 60 * 1000), // 1 hour from now
      status: "active",
      watchlist: false
    },
  {
    title: "Vintage Omega Seamaster Watch",
    description: "1960s Omega Seamaster in excellent condition. Original dial, serviced movement.",
    start_price: 800,
    current_bid: 800,
    reserve_price: 1200,
    location: "Auckland",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&h=300&fit=crop",
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    status: "active"
  },
  {
    title: "PlayStation 5 Digital Edition - Like New",
    description: "PS5 Digital Edition in perfect condition. Includes original controller and box.",
    start_price: 250,
    current_bid: 250,
    reserve_price: 300,
    location: "Auckland",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    status: "active",
    reserveMet: false,
    subtitle: "Gaming Console"
  },
  {
    title: "Antique Persian Rug - 8x10 ft",
    description: "Handwoven Persian Heriz rug, circa 1930s. Beautiful condition with natural dyes.",
    start_price: 1200,
    current_bid: 1200,
    reserve_price: 2000,
    location: "Auckland",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&h=300&fit=crop",
    endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    status: "active",
    watchlist: false
  },
  {
    title: "First Edition Harry Potter Book",
    description: "First edition, first printing of Harry Potter and the Philosopher's Stone",
    start_price: 15000,
    current_bid: 15000,
    reserve_price: 20000,
    location: "Auckland",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
    endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    status: "active",
    watchlist: false
  },
  {
    title: "2020 MacBook Pro M1",
    description: "13-inch, 512GB SSD, 16GB RAM. Perfect condition with original box",
    start_price: 700,
    current_bid: 700,
    reserve_price: 850,
    location: "Auckland",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    status: "active",
    watchlist: false
  },
  {
    title: "Vintage Gibson Les Paul Guitar",
    description: "1969 Gibson Les Paul Custom, original hardware, sunburst finish",
    start_price: 4500,
    current_bid: 4500,
    reserve_price: 6000,
    location: "Auckland",
    image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=400&h=300&fit=crop",
    endDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
    status: "active",
    watchlist: false
  },
  {
    title: "Diamond Engagement Ring",
    description: "1.5 carat diamond ring, VS1 clarity, F color, with certification",
    start_price: 5000,
    current_bid: 5000,
    reserve_price: 5500,
    location: "Auckland",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop",
    endDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    status: "active",
    watchlist: false
  },
  {
    title: "Gaming Console",
    description: "Latest gaming console, barely used",
    start_price: 250,
    current_bid: 250,
    reserve_price: 300,
    location: "Auckland",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=400&h=300&fit=crop",
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    status: "active"
  },
];

const connectDB = async () => {
    try {
        console.log('Attempting to connect to MongoDB...');
        const conn = await mongoose.connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
            family: 4 // Use IPv4, skip trying IPv6
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

const seedDatabase = async (options: { drop?: boolean }) => {
    try {
        await connectDB();
        
        if (options.drop) {
            console.log('Dropping existing auctions...');
            await Auction.deleteMany({});
            console.log('Cleared existing auctions');
        }

        console.log('Starting database seed...');
        const insertedAuctions = await Auction.insertMany(auctions);
        console.log(`Inserted ${insertedAuctions.length} auctions`);
        
        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await mongoose.disconnect();
    }
};

// Set up CLI
const program = new Command();

program
    .version('1.0.0')
    .description('A CLI tool for seeding auction data into MongoDB')
    .option('-d, --drop', 'Drop existing data before seeding')
    .action((options) => {
        seedDatabase(options);
    });

program.parse(process.argv);