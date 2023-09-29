
import './Hero.scss';
import video from './jordan2.mp4'
import  { useRef,useEffect  } from 'react';

export default function Hero() {
    const videoRef = useRef(null);
    useEffect(() => {
        // Use the 'current' property to get the actual DOM element
        const videoElement = videoRef.current;
    
        // Check if the browser supports autoplay
        const canAutoplay =
          videoElement &&
          typeof videoElement.play === 'function' &&
          videoElement.play().then;
    
        // Autoplay the video if supported
        if (canAutoplay) {
          videoElement.play().catch((error) => {
            // Autoplay was prevented, handle accordingly
            console.error('Autoplay was prevented:', error);
          });
        }
      }, []); // Empty dependency array ensures that this effect runs once after the initial render
    
  return (
    <>
    <div className='vignette '></div>

    <section className='hero'>

    {/* <video  autoPlay controls loop id="background-video">
  <source src={video} type='video/mp4' />
</video> */}


      <video

        ref={videoRef}
        controls
        muted
        src={video}
        title="Embedded Video"
        frameBorder="0"
        allowFullScreen
      ></video>
    


        {/* <section>
            <p> Jordan Jordan Jordan Jordan   Jordan Jordan Jordan Jordan  </p>
            <p> Jordan Jordan Jordan Jordan  Jordan Jordan Jordan Jordan    </p>
            <img/>
        </section> */}
    </section>
    <section className='test'></section>
    </>
    
  )
}
