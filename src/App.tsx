
import React from "react";
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
import Typography from "./pages/Typography";
import Rooms from "./pages/Rooms";
import EmptyRooms from "./pages/EmptyRooms";
import RoomView from "./pages/RoomView";
import CustomRoomView from "./pages/CustomRoomView";
import Characters from "./pages/Characters";
import CharacterProfile from "./pages/CharacterProfile";
import DefaultLayout from "./layouts/DefaultLayout";
import MemoryChat from "./pages/MemoryChat";
import WeatherChat from "./pages/WeatherChat";
import OnboardingChat from "./pages/OnboardingChat";
import FollowUpChat from "./pages/FollowUpChat";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Personalization from "./pages/Personalization";
import Memory from "./pages/Memory";
import Archive from "./pages/Archive";

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
            <Route path="/memory-chat" element={<MemoryChat />} />
            <Route path="/weather-chat" element={<WeatherChat />} />
            <Route path="/onboarding-chat" element={<OnboardingChat />} />
            <Route path="/followup-chat" element={<FollowUpChat />} />
            <Route path="/typography" element={<Typography />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/empty-rooms" element={<EmptyRooms />} />
            <Route path="/room-view/:roomId" element={<RoomView />} />
            <Route path="/custom-room-view/:roomId" element={<CustomRoomView />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/character/:characterId" element={<CharacterProfile />} />
            
            {/* User profile routes */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/personalization" element={<Personalization />} />
            <Route path="/memory" element={<Memory />} />
            <Route path="/archive" element={<Archive />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
