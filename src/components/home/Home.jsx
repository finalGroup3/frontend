import "./Home.scss";
import AboutApp from "./aboutOurApp/AboutApp";
import JordanMAp from "./Jordanmap/JordanMAp";
import Numbers from "./numbers/Numbers";
import Services from "./services/Services";
import OurChoice2 from "./ourChoice2/OurChouce2";
import Hero from "./heroSection/Hero";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { LoginContext } from "../Auth/login/LogInContext";
import { useContext } from "react";

const Home = () => {
  const state = useContext(LoginContext);

  if (state.loggedIn) {
    state.socket?.emit("newUser", state.user.username);
  }

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
