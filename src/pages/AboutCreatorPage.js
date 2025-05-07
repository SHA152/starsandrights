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
                Hi! I’m Shakil—a happy family man, former test-taker turned test-maker, and your friendly guide through the maze of U.S. civics questions. 
                I built this application to help others on their journey to becoming U.S. citizens.
                </p>
                <p>
                That smiling trio in the photo? That’s me, my brilliant wife, and our little giggle machine (aka our son), planting love and chaos wherever we go. 
                We believe in naps, laughter, and that the best way to teach is to enjoy the process—even if it involves memorizing how many voting members are in Congress (it’s 535, in case your brain just did a somersault).
                </p>
                <p>
                I built this app because I wanted the citizenship journey to feel a little more like a family picnic and a little less like a DMV line. Simple, friendly, no pressure—and maybe even a chuckle or two along the way.
                </p>
                <p>
                So if you’re prepping to become a citizen, know this: you’ve got a Bangladeshi-American dad cheering you on—rooting for your success, one flashcard at a time.
                Let’s do this. 🇺🇸✨
                </p>
              </div>
              
              <div className="connect-section">
                <h3>Let's Connect</h3>
                <p>I'd love to hear about your citizenship journey or answer any questions you might have.</p>
                
                <div className="connect-links">
                  <a href="https://www.shakilahmad.org/" target="_blank" rel="noopener noreferrer" className="connect-link">
                    Visit My Website
                  </a>
                  <a href="https://linkedin.com/in/shakil-fulbrighter" target="_blank" rel="noopener noreferrer" className="connect-link">
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
