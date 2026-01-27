import React, { useState } from 'react';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';

const ProductFilters = ({ filters, onFilterChange, onClearFilters }) => {
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    category: true,
    brand: true,
    rating: true,
    availability: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const categories = [
    { id: 'mobile', name: 'Mobile Phones', count: 117 },
    { id: 'tv', name: 'TV & Entertainment', count: 68 },
    { id: 'airpodes', name: 'AirPods & Earbuds', count: 60 },
    { id: 'watches', name: 'Smart Watches', count: 77 },
    { id: 'laptop', name: 'Laptops', count: 45 },
    { id: 'camera', name: 'Cameras', count: 32 },
    { id: 'speakers', name: 'Speakers', count: 48 },
    { id: 'refrigerator', name: 'Refrigerators', count: 59 },
    { id: 'mouse', name: 'Computer Mouse', count: 52 },
    { id: 'earphones', name: 'Earphones', count: 50 },
    { id: 'trimmers', name: 'Trimmers', count: 56 },
    { id: 'processor', name: 'Processors', count: 11 },
    { id: 'printers', name: 'Printers', count: 7 }
  ];

  const brands = [
    { id: 'apple', name: 'Apple', count: 89 },
    { id: 'samsung', name: 'Samsung', count: 76 },
    { id: 'xiaomi', name: 'Xiaomi', count: 54 },
    { id: 'sony', name: 'Sony', count: 43 },
    { id: 'boat', name: 'boAt', count: 38 },
    { id: 'realme', name: 'Realme', count: 35 },
    { id: 'oppo', name: 'OPPO', count: 32 },
    { id: 'vivo', name: 'Vivo', count: 28 },
    { id: 'oneplus', name: 'OnePlus', count: 25 },
    { id: 'lg', name: 'LG', count: 22 }
  ];

  const handlePriceChange = (type, value) => {
    onFilterChange({
      ...filters,
      price: {
        ...filters.price,
        [type]: value
      }
    });
  };

  const handleCategoryChange = (categoryId) => {
    const newCategories = filters.category?.includes(categoryId)
      ? filters.category.filter(id => id !== categoryId)
      : [...(filters.category || []), categoryId];
    
    onFilterChange({
      ...filters,
      category: newCategories
    });
  };

  const handleBrandChange = (brandId) => {
    const newBrands = filters.brand?.includes(brandId)
      ? filters.brand.filter(id => id !== brandId)
      : [...(filters.brand || []), brandId];
    
    onFilterChange({
      ...filters,
      brand: newBrands
    });
  };

  const handleRatingChange = (rating) => {
    onFilterChange({
      ...filters,
      rating: filters.rating === rating ? null : rating
    });
  };

  const handleAvailabilityChange = (availability) => {
    onFilterChange({
      ...filters,
      availability: filters.availability === availability ? null : availability
    });
  };

  const hasActiveFilters = Object.keys(filters).some(key => {
    if (key === 'price') {
      return filters.price?.min || filters.price?.max;
    }
    return filters[key] && (
      Array.isArray(filters[key]) ? filters[key].length > 0 : filters[key]
    );
  });

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Filter className="h-5 w-5 text-gray-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
          >
            <X className="h-4 w-4 mr-1" />
            Clear All
          </button>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h4 className="font-medium text-gray-900">Price Range</h4>
          {expandedSections.price ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.price && (
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600">Min Price</label>
              <input
                type="number"
                placeholder="0"
                value={filters.price?.min || ''}
                onChange={(e) => handlePriceChange('min', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Max Price</label>
              <input
                type="number"
                placeholder="100000"
                value={filters.price?.max || ''}
                onChange={(e) => handlePriceChange('max', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h4 className="font-medium text-gray-900">Category</h4>
          {expandedSections.category ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.category && (
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {categories.map(category => (
              <label key={category.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.category?.includes(category.id) || false}
                  onChange={() => handleCategoryChange(category.id)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                <span className="ml-auto text-xs text-gray-500">({category.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brand */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('brand')}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h4 className="font-medium text-gray-900">Brand</h4>
          {expandedSections.brand ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.brand && (
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {brands.map(brand => (
              <label key={brand.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.brand?.includes(brand.id) || false}
                  onChange={() => handleBrandChange(brand.id)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">{brand.name}</span>
                <span className="ml-auto text-xs text-gray-500">({brand.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('rating')}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h4 className="font-medium text-gray-900">Rating</h4>
          {expandedSections.rating ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.rating && (
          <div className="space-y-2">
            {[4, 3, 2, 1].map(rating => (
              <label key={rating} className="flex items-center">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.rating === rating}
                  onChange={() => handleRatingChange(rating)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
                  {rating === 4 && " & up"}
                  {rating === 3 && " & up"}
                  {rating === 2 && " & up"}
                  {rating === 1 && " & up"}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Availability */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('availability')}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <h4 className="font-medium text-gray-900">Availability</h4>
          {expandedSections.availability ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.availability && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="availability"
                checked={filters.availability === 'in-stock'}
                onChange={() => handleAvailabilityChange('in-stock')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">In Stock</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="availability"
                checked={filters.availability === 'out-of-stock'}
                onChange={() => handleAvailabilityChange('out-of-stock')}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Out of Stock</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilters;
