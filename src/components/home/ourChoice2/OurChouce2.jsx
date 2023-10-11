/* eslint-disable react/no-unescaped-entities */
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
  const [openRestModal, setOpenRestModal] = useState(false);
  const [openHotelModal, setOpenHotelModal] = useState(false);
  const [openActivModal, setOpenActivModal] = useState(false);

  return (
    <>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
      <div className="swiper-box">
        <article className="swiper-title">
          <h2>✧✧ Our Choice ✧✧</h2>
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
                <h2>Solaya Restaurant</h2>
                <p>
                  Solaya Lounge, a few steps above the restaurant, guarantees
                  and treats you to a matchless feel with upbeat tunes bringing
                  together a simple menu, with the finest ingredients inspired
                  by Solaya Restaurant specials.
                </p>
                <span>Price: 10JD - 100JD</span>
                <div>⭐⭐⭐⭐⭐</div>
                <button onClick={() => setOpenRestModal(true)}>
                  Book Now!
                </button>
              </div>
            </SwiperSlide>
            <BookingModal
              open={openRestModal}
              onClose={() => setOpenRestModal(false)}
              item={{
                ownerId: 6,
                img: "https://firebasestorage.googleapis.com/v0/b/laith-5d196.appspot.com/o/restaurantsPic%2FSolayaRestaurant.jpg?alt=media&token=c4d5b7fa-322d-44e3-85ba-beb49fc60e02&_gl=1*u88d39*_ga*MzIzNDg5NTc3LjE2ODYxNTk2MzI.*_ga_CW55HF8NVT*MTY5NjQwOTYxOS43LjEuMTY5NjQxMjU5Ni42MC4wLjA.",
                name: "Solaya Restaurant",
                description:
                  "Solaya Lounge, a few steps above the restaurant, guarantees and treats you to a matchless feel with upbeat tunes bringing together a simple menu, with the finest ingredients inspired by Solaya Restaurant specials.",
              }}
            />
            <SwiperSlide className="hotelChoice">
              <div className="noneGlassContain">
                <h2>The Ritz-Carlton</h2>
                <p>
                  The Ritz-Carlton sets the standard in elegance for business
                  and leisure travelers worldwide. We have been perfecting the
                  art of hospitality and have developed an approach to luxury
                  that has never been duplicated.
                </p>
                <span>Price: 240JD - 500JD</span>
                <div>⭐⭐⭐⭐⭐</div>
                <button onClick={() => setOpenHotelModal(true)}>
                  Book Now!
                </button>
              </div>
            </SwiperSlide>
            <BookingModal
              open={openHotelModal}
              onClose={() => setOpenHotelModal(false)}
              item={{
                ownerId: 6,
                img: "https://s7d1.scene7.com/is/image/marriotts7prod/rz-ammrz-hotel-exterior-26652:Classic-Hor?wid=2880&fit=constrain",
                name: "The Ritz-Carlton",
                description:
                  "The Ritz-Carlton sets the standard in elegance for business and leisure travelers worldwide. We have been perfecting the art of hospitality and have developed an approach to luxury that has never been duplicated.",
              }}
            />
            <SwiperSlide className="activChoice">
              <div className="noneGlassContain">
                <h2>saraya aqaba Waterpark</h2>
                <p>
                  The region's most picturesque water park with a stunning view
                  of the surrounding mountain range. Featuring water-drenched
                  versions of the country's most iconic landmarks.
                </p>
                <span>Price: 20JD - 200JD</span>
                <div>⭐⭐⭐⭐⭐</div>
                <button onClick={() => setOpenActivModal(true)}>
                  Book Now!
                </button>
              </div>
            </SwiperSlide>
            <BookingModal
              open={openActivModal}
              onClose={() => setOpenActivModal(false)}
              item={{
                ownerId: 6,
                img: "https://amusementlogic.com/wp-content/uploads/2021/06/SARAYA-AQABA-WP_03_2.jpg",
                name: "saraya aqaba Waterpark",
                description:
                  "The region's most picturesque water park with a stunning view of the surrounding mountain range. Featuring water-drenched versions of the country's most iconic landmarks.",
              }}
            />
          </Swiper>
        </div>
      </div>
    </>
  );
}
