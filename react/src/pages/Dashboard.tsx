import React from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-neutral-dark">{t('dashboard.welcome')}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
