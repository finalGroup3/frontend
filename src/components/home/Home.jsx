import "./Home.scss";
import AboutApp from "./aboutOurApp/AboutApp";
import JordanMAp from "./Jordanmap/JordanMAp";
import Numbers from "./numbers/Numbers";
import Services from "./services/Services";
import OurChoice2 from "./ourChoice2/OurChouce2";
import Hero from "./heroSection/Hero";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutApp />
      <Services />
      <Numbers />
      <OurChoice2 />
      <JordanMAp />
      <Footer />
    </div>
  );
};

export default Home;
