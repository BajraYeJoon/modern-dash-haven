import { HomeIcon, ActivityIcon, UsersIcon, SettingsIcon, FileTextIcon } from "lucide-react";
import DashboardContent from "./components/DashboardContent";
import PatientMetricsPage from "./components/PatientMetricsPage";
import UsersPage from "./components/UsersPage";
import SettingsPage from "./components/SettingsPage";
import ReportsPage from "./components/ReportsPage";

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    component: DashboardContent,
  },
  {
    title: "Patient Metrics",
    to: "/patient-metrics",
    icon: <ActivityIcon className="h-4 w-4" />,
    component: PatientMetricsPage,
  },
  {
    title: "Users",
    to: "/users",
    icon: <UsersIcon className="h-4 w-4" />,
    component: UsersPage,
  },
  {
    title: "Reports",
    to: "/reports",
    icon: <FileTextIcon className="h-4 w-4" />,
    component: ReportsPage,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <SettingsIcon className="h-4 w-4" />,
    component: SettingsPage,
  },
];
