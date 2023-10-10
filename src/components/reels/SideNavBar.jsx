import "./SideNavBar.scss";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBookmark,
  faClipboardList,
  faPlay,
  faMapLocationDot,
  faCircleInfo,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.png";
import { When } from "react-if";
import { LoginContext } from "../Auth/login/LogInContext";

const SideNavBar = () => {
  const state = useContext(LoginContext);
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`nobodyyy ${isOpen ? "" : "dark"}`}>
      <nav className={`sidebar ${isOpen ? "" : "close"}`}>
        <header>
          <div className="image-text">
            <div className="text logo-text">
              <Link to={"/home"} className="loglogigog">
                <span className="name">Wanderlust</span>
              </Link>
            </div>
          </div>
          <div className="bx bx-chevron-right toggle" onClick={toggleSidebar}>
            &#10095;
          </div>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <Link to={"/home"} className="popush">
                  <FontAwesomeIcon className="fontAWSomeIcons" icon={faHouse} />
                  <span className="text nav-text">Home</span>
                </Link>
              </li>
              <When condition={state.user.role === "user"}>
                <li className="nav-link">
                  <Link to={"/favorites"} className="popush">
                    <FontAwesomeIcon
                      className="fontAWSomeIcons"
                      icon={faBookmark}
                    />
                    <span className="text nav-text">Favorite</span>
                  </Link>
                </li>
              </When>
              <When condition={state.user.role === "user"}>
                <li className="nav-link">
                  <Link to={"/bookings"} className="popush">
                    <FontAwesomeIcon
                      className="fontAWSomeIcons"
                      icon={faClipboardList}
                    />
                    <span className="text nav-text">Bookings</span>
                  </Link>
                </li>
              </When>
              <li className="nav-link">
                <Link to={"/reels"} className="popush">
                  <FontAwesomeIcon className="fontAWSomeIcons" icon={faPlay} />
                  <span className="text nav-text">Reels</span>
                </Link>
              </li>

              <li className="nav-link">
                <Link to={"/map"} className="popush">
                  <FontAwesomeIcon
                    className="fontAWSomeIcons"
                    icon={faMapLocationDot}
                  />
                  <span className="text nav-text">Map</span>
                </Link>
              </li>

              <li className="nav-link">
                <Link to={"/aboutus"} className="popush">
                  <FontAwesomeIcon
                    className="fontAWSomeIcons"
                    icon={faCircleInfo}
                  />
                  <span className="text nav-text">About Us</span>
                </Link>
              </li>
              <li className="noyesno">
                <When condition={state.user.role === "owner"}>
                  <Link to="/dashboard/owner" className="text nav-text">
                    Dashboard
                  </Link>
                </When>
                <When condition={state.user.role === "admin"}>
                  <Link to="/dashboard/admin" className="text nav-text">
                    Dashboard
                  </Link>
                </When>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <Link className="ihbfdg">
                <When condition={state.loggedIn}>
                  <Link className="laithoooo" onClick={state.logout}>
                    <div className="bx bx-log-out icon">
                      <img src={profile} alt="" />
                    </div>
                  </Link>
                </When>
                <When condition={!state.loggedIn}>
                  <Link to="/login" className="laithoooo">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="fontAWSomeIcons"
                    />
                  </Link>
                </When>
                <When condition={!state.loggedIn}>
                  <Link to="/login" className="popush">
                    <span className="text nav-text">Login</span>
                  </Link>
                </When>
                <When condition={state.loggedIn}>
                  <Link className="popush" onClick={state.logout}>
                    <span className="text nav-text">Logout</span>
                  </Link>
                </When>
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideNavBar;
