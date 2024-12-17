import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  name: string;
  count: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon: Icon, name, count }) => {
  return (
    <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
      <Icon className="h-8 w-8 mx-auto mb-2 text-[#00A2E3]" />
      <h3 className="font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{count} listings</p>
    </div>
  );
};

export default CategoryCard;