import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from "../assets/logo.jpg";
import AuthModal from "./AuthModal";

export const NAVBAR_HEIGHT = 65;
export const NAVBAR_HEIGHT_MOBILE = 60;

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleProfileClick = () => {
    setIsAuthModalOpen(true);
  };

  const closeModal = () => {
    setIsAuthModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo">
            <img src={img} alt="MasterPlace Logo" />
          </div>

          {/* Hamburger Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="menu-icon-bar"></span>
            <span className="menu-icon-bar"></span>
            <span className="menu-icon-bar"></span>
          </button>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li className="dropdown">
              <Link to="#" onClick={() => setIsMobileMenuOpen(false)}>All Properties</Link>
            </li>
            <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>

          {/* User Actions */}
          <div className={`user-actions ${isMobileMenuOpen ? "active" : ""}`}>
            <button className="create-listing">Create a Listing</button>
            <i
              className="fas fa-user-circle profile-icon"
              onClick={handleProfileClick}
              style={{ fontSize: "28px", cursor: "pointer", color: "#333" }}
            ></i>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      {isAuthModalOpen && <AuthModal onClose={closeModal} />}
    </>
  );
};

export default Navbar;