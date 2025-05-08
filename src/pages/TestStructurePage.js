import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Test Structure page component
 * @returns {JSX.Element} TestStructurePage component
 */
const TestStructurePage = () => {
  return (
    <div className="test-structure-page">
      <div className="test-structure-header">
        <h1>U.S. Naturalization Test Structure</h1>
        <p>Understanding the components and format of the citizenship test</p>
      </div>
      
      <div className="test-structure-content">
        <section className="test-section">
          <h2>Overview of the Naturalization Test</h2>
          <p>
            The U.S. Naturalization Test is a mandatory examination that all applicants for U.S. citizenship must pass. 
            It consists of two main components: the English Test and the Civics Test. Both components are administered 
            during your naturalization interview by a USCIS officer.
          </p>
        </section>
        
        <section className="test-section">
          <h2>English Test</h2>
          <p>
            The English Test assesses your ability to read, write, and speak basic English. You must demonstrate 
            sufficient knowledge in all three areas to pass this portion of the naturalization test.
          </p>
          
          <div className="test-component">
            <h3>1. Reading Test</h3>
            <p>
              During the reading test, you will be asked to read one sentence out of three sentences. 
              You need to read just one sentence correctly to demonstrate your ability to read English.
            </p>
            <p>
              <Link to="/english" className="component-link">Study Reading Materials</Link>
            </p>
          </div>
          
          <div className="test-component">
            <h3>2. Writing Test</h3>
            <p>
              During the writing test, you will be asked to write one sentence out of three sentences. 
              You need to write just one sentence correctly to demonstrate your ability to write English.
            </p>
            <p>
              <Link to="/english?tab=writing" className="component-link">Study Writing Materials</Link>
            </p>
          </div>
          
          <div className="test-component">
            <h3>3. Speaking Test</h3>
            <p>
              Your ability to speak English is determined by your answers to questions normally asked during 
              the eligibility interview on the Application for Naturalization (Form N-400).
            </p>
          </div>
        </section>
        
        <section className="test-section">
          <h2>Civics Test</h2>
          <p>
            The Civics Test covers important U.S. history and government topics. You must demonstrate knowledge 
            and understanding of these topics to pass this portion of the naturalization test.
          </p>
          
          <div className="test-component">
            <h3>Format</h3>
            <p>
              During your naturalization interview, the USCIS officer will ask you up to 10 questions from the 
              list of 100 civics questions. You must answer correctly at least 6 of the 10 questions to pass 
              the civics test.
            </p>
          </div>
          
          <div className="test-component">
            <h3>Content Areas</h3>
            <ul className="content-areas">
              <li>
                <strong>American Government</strong> - Questions about principles of American democracy, 
                systems of government, and rights and responsibilities.
                <p>
                  <Link to="/study/american-government" className="component-link">Study American Government</Link>
                </p>
              </li>
              <li>
                <strong>American History</strong> - Questions about colonial period and independence, 
                the 1800s, and recent American history.
                <p>
                  <Link to="/study/american-history" className="component-link">Study American History</Link>
                </p>
              </li>
              <li>
                <strong>Integrated Civics</strong> - Questions about geography, symbols, and holidays of the United States.
                <p>
                  <Link to="/study/integrated-civics" className="component-link">Study Integrated Civics</Link>
                </p>
              </li>
              <li>
                <strong>Current Officials</strong> - Questions about current government officials that may change over time.
                <p>
                  <Link to="/study/officials" className="component-link">Study Current Officials</Link>
                </p>
              </li>
            </ul>
          </div>
        </section>
        
        <section className="test-section">
          <h2>Special Considerations</h2>
          
          <div className="test-component">
            <h3>65/20 Special Consideration</h3>
            <p>
              If you are 65 years or older and have been a permanent resident for at least 20 years, 
              you qualify for special consideration. You may study just 20 of the 100 civics questions, 
              which are marked with an asterisk in the official materials.
            </p>
            <p>
              <Link to="/study/senior" className="component-link">Study 65/20 Special Questions</Link>
            </p>
          </div>
          
          <div className="test-component">
            <h3>Disability Exceptions</h3>
            <p>
              Some applicants, because of a physical or developmental disability or mental impairment, 
              may be exempt from the English and civics requirements. To request an exception, file Form N-648, 
              Medical Certification for Disability Exceptions, with your Form N-400.
            </p>
          </div>
        </section>
        
        <section className="test-section">
          <h2>Preparation Resources</h2>
          <p>
            This app provides comprehensive study materials to help you prepare for all components of the 
            naturalization test:
          </p>
          <ul className="resource-links">
            <li><Link to="/study" className="resource-link">Study Civics Questions by Category</Link></li>
            <li><Link to="/flashcards" className="resource-link">Practice with Flashcards</Link></li>
            <li><Link to="/practice" className="resource-link">Take Practice Tests</Link></li>
            <li><Link to="/english" className="resource-link">Study English Materials</Link></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TestStructurePage;
