/**
 * Questions about current government officials that may change over time
 * These questions are separated to make updates easier
 * Last Updated: May 2025
 */

export const officialQuestions = [
  {
    id: 20,
    question: "Who is one of your state's U.S. Senators now?",
    answer: "Alex Padilla (D)\nAdam Schiff (D) (California)",
    notes: "For the applicant's state, the USCIS Officer will read the name of one of the state's current U.S. Senators. The applicant must name one of the state's two current U.S. Senators. Visit senate.gov to find your state's U.S. Senators.",
    needsRegularUpdate: true,
    lastUpdated: "2025-05-06",
    category: "american-government",
    subcategory: "system-of-government",
    is65Plus: false
  },
  {
    id: 23,
    question: "Name your U.S. Representative.",
    answer: "Young Kim (R) (Orange County, CA)\nKatie Porter (D) (Orange County, CA)",
    notes: "The applicant must name their U.S. Representative. Visit house.gov to find your U.S. Representative.",
    needsRegularUpdate: true,
    lastUpdated: "2025-05-06",
    category: "american-government",
    subcategory: "system-of-government",
    is65Plus: false
  },
  {
    id: 28,
    question: "What is the name of the President of the United States now?",
    answer: "Donald J. Trump",
    notes: "The applicant must name the current President of the United States.",
    needsRegularUpdate: true,
    lastUpdated: "2025-05-01",
    category: "american-government",
    subcategory: "system-of-government",
    is65Plus: true
  },
  {
    id: 29,
    question: "What is the name of the Vice President of the United States now?",
    answer: "JD Vance",
    notes: "The applicant must name the current Vice President of the United States.",
    needsRegularUpdate: true,
    lastUpdated: "2025-05-01",
    category: "american-government",
    subcategory: "system-of-government",
    is65Plus: true
  },
  {
    id: 47,
    question: "What is the name of the Speaker of the House of Representatives now?",
    answer: "Mike Johnson",
    notes: "The applicant must name the current Speaker of the House of Representatives.",
    needsRegularUpdate: true,
    lastUpdated: "2025-05-06",
    category: "american-government",
    subcategory: "system-of-government",
    is65Plus: false
  },
  {
    id: 48,
    question: "Who is the Governor of your state now?",
    answer: "Gavin Newsom (D)",
    notes: "For the applicant's state, the USCIS Officer will read the name of the current Governor. The applicant must name the current Governor of their state.",
    needsRegularUpdate: true,
    lastUpdated: "2025-05-01",
    category: "american-government",
    subcategory: "system-of-government",
    is65Plus: false
  },
  {
    id: 88,
    question: "Name one of the two longest rivers in the United States.",
    answer: "Missouri (River)\nMississippi (River)",
    notes: "The applicant must name one of the two longest rivers in the United States. Both the Missouri River and the Mississippi River are acceptable answers.",
    needsRegularUpdate: false,
    lastUpdated: "2020-12-01",
    category: "integrated-civics",
    subcategory: "geography",
    is65Plus: false
  },
  {
    id: 91,
    question: "Name one U.S. territory.",
    answer: "Puerto Rico\nU.S. Virgin Islands\nAmerican Samoa\nNorthern Mariana Islands\nGuam",
    notes: "The applicant must name one U.S. territory. Acceptable answers include Puerto Rico, U.S. Virgin Islands, American Samoa, Northern Mariana Islands, and Guam.",
    needsRegularUpdate: false,
    lastUpdated: "2020-12-01",
    category: "integrated-civics",
    subcategory: "geography",
    is65Plus: false
  }
];

/**
 * Get all questions that need regular updates
 * @returns {Array} - Array of questions that need regular updates
 */
export const getQuestionsNeedingUpdates = () => {
  return officialQuestions.filter(question => question.needsRegularUpdate);
};

/**
 * Get questions by category
 * @param {string} category - Category ID
 * @returns {Array} - Array of questions in the specified category
 */
export const getOfficialQuestionsByCategory = (category) => {
  return officialQuestions.filter(question => question.category === category);
};

/**
 * Get questions for seniors (65+ years and 20+ years of permanent residence)
 * @returns {Array} - Array of questions for seniors
 */
export const getOfficialQuestionsFor65Plus = () => {
  return officialQuestions.filter(question => question.is65Plus);
};
