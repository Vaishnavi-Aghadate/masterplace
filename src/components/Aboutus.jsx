import React from "react";
import { Check } from "lucide-react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="page-container">
      {/* Header */}
      <div className="header">
        <div className="header-overlay">
          <h1>About Us</h1>
        </div>
      </div>

      {/* Company Intro */}
      <div className="section">
        <div>
          <h2>Welcome to Masterplace</h2>
          <p>
            Masterplace is your premier destination for exceptional real estate services, specializing in both residential and commercial properties.
          </p>
          <p>
            Our mission is to provide a seamless and trustworthy experience for home buyers and investors alike.
          </p>
          <button className="custom-button">Explore Projects</button>
        </div>
        <img src="/images/floorplan1.png" alt="Floorplan" className="image" />
      </div>

      {/* Features */}
      <div className="section">
        <img src="/images/floorplan2.png" alt="Design Plan" className="image" />
        <div>
          <h3>Why Choose Us?</h3>
          <ul className="services">
            <li><Check className="check-icon" size={20} /> Trusted by 500+ clients</li>
            <li><Check className="check-icon" size={20} /> Prime locations across India</li>
            <li><Check className="check-icon" size={20} /> Transparent pricing</li>
            <li><Check className="check-icon" size={20} /> End-to-end support</li>
          </ul>
        </div>
      </div>

      {/* Highlight Section */}
      <div className="section">
        <div className="highlight-card">
          <h4>Designed for Modern Living</h4>
          <p>
            Our properties feature contemporary architecture, spacious layouts, and all the amenities you need for comfort and convenience.
          </p>
          <button className="custom-button">Schedule a Visit</button>
        </div>
        <img src="/images/poolside.jpg" alt="Poolside" className="image" />
      </div>

      {/* Footer */}
      <div className="footer">
        <div>
          <img src="/images/logo.png" alt="Masterplace Logo" width="120" />
          <p>© 2025 Masterplace. All rights reserved.</p>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul>
            <li>Email: info@masterplace.in</li>
            <li>Phone: +91-9876543210</li>
            <li>Address: Pune, Maharashtra</li>
          </ul>
        </div>
        <div>
          <h4>Location</h4>
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
