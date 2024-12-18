import React from 'react';

const categories = [
  'Motors',
  'Property',
  'Electronics',
  'Home & Living',
  'Fashion',
  'Sports',
];

const Categories = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-6 h-12 text-sm">
          {categories.map((category) => (
            <a
              key={category}
              href="#"
              className="text-gray-600 hover:text-[#00A2E3]"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;