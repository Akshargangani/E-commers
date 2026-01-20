import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaEye } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border border-orange-100">
      <Link to={`/product/${product._id}`} className="block">
        <div className="relative">
          <img
            src={product.image || '../assest/products/photos/product1.webp'}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          {product.discount && (
            <span className="absolute top-2 right-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-2 py-1 rounded-md text-xs font-semibold">
              -{product.discount}%
            </span>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-orange-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-1">
            <span className="text-orange-400">★</span>
            <span className="text-sm text-gray-600">
              {product.rating || 0}
            </span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-gradient-to-r from-orange-400 to-pink-400 text-white py-2 px-4 rounded-md hover:from-orange-500 hover:to-pink-500 transition-all flex items-center justify-center gap-2"
          >
            <FaShoppingCart className="text-sm" />
            Add to Cart
          </button>
          
          <Link
            to={`/product/${product._id}`}
            className="bg-gradient-to-r from-orange-100 to-pink-100 text-gray-700 py-2 px-3 rounded-md hover:from-orange-200 hover:to-pink-200 transition-all flex items-center justify-center border border-orange-200"
          >
            <FaEye />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
