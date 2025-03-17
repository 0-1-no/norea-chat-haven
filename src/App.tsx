import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Rooms from './pages/Rooms';
import EmptyRooms from './pages/EmptyRooms';
import RoomView from './pages/RoomView';
import CustomRoomView from './pages/CustomRoomView';
import Characters from './pages/Characters';
import CharacterView from './pages/CharacterView';
import ChatDemo from './pages/ChatDemo';
import MemoryChat from './pages/MemoryChat';
import WeatherChat from './pages/WeatherChat';
import OnboardingChat from './pages/OnboardingChat';
import FollowUpChat from './pages/FollowUpChat';
import Components from './pages/Components';
import Cards from './pages/Cards';
import DesignTokens from './pages/DesignTokens';
import Typography from './pages/Typography';
import InputFields from './pages/InputFields';
import Modals from './pages/Modals';
import Navigation from './pages/Navigation';
import Brand from './pages/Brand';
import Chatbox from './pages/Chatbox';
import Layout from './pages/Layout';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { Sidebar } from '@/components/Sidebar';
import { Toaster } from '@/components/ui/toaster';

// Add the import for the new Archive page
import Archive from './pages/Archive';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 relative flex flex-col">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/empty-rooms" element={<EmptyRooms />} />
            <Route path="/room-view/:roomId" element={<RoomView />} />
            <Route path="/custom-room-view/:roomId" element={<CustomRoomView />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/character/:characterName" element={<CharacterView />} />
            <Route path="/chat-demo" element={<ChatDemo />} />
            <Route path="/memory-chat" element={<MemoryChat />} />
            <Route path="/weather-chat" element={<WeatherChat />} />
            <Route path="/onboarding-chat" element={<OnboardingChat />} />
            <Route path="/followup-chat" element={<FollowUpChat />} />
            <Route path="/components" element={<Components />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/design-tokens" element={<DesignTokens />} />
            <Route path="/typography" element={<Typography />} />
            <Route path="/input-fields" element={<InputFields />} />
            <Route path="/modals" element={<Modals />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/chatbox" element={<Chatbox />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="/profile" element={<Profile />} />
            
            {/* Add the new Archive route */}
            <Route path="/archive" element={<Archive />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
