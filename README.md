# CrossFit Black Edition Games Dashboard

A React-based dashboard for the CrossFit Black Edition Games 2025 competition.

## 🔎 Current State (feature/app-structure-dashboard)

This branch contains a routed app structure with a growing set of pages and a solid custom CSS system (no Tailwind dependency):

- Routing and Navigation

  - `/` Home (hero + overview + categories + standards + registration + sponsors + contact)
  - `/dashboard` Athlete Dashboard (recent WODs, top athletes – mock data)
  - `/wods` WOD Library (descriptions, movements, demo links)
  - `/wods/:id` WOD Detail (movements, demo link)
  - `/athletes` Athletes List + Search (links to scorecards)
  - `/athlete/:id` Athlete Scorecard (scores per WOD – mock data)
  - `/categories` Categories breakdown
  - `/rules` Rules page (initial content)
  - `/faq` FAQ (initial content)
  - `/movements` Movement Library (curated YouTube links)

- Components/Data

  - `src/data/mock.ts` with sample athletes, WODs and scores
  - `ShareCard` scaffold for Instagram-friendly branded cards
  - Consistent header/footer, hero, and section styles in `src/App.css`

- Deployment
  - Frontend hosted on Vercel (GitHub integration). DNS for custom domain in progress.

## 🏷️ Versions

### Version 0.1 - Full Dashboard (Master Branch)

- Complete competition dashboard with all features
- Registration form with TypeScript
- Movement standards table
- Categories breakdown
- Sponsors section
- Responsive design
- Custom CSS utility system (no external dependencies)

### Version 0.0.1 - Demo Landing Page (Current Branch: demo-landing-v0.0.1)

- Simple landing page for quick demo
- Event information and dates
- Social media links
- Links to main website (crossfitblackedition.pt)
- Clean, minimal design
- Perfect for crossfitblackedition.games placeholder

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

## 🔄 Switching Between Versions

### To use Full Dashboard (v0.1):

```bash
git checkout master
```

### To use Demo Landing Page (v0.0.1):

```bash
git checkout demo-landing-v0.0.1
```

## 🌐 Deployment

### For crossfitblackedition.games (Demo Landing Page):

- Use the `demo-landing-v0.0.1` branch
- Simple, fast-loading landing page
- Links to main website for full functionality

### For Full Dashboard:

- Use the `master` branch
- Complete competition management system
- All features and functionality included

## 📱 Features

- **Responsive Design**: Works on all devices
- **Modern UI**: Clean, professional design
- **Fast Loading**: Optimized for performance
- **Accessibility**: WCAG compliant
- **TypeScript**: Type-safe development
- **No External Dependencies**: Stable and reliable

## 🎯 Purpose

This project serves as both a demo landing page and a full competition dashboard for the CrossFit Black Edition Games 2025, providing a seamless experience for athletes and organizers.

---

## 🗺️ Roadmap & Next Actions

Short-term (Frontend):

- Athlete search improvements (filter by category/team; deep link via query params)
- WOD tables per category (display scoring type, caps, tie-breaks)
- WOD releases schedule module with countdowns
- Share Card generator (PNG export) for Athlete/WOD results with CFBE branding/hashtag

Data & Back-end Options (to capture real athlete performances):

- Option A: Google Sheets + API gateway (quick, low ops)
  - Use a single Google Sheet for athletes, teams, scores
  - Lightweight proxy (Cloud Functions/Vercel Functions) to read/write
- Option B: Supabase (Postgres + Auth + Storage)
  - Tables: athletes, teams, wods, scores, categories, movements
  - Row Level Security to protect edits; simple admin UI
- Option C: Vercel Postgres or Neon + Prisma
  - Fits existing Vercel pipeline; type-safe schema migrations
- Option D: Airtable (no-code friendly, quick admin)

Recommended starting point: Supabase (fast to stand up, free tier, SQL-based, good auth). Alternative: Google Sheets if you prefer “spreadsheet-first” workflows.

Environment variables (Vercel / local .env):

```bash
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
# For serverless write routes (later): SUPABASE_SERVICE_ROLE_KEY=...
```

Apply schema (in Supabase SQL editor):

```sql
-- See supabase/schema.sql in repo for full version
```

Initial Data Model (minimal):

- athletes(id, name, email, category, team_id)
- teams(id, name, type)
- wods(id, name, description, scoring_type, cap_seconds)
- scores(id, athlete_id, wod_id, score_value, rank, notes, created_at)
- categories(key, name, notes)

Roles & Flows:

- Admin panel (protected) to manage athletes, teams, WOD definitions
- Judge entry form (mobile-friendly) to submit scores quickly
- Public read endpoints/pages for leaderboard and athlete pages

Delivery Plan:

1. Stand up Supabase project + tables + service keys (or choose Option A/D)
2. Add lightweight API routes (Vercel Functions) for scores/athletes CRUD
3. Swap mock data for live API in Dashboard, Athletes, and WOD pages
4. Add Admin/Judge views guarded by simple auth (one-time magic links or password)
5. Implement Share Card export (html-to-image or html2canvas)

If you prefer a no-backend start, I can wire Google Sheets now and migrate later with minimal changes.
