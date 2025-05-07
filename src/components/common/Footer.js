import React from 'react';
import '../../styles/components.css';

/**
 * Footer component
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BecomeUSCitizen</h3>
            <p>A study tool for the U.S. citizenship naturalization test.</p>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li>
                <a 
                  href="https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Official USCIS Study Materials
                </a>
              </li>
              <li>
                <a 
                  href="https://www.uscis.gov/citizenship/learners/study-test" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Study for the Test
                </a>
              </li>
              <li>
                <a 
                  href="https://www.uscis.gov/citizenship/find-study-materials-and-resources/check-for-test-updates" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Check for Test Updates
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Disclaimer</h3>
            <p>
              This app is not affiliated with or endorsed by USCIS. 
              Content is based on official USCIS materials but may not reflect the most recent updates.
              Always verify information with official sources.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} BecomeUSCitizen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
