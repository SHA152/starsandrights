import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

/**
 * PageTransition component for animating route transitions
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render with transitions
 * @returns {JSX.Element} PageTransition component
 */
const PageTransition = ({ children }) => {
  // We still use useLocation to ensure the component re-renders on route changes
  useLocation();
  const nodeRef = React.useRef(null);
  
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={true}
      appear={true}
      timeout={300}
      classNames="page"
      unmountOnExit
    >
      <div ref={nodeRef} className="page-transition-wrapper">
        {children}
      </div>
    </CSSTransition>
  );
};

export default PageTransition;
