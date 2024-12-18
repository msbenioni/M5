import type { Auction } from '../types/auction';

const API_URL = 'http://localhost:3000/api';

export const api = {
  async getAuctions() {
    const response = await fetch(`${API_URL}/auctions`);
    if (!response.ok) throw new Error('Failed to fetch auctions');
    return response.json();
  },

  async createAuction(auction: Partial<Auction>) {
    const response = await fetch(`${API_URL}/auctions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(auction),
    });
    if (!response.ok) throw new Error('Failed to create auction');
    return response.json();
  },

  async updateAuction(id: string, auction: Partial<Auction>) {
    const response = await fetch(`${API_URL}/auctions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(auction),
    });
    if (!response.ok) throw new Error('Failed to update auction');
    return response.json();
  },

  async deleteAuction(id: string) {
    const response = await fetch(`${API_URL}/auctions/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete auction');
  }
}; 