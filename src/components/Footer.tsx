import { useLanguage } from '../i18n/LanguageContext';
import '../styles/Footer.scss';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          {t.footer.madeBy}{' '}
          <a 
            href="https://joshsig.ca" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            {t.footer.link}
          </a>
        </p>
      </div>
    </footer>
  );
};
