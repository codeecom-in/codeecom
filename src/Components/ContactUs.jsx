import React from "react";
import "./ContactUs.css";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone, FaInstagram } from "react-icons/fa";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`New Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:roshan@codeecom.in?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-intro">
        Ready to take your project to the next level? Let's discuss your ideas and build something extraordinary together.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon-wrapper">
              <FaWhatsapp className="contact-icon" />
            </div>
            <a href="https://wa.me/919778256046" target="_blank" rel="noreferrer">WhatsApp: +91 9778256046</a>
          </div>

          <div className="contact-item">
            <div className="icon-wrapper">
              <FaEnvelope className="contact-icon" />
            </div>
            <a href="mailto:roshan@codeecom.in">roshan@codeecom.in</a>
          </div>

          <div className="contact-item">
            <div className="icon-wrapper">
              <FaPhone className="contact-icon" />
            </div>
            <a href="tel:+919778256046">+91 9778256046</a>
          </div>

          <div className="contact-item">
            <div className="icon-wrapper">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <span>Malappuram, Kerala, India</span>
          </div>

          <div className="contact-item">
            <div className="icon-wrapper">
              <FaInstagram className="contact-icon" />
            </div>
            <a href="https://www.instagram.com/codeecom.in" target="_blank" rel="noreferrer">@codeecom.in</a>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Tell us about your project" rows="5" required></textarea>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
