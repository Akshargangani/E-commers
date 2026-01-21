import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword.jsx';
import SignUp from './pages/SignUp.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={2000} />
      <Header/>
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default App;