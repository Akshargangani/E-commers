import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { FiFilter, FiGrid, FiList } from 'react-icons/fi';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    sortBy: ''
  });

  // Mock data for demonstration
  useEffect(() => {
    const mockProducts = [
      {
        _id: '1',
        name: 'Premium Wireless Headphones 1',
        description: 'High-quality wireless headphones with noise cancellation and premium sound quality',
        price: 99.99,
        originalPrice: 149.99,
        image: '../assest/products/earphones/earphones1.webp',
        category: 'Electronics',
        rating: 4.5,
        discount: 33
      },
      {
        _id: '2',
        name: 'Premium Wireless Headphones 2',
        description: 'Professional studio headphones with superior bass response and comfort',
        price: 129.99,
        originalPrice: 199.99,
        image: '../assest/products/earphones/earphones2.webp',
        category: 'Electronics',
        rating: 4.7,
        discount: 35
      },
      {
        _id: '3',
        name: 'Premium Wireless Headphones 3',
        description: 'Sports wireless headphones with sweat resistance and secure fit',
        price: 79.99,
        originalPrice: 119.99,
        image: '../assest/products/earphones/earphones3.webp',
        category: 'Electronics',
        rating: 4.3,
        discount: 33
      },
      {
        _id: '4',
        name: 'Premium Wireless Headphones 4',
        description: 'Premium over-ear headphones with active noise cancellation',
        price: 159.99,
        originalPrice: 249.99,
        image: '../assest/products/earphones/earphones4.webp',
        category: 'Electronics',
        rating: 4.8,
        discount: 36
      },
      {
        _id: '5',
        name: "Men's Classic T-Shirt",
        description: 'Comfortable cotton t-shirt perfect for casual wear',
        price: 29.99,
        originalPrice: 49.99,
        image: '../assest/products/photos/tshirt1.webp',
        category: 'Clothing',
        rating: 4.2,
        discount: 40
      },
      {
        _id: '6',
        name: "Women's Summer Dress",
        description: 'Elegant summer dress with floral pattern',
        price: 59.99,
        originalPrice: 89.99,
        image: '../assest/products/photos/dress1.webp',
        category: 'Clothing',
        rating: 4.6,
        discount: 33
      },
      {
        _id: '7',
        name: "Men's Denim Jeans",
        description: 'Classic fit denim jeans with modern style',
        price: 79.99,
        originalPrice: 119.99,
        image: '../assest/products/photos/jeans1.webp',
        category: 'Clothing',
        rating: 4.4,
        discount: 33
      },
      {
        _id: '8',
        name: "Women's Leather Jacket",
        description: 'Stylish genuine leather jacket for all seasons',
        price: 199.99,
        originalPrice: 299.99,
        image: '../assest/products/photos/jacket1.webp',
        category: 'Clothing',
        rating: 4.7,
        discount: 33
      },
      {
        _id: '9',
        name: "Men's Polo Shirt",
        description: 'Classic polo shirt with premium cotton fabric',
        price: 39.99,
        originalPrice: 59.99,
        image: '../assest/products/photos/polo1.webp',
        category: 'Clothing',
        rating: 4.3,
        discount: 33
      },
      {
        _id: '10',
        name: "Women's Casual Blouse",
        description: 'Comfortable blouse perfect for office and casual wear',
        price: 45.99,
        originalPrice: 69.99,
        image: '../assest/products/photos/blouse1.webp',
        category: 'Clothing',
        rating: 4.5,
        discount: 34
      },
      {
        _id: '11',
        name: "Men's Hoodie",
        description: 'Warm and comfortable hoodie with modern design',
        price: 54.99,
        originalPrice: 79.99,
        image: '../assest/products/photos/hoodie1.webp',
        category: 'Clothing',
        rating: 4.6,
        discount: 31
      },
      {
        _id: '12',
        name: "Women's Skirt",
        description: 'Elegant skirt suitable for formal and casual occasions',
        price: 49.99,
        originalPrice: 74.99,
        image: '../assest/products/photos/skirt1.webp',
        category: 'Clothing',
        rating: 4.4,
        discount: 33
      },
      {
        _id: '13',
        name: 'Laptop Backpack',
        description: 'Durable backpack with laptop compartment and USB charging port',
        price: 49.99,
        image: '../assest/products/photos/backpack1.webp',
        category: 'Accessories',
        rating: 4.7
      },
      {
        _id: '14',
        name: 'Wireless Mouse',
        description: 'Ergonomic wireless mouse with long battery life and precision tracking',
        price: 29.99,
        originalPrice: 39.99,
        image: '../assest/products/mouse/mouse1.webp',
        category: 'Electronics',
        rating: 4.2,
        discount: 25
      },
      {
        _id: '15',
        name: 'USB-C Hub',
        description: 'Multi-port USB-C hub with 4K HDMI output and fast charging',
        price: 39.99,
        originalPrice: 59.99,
        image: '../assest/products/photos/usbhub1.webp',
        category: 'Electronics',
        rating: 4.4,
        discount: 33
      },
      {
        _id: '16',
        name: 'Redmi 12',
        description: 'Budget-friendly smartphone with 50MP camera, 90Hz display, and 5000mAh battery',
        price: 179.99,
        originalPrice: 229.99,
        image: '../assest/products/mobile/Redmi 12/Redmi 12 1.webp',
        category: 'Electronics',
        rating: 4.3,
        discount: 22
      },
      {
        _id: '17',
        name: 'Redmi A2+',
        description: 'Entry-level smartphone with 8MP camera, large display, and long battery life',
        price: 99.99,
        originalPrice: 139.99,
        image: '../assest/products/mobile/Redmi A2+/Redmi A2+ 1.webp',
        category: 'Electronics',
        rating: 4.1,
        discount: 29
      },
      {
        _id: '18',
        name: 'Realme X7 Pro',
        description: 'Premium smartphone with 5G connectivity and advanced camera system',
        price: 299.99,
        originalPrice: 399.99,
        image: '../assest/products/mobile/realme 7 Pro (Mirror Silver, 128 GB) (6 GB RAM) 1.webp',
        category: 'Electronics',
        rating: 4.4,
        discount: 25
      }
    ];

    setTimeout(() => {
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (filters.category) {
      filtered = filtered.filter(product => 
        product.category === filters.category
      );
    }

    if (filters.sortBy) {
      filtered.sort((a, b) => {
        switch (filters.sortBy) {
          case 'price-low':
            return a.price - b.price;
          case 'price-high':
            return b.price - a.price;
          case 'rating':
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  const categories = ['All', 'Electronics', 'Accessories', 'Clothing', 'Home'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-6">
              <FiFilter className="text-xl" />
              <h2 className="text-xl font-semibold">Filters</h2>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category === 'All' ? '' : category}
                      checked={filters.category === (category === 'All' ? '' : category)}
                      onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                      className="mr-2"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Sort By</h3>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:w-3/4">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">All Products</h1>
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

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <>
              {/* Products Count */}
              <p className="text-gray-600 mb-4">
                Showing {filteredProducts.length} products
              </p>

              {/* Products Grid/List */}
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-4"
              }>
                {filteredProducts.map(product => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>

              {/* No Products Found */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
