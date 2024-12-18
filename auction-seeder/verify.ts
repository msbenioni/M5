import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/auction-seeder';

const verifyData = async () => {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 5000,
            family: 4
        });
        console.log('Connected successfully');

        // Get the auctions collection
        const auctions = await mongoose.connection.db.collection('auctions').find({}).toArray();
        
        console.log('\nFound auctions:', auctions.length);
        console.log('\nAuction details:');
        auctions.forEach((auction, index) => {
            console.log(`\nAuction ${index + 1}:`);
            console.log('Title:', auction.title);
            console.log('Description:', auction.description);
            console.log('Start Price:', auction.start_price);
            console.log('Reserve Price:', auction.reserve_price);
            console.log('Created At:', auction.createdAt);
        });

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.disconnect();
    }
};

// IIFE to run the verification
(async () => {
    try {
        await verifyData();
    } catch (error) {
        console.error('Unhandled error:', error);
    }
})(); 