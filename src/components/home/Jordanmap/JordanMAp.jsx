import React from 'react'
import Jmap from './JDmap.png'
import './JordanMap.scss'
export default function JordanMAp() {
  return (
    <>
     <svg
          className='waves22'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28'
          preserveAspectRatio='none'
          shapeRendering='auto'>
          <defs>
            <path
              id='gentle-wave'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            />
          </defs>
          <g className='parallax'>
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='0'
              fill='rgba(255,255,255,0.7)'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='3'
              fill='rgba(255,255,255,0.5)'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='5'
              fill='rgba(255,255,255,0.3)'
            />
            <use xlinkHref='#gentle-wave' x='48' y='7' fill='#fff' />
          </g>
        </svg>
     <section className='jmap-contain'>
      <div className='jmap'>
        <section className='jmap-text'>
          <h2 className='jmap-h2'>
            Wanderlust map
            <h2 >
            ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧
          </h2>
          </h2>
          
<p>Discover the Jordan at your fingertips with our interactive map-based service selection!<br/><br/> Whether you're searching for delectable dining options, cozy motels, or exciting activities, our user-friendly map guides you effortlessly to your desired destination.<br/><br/> Navigate your way with ease as we chart out the perfect path for your next adventure, making your choices simpler and your experiences unforgettable.</p>
        </section>
        {/* <svg  className='jmap-svg' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="258" preserveAspectRatio="none" viewBox="0 0 1440 258">
    <g mask="url(&quot;#SvgjsMask1033&quot;)" fill="none">
        <path d="M37 258L295 0L590.5 0L332.5 258z" fill="url(&quot;#SvgjsLinearGradient1034&quot;)"></path>
        <path d="M268.6 258L526.6 0L727.6 0L469.6 258z" fill="url(&quot;#SvgjsLinearGradient1034&quot;)"></path>
        <path d="M513.2 258L771.2 0L1005.2 0L747.2 258z" fill="url(&quot;#SvgjsLinearGradient1034&quot;)"></path>
        <path d="M732.8000000000001 258L990.8000000000001 0L1218.8000000000002 0L960.8000000000001 258z" fill="url(&quot;#SvgjsLinearGradient1034&quot;)"></path>
        <path d="M1395 258L1137 0L909 0L1167 258z" fill="url(&quot;#SvgjsLinearGradient1035&quot;)"></path>
        <path d="M1200.4 258L942.4000000000001 0L696.4000000000001 0L954.4000000000001 258z" fill="url(&quot;#SvgjsLinearGradient1035&quot;)"></path>
        <path d="M923.8 258L665.8 0L383.79999999999995 0L641.8 258z" fill="url(&quot;#SvgjsLinearGradient1035&quot;)"></path>
        <path d="M699.1999999999999 258L441.19999999999993 0L85.69999999999993 0L343.69999999999993 258z" fill="url(&quot;#SvgjsLinearGradient1035&quot;)"></path>
        <path d="M1265.7683059400642 258L1440 83.76830594006412L1440 258z" fill="url(&quot;#SvgjsLinearGradient1034&quot;)"></path>
        <path d="M0 258L174.23169405993588 258L 0 83.76830594006412z" fill="url(&quot;#SvgjsLinearGradient1035&quot;)"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1033">
            <rect width="1000" height="218" fill="#ffffff"></rect>
        </mask>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="SvgjsLinearGradient1034">
            <stop stop-color="rgba(255, 255, 255, 0.61)" offset="0"></stop>
            <stop stop-opacity="0" stop-color="rgba(255, 255, 255, 0.61)" offset="0.66"></stop>
        </linearGradient>
        <linearGradient x1="100%" y1="100%" x2="0%" y2="0%" id="SvgjsLinearGradient1035">
            <stop stop-color="rgba(255, 255, 255, 0.61)" offset="0"></stop>
            <stop stop-opacity="0" stop-color="rgba(255, 255, 255, 0.61)" offset="0.66"></stop>
        </linearGradient>
    </defs>
</svg> */}
        <section >
            <img className='jmap-img' src={Jmap}/>
            </section>
    </div> 
    </section>

    
    </>
   
   
  )
}
