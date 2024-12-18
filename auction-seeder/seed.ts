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
  reserve_price: Number,
  createdAt: { type: Date, default: Date.now }
});

// Create a model
const Auction = mongoose.model('Auction', auctionSchema);

// Sample data matching the required fields
const sampleAuctions = [
  {
    title: "Vintage Watch",
    description: "A beautiful vintage watch from 1950s",
    start_price: 100,
    reserve_price: 150
  },
  {
    title: "Gaming Console",
    description: "Latest gaming console, barely used",
    start_price: 250,
    reserve_price: 300
  }
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
        const insertedAuctions = await Auction.insertMany(sampleAuctions);
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