import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/i18n';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('i18nextLng') || 'en');

  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng');
    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang);
    }
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;
    setSelectedLanguage(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white shadow-sm">
      <button onClick={onMenuClick} className="lg:hidden text-neutral-DEFAULT focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <div className="text-xl font-bold text-primary-DEFAULT lg:hidden">LawVerge</div>
      <div className="flex items-center space-x-4">
        {/* Language Switcher */}
        <select
          className="p-2 border rounded-md bg-white text-neutral-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="en">{t('languages.english')}</option>
          <option value="es">{t('languages.spanish')}</option>
          <option value="ta">{t('languages.tamil')}</option>
        </select>
        {/* User Profile/Avatar Placeholder */}
        <Link to="/profile" className="flex items-center space-x-2 text-neutral-DEFAULT hover:text-primary-DEFAULT">
          <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white font-bold">JD</div>
          <span>John Doe</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
