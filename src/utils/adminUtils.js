/**
 * Utility functions for the admin panel
 * These functions handle data operations for the admin panel
 */

/**
 * Save changes to a question
 * In a real implementation, this would update the data file
 * For now, it just logs the changes to the console
 * 
 * @param {Object} question - The question object with changes
 * @returns {Promise} - A promise that resolves when the save is complete
 */
export const saveQuestion = (question) => {
  return new Promise((resolve) => {
    console.log('Saving question:', question);
    // In a real implementation, this would update the data file
    // For example, using a backend API or local storage
    
    // Simulate a delay to show loading state
    setTimeout(() => {
      resolve({ success: true, message: 'Question saved successfully' });
    }, 500);
  });
};

/**
 * Save changes to an official question
 * These questions need regular updates as government officials change
 * 
 * @param {Object} question - The official question object with changes
 * @returns {Promise} - A promise that resolves when the save is complete
 */
export const saveOfficialQuestion = (question) => {
  return new Promise((resolve) => {
    console.log('Saving official question:', question);
    // Update the lastUpdated field
    const updatedQuestion = {
      ...question,
      lastUpdated: new Date().toISOString().split('T')[0] // Format: YYYY-MM-DD
    };
    
    // Simulate a delay to show loading state
    setTimeout(() => {
      resolve({ 
        success: true, 
        message: 'Official question updated successfully',
        question: updatedQuestion
      });
    }, 500);
  });
};

/**
 * Save changes to a vocabulary word
 * 
 * @param {string} type - The type of vocabulary ('reading' or 'writing')
 * @param {string} category - The category of the vocabulary
 * @param {string} oldWord - The original word
 * @param {string} newWord - The updated word
 * @returns {Promise} - A promise that resolves when the save is complete
 */
export const saveVocabularyWord = (type, category, oldWord, newWord) => {
  return new Promise((resolve) => {
    console.log(`Saving ${type} vocabulary word:`, { category, oldWord, newWord });
    
    // Simulate a delay to show loading state
    setTimeout(() => {
      resolve({ success: true, message: 'Vocabulary word saved successfully' });
    }, 500);
  });
};

/**
 * Save changes to a sentence
 * 
 * @param {string} type - The type of sentence ('reading' or 'writing')
 * @param {string} category - The category of the sentence
 * @param {string} oldSentence - The original sentence
 * @param {string} newSentence - The updated sentence
 * @returns {Promise} - A promise that resolves when the save is complete
 */
export const saveSentence = (type, category, oldSentence, newSentence) => {
  return new Promise((resolve) => {
    console.log(`Saving ${type} sentence:`, { category, oldSentence, newSentence });
    
    // Simulate a delay to show loading state
    setTimeout(() => {
      resolve({ success: true, message: 'Sentence saved successfully' });
    }, 500);
  });
};

/**
 * Export all questions to a JSON file
 * This allows for easy backup and editing outside the app
 * 
 * @param {Array} questions - The array of questions to export
 * @returns {Object} - An object with the JSON data and filename
 */
export const exportQuestionsToJson = (questions) => {
  const data = JSON.stringify(questions, null, 2);
  const filename = `citizenship_questions_${new Date().toISOString().split('T')[0]}.json`;
  
  // In a real implementation, this would trigger a file download
  // For now, just return the data and filename
  return { data, filename };
};

/**
 * Import questions from a JSON file
 * This allows for bulk updates from an external source
 * 
 * @param {string} jsonData - The JSON data to import
 * @returns {Promise} - A promise that resolves with the imported questions
 */
export const importQuestionsFromJson = (jsonData) => {
  return new Promise((resolve, reject) => {
    try {
      const questions = JSON.parse(jsonData);
      
      // Validate the imported data
      if (!Array.isArray(questions)) {
        throw new Error('Invalid data format. Expected an array of questions.');
      }
      
      // Check if each question has the required fields
      questions.forEach((question, index) => {
        if (!question.id || !question.question || !question.answer) {
          throw new Error(`Question at index ${index} is missing required fields.`);
        }
      });
      
      // Simulate a delay to show loading state
      setTimeout(() => {
        resolve({ 
          success: true, 
          message: `Successfully imported ${questions.length} questions`,
          questions
        });
      }, 1000);
    } catch (error) {
      reject({ success: false, message: error.message });
    }
  });
};

/**
 * Create a backup of all data
 * This allows for easy recovery in case of errors
 * 
 * @returns {Promise} - A promise that resolves when the backup is complete
 */
export const createBackup = () => {
  return new Promise((resolve) => {
    console.log('Creating backup of all data');
    
    // Simulate a delay to show loading state
    setTimeout(() => {
      resolve({ 
        success: true, 
        message: 'Backup created successfully',
        timestamp: new Date().toISOString()
      });
    }, 1000);
  });
};

/**
 * Restore data from a backup
 * This allows for recovery in case of errors
 * 
 * @param {string} backupId - The ID of the backup to restore
 * @returns {Promise} - A promise that resolves when the restore is complete
 */
export const restoreFromBackup = (backupId) => {
  return new Promise((resolve) => {
    console.log('Restoring from backup:', backupId);
    
    // Simulate a delay to show loading state
    setTimeout(() => {
      resolve({ 
        success: true, 
        message: 'Data restored successfully from backup',
        timestamp: new Date().toISOString()
      });
    }, 1500);
  });
};

/**
 * Get statistics about the questions
 * This provides insights into the data
 * 
 * @param {Array} questions - The array of questions to analyze
 * @returns {Object} - An object with statistics about the questions
 */
export const getQuestionStats = (questions) => {
  // Count questions by category
  const categoryCounts = {};
  questions.forEach(question => {
    if (!categoryCounts[question.category]) {
      categoryCounts[question.category] = 0;
    }
    categoryCounts[question.category]++;
  });
  
  // Count questions by difficulty
  const difficultyCounts = {
    easy: 0,
    medium: 0,
    hard: 0,
    unknown: 0
  };
  
  questions.forEach(question => {
    if (question.difficulty) {
      difficultyCounts[question.difficulty]++;
    } else {
      difficultyCounts.unknown++;
    }
  });
  
  // Count special questions
  const specialCounts = {
    is65Plus: questions.filter(q => q.is65Plus).length,
    commonlyMissed: questions.filter(q => q.commonlyMissed).length,
    needsRegularUpdate: questions.filter(q => q.needsRegularUpdate).length
  };
  
  return {
    total: questions.length,
    categoryCounts,
    difficultyCounts,
    specialCounts
  };
};
