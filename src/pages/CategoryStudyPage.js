import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { 
  getQuestionsByCategory, 
  getQuestionsBySubcategory,
  getQuestionsFor65Plus, 
  getCommonlyMissedQuestions,
  getQuestionsByDifficulty
} from '../data/civicsQuestions';
import { categories, getAllSubcategories } from '../data/questionCategories';
import { getEnhancedContent } from '../data/enhancedQuestionContent';
import ScrollReveal from '../components/common/ScrollReveal';

/**
 * Category Study page component
 * @returns {JSX.Element} CategoryStudyPage component
 */
const CategoryStudyPage = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [showEnhancedContent, setShowEnhancedContent] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const pageRef = useRef(null);
  
  // Parse query parameters for filters
  const queryParams = new URLSearchParams(location.search);
  const difficultyFilter = queryParams.get('difficulty') || 'all';
  const seniorFilter = queryParams.get('senior') === 'true';
  const missedFilter = queryParams.get('missed') === 'true';
  
  // Scroll to top when component mounts
  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [categoryId]);
  
  useEffect(() => {
    let fetchedQuestions = [];
    let name = '';
    let description = '';
    
    // Fetch questions based on category ID
    if (categoryId === 'senior') {
      fetchedQuestions = getQuestionsFor65Plus();
      name = '65/20 Special Questions';
      description = 'Questions for applicants who are 65 years or older and have been a permanent resident for 20+ years.';
    } else if (categoryId === 'missed') {
      fetchedQuestions = getCommonlyMissedQuestions();
      name = 'Commonly Missed Questions';
      description = 'Questions that applicants frequently answer incorrectly on the citizenship test.';
    } else if (categoryId === 'officials' || categoryId === 'current-officials') {
      // For officials, we need to filter questions about officials
      fetchedQuestions = getQuestionsByCategory('american-government').filter(q => 
        q.question.toLowerCase().includes('president') || 
        q.question.toLowerCase().includes('vice president') || 
        q.question.toLowerCase().includes('speaker') ||
        q.question.toLowerCase().includes('chief justice') ||
        q.question.toLowerCase().includes('governor')
      );
      name = 'Questions About Officials';
      description = 'Questions about current government officials that may change over time.';
    } else {
      // Check if it's a main category
      const mainCategory = categories.find(cat => cat.id === categoryId);
      if (mainCategory) {
        fetchedQuestions = getQuestionsByCategory(categoryId);
        name = mainCategory.name;
        description = mainCategory.description;
      } else {
        // Check if it's a subcategory
        const allSubcategories = getAllSubcategories();
        const subcategory = allSubcategories.find(subcat => subcat.id === categoryId);
        if (subcategory) {
          fetchedQuestions = getQuestionsBySubcategory(categoryId);
          name = subcategory.name;
          description = subcategory.description;
        }
      }
    }
    
    // Apply filters from query parameters
    if (difficultyFilter !== 'all') {
      fetchedQuestions = fetchedQuestions.filter(q => q.difficulty === difficultyFilter);
    }
    
    if (seniorFilter) {
      fetchedQuestions = fetchedQuestions.filter(q => q.is65Plus);
    }
    
    if (missedFilter) {
      fetchedQuestions = fetchedQuestions.filter(q => q.commonlyMissed);
    }
    
    setQuestions(fetchedQuestions);
    setCategoryName(name);
    setCategoryDescription(description);
  }, [categoryId, difficultyFilter, seniorFilter, missedFilter]);
  
  // Toggle enhanced content for all questions
  const toggleEnhancedContent = () => {
    setShowEnhancedContent(!showEnhancedContent);
    
    // If turning on enhanced content, expand all questions
    // If turning off, collapse all questions
    if (!showEnhancedContent) {
      const newExpandedState = {};
      questions.forEach(q => {
        newExpandedState[q.id] = true;
      });
      setExpandedQuestions(newExpandedState);
    } else {
      setExpandedQuestions({});
    }
  };
  
  // Toggle expanded state for a specific question
  const toggleQuestion = (questionId) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };
  
  return (
    <div className="category-study-page" ref={pageRef}>
      <ScrollReveal>
        <div className="category-study-header">
          <Link to="/study" className="back-link">
            &larr; Back to Categories
          </Link>
          <h1>{categoryName}</h1>
          <p>{categoryDescription}</p>
          <p className="question-count">{questions.length} questions</p>
          
          <div className="enhanced-content-toggle">
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={showEnhancedContent}
                onChange={toggleEnhancedContent}
              />
              <span className="toggle-slider"></span>
            </label>
            <span>Show Enhanced Content</span>
          </div>
        </div>
      </ScrollReveal>
      
      <div className="question-list">
        {questions.map(question => {
          const enhancedContent = getEnhancedContent(question.id);
          const isExpanded = expandedQuestions[question.id];
          
          return (
            <ScrollReveal key={question.id}>
              <div className="question-card">
                <div className="question-header">
                  <div className="question-number">Question {question.id}</div>
                  {question.is65Plus && (
                    <div className="question-badge">65/20 Special Question</div>
                  )}
                  {question.commonlyMissed && (
                    <div className="question-badge commonly-missed">Commonly Missed</div>
                  )}
                </div>
                <div className="question-text">{question.question}</div>
                <div className="answer-text">
                  <strong>Official Answer:</strong>
                  {question.answer.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
                
                {enhancedContent && (
                  <div className="enhanced-content">
                    {(showEnhancedContent || isExpanded) && (
                      <>
                        <div className="why-it-matters">
                          <h4>Why It Matters</h4>
                          <p>{enhancedContent.whyItMatters}</p>
                        </div>
                        <div className="memory-device">
                          <h4>Memory Device</h4>
                          <p>{enhancedContent.memoryDevice}</p>
                        </div>
                      </>
                    )}
                    
                    {!showEnhancedContent && (
                      <button 
                        className="toggle-enhanced-btn"
                        onClick={() => toggleQuestion(question.id)}
                      >
                        {isExpanded ? 'Hide Enhanced Content' : 'Show Enhanced Content'}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
      
      {questions.length === 0 && (
        <ScrollReveal>
          <div className="no-questions">
            <p>No questions found for this category with the current filters. Please try another category or adjust your filters.</p>
            <Link to="/study" className="btn primary">
              Back to Study
            </Link>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
};

export default CategoryStudyPage;
