import { HomeIcon, BarChartIcon, UsersIcon, SettingsIcon } from "lucide-react";
import DashboardContent from "./components/DashboardContent";

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    component: DashboardContent,
  },
  {
    title: "Analytics",
    to: "/analytics",
    icon: <BarChartIcon className="h-4 w-4" />,
    component: () => <div>Analytics Page</div>,
  },
  {
    title: "Users",
    to: "/users",
    icon: <UsersIcon className="h-4 w-4" />,
    component: () => <div>Users Page</div>,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <SettingsIcon className="h-4 w-4" />,
    component: () => <div>Settings Page</div>,
  },
];
