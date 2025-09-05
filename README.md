# MigraHub Frontend

Modern, responsive frontend application for MigraHub - A comprehensive visa application management platform.

## Features

- **Modern Design**: Aceternity UI components with glassmorphic effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Animations**: Framer Motion animations throughout
- **Real-time Updates**: WebSocket integration for live notifications
- **Image Optimization**: Next.js Image component with external CDN support
- **Dark Mode**: Support for light and dark themes
- **Assessment System**: Interactive visa assessment calculator
- **User Dashboard**: Comprehensive user profile and application management
- **Admin Panel**: Admin dashboard for managing applications

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Aceternity UI** - Modern UI components
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **TanStack Query** - Data fetching and caching
- **Socket.IO Client** - Real-time communication
- **Next-Auth** - Authentication

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend API running on port 5000 or 5555

### Installation

1. Clone the repository
```bash
git clone https://github.com/vinender/migrahub-frontend-v2.git
cd migrahub-frontend-v2
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your configuration:
```env
NEXT_PUBLIC_API_URL=http://localhost:5555
NEXT_PUBLIC_SOCKET_URL=http://localhost:5555
NEXTAUTH_URL=http://localhost:3004
NEXTAUTH_SECRET=your-secret-key
```

5. Run the development server
```bash
npm run dev
```

Open [http://localhost:3004](http://localhost:3004) to view the application.

## Project Structure

```
frontend/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── assessment/        # Visa assessment
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── landing/          # Landing page components
│   ├── dashboard/        # Dashboard components
│   ├── ui/              # Reusable UI components
│   └── forms/           # Form components
├── lib/                  # Utilities and helpers
│   ├── api/             # API client functions
│   ├── hooks/           # Custom React hooks
│   └── utils/           # Utility functions
├── styles/              # Global styles
├── public/              # Static assets
└── types/               # TypeScript type definitions
```

## Key Components

### Landing Page
- **Navbar**: Glassmorphic navigation with smart scroll behavior
- **HeroSection**: Rotating carousel of scenic destination images
- **Features**: Service cards with hover animations
- **DestinationCountries**: Country cards with scenic headers
- **ImmigrationStats**: Statistics with image gallery
- **CTASection**: Call-to-action with background grid

### Assessment System
- Multi-step form with progress tracking
- Real-time eligibility calculation
- Country-specific visa requirements
- Risk assessment scoring
- Personalized recommendations

### Dashboard
- Application tracking
- Document management
- Payment history
- Profile settings
- Real-time notifications

## Styling

The application uses a minimalistic color scheme:
- Primary: Black (#000000)
- Secondary: Gray shades (#6B7280, #9CA3AF)
- Background: White (#FFFFFF) and Gray (#F9FAFB)
- Accent: Minimal use of color for CTAs

No purple gradients are used throughout the application.

## External Images

The application loads images from external sources configured in `next.config.ts`:
- Unsplash (for scenic images)
- Pexels (for stock photos)
- Placeholder services

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # Run TypeScript compiler
```

## Environment Variables

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5555
NEXT_PUBLIC_SOCKET_URL=http://localhost:5555

# Authentication
NEXTAUTH_URL=http://localhost:3004
NEXTAUTH_SECRET=your-secret-key

# External Services
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-key
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-key

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_CHAT=true
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary and confidential.

## Support

For support, email support@migrahub.com