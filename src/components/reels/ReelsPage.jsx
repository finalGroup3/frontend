import { useEffect, useState } from "react";
import "./Reels.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";


// import axios from "axios";

import Reel from "./Reel";
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
            <section className="reels-nav-contain">
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
            </section>
        
          
        </section>
  <div className='App'>
    
        <center>
          <h3>Reels Page</h3>

          <div className='video-container' id='video-container'>
            {reelsData.reverse().map((list, i) => (
              <Reel key={i} url={list.url} reelId={list.id} user={user} />
            ))}
          </div>
        </center>
      </div>

    </section>
    
    </>
  );
};

export default Reelspage;