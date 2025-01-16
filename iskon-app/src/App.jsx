import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './HomePage/HomePage'
import Navbar from './components/Navbar/Navbar';
import ServicesPage from './ServicesPage/ServicesPage';




// Component for Handling Routes
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div>
    <Navbar/>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
    </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes/>
    </Router>
  )
}

export default App
