# AGENTS.md

## Project

Next.js 16 (Pages Router) app displaying PM2.5 air quality data from two Thai sources: **Yakkaw** (MFU) and **CMU CCDC**.

## Commands

```bash
npm run dev    # localhost:3000
npm run build
npm run start
npm test       # run Jest tests
npm run test:watch  # run tests in watch mode
npx eslint pages components   # lint (next lint removed in v16)
```

## Testing

Jest + React Testing Library configured with `jest.config.js`.
Test files live in `__tests__/`:
- `helpers.test.js` — AQI calculation unit tests
- `common.test.js` — React component tests
- `api.test.js` — API route tests (using `node-mocks-http`)

## Architecture

- `pages/` — Route pages. `index.js` is the root; `yakkaw.js` and `cmuccdc.js` are data views.
- `pages/api/` — API routes serving JSON data for each source.
- `components/` — SmallWidget, MedianWidget, FullWidget variants for each source; `helpers.js` has AQI calculation logic.
- `styles/` — Tailwind entry via `main.css`.

## Styling

- Tailwind v4 uses CSS-based config in `styles/main.css` via `@theme {}` block. No `tailwind.config.js`.
- PostCSS plugin is `@tailwindcss/postcss` (not `tailwindcss` directly).
- `darkMode: "class"` is set via `@custom-variant dark (&:where(.dark, .dark *));`.
- Font: Bai Jamjuree (loaded via Google Fonts CSS import).

## API Data

`pages/api/data_yakkaw.{js,json}` and `pages/api/data_cmuccdc.{js,json}` return station arrays with `place`, `address`, `ddate`, `dtime`, `av6h` (PM2.5 avg over 6h).

## Key Changes from Original

- **Tailwind v4**: Config moved to CSS (`@theme` block). Nesting plugin removed (native in v4).
- **ESLint v9 / flat config**: Uses `eslint.config.mjs` (not `.eslintrc.json`). `next lint` removed — use `npx eslint .` directly.
- **Next.js 16**: Uses Turbopack by default. `next lint` CLI removed.

## Agent skills

### Issue tracker

Issues and specs live in GitHub Issues for `thanapatsan/foonfai`; use `gh`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the default labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repo using root `CONTEXT.md` and `docs/adr/`. See `docs/agents/domain.md`.
