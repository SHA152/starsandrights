import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 404 Not Found page component
 * @returns {JSX.Element} NotFoundPage component
 */
const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist or has been moved.</p>
        <div className="not-found-actions">
          <Link to="/" className="btn primary">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
