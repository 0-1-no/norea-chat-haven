
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import ComponentLibrary from './pages/ComponentLibrary';
import Cards from './pages/Cards';
import ChatDemo from './pages/ChatDemo';
import Rooms from './pages/Rooms';
import EmptyRooms from './pages/EmptyRooms';
import RoomView from './pages/RoomView';
import CustomRoomView from './pages/CustomRoomView';
import Typography from './pages/Typography';
import Navigation from './pages/Navigation';
import Brand from './pages/Brand';
import DesignTokens from './pages/DesignTokens';
import InputFields from './pages/InputFields';
import Modals from './pages/Modals';
import CharacterProfile from './pages/CharacterProfile';
import Characters from './pages/Characters';
import Chatbox from './pages/Chatbox';
import Layout from './pages/Layout';
import MemoryChat from './pages/MemoryChat';
import WeatherChat from './pages/WeatherChat';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout><Outlet /></DefaultLayout>}>
          <Route index element={<Index />} />
          <Route path="components" element={<ComponentLibrary />} />
          <Route path="cards" element={<Cards />} />
          <Route path="chat-demo" element={<ChatDemo />} />
          <Route path="memory-chat" element={<MemoryChat />} />
          <Route path="weather-chat" element={<WeatherChat />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="empty-rooms" element={<EmptyRooms />} />
          <Route path="room-view/:id" element={<RoomView />} />
          <Route path="custom-room-view/:id" element={<CustomRoomView />} />
          <Route path="typography" element={<Typography />} />
          <Route path="design-tokens" element={<DesignTokens />} />
          <Route path="input-fields" element={<InputFields />} />
          <Route path="modals" element={<Modals />} />
          <Route path="navigation" element={<Navigation />} />
          <Route path="brand" element={<Brand />} />
          <Route path="characters" element={<Characters />} />
          <Route path="character/:id" element={<CharacterProfile />} />
          <Route path="chatbox" element={<Chatbox />} />
          <Route path="layout" element={<Layout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
