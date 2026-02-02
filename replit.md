# GDSC Renovation Company Website

## Overview

This is a professional website for a house renovation and finishing works company based in Sofia, Bulgaria. The site showcases renovation services including painting, plaster work, tiling, electrical, plumbing, drywall, and flooring. It features a modern, premium design with a construction-style aesthetic using neutral colors (white, gray, dark accents) with an orange/yellow primary accent color.

The application is a full-stack web app with a React frontend and Express backend, using PostgreSQL for data persistence. The main functionality includes service showcasing, project galleries, and a contact/inquiry form for requesting quotes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: TailwindCSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page animations and scroll reveals
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack React Query for server state

### Backend Architecture
- **Framework**: Express 5 (Node.js)
- **API Pattern**: RESTful endpoints defined in `shared/routes.ts`
- **Validation**: Zod schemas shared between frontend and backend
- **Build Tool**: Vite for frontend, esbuild for server bundling

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains all database tables
- **Migrations**: Drizzle Kit for database migrations (`drizzle.config.ts`)

### Project Structure
```
├── client/           # Frontend React application
│   └── src/
│       ├── components/   # Reusable UI components
│       ├── pages/        # Route pages (services/, projects/)
│       ├── hooks/        # Custom React hooks
│       └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between frontend/backend
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions with Zod schemas
└── migrations/       # Database migrations
```

### Key Design Patterns
- **Type-safe API contracts**: Routes defined with Zod schemas in `shared/routes.ts`, ensuring type safety across the stack
- **Component-based UI**: Modular components using shadcn/ui patterns with Tailwind styling
- **Path aliases**: `@/` for client source, `@shared/` for shared modules

## External Dependencies

### Database
- PostgreSQL database (connection via `DATABASE_URL` environment variable)
- `connect-pg-simple` for session storage

### UI Libraries
- Radix UI primitives (accordion, dialog, dropdown, etc.)
- Lucide React for icons
- Embla Carousel for image carousels
- Vaul for drawer components

### Development Tools
- Vite with React plugin and Replit-specific plugins
- TypeScript with strict mode
- PostCSS with Tailwind and Autoprefixer

### Fonts
- Manrope (display/headings)
- Outfit (body text)
- Loaded via Google Fonts