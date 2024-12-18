import express from 'express';
import mongoose from 'mongoose';
import { Auction } from '../models/Auction.js';

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('Received search request:', req.query);
  const { q: searchQuery } = req.query;

  if (!searchQuery) {
    return res.status(400).json({ message: 'Search query is required' });
  }

  try {
    // Perform direct search without AI enhancement for now
    console.log('Searching MongoDB for:', searchQuery);
    const results = await Auction.find({
      $or: [
        { title: { $regex: searchQuery as string, $options: 'i' } },
        { description: { $regex: searchQuery as string, $options: 'i' } }
      ]
    }).limit(10);
    
    console.log(`Found ${results.length} results`);
    return res.json(results);

  } catch (error) {
    console.error('Search error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router; 