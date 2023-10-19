import "./App.css";

import Restaurants from "./src/components/restaurants/Restaurants";
import MApp from "./src/components/map/Map";
import Booking from "./src/components/Booking/Booking4";
import Favorites from "./src/components/favorites/Favorites";
import Hotel from "./src/components/hotel/Hotel";
import About from "./src/components/About/Test1";
import Dashboard from "./src/components/dashboard/adminDashboard/Dashboard";
import Reelspage from "./src/components/reels/ReelsPage";
import LogIn from "./src/components/Auth/login/LogIn";
import Activities from "./src/components/Activities/Activities";
import LoginProvider from "./src/components/Auth/login/LogInContext";
import { Route, Routes } from "react-router-dom";
import Home from "./src/components/home/Home";
import OwnerDashboard from "./src/components/dashboard/owner/OwnerDashboard";
import Room from "./src/components/chat/Chat";
import LoadingScreen from "./src/components/LoadingScreen/LoadingScreen";
import RestaurantsContext from "./src/components/restaurants/RestaurantContext";
import FavoritesProvider from "./src/components/favorites/favContext";
function App() {



  return (
    <>
      <LoginProvider>
        <RestaurantsContext>
          <FavoritesProvider>
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
              <Route path="/" element={<LoadingScreen />} />
              <Route path="/chatRoom" element={<Room />} />
            </Routes>
          </FavoritesProvider>
        </RestaurantsContext>
      </LoginProvider>
    </>
  );
}

export default App;
