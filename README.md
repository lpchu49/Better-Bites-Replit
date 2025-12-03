# Better Bites

A bilingual (English/Vietnamese) e-commerce website for handcrafted energy balls made from dates and natural ingredients. Built with modern full-stack TypeScript architecture featuring React and Express.

## Features

- 🌍 **Bilingual Support** - English and Vietnamese with automatic language detection
- 🛒 **Product Showcase** - Browse handcrafted energy ball products
- 📦 **Order Management** - Simple order creation and tracking
- 📧 **Email Notifications** - Automated order confirmations via Resend
- 🎨 **Modern UI** - Built with shadcn/ui and Tailwind CSS
- ⚡ **Fast Performance** - Vite for development, optimized production builds
- 🔒 **Type-Safe** - Full TypeScript coverage with runtime validation

## Quick Start

### Prerequisites

- Node.js 20+ (Node 18+ works but shows engine warnings)
- Resend API key (for email notifications)

### Installation

```bash
# Clone the repository
git clone git@github.com:lpchu49/Better-Bites-Replit.git
cd Better-Bites-Replit

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env and add your Resend API key and email addresses

# Start development server
npm run dev
```

Visit http://localhost:3000 to see the application.

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
- **JSON file storage** - Simple, no database required
- **Resend** - Transactional email service
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
  storage.ts        # JSON file storage layer
  email.ts          # Email service (Resend)

data/               # Application data
  orders.json       # Order storage (auto-created)

shared/              # Shared code between client/server
  schema.ts         # Validation schemas
```

## API Endpoints

- `POST /api/orders` - Create a new order
- `GET /api/orders` - Fetch all orders

## Environment Variables

```bash
RESEND_API_KEY    # Resend API key for sending emails (required)
ADMIN_EMAIL       # Email to receive order notifications (required)
FROM_EMAIL        # From address for emails (default: onboarding@resend.dev)
NODE_ENV          # Environment: development/production
PORT              # Server port (default: 5000)
```

### Getting a Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to [API Keys](https://resend.com/api-keys) 
3. Create a new API key
4. Add it to your `.env` file

For testing, you can use `onboarding@resend.dev` as the FROM_EMAIL. For production, you'll need to verify your own domain.

## Key Features

### Bilingual Support
Automatic language detection with browser preferences, supports English and Vietnamese with persistent language selection.

### Type Safety
- TypeScript throughout the stack
- Zod schemas for runtime validation
- Shared types between client and server

### Email Notifications
- Customer receives order confirmation
- Admin receives order notification with details
- Non-blocking email sending (doesn't delay order response)

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
