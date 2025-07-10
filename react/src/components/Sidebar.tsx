import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-brand-dark text-brand-light p-4 shadow-lg">
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/" className="block py-2 px-3 rounded-md hover:bg-brand-secondary">Home</Link>
          </li>
          <li className="mb-2">
            <Link to="/profile" className="block py-2 px-3 rounded-md hover:bg-brand-secondary">Profile</Link>
          </li>
          <li className="mb-2">
            <Link to="/staff" className="block py-2 px-3 rounded-md hover:bg-brand-secondary">Staff</Link>
          </li>
          {/* Add more sidebar links here */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
