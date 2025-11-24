# 🎯 SHL Assessment RAG Frontend

A modern, responsive Next.js frontend for the SHL Assessment Recommendation System. Provides an intuitive interface for discovering and exploring SHL assessments using AI-powered recommendations.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)
![Responsive](https://img.shields.io/badge/Responsive-Design-green)

## ✨ Features

- **🔍 Smart Search Interface** - Natural language queries for assessment discovery
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **⚡ Next.js 14 App Router** - Latest React framework with superior performance
- **🎨 Modern UI/UX** - Clean, professional design with Tailwind CSS
- **🔄 Real-time Results** - Instant AI-powered recommendations
- **📊 Beautiful Visualization** - Clear display of assessment matches and scores
- **🎯 TypeScript** - Full type safety and better developer experience

## 🏗️ Project Structure
```bash
shl-frontend/
├── 🗂️ app/ # Next.js 14 App Router
│ ├── 🎯 page.tsx # Homepage with search
│ ├── 📊 result/page.tsx # Results display page
│ ├── 🏗️ layout.tsx # Root layout component
│ └── 🎨 globals.css # Global styles & Tailwind
├── 🗂️ components/ # Reusable React Components
│ ├── 🔍 QueryBox.tsx # Search input with examples
│ ├── 📄 ResultDisplay.tsx # AI recommendations display
│ ├── ⏳ LoadingSpinner.tsx # Loading states
│ ├── 🃏 AssessmentCard.tsx # Individual assessment cards
│ └── 🏷️ Header.tsx # Navigation & branding
├── 🗂️ lib/ # Utilities & Configuration
│ ├── 🌐 api.ts # Backend API communication
│ ├── 🔧 utils.ts # Helper functions
│ └── 📋 constants.ts # App constants & configuration
├── 🗂️ public/ # Static Assets
│ ├── 🖼️ favicon.ico # Site icon
│ ├── 🎨 logo.svg # Application logo
│ └── 🖼️ images/ # Image assets
└── ⚙️ Configuration Files
├── 📦 package.json # Dependencies & scripts
├── ⚙️ next.config.ts # Next.js configuration
├── 🔷 tsconfig.json # TypeScript settings
└── 🎯 eslint.config.mjs # Code linting

```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/shl-assessment-frontend.git
```
cd shl-assessment-frontend
Install dependencies

bash
```
npm install
# or
yarn install
# or
pnpm install
```
Environment Setup
```
Create .env.local file:
```
env
```
NEXT_PUBLIC_API_URL=http://localhost:8000
Run development server

bash
npm run dev
# or
yarn dev
# or
pnpm dev
Open http://localhost:3000 in your browser.
```
🎯 Component Overview
🔍 QueryBox Component
Purpose: Search input with intelligent query suggestions

Features:

Example query buttons

Real-time validation

Loading states

Responsive design

📄 ResultDisplay Component
Purpose: Display AI recommendations and assessment matches

Features:

Structured AI analysis view

Assessment cards with scores

Skills visualization

Match percentage indicators

🃏 AssessmentCard Component
Purpose: Individual assessment display

Features:

Score visualization

Skills tags

Duration and category info

Responsive layout

🌐 API Integration
The frontend communicates with the FastAPI backend:

typescript
// Example API call
const getRecommendation = async (query: string) => {
  const response = await fetch(`${API_BASE_URL}/api/recommend`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, top_k: 5 })
  });
  return response.json();
};
Environment Variables
Variable	Description	Default
NEXT_PUBLIC_API_URL	Backend API base URL	http://localhost:8000
🛠️ Development
Available Scripts
bash
# Development server
```
npm run dev
```
# Production build
```
npm run build
```
# Start production server
```
npm start
```

# Lint code
npm run lint

# Type checking
npx tsc --noEmit
Adding New Components
Create component in components/ directory

Export from components/index.ts (if needed)

Import and use in pages

Styling Guidelines
Use Tailwind CSS for styling

Follow responsive design principles

Maintain consistent color scheme

Ensure accessibility compliance

🎨 UI/UX Features
Design System
Colors: Professional blue gradient theme

Typography: System fonts with proper hierarchy

Spacing: Consistent 4px base unit

Components: Reusable with variant support

Responsive Breakpoints
Mobile: < 768px

Tablet: 768px - 1024px

Desktop: > 1024px

Loading States
Search submission loading

API call progress indicators

Smooth transitions and animations

📱 Deployment
Vercel (Recommended)
Push code to GitHub

Connect Vercel to repository

Set environment variables

Auto-deploys on push

bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
Other Platforms
Netlify: netlify deploy --prod

Railway: Connect GitHub repo

Manual: npm run build + static hosting

🔧 Configuration
Next.js Config (next.config.ts)
typescript
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['your-image-domain.com'],
  },
}

export default nextConfig
Tailwind Config
javascript
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
      }
    },
  },
}
🐛 Troubleshooting
Common Issues
Build Errors

bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
API Connection Issues

Verify backend is running on correct port

Check NEXT_PUBLIC_API_URL environment variable

Ensure CORS is configured in backend

Styling Issues

Check Tailwind CSS is properly configured

Verify class names are correct

Ensure responsive classes are applied

Development Tips
Use React DevTools for debugging

Enable strict mode in TypeScript

Utilize Next.js built-in optimization

Monitor bundle size with @next/bundle-analyzer

🤝 Contributing
We welcome contributions! Please see our development workflow:

Fork the repository

Create a feature branch: git checkout -b feature/amazing-feature

Commit changes: git commit -m 'Add amazing feature'

Push to branch: git push origin feature/amazing-feature

Open a Pull Request

Development Setup
bash
# Pre-commit hooks (optional)
npx husky install

# Code formatting
npx prettier --write .

# Linting
npm run lint
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Next.js Team for the amazing framework

Tailwind CSS for the utility-first CSS framework

SHL for assessment data and inspiration

Vercel for seamless deployment

