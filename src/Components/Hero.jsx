import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import hero1 from "../hero1.png";
import hero2 from "../hero2.png";
import hero3 from "../hero3.png";
import hero4 from "../hero4.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Hero() {
  const images = [hero1, hero2, hero3, hero4];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const sentences = [
    "Web Designing & Development.",
    "SEO Optimization Services.",
    "User-Friendly & Responsive Designs.",
  ];
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const containerRef = useRef();

  // Image Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];
    if (letterIndex <= currentSentence.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentSentence.substring(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLetterIndex(0);
        setSentenceIndex((sentenceIndex + 1) % sentences.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [letterIndex, sentenceIndex, sentences]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-heading', {
      duration: 1.2,
      y: 100,
      opacity: 0,
      ease: 'power4.out'
    })
      .from('.typewriter-h3', {
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: 'power3.out'
      }, "-=0.6")
      .from('.hero-paragraph', {
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: 'power3.out'
      }, "-=0.4")
      .from('.btn-neon', {
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      }, "-=0.4")
      .from('.hero-visuals', {
        duration: 1.5,
        x: 100,
        opacity: 0,
        ease: 'power2.out'
      }, "-=1");

    // Floating animation for shapes
    gsap.to('.shape-1', {
      duration: 5,
      y: 30,
      x: 20,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    gsap.to('.shape-2', {
      duration: 7,
      y: -40,
      x: -30,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: containerRef });

  // Reset image animation on change
  useGSAP(() => {
    gsap.fromTo('.hero-image',
      { opacity: 0, scale: 0.9, x: 50 },
      { opacity: 1, scale: 1, x: 0, duration: 1, ease: 'power2.out' }
    );
  }, [currentImgIndex]);

  return (
    <div className="hero-container" ref={containerRef}>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-heading">
          <a href="https://www.codeecom.in" style={{ textDecoration: 'none' }}>
            <span id="code">code</span><span id="ecom">ecom.in</span>
          </a>
        </h1>

        <h3 className="typewriter-h3">{displayedText}</h3>

        <p className="hero-paragraph">
          We build SEO-friendly, feature-rich, and easy-to-manage websites that
          help you grow your business globally at <a href="https://www.codeecom.in" className="neon-text-primary">codeecom.in</a>.
        </p>

        <div className="hero-btns">
          <button className="btn-neon btn-primary-neon" onClick={() => navigate("/services")}>Our Services</button>
          <button className="btn-neon btn-secondary-neon" onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
      </div>

      <div className="hero-visuals">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <img src={images[currentImgIndex]} alt="Hero illustration" className="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
