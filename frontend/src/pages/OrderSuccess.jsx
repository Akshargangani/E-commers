import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaBox, FaTruck } from 'react-icons/fa';

const OrderSuccess = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
          <p className="text-gray-600 text-lg">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-xl font-semibold mb-6">Order Details</h2>
          
          <div className="space-y-4 text-left">
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium">Order Number:</span>
              <span>#ORD-2024-{Math.floor(Math.random() * 100000)}</span>
            </div>
            
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium">Order Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium">Payment Method:</span>
              <span>Credit Card</span>
            </div>
            
            <div className="flex justify-between py-2">
              <span className="font-medium">Estimated Delivery:</span>
              <span>{new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <FaBox className="text-blue-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Order Confirmed</h3>
            <p className="text-gray-600 text-sm">
              Your order has been confirmed and will be shipped soon.
            </p>
          </div>
          
          <div className="text-center">
            <FaTruck className="text-blue-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Out for Delivery</h3>
            <p className="text-gray-600 text-sm">
              You'll receive tracking information once your order ships.
            </p>
          </div>
          
          <div className="text-center">
            <FaCheckCircle className="text-blue-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Delivered</h3>
            <p className="text-gray-600 text-sm">
              Your package will arrive at your doorstep safely.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
          
          <div className="text-gray-600">
            <p>A confirmation email has been sent to your registered email address.</p>
            <p className="mt-2">
              For any questions, please contact our customer support at{' '}
              <a href="mailto:support@ecommerce.com" className="text-blue-600 hover:underline">
                support@ecommerce.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
