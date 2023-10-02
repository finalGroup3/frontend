import "./App.css";
import Hero from "./components/home/heroSection/Hero";
import Restaurants from "./components/restaurants/Restaurants";
import MApp from "./components/map/Map";
import Header from "./components/header/Header";
import AboutApp from "./components/home/aboutOurApp/AboutApp";
import JordanMAp from "./components/home/Jordanmap/JordanMAp";
import Numbers from "./components/home/numbers/Numbers";
import Booking from "./components/Booking/Booking4";
import Services from "./components/home/services/Services";
import OurChoice2 from "./components/home/ourChoice2/OurChouce2";
import Footer from "./components/footer/Footer";
import Favorites from "./components/favorites/Favorites";
import Hotel from "./components/hotel/Hotel";

function App() {
  return (
    <>
    {/* <Hotel/> */}
    {/* <MApp /> */}
      {/* <Header />
      <Hero />
      <AboutApp />
      <Services />
      <Numbers/>
      <OurChoice2 />
      <JordanMAp /> */}
      <Restaurants/>
      {/* <Booking/> */}
      {/* <Favorites/> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
