import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories, getAllSubcategories } from '../data/questionCategories';
import { getQuestionsByCategory, getQuestionsBySubcategory, getQuestionsFor65Plus, getCommonlyMissedQuestions } from '../data/civicsQuestions';
import ScrollReveal from '../components/common/ScrollReveal';

/**
 * Study page component
 * @returns {JSX.Element} StudyPage component
 */
const StudyPage = () => {
  // const [activeFilter, setActiveFilter] = useState('all'); // For future use with additional filters
  const [activeDifficulty, setActiveDifficulty] = useState('all');
  const [showSeniorQuestions, setShowSeniorQuestions] = useState(false);
  const [showCommonlyMissed, setShowCommonlyMissed] = useState(false);
  const [showEnhancedContent, setShowEnhancedContent] = useState(false);
  
  const subcategories = getAllSubcategories();
  
  // Save filter preferences to localStorage
  useEffect(() => {
    const savedPreferences = localStorage.getItem('studyPreferences');
    if (savedPreferences) {
      const preferences = JSON.parse(savedPreferences);
      setActiveDifficulty(preferences.difficulty || 'all');
      setShowSeniorQuestions(preferences.senior || false);
      setShowCommonlyMissed(preferences.missed || false);
      setShowEnhancedContent(preferences.enhanced || false);
    }
  }, []);
  
  // Update localStorage when preferences change
  useEffect(() => {
    const preferences = {
      difficulty: activeDifficulty,
      senior: showSeniorQuestions,
      missed: showCommonlyMissed,
      enhanced: showEnhancedContent
    };
    localStorage.setItem('studyPreferences', JSON.stringify(preferences));
  }, [activeDifficulty, showSeniorQuestions, showCommonlyMissed, showEnhancedContent]);
  
  // Build query string for filter parameters
  const getFilterQueryString = () => {
    const params = new URLSearchParams();
    if (activeDifficulty !== 'all') {
      params.append('difficulty', activeDifficulty);
    }
    if (showSeniorQuestions) {
      params.append('senior', 'true');
    }
    if (showCommonlyMissed) {
      params.append('missed', 'true');
    }
    if (showEnhancedContent) {
      params.append('enhanced', 'true');
    }
    
    const queryString = params.toString();
    return queryString ? `?${queryString}` : '';
  };
  
  return (
    <div className="study-page">
      <ScrollReveal>
        <div className="study-header">
          <h1>Study by Category</h1>
          <p>Select a category to study the official citizenship test questions</p>
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div className="filter-group">
          <h3>Filter Options</h3>
          <div className="filter-options">
            <button 
              className={`filter-option ${showSeniorQuestions ? 'active' : ''}`}
              onClick={() => setShowSeniorQuestions(!showSeniorQuestions)}
            >
              65/20 Special Questions
            </button>
            <button 
              className={`filter-option ${showCommonlyMissed ? 'active' : ''}`}
              onClick={() => setShowCommonlyMissed(!showCommonlyMissed)}
            >
              Commonly Missed
            </button>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div className="filter-group">
          <h3>Difficulty</h3>
          <div className="filter-options">
            <button 
              className={`filter-option ${activeDifficulty === 'all' ? 'active' : ''}`}
              onClick={() => setActiveDifficulty('all')}
            >
              All
            </button>
            <button 
              className={`filter-option ${activeDifficulty === 'easy' ? 'active' : ''}`}
              onClick={() => setActiveDifficulty('easy')}
            >
              Easy
            </button>
            <button 
              className={`filter-option ${activeDifficulty === 'medium' ? 'active' : ''}`}
              onClick={() => setActiveDifficulty('medium')}
            >
              Medium
            </button>
            <button 
              className={`filter-option ${activeDifficulty === 'hard' ? 'active' : ''}`}
              onClick={() => setActiveDifficulty('hard')}
            >
              Hard
            </button>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div className="filter-group">
          <h3>Content Display</h3>
          <div className="enhanced-content-toggle study-page-toggle">
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={showEnhancedContent}
                onChange={() => setShowEnhancedContent(!showEnhancedContent)}
              />
              <span className="toggle-slider"></span>
            </label>
            <span>Always Show Why This Matters</span>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <section className="main-categories">
          <h2>Main Categories</h2>
          <div className="categories-grid">
            {categories.map(category => {
              // Get question count based on filters
              let questionCount;
              
              // Special case for current-officials category
              if (category.id === 'current-officials') {
                questionCount = getQuestionsByCategory('american-government').filter(q => 
                  q.question.toLowerCase().includes('president') || 
                  q.question.toLowerCase().includes('vice president') || 
                  q.question.toLowerCase().includes('speaker') ||
                  q.question.toLowerCase().includes('chief justice') ||
                  q.question.toLowerCase().includes('governor')
                ).length;
                
                // Apply filters to officials questions
                if (showSeniorQuestions) {
                  questionCount = getQuestionsByCategory('american-government')
                    .filter(q => 
                      (q.question.toLowerCase().includes('president') || 
                      q.question.toLowerCase().includes('vice president') || 
                      q.question.toLowerCase().includes('speaker') ||
                      q.question.toLowerCase().includes('chief justice') ||
                      q.question.toLowerCase().includes('governor')) && 
                      q.is65Plus
                    ).length;
                }
                if (showCommonlyMissed) {
                  questionCount = getQuestionsByCategory('american-government')
                    .filter(q => 
                      (q.question.toLowerCase().includes('president') || 
                      q.question.toLowerCase().includes('vice president') || 
                      q.question.toLowerCase().includes('speaker') ||
                      q.question.toLowerCase().includes('chief justice') ||
                      q.question.toLowerCase().includes('governor')) && 
                      q.commonlyMissed
                    ).length;
                }
                if (activeDifficulty !== 'all') {
                  questionCount = getQuestionsByCategory('american-government')
                    .filter(q => 
                      (q.question.toLowerCase().includes('president') || 
                      q.question.toLowerCase().includes('vice president') || 
                      q.question.toLowerCase().includes('speaker') ||
                      q.question.toLowerCase().includes('chief justice') ||
                      q.question.toLowerCase().includes('governor')) && 
                      q.difficulty === activeDifficulty
                    ).length;
                }
              } else {
                // Normal case for other categories
                questionCount = getQuestionsByCategory(category.id).length;
                if (showSeniorQuestions) {
                  questionCount = getQuestionsByCategory(category.id).filter(q => q.is65Plus).length;
                }
                if (showCommonlyMissed) {
                  questionCount = getQuestionsByCategory(category.id).filter(q => q.commonlyMissed).length;
                }
                if (activeDifficulty !== 'all') {
                  questionCount = getQuestionsByCategory(category.id).filter(q => q.difficulty === activeDifficulty).length;
                }
              }
              
              const queryString = getFilterQueryString();
              
              return (
                <div key={category.id} className="category-card">
                  <div className="category-icon">{category.icon}</div>
                  <h3 className="category-title">{category.name}</h3>
                  <p className="category-description">{category.description}</p>
                  <p className="category-count">{questionCount} questions</p>
                  <Link to={`/study/${category.id}${queryString}`} className="btn primary">
                    Study This Category
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </ScrollReveal>
      
      <ScrollReveal>
        <section className="subcategories">
          <h2>Subcategories</h2>
          <div className="categories-grid">
            {subcategories.map(subcategory => {
              // Get question count based on filters
              let questionCount = getQuestionsBySubcategory(subcategory.id).length;
              if (showSeniorQuestions) {
                questionCount = getQuestionsBySubcategory(subcategory.id).filter(q => q.is65Plus).length;
              }
              if (showCommonlyMissed) {
                questionCount = getQuestionsBySubcategory(subcategory.id).filter(q => q.commonlyMissed).length;
              }
              if (activeDifficulty !== 'all') {
                questionCount = getQuestionsBySubcategory(subcategory.id).filter(q => q.difficulty === activeDifficulty).length;
              }
              
              const queryString = getFilterQueryString();
              
              return (
                <div key={subcategory.id} className="category-card">
                  <h3 className="category-title">{subcategory.name}</h3>
                  <p className="category-description">{subcategory.description}</p>
                  <p className="category-parent">Part of: {subcategory.parentName}</p>
                  <p className="category-count">{questionCount} questions</p>
                  <Link to={`/study/${subcategory.id}${queryString}`} className="btn primary">
                    Study This Subcategory
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </ScrollReveal>
      
      <ScrollReveal>
        <section className="special-categories">
          <h2>Special Question Sets</h2>
          <div className="categories-grid">
            <div className="category-card">
              <h3 className="category-title">65/20 Special Questions</h3>
              <p className="category-description">
                Questions for applicants who are 65 years or older and have been a permanent resident for 20+ years.
              </p>
              <p className="category-count">{getQuestionsFor65Plus().length} questions</p>
              <Link to={`/study/senior${getFilterQueryString()}`} className="btn primary">
                Study These Questions
              </Link>
            </div>
            
            <div className="category-card">
              <h3 className="category-title">Commonly Missed Questions</h3>
              <p className="category-description">
                Questions that applicants frequently answer incorrectly on the citizenship test.
              </p>
              <p className="category-count">{getCommonlyMissedQuestions().length} questions</p>
              <Link to={`/study/missed${getFilterQueryString()}`} className="btn primary">
                Study These Questions
              </Link>
            </div>
            
            <div className="category-card">
              <h3 className="category-title">Questions About Officials</h3>
              <p className="category-description">
                Questions about current government officials that may change over time.
              </p>
              <p className="category-count">
                {getQuestionsByCategory('american-government').filter(q => 
                  q.question.toLowerCase().includes('president') || 
                  q.question.toLowerCase().includes('vice president') || 
                  q.question.toLowerCase().includes('speaker') ||
                  q.question.toLowerCase().includes('chief justice') ||
                  q.question.toLowerCase().includes('governor')
                ).length} questions
              </p>
              <Link to={`/study/officials${getFilterQueryString()}`} className="btn primary">
                Study These Questions
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default StudyPage;
