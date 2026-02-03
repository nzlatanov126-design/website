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
- Inter (display/headings and body text)
- Clean, modern, professional typography
- Loaded via Google Fonts

### Email Configuration
- **Provider**: Gmail SMTP (info@gdcs.bg)
- **Package**: nodemailer
- **Secret**: `GMAIL_APP_PASSWORD` - Gmail App Password for SMTP authentication
- **Endpoint**: `POST /api/quote` - sends quote requests to info@gdcs.bg
- **Note**: If Gmail App Password expires, regenerate at myaccount.google.com > Security > App passwords

### Premium Architectural Design Palette
- **Deep Slate**: #0F172A (dark sections, footer, hero overlays)
- **Amber Gold**: #F59E0B (CTA buttons, accents, highlights)
- **Light Slate**: #F8FAFC (light section backgrounds)
- **Slate Gray**: #334155 (secondary text)
- **Muted Text**: #64748B / #94A3B8 (body text on light/dark)
- **Border**: #E2E8F0 (light borders)

### Typography
- **Font**: Inter (headers and body text)
- **Style**: Clean, modern, professional

### Contact Information
- **Phone**: +359 89 7744774
- **Email**: info@gdcs.bg
- **Location**: Sofia, Bulgaria

## Customer Reviews System

### Database Table: `reviews`
| Column | Type | Description |
|--------|------|-------------|
| id | serial | Primary key, auto-increment |
| name | text | Customer name (required) |
| rating | integer | 1-5 star rating (required) |
| comment | text | Review text (required, min 10 chars) |
| service | text | Service type (optional) |
| approved | boolean | Approval status (default: false) |
| created_at | timestamp | Submission timestamp |

### API Endpoints
- **GET /api/reviews** - Returns only approved reviews (public)
- **POST /api/reviews** - Creates new review with `approved=false`

### Moderation Workflow
1. Customers submit reviews via the form on `/testimonials`
2. Reviews are saved with `approved=false` (not visible publicly)
3. Admin approves reviews manually via SQL:
   ```sql
   -- View all pending reviews
   SELECT * FROM reviews WHERE approved = false;
   
   -- Approve a specific review
   UPDATE reviews SET approved = true WHERE id = <review_id>;
   
   -- Delete spam/inappropriate reviews
   DELETE FROM reviews WHERE id = <review_id>;
   ```

### Files
- Schema: `shared/schema.ts` (reviews table definition)
- API Routes: `server/routes.ts` (GET/POST handlers)
- Storage: `server/storage.ts` (database operations)
- UI: `client/src/pages/Testimonials.tsx` (display + submission form)