import "./Home.scss";
import AboutApp from "./aboutOurApp/AboutApp";
import JordanMAp from "./Jordanmap/JordanMAp";
import Numbers from "./numbers/Numbers";
import Services from "./services/Services";
import OurChoice2 from "./ourChoice2/OurChouce2";
import Hero from "./heroSection/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutApp />
      <Services />
      <Numbers />
      <OurChoice2 />
      <JordanMAp />
    </div>
  );
};

export default Home;
