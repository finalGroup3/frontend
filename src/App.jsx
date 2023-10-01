import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/home/heroSection/Hero";
import Services from "./components/home/services/Services";
import OurChoice from "./components/home/ourChoice/OurChouce";
import OurChoice2 from "./components/home/ourChoice2/OurChouce2";
import Restaurants from "./components/restaurants/Restaurants";
import Footer from "./components/footer/Footer";
import Favorites from "./components/favorites/Favorites";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Favorites />
      {/* <Services /> */}
      {/* <OurChoice /> */}
      {/* <OurChoice2 /> */}
      {/* <Hero/> */}
      {/* <Restaurants /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
