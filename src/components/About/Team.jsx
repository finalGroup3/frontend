import React, { useState } from "react";
import "./team.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import savana from "./savanna.png";
import laith from "./laith.png";
import nour from "./nour.jpeg";
import alaa from "./ALA.jpg";
import amro from "./amroo.jpg";
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Team() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleModelOpen = () => {
    setIsModelOpen(true);
  };

  const handleModelClose = () => {
    setIsModelOpen(false);
  };



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
              <a href="https://github.com/Nour-Alahmad">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>

            <li style={{ "--i": 2 }}>
              <a href="https://www.linkedin.com/in/nour-alahmad1/">
                <FontAwesomeIcon icon={faLinkedin} />              </a>
            </li>

            <li style={{ "--i": 3 }}>
              <a onClick={handleModelOpen}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              {isModelOpen && (
                <div className="numberTeam">
                <div className="custom-model-main model-open">
                  <div className="custom-model-inner">
                    <div className="close-btn" onClick={handleModelClose}>
                    <FontAwesomeIcon icon={faXmark} />                                                     </div>
                    <div className="custom-model-wrap">
                      <div className="pop-up-content-wrap">
                        0788579812
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              )}
            </li>
            <li style={{ "--i": 4 }}>

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
              </h3>
              <span className="ss">Web Developer</span>
            </div>
          </div>

          <ul className="sci">
            <li style={{ "--i": 1 }}>
              <a href="https://github.com/AlaEmadIbrahim">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>

            <li style={{ "--i": 2 }}>
              <a href="https://www.linkedin.com/in/ala-ibrahim/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>

            <li style={{ "--i": 3 }}>
              <a onClick={handleModelOpen}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              {isModelOpen && (
                <div className="numberTeam">
                <div className="custom-model-main model-open">
                  <div className="custom-model-inner">
                    <div className="close-btn" onClick={handleModelClose}>
                    <FontAwesomeIcon icon={faXmark} />                                                     </div>
                    <div className="custom-model-wrap">
                      <div className="pop-up-content-wrap">
                        0772362349
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              )}
            </li>
            <li style={{ "--i": 4 }}>

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
              </h3>
              <span className="ss">Web Developer</span>
            </div>
          </div>

          <ul className="sci">
            <li style={{ "--i": 1 }}>
              <a href="https://github.com/savanahamood">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>

            <li style={{ "--i": 2 }}>
              <a href="https://www.linkedin.com/in/savana-hamood/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>

            <li style={{ "--i": 3 }}>
              <a onClick={handleModelOpen}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              {isModelOpen && (
                <div className="numberTeam">
                <div className="custom-model-main model-open">
                  <div className="custom-model-inner">
                    <div className="close-btn" onClick={handleModelClose}>
                    <FontAwesomeIcon icon={faXmark} />                                                     </div>
                    <div className="custom-model-wrap">
                      <div className="pop-up-content-wrap">
                        0778765082
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              )}
            </li>
            <li style={{ "--i": 4 }}>

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
              </h3>
              <span className="ss">Web Developer</span>
            </div>
          </div>

          <ul className="sci">
            <li style={{ "--i": 1 }}>
              <a href="https://github.com/LaithShatnawi">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>

            <li style={{ "--i": 2 }}>
              <a href="https://www.linkedin.com/in/laith-shatnawi-556630146/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>

            <li style={{ "--i": 3 }}>
              <a onClick={handleModelOpen}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              {isModelOpen && (
                <div className="numberTeam">
                <div className="custom-model-main model-open">
                  <div className="custom-model-inner">
                    <div className="close-btn" onClick={handleModelClose}>
                    <FontAwesomeIcon icon={faXmark} />                                                     </div>
                    <div className="custom-model-wrap">
                      <div className="pop-up-content-wrap">
                        0797801900
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              )}
            </li>
            <li style={{ "--i": 4 }}>

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
              </h3>
              <span className="ss">Web Developer</span>
            </div>
          </div>

          <ul className="sci">
            <li style={{ "--i": 1 }}>
              <a href="https://github.com/AmroBaniIssa">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>

            <li style={{ "--i": 2 }}>
              <a href="https://www.linkedin.com/in/amro-bani-issa/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>

            <li style={{ "--i": 3 }}>
              <a onClick={handleModelOpen}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              {isModelOpen && (
                <div className="numberTeam">
                <div className="custom-model-main model-open">
                  <div className="custom-model-inner">
                    <div className="close-btn" onClick={handleModelClose}>
                    <FontAwesomeIcon icon={faXmark} />                                                     </div>
                    <div className="custom-model-wrap">
                      <div className="pop-up-content-wrap">
                        0785550017
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              )}
            </li>
            <li style={{ "--i": 4 }}>

            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Team;
