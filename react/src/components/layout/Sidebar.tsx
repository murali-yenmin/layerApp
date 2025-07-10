import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-200 ease-in-out
      w-64 bg-white shadow-lg z-30 lg:relative lg:shadow-none`}
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold text-primary-DEFAULT mb-6">LawVerge</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-neutral-DEFAULT hover:bg-primary-light hover:text-white rounded-md transition-colors duration-200"
                onClick={onClose}
              >
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/clients"
                className="flex items-center p-2 text-neutral-DEFAULT hover:bg-primary-light hover:text-white rounded-md transition-colors duration-200"
                onClick={onClose}
              >
                Clients
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/cases"
                className="flex items-center p-2 text-neutral-DEFAULT hover:bg-primary-light hover:text-white rounded-md transition-colors duration-200"
                onClick={onClose}
              >
                Cases
              </Link>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
