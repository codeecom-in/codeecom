import React, { useRef } from "react";
import logo from "../../dev.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function WebDevelopment() {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from('.servicehead-content', {
      duration: 1.2,
      scale: 0.9,
      opacity: 0,
      ease: 'power4.out'
    });
  }, { scope: containerRef });

  return (
    <div className="servicehead-container" ref={containerRef} style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at center, #110022 0%, #050505 100%)',
      padding: '100px 20px'
    }}>
      <div className="servicehead-content" style={{
        textAlign: 'center',
        padding: '60px',
        borderRadius: '30px',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(0, 242, 255, 0.2)',
        boxShadow: '0 0 50px rgba(0, 242, 255, 0.05)',
        maxWidth: '800px'
      }}>
        <img src={logo} alt="Web Dev Icon" style={{
          width: "120px",
          height: "auto",
          marginBottom: '30px',
          filter: 'drop-shadow(0 0 10px var(--neon-primary))'
        }} />
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '800',
          color: 'var(--neon-primary)',
          marginBottom: '20px',
          textShadow: 'var(--glow-primary)'
        }}>Web Design & Development</h2>
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-dim)',
          lineHeight: '1.8'
        }}>
          Professional web design and development agency based in Malappuram, Kerala.
          We create responsive, user-friendly, and high-performance websites using
          modern technologies like the MERN stack to help your business grow.
        </p>
      </div>
    </div>
  );
}

export default WebDevelopment;
