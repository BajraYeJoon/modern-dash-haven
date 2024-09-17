import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SettingsIcon } from 'lucide-react';
import { navItems } from '../nav-items';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link to="/" className="text-white flex items-center space-x-2 px-4">
        <SettingsIcon className="h-8 w-8" />
        <span className="text-2xl font-extrabold">Admin</span>
      </Link>
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`block py-2.5 px-4 rounded transition duration-200 ${
              location.pathname === item.to ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 hover:text-white'
            }`}
          >
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
