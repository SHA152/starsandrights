import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal component that animates children when they enter the viewport
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to animate
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.stagger - Whether to stagger the animations of children
 * @param {number} props.threshold - Intersection threshold (0-1)
 * @param {string} props.rootMargin - Root margin for intersection observer
 * @returns {JSX.Element} ScrollReveal component
 */
const ScrollReveal = ({ 
  children, 
  className = '', 
  stagger = false,
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        rootMargin
      }
    );
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);
  
  const baseClass = stagger ? 'stagger-container' : 'animate-on-scroll';
  const visibilityClass = isVisible ? 'visible' : '';
  
  return (
    <div 
      ref={ref} 
      className={`${baseClass} ${visibilityClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
