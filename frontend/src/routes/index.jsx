import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import ForgotPassword from '../pages/ForgotPassword'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import ProductDetail from '../pages/ProductDetail'
import OrderSuccess from '../pages/OrderSuccess'
import Profile from '../pages/Profile'
import Portfolio from '../pages/Portfolio'
import Orders from '../pages/Orders'
import AddProduct from '../pages/AddProduct'

const router = createBrowserRouter([
    {
        path :"/",
        element : <App />,
        children :[
            {
                path : "",
                element : <Home />
            },
            {
                path : "/login",
                element : <Login />
            },
            {
                path : "/signup",
                element : <SignUp />
            },
            {
                path : "/forgot-password",
                element : <ForgotPassword />
            },
            {
                path : "/products",
                element : <Products />
            },
            {
                path : "/product/:id",
                element : <ProductDetail />
            },
            {
                path : "/cart",
                element : <Cart />
            },
            {
                path : "/checkout",
                element : <Checkout />
            },
            {
                path : "/order-success",
                element : <OrderSuccess />
            },
            {
                path : "/profile",
                element : <Profile />
            },
            {
                path : "/portfolio",
                element : <Portfolio />
            },
            {
                path : "/orders",
                element : <Orders />
            },
            {
                path : "/add-product",
                element : <AddProduct />
            }
        ]
    }
])

export default router;

