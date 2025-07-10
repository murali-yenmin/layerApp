import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 container mx-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
