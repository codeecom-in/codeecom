import React, { useRef } from "react";
import "./ServiceSection.css";
import webdesign from "../responsive.png";
import webdev from "../web-dev.png";
import webapp from "../webapp.png";
import seo from "../seo.png";
import api from "../api.png";
import domain from "../host.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function ServiceSection() {
  const containerRef = useRef();

  useGSAP(() => {
    const sections = gsap.utils.toArray('.service-sections');
    sections.forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      });
    });
  }, { scope: containerRef });

  const services = [
    {
      title: "Responsive Web Design",
      desc: "At codeecom.in, we design and develop modern, fully responsive websites that deliver a smooth and engaging experience across all devices. We focus on faster loading times, clear navigation, and user-friendly interfaces.",
      img: webdesign,
      primaryColor: "var(--neon-primary)"
    },
    {
      title: "Custom Web Development",
      desc: "We specialize in building custom, high-performance websites using the MERN stack (MongoDB, Express, React, and Node.js). Every project is designed from scratch to meet your specific goals.",
      img: webdev,
      primaryColor: "var(--neon-secondary)"
    },
    {
      title: "Web Application Development",
      desc: "We develop interactive, dynamic, and data-driven web applications tailored to your business processes. Built with React and Node.js for speed, security, and scalability.",
      img: webapp,
      primaryColor: "var(--neon-accent)"
    },
    {
      title: "Basic SEO Optimization",
      desc: " visibility is key. We implement essential on-page SEO techniques like meta tags, strategic keyword placement, and descriptive URL structures to help your website rank naturally.",
      img: seo,
      primaryColor: "var(--neon-primary)"
    },
    {
      title: "API & Backend Development",
      desc: "A solid backend is the foundation. We design RESTful APIs connecting your frontend with databases and external services like payment gateways and CRMs seamlessly.",
      img: api,
      primaryColor: "var(--neon-secondary)"
    },
    {
      title: "Domain & Hosting Setup",
      desc: "Complete setup for your digital presence. We handle domain registration and high-performance hosting setup using modern infrastructure to ensure maximum uptime.",
      img: domain,
      primaryColor: "var(--neon-accent)"
    }
  ];

  return (
    <div className="service-section" ref={containerRef}>
      <h2>Our Expert Services</h2>

      {services.map((service, index) => (
        <div className="service-sections" key={index}>
          <div className="service-image">
            <img src={service.img} alt={service.title} />
          </div>
          <div className="right-section">
            <h3 style={{ color: service.primaryColor }}>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="button-group">
              <a href="mailto:codeecom.in@gmail.com?subject=Request%20for%20Quote">
                <button className="btn-neon btn-primary-neon">Get Quote</button>
              </a>
              <a href="https://wa.me/919778256046" target="_blank" rel="noopener noreferrer">
                <button className="btn-neon btn-secondary-neon">Consult Now</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceSection;
