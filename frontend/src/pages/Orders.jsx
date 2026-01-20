import React, { useState } from 'react';
import { FaBox, FaTruck, FaCheckCircle, FaClock, FaCamera, FaDownload, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 299.99,
      items: [
        {
          id: 1,
          name: 'Wireless Headphones',
          price: 99.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
          photo: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop'
        },
        {
          id: 2,
          name: 'Smart Watch',
          price: 199.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1523275335684-e84628b3b530?w=100&h=100&fit=crop',
          photo: 'https://images.unsplash.com/photo-1523275335684-e84628b3b530?w=300&h=300&fit=crop'
        }
      ],
      shippingAddress: '123 Main St, New York, NY 10001',
      trackingNumber: 'TRK123456789',
      deliveryPhoto: 'https://images.unsplash.com/photo-1558624745-1c8c7b0b1b0?w=300&h=200&fit=crop'
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-20',
      status: 'shipped',
      total: 149.99,
      items: [
        {
          id: 3,
          name: 'Laptop Backpack',
          price: 49.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64b631e?w=100&h=100&fit=crop',
          photo: 'https://images.unsplash.com/photo-1553062407-98eeb64b631e?w=300&h=300&fit=crop'
        },
        {
          id: 4,
          name: 'Wireless Mouse',
          price: 29.99,
          quantity: 2,
          image: 'https://images.unsplash.com/photo-1527864550448-1d6a8f3b5b2?w=100&h=100&fit=crop',
          photo: 'https://images.unsplash.com/photo-1527864550448-1d6a8f3b5b2?w=300&h=300&fit=crop'
        },
        {
          id: 5,
          name: 'USB Cable',
          price: 19.99,
          quantity: 3,
          image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=100&fit=crop',
          photo: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop'
        }
      ],
      shippingAddress: '456 Oak Ave, Los Angeles, CA 90001',
      trackingNumber: 'TRK987654321',
      deliveryPhoto: null
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-25',
      status: 'processing',
      total: 89.99,
      items: [
        {
          id: 6,
          name: 'Phone Case',
          price: 29.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1596436781810-e5ee311f7519?w=100&h=100&fit=crop',
          photo: null
        },
        {
          id: 7,
          name: 'Screen Protector',
          price: 59.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=100&h=100&fit=crop',
          photo: null
        }
      ],
      shippingAddress: '789 Pine St, Chicago, IL 60601',
      trackingNumber: null,
      deliveryPhoto: null
    }
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-100';
      case 'shipped':
        return 'text-blue-600 bg-blue-100';
      case 'processing':
        return 'text-orange-600 bg-orange-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <FaCheckCircle />;
      case 'shipped':
        return <FaTruck />;
      case 'processing':
        return <FaClock />;
      default:
        return <FaBox />;
    }
  };

  const handleViewPhoto = (photo) => {
    setSelectedPhoto(photo);
    setShowPhotoModal(true);
  };

  const handleAddDeliveryPhoto = (orderId) => {
    // In a real app, this would open file picker or camera
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const photoUrl = e.target.result;
          setOrders(orders.map(order => 
            order.id === orderId 
              ? { ...order, deliveryPhoto: photoUrl }
              : order
          ));
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Orders</h1>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Order Header */}
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 border-b border-orange-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Order #{order.id}</h3>
                    <p className="text-gray-600">Placed on {order.date}</p>
                    <p className="text-sm text-gray-500">Shipping to: {order.shippingAddress}</p>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="capitalize">{order.status}</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mt-2">${order.total}</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-6">
                <div className="space-y-4">
                  {order.items.map(item => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <p className="text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">${item.price}</p>
                        <p className="text-sm text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Actions */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    {order.trackingNumber && (
                      <div className="flex items-center gap-2">
                        <FaTruck className="text-orange-500" />
                        <span className="text-sm text-gray-600">Tracking: {order.trackingNumber}</span>
                      </div>
                    )}
                    
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="flex items-center gap-2 px-3 py-2 bg-white border border-orange-200 rounded-md hover:bg-orange-50 transition-colors"
                    >
                      <FaEye className="text-orange-500" />
                      View Details
                    </button>
                  </div>

                  {order.status === 'delivered' && (
                    <div className="flex gap-2">
                      {order.deliveryPhoto ? (
                        <button
                          onClick={() => handleViewPhoto(order.deliveryPhoto)}
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-md hover:from-orange-500 hover:to-pink-500 transition-all"
                        >
                          <FaCamera />
                          View Photo
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAddDeliveryPhoto(order.id)}
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-md hover:from-orange-500 hover:to-pink-500 transition-all"
                        >
                          <FaCamera />
                          Add Photo
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {orders.length === 0 && (
          <div className="text-center py-16">
            <FaBox className="text-gray-400 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Orders Yet</h3>
            <p className="text-gray-600 mb-6">You haven't placed any orders yet. Start shopping to see your orders here.</p>
            <Link
              to="/products"
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-md hover:from-orange-500 hover:to-pink-500 transition-all"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Order Details - #{selectedOrder.id}</h2>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Order Info */}
                <div>
                  <h3 className="font-semibold mb-4">Order Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Order Date:</span>
                      <span>{selectedOrder.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className={`capitalize px-2 py-1 rounded-full text-xs ${getStatusColor(selectedOrder.status)}`}>
                        {selectedOrder.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total:</span>
                      <span className="font-semibold">${selectedOrder.total}</span>
                    </div>
                    {selectedOrder.trackingNumber && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tracking:</span>
                        <span>{selectedOrder.trackingNumber}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Shipping Info */}
                <div>
                  <h3 className="font-semibold mb-4">Shipping Address</h3>
                  <p className="text-gray-700">{selectedOrder.shippingAddress}</p>
                </div>
              </div>

              {/* Items */}
              <div className="mt-6">
                <h3 className="font-semibold mb-4">Order Items</h3>
                <div className="space-y-3">
                  {selectedOrder.items.map(item => (
                    <div key={item.id} className="flex gap-4 items-center p-3 bg-gray-50 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${item.price}</p>
                        <p className="text-sm text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Photo */}
              {selectedOrder.status === 'delivered' && (
                <div className="mt-6">
                  <h3 className="font-semibold mb-4">Delivery Photo</h3>
                  {selectedOrder.deliveryPhoto ? (
                    <div className="space-y-4">
                      <img
                        src={selectedOrder.deliveryPhoto}
                        alt="Delivery"
                        className="w-full max-w-md rounded-lg"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleViewPhoto(selectedOrder.deliveryPhoto)}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-md hover:from-orange-500 hover:to-pink-500 transition-all"
                        >
                          <FaEye />
                          View Full Size
                        </button>
                        <button
                          onClick={() => handleAddDeliveryPhoto(selectedOrder.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                        >
                          <FaCamera />
                          Change Photo
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 bg-gray-50 rounded-lg">
                      <FaCamera className="text-gray-400 text-4xl mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">No delivery photo added yet</p>
                      <button
                        onClick={() => handleAddDeliveryPhoto(selectedOrder.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-md hover:from-orange-500 hover:to-pink-500 transition-all mx-auto"
                      >
                        <FaCamera />
                        Add Delivery Photo
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Photo Modal */}
      {showPhotoModal && selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setShowPhotoModal(false)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
            >
              ✕
            </button>
            <img
              src={selectedPhoto}
              alt="Delivery Photo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
