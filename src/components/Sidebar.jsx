import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SettingsIcon, LogOutIcon } from 'lucide-react';
import { navItems } from '../nav-items';
import { useAuth } from '../contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen flex flex-col">
      <div className="p-4">
        <Link to="/" className="text-white flex items-center space-x-2">
          <SettingsIcon className="h-8 w-8" />
          <span className="text-2xl font-extrabold">HealthAdmin</span>
        </Link>
      </div>
      <ScrollArea className="flex-grow">
        <nav className="mt-6 px-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center py-2 px-4 rounded transition duration-200 ${
                location.pathname === item.to
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
            </Link>
          ))}
        </nav>
      </ScrollArea>
      {user && (
        <div className="p-4 border-t border-gray-700">
          <p className="text-sm text-gray-400 mb-2">Logged in as:</p>
          <p className="font-medium mb-4">{user.username} ({user.role})</p>
          <Button onClick={handleLogout} variant="destructive" className="w-full">
            <LogOutIcon className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
