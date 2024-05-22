import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../src/pages/home";
import ThreadPage from "../src/pages/threadPage"
import CommunitiesPage from "./pages/communitiesPage";
import CreateThread from "./pages/createThread";
import CreateCommunity from "./pages/createCommunity";
import Moderator from "./pages/Moderator";
import ChatPage from "./pages/chatPage";
import Login from "./pages/Login";
import NotificationsPage from './pages/notificationsPage';
import Profile from "./pages/profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/threads" element={<ThreadPage/>}/>
          <Route path="/communities" element={<CommunitiesPage/>}/>
          <Route path="/createthread" element={<CreateThread/>}/>
          <Route path="/createcommunity" element={<CreateCommunity/>}/>
          <Route path="/moderator" element={<Moderator/>}/>
          <Route path="/chat" element={<ChatPage/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
