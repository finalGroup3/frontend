import "./AboutApp.scss";

// import border from 'src/components/imgs/border.avif'
import React, { useState, useEffect } from "react";

function AboutApp() {
  return (
    <>
      <div className=''>
        <div className='imgs-section'>
          <svg className="aboutapp-svg"
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            xmlns:xlink='http://www.w3.org/1999/xlink'
            xmlns:svgjs='http://svgjs.dev/svgjs'
            width='1440'
            height='258'
            preserveAspectRatio='none'
            viewBox='0 0 1440 258'>
            <g mask='url("#SvgjsMask1030")' fill='none'>
              <path
                d='M37 258L295 0L590.5 0L332.5 258z'
                fill='url("#SvgjsLinearGradient1031")'></path>
              <path
                d='M268.6 258L526.6 0L727.6 0L469.6 258z'
                fill='url("#SvgjsLinearGradient1031")'></path>
              <path
                d='M513.2 258L771.2 0L1005.2 0L747.2 258z'
                fill='url("#SvgjsLinearGradient1031")'></path>
              <path
                d='M732.8000000000001 258L990.8000000000001 0L1218.8000000000002 0L960.8000000000001 258z'
                fill='url("#SvgjsLinearGradient1031")'></path>
              <path
                d='M1395 258L1137 0L909 0L1167 258z'
                fill='url("#SvgjsLinearGradient1032")'></path>
              <path
                d='M1200.4 258L942.4000000000001 0L696.4000000000001 0L954.4000000000001 258z'
                fill='url("#SvgjsLinearGradient1032")'></path>
              <path
                d='M923.8 258L665.8 0L383.79999999999995 0L641.8 258z'
                fill='url("#SvgjsLinearGradient1032")'></path>
              <path
                d='M699.1999999999999 258L441.19999999999993 0L85.69999999999993 0L343.69999999999993 258z'
                fill='url("#SvgjsLinearGradient1032")'></path>
              <path
                d='M1265.7683059400642 258L1440 83.76830594006412L1440 258z'
                fill='url("#SvgjsLinearGradient1031")'></path>
              <path
                d='M0 258L174.23169405993588 258L 0 83.76830594006412z'
                fill='url("#SvgjsLinearGradient1032")'></path>
            </g>
            <defs>
              <mask id='SvgjsMask1030'>
                <rect width='1440' height='258' fill='#ffffff'></rect>
              </mask>
              <linearGradient
                x1='0%'
                y1='100%'
                x2='100%'
                y2='0%'
                id='SvgjsLinearGradient1031'>
                <stop stop-color='rgba(0, 19, 25, 0.61)' offset='0'></stop>
                <stop
                  stop-opacity='0'
                  stop-color='rgba(0, 19, 25, 0.61)'
                  offset='0.66'></stop>
              </linearGradient>
              <linearGradient
                x1='100%'
                y1='100%'
                x2='0%'
                y2='0%'
                id='SvgjsLinearGradient1032'>
                <stop stop-color='rgba(0, 19, 25, 0.61)' offset='0'></stop>
                <stop
                  stop-opacity='0'
                  stop-color='rgba(0, 19, 25, 0.61)'
                  offset='0.66'></stop>
              </linearGradient>
            </defs>
          </svg>
          <section className='left-imgs-home'>
            <div className='row g-5 align-items-center'>
              <div className='col-lg-6'>
                <div className='row g-3'>
                  <div className='col-6 text-start '>
                    <img
                      className='img-fluid rounded w-100 wow zoomIn aboutapp-img1'
                      src='https://joctours.com/wp-content/uploads/tour01.jpg'
                      alt=''
                    />
                  </div>
                  <div className='col-6 text-start'>
                    <img
                      className='img-fluid rounded w-75 wow zoomIn aboutapp-img2 '
                      src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/37/3d/a5/hotel-facade.jpg?w=1200&h=-1&s=1='
                      style={{ marginTop: "25%" }}
                      alt=''
                    />
                  </div>
                  <div className='col-6 text-end'>
                    <img
                      className='img-fluid rounded w-75 wow zoomIn aboutapp-img3'
                      src='https://blog.myjordanjourney.com/hs-fs/hubfs/Screen%20Shot%202021-11-03%20at%204.35.39%20PM.png?width=1070&name=Screen%20Shot%202021-11-03%20at%204.35.39%20PM.png'
                      alt=''
                    />
                  </div>
                  <div className='col-6 text-end'>
                    <img
                      className='img-fluid rounded w-100 wow zoomIn aboutapp-img4'
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEoutTEmzAxHryhTmGIu1UVyqhHaWKcVHo1g&usqp=CAU'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <p className='aboutus-home'>
            <h3>About our website</h3>
            <p>
              {" "}
              Choose your destination and browse a diverse list of exciting
              options for you
            </p>

            <p>
              Find comprehensive details for each restaurant, hotel, and
              entertainment venue.
            </p>

            <p>
              Browse past photos and reviews of users for their personal
              experiences.
            </p>
            <p>
              After choosing the appropriate option, book it through the website
              in an easy and secure way.
            </p>

            {/* <span className='dots'>. . . . . . . . . . . . . . . . . .  </span> */}
          </p>
        </div>
        <svg
          className='waves'
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
      </div>
    </>
  );
}

export default AboutApp;
