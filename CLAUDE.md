# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 15 design system project with custom site components built on top of shadcn/ui. This provides a comprehensive component library for building clean, consistent websites.

## Commands

```bash
# Development
pnpm dev          # Start dev server with Turbopack on http://localhost:3000

# Build & Production
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run Next.js linting
```

## Architecture

### Component Library Structure

The project has two main component systems:

1. **Custom Site Components** (`/components/site/`)
   - `ds.tsx` - Core design system components (Main, Nav, Section, Container, Header, Grid, Flex, Prose)
   - `form.tsx` - Advanced form component with webhook support and field validation
   - `site-ds.md` - Comprehensive component documentation

2. **shadcn/ui Components** (`/components/ui/`)
   - Full suite of shadcn/ui components (Button, Card, Dialog, etc.)
   - All components available and should be preferred for UI elements

### Key Design Principles

- **Always use existing components** - Never create custom components if one exists in site or shadcn/ui
- **Never add padding to Section/Container** - They have built-in spacing (Section: py-2 sm:py-4, Container: p-4 sm:p-6 max-w-5xl)
- **All CTAs must be functional** - Every button needs proper href, onClick, or form submission

### Component Import Pattern

```tsx
// Site components
import { Main, Nav, Section, Container, Header, Grid, Flex, Prose } from "@/components/site/ds"
import { Form } from "@/components/site/form"

// shadcn/ui components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
```

### Form Component Features

The Form component supports:
- Multiple field types (text, email, tel with formatting, textarea, select, multiselect, checkbox, radio, yesno, range, file)
- Built-in validation (required, patterns, length, custom)
- Webhook integration for Server Components
- Field dependencies and conditional logic
- Phone number auto-formatting

## Important Implementation Notes

1. **Page Structure**: Use Main > Section > Container hierarchy for consistent layout
2. **Typography**: Always use Header component with appropriate `as` prop (h1-h6)
3. **Functional CTAs**: Use Next.js Link, proper hrefs, or onClick handlers - no placeholder buttons
4. **Server Components**: Form component works in Server Components via webhookUrl prop
5. **Mobile-First**: All components are responsive by default
6. **Spacing**: Use default gap-4 unless specific design requires otherwise

## File Locations

- Next.js app router: `/app/`
- Custom components: `/components/site/`
- shadcn components: `/components/ui/`
- Utilities: `/lib/utils.ts`
- Hooks: `/hooks/`