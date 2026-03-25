import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { HoverGallery } from '../components/HoverGallery';
import { Video } from './Video';
import '../styles/Memorial.scss';

export const Memorial = () => {
  const { t } = useLanguage();

  return (
    <div id="memorial" className="memorial">
      <div className="memorial-container">
        <motion.h2
          className="memorial-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {t.memorial.title}
        </motion.h2>

        <div className="memorial-content">
          {t.memorial.paragraphs.map((paragraph, index) => (
            <motion.div
              key={index}
              className="memorial-paragraph"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
            >
              <p>{paragraph}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Video />

      <HoverGallery />
    </div>
  );
};
