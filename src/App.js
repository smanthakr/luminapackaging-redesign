import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import AboutUs from './pages/about';
import ContactUs from './pages/contact';
import ChatPage from './pages/ChatPage';
import Service from './pages/service';
import Products from './pages/product';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Home /><Footer /></>} />
          <Route path="/about" element={<><AboutUs /><Footer /></>} />
          <Route path="/contact" element={<><ContactUs /><Footer /></>} />
          <Route path="/service" element={<><Service /><Footer /></>} />
          <Route path="/products" element={<><Products /><Footer /></>} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;