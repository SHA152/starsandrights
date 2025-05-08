import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/components.css';

/**
 * Header component with navigation
 * @returns {JSX.Element} Header component
 */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <img 
            src="/images/STARS&RIGHTS.svg" 
            alt="Stars and Rights Logo" 
            className="logo-image" 
          />
          <span className="logo-text">Stars and Rights</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-icon"></span>
        </button>
        
        {/* Desktop navigation */}
        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <NavLink 
            to="/study" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={() => setMobileMenuOpen(false)}
          >
            Study
          </NavLink>
          <NavLink 
            to="/flashcards" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={() => setMobileMenuOpen(false)}
          >
            Flashcards
          </NavLink>
          <NavLink 
            to="/practice" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={() => setMobileMenuOpen(false)}
          >
            Practice Test
          </NavLink>
          <NavLink 
            to="/english" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={() => setMobileMenuOpen(false)}
          >
            English
          </NavLink>
          <NavLink 
            to="/test-structure" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={() => setMobileMenuOpen(false)}
          >
            Test Structure
          </NavLink>
          <NavLink 
            to="/n400" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={() => setMobileMenuOpen(false)}
          >
            N-400 Guide
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={() => setMobileMenuOpen(false)}
          >
            About the Creator
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
