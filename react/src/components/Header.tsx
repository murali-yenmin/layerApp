import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-secondary text-brand-light p-4 shadow-card">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-brand-accent">LayerApp</Link>
        <div>
          <Link to="/profile" className="text-brand-light hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
          {/* Add more navigation links here */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
