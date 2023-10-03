import lay1 from "./Asset_54x-8.png";
import stars from "./Asset_1.svg";
import lay3 from "./waterfall.png";
import backleft from "./backLeft.png";
import backright from "./backRight.png";
import front from ".//2nd_layer.png";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const bounceElement = (element) => {
    gsap.to(element, {
      y: 100, // Move down 100 pixels
      opacity: 0,
      ease: 'power4.out', // Add a custom easing for fade out
      duration: 2, // Duration of the fade-out animation
      onComplete: () => {
        // Reset element's position and opacity after animation
        gsap.set(element, { y: 0, opacity: 1 });
        bounceElement(element); // Call the bounce animation again
      }
    });
  };

  useEffect(() => {
    const element = document.querySelector('.fade-out-element');
    bounceElement(element);
  }, []);

  useEffect(() => {
    // Define the GSAP timeline animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollDist",
        start: "top top",
        end: "bottom bottom",
        scrub: 2.5,

      },
    });

    // Add animations to the timeline
    timeline
      // .fromTo(".lay1", { y: 0 }, { y: -200 }, 0)
      // .fromTo(".lay2", { y: 100 }, { y: -800 }, 0)
      .fromTo(".lay3", { y: 0, z: 0 }, { y: -250, z: 400 }, 0)
      .fromTo(".lay4", { y: -90 }, { y: 650 }, 0)
      .fromTo(".fade-out-element", { y: -5  }, { y: 600}, 0)
      .fromTo(".lay5", { x: -10 }, { x: 80 }, 0)
      .fromTo(".lay6", { x: 35 }, { x: -100 }, 0)

  //   // Event listeners for mouse enter, mouse leave, and click
  //   const arrowBtn = document.getElementById("arrowBtn");

  //   arrowBtn.addEventListener("mouseenter", () => {
  //     gsap.to(".arrow", {
  //       y: 10,
  //       z:10,
  //       duration: 10,
  //       ease: "back.inOut(7)",
  //       overwrite: "auto",
  //     });
    });
  

  //   arrowBtn.addEventListener("mouseleave", () => {
  //     gsap.to(".arrow", {
  //       y: 0,
  //       z:0,
  //       duration: 10,
  //       ease: "power3.out",
  //       overwrite: "auto",
  //     });
  //   });

   

  //   arrowBtn.addEventListener("click", () => {
  //     gsap.to(window, {
  //       scrollTo: window.innerHeight,
  //       duration:10,
  //       ease: "power1.inOut",
  //     });
  //   });

  //   // Cleanup event listeners when component unmounts
  // }, []);

  // useEffect(() => {
  //   const arrowBtn = document.getElementById("arrowBtn");

  //   const handleMouseEnter = () => {
  //     gsap.to(".arrow", {
  //       y: 10,
  //       z:0,
  //       duration: 10,
  //       ease: "back.inOut(3)",
  //       overwrite: "auto",
  //     });
  //   };



  //   const handleMouseLeave = () => {
  //     gsap.to(".arrow", {
  //       y: 0,
  //       z:0,
  //       duration: 10,
  //       ease: "power3.out",
  //       overwrite: "auto",
  //     });
  //   };

  //   const handleClick = () => {
  //     gsap.to(window, {
  //       scrollTo: window.innerHeight,
  //       duration: 10,
  //       ease: "power1.inOut",
  //     });
  //   };

  //   arrowBtn.addEventListener("mouseenter", handleMouseEnter);
  //   arrowBtn.addEventListener("mouseleave", handleMouseLeave);
  //   arrowBtn.addEventListener("click", handleClick);

  //   // Cleanup event listeners when component unmounts
  //   return () => {
  //     arrowBtn.removeEventListener("mouseenter", handleMouseEnter);
  //     arrowBtn.removeEventListener("mouseleave", handleMouseLeave);
  //     arrowBtn.removeEventListener("click", handleClick);
  //   };
  // }, []);
  return (
    <div className='notContainerrrrr'>
      <div className='scrollDist'>
        <div className='main'>
          {" "}
          <div className='header-svgs'>
            <img className='lay1' src={lay1} alt='' />
            <img className='lay2' src={stars} alt='' />
            <img className='lay3' src={lay3} alt='' />
            <div className='lay4'> Wanderlust</div>
            <div  className="fade-out-element" >&#10095;&#10095;</div>
            <div className='arrow'></div>
            <img className='lay5' src={backleft} alt='' />
            <img className='lay6' src={backright} alt='' />
            <img className='lay7' src={front} alt='' />
          </div>
        </div>
      </div>

      <p className='ppp'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eaque
        necessitatibus, numquam ab pariatur voluptatem, beatae accusantium ea
        quasi error consectetur earum sequi reprehenderit dicta blanditiis
        perferendis quod ullam est.
      </p>
    </div>
  );
}
