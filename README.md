# E-Commerce Frontend Application - Luxora Store

A modern, responsive e-commerce web application built with React, Vite, and Tailwind CSS. This application provides a complete online shopping experience with product browsing, cart management, user authentication, and checkout functionality.

## 🚀 Features

### 🛍️ Shopping Features
- **Product Catalog**: Browse products by category with filtering and sorting options
- **Product Details**: Detailed product pages with multiple images and specifications
- **Shopping Cart**: Add/remove items, update quantities, and view cart total
- **Search & Filter**: Advanced search with category, price range, and rating filters
- **Featured Products**: Highlighted products on homepage
- **Real Product Images**: 607+ actual product photos from assets folder
- **Guest Checkout**: Complete purchases without registration
- **Order Management**: View order status and history with delivery photos

### 👤 User Features
- **Authentication**: User registration and login system
- **User Profile**: Manage personal information and order history
- **Order Tracking**: Real-time order status updates
- **Guest Shopping**: Shop without account creation
- **Akshar User**: Default user name set to "Akshar"

### 🎨 UI/UX Features
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, modern interface with smooth animations
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Loading States**: Proper loading indicators for better user experience
- **Orange Theme**: Consistent peach/orange-pink color scheme
- **Toast Notifications**: User feedback for all actions

## 🛠️ Technology Stack

### Frontend
- **React 19**: Modern React with latest features
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **React Icons**: Icon library
- **React Toastify**: Notification system

### Development Tools
- **ESLint**: Code linting and formatting
- **Hot Module Replacement**: Fast development refresh

## 📁 Project Structure

```
Ecom/
├── frontend/                 # Frontend application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── assest/        # Product images and assets (607+ files)
│   │   │   ├── assets/    # General assets (logos, icons)
│   │   │   │   ├── banner/  # Banner images
│   │   │   │   └── photos/  # Product photos
│   │   │   └── products/ # Product images by category
│   │   │       ├── mobile/   # 117 mobile phone images
│   │   │       │   ├── Redmi 12/ (4 files)
│   │   │       │   ├── Redmi A2+/ (4 files)
│   │   │       │   ├── SAMSUNG Galaxy series (40+ files)
│   │   │       │   └── realme series (60+ files)
│   │   │       ├── earphones/ # 50 headphone images
│   │   │       ├── mouse/    # 52 mouse images
│   │   │       ├── watches/   # 77 watch images
│   │   │       ├── TV/       # 68 TV images
│   │   │       └── ...      # Other categories
│   │   ├── components/    # Reusable React components
│   │   ├── context/       # React Context for state management
│   │   ├── helpers/       # Utility functions
│   │   ├── pages/         # Page components
│   │   ├── routes/        # Route configuration
│   │   └── ...           # Other source files
│   ├── package.json       # Dependencies and scripts
│   └── vite.config.js     # Vite configuration
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Navigate to frontend directory**
   ```bash
   cd Ecom/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Usage

### Browsing Products
1. Visit homepage to see featured products
2. Navigate to "Products" page to browse all items
3. Use filters to narrow down by category, price, or rating
4. Click on any product to view details

### Shopping Cart
1. Add products to cart from product pages
2. View cart by clicking the cart icon
3. Update quantities or remove items
4. Proceed to checkout when ready

### User Account
1. Click "Sign Up" to create a new account
2. Fill in your details and submit
3. Log in with your credentials
4. Access your profile and order history

### Guest Checkout
1. Add items to cart
2. Proceed to checkout without logging in
3. Fill in shipping and payment information
4. Complete your purchase

## 🎯 Key Features Explained

### Product Management
- **Categories**: Products organized by categories (Electronics, Clothing, etc.)
- **Real Images**: 607+ actual product photos from assets folder
- **Multiple Views**: Grid and list view options
- **Detailed Pages**: Multiple product images with zoom functionality
- **Pricing**: Dynamic pricing with discounts and special offers
- **Ratings**: Customer ratings and reviews system

### Shopping Experience
- **Search**: Real-time search with autocomplete
- **Filters**: Multi-criteria filtering system
- **Sorting**: Sort by price, rating, popularity
- **Pagination**: Efficient navigation through large product lists
- **Wishlist**: Save items for later (planned)

### Order Management
- **Order History**: Complete order history with status tracking
- **Delivery Photos**: Upload and view delivery confirmation photos
- **Status Updates**: Real-time order status (processing, shipped, delivered)
- **Tracking Numbers**: Mock tracking system for orders

## 📦 Assets

### Product Images
Product images are stored in `src/assest/products/` organized by category:
- **Mobile phones**: `src/assest/products/mobile/` (117 files)
  - Redmi 12, Redmi A2+, Samsung Galaxy series, Realme series
- **Electronics**: `src/assest/products/earphones/` (50 files)
  - Premium headphones, wireless earbuds, studio headphones
- **Accessories**: `src/assest/products/mouse/` (52 files)
  - Wireless mouse, gaming mouse, ergonomic mouse
- **Watches**: `src/assest/products/watches/` (77 files)
  - Smart watches, fitness trackers, traditional watches
- **TV & More**: Additional categories with 200+ images

### Featured Products
The application includes:
- **Redmi Note 12 Pro**: Premium smartphone with 5G capabilities
- **Redmi 12**: Budget-friendly smartphone with great features
- **Redmi A2+**: Entry-level smartphone for basic needs
- **Realme X7 Pro**: Premium smartphone with advanced camera system

### Banners and Icons
- **Banners**: `src/assest/banner/`
- **General assets**: `src/assest/assets/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development Notes

### Code Style
- Follow ESLint rules
- Use functional components with hooks
- Implement proper error handling
- Add loading states for async operations

### Performance
- Images are optimized for web (WebP format)
- Lazy loading implemented for product images
- Code splitting for better performance
- Efficient state management with Context API

### Security
- Input validation on forms
- Secure authentication flow
- XSS protection implemented
- Secure payment integration

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**
   - Check image paths in `src/assest/`
   - Ensure correct file extensions (.webp)
   - Verify import statements
   - Use relative paths: `../assest/products/...`

2. **Build errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for syntax errors in components
   - Verify all imports are correct

3. **Routing issues**
   - Check route definitions in `src/routes/index.jsx`
   - Ensure proper component imports
   - Verify Link components usage

## 📄 License

This project is licensed under the MIT License.

## 🔄 Updates

### Version 2.0.0 (Current)
- ✅ Complete e-commerce functionality
- ✅ User authentication with "Akshar" as default name
- ✅ Product catalog with 607+ real images from assets
- ✅ Shopping cart with localStorage persistence
- ✅ Guest checkout functionality
- ✅ Order management with delivery photos
- ✅ Responsive design with orange theme
- ✅ Real asset integration (no more placeholder images)
- ✅ Professional UI/UX with toast notifications

### Recent Improvements
- 🔄 **Asset Integration**: All pages now use real images from `assest/` folder
- 🔄 **Name Update**: Changed default user name from "Amit" to "Akshar"
- 🔄 **Image Fixes**: Replaced all broken/placeholder images with working assets
- 🔄 **Performance**: Local images load faster than external URLs
- 🔄 **Consistency**: Unified image sources across all components

### Planned Features
- 🔄 Payment gateway integration
- 🔄 Admin dashboard
- 🔄 Product reviews and ratings
- 🔄 Wishlist functionality
- 🔄 Order tracking
- 🔄 Email notifications

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

