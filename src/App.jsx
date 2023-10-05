import "./App.css";

import Restaurants from "./components/restaurants/Restaurants";
import MApp from "./components/map/Map";
import Booking from "./components/Booking/Booking4";
import Favorites from "./components/favorites/Favorites";
import About from "./components/About/Test1";
import Dashboard from "./components/dashboard/Dashboard";
import Reelspage from "./components/reels/ReelsPage";
import LogIn from "./components/Auth/login/LogIn";
import LoginProvider from "./components/Auth/login/LogInContext";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import OwnerDashboard from "./components/dashboard/owner/OwnerDashboard";

function App() {
  return (
    <>
      <LoginProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/bookings" element={<Booking />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/reels" element={<Reelspage />} />
          <Route path="/map" element={<MApp />} />
          <Route path="/dashboard/admin" element={<Dashboard />} />
          <Route path="/dashboard/owner" element={<OwnerDashboard />} />
        </Routes>
      </LoginProvider>
    </>
  );
}

export default App;
