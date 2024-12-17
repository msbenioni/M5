import { Car, Home, Laptop, Shirt, Camera } from 'lucide-react';
import type { Category } from '../types/category';

export const categories: Category[] = [
  { icon: Car, name: 'Motors', count: '25,421' },
  { icon: Home, name: 'Property', count: '8,392' },
  { icon: Laptop, name: 'Electronics', count: '12,843' },
  { icon: Shirt, name: 'Fashion', count: '31,234' },
  { icon: Camera, name: 'Photography', count: '5,932' },
];