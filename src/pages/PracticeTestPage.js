import React, { useState, useEffect } from 'react';
import { getRandomQuestionsForTest, getQuestionsFor65Plus } from '../data/civicsQuestions';

/**
 * Practice Test page component
 * @returns {JSX.Element} PracticeTestPage component
 */
const PracticeTestPage = () => {
  const [testMode, setTestMode] = useState(null); // 'standard', 'senior', or null
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answers, setAnswers] = useState({});
  const [testComplete, setTestComplete] = useState(false);
  const [score, setScore] = useState(0);
  
  // Generate test questions when test mode is selected
  useEffect(() => {
    if (testMode === 'standard') {
      setQuestions(getRandomQuestionsForTest(10));
    } else if (testMode === 'senior') {
      const seniorQuestions = getQuestionsFor65Plus();
      const shuffled = [...seniorQuestions].sort(() => 0.5 - Math.random());
      setQuestions(shuffled.slice(0, 10));
    }
    
    setCurrentIndex(0);
    setShowAnswer(false);
    setAnswers({});
    setTestComplete(false);
    setScore(0);
  }, [testMode]);
  
  const handleStartTest = (mode) => {
    setTestMode(mode);
  };
  
  const handleShowAnswer = () => {
    setShowAnswer(true);
  };
  
  const handleMarkAnswer = (isCorrect) => {
    const newAnswers = { ...answers, [currentIndex]: isCorrect };
    setAnswers(newAnswers);
    
    // Move to next question or complete test
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    } else {
      // Calculate score
      const correctCount = Object.values(newAnswers).filter(val => val).length;
      setScore(correctCount);
      setTestComplete(true);
    }
  };
  
  const handleRestartTest = () => {
    setTestMode(null);
  };
  
  const renderTestSelection = () => (
    <div className="test-selection">
      <h2>Select Test Type</h2>
      <div className="test-options">
        <div className="option-card" onClick={() => handleStartTest('standard')}>
          <h3>Standard Test</h3>
          <p>10 random questions from the full set of 100 civics questions.</p>
          <p>You need to answer 6 out of 10 questions correctly to pass.</p>
          <button className="btn primary">Start Standard Test</button>
        </div>
        
        <div className="option-card" onClick={() => handleStartTest('senior')}>
          <h3>65/20 Special Test</h3>
          <p>10 random questions from the reduced set for applicants who are 65+ years old and have been a permanent resident for 20+ years.</p>
          <p>You need to answer 6 out of 10 questions correctly to pass.</p>
          <button className="btn primary">Start 65/20 Test</button>
        </div>
      </div>
    </div>
  );
  
  const renderQuestion = () => {
    // Check if questions array is empty or currentIndex is out of bounds
    if (questions.length === 0 || currentIndex >= questions.length) {
      return (
        <div className="loading-message">
          <p>Loading questions...</p>
        </div>
      );
    }

    // Get the current question
    const currentQuestion = questions[currentIndex];

    return (
      <div className="practice-question">
        <div className="test-progress">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="question-card">
          <div className="question-number">Question {currentQuestion.id}</div>
          <div className="question-text">{currentQuestion.question}</div>
          
          {showAnswer ? (
            <div className="answer-section">
              <div className="answer-text">
                {currentQuestion.answer.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
              
              <div className="answer-buttons">
                <p>Did you answer correctly?</p>
                <div className="answer-options">
                  <button 
                    className="btn primary"
                    onClick={() => handleMarkAnswer(true)}
                  >
                    Yes, I got it right
                  </button>
                  <button 
                    className="btn secondary"
                    onClick={() => handleMarkAnswer(false)}
                  >
                    No, I got it wrong
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="show-answer-button">
              <button 
                className="btn primary"
                onClick={handleShowAnswer}
              >
                Show Answer
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const renderResults = () => {
    const passed = score >= 6;
    
    return (
      <div className="results-container">
        <h2>Test Results</h2>
        
        <div className="results-score">
          {passed ? (
            <div className="celebration">🎉</div>
          ) : null}
          <div>You scored {score} out of 10</div>
        </div>
        
        <div className="results-message">
          {passed ? (
            <p>Congratulations! You passed the test. You need 6 correct answers to pass the actual citizenship test.</p>
          ) : (
            <p>You need at least 6 correct answers to pass. Keep studying and try again!</p>
          )}
        </div>
        
        <div className="results-actions">
          <button 
            className="btn primary"
            onClick={() => handleStartTest(testMode)}
          >
            Take Another {testMode === 'senior' ? '65/20' : 'Standard'} Test
          </button>
          <button 
            className="btn secondary"
            onClick={handleRestartTest}
          >
            Return to Test Selection
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="practice-page">
      <div className="practice-header">
        <h1>Practice Test</h1>
        <p>Take a simulated citizenship test to gauge your readiness</p>
      </div>
      
      {testMode === null && renderTestSelection()}
      {testMode !== null && !testComplete && renderQuestion()}
      {testComplete && renderResults()}
    </div>
  );
};

export default PracticeTestPage;
