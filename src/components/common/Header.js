import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../../styles/components.css';

/**
 * Header component with navigation
 * @returns {JSX.Element} Header component
 */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studyDropdownOpen, setStudyDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setStudyDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setStudyDropdownOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleStudyDropdown = (e) => {
    if (!mobileMenuOpen) {
      e.preventDefault();
    }
    setStudyDropdownOpen(!studyDropdownOpen);
  };

  // Check if current route is under study section
  const isStudyActive = 
    location.pathname === '/study' || 
    location.pathname === '/flashcards' || 
    location.pathname === '/practice' || 
    location.pathname === '/english' ||
    location.pathname.startsWith('/study/');

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
          {/* Study dropdown */}
          <div className="dropdown-container" ref={dropdownRef}>
            <button 
              className={`nav-link dropdown-toggle ${isStudyActive ? 'active' : ''}`}
              onClick={toggleStudyDropdown}
              aria-expanded={studyDropdownOpen}
              aria-haspopup="true"
            >
              Study <span className="dropdown-arrow">▼</span>
            </button>
            
            <div className={`dropdown-menu ${studyDropdownOpen ? 'show' : ''}`}>
              <NavLink 
                to="/study" 
                className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}
                onClick={() => {
                  setStudyDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Study by Category
              </NavLink>
              <NavLink 
                to="/flashcards" 
                className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}
                onClick={() => {
                  setStudyDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Flashcards
              </NavLink>
              <NavLink 
                to="/practice" 
                className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}
                onClick={() => {
                  setStudyDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                Practice Test
              </NavLink>
              <NavLink 
                to="/english" 
                className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}
                onClick={() => {
                  setStudyDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
              >
                English Study
              </NavLink>
            </div>
          </div>
          
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
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
