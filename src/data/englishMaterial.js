/**
 * English reading and writing materials for the U.S. Citizenship Test
 * Based on the official USCIS materials
 * Last Updated: May 2025
 */

/**
 * Reading vocabulary words that may be used in the English reading portion of the naturalization test
 * Organized by category for easier studying
 */
export const readingVocabulary = {
  people: [
    "Abraham Lincoln",
    "George Washington",
    "Presidents",
    "American Indians",
    "Citizens"
  ],
  civics: [
    "American flag",
    "Bill of Rights",
    "Capital",
    "Citizens",
    "Civil War",
    "Congress",
    "Constitution",
    "Father of Our Country",
    "Government",
    "President",
    "Right",
    "Senators",
    "Supreme Court",
    "United States",
    "U.S."
  ],
  places: [
    "Alaska",
    "California",
    "Canada",
    "Delaware",
    "Mexico",
    "New York City",
    "United States",
    "Washington",
    "Washington, D.C."
  ],
  holidays: [
    "Presidents' Day",
    "Memorial Day",
    "Flag Day",
    "Independence Day",
    "Labor Day",
    "Columbus Day",
    "Thanksgiving"
  ],
  question_words: [
    "How",
    "What",
    "When",
    "Where",
    "Who",
    "Why"
  ],
  verbs: [
    "Can",
    "Come",
    "Do/Does",
    "Elects",
    "Have/Has",
    "Is/Are/Was/Be",
    "Lives",
    "Meet",
    "Name",
    "Pay",
    "Vote",
    "Want"
  ],
  other_function_words: [
    "A",
    "An",
    "And",
    "During",
    "For",
    "From",
    "In",
    "Of",
    "On",
    "The",
    "To",
    "We"
  ],
  months: [
    "February",
    "May",
    "June",
    "July",
    "September",
    "October",
    "November"
  ],
  numbers: [
    "Fifty/50",
    "One/1",
    "One hundred/100",
    "First",
    "Second",
    "Third"
  ]
};

/**
 * Writing vocabulary words that may be used in the English writing portion of the naturalization test
 * Organized by category for easier studying
 */
export const writingVocabulary = {
  people: [
    "Adams",
    "Lincoln",
    "Washington"
  ],
  civics: [
    "American Indians",
    "Capital",
    "Citizens",
    "Civil War",
    "Congress",
    "Dollar bill",
    "Flag",
    "Free",
    "Freedom of speech",
    "President",
    "Right",
    "Senators",
    "State/States",
    "White House"
  ],
  places: [
    "Alaska",
    "California",
    "Canada",
    "Country",
    "Mexico",
    "New York",
    "United States",
    "U.S."
  ],
  months: [
    "February",
    "May",
    "June",
    "July",
    "September",
    "October",
    "November"
  ],
  holidays: [
    "Presidents' Day",
    "Memorial Day",
    "Flag Day",
    "Independence Day",
    "Labor Day",
    "Columbus Day",
    "Thanksgiving"
  ],
  verbs: [
    "Can",
    "Come",
    "Elect",
    "Have/Has",
    "Is/Was/Be",
    "Lives",
    "Meets",
    "Pay",
    "Vote",
    "Want"
  ],
  other_function_words: [
    "A",
    "And",
    "During",
    "For",
    "Here",
    "In",
    "Of",
    "On",
    "The",
    "To",
    "We"
  ],
  numbers: [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Fifty",
    "One hundred"
  ]
};

/**
 * Example sentences for the reading portion of the naturalization test
 */
export const readingSentences = [
  {
    category: "people",
    sentences: [
      "Abraham Lincoln was President.",
      "George Washington was the first President.",
      "The Presidents live in the White House.",
      "American Indians lived here first.",
      "Citizens have the right to vote."
    ]
  },
  {
    category: "civics",
    sentences: [
      "We honor the American flag.",
      "The Bill of Rights protects our liberties.",
      "The capital of the United States is Washington, D.C.",
      "Citizens have the right to vote.",
      "The Civil War ended in 1865.",
      "Congress makes laws.",
      "The Constitution begins with 'We the People.'",
      "George Washington is the Father of Our Country.",
      "The government of the people, by the people, for the people.",
      "The President lives in the White House.",
      "Voting is a right of all citizens.",
      "We elect Senators for six years.",
      "The Supreme Court has nine justices.",
      "The United States has 50 states.",
      "The U.S. flag has 50 stars."
    ]
  },
  {
    category: "places",
    sentences: [
      "Alaska is the largest state.",
      "California has the most people.",
      "Canada is north of the United States.",
      "Delaware was the first state.",
      "Mexico is south of the United States.",
      "New York City was the first capital.",
      "The United States has 50 states.",
      "Washington is a state.",
      "Washington, D.C. is the capital."
    ]
  },
  {
    category: "holidays",
    sentences: [
      "Presidents' Day is in February.",
      "Memorial Day is in May.",
      "Flag Day is in June.",
      "Independence Day is in July.",
      "Labor Day is in September.",
      "Columbus Day is in October.",
      "Thanksgiving is in November."
    ]
  }
];

/**
 * Example sentences for the writing portion of the naturalization test
 */
export const writingSentences = [
  {
    category: "civics",
    sentences: [
      "The capital is Washington, D.C.",
      "Congress makes laws.",
      "I want to be a citizen.",
      "The flag has 50 stars.",
      "The President lives in the White House.",
      "We pay taxes.",
      "The United States has 50 states."
    ]
  },
  {
    category: "rights",
    sentences: [
      "Citizens have the right to vote.",
      "Freedom of speech is a right.",
      "The people elect Congress.",
      "We live in a free country."
    ]
  },
  {
    category: "geography",
    sentences: [
      "Alaska is the largest state.",
      "California has the most people.",
      "Canada is north of the United States.",
      "Mexico is south of the United States."
    ]
  },
  {
    category: "history",
    sentences: [
      "Abraham Lincoln was President.",
      "American Indians lived here first.",
      "George Washington was the first President.",
      "The Civil War was in the 1800s."
    ]
  },
  {
    category: "holidays",
    sentences: [
      "Independence Day is in July.",
      "Labor Day is in September.",
      "Presidents' Day is in February.",
      "Thanksgiving is in November."
    ]
  }
];

/**
 * Get all reading vocabulary as a flat array
 * @returns {Array} - Array of all reading vocabulary words
 */
export const getAllReadingVocabulary = () => {
  return Object.values(readingVocabulary).flat();
};

/**
 * Get all writing vocabulary as a flat array
 * @returns {Array} - Array of all writing vocabulary words
 */
export const getAllWritingVocabulary = () => {
  return Object.values(writingVocabulary).flat();
};

/**
 * Get reading vocabulary by category
 * @param {string} category - Category name
 * @returns {Array} - Array of vocabulary words in the specified category
 */
export const getReadingVocabularyByCategory = (category) => {
  return readingVocabulary[category] || [];
};

/**
 * Get writing vocabulary by category
 * @param {string} category - Category name
 * @returns {Array} - Array of vocabulary words in the specified category
 */
export const getWritingVocabularyByCategory = (category) => {
  return writingVocabulary[category] || [];
};

/**
 * Get reading sentences by category
 * @param {string} category - Category name
 * @returns {Array} - Array of sentences in the specified category
 */
export const getReadingSentencesByCategory = (category) => {
  const categoryGroup = readingSentences.find(group => group.category === category);
  return categoryGroup ? categoryGroup.sentences : [];
};

/**
 * Get writing sentences by category
 * @param {string} category - Category name
 * @returns {Array} - Array of sentences in the specified category
 */
export const getWritingSentencesByCategory = (category) => {
  const categoryGroup = writingSentences.find(group => group.category === category);
  return categoryGroup ? categoryGroup.sentences : [];
};

/**
 * Get all reading sentences as a flat array
 * @returns {Array} - Array of all reading sentences
 */
export const getAllReadingSentences = () => {
  return readingSentences.map(group => group.sentences).flat();
};

/**
 * Get all writing sentences as a flat array
 * @returns {Array} - Array of all writing sentences
 */
export const getAllWritingSentences = () => {
  return writingSentences.map(group => group.sentences).flat();
};

/**
 * Get a random set of reading vocabulary words
 * @param {number} count - Number of words to include
 * @returns {Array} - Array of random reading vocabulary words
 */
export const getRandomReadingVocabulary = (count = 10) => {
  const allWords = getAllReadingVocabulary();
  const shuffled = [...allWords].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * Get a random set of writing vocabulary words
 * @param {number} count - Number of words to include
 * @returns {Array} - Array of random writing vocabulary words
 */
export const getRandomWritingVocabulary = (count = 10) => {
  const allWords = getAllWritingVocabulary();
  const shuffled = [...allWords].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * Get a random set of reading sentences
 * @param {number} count - Number of sentences to include
 * @returns {Array} - Array of random reading sentences
 */
export const getRandomReadingSentences = (count = 5) => {
  const allSentences = getAllReadingSentences();
  const shuffled = [...allSentences].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * Get a random set of writing sentences
 * @param {number} count - Number of sentences to include
 * @returns {Array} - Array of random writing sentences
 */
export const getRandomWritingSentences = (count = 5) => {
  const allSentences = getAllWritingSentences();
  const shuffled = [...allSentences].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
