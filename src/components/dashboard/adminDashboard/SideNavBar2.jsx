import "./SideNavBar2.scss";
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

       <div className="nnn-admin">
   <div>
  <aside className="aside-admin">
  <span className="admin-logo">Wanderlust</span>

      {/* <img className="jordan-map1" src={jordanmap}/> */}
    {/* <svg className="logo" viewBox="0 0 28 28">
    </svg> */}
    <nav>
      <button className="homeadmin" onClick={()=>props.currComponent("Home")}>
        <div>
          <div className="icon">
          
              <FontAwesomeIcon type="img" icon={faHouse} />
            
          </div>
          Home
        </div>
      </button>
      <button className="dashboardadmin" onClick={()=>props.currComponent("Dashboard")}>
        <div>
          <div className="icon">
          <FontAwesomeIcon icon={faChartPie} />
          </div>
          Dashboard
        </div>
      </button>
      <button className="messagesadmin" onClick={()=>props.currComponent("HelpCenter")} >
        <div>
          <div className="icon">
          
            <FontAwesomeIcon icon={faMessage} />
            
          
          </div>
          Help Center
        </div>
      </button>
      <button className="usersadmin"  onClick={()=>props.currComponent("Users")}>
        <div>
          <div className="icon">
          <FontAwesomeIcon icon={faAddressBook} />
          </div>
          Users
        </div>
      </button>
      <button className="restaurantsadmin"  onClick={()=>props.currComponent("Restaurants")}>
        <div>
          <div className="icon">
          <FontAwesomeIcon icon={faMugSaucer} />
          </div>
          Restaurants
        </div>
      </button>
      <button className="avtivitieseadmin"  onClick={()=>props.currComponent("Activties")} >
        <div>
          <div className="icon">
          <FontAwesomeIcon icon={faPersonSwimming} />
          </div>
          Activties
        </div>
      </button>
      <button className="hotelseadmin"  onClick={()=>props.currComponent("Hotels")} >
        <div>
          <div className="icon">
          <FontAwesomeIcon icon={faPersonSwimming} />
          </div>
          Hotels
        </div>
      </button>
    </nav>
    
  </aside>
  {/* <svg
          className='waves-navbar'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28'
          preserveAspectRatio='none'
          shapeRendering='auto'>
          <defs>
            <path
              id='gentle-wave'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            />
          </defs>
          <g className='parallax'>
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='0'
              fill='rgba(255,255,255,0.7)'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='3'
              fill='rgba(255,255,255,0.5)'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='5'
              fill='rgba(255,255,255,0.3)'
            />
            <use xlinkHref='#gentle-wave' x='48' y='7' fill='#fff' />
          </g>
        </svg> */}
  
</div>

</div> 

    </div>
  
    </>
  );
};

export default SideNavBar;
