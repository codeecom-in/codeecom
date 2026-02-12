import React from "react";
import "./About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.utils.toArray(".about-section").forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <div className="about-container text-white">
      {/* Hero Section */}
      <section className="about-hero about-section">
        <h3>About <a href="https://www.codeecom.in" style={{ textDecoration: 'none' }}><span id="code">code</span><span id="ecom">ecom.in</span></a></h3>
        <h4>Where Creativity Meets Code — Building Digital Experiences that Empower Businesses.</h4>
      </section>

      {/* Our Story */}
      <section className="about-section about-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2024, <a href="https://www.codeecom.in" className="neon-text-primary">&lt;codeecom.in&gt;</a> began as a passionate freelance venture in Pandikkad, Kerala, with a clear mission — to empower local businesses with sleek, high-performing, and modern websites. What started as a small independent initiative has evolved into a full-fledged digital development service.
        </p>
        <p style={{ marginTop: '20px' }}>
          We specialize in MERN stack development, ensuring our projects are built with the latest technologies that deliver long-term performance. From portfolio websites and eCommerce stores to custom web platforms and API integrations, we approach every project with creativity, precision, and care.
        </p>
      </section>

      {/* What We Do */}
      <section className="about-section about-services">
        <h2>What We Do</h2>
        <ul>
          <li>Responsive Website Design & Development</li>
          <li>Custom Web Applications (MERN Stack)</li>
          <li>Advanced SEO Optimization Strategy</li>
          <li>Scalable API & Backend Architectures</li>
          <li>Professional Domain & Hosting Solutions</li>
        </ul>
      </section>

      {/* Who We Are */}
      <section className="about-section about-team">
        <h2>Who We Are</h2>
        <p>
          <strong>codeecom.in</strong> is led by <a className="mrsn" href="https://mrsn8095.github.io/myPersonalWebsite/" target="_blank" rel="noreferrer"><strong>Muhammed Roshan</strong></a> — a passionate MERN stack developer. With a network of skilled designers and SEO specialists, every project is built with attention to performance and design.
        </p>
      </section>

      {/* CTA Section */}
      <section className="about-section about-cta">
        <h2>Let’s Build Something Amazing Together</h2>
        <p>Need a website or custom web application? Let’s talk today!</p>
        <div className="cta-buttons">
          <a href="https://wa.me/919778256046" target="_blank" rel="noopener noreferrer">
            <button className="btn-neon btn-primary-neon">WhatsApp Us</button>
          </a>
          <a href="mailto:codeecom.in@gmail.com?subject=Request%20for%20Quote">
            <button className="btn-neon btn-secondary-neon">Get a Quote</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
