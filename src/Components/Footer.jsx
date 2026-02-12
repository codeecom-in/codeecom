import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <a href="https://www.codeecom.in" className="text-decoration-none">
            <h3 className="navbar-brand-custom">
              <span id="code">code</span><span id="ecom">ecom.in</span>
            </h3>
          </a>
          <p>
            We offer professional Web Development and Designing services tailored for all your business and personal needs. Build your powerful online presence with us.
          </p>
        </div>
        <div className="footer-right">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} codeecom.in. All rights reserved.</p>
        <button onClick={scrollToTop} className="scroll-top-btn">
          ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;
