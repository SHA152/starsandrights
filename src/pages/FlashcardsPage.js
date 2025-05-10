import React, { useState, useEffect, useRef } from 'react';
import { getAllQuestions, getQuestionsByCategory, getQuestionsFor65Plus } from '../data/civicsQuestions';
import { categories } from '../data/questionCategories';
import ScrollReveal from '../components/common/ScrollReveal';

/**
 * Flashcards page component
 * @returns {JSX.Element} FlashcardsPage component
 */
const FlashcardsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showSeniorQuestions, setShowSeniorQuestions] = useState(false);
  const [isCardReady, setIsCardReady] = useState(false);
  const flashcardRef = useRef(null);
  
  // Load questions based on filters
  useEffect(() => {
    let filteredQuestions = [];
    
    if (categoryFilter === 'all') {
      filteredQuestions = getAllQuestions();
    } else if (categoryFilter === 'senior') {
      filteredQuestions = getQuestionsFor65Plus();
    } else if (categoryFilter === 'current-officials') {
      // For current officials, we need to get questions from officialQuestions that need regular updates
      filteredQuestions = getAllQuestions().filter(q => q.needsRegularUpdate === true);
    } else {
      filteredQuestions = getQuestionsByCategory(categoryFilter);
    }
    
    if (showSeniorQuestions && categoryFilter !== 'senior') {
      filteredQuestions = filteredQuestions.filter(q => q.is65Plus);
    }
    
    // Shuffle the questions
    filteredQuestions = [...filteredQuestions].sort(() => 0.5 - Math.random());
    
    setQuestions(filteredQuestions);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [categoryFilter, showSeniorQuestions]);
  
  // Handle card ready animation
  useEffect(() => {
    if (questions.length > 0) {
      setIsCardReady(false);
      const timer = setTimeout(() => {
        setIsCardReady(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, questions]);
  
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  const handleShuffle = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };
  
  return (
    <div className="flashcards-page">
      <ScrollReveal>
        <div className="flashcards-header">
          <h1>Flashcards</h1>
          <p>Study the citizenship test questions with flashcards</p>
        </div>
      </ScrollReveal>
      
      <ScrollReveal stagger={true}>
        <div className="filter-group">
          <h3>Category</h3>
          <div className="filter-dropdown-container">
            <select 
              className="filter-dropdown"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">All Questions</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
              <option value="senior">65/20 Special Questions</option>
            </select>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal>
        <div className="filter-group">
          <h3>Options</h3>
          <div className="enhanced-content-toggle">
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={showSeniorQuestions}
                onChange={() => setShowSeniorQuestions(!showSeniorQuestions)}
              />
              <span className="toggle-slider"></span>
            </label>
            <span>Show Only 65/20 Questions</span>
          </div>
        </div>
      </ScrollReveal>
      
      {questions.length > 0 ? (
        <>
          <ScrollReveal>
            <div 
              className={`flashcard-container ${isCardReady ? 'flashcard-ready' : ''}`} 
              onClick={handleFlip}
              ref={flashcardRef}
            >
              <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
                <div className="flashcard-front">
                  <div className="question-number">Question {questions[currentIndex].id}</div>
                  <div className="question-text">{questions[currentIndex].question}</div>
                  <div className="flashcard-hint">Click to see answer</div>
                </div>
                <div className="flashcard-back">
                  <div className="answer-text">
                    {questions[currentIndex].answer.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                  {questions[currentIndex].is65Plus && (
                    <div className="senior-badge">65/20 Special Question</div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flashcards-progress">
              Card {currentIndex + 1} of {questions.length}
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="flashcards-controls">
              <button 
                className="btn secondary"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                Previous
              </button>
              <button 
                className="btn primary"
                onClick={handleFlip}
              >
                Flip Card
              </button>
              <button 
                className="btn secondary"
                onClick={handleNext}
                disabled={currentIndex === questions.length - 1}
              >
                Next
              </button>
              <button 
                className="btn secondary"
                onClick={handleShuffle}
              >
                Shuffle
              </button>
            </div>
          </ScrollReveal>
        </>
      ) : (
        <div className="no-questions">
          <p>No questions match the selected filters. Please try different filters.</p>
        </div>
      )}
    </div>
  );
};

export default FlashcardsPage;
