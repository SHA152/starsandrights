import React, { useState } from 'react';
import {
  readingVocabulary,
  writingVocabulary,
  readingSentences,
  writingSentences,
  getReadingVocabularyByCategory,
  getWritingVocabularyByCategory,
  getReadingSentencesByCategory,
  getWritingSentencesByCategory
} from '../data/englishMaterial';

/**
 * English Materials page component
 * @returns {JSX.Element} EnglishPage component
 */
const EnglishPage = () => {
  const [activeTab, setActiveTab] = useState('reading'); // 'reading' or 'writing'
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Get vocabulary categories
  const readingCategories = Object.keys(readingVocabulary);
  const writingCategories = Object.keys(writingVocabulary);
  
  // Get sentences categories (for future use)
  // const readingSentenceCategories = readingSentences.map(group => group.category);
  // const writingSentenceCategories = writingSentences.map(group => group.category);
  
  // Get vocabulary based on selected category
  const getVocabulary = () => {
    if (activeTab === 'reading') {
      return activeCategory === 'all' 
        ? Object.values(readingVocabulary).flat() 
        : getReadingVocabularyByCategory(activeCategory);
    } else {
      return activeCategory === 'all' 
        ? Object.values(writingVocabulary).flat() 
        : getWritingVocabularyByCategory(activeCategory);
    }
  };
  
  // Get sentences based on selected category
  const getSentences = () => {
    if (activeTab === 'reading') {
      return activeCategory === 'all' 
        ? readingSentences.map(group => group.sentences).flat() 
        : getReadingSentencesByCategory(activeCategory);
    } else {
      return activeCategory === 'all' 
        ? writingSentences.map(group => group.sentences).flat() 
        : getWritingSentencesByCategory(activeCategory);
    }
  };
  
  return (
    <div className="english-page">
      <div className="english-header">
        <h1>English Materials</h1>
        <p>Study the English reading and writing materials for the citizenship test</p>
      </div>
      
      <div className="english-tabs">
        <div 
          className={`english-tab ${activeTab === 'reading' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('reading');
            setActiveCategory('all');
          }}
        >
          Reading
        </div>
        <div 
          className={`english-tab ${activeTab === 'writing' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('writing');
            setActiveCategory('all');
          }}
        >
          Writing
        </div>
      </div>
      
      <div className="english-content">
        <div className="filter-group">
          <h3>Categories</h3>
          <div className="category-tabs">
            <div 
              className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </div>
            {(activeTab === 'reading' ? readingCategories : writingCategories).map(category => (
              <div 
                key={category}
                className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </div>
            ))}
          </div>
        </div>
        
        <div className="english-section">
          <h2>Vocabulary</h2>
          <p>These are the vocabulary words that may be used in the English {activeTab} portion of the naturalization test.</p>
          <div className="vocabulary-list">
            {getVocabulary().map((word, index) => (
              <div key={index} className="vocabulary-item">
                {word}
              </div>
            ))}
          </div>
        </div>
        
        <div className="english-section">
          <h2>Example Sentences</h2>
          <p>These are example sentences that may be used in the English {activeTab} portion of the naturalization test.</p>
          <div className="sentences-list">
            {getSentences().map((sentence, index) => (
              <div key={index} className="writing-example">
                {sentence}
              </div>
            ))}
          </div>
        </div>
        
        <div className="english-section">
          <h2>Tips for the English {activeTab === 'reading' ? 'Reading' : 'Writing'} Test</h2>
          {activeTab === 'reading' ? (
            <div className="tips-content">
              <p>During the reading test, you will be asked to read one sentence out of three sentences. You need to read just one sentence correctly to demonstrate your ability to read English.</p>
              <h3>Reading Test Tips:</h3>
              <ul>
                <li>Practice reading the vocabulary words and sentences out loud</li>
                <li>Focus on pronunciation and fluency</li>
                <li>Don't worry about your accent as long as your reading is understandable</li>
                <li>Take your time - there is no time limit for this portion of the test</li>
                <li>If you don't understand a word, ask the officer to repeat it</li>
              </ul>
            </div>
          ) : (
            <div className="tips-content">
              <p>During the writing test, you will be asked to write one sentence out of three sentences. You need to write just one sentence correctly to demonstrate your ability to write English.</p>
              <h3>Writing Test Tips:</h3>
              <ul>
                <li>Practice writing the vocabulary words and sentences by hand</li>
                <li>Focus on spelling, capitalization, and basic punctuation</li>
                <li>Write clearly and legibly</li>
                <li>Take your time - there is no time limit for this portion of the test</li>
                <li>If you don't understand a word, ask the officer to repeat it</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnglishPage;
