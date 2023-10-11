import "./SideNavBar2.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
// import jordanmap from "../../assets/jordan1.png";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import profile from '../../../imgs/user (4).png'

const SideNavBar = (props) => {
  return (
    <>
      <div className='nav-admin'>
        <div className='nnn-admin'>
          <div>
            <aside className='aside-admin'>
              <img className="admin-img" src={profile}/>
              <nav>
                <Link to='/home'>
                  <button
                    className='homeadmin'
                    onClick={() => props.currComponent("Home")}>
                    <div>
                      <div className='icon'>
                        <FontAwesomeIcon type='img' icon={faHouse} />
                      </div>
                      Home
                    </div>
                  </button>
                </Link>

                <button
                  className='dashboardadmin'
                  onClick={() => props.currComponent("Dashboard")}>
                  <div>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faChartPie} />
                    </div>
                    Dashboard
                  </div>
                </button>
                <button
                  className='messagesadmin'
                  onClick={() => props.currComponent("HelpCenter")}>
                  <div>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faMessage} />
                    </div>
                    Help Center
                  </div>
                </button>
                <button
                  className='usersadmin'
                  onClick={() => props.currComponent("Users")}>
                  <div>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faAddressBook} />
                    </div>
                    Users
                  </div>
                </button>
                <button
                  className='restaurantsadmin'
                  onClick={() => props.currComponent("Restaurants")}>
                  <div>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faMugSaucer} />
                    </div>
                    Restaurants
                  </div>
                </button>
                <button
                  className='avtivitieseadmin'
                  onClick={() => props.currComponent("Activties")}>
                  <div>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faPersonSwimming} />
                    </div>
                    Activties
                  </div>
                </button>
                <button
                  className='hotelseadmin'
                  onClick={() => props.currComponent("Hotels")}>
                  <div>
                    <div className='icon'>
                      <FontAwesomeIcon icon={faPersonSwimming} />
                    </div>
                    Hotels
                  </div>
                </button>
              </nav>
              <p className='admin-logo'>Wanderlust</p>

            </aside>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
