import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/questionCategories';
import ScrollReveal from '../components/common/ScrollReveal';

/**
 * Home page component
 * @returns {JSX.Element} HomePage component
 */
const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Prepare for U.S. Citizenship</h1>
        <p className="hero-subtitle">
          Study the 100 official civics questions and English materials for the naturalization test
        </p>
        <div className="hero-buttons">
          <Link to="/study" className="btn primary">Start Studying</Link>
          <Link to="/practice" className="btn secondary">Take Practice Test</Link>
        </div>
      </section>

      <ScrollReveal>
        <section className="features">
          <h2>Study Tools</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Study by Category</h3>
              <p>Organize your studying by focusing on specific categories of questions.</p>
              <Link to="/study" className="feature-link">Study Now</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Flashcards</h3>
              <p>Practice with interactive flashcards to memorize questions and answers.</p>
              <Link to="/flashcards" className="feature-link">Use Flashcards</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Practice Tests</h3>
              <p>Take simulated citizenship tests to gauge your readiness.</p>
              <Link to="/practice" className="feature-link">Take Test</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔤</div>
              <h3>English Materials</h3>
              <p>Study the English reading and writing materials for the test.</p>
              <Link to="/english" className="feature-link">Study English</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Test Structure</h3>
              <p>Learn about the structure and components of the naturalization test.</p>
              <Link to="/test-structure" className="feature-link">View Test Structure</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>N-400 Form Guide</h3>
              <p>Understand the N-400 Application for Naturalization form.</p>
              <Link to="/n400" className="feature-link">View N-400 Guide</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="categories-preview">
          <h2>Question Categories</h2>
          <div className="categories-grid">
            {categories.map(category => (
              <div key={category.id} className="category-preview-card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <Link to={`/study/${category.id}`} className="category-link">
                  Study This Category
                </Link>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="info-section">
          <h2>About the U.S. Citizenship Test</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>Civics Test</h3>
              <p>
                During your naturalization interview, you will be asked up to 10 questions from the list of 
                100 civics questions. You must answer correctly 6 of the 10 questions to pass the civics test.
              </p>
            </div>
            <div className="info-card">
              <h3>English Test</h3>
              <p>
                You must demonstrate an understanding of the English language, including the ability to read, 
                write, and speak basic English. This app helps you practice with the official vocabulary and sentences.
              </p>
            </div>
            <div className="info-card">
              <h3>65/20 Special Consideration</h3>
              <p>
                If you are 65 or older and have been a permanent resident for at least 20 years, you may study 
                just <Link to="/study/senior" className="info-link">these special questions</Link>.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default HomePage;
