// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./OurChoice.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function OurChoice() {
  return (
    <>

    <section className="swiper-box">
<div className="swiperContain">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="restChoice">
            <div className="glassContain">
              <h2>Restaurant</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                corrupti dignissimos minima iste temporibus et delectus
                accusantium, deleniti consectetur sint fuga libero quasi ab
                culpa laborum illo beatae similique quaerat!
              </p>
              <span>Price: 30JD - 100JD</span>
              <div>⭐⭐⭐⭐⭐</div>
              <button>Book Now!</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="hotelChoice">
            <div className="glassContain">
              <h2>Hotel</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                corrupti dignissimos minima iste temporibus et delectus
                accusantium, deleniti consectetur sint fuga libero quasi ab
                culpa laborum illo beatae similique quaerat!
              </p>
              <span>Price: 30JD - 100JD</span>
              <div>⭐⭐⭐⭐⭐</div>
              <button>Book Now!</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="activChoice">
            <div className="glassContain">
              <h2>Activity</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                corrupti dignissimos minima iste temporibus et delectus
                accusantium, deleniti consectetur sint fuga libero quasi ab
                culpa laborum illo beatae similique quaerat!
              </p>
              <span>Price: 30JD - 100JD</span>
              <div>⭐⭐⭐⭐⭐</div>
              <button>Book Now!</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </section>
      
    </>
  );
}
