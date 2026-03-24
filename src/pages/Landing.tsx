import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/Landing.scss';

export const Landing = () => {
  const { t } = useLanguage();

  return (
    <div className="landing">
      <motion.div
        className="landing-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/gallery-051.jpg`}
            alt={t.landing.name}
            className="hero-image"
          />
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          {t.landing.name}
        </motion.h1>

        <motion.p
          className="hero-dates"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        >
          {t.landing.dates}
        </motion.p>
      </motion.div>
    </div>
  );
};
