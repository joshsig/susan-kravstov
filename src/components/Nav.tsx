import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/Nav.scss';

export const Nav = () => {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="nav-container">
        <button 
          onClick={() => navigate('/')} 
          className="nav-brand"
          aria-label="Home"
        >
          <span className="brand-icon">{language === 'en' ? 'SK' : 'СК'}</span>
        </button>

        <div className="nav-links">
          <button
            className="nav-link"
            onClick={() => scrollToSection('memorial')}
          >
            {t.nav.memorial}
          </button>
          
          <button
            className="nav-link"
            onClick={() => scrollToSection('gallery')}
          >
            {t.nav.gallery}
          </button>
          
          <button
            className="nav-lang-toggle"
            onClick={toggleLanguage}
            aria-label={language === 'en' ? 'Switch to Russian' : 'Переключить на английский'}
          >
            {language === 'en' ? 'RU' : 'EN'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
