import React from 'react';
import { useTranslation } from 'react-i18next';

const Unauthorized: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-light p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-red-800 mb-4">{t('unauthorized.title')}</h1>
        <p className="text-lg text-red-600">{t('unauthorized.message')}</p>
      </div>
    </div>
  );
};

export default Unauthorized;
