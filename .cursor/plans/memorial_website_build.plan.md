---
name: ""
overview: ""
todos:
  - id: setup-project
    content: Initialize Vite + React + TypeScript project with SASS and dependencies
    status: completed
  - id: design-system
    content: Create SASS variables for colors, typography, spacing, and type scale
    status: completed
  - id: i18n-setup
    content: Build language context and translation system for English/Russian
    status: completed
  - id: nav-footer
    content: Build Nav and Footer components with language toggle
    status: completed
  - id: landing-page
    content: Create Landing page with hero photo, name, dates, and animations
    status: completed
  - id: memorial-section
    content: Build Memorial section with scroll-triggered paragraph animations
    status: completed
  - id: hover-gallery
    content: Create HoverGallery component with mobile-first responsive design
    status: completed
  - id: gallery-page
    content: Build full Gallery page with lightbox, download, and navigation
    status: completed
  - id: routing
    content: Set up React Router for page navigation
    status: completed
  - id: responsive-testing
    content: Test and refine responsive design across all breakpoints
    status: completed
  - id: github-pages
    content: Configure Vite for GitHub Pages deployment
    status: completed
isProject: false
---

# Memorial Website for Susan Kravstov

Build a beautiful, responsive memorial website for Susan Kravstov using React, TypeScript, Vite, and SASS. The site will feature bilingual support (English/Russian), elegant animations with Framer Motion, and a mobile-first design philosophy following the Uncodixify principles.

## Project Structure

Create a Vite + React + TypeScript project with the following structure:

```
susan-kravstov/
├── public/
│   └── images/          # Static gallery images
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── HoverGallery.tsx
│   │   └── LanguageToggle.tsx
│   ├── pages/
│   │   ├── Landing.tsx
│   │   ├── Memorial.tsx
│   │   └── Gallery.tsx
│   ├── styles/
│   │   ├── _variables.scss    # Colors & typography from Uncodixify.md
│   │   ├── _typography.scss   # Type scale system
│   │   ├── _base.scss
│   │   └── main.scss
│   ├── i18n/
│   │   ├── translations.ts    # English & Russian content
│   │   └── LanguageContext.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
└── package.json
```

## Design System Implementation

### Color Palette

Use the exact palette from `[Uncodixify.md:159-287](c:\Users\jsig8\Documents\GitHub\susan-kravstov\Uncodixify.md)`:

- **Floral pastels**: Blush Rose, Wisteria Mist, Sage Bloom, Peach Blossom, Dusty Mauve
- **Neutrals**: Ivory Petal (page bg), Warm Linen (cards), Parchment (subtle), Aged Bone (borders)
- **Typography colors**: Deep Soil (headings), Driftwood (body), Warm Stone (muted), Dark Rose (links)
- **Dark elements**: Midnight Bark (nav/footer)

### Typography System

From `[Uncodixify.md:289-327](c:\Users\jsig8\Documents\GitHub\susan-kravstov\Uncodixify.md)`:

- **Heading**: `'Pinyon Script'` (English) / `'Ruslan Display'` (Russian) — 48px+ only
- **Subtitle**: `'Jost'` — weights 300/400/500 for metadata/nav/badges
- **Body**: `'Bodoni Muse'` — weight 300, 16-18px, line-height 1.85

Implement type scale using SASS variables following modular scale (1.25 ratio):

```scss
$type-base: 16px;
$type-scale: 1.25;
$type-xs: $type-base / $type-scale / $type-scale;  // ~10px
$type-sm: $type-base / $type-scale;                 // ~13px
$type-md: $type-base;                               // 16px
$type-lg: $type-base * $type-scale;                 // 20px
$type-xl: $type-base * $type-scale * $type-scale;   // 25px
$type-2xl: $type-base * $type-scale * $type-scale * $type-scale; // ~31px
$type-hero: 48px; // Minimum for Pinyon Script
```

### Uncodixify Compliance

Following the rules from `[Uncodixify.md](c:\Users\jsig8\Documents\GitHub\susan-kravstov\Uncodixify.md)`:

- **Border radius**: 8-12px max (no pill shapes)
- **Shadows**: Subtle only — `0 2px 8px rgba(0,0,0,0.1)` max
- **Transitions**: 100-200ms ease, no transform effects
- **Spacing**: Consistent scale 4/8/12/16/24/32px
- **NO eyebrow labels** (`<small>` headers banned)
- **NO decorative copy** or hero sections in wrong contexts
- **NO oversized rounded corners** (20-32px range banned)
- **NO dramatic shadows** or glows

## Component Architecture

### 1. Navigation (`Nav.tsx`)

- Simple, elegant horizontal nav
- Links: "In Memoriam" | "Gallery" (Gallery only via CTA, not in nav per user request)
- Actually just: "In Memoriam" link
- Language toggle component (flag icons or "EN / RU" text toggle)
- Fixed position on scroll, subtle background
- Mobile: hamburger menu (simple, no fancy animations)
- Framer Motion: Single fade-in animation on mount

### 2. Landing Page (`Landing.tsx`)

- Hero photo of Susan (placeholder for now)
- Name in Pinyon Script (48px+)
- Dates of life in Jost (weight 300)
- Framer Motion: Staggered fade-in for photo → name → dates
- Mobile-first: Stack vertically, ensure photo scales properly

### 3. Memorial Section (`Memorial.tsx`)

- Multi-paragraph obituary content
- Each paragraph in separate `<div>` with Framer Motion `whileInView` animation
- Fade-in + subtle slide-up (10-20px max, per Uncodixify rules)
- Scroll-triggered animations using `viewport={{ once: true }}`
- Typography: Bodoni Muse body text, proper line-height 1.85
- Mobile: Reduce padding, maintain readability

### 4. Hover Gallery Component (`HoverGallery.tsx`)

- Display ~5 images in hover gallery
- Mobile-first: Touch-friendly, no hover effects on mobile
- Desktop: Hover reveals image title/caption
- Below gallery: CTA button "View Full Gallery" → routes to Gallery page
- Framer Motion: Single animation on gallery container (not nested on images)
- Responsive: Different layouts for mobile/tablet/desktop

### 5. Gallery Page (`Gallery.tsx`)

- Photo grid layout using CSS Grid
- Responsive columns: 1 (mobile) → 2 (tablet) → 3 (desktop)
- Click image → open lightbox modal
- Lightbox features:
  - Large image display
  - Download button (works on desktop/iOS/Android)
  - Previous/Next navigation arrows
  - Close button (ESC key support)
  - Keyboard navigation (arrow keys)
- Images served from `/public/images/` for fast static delivery
- Lazy loading for performance
- Framer Motion: Staggered grid item fade-in

### 6. Footer (`Footer.tsx`)

- Simple layout, no decorative elements
- Nav links (if needed)
- "Made by Susan's Grandson, [Josh](https://joshsig.ca)"
- Minimal height, clean typography

## Internationalization (i18n)

### Language Context

Create React Context for language state:

```typescript
type Language = 'en' | 'ru';
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
```

### Translation Structure

```typescript
const translations = {
  en: {
    nav: { memorial: 'In Memoriam', gallery: 'Gallery' },
    landing: { name: 'Susan Kravstov', dates: '...' },
    memorial: { obituary: [...] },
    gallery: { title: 'Gallery', download: 'Download' },
    footer: { madeBy: 'Made by Susan\'s Grandson' }
  },
  ru: {
    // Russian translations (placeholders for now)
  }
};
```

### Font Loading

Update `<html lang="...">` attribute when language changes to trigger Russian font override:

```typescript
useEffect(() => {
  document.documentElement.lang = language;
}, [language]);
```

## Animation Strategy (Framer Motion)

**Critical Rule**: One animation per div (no nesting)

### Landing Page

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  {/* Photo + name + dates */}
</motion.div>
```

### Memorial Paragraphs

```typescript
<motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.4 }}
>
  {/* Paragraph content */}
</motion.div>
```

### Gallery Grid

```typescript
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {images.map((img, i) => (
    <motion.div key={i} variants={itemVariants}>
      {/* Image */}
    </motion.div>
  ))}
</motion.div>
```

## Responsive Design (Mobile-First)

### Breakpoints

```scss
$mobile: 320px;
$tablet: 768px;
$desktop: 1024px;
$wide: 1440px;
```

### Mobile Strategy

- Base styles for mobile (320px+)
- Use `min-width` media queries to enhance for larger screens
- Test on: iPhone SE (375px), standard mobile (390px), tablet (768px)
- Touch targets: Minimum 44x44px for buttons/links
- Font sizes: Slightly smaller on mobile, scale up for desktop
- Images: `max-width: 100%`, `height: auto`

## GitHub Pages Deployment

### Vite Configuration

```typescript
// vite.config.ts
export default defineConfig({
  base: '/susan-kravstov/', // Repository name
  build: {
    outDir: 'dist',
  },
});
```

### Build & Deploy

1. Build: `npm run build`
2. Create `gh-pages` branch
3. Push `dist/` folder to `gh-pages` branch
4. Enable GitHub Pages in repo settings → source: `gh-pages` branch

### Deployment Script

Add to `package.json`:

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

## Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.0",
    "framer-motion": "^11.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.4.0",
    "vite": "^5.2.0",
    "sass": "^1.72.0",
    "gh-pages": "^6.1.0"
  }
}
```

## Content Placeholders

All content will use placeholders that you can replace:

### Images

- Landing hero: `public/images/susan-hero.jpg`
- Gallery images: `public/images/gallery-01.jpg` through `gallery-20.jpg`

### Text

- Name: "Susan Kravstov"
- Dates: "[Birth Date] – [Passing Date]"
- Obituary: Lorem ipsum paragraphs styled appropriately
- All text in both English and Russian (placeholder Russian text)

## Quality Checklist

- Mobile-first responsive design (test 320px → 1440px)
- Accessibility: semantic HTML, ARIA labels, keyboard navigation
- Performance: lazy loading, optimized images, code splitting
- Framer Motion: One animation per div, no nesting
- Typography: Proper type scale, correct font weights
- Colors: Exact palette from Uncodixify.md
- Uncodixify compliance: No banned patterns
- Bilingual: Full English/Russian support
- Gallery: Download works on all devices
- GitHub Pages: Correct base path configuration

