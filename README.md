# Susan Kravstov - In Memoriam

A memorial website built with love to honor the life and memory of Susan Kravstov.

## Features

- Bilingual support (English/Russian)
- Mobile-first responsive design
- Elegant animations with Framer Motion
- Photo gallery with lightbox and download functionality
- Clean, accessible design following Uncodixify principles

## Setup

1. Install dependencies:
```bash
npm install
```

2. Add photos to `public/images/`:
   - `susan-hero.jpg` - Landing page hero image
   - `gallery-01.jpg` through `gallery-20.jpg` - Gallery images

3. Update content in `src/i18n/translations.ts`:
   - Replace placeholder dates with actual dates
   - Update obituary text in both English and Russian

4. Run development server:
```bash
npm run dev
```

## Deployment to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will create a `gh-pages` branch and deploy the site.

3. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` / `root`

The site will be available at: `https://[your-username].github.io/susan-kravstov/`

## Technology Stack

- React 18
- TypeScript
- Vite
- SASS
- Framer Motion
- React Router

## Design Philosophy

This website follows the Uncodixify design principles:
- Clean, functional design
- Subtle animations and transitions
- Warm color palette inspired by flowers
- Elegant typography with script headings
- Mobile-first responsive approach

---

Made with love by Susan's Grandson, Josh
