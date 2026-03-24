# Deployment Guide

## Before Deploying

### 1. Add Your Photos

Place your photos in the `public/images/` folder:

- `susan-hero.jpg` - Main landing page photo (recommended: 800x800px or similar)
- `gallery-01.jpg` through `gallery-20.jpg` - Gallery photos

You can add more or fewer gallery images by editing `src/pages/Gallery.tsx` and `src/components/HoverGallery.tsx`.

### 2. Update Content

Edit `src/i18n/translations.ts` to update:

- Birth date (replace `[Birth Date]`)
- Obituary paragraphs (both English and Russian)
- Any other text content

### 3. Test Locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser and test:
- Mobile view (resize browser to 375px width)
- Tablet view (768px)
- Desktop view (1024px+)
- Both English and Russian languages
- All navigation and gallery features

## Deploying to GitHub Pages

### Option 1: Using the Deploy Script (Recommended)

```bash
npm run deploy
```

This will:
1. Build the production version
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub

### Option 2: Manual Deployment

```bash
# Build the project
npm run build

# Install gh-pages if not already installed
npm install -g gh-pages

# Deploy
gh-pages -d dist
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

Your site will be live at: `https://[your-username].github.io/susan-kravstov/`

## Troubleshooting

### Images Not Loading

If images don't load after deployment:
1. Make sure images are in `public/images/` (not `src/assets/`)
2. Check that image filenames match exactly (case-sensitive)
3. Clear browser cache and hard refresh (Ctrl+Shift+R)

### 404 on Page Refresh

GitHub Pages doesn't support client-side routing by default. To fix:
1. Add a `404.html` file that redirects to `index.html`
2. Or use hash routing instead of browser routing

### Base Path Issues

If links are broken, verify `vite.config.ts` has the correct base path:
```typescript
base: '/susan-kravstov/'  // Must match your repo name
```

## Making Updates

After making changes:

```bash
npm run deploy
```

Changes will be live within 1-2 minutes.

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to `public/` with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings
