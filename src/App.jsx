import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/home/heroSection/Hero";
import Services from "./components/home/services/Services";
import OurChoice from "./components/home/ourChoice/OurChouce";
import OurChoice2 from "./components/home/ourChoice2/OurChouce2";
import Restaurants from "./components/restaurants/Restaurants";
import MApp from "./components/map/Map";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <MApp />
      {/* <Services /> */}
      {/* <OurChoice /> */}
      {/* <OurChoice2 /> */}
      {/* <Hero/> */}
      {/* <Restaurants /> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
