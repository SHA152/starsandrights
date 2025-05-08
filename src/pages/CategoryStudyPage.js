import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  getQuestionsByCategory, 
  getQuestionsBySubcategory,
  getQuestionsFor65Plus, 
  getCommonlyMissedQuestions 
} from '../data/civicsQuestions';
import { categories, getAllSubcategories } from '../data/questionCategories';

/**
 * Category Study page component
 * @returns {JSX.Element} CategoryStudyPage component
 */
const CategoryStudyPage = () => {
  const { categoryId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  
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
    
    setQuestions(fetchedQuestions);
    setCategoryName(name);
    setCategoryDescription(description);
  }, [categoryId]);
  
  return (
    <div className="category-study-page">
      <div className="category-study-header">
        <Link to="/study" className="back-link">
          &larr; Back to Categories
        </Link>
        <h1>{categoryName}</h1>
        <p>{categoryDescription}</p>
        <p className="question-count">{questions.length} questions</p>
      </div>
      
      <div className="question-list">
        {questions.map(question => (
          <div key={question.id} className="question-card">
            <div className="question-number">Question {question.id}</div>
            <div className="question-text">{question.question}</div>
            <div className="answer-text">
              {question.answer.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
            {question.is65Plus && (
              <div className="question-badge">65/20 Special Question</div>
            )}
            {question.commonlyMissed && (
              <div className="question-badge commonly-missed">Commonly Missed</div>
            )}
          </div>
        ))}
      </div>
      
      {questions.length === 0 && (
        <div className="no-questions">
          <p>No questions found for this category. Please try another category.</p>
          <Link to="/study" className="btn primary">
            Back to Study
          </Link>
        </div>
      )}
    </div>
  );
};

export default CategoryStudyPage;
