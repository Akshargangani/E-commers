import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { FaShoppingCart, FaStar, FaTruck, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import GuestCheckoutBanner from '../components/GuestCheckoutBanner';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();
  
  // Mock featured products
  const featuredProducts = [
    {
      _id: '1',
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation',
      price: 99.99,
      originalPrice: 149.99,
      image: '../assest/products/earphones/earphones1.webp',
      category: 'Electronics',
      rating: 4.5,
      discount: 33
    },
    {
      _id: '2',
      name: 'Smart Watch',
      description: 'Feature-rich smartwatch with health monitoring',
      price: 199.99,
      originalPrice: 299.99,
      image: '../assest/products/watches/watch1.webp',
      category: 'Electronics',
      rating: 4.3,
      discount: 33
    },
    {
      _id: '3',
      name: 'Laptop Backpack',
      description: 'Durable backpack with laptop compartment',
      price: 49.99,
      image: '../assest/products/photos/backpack1.webp',
      category: 'Accessories',
      rating: 4.7
    },
    {
      _id: '4',
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with long battery life',
      price: 29.99,
      originalPrice: 39.99,
      image: '../assest/products/mouse/mouse1.webp',
      category: 'Electronics',
      rating: 4.2,
      discount: 25
    }
  ];

  const categories = [
    { name: 'Electronics', icon: '💻', color: 'bg-blue-100' },
    { name: 'Clothing', icon: '👕', color: 'bg-pink-100' },
    { name: 'Home & Garden', icon: '🏠', color: 'bg-green-100' },
    { name: 'Sports', icon: '⚽', color: 'bg-yellow-100' },
    { name: 'Books', icon: '📚', color: 'bg-purple-100' },
    { name: 'Toys', icon: '🧸', color: 'bg-red-100' }
  ];

  const features = [
    {
      icon: <FaTruck className="text-2xl" />,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $100'
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: 'Secure Payment',
      description: '100% secure payment process'
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: '24/7 Support',
      description: 'Dedicated customer support'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 via-pink-400 to-orange-500 text-white py-20 min-h-[600px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Welcome to Your
                <span className="block text-orange-100">Luxora Store</span>
              </h1>
              <p className="text-xl mb-8 text-orange-100 leading-relaxed max-w-lg">
                Discover amazing products at unbeatable prices. 
                <span className="block mt-2">Shop with confidence and enjoy fast delivery.</span>
              </p>
              
              {/* Modern Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/products"
                  className="group relative px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Shop Now
                  <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Link>
                <button className="group relative px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105">
                  Learn More
                  <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </button>
              </div>
            </div>

            {/* Right Side - Product Images */}
            <div className="flex-1 relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Main Product Image */}
                <div className="col-span-2 lg:col-span-1 relative">
                  <img
                    src="../assest/products/mobile/SAMSUNG Galaxy S20 FE 5G (Cloud Mint, 128 GB) (8 GB RAM) 1.webp"
                    alt="Featured Product"
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    HOT
                  </div>
                </div>
                
                {/* Secondary Product Images */}
                <div className="relative hidden lg:block">
                  <img
                    src="../assest/products/mobile/realme 7 Pro (Mirror Silver, 128 GB) (6 GB RAM) 1.webp"
                    alt="Product 2"
                    className="w-full h-40 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    NEW
                  </div>
                </div>
                
                <div className="relative hidden lg:block">
                  <img
                    src="../assest/products/mobile/Redmi 12/Redmi 12 1.webp"
                    alt="Product 3"
                    className="w-full h-40 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    -30%
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white bg-opacity-10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Checkout Banner - Only show for non-logged users */}
      {!user && <GuestCheckoutBanner />}

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-orange-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/products?category=${category.name}`}
                className={`${category.color} rounded-lg p-6 text-center hover:shadow-lg transition-all hover:scale-105 border border-orange-100`}
              >
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="font-medium">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link
              to="/products"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              View All Products →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-pink-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Get the latest updates on new products and exclusive offers
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-orange-600 px-6 py-3 rounded-md font-semibold hover:bg-orange-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
