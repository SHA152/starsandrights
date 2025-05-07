# Project Brief: BecomeUSCitizen App

## Overview
BecomeUSCitizen is a minimum viable product (MVP) application designed to help users study for the knowledge-based components of the U.S. citizenship naturalization test. The app focuses on the official 100 civics questions and basic English reading and writing material.

## Core Requirements

### Scope (Minimum Viable Features)
- Access to the official 100 civics questions and answers
- A basic Flashcard mode for studying civics questions
- A simple Practice Test mode for civics questions
- Display of basic English reading and writing material (vocabulary lists, example sentences)

### Features to Omit (for MVP)
- Audio functionality for questions/answers
- Advanced study tracking, progress reports, or identification of "weak" questions
- Detailed explanations or study guides beyond the basic Q&A
- Interactive reading/writing exercises that check user input
- Support for N-400 form questions or definitions
- Support for potential future test versions (focus only on current official test)

## Technical Specifications

### Platform
- Webapp (React JS)

### Technology
- Frontend: React JS with functional components and React Hooks for state management
- Content Storage: JSON files or JavaScript arrays for easy content updates
- Routing: React Router DOM for navigation between different sections

### UI Design Specifications

#### Color Scheme
- Primary: Deep Navy Blue (#1A365D) - Headers, primary buttons
- Accent: Vibrant Red (#D64045) - Highlights, important elements
- Background: Clean White (#FFFFFF) - Main backgrounds
- Secondary:
  - Light Blue (#E1F1FF) - Card backgrounds
  - Gold/Yellow (#FFD24C) - Achievements, important info
  - Soft Gray (#F5F7FA) - Subtle backgrounds, dividers

#### Typography
- Headings: Montserrat (bold)
- Body: Open Sans or Roboto
- Base font size: 16px for readability

#### UI Elements
- Card-based UI with rounded corners (8-12px radius)
- Generous whitespace
- Simple animations for card flips
- Achievement badges for completed sessions
- Progress visualization (bars/circles)
- Subtle micro-interactions
- Celebration effects for passing tests
- Patriotic illustrations for section headers

## Feature Implementation Priority
1. Study Mode with Categories (Highest Priority)
2. Flashcard Mode
3. Practice Test Mode
4. English Practice Section (Lower Priority)
5. UI/UX Refinement

## Content Organization Considerations
- Primary organization by official USCIS categories
- Secondary filters for 65/20 exemption questions, current officials, difficulty level
- Special content flags for recently updated questions, commonly missed questions
- Isolation of changeable content (officials' names) in separate configuration files
- Version tracking for content updates
