# Image Preparation Guide

## Required Images

### Landing Page Hero Image
**Filename**: `public/images/susan-hero.jpg`

**Specifications**:
- Recommended size: 800x800px (square) or 800x1000px (portrait)
- Format: JPG or PNG
- Max file size: 500KB (optimize for web)
- Should be a clear, well-lit portrait photo

**Tips**:
- Choose a photo where Susan is smiling or looking peaceful
- Ensure good contrast and clarity
- Portrait orientation works best on mobile

### Gallery Images
**Filenames**: `public/images/gallery-01.jpg` through `gallery-20.jpg`

**Specifications**:
- Recommended size: 1200x1200px (square) or similar
- Format: JPG
- Max file size per image: 300-500KB
- Total: 20 images (you can add more or fewer)

**Tips**:
- Mix of portrait and landscape photos works well
- Include photos from different life stages
- Family gatherings, celebrations, candid moments
- Ensure photos are high enough quality for viewing full-screen

## Optimizing Images

### Online Tools (Free)
- **TinyPNG** (https://tinypng.com) - Compress JPG/PNG
- **Squoosh** (https://squoosh.app) - Google's image optimizer
- **ImageOptim** (Mac) or **FileOptimizer** (Windows)

### Quick Optimization Tips
1. Resize large images to max 1200px on longest side
2. Save as JPG with 80-85% quality
3. Remove EXIF data if desired (for privacy)

## Changing Number of Images

### If You Have Fewer Than 20 Images

Edit `src/pages/Gallery.tsx` line 8:
```typescript
// Change 20 to your actual number
const galleryImages = Array.from({ length: 15 }, (_, i) => ({
```

### If You Have More Than 20 Images

Just add them as `gallery-21.jpg`, `gallery-22.jpg`, etc. and update the number in the same line.

### Hover Gallery Preview

The hover gallery on the memorial page shows 5 images. To change which images appear:

Edit `src/components/HoverGallery.tsx` lines 6-12 to select different images.

## File Naming Convention

**Important**: Use exactly these names or update the code:
- Must be lowercase
- Must use hyphens (not underscores)
- Must be numbered with leading zeros: `01`, `02`, `03`, etc.

**Good**:
- `susan-hero.jpg`
- `gallery-01.jpg`
- `gallery-15.jpg`

**Bad**:
- `Susan_Hero.jpg` (uppercase, underscore)
- `gallery-1.jpg` (missing leading zero)
- `Gallery 01.jpg` (spaces)

## Testing Images

After adding images, test:
1. Landing page hero displays correctly
2. Gallery grid loads all images
3. Lightbox opens and shows full-size images
4. Download button works
5. Images look good on mobile (test on actual device if possible)
