import './App.css';
// import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import ServicesPage from './ServicesPage/ServicesPage';
import Contact from './Contact/Contact.jsx';
import Footer from "./components/Footer/Footer.jsx"
import Login from './Login/Login.jsx';
import About from './About/About.jsx';

// Animation Variants for Page Transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Component for Handling Routes with Animation
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer/>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
