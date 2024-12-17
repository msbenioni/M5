import React from 'react';
import CategoryCard from './CategoryCard';
import { categories } from '../constants/categories';

const FeaturedCategories = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <CategoryCard key={category.name} {...category} />
      ))}
    </div>
  );
};

export default FeaturedCategories;