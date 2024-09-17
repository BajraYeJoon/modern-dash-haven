import React from 'react';
import { BellIcon, UserIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          </div>
          <div className="flex items-center">
            <button className="p-1 mr-4 text-gray-400 hover:text-gray-600">
              <BellIcon className="h-6 w-6" />
            </button>
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <UserIcon className="h-6 w-6 mr-2" />
              <span>John Doe</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;