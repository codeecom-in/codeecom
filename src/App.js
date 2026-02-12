import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About.jsx';
import Home from './Pages/Home';
import Portfolio from './Components/Portfolio.jsx';
import React from 'react';
import Service from './Components/ServiceSection.jsx';
import ContactUs from './Components/ContactUs.jsx';
import WebDevelopment from './Pages/Services/WebDevelopment.jsx';
import CustomCursor from './Components/CustomCursor.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<Service />} />
        <Route path='/services/web-development' element={<WebDevelopment />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
