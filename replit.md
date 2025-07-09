# ConsultancyPro Website - replit.md

## Overview

This is a modern consultancy website built with React, TypeScript, and Express.js. The application features a professional design inspired by modern consultancy platforms, with a full-stack architecture supporting dynamic content management and client interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Styling**: Tailwind CSS with custom consultancy theme variables
- **State Management**: TanStack Query for server state and data fetching
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Content Management**: Sanity CMS integration with fallback to in-memory storage
- **Database**: PostgreSQL with Drizzle ORM (optional for contact submissions)
- **API Design**: RESTful API endpoints
- **Middleware**: Built-in logging and error handling

### Key Components

#### Database Schema (shared/schema.ts)
- **Services**: Consultancy service offerings with features
- **Team Members**: Staff profiles with social links and expertise
- **Testimonials**: Client feedback with ratings
- **Case Studies**: Project showcases with results and metrics
- **Blog Posts**: Thought leadership content
- **Contact Submissions**: Client inquiry forms

#### Page Structure
- **Home**: Hero section, services overview, testimonials, case studies
- **About**: Company story, team profiles, mission/values
- **Services**: Detailed service offerings with feature lists
- **Case Studies**: Project showcases with measurable outcomes
- **Testimonials**: Client feedback and success stories
- **How It Works**: Step-by-step consulting process
- **Pricing**: Transparent pricing tiers and packages
- **Blog**: Thought leadership and industry insights
- **Contact**: Contact form and business information

#### Content Management System
- **Primary**: Sanity CMS integration for production content management
- **Fallback**: MemStorage with seed data for development
- **Interface**: IStorage abstraction for data operations
- **Auto-detection**: Automatically switches between Sanity and memory storage based on configuration

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express.js routes handle CRUD operations
3. **Storage Layer**: Storage interface abstracts database operations
4. **Database**: PostgreSQL stores all business data
5. **Response**: JSON responses flow back through the query client

## External Dependencies

### UI/UX Dependencies
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

### Development Dependencies
- **Vite**: Fast build tool with HMR
- **TypeScript**: Type safety and development experience
- **ESBuild**: Fast bundling for production builds

### Database Dependencies
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migration and schema management

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx for TypeScript execution
- **Database**: Local development with migrations

### Production Build
- **Frontend**: Vite build output to `dist/public`
- **Backend**: ESBuild bundle to `dist/index.js`
- **Static Assets**: Served via Express static middleware
- **Database**: Production PostgreSQL via DATABASE_URL environment variable

### Environment Configuration
- **NODE_ENV**: Controls development vs production behavior
- **SANITY_PROJECT_ID**: Sanity CMS project identifier
- **SANITY_DATASET**: Sanity dataset name (default: production)
- **SANITY_TOKEN**: Sanity API token for write operations
- **DATABASE_URL**: PostgreSQL connection string (optional)
- **REPL_ID**: Replit-specific development features

### Key Architectural Decisions

1. **Monorepo Structure**: Frontend, backend, and shared code in single repository for easier development and deployment
2. **TypeScript Throughout**: Full type safety from database schema to frontend components
3. **Shared Schema**: Single source of truth for data types across frontend and backend
4. **Component-Based UI**: Reusable UI components with consistent design system
5. **Query-Based Data**: TanStack Query for efficient server state management
6. **Storage Abstraction**: Interface-based storage for flexibility in database implementations
7. **Modern Tooling**: Vite, ESBuild, and TypeScript for optimal developer experience

The application is designed to be easily deployable on platforms like Replit while maintaining scalability for production environments.