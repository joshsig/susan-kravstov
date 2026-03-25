import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import WaCarousel from '@awesome.me/webawesome/dist/react/carousel/index.js';
import WaCarouselItem from '@awesome.me/webawesome/dist/react/carousel-item/index.js';
import '@awesome.me/webawesome/dist/styles/webawesome.css';
import '../styles/HoverGallery.scss';

const galleryImages = [
  { src: `${import.meta.env.BASE_URL}images/gallery-001.jpg`, title: 'Memory 1' },
  { src: `${import.meta.env.BASE_URL}images/gallery-002.jpg`, title: 'Memory 2' },
  { src: `${import.meta.env.BASE_URL}images/gallery-003.jpg`, title: 'Memory 3' },
  { src: `${import.meta.env.BASE_URL}images/gallery-004.jpg`, title: 'Memory 4' },
  { src: `${import.meta.env.BASE_URL}images/gallery-005.jpg`, title: 'Memory 5' },
];

export const HoverGallery = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <motion.div
      id="gallery"
      className="hover-gallery-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="carousel-wrapper">
        <WaCarousel 
          pagination 
          navigation 
          loop
          autoplay
          autoplayInterval={4000}
          className="gallery-carousel"
        >
          {galleryImages.map((image, index) => (
            <WaCarouselItem key={index}>
              <img
                src={image.src}
                alt={image.title}
                className="carousel-image"
              />
            </WaCarouselItem>
          ))}
        </WaCarousel>
      </div>

      <div className="gallery-cta">
        <button
          className="btn btn-primary"
          onClick={() => navigate('/gallery')}
        >
          {t.gallery.viewFull}
        </button>
      </div>
    </motion.div>
  );
};
