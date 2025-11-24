# Next Layer Consulting

Corporate website for Next Layer Consulting - UK-based NetSuite consultants, web development, and cyber security specialists.

## Overview

A modern, responsive React website featuring:

- **NetSuite Services** - Implementation, support (OneSupport®), and rescue services
- **Web Development** - Custom website design and development
- **Cyber Security** - Penetration testing and security consultancy
- **SuiteApps** - Custom NetSuite applications

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Fonts**: Playfair Display, system fonts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/torncheesecake/nextlayer.git

# Navigate to project directory
cd nextlayer

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── assets/          # Images, logos, PDFs
├── components/      # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── RouteHero.jsx
│   ├── SEO.jsx
│   └── ...
├── hooks/           # Custom React hooks
│   └── useScrollAnimation.js
├── pages/           # Page components
│   ├── Home/
│   ├── About/
│   ├── Contact/
│   ├── CyberSecurity/
│   ├── NetSuite/
│   ├── Web/
│   └── ...
└── routes.jsx       # Route definitions
```

## Environment Variables

Copy the example file and add your values:

```bash
cp .env.example .env.local
```

See `.env.example` for available configuration options.

## Security

- All commits are GPG signed
- Environment variables protected via `.gitignore`
- See `SECURITY.md` for security guidelines

## Deployment

Build the production bundle:

```bash
npm run build
```

Output is in the `dist/` directory, ready for deployment to any static hosting provider.

## Contact

**Next Layer Consulting**
- Website: [nextlayerconsulting.com](https://nextlayerconsulting.com)
- Email: hello@nextlayerconsulting.com
- Phone: +44 (0)1784 902 047

## License

Private and confidential. All rights reserved.
