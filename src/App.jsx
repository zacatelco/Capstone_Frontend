import { Route, Routes } from "react-router-dom";
import "./App.css";
import FriendsList from "./components/FriendsList";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";
import Settings from "./pages/Settings";
import Music from "./pages/Music";
import Footer from "./components/Footer";
import.meta.env.VITE_API_KEY;

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/music" element={<Music />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
