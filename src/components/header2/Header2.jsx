import lay1 from "./Asset_54x-8.png";
import stars from "./Asset_1.svg";
import lay3 from "./waterfall.png";
import backleft from "./backLeft.png";
import backright from "./backRight.png";
import front from ".//2nd_layer.png";

import "./Header.scss";

export default function Header2() {
  return (
    <div className="notContainerrrrr">
      <div className="header-svgs">
        <img className="lay1" src={lay1} alt="" />
        <img className="lay2" src={stars} alt="" />
        <img className="lay3" src={lay3} alt="" />
        <div className="lay4"> Wanderlust</div>
        <img className="lay5" src={backleft} alt="" />
        <img className="lay6" src={backright} alt="" />
        <img className="lay7" src={front} alt="" />
      </div>
      <p className="ppp">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eaque
        necessitatibus, numquam ab pariatur voluptatem, beatae accusantium ea
        quasi error consectetur earum sequi reprehenderit dicta blanditiis
        perferendis quod ullam est.
      </p>
    </div>
  );
}
