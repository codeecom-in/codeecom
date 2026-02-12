import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="https://www.codeecom.in" className="navbar-brand navbar-brand-custom">
          <span id="code">code</span><span id="ecom">ecom.in</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link nav-link-custom">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link nav-link-custom">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link nav-link-custom">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link nav-link-custom">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link nav-link-custom">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
