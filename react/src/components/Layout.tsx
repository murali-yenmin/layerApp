import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      <header className="bg-brand-secondary text-brand-light p-4 shadow-card">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-brand-accent">LayerApp</Link>
          <div>
            <Link to="/profile" className="text-brand-light hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
            {/* Add more navigation links here */}
          </div>
        </nav>
      </header>
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-brand-dark text-brand-light p-4 shadow-lg">
          <nav>
            <ul>
              <li className="mb-2">
                <Link to="/" className="block py-2 px-3 rounded-md hover:bg-brand-secondary">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/profile" className="block py-2 px-3 rounded-md hover:bg-brand-secondary">Profile</Link>
              </li>
              {/* Add more sidebar links here */}
            </ul>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 container mx-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
