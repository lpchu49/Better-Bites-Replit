# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Better Bites is a bilingual (English/Vietnamese) e-commerce website for handcrafted energy balls. The application uses a full-stack TypeScript architecture with React frontend and Express backend.

## Development Commands

### Running the Application
```bash
npm run dev              # Start development server (runs backend at port 5000)
npm run dev:client       # Run Vite dev server only (port 5000)
npm start                # Start production server
```

### Building
```bash
npm run build            # Build both client (Vite) and server (esbuild) for production
npm run check            # Run TypeScript type checking
```

### Database
```bash
npm run db:push          # Push database schema changes to PostgreSQL using Drizzle Kit
```

**Database Setup:**
- Requires `DATABASE_URL` environment variable pointing to a PostgreSQL database
- Uses Neon serverless PostgreSQL via `@neondatabase/serverless`
- Schema is defined in `shared/schema.ts` and managed with Drizzle ORM
- Migrations output to `./migrations` directory

## Architecture

### Project Structure

```
client/src/           # Frontend React application
  components/         # React components (UI library + custom)
    ui/              # shadcn/ui components (Radix primitives)
  pages/             # Page components (Home, ProductPage, About, not-found)
  lib/               # Utilities (queryClient, utils)
  hooks/             # Custom React hooks (use-toast, use-mobile)
  locales/           # i18n translation files (en.json, vi.json)
  i18n.ts           # i18next configuration
  App.tsx           # Main app with Wouter routing
  main.tsx          # Entry point

server/              # Backend Express application
  index.ts          # Express server setup with logging middleware
  routes.ts         # API route handlers (/api/orders)
  storage.ts        # Database access layer (IStorage interface, DbStorage implementation)
  static.ts         # Static file serving for production
  vite.ts           # Vite dev server integration

shared/              # Code shared between client and server
  schema.ts         # Drizzle ORM schema and Zod validation schemas

script/
  build.ts          # Custom build script for production
```

### Key Architectural Patterns

**Monorepo with Path Aliases:**
- `@/` maps to `client/src/`
- `@shared/` maps to `shared/`
- `@assets/` maps to `attached_assets/`

**Development vs Production:**
- Development: Vite middleware serves the React app with HMR
- Production: Static files built to `dist/public`, server bundled to `dist/index.cjs`
- Build script uses selective dependency bundling (allowlist in `script/build.ts`) to optimize cold starts

**Database Layer:**
- Repository pattern via `IStorage` interface in `server/storage.ts`
- Singleton `storage` instance exported for use in routes
- Drizzle ORM provides type-safe queries; Drizzle Kit manages migrations
- Zod schemas auto-generated from Drizzle schema via `drizzle-zod`

**Client-Side Routing:**
- Uses Wouter (lightweight alternative to React Router)
- Routes: `/`, `/product/:id`, `/about`
- Custom `ScrollManager` handles hash-based navigation and scroll restoration

**State Management:**
- TanStack Query (React Query) for server state
- Custom `queryClient` in `lib/queryClient.ts`
- No global client state library; uses React context where needed

**Internationalization:**
- i18next with react-i18next
- Browser language detection with localStorage persistence
- Translation files in `client/src/locales/` (en.json, vi.json)
- Initialize before app render in `main.tsx`

**Validation:**
- Zod schemas for runtime validation
- `insertOrderSchema` derived from Drizzle schema for API requests
- API errors formatted with `zod-validation-error` for user-friendly messages

### API Endpoints

**Orders API:**
- `POST /api/orders` - Create order (validates with `insertOrderSchema`)
- `GET /api/orders` - Fetch all orders

### Technology Stack

**Frontend:**
- React 19 with TypeScript
- Vite for build and dev server
- Tailwind CSS v4 with custom theme (terracotta/earth tones)
- shadcn/ui components (New York variant)
- Wouter for routing
- TanStack Query for data fetching
- i18next for internationalization
- Framer Motion for animations

**Backend:**
- Express.js with TypeScript
- ESM (ES Modules) throughout
- Drizzle ORM with Neon PostgreSQL
- Custom request logging middleware

**Styling:**
- Tailwind CSS v4 via `@tailwindcss/vite`
- Custom fonts: Playfair Display (headings), DM Sans (body)
- shadcn/ui component library with Radix UI primitives

**Build Tools:**
- Vite for client bundling
- esbuild for server bundling
- tsx for running TypeScript in development

### Important Notes

**Port Configuration:**
- Application must run on `PORT` environment variable (defaults to 5000)
- Other ports are firewalled on Replit deployment
- Single port serves both API and client

**Environment Variables:**
- `DATABASE_URL` - Required for database connection
- `NODE_ENV` - Set to "production" for production builds
- `PORT` - Server port (default: 5000)

**Replit Integration:**
- Custom Vite plugins for dev experience (cartographer, dev-banner, runtime-error-modal)
- `.replit` config defines deployment and workflow
- Meta images plugin points to Replit domains for OpenGraph/Twitter cards

**ESM Throughout:**
- `package.json` has `"type": "module"`
- Server imports use `.ts` extensions where allowed by bundler config
- Production server output is CommonJS (`dist/index.cjs`) for compatibility

**UI Component Library:**
- Uses shadcn/ui components from `client/src/components/ui/`
- Components are copied into the project (not npm installed)
- Configured via `components.json` (New York style, CSS variables, Tailwind v4)
- Add new components with shadcn CLI if needed

**Type Safety:**
- Strict TypeScript configuration
- Drizzle infers database types
- Zod validates runtime data
- Shared types between client/server via `@shared/` imports
