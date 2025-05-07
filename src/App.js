import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import './styles/pages.css';
import './styles/components.css';
import './styles/admin.css';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import StudyPage from './pages/StudyPage';
import CategoryStudyPage from './pages/CategoryStudyPage';
import FlashcardsPage from './pages/FlashcardsPage';
import PracticeTestPage from './pages/PracticeTestPage';
import EnglishPage from './pages/EnglishPage';
import AboutCreatorPage from './pages/AboutCreatorPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminPage from './pages/AdminPage';

/**
 * Main App component with routing
 * @returns {JSX.Element} App component
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/study" element={<Layout><StudyPage /></Layout>} />
        <Route path="/study/:categoryId" element={<Layout><CategoryStudyPage /></Layout>} />
        <Route path="/flashcards" element={<Layout><FlashcardsPage /></Layout>} />
        <Route path="/practice" element={<Layout><PracticeTestPage /></Layout>} />
        <Route path="/english" element={<Layout><EnglishPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutCreatorPage /></Layout>} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
