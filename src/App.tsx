
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComponentLibrary from "./pages/ComponentLibrary";
import Cards from "./pages/Cards";
import DesignTokens from "./pages/DesignTokens";
import InputFields from "./pages/InputFields";
import Modals from "./pages/Modals";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/components" element={<ComponentLibrary />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/design-tokens" element={<DesignTokens />} />
            <Route path="/input-fields" element={<InputFields />} />
            <Route path="/modals" element={<Modals />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
