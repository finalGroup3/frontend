import lay1 from "./petranight.avif";
import stars from "./Asset_1.svg";
import lay3 from "./waterfall.png";
import backleft from "./backLeft.png";
import backright from "./backRight.png";
// import front from ".//2nd_layer.png";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import front from "./cover22.png";
import cover from './dust-png-33453.png'
import cover2 from './dust-png-33448.png'
import cover3 from './smoke-png-13212.png'
import "./Header.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Header2() {

  

  // useEffect(() => {
  //   // Define the animation using GSAP
  //   const element = document.querySelector('.fade-out-element');

  //   gsap.to(element, {
  //     opacity: 0,
  //     // y:100,
  //     ease: 'power4.out',
  //     scrollTrigger: {
  //       trigger: element,
  //       start: "top center",
  //       end: "bottom center",
  //       scrub: 0.1,
        
  //     }
  //   });
  // }, []);


  // const bounceElement = (element) => {
  //   gsap.to(element, {
  //     x: -600, 
  //     duration:7, 
  //     onComplete: () => {
  //       gsap.set(element, { x: 1500});
  //       bounceElement(element); 
  //     }
  //   });
  // };

  

  // useEffect(() => {
  //   const element = document.querySelector('.lay5');
  //   bounceElement(element);
  // }, []);

  useEffect(() => {

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollDist",
        start: "top top",
        end: "bottom bottom",
        scrub: 5,

      },
    });

    timeline
      // .fromTo(".lay1", { y: 0 }, { y: -200 }, 0)
      // .fromTo(".lay2", { y: 100 }, { y: -800 }, 0)
      // .fromTo(".lay3", { y: 0, z: 0 }, { y: -250, z: 400 }, 0)
      .fromTo(".lay4", { y: -90 }, { y: 650 }, 0)
      // .fromTo(".fade-out-element", { y: -5  }, { y: 600}, 0)
      .fromTo(".lay5", { x: 800 }, { x: -10 }, 0)
      .fromTo(".lay6", { x: 900 }, { x: 400 }, 0)
      .fromTo(".lay8", { x: 1000 }, { x: 100 }, 0)
      .fromTo(".lay9", { x: 600 }, { x: -20 }, 0)
      .fromTo(".lay10", { x: 600 }, { x: 30 }, 0)
      .fromTo(".lay11", { x: -100 }, { x: 900 }, 0)
      .fromTo(".lay12", { x: 60 }, { x: -20 }, 0)
      .fromTo(".lay13", { x: 400 }, { x: -70 }, 0)
      .fromTo(".lay14", { x: -20 }, { x: 920 }, 0)
      .fromTo(".lay15", { x: 900 }, { x: 100 }, 0)
      .fromTo(".lay16", { x: -20 }, { x: 300 }, 0)
      .fromTo(".lay17", { x:-600 }, { x:200 }, 0)
      .fromTo(".lay18", { x: 200 }, { x: 900 }, 0)
      .fromTo(".lay19", { x: 900 }, { x: -20 }, 0)
      .fromTo(".lay20", { x: 100 }, { x: 600 }, 0)
      .fromTo(".lay1", { x: 35 }, { x: -100 }, 0)
      // .fromTo(".lay7", { x: 35 }, { x: -100 }, 0)

    });
  

  return (
    <div className='notContainerrrrr'>
      <div className='scrollDist'>
        <div className='main'>
          {" "}
          {/* <div className='header-svgs'>
            <img className='lay1' src={lay1} alt='' />
            <img className='lay2' src={stars} alt='' />
            <img className='lay3' src={lay3} alt='' />
            <div className='lay4'> Wanderlust</div>
            <div  className="fade-out-element" >&#10095;&#10095;</div>
            <div className='arrow'></div>
            <img className='lay5' src={backleft} alt='' />
            <img className='lay6' src={backright} alt='' />
            <img className='lay7' src={front} alt='' />
          </div> */}
        
    {/* <div className="notContainerrrrr"> */}
      <div className="header-svgs">
        <img className="lay1" src={lay1} alt="" />
        <div className="shadePetra"></div>
        {/* <img className="lay2" src={stars} alt="" />
        <img className="lay3" src={lay3} alt="" /> */}
        <div className="lay4"> Wanderlust</div>
        {/* <img className="lay5" src={backleft} alt="" />
        <img className="lay6" src={backright} alt="" /> */}
        {/* <img className="lay5" src={cover} alt="" /> */}
      

        <img className="lay7" src={front} alt="" />
        {/* <img className="lay5" src={cover} alt="" /> */} 
        <img className="lay5" src={cover} alt="" />  
         <img className="lay6" src={cover2} alt="" />
         <img className="lay8" src={cover2} alt="" />
         <img className="lay9" src={cover} alt="" />
         <img className="lay10" src={cover2} alt="" />
         <img className="lay11" src={cover} alt="" />
         {/* <img className="lay12" src={cover} alt="" /> */}
         <img className="lay13" src={cover2} alt="" />
         {/* <img className="lay14" src={cover} alt="" /> */}
         <img className="lay15" src={cover2} alt="" />
         {/* <img className="lay16" src={cover} alt="" /> */}
         <img className="lay17" src={cover} alt="" />
         {/* <img className="lay18" src={cover} alt="" /> */}
         <img className="lay19" src={cover2} alt="" />
         <img className="lay20" src={cover} alt="" />
      

      </div>
</div>
      <p className='ppp'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eaque
        necessitatibus, numquam ab pariatur voluptatem, beatae accusantium ea
        quasi error consectetur earum sequi reprehenderit dicta blanditiis
        perferendis quod ullam est.
      </p>
    </div>
    </div>
  );
}
