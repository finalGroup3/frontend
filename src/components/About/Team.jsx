import React from "react";
import "./team.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import savana from "./savanna.png";
import laith from "./laith.png";
import nour from "./nour.jpeg";
import alaa from "./ALA.jpg";
import amro from "./amroo.jpg";

function Team() {
  return (
    <section className="Teamteam">
      <div className="Teamcontainer">
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={nour} alt="" />
            </div>

            <div className="contentBx">
              <h3>
                Nour<br />
                
              </h3>
              <span className="ss">Web Developer</span>
            </div>
          </div>

          <ul className="sci">
            <li style={{ "--i": 1 }}>
              <a href="#">
              <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>

            <li style={{ "--i": 2 }}>
              <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />              </a>
            </li>

            <li style={{ "--i": 3 }}>
              <a href="#">
              <FontAwesomeIcon icon={faWhatsapp} />              </a>
            </li>
            <li style={{ "--i": 4}}>
                         
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={alaa} alt="" />
            </div>

            <div className="contentBx">
              <h3>
                Ala'<br />
                {/* <span>Web Developer</span> */}
              </h3>
              <span className="ss">Web Developer</span>
            </div>
          </div>

          <ul className="sci">
            <li style={{ "--i": 1 }}>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>

            <li style={{ "--i": 2 }}>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>

            <li style={{ "--i": 3 }}>
              <a href="#">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li style={{ "--i": 4}}>
                         
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={savana} alt="" />
            </div>

            <div className="contentBx">
              <h3>
                Savana<br />
                {/* <span>Web Developer</span> */}
              </h3>
              <span className="ss">Web Developer</span>
            </div>
          </div>

          <ul className="sci">
            <li style={{ "--i": 1 }}>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>

            <li style={{ "--i": 2 }}>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>

            <li style={{ "--i": 3 }}>
              <a href="#">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li style={{ "--i": 4}}>
                         
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={laith} alt="" />
            </div>

            <div className="contentBx">
              <h3>
                Laith<br />
                {/* <span>Web Developer</span> */}
              </h3>
              <span className="ss">Web Developer</span>
            </div>
          </div>

          <ul className="sci">
            <li style={{ "--i": 1 }}>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>

            <li style={{ "--i": 2 }}>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>

            <li style={{ "--i": 3 }}>
              <a href="#">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li style={{ "--i": 4}}>
                         
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={amro} alt="" />
            </div>

            <div className="contentBx">
              <h3>
                Amro<br />
                {/* <span>Web Developer</span> */}
              </h3>
              <span className="ss">Web Developer</span>
            </div>
          </div>

          <ul className="sci">
            <li style={{ "--i": 1 }}>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>

            <li style={{ "--i": 2 }}>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>

            <li style={{ "--i": 3 }}>
              <a href="#">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li style={{ "--i": 4}}>
                         
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Team;
