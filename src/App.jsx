import "./App.css";

import Restaurants from "./components/restaurants/Restaurants";
import MApp from "./components/map/Map";
import Booking from "./components/Booking/Booking4";
import Favorites from "./components/favorites/Favorites";
import Hotel from "./components/hotel/Hotel";
import About from "./components/About/Test1";
import Dashboard from "./components/dashboard/adminDashboard/Dashboard";
import Reelspage from "./components/reels/ReelsPage";
import LogIn from "./components/Auth/login/LogIn";
import Activities from "./components/Activities/Activities";
import LoginProvider from "./components/Auth/login/LogInContext";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import OwnerDashboard from "./components/dashboard/owner/OwnerDashboard";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import RestaurantsContext from "./components/restaurants/RestaurantContext";
import FavoritesProvider from "./components/favorites/favContext";
import ReelsProvider from "./components/reels/ReelsContext";
import Room from "./components/chat/Room";
function App() {
  return (
    <>
      <LoginProvider>
        <RestaurantsContext>
          <FavoritesProvider>
            <ReelsProvider>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/bookings" element={<Booking />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/hotels" element={<Hotel />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/aboutus" element={<About />} />
                <Route path="/reels" element={<Reelspage />} />
                <Route path="/map" element={<MApp />} />
                <Route path="/dashboard/admin" element={<Dashboard />} />
                <Route path="/dashboard/owner" element={<OwnerDashboard />} />
                <Route path='/chatRoom' element={<Room />} />
                <Route path="/" element={<LoadingScreen />} />
              </Routes>
            </ReelsProvider>
          </FavoritesProvider>
        </RestaurantsContext>
      </LoginProvider>
    </>
  );
}

export default App;
