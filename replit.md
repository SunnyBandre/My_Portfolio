# Overview

This is a personal portfolio website for Sunny Bandre, a web developer. It showcases projects, work experience, skills, and education in a modern, animated single-page application with a project details page. The app uses a full-stack architecture with a React frontend and Express backend, backed by a PostgreSQL database. However, the frontend currently reads data from a static local data file (`client/src/lib/data.ts`) rather than making API calls to the backend, while the backend seeds and serves the same data via REST endpoints.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite (dev server proxied through Express in development)
- **Routing**: Wouter (lightweight React router) with `AnimatePresence` from Framer Motion for page transitions
- **State/Data Fetching**: TanStack React Query is set up but the portfolio data hooks (`client/src/hooks/use-portfolio.ts`) currently return static data from `client/src/lib/data.ts` instead of fetching from the API. The `queryClient` and `apiRequest` utility are available for future API integration.
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode). Custom fonts: Outfit (display), Plus Jakarta Sans (body), JetBrains Mono (mono). The theme toggle uses `document.documentElement.classList` and `localStorage`.
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives. Components live in `client/src/components/ui/`. Path alias `@/` maps to `client/src/`.
- **Animations**: Framer Motion used extensively for scroll animations, page transitions, and micro-interactions.
- **Pages**: Home (single page with hero, about, experience, projects, skills, education, contact sections) and ProjectDetails (`/project/:id`).
- **Key path aliases**: `@/` → `client/src/`, `@shared/` → `shared/`, `@assets/` → `attached_assets/`

### Backend
- **Framework**: Express 5 running on Node.js with TypeScript (executed via `tsx`)
- **API Pattern**: REST endpoints under `/api/` prefix. Routes defined in `server/routes.ts` with route contracts in `shared/routes.ts`.
- **Endpoints**: `GET /api/projects`, `GET /api/projects/:id`, `GET /api/experience`, `GET /api/skills`, `GET /api/education`, `GET /api/personal-info`
- **Database seeding**: The server seeds the database with portfolio content on startup if no personal info exists yet (in `server/routes.ts`).
- **Static serving**: In production, the built client assets are served from `dist/public`. In development, Vite dev server middleware is used (`server/vite.ts`).
- **Build process**: Custom build script (`script/build.ts`) uses Vite for client build and esbuild for server bundle. Output goes to `dist/`.

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (connection via `DATABASE_URL` environment variable, using `pg` Pool)
- **Schema**: Defined in `shared/schema.ts` with five tables:
  - `projects` — id, title, shortDescription, fullDescription, techStack (text array), link, githubLink, imageUrl, category
  - `experience` — id, company, role, duration, description (text array)
  - `skills` — id, category, items (text array)
  - `education` — id, degree, institution, year, grade
  - `personal_info` — id, name, role, email, phone, location, socialLinks (jsonb), bio
- **Validation**: Zod schemas generated from Drizzle schema via `drizzle-zod` (`createInsertSchema`)
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files). Config in `drizzle.config.ts`.
- **Storage abstraction**: `IStorage` interface in `server/storage.ts` with `DatabaseStorage` implementation using Drizzle queries.

### Shared Code
- `shared/schema.ts` — Database schema and Zod validation schemas, shared between server and client
- `shared/routes.ts` — API route contracts with Zod response types (currently used for type safety, not runtime validation middleware)

## External Dependencies

- **PostgreSQL** — Primary database, connected via `DATABASE_URL` environment variable. Uses `pg` package with `connect-pg-simple` for session storage capability.
- **Google Fonts** — Outfit, Plus Jakarta Sans, JetBrains Mono, DM Sans, Fira Code, Geist Mono loaded via CDN
- **Unsplash** — Fallback project images referenced in component code
- **No authentication** — This is a public portfolio site with no auth system
- **No external APIs consumed** — All data is self-contained (seeded database + static data file)
- **Replit plugins** — `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` used in development