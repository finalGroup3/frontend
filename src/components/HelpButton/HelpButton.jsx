import "./HelpButton.scss";
import { useEffect, useContext } from "react";
import { gsap } from "gsap";
import ChatIcon from "@mui/icons-material/Chat";
import { SvgIcon } from "@mui/material";
import { LoginContext } from "../Auth/login/LogInContext";

const HelpButton = () => {
  const state = useContext(LoginContext);

  useEffect(() => {
    gsap.fromTo(
      ".hidden-element",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".hidden-element",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="helpppBtN ">
      <button className="Btn hidden-element" onClick={state.sendToAdmin}>
        <span className="svgContainer">
          <SvgIcon>
            <ChatIcon></ChatIcon>
          </SvgIcon>
        </span>
        <span className="BG"></span>
      </button>
    </div>
  );
};

export default HelpButton;
