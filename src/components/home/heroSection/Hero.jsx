
import './Hero.scss';

import  { useRef,useEffect  } from 'react';
import arrowimg from '../../imgs/next.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import petra from './petra2.jpg'
import mask from './grunge.jpg'
import img from './img.png'


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

    {/* <video  autoPlay controls loop id="background-video">
  <source src={video} type='video/mp4' />
</video> */}

      <video

        ref={videoRef}
        muted
        loop
        autoPlay
        src='https://firebasestorage.googleapis.com/v0/b/laith-5d196.appspot.com/o/0929(1).mp4?alt=media&token=2fe9c3f7-dd47-491b-897b-7d42e86a0c16&_gl=1*9jgsci*_ga*ODIzOTA1ODU2LjE2OTA0NDYwMDQ.*_ga_CW55HF8NVT*MTY5NjE4OTE3NC4xMy4xLjE2OTYxODkyOTEuMy4wLjA.'
        title="Embedded Video"
        frameBorder="0"
        allowFullScreen
      ></video>

      
      <div className="mask-contain"><img className='mask' src={mask}/></div>
      <div className="white-space"></div>
      {/* <img className="waves" src={img}/> */}
      {/* <svg className="waves" width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg"><path d="M1920,1080C1611.1666666666667,1098,309.5,1093.3333333333333,0,1080C-309.5,1066.6666666666667,41.33333333333333,1000.5,63,1000C84.66666666666667,999.5,108,1079.6666666666667,130,1077C152,1074.3333333333333,173,985.1666666666666,195,984C217,982.8333333333334,239.5,1061.3333333333333,262,1070C284.5,1078.6666666666667,307.6666666666667,1041.5,330,1036C352.3333333333333,1030.5,374.1666666666667,1047.5,396,1037C417.8333333333333,1026.5,439,983.8333333333334,461,973C483,962.1666666666666,505.6666666666667,963.8333333333334,528,972C550.3333333333334,980.1666666666666,572.8333333333334,1018,595,1022C617.1666666666666,1026,639,991.6666666666666,661,996C683,1000.3333333333334,705,1035,727,1048C749,1061,771.1666666666666,1074.8333333333333,793,1074C814.8333333333334,1073.1666666666667,836,1058,858,1043C880,1028,903,995.5,925,984C947,972.5,968.1666666666666,966,990,974C1011.8333333333334,982,1033.6666666666667,1017.8333333333334,1056,1032C1078.3333333333333,1046.1666666666667,1102,1060.6666666666667,1124,1059C1146,1057.3333333333333,1165.8333333333333,1031.3333333333333,1188,1022C1210.1666666666667,1012.6666666666666,1234.6666666666667,997.8333333333334,1257,1003C1279.3333333333333,1008.1666666666666,1300,1052.5,1322,1053C1344,1053.5,1366.6666666666667,1012.3333333333334,1389,1006C1411.3333333333333,999.6666666666666,1434,1004.5,1456,1015C1478,1025.5,1499,1059,1521,1069C1543,1079,1566.1666666666667,1090.3333333333333,1588,1075C1609.8333333333333,1059.6666666666667,1630,980.1666666666666,1652,977C1674,973.8333333333334,1698,1055.5,1720,1056C1742,1056.5,1761.8333333333333,994,1784,980C1806.1666666666667,966,1830.3333333333333,955.3333333333334,1853,972C1875.6666666666667,988.6666666666666,2228.8333333333335,1062,1920,1080C1611.1666666666667,1098,309.5,1093.3333333333333,0,1080" fill="#ffffff"/></svg> */}

      {/* <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff"  d="M0,224L80,208C160,192,320,160,480,160C640,160,800,192,960,202.7C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}


      {/* <svg className="waves-hero" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0, 19, 25,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0, 19, 25,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0, 19, 25,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg> */}


          




        <section className='hero-text'>

        <div className='glass-section'>
          
           <article className='first-line'>
                <a><img src="https://readme-typing-svg.demolab.com?font=Cinzel&weight=600&size=38&duration=4800&pause=986&color=020031&center=true&vCenter=true&multiline=true&repeat=false&width=400&height=80&lines=Welcome+To+" alt="Typing SVG" /></a>
                </article>
                <article className='first-line'>
                <a><img src="https://readme-typing-svg.demolab.com?font=Cinzel&weight=900&size=68&duration=4600&pause=986&color=020031&center=false&vCenter=true&multiline=true&repeat=false&width=800&height=120&lines=Wanderlust" alt="Typing SVG" /></a>
                </article>
               
                <article>
                <a><img src="https://readme-typing-svg.demolab.com?font=Cinzel&size=30&duration=4500&pause=986&color=020031&center=false&vCenter=true&multiline=true&width=900&height=100&lines=You+Are+in+Good+Hands;Your+Journey+Begins+Here" alt="Typing SVG" /></a>
                    </article>


          </div>
          
            <img className='arrowimg' src={arrowimg}alt='img'/>

        </section>
       
    </section>
        {/* <svg className="waves-hero" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0, 19, 25,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0, 19, 25,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0, 19, 25,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="z" />
            </g>
          </svg> */}

    </div>

    

{/*     

    <div className='hero-section'>
     


        <div className="scrollDist" />
        <div className="main">
          <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">

            <mask id="m">
              <g className="cloud1">
                <rect fill="" width="100%" height={101} y={699} />
                <image xlinkHref={cloud1}  height={900} />
              </g>
            </mask>
            <image  className='sky' xlinkHref={petra}  />
            <image className="mountBg" xlinkHref="https://assets.codepen.io/721952/mountBg.png" width={1200} height={800} />    
            <image className="mountMg" xlinkHref="https://assets.codepen.io/721952/mountMg.png" width={1200} height={800} />    
            <image className="cloud2" xlinkHref="https://assets.codepen.io/721952/cloud2.png" width={1200} height={800} />    
            <image className="mountFg" xlinkHref="https://assets.codepen.io/721952/mountFg.png" width={1200} height={800} />
            <image className="cloud1" xlinkHref="https://assets.codepen.io/721952/cloud1.png" width={1200} height={800} />
            <image className="cloud3" xlinkHref="https://assets.codepen.io/721952/cloud3.png" width={1200} height={800} />
            <text fill="#fff" x={100} y={200}>Welcome To Wanderlust</text>
            <text fill="#fff" x={100} y={290}>You Are in Good Hands</text>
            <text fill="#fff" x={100} y={350}>Your Journey Begins Here</text>

            <polyline className="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />
            <g mask="url(#m)">
              <rect fill="#fff" width="100%" height="100%" />      
              <text x={350} y={200} fill="#162a43">FURTHER</text>
            </g>
            <rect id="arrowBtn" width={0} height={0} opacity={0} x={0} y={0} style={{cursor: 'pointer'}} />
          </svg>
      

        </div>

        <section className='test'> 
        
        </section>
      </div> */}
      
    </>
    
  )
}
