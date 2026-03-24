# Quick Start Guide

## Immediate Next Steps

### 1. Install Dependencies (5 minutes)

```bash
npm install
```

### 2. Add Photos (10 minutes)

Place your photos in `public/images/`:
- `susan-hero.jpg` - Main photo for landing page
- `gallery-01.jpg` to `gallery-20.jpg` - Gallery photos

**Important**: You can add more or fewer gallery images. If you change the number:
- Edit `src/pages/Gallery.tsx` (line 8) to adjust the array length
- Edit `src/components/HoverGallery.tsx` (line 6-12) to show 5 preview images

### 3. Update Content (15 minutes)

Edit `src/i18n/translations.ts`:

**English section** (line 26-60):
- Update `dates` field with actual birth and passing dates
- Replace obituary paragraphs with your own text

**Russian section** (line 61-95):
- Update Russian translations
- Replace obituary paragraphs with Russian text

### 4. Test Locally (5 minutes)

```bash
npm run dev
```

Open http://localhost:5173 and verify:
- Photos display correctly
- Text is accurate
- Mobile view works (resize browser to 375px)
- Language toggle switches between EN/RU
- Gallery opens and download works

### 5. Deploy to GitHub Pages (10 minutes)

```bash
npm run deploy
```

Then enable GitHub Pages:
1. Go to repository Settings → Pages
2. Source: `gh-pages` branch
3. Save

Site will be live at: `https://[your-username].github.io/susan-kravstov/`

---

**Total time: ~45 minutes from start to live website**

## Need Help?

See `DEPLOYMENT.md` for detailed instructions and troubleshooting.
