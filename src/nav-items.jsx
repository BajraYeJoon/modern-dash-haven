import { HomeIcon, BarChartIcon, UsersIcon, SettingsIcon } from "lucide-react";
import DashboardContent from "./components/DashboardContent";
import AnalyticsPage from "./components/AnalyticsPage";
import UsersPage from "./components/UsersPage";
import SettingsPage from "./components/SettingsPage";

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
    component: AnalyticsPage,
  },
  {
    title: "Users",
    to: "/users",
    icon: <UsersIcon className="h-4 w-4" />,
    component: UsersPage,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <SettingsIcon className="h-4 w-4" />,
    component: SettingsPage,
  },
];
