import { useEffect, useState } from "react";
import "./Reels.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

import v1 from './jubran_restu.mp4'
import v2 from './WhatsApp Video 2023-07-31 at 6.47.53 PM (2).mp4'
import v3 from './Bubble_wadi_rum.mp4'
// import axios from "axios";

import Reel from "./Reel";
import SideNavBar from "./SideNavBar";
// import ReelModal from "./reelModal/modal";

const Reelspage = ({ user }) => {
  const [reelsData, setreelsData] = useState([



  ]);

//   const req = async () => {
//     const req = `${process.env.REACT_APP_SERVER_URL}reels`;
//     const res = await axios.get(req, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//       },
//     });
//     console.log(res.data);
//     setreelsData(res.data);
//   };
//   useEffect(() => {
//     req();
//   }, []);

  return (
    <>

    <section className="reels-page"> 
         <section className="reels-nav-bar">
            {/* <section className="reels-nav-contain">
                <span className="nav-logo">Wanderlust</span>
         <section>
             <div className="reels-nav-item">
                <span className="navbar-item">Home</span>
            
               <img src=""/>
                </div>
            <div className="reels-nav-item">
            <span className="navbar-item">Fav</span>
               <img src=""/>
                </div>
            <div className="reels-nav-item">
            <span className="navbar-item">Booking</span>
               <img src=""/>
                </div>
            <div className="reels-nav-item">
            <span className="navbar-item">Resturants</span>
               <img src=""/>
                </div>
            <div className="reels-nav-item">
            <span className="navbar-item">Hotels</span>
               <img src=""/>
                </div>
            <div className="reels-nav-item">
            <span className="navbar-item">Activities</span>
               <img src=""/>
                </div>
            <div className="reels-nav-item">
            <span className="navbar-item">Map</span>
               <img src=""/>
                </div>
            <div className="reels-nav-item">
            <span className="navbar-item">Add Reel</span>
               <img src=""/>
                </div> 
         </section> 
            </section> */}
        <SideNavBar/>
          
        </section>
  <div className='App'>
    
        <center>
          <h3 className="reels-title">Reels Page</h3>

          <div className='video-container' id='video-container'>
            {/* {reelsData.reverse().map((list, i) => (
              <Reel key={i} url={list.url} reelId={list.id} user={user} />
            ))} */}
              <Reel key={1} url={v1} />

              <Reel key={2} url={v2} />

              <Reel key={3} url={v3} />

          </div>
          <SideNavBar/>
        </center>
      </div>

    </section>
    
    </>
  );
};

export default Reelspage;