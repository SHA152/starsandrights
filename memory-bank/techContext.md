# Technical Context: BecomeUSCitizen App

## Technology Stack

### Frontend Framework
- **React 19.1.0**: Using the latest version of React with functional components and hooks
- **React DOM 19.1.0**: For rendering React components to the DOM
- **React Router DOM 7.5.3**: For client-side routing and navigation

### Development Tools
- **React Scripts 5.0.1**: Create React App configuration and build tools
- **Node.js**: Runtime environment for development
- **npm**: Package manager for dependencies

### Testing Framework
- **Jest**: For unit and integration testing
- **React Testing Library**: For component testing
- **Testing Library DOM**: For DOM testing utilities

### Styling Approach
- **CSS Modules**: For component-scoped styling
- **CSS Variables**: For consistent theming and design tokens
- **Responsive Design**: Using media queries for different screen sizes

## Development Environment

### Project Structure
```
src/
├── components/     # Reusable UI components
├── data/           # Static data files
├── pages/          # Route-level components
├── styles/         # Global styles and variables
├── utils/          # Utility functions
├── App.js          # Main application component
└── index.js        # Application entry point
```

### Build & Deployment
- **Development**: `npm start` - Runs the app in development mode
- **Production Build**: `npm run build` - Creates an optimized production build
- **Testing**: `npm test` - Runs the test suite

## Technical Constraints

### Browser Compatibility
- Support for modern browsers (Chrome, Firefox, Safari, Edge)
- No explicit support for IE11 or older browsers
- Responsive design for desktop and tablet screens (mobile optimization not prioritized for MVP)

### Performance Considerations
- Small bundle size due to limited application scope
- No server-side rendering required
- Static content allows for efficient caching

### Content Management
- All content stored in static JavaScript/JSON files
- No backend database required for MVP
- Content updates require code changes and redeployment

## Technical Decisions

### Why React?
- Component-based architecture fits well with the UI requirements
- Rich ecosystem of libraries and tools
- Efficient rendering with virtual DOM
- Hooks API simplifies state management

### Why Static Content?
- Simplifies architecture (no backend needed)
- Reduces hosting costs
- Sufficient for the current requirements
- Allows for easy content updates via code changes

### Why CSS Modules?
- Component-scoped styles prevent conflicts
- Better maintainability than global CSS
- Simpler than CSS-in-JS solutions for this use case
- Works well with Create React App without additional configuration

## Dependency Management

### Core Dependencies
- react
- react-dom
- react-router-dom
- react-scripts

### Development Dependencies
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- web-vitals

### Avoided Dependencies
- State management libraries (Redux, MobX) - Not needed for this app's complexity
- UI component libraries - Custom styling preferred for this specific use case
- Backend/API libraries - No backend required for MVP

## Content Update Strategy

### Technical Implementation
- Questions and answers stored in structured JavaScript objects
- Officials' names and other changeable content isolated in separate files
- Version information included in data files for tracking updates

### Update Process
1. Modify the relevant data files
2. Test changes locally
3. Build and deploy updated application

## Future Technical Considerations

### Potential Enhancements
- **PWA Features**: For offline access and mobile installation
- **Localization**: For supporting multiple languages
- **User Accounts**: For tracking progress and customizing study experience
- **Backend Integration**: For more dynamic content updates without redeployment

### Technical Debt Monitoring
- Regular dependency updates
- Code quality checks
- Performance monitoring
- Accessibility testing

## Development Practices

### Code Style
- ESLint for code linting
- Prettier for code formatting
- Consistent naming conventions
  - PascalCase for components
  - camelCase for variables and functions
  - kebab-case for CSS classes

### Component Guidelines
- Single responsibility principle
- Reusable and composable design
- Clear prop interfaces
- Proper error handling
