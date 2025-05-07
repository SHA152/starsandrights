import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllQuestions } from '../data/civicsQuestions';
import { officialQuestions } from '../data/officialQuestions';
import { 
  getAllReadingVocabulary, 
  getAllWritingVocabulary,
  getAllReadingSentences,
  getAllWritingSentences
} from '../data/englishMaterial';
import { categories } from '../data/questionCategories';
import { 
  saveQuestion, 
  saveOfficialQuestion,
  saveVocabularyWord,
  saveSentence,
  exportQuestionsToJson,
  importQuestionsFromJson,
  createBackup,
  restoreFromBackup,
  getQuestionStats
} from '../utils/adminUtils';

/**
 * Admin page component for managing questions and content
 * This is a protected page that requires authentication
 * @returns {JSX.Element} AdminPage component
 */
const AdminPage = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  
  // Content management state
  const [activeTab, setActiveTab] = useState('dashboard');
  const [civicsData, setCivicsData] = useState([]);
  const [officialsData, setOfficialsData] = useState([]);
  const [readingVocab, setReadingVocab] = useState([]);
  const [writingVocab, setWritingVocab] = useState([]);
  const [readingSentences, setReadingSentences] = useState([]);
  const [writingSentences, setWritingSentences] = useState([]);
  
  // Search and filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  
  // Edit state
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  
  // Load data
  useEffect(() => {
    if (isAuthenticated) {
      setCivicsData(getAllQuestions());
      setOfficialsData(officialQuestions);
      setReadingVocab(getAllReadingVocabulary());
      setWritingVocab(getAllWritingVocabulary());
      setReadingSentences(getAllReadingSentences());
      setWritingSentences(getAllWritingSentences());
    }
  }, [isAuthenticated]);
  
  // Handle authentication
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password check - in a real app, this would be more secure
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect password. Please try again.');
    }
  };
  
  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };
  
  // Filter questions based on search and filters
  const getFilteredQuestions = () => {
    let filtered = [...civicsData, ...officialsData];
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(q => 
        q.question.toLowerCase().includes(term) || 
        q.answer.toLowerCase().includes(term) ||
        (q.notes && q.notes.toLowerCase().includes(term))
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(q => q.category === selectedCategory);
    }
    
    // Apply difficulty filter
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(q => q.difficulty === selectedDifficulty);
    }
    
    return filtered;
  };
  
  // Get category counts for dashboard
  const getCategoryCounts = () => {
    const counts = {};
    categories.forEach(cat => {
      counts[cat.id] = civicsData.filter(q => q.category === cat.id).length;
    });
    return counts;
  };
  
  // Handle editing a question
  const handleEditQuestion = (question) => {
    setEditingQuestion({...question});
    setShowEditModal(true);
  };
  
  // Handle saving edited question
  const handleSaveQuestion = () => {
    const isOfficialQuestion = editingQuestion.needsRegularUpdate;
    
    // Show loading state
    const savePromise = isOfficialQuestion 
      ? saveOfficialQuestion(editingQuestion)
      : saveQuestion(editingQuestion);
    
    savePromise
      .then(result => {
        alert(result.message);
        setShowEditModal(false);
        setEditingQuestion(null);
        
        // Refresh data if needed
        if (isOfficialQuestion) {
          // In a real implementation, this would update the data in the state
          // For now, we'll just log the updated question
          console.log('Updated official question:', result.question);
        }
      })
      .catch(error => {
        alert(`Error saving question: ${error.message}`);
      });
  };
  
  // Render login form
  const renderLoginForm = () => (
    <div className="admin-login">
      <h1>Admin Access</h1>
      <p>Enter the admin password to access the question management system.</p>
      
      {authError && <div className="auth-error">{authError}</div>}
      
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="password">Admin Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn primary">Login</button>
      </form>
      
      <div className="back-to-app">
        <Link to="/">← Back to App</Link>
      </div>
    </div>
  );
  
  // Render dashboard
  const renderDashboard = () => {
    const categoryCounts = getCategoryCounts();
    
    return (
      <div className="admin-dashboard">
        <h2>Content Dashboard</h2>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Questions</h3>
            <div className="stat-value">{civicsData.length + officialsData.length}</div>
          </div>
          <div className="stat-card">
            <h3>Official Questions</h3>
            <div className="stat-value">{officialsData.length}</div>
          </div>
          <div className="stat-card">
            <h3>Reading Vocabulary</h3>
            <div className="stat-value">{readingVocab.length}</div>
          </div>
          <div className="stat-card">
            <h3>Writing Vocabulary</h3>
            <div className="stat-value">{writingVocab.length}</div>
          </div>
        </div>
        
        <h3>Questions by Category</h3>
        <div className="category-cards">
          {categories.map(category => (
            <div key={category.id} className="category-card" onClick={() => {
              setActiveTab('questions');
              setSelectedCategory(category.id);
            }}>
              <div className="category-icon">{category.icon}</div>
              <h4>{category.name}</h4>
              <div className="category-count">{categoryCounts[category.id]} questions</div>
              <button className="btn secondary">View Questions</button>
            </div>
          ))}
        </div>
        
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <button className="btn primary" onClick={() => setActiveTab('questions')}>
              Manage All Questions
            </button>
            <button className="btn primary" onClick={() => setActiveTab('officials')}>
              Update Official Questions
            </button>
            <button className="btn primary" onClick={() => setActiveTab('english')}>
              Manage English Materials
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  // Render questions management
  const renderQuestionsManager = () => {
    const filteredQuestions = getFilteredQuestions();
    
    return (
      <div className="questions-manager">
        <h2>Questions Manager</h2>
        
        <div className="filter-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search questions or answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filter-group">
            <label>Category:</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label>Difficulty:</label>
            <select 
              value={selectedDifficulty} 
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              <option value="all">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          
          <button className="btn secondary" onClick={() => {
            setSearchTerm('');
            setSelectedCategory('all');
            setSelectedDifficulty('all');
          }}>
            Clear Filters
          </button>
        </div>
        
        <div className="questions-actions">
          <div className="questions-count">
            Showing {filteredQuestions.length} questions
          </div>
          
          <div className="action-buttons">
            <button 
              className="btn secondary"
              onClick={() => {
                const { data, filename } = exportQuestionsToJson(filteredQuestions);
                
                // Create a blob and download link
                const blob = new Blob([data], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                
                alert(`Exported ${filteredQuestions.length} questions to ${filename}`);
              }}
            >
              Export Questions
            </button>
            
            <button 
              className="btn secondary"
              onClick={() => {
                // Create a file input element
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.json';
                
                input.onchange = (e) => {
                  const file = e.target.files[0];
                  if (!file) return;
                  
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    const jsonData = event.target.result;
                    
                    importQuestionsFromJson(jsonData)
                      .then(result => {
                        alert(result.message);
                        // In a real implementation, this would update the data in the state
                        console.log('Imported questions:', result.questions);
                      })
                      .catch(error => {
                        alert(`Error importing questions: ${error.message}`);
                      });
                  };
                  
                  reader.readAsText(file);
                };
                
                input.click();
              }}
            >
              Import Questions
            </button>
            
            <button 
              className="btn secondary"
              onClick={() => {
                createBackup()
                  .then(result => {
                    alert(result.message);
                  })
                  .catch(error => {
                    alert(`Error creating backup: ${error.message}`);
                  });
              }}
            >
              Create Backup
            </button>
          </div>
        </div>
        
        <div className="questions-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Question</th>
                <th>Answer</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuestions.map(question => (
                <tr key={question.id}>
                  <td>{question.id}</td>
                  <td>{question.question}</td>
                  <td>{question.answer}</td>
                  <td>{question.category}</td>
                  <td>{question.difficulty || 'N/A'}</td>
                  <td>
                    <button 
                      className="btn small primary"
                      onClick={() => handleEditQuestion(question)}
                      style={{ display: 'inline-block', marginRight: '5px' }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredQuestions.length === 0 && (
          <div className="no-results">
            No questions match your search criteria. Try adjusting your filters.
          </div>
        )}
      </div>
    );
  };
  
  // Render officials questions manager
  const renderOfficialsManager = () => {
    return (
      <div className="officials-manager">
        <h2>Official Questions Manager</h2>
        <p>These questions need regular updates as government officials change.</p>
        
        <div className="officials-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Question</th>
                <th>Answer</th>
                <th>Last Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {officialsData.filter(q => q.needsRegularUpdate).map(question => (
                <tr key={question.id}>
                  <td>{question.id}</td>
                  <td>{question.question}</td>
                  <td>{question.answer}</td>
                  <td>{question.lastUpdated || 'Unknown'}</td>
                  <td>
                    <button 
                      className="btn small primary"
                      onClick={() => handleEditQuestion(question)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  // Render English materials manager
  const renderEnglishManager = () => {
    return (
      <div className="english-manager">
        <h2>English Materials Manager</h2>
        
        <div className="english-tabs">
          <button 
            className={`tab-button ${activeTab === 'reading-vocab' ? 'active' : ''}`}
            onClick={() => setActiveTab('reading-vocab')}
          >
            Reading Vocabulary
          </button>
          <button 
            className={`tab-button ${activeTab === 'writing-vocab' ? 'active' : ''}`}
            onClick={() => setActiveTab('writing-vocab')}
          >
            Writing Vocabulary
          </button>
          <button 
            className={`tab-button ${activeTab === 'reading-sentences' ? 'active' : ''}`}
            onClick={() => setActiveTab('reading-sentences')}
          >
            Reading Sentences
          </button>
          <button 
            className={`tab-button ${activeTab === 'writing-sentences' ? 'active' : ''}`}
            onClick={() => setActiveTab('writing-sentences')}
          >
            Writing Sentences
          </button>
        </div>
        
        {activeTab === 'reading-vocab' && (
          <div className="vocab-list">
            <h3>Reading Vocabulary ({readingVocab.length} words)</h3>
            <div className="vocab-grid">
              {readingVocab.map((word, index) => (
                <div key={index} className="vocab-item">
                  {word}
                  <button className="btn small secondary">Edit</button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'writing-vocab' && (
          <div className="vocab-list">
            <h3>Writing Vocabulary ({writingVocab.length} words)</h3>
            <div className="vocab-grid">
              {writingVocab.map((word, index) => (
                <div key={index} className="vocab-item">
                  {word}
                  <button className="btn small secondary">Edit</button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'reading-sentences' && (
          <div className="sentences-list">
            <h3>Reading Sentences ({readingSentences.length} sentences)</h3>
            <ul>
              {readingSentences.map((sentence, index) => (
                <li key={index}>
                  {sentence}
                  <button className="btn small secondary">Edit</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'writing-sentences' && (
          <div className="sentences-list">
            <h3>Writing Sentences ({writingSentences.length} sentences)</h3>
            <ul>
              {writingSentences.map((sentence, index) => (
                <li key={index}>
                  {sentence}
                  <button className="btn small secondary">Edit</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  // Render edit question modal
  const renderEditModal = () => {
    if (!editingQuestion) return null;
    
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Edit Question</h2>
          
          <div className="form-group">
            <label>Question ID:</label>
            <input 
              type="number" 
              value={editingQuestion.id} 
              onChange={(e) => setEditingQuestion({
                ...editingQuestion, 
                id: parseInt(e.target.value)
              })}
            />
          </div>
          
          <div className="form-group">
            <label>Question:</label>
            <textarea 
              value={editingQuestion.question} 
              onChange={(e) => setEditingQuestion({
                ...editingQuestion, 
                question: e.target.value
              })}
              rows={3}
            />
          </div>
          
          <div className="form-group">
            <label>Answer:</label>
            <textarea 
              value={editingQuestion.answer} 
              onChange={(e) => setEditingQuestion({
                ...editingQuestion, 
                answer: e.target.value
              })}
              rows={4}
            />
            <div className="field-help">
              Use line breaks to separate multiple acceptable answers.
            </div>
          </div>
          
          <div className="form-group">
            <label>Notes:</label>
            <textarea 
              value={editingQuestion.notes || ''} 
              onChange={(e) => setEditingQuestion({
                ...editingQuestion, 
                notes: e.target.value
              })}
              rows={3}
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Category:</label>
              <select 
                value={editingQuestion.category} 
                onChange={(e) => setEditingQuestion({
                  ...editingQuestion, 
                  category: e.target.value
                })}
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label>Difficulty:</label>
              <select 
                value={editingQuestion.difficulty || 'medium'} 
                onChange={(e) => setEditingQuestion({
                  ...editingQuestion, 
                  difficulty: e.target.value
                })}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
          
          <div className="form-row checkboxes">
            <div className="form-group checkbox">
              <label>
                <input 
                  type="checkbox" 
                  checked={editingQuestion.is65Plus || false} 
                  onChange={(e) => setEditingQuestion({
                    ...editingQuestion, 
                    is65Plus: e.target.checked
                  })}
                />
                65/20 Special Question
              </label>
            </div>
            
            <div className="form-group checkbox">
              <label>
                <input 
                  type="checkbox" 
                  checked={editingQuestion.commonlyMissed || false} 
                  onChange={(e) => setEditingQuestion({
                    ...editingQuestion, 
                    commonlyMissed: e.target.checked
                  })}
                />
                Commonly Missed
              </label>
            </div>
            
            <div className="form-group checkbox">
              <label>
                <input 
                  type="checkbox" 
                  checked={editingQuestion.needsRegularUpdate || false} 
                  onChange={(e) => setEditingQuestion({
                    ...editingQuestion, 
                    needsRegularUpdate: e.target.checked
                  })}
                />
                Needs Regular Updates
              </label>
            </div>
          </div>
          
          <div className="modal-actions">
            <button 
              className="btn secondary"
              onClick={() => {
                setShowEditModal(false);
                setEditingQuestion(null);
              }}
            >
              Cancel
            </button>
            <button 
              className="btn primary"
              onClick={handleSaveQuestion}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  // Render admin navigation
  const renderAdminNav = () => (
    <div className="admin-nav">
      <div className="nav-header">
        <h2>Admin Panel</h2>
        <button className="btn small secondary" onClick={handleLogout}>
          Logout
        </button>
      </div>
      
      <div className="nav-links">
        <button 
          className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('dashboard');
            // Reset filters when navigating to dashboard
            setSearchTerm('');
            setSelectedCategory('all');
            setSelectedDifficulty('all');
          }}
        >
          Dashboard
        </button>
        <button 
          className={`nav-link ${activeTab === 'questions' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('questions');
            // Reset filters when navigating to questions
            setSearchTerm('');
            setSelectedCategory('all');
            setSelectedDifficulty('all');
          }}
        >
          Questions Manager
        </button>
        <button 
          className={`nav-link ${activeTab === 'officials' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('officials');
          }}
        >
          Officials Questions
        </button>
        <button 
          className={`nav-link ${['reading-vocab', 'writing-vocab', 'reading-sentences', 'writing-sentences'].includes(activeTab) ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('reading-vocab');
          }}
        >
          English Materials
        </button>
      </div>
      
      <div className="back-to-app">
        <Link to="/">← Back to App</Link>
      </div>
    </div>
  );
  
  // Main render
  return (
    <div className="admin-page">
      {!isAuthenticated ? (
        renderLoginForm()
      ) : (
        <div className="admin-container">
          {renderAdminNav()}
          
          <div className="admin-content">
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'questions' && renderQuestionsManager()}
            {activeTab === 'officials' && renderOfficialsManager()}
            {['reading-vocab', 'writing-vocab', 'reading-sentences', 'writing-sentences'].includes(activeTab) && renderEnglishManager()}
          </div>
          
          {showEditModal && renderEditModal()}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
