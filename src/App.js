import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.css';
import './styles/pages.css';
import './styles/components.css';
import './styles/admin.css';
import Layout from './components/common/Layout';
import PageTransition from './components/common/PageTransition';
import HomePage from './pages/HomePage';
import StudyPage from './pages/StudyPage';
import CategoryStudyPage from './pages/CategoryStudyPage';
import FlashcardsPage from './pages/FlashcardsPage';
import PracticeTestPage from './pages/PracticeTestPage';
import EnglishPage from './pages/EnglishPage';
import AboutCreatorPage from './pages/AboutCreatorPage';
import TestStructurePage from './pages/TestStructurePage';
import N400Page from './pages/N400Page';
import NotFoundPage from './pages/NotFoundPage';
import AdminPage from './pages/AdminPage';

/**
 * AnimatedRoutes component that wraps routes with page transitions
 * @returns {JSX.Element} AnimatedRoutes component
 */
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <>
      <Routes location={location}>
        <Route path="/" element={
          <PageTransition>
            <Layout><HomePage /></Layout>
          </PageTransition>
        } />
        <Route path="/study" element={
          <PageTransition>
            <Layout><StudyPage /></Layout>
          </PageTransition>
        } />
        <Route path="/study/:categoryId" element={
          <PageTransition>
            <Layout><CategoryStudyPage /></Layout>
          </PageTransition>
        } />
        <Route path="/flashcards" element={
          <PageTransition>
            <Layout><FlashcardsPage /></Layout>
          </PageTransition>
        } />
        <Route path="/practice" element={
          <PageTransition>
            <Layout><PracticeTestPage /></Layout>
          </PageTransition>
        } />
        <Route path="/english" element={
          <PageTransition>
            <Layout><EnglishPage /></Layout>
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <Layout><AboutCreatorPage /></Layout>
          </PageTransition>
        } />
        <Route path="/test-structure" element={
          <PageTransition>
            <Layout><TestStructurePage /></Layout>
          </PageTransition>
        } />
        <Route path="/n400" element={
          <PageTransition>
            <Layout><N400Page /></Layout>
          </PageTransition>
        } />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={
          <PageTransition>
            <Layout><NotFoundPage /></Layout>
          </PageTransition>
        } />
      </Routes>
    </>
  );
};

/**
 * Main App component with routing
 * @returns {JSX.Element} App component
 */
function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
