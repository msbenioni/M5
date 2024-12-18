import express from 'express';
import { Auction } from '../models/Auction.js';

const router = express.Router();

// GET all auctions
router.get('/', async (req, res) => {
    try {
        const auctions = await Auction.find();
        res.json(auctions);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ message: errorMessage });
    }
});

// GET single auction
router.get('/:id', async (req, res) => {
    try {
        const auction = await Auction.findById(req.params.id);
        if (auction) {
            res.json(auction);
        } else {
            res.status(404).json({ message: 'Auction not found' });
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ message: errorMessage });
    }
});

// CREATE auction
router.post('/', async (req, res) => {
    const auction = new Auction({
        title: req.body.title,
        description: req.body.description,
        start_price: req.body.start_price,
        reserve_price: req.body.reserve_price,
        sellerName: req.body.sellerName,
        image: req.body.image,
        buyNow: req.body.buyNow
    });

    try {
        const newAuction = await auction.save();
        res.status(201).json(newAuction);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(400).json({ message: errorMessage });
    }
});

// UPDATE auction
router.patch('/:id', async (req, res) => {
    try {
        const auction = await Auction.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!auction) {
            return res.status(404).json({ message: 'Auction not found' });
        }
        res.json(auction);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(400).json({ message: errorMessage });
    }
});

// DELETE auction
router.delete('/:id', async (req, res) => {
    try {
        const auction = await Auction.findByIdAndDelete(req.params.id);
        if (!auction) {
            return res.status(404).json({ message: 'Auction not found' });
        }
        res.json({ message: 'Auction deleted' });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ message: errorMessage });
    }
});

export default router; 