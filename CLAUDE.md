# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Next.js 14 portfolio application with TypeScript and Tailwind CSS.

**Package Manager**: Use `pnpm` (as specified in README.md)

**Common Commands**:
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

**Type Checking**: Use `npx tsc --noEmit` for TypeScript validation

## Architecture Overview

**Framework**: Next.js 14 with App Router
- Uses TypeScript with strict mode enabled
- Single-page portfolio application with sections rendered on main page

**Project Structure**:
- `app/[lang]/` - Next.js App Router with dynamic locale segment
  - English (default) at `/` → rewrites to `/en`
  - Portuguese at `/pt`
- `components/` - Organized into UI components and layout sections
  - `ui/` - Shadcn/ui components and custom UI elements
  - `layout/` - Application layout components including navbar, theme provider
  - `layout/sections/` - Portfolio sections (hero, timeline, expertise, projects, services, about, contact, footer)
  - `icons/` - Custom icon components
- `lib/` - Utility functions and i18n helpers
  - `utils.ts` - Class merging utilities
  - `dictionaries.ts` - i18n configuration and dictionary loader
- `dictionaries/` - Translation files
  - `en.json` - English translations
  - `pt.json` - Portuguese translations
- `middleware.ts` - Locale detection and URL rewriting

**UI Framework**:
- Shadcn/ui components with Radix UI primitives
- Tailwind CSS for styling with zinc base color
- Custom CSS variables enabled
- Framer Motion for animations
- Theme support via next-themes

**Path Aliases**:
- `@/*` maps to root directory
- `@/components` for components
- `@/lib/utils` for utilities

**Key Dependencies**:
- React 18 with TypeScript
- Tailwind CSS with animations
- Radix UI components
- Framer Motion for animations
- React Hook Form with Zod validation
- Lucide React for icons

**Styling Conventions**:
- Uses Tailwind utility classes
- Component variants via class-variance-authority
- CSS variables for theming
- Mobile-first responsive design

**Component Patterns**:
- Functional components with TypeScript
- Props interfaces defined inline or exported
- Consistent use of forwardRef for UI components
- Section-based architecture for portfolio content

## Internationalization (i18n)

**Implementation**: Custom i18n using Next.js App Router (no external libraries)

**Supported Languages**:
- English (`en`) - Default language, served at `/`
- Portuguese (`pt`) - Served at `/pt`

**Architecture**:
- **Middleware** (`middleware.ts`): Handles locale detection and URL rewriting
  - Root path `/` → rewrites to `/en` internally
  - Portuguese content explicitly at `/pt`
- **Dictionary System**: JSON-based translations in `dictionaries/` folder
  - `getDictionary(locale)` helper function loads appropriate translations
  - All text content stored in structured JSON files
- **Route Structure**: `app/[lang]/` dynamic segment
  - `layout.tsx` - Generates metadata per language with alternates
  - `page.tsx` - Server component that loads dictionary and passes to sections
- **Component Props**: All sections receive `dict` prop with translations
  - Type-safe interfaces for translation objects
  - No client-side translation needed (server-rendered)

**Language Switcher**:
- Located in navbar component
- Simple toggle between `/` (EN) and `/pt` (PT)
- Uses `Languages` icon from Lucide React

**SEO**:
- Sitemap includes both language versions with alternates
- Metadata with `hreflang` alternates for each language
- Language-specific URLs for better SEO

**Adding New Translations**:
1. Add text to both `dictionaries/en.json` and `dictionaries/pt.json`
2. Update component props interface to include new fields
3. Use the dictionary values in component JSX