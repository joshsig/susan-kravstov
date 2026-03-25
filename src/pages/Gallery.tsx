import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/Gallery.scss';

const GALLERY_IMAGE_COUNT = 128;

const galleryImages = Array.from({ length: GALLERY_IMAGE_COUNT }, (_, i) => ({
  src: `${import.meta.env.BASE_URL}images/gallery-${String(i + 1).padStart(3, '0')}.jpg`,
  title: `Memory ${i + 1}`,
}));

export const Gallery = () => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const downloadImage = () => {
    const image = galleryImages[currentImageIndex];
    const link = document.createElement('a');
    link.href = image.src;
    link.download = `susan-kravstov-${String(currentImageIndex + 1).padStart(3, '0')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [lightboxOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <div className="gallery-page">
      <div className="gallery-container">
        <motion.h1
          className="gallery-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {t.gallery.title}
        </motion.h1>

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-grid-item"
              variants={itemVariants}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="gallery-grid-image"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label={t.gallery.close}
            >
              ×
            </button>

            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].title}
                className="lightbox-image"
              />
            </div>

            <div className="lightbox-chrome" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="lightbox-nav lightbox-prev"
                onClick={goToPrevious}
                aria-label={t.gallery.previous}
              >
                ‹
              </button>
              <button
                type="button"
                className="btn btn-primary lightbox-download"
                onClick={downloadImage}
              >
                {t.gallery.download}
              </button>
              <button
                type="button"
                className="lightbox-nav lightbox-next"
                onClick={goToNext}
                aria-label={t.gallery.next}
              >
                ›
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
