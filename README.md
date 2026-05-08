# FoonFai

Web app for checking PM2.5 air quality data in Chiang Rai, Thailand.

**Live:** https://foonfai.thanapatsan.net

## Data Sources

- **Yakkaw** (MFU) — PM2.5 readings averaged over 6 hours, sorted by value

## Stack

- [Next.js 16](https://nextjs.org/) (Pages Router)
- React 19, Tailwind CSS v4, SWR, Axios

## Commands

```bash
npm run dev        # dev server at localhost:3000
npm run build      # production build
npm run start      # serve production build
npm test           # run Jest test suite
npm run test:watch # run tests in watch mode
npm run lint       # lint pages/ and components/
```

## Project Structure

```
pages/
  index.js          # root page (Yakkaw data)
  yakkaw.js         # full Yakkaw view
  api/              # API routes serving station JSON
components/
  helpers.js        # AQI calculation logic (TH + US AQI)
  common.js         # shared display components
  *Widget.js        # small / median / full widget variants
styles/
  main.css          # Tailwind v4 entry + AQI color classes
__tests__/
  helpers.test.js   # AQI calculation unit tests
  common.test.js    # React component tests
  api.test.js       # API route tests
```
