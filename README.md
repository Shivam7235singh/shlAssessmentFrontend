shl-frontend/
├── 📂 .next/                          # Next.js build output (auto-generated)
│   ├── 📂 static/                     # Static assets
│   ├── 📂 server/                     # Server-side files
│   └── 📂 cache/                      # Build cache
│
├── 📂 app/                            # Next.js 14 App Router
│   ├── 📄 page.tsx                    # Home page (/)
│   ├── 📄 result/page.tsx             # Results page (/result)
│   ├── 📄 layout.tsx                  # Root layout
│   └── 📄 globals.css                 # Global styles
│
├── 📂 components/                     # Reusable React components
│   ├── 📄 QueryBox.tsx                # Search input component
│   ├── 📄 ResultDisplay.tsx           # Results display component
│   ├── 📄 LoadingSpinner.tsx          # Loading animation
│   ├── 📄 AssessmentCard.tsx          # Individual assessment card
│   └── 📄 Header.tsx                  # Page header/navigation
│
├── 📂 lib/                            # Utility functions & configurations
│   ├── 📄 api.ts                      # API client functions
│   ├── 📄 utils.ts                    # Helper functions
│   └── 📄 constants.ts                # App constants
│
├── 📂 public/                         # Static assets
│   ├── 📄 favicon.ico                 # Site favicon
│   ├── 📄 logo.svg                    # App logo
│   └── 📂 images/                     # Image assets
│
├── 📂 node_modules/                   # Dependencies (auto-generated)
│
├── 📄 .gitignore                      # Git ignore rules for frontend
├── 📄 eslint.config.mjs               # ESLint configuration
├── 📄 next-env.d.ts                   # Next.js TypeScript declarations
├── 📄 next.config.ts                  # Next.js configuration
├── 📄 package-lock.json               # Exact dependency versions
├── 📄 package.json                    # Project dependencies & scripts
├── 📄 postcss.config.mjs              # PostCSS configuration
├── 📄 README.md                       # Frontend documentation
└── 📄 tsconfig.json                   # TypeScript configuration