import React from 'react';
import { useLanguage } from '../../i18n/LanguageProvider';
import styles from './languageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { locale, switchLanguage } = useLanguage();

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${locale === 'es' ? styles.active : ''}`}
        onClick={() => switchLanguage('es')}
      >
        ES
      </button>
      <span className={styles.separator}>|</span>
      <button
        className={`${styles.button} ${locale === 'en' ? styles.active : ''}`}
        onClick={() => switchLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher; 