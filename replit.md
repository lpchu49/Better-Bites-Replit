# Better Bites - Energy Balls E-commerce Website

## Overview

Better Bites is a modern, bilingual (English/Vietnamese) e-commerce website for handcrafted energy balls made from dates and natural ingredients. The application features a product showcase, order management system, and multi-language support with a focus on wholesome, natural snacking.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server with Hot Module Replacement (HMR)
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query (React Query)** for server state management and data fetching

**UI & Styling**
- **Tailwind CSS** with custom theming for utility-first styling
- **shadcn/ui** component library (New York style variant) with Radix UI primitives
- **Framer Motion** for animations and transitions
- **Lucide React** for iconography
- Custom color scheme featuring warm earthy tones (terracotta primary, neutral backgrounds)
- **Google Fonts**: Playfair Display (serif, headings) and DM Sans (sans-serif, body text)

**Internationalization**
- **i18next** with react-i18next for translation management
- Browser language detection with localStorage persistence
- Supports English and Vietnamese with JSON translation files

**Design Philosophy**
- Mobile-first responsive design
- Accessible components using Radix UI primitives
- Custom Replit-specific plugins for development (cartographer, dev-banner, runtime error overlay)

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for HTTP server
- ESM (ES Modules) architecture throughout
- Custom middleware for request logging with timestamps
- JSON body parsing with raw body preservation for webhooks

**API Design**
- RESTful endpoints under `/api` prefix
- Order creation: `POST /api/orders`
- Order retrieval: `GET /api/orders`
- Zod schema validation on incoming requests
- Error handling with proper HTTP status codes and user-friendly messages

**Development vs Production**
- Development mode uses Vite middleware for HMR and instant feedback
- Production mode serves static built files from `dist/public`
- Custom build script bundles selective dependencies to reduce cold start times

### Data Storage

**Database**
- **PostgreSQL** via Neon serverless driver (`@neondatabase/serverless`)
- Connection pooling for efficient database access
- Database URL configured via `DATABASE_URL` environment variable

**ORM & Schema Management**
- **Drizzle ORM** for type-safe database queries
- **Drizzle Kit** for schema migrations and database push operations
- **Zod** integration via `drizzle-zod` for automatic schema validation

**Data Model**
- `orders` table with fields:
  - `id`: UUID primary key (auto-generated)
  - `name`: Customer name (required)
  - `email`: Customer email (required)
  - `phone`: Customer phone (optional)
  - `product`: Product identifier (required)
  - `message`: Additional message (optional)
  - `createdAt`: Timestamp (auto-generated)

**Storage Layer**
- Repository pattern with `IStorage` interface for testability
- `DbStorage` implementation handles all database operations
- Singleton `storage` instance exported for application-wide use

### External Dependencies

**Third-Party Services**
- **Neon Database**: Serverless PostgreSQL hosting
- **Replit**: Deployment platform with custom Vite plugins for development experience
- Meta image optimization plugin for OpenGraph/Twitter cards pointing to Replit domains

**Build & Development Tools**
- **esbuild**: Fast server-side bundling with selective dependency bundling
- **PostCSS**: CSS processing with Autoprefixer
- **TypeScript**: Type checking and compilation (with `noEmit` for Vite)
- Path aliases: `@/` (client), `@shared/` (shared), `@assets/` (attached assets)

**Key NPM Packages**
- Form handling: `react-hook-form`, `@hookform/resolvers`
- Validation: `zod`, `zod-validation-error`
- Date utilities: `date-fns`
- UI components: Full shadcn/ui component suite with Radix UI primitives
- Carousel: `embla-carousel-react`
- Utility: `nanoid` for ID generation, `clsx`/`class-variance-authority` for conditional classes

**Fonts & Assets**
- Google Fonts integration for typography
- Image assets stored in `attached_assets/generated_images/`
- Favicon and OpenGraph images in `client/public/`