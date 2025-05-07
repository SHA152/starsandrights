import React from 'react';

/**
 * About the Creator page component
 * @returns {JSX.Element} AboutCreatorPage component
 */
const AboutCreatorPage = () => {
  return (
    <div className="about-creator-page">
      <div className="about-container">
        <div className="about-content">
          <h1>About the Creator</h1>
          
          <div className="creator-profile">
            <div className="creator-image">
              <img src="/images/creator-photo.jpg" alt="Shakil Ahmad" />
            </div>
            
            <div className="creator-bio">
              <h2>Shakil Ahmad</h2>
              <p className="creator-welcome">Welcome! I'm glad you're here.</p>
              
              <div className="creator-description">
                <p>
                  I'm Shakil Ahmad, the creator of Stars and Rights. Having gone through the citizenship process myself,
                  I built this application to help others on their journey to becoming U.S. citizens.
                </p>
                <p>
                  My goal is to make the preparation process easier and more accessible for everyone.
                  I hope this tool helps you achieve your dream of U.S. citizenship!
                </p>
              </div>
              
              <div className="connect-section">
                <h3>Let's Connect</h3>
                <p>I'd love to hear about your citizenship journey or answer any questions you might have.</p>
                
                <div className="connect-links">
                  <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="connect-link">
                    Visit My Website
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="connect-link">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCreatorPage;
