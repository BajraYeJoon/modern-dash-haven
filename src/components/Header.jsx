import React from 'react';
import { BellIcon, UserIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Health Monitoring Dashboard</h1>
          </div>
          <div className="flex items-center">
            <button className="p-1 mr-4 text-gray-400 hover:text-gray-600">
              <BellIcon className="h-6 w-6" />
            </button>
            <div className="flex items-center text-gray-700">
              <UserIcon className="h-6 w-6 mr-2" />
              <span>{user?.username} ({user?.role})</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
