import { useEffect,useState} from "react";
import "./Reels.scss";

import Reel from "./Reel";
import SideNavBar from "./SideNavBar";
import ReelModal from "./Modal/ReelModal";
import superagent from "superagent";
import cookie from "react-cookies";

const Reelspage = () => {
  const [allReels, setAllReels] = useState([]);

  const getAllReels = async () => {
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/reels`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
      const items = response.body;
      setAllReels(items);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    getAllReels();
    console.log(allReels, "================");
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
              <ReelModal getAllReels={getAllReels}/>
              <div className="video-container" id="video-container">
                {allReels.reverse().map((list, i) => {
                  return (
                    <>
                      <Reel key={i} item={list} />
                    </>
                  );
                })}
              </div>
            </div>
          </center>
        </div>
      </section>
    </>
  );
};

export default Reelspage;
