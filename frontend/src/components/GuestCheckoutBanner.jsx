import React from 'react';
import { FaShoppingCart, FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GuestCheckoutBanner = () => {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-orange-100 p-3 rounded-full">
            <FaShoppingCart className="text-orange-600 text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Shop Without Account</h3>
            <p className="text-gray-600 text-sm">Add items to cart and checkout as guest</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="flex items-center gap-2 text-green-600 mb-1">
              <FaLock className="text-sm" />
              <span className="text-sm font-medium">Secure Checkout</span>
            </div>
            <p className="text-xs text-gray-500">Your data is protected</p>
          </div>
          
          <Link
            to="/products"
            className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-md hover:from-orange-500 hover:to-pink-500 transition-all font-medium"
          >
            Start Shopping
          </Link>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-orange-200">
        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>No registration required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Fast checkout process</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Same order processing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Order tracking available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestCheckoutBanner;
