# Better Bites

A bilingual (English/Vietnamese) e-commerce website for handcrafted energy balls made from dates and natural ingredients. Built with modern full-stack TypeScript architecture featuring React and Express.

## Features

- 🌍 **Bilingual Support** - English and Vietnamese with automatic language detection
- 🛒 **Product Showcase** - Browse handcrafted energy ball products
- 📦 **Order Management** - Simple order creation and tracking
- 🎨 **Modern UI** - Built with shadcn/ui and Tailwind CSS
- ⚡ **Fast Performance** - Vite for development, optimized production builds
- 🔒 **Type-Safe** - Full TypeScript coverage with runtime validation

## Quick Start

### Prerequisites

- Node.js 20+
- PostgreSQL database (or Neon serverless account)

### Installation

```bash
# Clone the repository
git clone git@github.com:lpchu49/Better-Bites-Replit.git
cd Better-Bites-Replit

# Install dependencies
npm install

# Set up environment variables
# Create a .env file with:
# DATABASE_URL=your_postgresql_connection_string
# PORT=5000

# Push database schema
npm run db:push

# Start development server
npm run dev
```

Visit http://localhost:5000 to see the application.

## Development Commands

### Running the Application
```bash
npm run dev              # Start development server (backend + frontend with HMR)
npm run dev:client       # Run Vite dev server only
npm start                # Start production server
```

### Building
```bash
npm run build            # Build for production (client + server)
npm run check            # TypeScript type checking
```

### Database
```bash
npm run db:push          # Push schema changes to database
```

## Technology Stack

### Frontend
- **React 19** with TypeScript
- **Vite** - Fast build tool with HMR
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **Wouter** - Lightweight routing
- **TanStack Query** - Server state management
- **i18next** - Internationalization
- **Framer Motion** - Animations

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** - Type-safe database queries
- **Neon PostgreSQL** - Serverless database
- **Zod** - Runtime validation
- **ESM modules** throughout

## Project Structure

```
client/src/           # Frontend React application
  components/         # React components
    ui/              # shadcn/ui components
  pages/             # Page components
  lib/               # Utilities
  hooks/             # Custom React hooks
  locales/           # Translation files (en, vi)

server/              # Backend Express application
  index.ts          # Server setup
  routes.ts         # API endpoints
  storage.ts        # Database layer

shared/              # Shared code between client/server
  schema.ts         # Database schema and validation
```

## API Endpoints

- `POST /api/orders` - Create a new order
- `GET /api/orders` - Fetch all orders

## Environment Variables

```bash
DATABASE_URL      # PostgreSQL connection string (required)
NODE_ENV          # Environment: development/production
PORT              # Server port (default: 5000)
```

## Key Features

### Bilingual Support
Automatic language detection with browser preferences, supports English and Vietnamese with persistent language selection.

### Type Safety
- TypeScript throughout the stack
- Drizzle ORM for type-safe database queries
- Zod schemas for runtime validation
- Shared types between client and server

### Modern Architecture
- ESM modules
- Path aliases (`@/`, `@shared/`, `@assets/`)
- Repository pattern for database access
- Optimized production builds with selective bundling

## Deployment

Built for deployment on Replit with custom optimizations:
- Single port for API and client (port 5000)
- Selective dependency bundling for faster cold starts
- Static file serving in production

## License

MIT
