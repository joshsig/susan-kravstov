import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/Video.scss';

const YOUTUBE_EMBED_ID = 'NjgLx0VOmyY';

export const Video = () => {
  const { t } = useLanguage();
  const embedSrc = `https://www.youtube.com/embed/${YOUTUBE_EMBED_ID}?autoplay=1&mute=1&playsinline=1&rel=0`;

  return (
    <motion.section
      id="video"
      className="video-section"
      aria-labelledby="video-heading"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="video-section-inner">
        <div className="video-accent video-accent--mint" aria-hidden />
        <h2 id="video-heading" className="video-heading">
          {t.video.title}
        </h2>
        <div className="video-accent video-accent--peach" aria-hidden />
      </div>

      <div className="video-frame-wrap">
        <div className="video-frame-border video-frame-border--lavender" aria-hidden />
        <div className="video-embed">
          <iframe
            title={t.video.iframeTitle}
            src={embedSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="video-frame-border video-frame-border--rose" aria-hidden />
      </div>
    </motion.section>
  );
};
