import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import ProductFilters from '../components/ProductFilters';
import SortOptions from '../components/SortOptions';
import Pagination from '../components/Pagination';
import { useFilters } from '../hooks/useFilters';
import { FiFilter, FiGrid, FiList, X, ArrowLeft } from 'react-icons/fi';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Category configuration
  const categoryConfig = {
    mobile: {
      name: 'Mobile Phones',
      description: 'Latest smartphones with advanced features and cutting-edge technology',
      icon: '📱'
    },
    tv: {
      name: 'TV & Entertainment',
      description: 'Smart TVs and entertainment systems for your home',
      icon: '📺'
    },
    airpodes: {
      name: 'AirPods & Earbuds',
      description: 'Wireless audio solutions for music and calls',
      icon: '🎧'
    },
    watches: {
      name: 'Smart Watches',
      description: 'Fitness tracking and smart features on your wrist',
      icon: '⌚'
    },
    earphones: {
      name: 'Earphones & Headphones',
      description: 'Premium audio experience with noise cancellation',
      icon: '🎵'
    },
    laptop: {
      name: 'Laptops',
      description: 'Powerful computing for work and gaming',
      icon: '💻'
    },
    camera: {
      name: 'Cameras',
      description: 'Capture your memories with professional cameras',
      icon: '📷'
    },
    speakers: {
      name: 'Speakers',
      description: 'High-quality sound systems for every occasion',
      icon: '🔊'
    },
    refrigerator: {
      name: 'Refrigerators',
      description: 'Modern cooling solutions for your kitchen',
      icon: '❄️'
    },
    mouse: {
      name: 'Computer Mouse',
      description: 'Precision pointing devices for work and gaming',
      icon: '🖱️'
    },
    trimmers: {
      name: 'Trimmers & Grooming',
      description: 'Personal grooming and styling tools',
      icon: '✂️'
    },
    processor: {
      name: 'Processors',
      description: 'High-performance CPUs for computing',
      icon: '🔧'
    },
    printers: {
      name: 'Printers',
      description: 'Document printing and scanning solutions',
      icon: '🖨️'
    }
  };

  const currentCategory = categoryConfig[category] || {
    name: category,
    description: 'Browse our collection',
    icon: '📦'
  };

  // Use our custom filter hook
  const {
    filters,
    filteredProducts,
    updateFilters,
    clearFilters,
    activeFiltersCount,
    filterSummary
  } = useFilters(products);

  // Set category filter
  useEffect(() => {
    if (category) {
      updateFilters({ category: [category] });
    }
  }, [category]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Mock data for demonstration
  useEffect(() => {
    const mockProducts = [
      {
        _id: '1',
        name: 'Premium Wireless Headphones 1',
        description: 'High-quality wireless headphones with noise cancellation and premium sound quality',
        price: 9999,
        originalPrice: 14999,
        image: '/src/assest/products/earphones/earphones1.webp',
        category: 'earphones',
        brand: 'boat',
        rating: 4.5,
        discount: 33,
        stock: 15,
        featured: true,
        soldCount: 234,
        createdAt: '2024-01-15'
      },
      {
        _id: '2',
        name: 'boAt Airdopes 111',
        description: 'True wireless earbuds with instant wake and pair technology',
        price: 1299,
        originalPrice: 2999,
        image: '/src/assest/products/airpodes/boAt Airdopes 111 1.webp',
        category: 'airpodes',
        brand: 'boat',
        rating: 4.3,
        discount: 57,
        stock: 50,
        featured: true,
        soldCount: 567,
        createdAt: '2024-01-20'
      },
      {
        _id: '3',
        name: 'Samsung Galaxy S24',
        description: 'Flagship smartphone with AI features and premium camera',
        price: 79999,
        originalPrice: 89999,
        image: '/src/assest/products/mobile/samsung-s24-1.webp',
        category: 'mobile',
        brand: 'samsung',
        rating: 4.7,
        discount: 11,
        stock: 25,
        featured: true,
        soldCount: 189,
        createdAt: '2024-02-01'
      },
      {
        _id: '4',
        name: 'Apple iPhone 15 Pro',
        description: 'Pro-level iPhone with titanium design and A17 Pro chip',
        price: 119999,
        originalPrice: 139999,
        image: '/src/assest/products/mobile/iphone-15-pro-1.webp',
        category: 'mobile',
        brand: 'apple',
        rating: 4.8,
        discount: 14,
        stock: 10,
        featured: true,
        soldCount: 445,
        createdAt: '2024-02-10'
      },
      {
        _id: '5',
        name: 'Sony WH-1000XM5',
        description: 'Industry-leading noise canceling headphones',
        price: 24999,
        originalPrice: 29999,
        image: '/src/assest/products/earphones/sony-wh1000xm5-1.webp',
        category: 'earphones',
        brand: 'sony',
        rating: 4.6,
        discount: 17,
        stock: 8,
        featured: false,
        soldCount: 123,
        createdAt: '2024-02-15'
      },
      {
        _id: '6',
        name: 'Redmi 12',
        description: 'Budget-friendly smartphone with 50MP camera, 90Hz display, and 5000mAh battery',
        price: 10999,
        originalPrice: 13999,
        image: '/src/assest/products/mobile/Redmi 12/Redmi 12 1.webp',
        category: 'mobile',
        brand: 'xiaomi',
        rating: 4.2,
        discount: 21,
        stock: 30,
        featured: false,
        soldCount: 678,
        createdAt: '2024-02-20'
      },
      {
        _id: '7',
        name: 'LG 55" 4K Smart TV',
        description: 'Ultra HD Smart TV with webOS and AI ThinQ',
        price: 45999,
        originalPrice: 55999,
        image: '/src/assest/products/TV/lg-55-4k-1.webp',
        category: 'tv',
        brand: 'lg',
        rating: 4.4,
        discount: 18,
        stock: 12,
        featured: false,
        soldCount: 89,
        createdAt: '2024-03-01'
      },
      {
        _id: '8',
        name: 'Apple Watch Series 9',
        description: 'Advanced health features and bright display',
        price: 41999,
        originalPrice: 49999,
        image: '/src/assest/products/watches/apple-watch-s9-1.webp',
        category: 'watches',
        brand: 'apple',
        rating: 4.7,
        discount: 16,
        stock: 18,
        featured: true,
        soldCount: 234,
        createdAt: '2024-03-05'
      }
    ];

    // Filter products by current category
    const categoryProducts = mockProducts.filter(product => product.category === category);

    setTimeout(() => {
      setProducts(categoryProducts);
      setLoading(false);
    }, 1000);
  }, [category]);

  if (!categoryConfig[category]) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Browse All Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate('/products')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to All Products
        </button>
        
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{currentCategory.icon}</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{currentCategory.name}</h1>
            <p className="text-gray-600 mt-1">{currentCategory.description}</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <SearchBar placeholder={`Search ${currentCategory.name.toLowerCase()}...`} />
      </div>

      {/* Filter Summary */}
      {activeFiltersCount > 0 && (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-600">Active filters:</span>
          {filterSummary.map((summary, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              {summary}
            </span>
          ))}
          <button
            onClick={clearFilters}
            className="text-sm text-red-600 hover:text-red-800 flex items-center"
          >
            <X className="h-4 w-4 mr-1" />
            Clear all
          </button>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar - Desktop */}
        <div className="hidden lg:block lg:w-1/4">
          <ProductFilters
            filters={filters}
            onFilterChange={updateFilters}
            onClearFilters={clearFilters}
          />
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            <FiFilter className="mr-2" />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>
          <SortOptions
            value={filters.sortBy}
            onChange={(value) => updateFilters({ sortBy: value })}
          />
        </div>

        {/* Mobile Filters */}
        {showMobileFilters && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="bg-white w-80 h-full overflow-y-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4">
                <ProductFilters
                  filters={filters}
                  onFilterChange={updateFilters}
                  onClearFilters={clearFilters}
                />
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="lg:w-3/4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                {filteredProducts.length} {currentCategory.name}
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Sort Options - Desktop */}
              <div className="hidden sm:block">
                <SortOptions
                  value={filters.sortBy}
                  onChange={(value) => updateFilters({ sortBy: value })}
                />
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                  <FiGrid />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                  <FiList />
                </button>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <>
              {/* Products Grid/List */}
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-4"
              }>
                {paginatedProducts.map(product => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>

              {/* No Products Found */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found in this category</p>
                  <button
                    onClick={() => navigate('/products')}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Browse Other Categories
                  </button>
                </div>
              )}

              {/* Pagination */}
              {filteredProducts.length > 0 && (
                <div className="mt-8">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    itemsPerPage={itemsPerPage}
                    totalItems={filteredProducts.length}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
