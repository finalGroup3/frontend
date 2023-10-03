import "./SideNavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
// import jordanmap from "../../assets/jordan1.png";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";


const SideNavBar = (props) => {
 
  return (
    <>
    <div className="nav-admin">

       <div className="nnn">
   <div>
  <aside>
  <span className="reels-logo">Wanderlust</span>

      {/* <img className="jordan-map1" src={jordanmap}/> */}
    {/* <svg className="logo" viewBox="0 0 28 28">
    </svg> */}
    <nav>
      <button className="home" onClick={()=>props.currComponent("Home")}>
        <div>
          <div className="icon">
          
              <FontAwesomeIcon type="img" icon={faHouse} />
            
          </div>
          Home
        </div>
      </button>
      <button className="explore" onClick={()=>props.currComponent("Dashboard")}>
        <div>
          <div className="icon">
          <FontAwesomeIcon icon={faChartPie} />
          </div>
          Dashboard
        </div>
      </button>
      <button className="messages" onClick={()=>props.currComponent("HelpCenter")} >
        <div>
          <div className="icon">
          
            <FontAwesomeIcon icon={faMessage} />
            
          
          </div>
          Help Center
        </div>
      </button>
      <button className="bookmark"  onClick={()=>props.currComponent("Users")}>
        <div>
          <div className="icon">
          <FontAwesomeIcon icon={faAddressBook} />
          </div>
          Users
        </div>
      </button>
      <button className="lists"  onClick={()=>props.currComponent("Restaurants")}>
        <div>
          <div className="icon">
          <FontAwesomeIcon icon={faMugSaucer} />
          </div>
          Restaurants
        </div>
      </button>
      <button className="profile"  onClick={()=>props.currComponent("Activties")} >
        <div>
          <div className="icon">
          <FontAwesomeIcon icon={faPersonSwimming} />
          </div>
          Activties
        </div>
      </button>
    </nav>
  </aside>
</div>
</div> 
    </div>
  
    </>
  );
};

export default SideNavBar;
