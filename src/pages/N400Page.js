import React from 'react';
import { Link } from 'react-router-dom';

/**
 * N-400 Form Guide page component
 * @returns {JSX.Element} N400Page component
 */
const N400Page = () => {
  return (
    <div className="n400-page">
      <div className="n400-header">
        <h1>N-400 Application for Naturalization Guide</h1>
        <p>Understanding the form and how to complete it</p>
        <div className="disclaimer">
          <strong>Disclaimer:</strong> This guide provides general information about Form N-400 and is not legal advice. 
          For specific legal questions, please consult with an immigration attorney or accredited representative.
        </div>
      </div>
      
      <div className="n400-content">
        <section className="n400-section">
          <h2>What is Form N-400?</h2>
          <p>
            Form N-400, Application for Naturalization, is the form you need to complete to apply for U.S. citizenship. 
            This form is submitted to U.S. Citizenship and Immigration Services (USCIS) to begin the naturalization process.
          </p>
          <p>
            <a 
              href="https://www.uscis.gov/n-400" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="external-link"
            >
              Download the official Form N-400 from USCIS
            </a>
          </p>
        </section>
        
        <section className="n400-section">
          <h2>Form N-400 Structure</h2>
          <p>
            The N-400 form is comprehensive and collects detailed information about your eligibility for naturalization. 
            The form is divided into several parts:
          </p>
          
          <div className="form-part">
            <h3>Part 1: Information About Your Eligibility</h3>
            <p>This section asks about the basis of your eligibility for naturalization.</p>
            <div className="form-tips">
              <h4>Tips:</h4>
              <ul>
                <li>Most applicants select option "A" (I have been a lawful permanent resident for at least 5 years)</li>
                <li>If you're married to a U.S. citizen, you may qualify under option "B" (3 years of permanent residence)</li>
                <li>Military service members and veterans have special options</li>
              </ul>
            </div>
          </div>
          
          <div className="form-part">
            <h3>Part 2-4: Your Personal Information</h3>
            <p>These sections collect your personal information, contact details, and information about your residence.</p>
            <div className="form-tips">
              <h4>Tips:</h4>
              <ul>
                <li>Use your full legal name as it appears on your green card</li>
                <li>List all addresses where you've lived in the past 5 years</li>
                <li>Include all phone numbers and email addresses where USCIS can reach you</li>
              </ul>
            </div>
          </div>
          
          <div className="form-part">
            <h3>Part 5-7: Information About Your Parents, Marital History, and Children</h3>
            <p>These sections ask about your family relationships.</p>
            <div className="form-tips">
              <h4>Tips:</h4>
              <ul>
                <li>Include information about all your current and former spouses</li>
                <li>List all your children, regardless of age, marital status, or whether they live with you</li>
              </ul>
            </div>
          </div>
          
          <div className="form-part">
            <h3>Part 8-9: Employment and Education History</h3>
            <p>These sections collect information about your work and educational background.</p>
            <div className="form-tips">
              <h4>Tips:</h4>
              <ul>
                <li>List all employers for the past 5 years, including periods of unemployment</li>
                <li>Include all schools you've attended since age 18</li>
              </ul>
            </div>
          </div>
          
          <div className="form-part">
            <h3>Part 10-11: Time Outside the U.S. and Tax Information</h3>
            <p>These sections ask about your travel history and tax filing compliance.</p>
            <div className="form-tips">
              <h4>Tips:</h4>
              <ul>
                <li>List all trips outside the U.S. that lasted 24 hours or longer in the past 5 years</li>
                <li>Be prepared to provide tax transcripts if requested</li>
              </ul>
            </div>
          </div>
          
          <div className="form-part">
            <h3>Part 12: Questions About Your Moral Character</h3>
            <p>This section asks about criminal history, affiliations, and other factors that may affect your eligibility.</p>
            <div className="form-tips">
              <h4>Tips:</h4>
              <ul>
                <li>Answer all questions truthfully, even if you have to answer "Yes" to questions about arrests or citations</li>
                <li>If you answer "Yes" to any question, be prepared to provide documentation and explanation</li>
                <li>Consult with an immigration attorney if you have any "Yes" answers in this section</li>
              </ul>
            </div>
          </div>
          
          <div className="form-part">
            <h3>Part 13-15: Questions About Your Attachment to the Constitution and Willingness to Take the Oath</h3>
            <p>These sections confirm your willingness to support the U.S. Constitution and take the Oath of Allegiance.</p>
          </div>
          
          <div className="form-part">
            <h3>Part 16-18: Signature, Interpreter Information, and Preparer Information</h3>
            <p>These sections are for signatures and information about anyone who helped you complete the form.</p>
            <div className="form-tips">
              <h4>Tips:</h4>
              <ul>
                <li>Sign and date the form in black ink</li>
                <li>If someone interpreted or helped you prepare the form, they must complete their respective sections</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="n400-section">
          <h2>Required Documents</h2>
          <p>When you submit Form N-400, you'll need to include several supporting documents:</p>
          <ul className="document-list">
            <li>A copy of your Permanent Resident Card (Green Card)</li>
            <li>The filing fee (check the USCIS website for current fees)</li>
            <li>Two identical color photographs (if applying from outside the U.S.)</li>
            <li>Additional documents based on your specific situation (marriage certificate, military records, etc.)</li>
          </ul>
        </section>
        
        <section className="n400-section">
          <h2>The Naturalization Process</h2>
          <ol className="process-steps">
            <li>
              <strong>Submit Form N-400</strong>
              <p>File your application with USCIS along with all required documents and fees.</p>
            </li>
            <li>
              <strong>Biometrics Appointment</strong>
              <p>USCIS will schedule you for fingerprinting and a background check.</p>
            </li>
            <li>
              <strong>Interview and Tests</strong>
              <p>
                Attend your interview where a USCIS officer will review your application and administer the 
                English and civics tests.
              </p>
              <p>
                <Link to="/test-structure" className="internal-link">Learn more about the Naturalization Test</Link>
              </p>
            </li>
            <li>
              <strong>Decision</strong>
              <p>USCIS will approve, deny, or continue your case (request more evidence).</p>
            </li>
            <li>
              <strong>Oath Ceremony</strong>
              <p>If approved, you'll attend a ceremony to take the Oath of Allegiance and receive your Certificate of Naturalization.</p>
            </li>
          </ol>
        </section>
        
        <section className="n400-section">
          <h2>Preparation Resources</h2>
          <p>
            While this app focuses primarily on helping you prepare for the naturalization test, 
            here are some resources to help with your N-400 application:
          </p>
          <ul className="resource-links">
            <li>
              <a 
                href="https://www.uscis.gov/n-400" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="external-link"
              >
                USCIS N-400 Page
              </a>
            </li>
            <li>
              <a 
                href="https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="external-link"
              >
                USCIS Naturalization Interview and Test Information
              </a>
            </li>
            <li>
              <a 
                href="https://www.uscis.gov/tools/find-help-in-your-community/find-help-in-your-community" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="external-link"
              >
                Find Legal Help in Your Community
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default N400Page;
