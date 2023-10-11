import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faWhatsapp,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerContain">
      <div className="contentContain">
        <div className="logo">
          <div className="logologo">Wanderlust</div>
          <div className="aboutt">
            Wanderlust website is a virtual haven for adventure-seekers and
            travel enthusiasts alike. With its captivating blend of vivid
            imagery, insightful articles, and comprehensive travel guides, it
            serves as a beacon for those yearning to explore the world.
          </div>
        </div>
        <div className="office">
          <div className="officeoffice">Office</div>
          <div className="aboutabout">Rainbow Street, Amman, Jordan</div>
          <div className="email">wanderlust@outlook.com</div>
          <div className="phone">+0987654321</div>
        </div>
        <div className="links">
          <Link className="Linkff" to='/home'>
             <div className="home">Home</div>
          </Link>
         
         <Link className="Linkff" to='/map'>
          <div className="home">Map</div>
          </Link>
          <Link className="Linkff" to='/reels'>
           <div className="home">Reels</div>
          </Link>
          <Link className="Linkff" to='/restaurants'>

          <div className="services">Services</div>
         </Link>
         <Link  className="Linkff" to='/aboutus'>
                 
          <div className="features">About Us</div>
          </Link>
  
        </div>
        <div className="newsletter">
          <div className="newsletternewsletter">Newsletter</div>
          <div className="form">
            <FontAwesomeIcon icon={faEnvelope} className="emailIcon" />
            <input
              type="text"
              className="input"
              placeholder="Enter your email id"
            />
            <button className="arrowBTN">&#8250;</button>
          </div>
          <div className="socials">
            <span>
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#001319 " }}
                className="icon"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#001319 " }}
                className="icon"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ color: "#001319 " }}
                className="icon"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faPinterest}
                style={{ color: "#001319 " }}
                className="icon"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="copyright">
        wanderlust &copy; 2023, All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
