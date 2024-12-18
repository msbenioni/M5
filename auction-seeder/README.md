# Auction Seeder CLI

A command-line interface tool for seeding auction data into MongoDB. This tool is designed to populate a MongoDB database with sample auction data for testing and development purposes.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- MongoDB (running locally on port 27017)
- npm (Node Package Manager)

## Installation

1. Clone the repository: 
git clone <repository-url>
cd auction-seeder

2. Install dependencies:
npm install

3. Create a `.env` file in the root directory:
MONGODB_URI=mongodb://127.0.0.1:27017/auction-seeder


## Usage

The seeder provides two main commands:

1. Seed data while preserving existing records:
npm run seed

2. Seed data and drop existing records:
npm run seed:drop


## Data Schema

Each auction record contains the following fields:

| Field         | Type   | Description                              |
|---------------|--------|------------------------------------------|
| title         | String | The title of the auction item            |
| description   | String | Detailed description of the item         |
| start_price   | Number | Initial bidding price                    |
| reserve_price | Number | Minimum price that must be met           |
| createdAt     | Date   | Timestamp when the record was created    |

## Sample Data

The seeder includes sample auction items. Here's an example of the data structure:

{
title: "Vintage Watch",
description: "A beautiful vintage watch from 1950s",
start_price: 100,
reserve_price: 150
}

## Project Structure

auction-seeder/
├── seed.ts # Main seeder script
├── .env # Environment variables
└── README.md # Documentation

M5_17DEC24/ (root folder)
├── package.json # Project dependencies and scripts
├── auction-seeder/ # Auction seeder CLI

## Error Handling

The seeder includes error handling for common scenarios:
- MongoDB connection failures
- Data insertion errors
- Invalid data format

## Troubleshooting

If you encounter connection issues:
1. Ensure MongoDB is running (`net start MongoDB` on Windows Powershell Administrator)
2. Verify the connection string in your .env file
3. Check that port 27017 is not blocked by firewall