import { useEffect, useContext } from "react";
import "./Reels.scss";

import Reel from "./Reel";
import SideNavBar from "./SideNavBar";
import { ReelContext } from "./ReelsContext";
import ReelModal from "./Modal/ReelModal";
const Reelspage = () => {
  const reelState = useContext(ReelContext);

  useEffect(() => {
    reelState.getAllReels();
    console.log(reelState.allReels, "================");
  }, []);

  return (
    <>
      <section className="reels-page">
        <section className="reels-nav-bar">
          <SideNavBar />
        </section>
        <div className="App">
          <center className="cccenter">
            <h3 className="reels-title">Reels</h3>
            <div className="abcontainer">
              <div className="video-container" id="video-container">
                {reelState.allReels.reverse().map((list, i) => (
                  <Reel key={i} item={list} />
                ))}
              </div>
              <ReelModal />
            </div>
          </center>
        </div>
      </section>
    </>
  );
};

export default Reelspage;
