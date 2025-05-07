import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout component that wraps the content with Header and Footer
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} Layout component
 */
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
