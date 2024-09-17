import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SettingsIcon, LogOutIcon } from 'lucide-react';
import { navItems } from '../nav-items';
import { useAuth } from '../contexts/AuthContext';
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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
      <div className="px-4 mt-auto">
        <p className="text-sm">Logged in as: {user?.username}</p>
        <p className="text-sm mb-4">Role: {user?.role}</p>
        <Button onClick={handleLogout} variant="outline" className="w-full">
          <LogOutIcon className="mr-2 h-4 w-4" /> Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
