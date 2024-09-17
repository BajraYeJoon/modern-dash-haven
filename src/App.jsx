import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import Index from "./pages/Index";
import LoginPage from "./components/LoginPage";
import { navItems } from "./nav-items";
import PatientDetailsPage from "./components/PatientDetailsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Index />}>
              {navItems.map(({ to, component: Component }) => (
                <Route key={to} path={to} element={<Component />} />
              ))}
              <Route path="/patient/:id" element={<PatientDetailsPage />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
