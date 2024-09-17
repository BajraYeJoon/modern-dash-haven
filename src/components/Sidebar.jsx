import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, BarChartIcon, UsersIcon, SettingsIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link to="/" className="text-white flex items-center space-x-2 px-4">
        <SettingsIcon className="h-8 w-8" />
        <span className="text-2xl font-extrabold">Admin</span>
      </Link>
      <nav>
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <HomeIcon className="inline-block mr-2 h-5 w-5" /> Dashboard
        </Link>
        <Link to="/analytics" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <BarChartIcon className="inline-block mr-2 h-5 w-5" /> Analytics
        </Link>
        <Link to="/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <UsersIcon className="inline-block mr-2 h-5 w-5" /> Users
        </Link>
        <Link to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <SettingsIcon className="inline-block mr-2 h-5 w-5" /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;