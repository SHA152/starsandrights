import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/components.css';

/**
 * Header component with navigation
 * @returns {JSX.Element} Header component
 */
const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          Stars and Rights
        </Link>
        <nav className="nav">
          <NavLink to="/study" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Study
          </NavLink>
          <NavLink to="/flashcards" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Flashcards
          </NavLink>
          <NavLink to="/practice" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Practice Test
          </NavLink>
          <NavLink to="/english" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            English
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About the Creator
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
