
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
import Brand from "./pages/Brand";
import Chatbox from "./pages/Chatbox";
import Layout from "./pages/Layout";
import Navigation from "./pages/Navigation";
import ChatDemo from "./pages/ChatDemo";

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
            <Route path="/brand" element={<Brand />} />
            <Route path="/chatbox" element={<Chatbox />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/chat-demo" element={<ChatDemo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
