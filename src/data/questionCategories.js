/**
 * Categories for the U.S. Citizenship Test questions
 * Based on the official USCIS categorization
 */

export const categories = [
  {
    id: "american-government",
    name: "American Government",
    description: "Questions about the principles of American democracy, systems of government, and rights and responsibilities.",
    icon: "🏛️",
    subcategories: [
      {
        id: "principles-of-american-democracy",
        name: "Principles of American Democracy",
        description: "Questions about the foundations and core principles of American democracy."
      },
      {
        id: "system-of-government",
        name: "System of Government",
        description: "Questions about how the U.S. government is structured and functions."
      },
      {
        id: "rights-and-responsibilities",
        name: "Rights and Responsibilities",
        description: "Questions about the rights and responsibilities of U.S. citizens."
      }
    ]
  },
  {
    id: "american-history",
    name: "American History",
    description: "Questions about colonial period and independence, the 1800s, and recent American history.",
    icon: "🗽",
    subcategories: [
      {
        id: "colonial-period-and-independence",
        name: "Colonial Period and Independence",
        description: "Questions about early American history and the founding of the nation."
      },
      {
        id: "1800s",
        name: "The 1800s",
        description: "Questions about American history during the 19th century."
      },
      {
        id: "recent-american-history",
        name: "Recent American History",
        description: "Questions about American history from the 1900s to present day."
      }
    ]
  },
  {
    id: "integrated-civics",
    name: "Integrated Civics",
    description: "Questions about geography, symbols, and holidays of the United States.",
    icon: "🦅",
    subcategories: [
      {
        id: "geography",
        name: "Geography",
        description: "Questions about U.S. geography and territorial divisions."
      },
      {
        id: "symbols",
        name: "Symbols",
        description: "Questions about important U.S. symbols and their meanings."
      },
      {
        id: "holidays",
        name: "Holidays",
        description: "Questions about national holidays and their significance."
      }
    ]
  },
  {
    id: "current-officials",
    name: "Current Officials",
    description: "Questions about current government officials that may change over time.",
    icon: "👩‍⚖️",
    subcategories: []
  }
];

/**
 * Helper function to get a category by ID
 * @param {string} categoryId - The ID of the category to find
 * @returns {Object|null} - The category object or null if not found
 */
export const getCategoryById = (categoryId) => {
  // First check main categories
  const mainCategory = categories.find(category => category.id === categoryId);
  if (mainCategory) return mainCategory;
  
  // Then check subcategories
  for (const category of categories) {
    if (category.subcategories) {
      const subcategory = category.subcategories.find(sub => sub.id === categoryId);
      if (subcategory) return { ...subcategory, parentCategory: category.id };
    }
  }
  
  return null;
};

/**
 * Get all subcategories flattened into a single array
 * @returns {Array} - Array of all subcategories with parent information
 */
export const getAllSubcategories = () => {
  const allSubcategories = [];
  
  categories.forEach(category => {
    if (category.subcategories && category.subcategories.length > 0) {
      category.subcategories.forEach(subcategory => {
        allSubcategories.push({
          ...subcategory,
          parentCategory: category.id,
          parentName: category.name
        });
      });
    }
  });
  
  return allSubcategories;
};
