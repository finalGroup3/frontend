
import './Hero.scss';

import  { useRef,useEffect  } from 'react';
import arrowimg from './fast-forward-double-right-arrows-symbol.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import mask from './grunge2.jpg'
// import img from './img.png'
// import video from './intro.mp4'


gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const videoRef = useRef(null);
    useEffect(() => {
    
        const videoElement = videoRef.current;
    
      
        const canAutoplay =
          videoElement &&
          typeof videoElement.play === 'function' &&
          videoElement.play().then;
    
      
        if (canAutoplay) {
          videoElement.play().catch((error) => {
          
            console.error('Autoplay was prevented:', error);
          });
        }
      }, []);


  return (
    <>
    <div className='hero-box'>
<section className='hero'>

    

      {/* <video

        ref={videoRef}
        muted
        loop
        autoPlay
        src={video}
        title="Embedded Video"
        frameBorder="0"
        allowFullScreen
      ></video> */}

      
      <div className="mask-contain"><img className='mask' src={mask}/></div>
      <div className="white-space"></div>
      


          




        <section className='hero-text'>

          <p>
          Welcome To 
          </p>

        <div id="hero-text-app">
        <div className="title">
          <div className="title-inner">
            <div className="cafe">
           
            </div>
            <div className="mozart">
              <div className="mozart-inner">✧Wanderlust</div>
           
           
            
                   
                    </div>
          </div>
        </div>

        <div className='glass-section'>
                         
                         <article>
                         <a><img src="https://readme-typing-svg.demolab.com?font=Cinzel&size=30&duration=2500&pause=686&color=020031&center=false&vCenter=true&multiline=true&width=900&height=100&lines=You+Are+in+Good+Hands;Your+Journey+Begins+Here" alt="Typing SVG" /></a>
                             </article>
         
         
                   </div>
      </div>

       
          
            <img className='arrowimg'  src={arrowimg}alt='img'/>

        </section>
   
    </section>
      

    </div>

    


      
    </>
    
  )
}
