import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartButton = () => {
  const { cartItems, getCartTotal } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart" className="relative group">
      <div className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-colors">
        <FaShoppingCart className="text-orange-600 text-xl" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {itemCount}
          </span>
        )}
      </div>
      
      {/* Hover Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {itemCount > 0 ? `${itemCount} items - $${getCartTotal().toFixed(2)}` : 'Cart is empty'}
        <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </Link>
  );
};

export default CartButton;
