// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import BookingModal from "../../bookingModal/BookingModal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./OurChoice2.scss";

// import required modules
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";

export default function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
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
      <div className="swiper-box">
      <article className="swiper-title">
                <h2>Our special groups</h2>
                {/* <p>We provide you with many distinctive and famous options in the region</p> */}
              </article>
        <div className="swiperContain">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Mousewheel, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="restChoice">
              <div className="noneGlassContain">
                <h2>Restaurant</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dicta corrupti dignissimos minima iste temporibus et delectus
                  accusantium, deleniti consectetur sint fuga libero quasi ab
                  culpa laborum illo beatae similique quaerat!
                </p>
                <span>Price: 30JD - 100JD</span>
                <div>⭐⭐⭐⭐⭐</div>
                <button onClick={() => setOpenModal(true)}>Book Now!</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hotelChoice">
              <div className="noneGlassContain">
                <h2>Hotel</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dicta corrupti dignissimos minima iste temporibus et delectus
                  accusantium, deleniti consectetur sint fuga libero quasi ab
                  culpa laborum illo beatae similique quaerat!
                </p>
                <span>Price: 30JD - 100JD</span>
                <div>⭐⭐⭐⭐⭐</div>
                <button onClick={() => setOpenModal(true)}>Book Now!</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="activChoice">
              <div className="noneGlassContain">
                <h2>Activity</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dicta corrupti dignissimos minima iste temporibus et delectus
                  accusantium, deleniti consectetur sint fuga libero quasi ab
                  culpa laborum illo beatae similique quaerat!
                </p>
                <span>Price: 30JD - 100JD</span>
                <div>⭐⭐⭐⭐⭐</div>
                <button onClick={() => setOpenModal(true)}>Book Now!</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <BookingModal open={openModal} onClose={() => setOpenModal(false)} item={{image:'',name:'',description:''}}/>
    </>
  );
}
