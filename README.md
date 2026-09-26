# SparkRelay

Official website for SparkRelay.

A modern Next.js App Router website for an open-source organization, with:

- Multi-page architecture (`/`, `/projects`, `/about`)
- Shared content layer (`src/lib/site-content.ts`)
- Reusable UI components for navigation and footer
- Responsive glass-style visual design with light/dark theme toggle

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

The included GitHub Actions workflow exports the Next.js site and deploys it to GitHub Pages.
