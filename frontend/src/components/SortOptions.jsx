import React from 'react';
import { ArrowUpDown } from 'lucide-react';

const SortOptions = ({ value, onChange, className = "" }) => {
  const sortOptions = [
    { value: 'featured', label: 'Featured', description: 'Recommended products' },
    { value: 'price-low-high', label: 'Price: Low to High', description: 'Lowest price first' },
    { value: 'price-high-low', label: 'Price: High to Low', description: 'Highest price first' },
    { value: 'newest', label: 'Newest First', description: 'Latest products' },
    { value: 'rating', label: 'Highest Rated', description: 'Best customer reviews' },
    { value: 'popular', label: 'Most Popular', description: 'Bestselling products' }
  ];

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="flex items-center text-sm text-gray-600">
        <ArrowUpDown className="h-4 w-4 mr-1" />
        <span>Sort by:</span>
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortOptions;
