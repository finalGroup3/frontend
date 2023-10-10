import React from "react";
import savana from "./savanna.png";
import laith from "./laith.png";
import nour from "./nour.jpeg";
import alaa from "./ALA.jpg";
import amro from "./amroo.jpg";
import "./test1.scss";
import Test from "./Test";
import Team from "./Team";

import Header from "../header/Header";
import Footer from "../footer/Footer";

function About() {
  return (
    <>
      <Header />

      <div className='act'>

        <div class="gallery">
          <div class="gallery_line">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/b7/2a/96/romisches-theater-amman.jpg?w=500&h=-1&s=1" />
            <img src="https://content.r9cdn.net/rimg/dimg/66/d1/70dab0ac-city-25883-164a4e17b2a.jpg?width=1366&height=768&xhint=1366&yhint=894&crop=true" />
            <img src="https://www.edarabia.com/wp-content/uploads/2019/05/15-things-to-do-in-amman-with-kids-4-1.jpg" />
            <img src="https://www.holidify.com/images/cmsuploads/compressed/28183151231811203888248685748747581579208281n_20220602134645.jpeg" />
            <img src="https://oneintheorangejacket.com/wp-content/uploads/2023/06/Karak-jordan.jpg" />
            <img src="https://mediaim.expedia.com/destination/1/3dd213dae0f42d5f33c4de4caf127e59.jpg" />
            <img src="https://lp-cms-production.imgix.net/features/2019/03/roman-ruins-amman-jordan-407d5b729ba7.jpg" />
            <img src="data:image/jpeg;base64,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" />
            <img src="https://oneintheorangejacket.com/wp-content/uploads/2023/06/Karak-jordan.jpg" />
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/b7/2a/96/romisches-theater-amman.jpg?w=500&h=-1&s=1" />
            <img src="https://tourscanner.com/blog/wp-content/uploads/2022/07/things-to-do-in-Amman-Jordan-.jpg" />
            <img src="https://aqaba-diving.com/wp-content/uploads/2019/11/Flyboard-in-Aqaba.jpg" />
          </div>
          <div class="gallery_line">
            <img src="https://www.globeguide.ca/wp-content/uploads/2019/10/Jordan-Aqaba-red-sea-boat-2.jpg" />
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/b7/2a/96/romisches-theater-amman.jpg?w=500&h=-1&s=1" />
            <img src="https://jtt.com.jo/wp-content/uploads/2022/06/Ajloun-2-900x600.jpg" />
            <img src="https://tourscanner.com/blog/wp-content/uploads/2022/07/things-to-do-in-Amman-Jordan-.jpg" />
            <img src="https://content.r9cdn.net/rimg/dimg/66/d1/70dab0ac-city-25883-164a4e17b2a.jpg?width=1366&height=768&xhint=1366&yhint=894&crop=true" />
            <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/334000/334293-Ajloun-Governorate.jpg" />
            <img src="https://www.edarabia.com/wp-content/uploads/2019/05/15-things-to-do-in-amman-with-kids-4-1.jpg" />
            <img src="https://tourscanner.com/blog/wp-content/uploads/2022/07/things-to-do-in-Amman-Jordan-.jpg" />
            <img src="https://www.globeguide.ca/wp-content/uploads/2019/10/Jordan-Aqaba-Red-Sea-swimmig.jpg" />
            <img src="https://images.squarespace-cdn.com/content/v1/5a87961cbe42d637c54cab93/1586276629190-51W7B0FE6667179WEW0B/amman-best-things-to-do.jpg" />
            <img src="https://lp-cms-production.imgix.net/features/2019/03/roman-ruins-amman-jordan-407d5b729ba7.jpg" />
            <img src="https://mediaim.expedia.com/destination/1/3dd213dae0f42d5f33c4de4caf127e59.jpg" />
          </div>
          <div class="gallery_line">
            <img src="https://aqaba-diving.com/wp-content/uploads/2019/11/Flyboard-in-Aqaba.jpg" />
            <img src="https://www.globeguide.ca/wp-content/uploads/2019/10/Jordan-Aqaba-red-sea-boat-2.jpg" />
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/2e/be/4a/20180605-095622-largejpg.jpg?w=500&h=400&s=1" />
            <img src="https://content.r9cdn.net/rimg/dimg/66/d1/70dab0ac-city-25883-164a4e17b2a.jpg?width=1366&height=768&xhint=1366&yhint=894&crop=true" />
            <img src="https://jtt.com.jo/wp-content/uploads/2022/06/Ajloun-2-900x600.jpg" />
            <img src="https://oneintheorangejacket.com/wp-content/uploads/2023/06/Karak-jordan.jpg" />
            <img src="https://mediaim.expedia.com/destination/1/3dd213dae0f42d5f33c4de4caf127e59.jpg" />
            <img src="https://www.ayla.com.jo/wp-content/uploads/2020/02/Scuba-scaled.jpg" />
            <img src="https://aqaba-diving.com/wp-content/uploads/2019/11/Flyboard-in-Aqaba.jpg" />
            <img src="data:image/jpeg;base64,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" />
            <img src="https://www.urtrips.com/wp-content/uploads/2022/09/amman-waves-aqua-park1.jpg" />
            <img src="https://images.squarespace-cdn.com/content/v1/5a87961cbe42d637c54cab93/1586276629190-51W7B0FE6667179WEW0B/amman-best-things-to-do.jpg" />
          </div>
        </div>
        {/* <div className='act-tit'>We've Chosen <br/>The Best Places <br/>For Your Dream Vacation</div> */}

      </div>
      <div className="allcom">
        <div className="bg">
          <h1 className="abouttit"><strong class="underline-event">
            <span class="underlined underline-clip">About Us </span>
          </strong></h1>
        </div>
      </div>

      <div class="text-picture">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 module-text">
              <div class="panel-title">
                <p>
                  <strong class="underline-event">
                    <span class="underlined underline-clip">Welcome </span> To
                    Our Platform!
                  </strong>
                </p>
              </div>
              <p class="sub-title"></p>
              <p class="text">
                We are a trusted online reservation service that connects
                travelers with a wide selection of hotels, restaurants, and
                activities. Our mission is to simplify and enhance the travel
                experience by providing a convenient and reliable platform for
                making reservations. We understand that finding the perfect
                accommodation, dining options, and activities can be
                time-consuming, so we've curated a diverse range of options to
                cater to every traveler's needs.
                <br />
                &nbsp;
              </p>
            </div>
            <div class="col-sm-6 module-pic">
              <p>
                <img
                  alt="Image"
                  class="img-responsive"
                  src="https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_960_720.jpg"
                />

                <img
                  alt="Image"
                  class="img-responsive"
                  src="https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_1280.jpg"
                />

                <img
                  alt="Image"
                  class="img-responsive1"
                  src="https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_960_720.jpg"
                />
                <img
                  alt="Image"
                  class="img-responsive1"
                  src="https://cdn.pixabay.com/photo/2016/11/30/14/08/cafe-1872888_960_720.jpg"
                />
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="text-picture">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 module-pic">
              {/* <img alt="Image" class="img-responsive" src="https://via.placeholder.com/500x400C/343a40/" /> */}
              <p>
                <img
                  alt="Image"
                  class="img-responsive2"
                  src="https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_960_720.jpg"
                />

                <img
                  alt="Image"
                  class="img-responsive2"
                  src="https://cdn.pixabay.com/photo/2022/08/06/20/46/coffee-shop-7369404_960_720.jpg"
                />

                <img
                  alt="Image"
                  class="img-responsive"
                  src="https://cdn.pixabay.com/photo/2017/08/07/07/06/lobby-2600880_960_720.jpg"
                />
                <img
                  alt="Image"
                  class="img-responsive"
                  src="https://cdn.pixabay.com/photo/2019/07/30/14/12/woman-4373078_960_720.jpg"
                />
              </p>
            </div>
            <div class="col-sm-6 module-text">
              <div class="panel-title">
                <p>
                  <strong class="underline-event">
                    At our <span class="underlined underline-clip">Core,</span>
                  </strong>
                </p>
              </div>
              <p class="sub-title"></p>
              <p class="text">
                We believe in delivering exceptional customer service. Our team
                is dedicated to ensuring that you have a seamless booking
                experience and can focus on creating unforgettable memories
                during your travels. Whether you're planning a family vacation,
                a romantic getaway, or a business trip, our platform offers a
                user-friendly interface that allows you to search, compare, and
                book with ease. We provide detailed information, including
                reviews and ratings, to help you make informed decisions.
                <br />
                &nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hightt">

        <div className="aboutss" id="abouts">
          <h1 className="underline-event">
            <span class="underlined underline-clip">
              Small Teams Big Results
            </span>
          </h1>
        </div>
      </div>
      {/* <div id="aaapp">
        <div id="profiles">
          <div class="profile">
            <div class="profile-content">
              <div class="profile-pic">
                <img class="profile-pic-image" src={savana} />
              </div>
              <h3 class="profile-name">Savana</h3>
            </div>
            <div class="box">
              <div>
                <ul class="list-inline">
                  <li class="list-inline-item"><i class="fab fa-github"></i></li>
                  <li class="list-inline-item"><i class="fab fa-linkedin-in"></i></li>
                </ul>

              </div>
            </div>
          </div>
          <div class="profile">
            <div class="profile-content">
              <div class="profile-pic">
                <img class="profile-pic-image" src={alaa} />
              </div>
              <h3 class="profile-name" > A LA' </h3>

            </div>
            <div class="box">
              <div>
                <ul class="list-inline">
                  <li class="list-inline-item"><i class="fab fa-github"></i></li>
                  <li class="list-inline-item"><i class="fab fa-linkedin-in"></i></li>
                </ul>

              </div>
            </div>
          </div>
          <div class="profile">
            <div class="profile-content">
              <div class="profile-pic">
                <img class="profile-pic-image" src={laith} />
              </div>
              <h3 class="profile-name">Laith</h3>
            </div>
            <div class="box">
              <div>
                <ul class="list-inline">
                  <li class="list-inline-item"><i class="fab fa-github"></i></li>
                  <li class="list-inline-item"><i class="fab fa-linkedin-in"></i></li>
                </ul>

              </div>
            </div>
          </div>
          <div class="profile">
            <div class="profile-content">
              <div class="profile-pic">
                <img class="profile-pic-image" src={nour} />
              </div>
              <h3 class="profile-name">Nour</h3>
            </div>
            <div class="box">
              <div>
                <ul class="list-inline">
                  <li class="list-inline-item"><i class="fab fa-github"></i></li>
                  <li class="list-inline-item"><i class="fab fa-linkedin-in"></i></li>
                </ul>

              </div>
            </div>
          </div>
          <div class="profile">
            <div class="profile-content">
              <div class="profile-pic">
                <img class="profile-pic-image" src={amro} />
              </div>
              <h3 class="profile-name">Amro</h3>
            </div>
            <div class="box">
              <div>
                <ul class="list-inline">
                  <li class="list-inline-item"><i class="fab fa-github"></i></li>
                  <li class="list-inline-item"><i class="fab fa-linkedin-in"></i></li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* </div > */}

      <Team />

      <div className="aboutss" id="abouts">
        <h1 className="underline-event">
          <span class="underlined underline-clip">OUR REVIEWS</span>
        </h1>
      </div>
      <Test />
      <Footer />
    </>
  );
}
export default About;
{
  /* <span class="underlined underline-clip">Sell</span> */
}
