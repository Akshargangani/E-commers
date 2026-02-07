import React, { useState } from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import CartButton from './CartButton';

const Header = () => {
  const { getCartCount } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowUserMenu(false);
  };

  return (
    <header className='h-16 shadow-md bg-gradient-to-r from-orange-100 to-pink-100 transition-colors duration-300'>
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className=''>
          <Link to="/">
            <Logo w={90} h={50} />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-orange-600 transition-colors">Products</Link>
          <Link to="/add-product" className="text-gray-700 hover:text-orange-600 transition-colors">Add Product</Link>
          <Link to="/cart" className="text-gray-700 hover:text-orange-600 transition-colors">Cart</Link>
          <Link to="/orders" className="text-gray-700 hover:text-orange-600 transition-colors">Orders</Link>
          <Link to="/profile" className="text-gray-700 hover:text-orange-600 transition-colors">Profile</Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-orange-600 transition-colors">Portfolio</Link>
        </nav>

        {/* Search Bar */}
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border-2 border-orange-200 rounded-full focus-within:shadow focus-within:border-orange-400 pl-2 bg-white/80 backdrop-blur'>
          <input 
            type="text" 
            placeholder='search product here...' 
            className='w-full outline-none pl-2 bg-transparent'
          />
          <div className='text-lg min-w-[50px] h-8 bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center rounded-r-full text-white'>
            <GrSearch />
          </div>
        </div>

        {/* User Actions */}
        <div className='flex items-center gap-4'>
          {/* User Menu */}
          <div className='relative'>
            <div 
              className='text-3xl cursor-pointer text-gray-600 hover:text-orange-600 transition-colors' 
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <FaRegCircleUser />
            </div>
            
            {showUserMenu && (
              <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-orange-100'>
                {isAuthenticated ? (
                  <>
                    <div className='px-4 py-2 border-b border-orange-100'>
                      <p className='text-sm font-medium text-gray-800'>{user?.firstName} {user?.lastName}</p>
                      <p className='text-xs text-gray-500'>{user?.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      className='block px-4 py-2 text-sm hover:bg-orange-50 text-gray-700'
                      onClick={() => setShowUserMenu(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/orders"
                      className='block px-4 py-2 text-sm hover:bg-orange-50 text-gray-700'
                      onClick={() => setShowUserMenu(false)}
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className='w-full text-left px-4 py-2 text-sm hover:bg-orange-50 text-orange-600'
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className='block px-4 py-2 text-sm hover:bg-orange-50 text-gray-700'
                      onClick={() => setShowUserMenu(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className='block px-4 py-2 text-sm hover:bg-orange-50 text-gray-700'
                      onClick={() => setShowUserMenu(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Shopping Cart */}
          <CartButton />

          {/* Login Button (only show when not authenticated) */}
          {!isAuthenticated && (
            <div> 
              <Link to="/login">
                <button className='px-3 py-1 rounded-full text-white bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 transition-all'>
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
