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
      <div className="swiper-box">
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

      <BookingModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
