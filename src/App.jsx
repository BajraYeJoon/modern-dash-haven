import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { navItems } from "./nav-items";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Index />}>
            {navItems.map(({ to, component: Component }) => (
              <Route key={to} path={to} element={<Component />} />
            ))}
          </Route>
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
