import React, { createContext, useState, useContext, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import esMessages from './messages/es';
import enMessages from './messages/en';

const messages = {
  es: esMessages,
  en: enMessages,
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    // Intentar obtener el idioma guardado
    const savedLocale = localStorage.getItem('preferredLanguage');
    if (savedLocale && messages[savedLocale]) {
      return savedLocale;
    }
    
    // Detectar idioma del navegador
    const browserLocale = navigator.language.split('-')[0];
    return messages[browserLocale] ? browserLocale : 'es';
  });

  useEffect(() => {
    localStorage.setItem('preferredLanguage', locale);
  }, [locale]);

  const switchLanguage = (newLocale) => {
    if (messages[newLocale]) {
      setLocale(newLocale);
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage }}>
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale="es"
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}; 