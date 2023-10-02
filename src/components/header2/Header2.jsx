import React from "react";
import lay1 from "./waterfall.png";
// import lay2 from "./2nd_layer.png";
import lay3 from "./Asset_54x-8.png";
import stars from "./Asset_1.svg";
import backleft from "./backLeft.png";
import backright from "./backRight.png";
import front from "./Asset_24x.png";

import "./Header.scss";

export default function Header2() {
  return (
    <> 
     <div className='header-svgs'>

      <img className="lay1" src={lay3} alt='' />
      <img className="lay2" src={stars} alt='' />
      <div className="lay3" > 
        <img src={lay1} alt='' />
        </div>
      
      <div className="lay4">  Wanderlust</div>
      {/* <img className="lay5"  src={backleft} alt='' />
      <img  className="lay6"  src={backright} alt='' /> */}
       <div className="lay5"> <img   src={backleft} alt='' /></div>
     {/* <div className="lay6">  <img    src={backright} alt='' /></div> */}
      <div className="lay7">
         <img  src={front} alt='' />
      </div>
     
  
      {/* <img src={shine} alt='' /> */}
    </div>
    <p className="ppp">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eaque necessitatibus, numquam ab pariatur voluptatem, beatae accusantium ea quasi error consectetur earum sequi reprehenderit dicta blanditiis perferendis quod ullam est.
    </p>
    </>
  
  );
}
