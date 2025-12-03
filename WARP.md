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
  storage.ts        # Storage layer (IStorage interface, JsonStorage implementation)
  email.ts          # Email service using Resend for order confirmations
  static.ts         # Static file serving for production
  vite.ts           # Vite dev server integration

data/               # Application data
  orders.json       # JSON file storing orders (auto-created)

shared/              # Code shared between client and server
  schema.ts         # Zod validation schemas for orders

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

**Storage Layer:**
- Repository pattern via `IStorage` interface in `server/storage.ts`
- `JsonStorage` implementation stores orders in `data/orders.json`
- Singleton `storage` instance exported for use in routes
- Easy to swap for database or Google Sheets implementation later

**Email Notifications:**
- Resend API integration in `server/email.ts`
- Sends confirmation email to customer and notification to admin
- Triggered automatically when orders are created
- Requires `RESEND_API_KEY`, `ADMIN_EMAIL`, and `FROM_EMAIL` environment variables

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
- `insertOrderSchema` validates incoming order data
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
- JSON file storage for orders
- Resend for transactional emails
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
- `RESEND_API_KEY` - Required for sending order confirmation emails
- `ADMIN_EMAIL` - Email address to receive order notifications
- `FROM_EMAIL` - From address for emails (e.g., "orders@yourdomain.com")
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
- Zod schemas define and validate data structures
- Shared types between client/server via `@shared/` imports

**Data Persistence:**
- Orders stored in `data/orders.json` file
- File is created automatically on first order
- Can be easily migrated to database or Google Sheets later by swapping `IStorage` implementation
