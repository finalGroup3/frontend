import React from 'react';
import savana from "./savanna.png"
import laith from "./laith.png"
import nour from "./nour.jpeg"
import alaa from "./ALA.jpg"
import amro from "./amroo.jpg"
import "./about.scss";



function About() {



  return (
    <>
      <div className='app_body'>
        <div>


          <section id="slideshow">
            <div class="entire-content">
              <div class="content-carrousel">
                <figure class="shadow"><img src="https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_960_720.jpg" /></figure>
                <figure class="shadow"><img src="https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_1280.jpg" /></figure>
                <figure class="shadow"><img src="https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_960_720.jpg" /></figure>
                <figure class="shadow"><img src="https://cdn.pixabay.com/photo/2016/11/30/14/08/cafe-1872888_960_720.jpg" /></figure>
                <figure class="shadow"><img src="https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_960_720.jpg" /></figure>
                <figure class="shadow"><img src="https://cdn.pixabay.com/photo/2022/08/06/20/46/coffee-shop-7369404_960_720.jpg" /></figure>
                <figure class="shadow"><img src="https://cdn.pixabay.com/photo/2017/08/07/07/06/lobby-2600880_960_720.jpg" /></figure>
                <figure class="shadow"><img src="https://cdn.pixabay.com/photo/2019/07/30/14/12/woman-4373078_960_720.jpg" /></figure>
                <figure class="shadow"><img src="https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_960_720.jpg" /></figure>
              </div>
            </div>
            <svg className="wavesabout" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </section>




          <div className="abouts" id="abouts">
            <br></br>
            <h1 className="titles">About Us</h1>
            <p className="titles">Welcome to our platform! We are a trusted online reservation service that connects travelers with a wide selection of hotels, restaurants, and activities.
              Our mission is to simplify and enhance the travel experience by providing a convenient and reliable platform for making reservations. We understand that finding the perfect accommodation, dining options, and activities can be time-consuming, so we've curated a diverse range of options to cater to every traveler's needs.
              At our core, we believe in delivering exceptional customer service. Our team is dedicated to ensuring that you have a seamless booking experience and can focus on creating unforgettable memories during your travels.
              Whether you're planning a family vacation, a romantic getaway, or a business trip, our platform offers a user-friendly interface that allows you to search, compare, and book with ease. We provide detailed information, including reviews and ratings, to help you make informed decisions.
              We value your trust and strive to maintain the highest standards of security and privacy. Your personal information is protected, and our payment system is secure, giving you peace of mind while making reservations.
              Thank you for choosing our platform. We are committed to continually improving our services and expanding our offerings to ensure that your travel experiences are unforgettable.</p>

          </div>





          <div id="mysavana">

            <div className="aboutss" id="abouts">
              <br>
              </br>
              <h1 className="titles">Small teams Big results</h1><br></br><br></br><br></br>
            </div>

            <section class="itemsavana">
              <article class="savana" tabindex="0">
                <figure class="namee">
                  <img src={nour} alt="a cute kitten" />
                  <figcaption>Nour</figcaption>
                </figure>
                <div class="descr">
                  <h2 class="tit">Hi, She is Nour!</h2>
                  <p class="tex">Nour is passionate about staying up to date with the latest industry trends and best practices in web development. She is experienced in creating responsive and visually appealing websites that effectively convey our brand message.</p></div>
              </article>
              <article class="savana" tabindex="0">
                <figure class="namee">
                  <img src={amro} alt="a cute kitten" />
                  <figcaption>Amro</figcaption>
                </figure>
                <div class="descr">
                  <h2 class="tit">Hi, He is Amro!</h2>
                  <p class="tex">Amro plays a pivotal role in crafting and maintaining our online presence. With expertise in web technologies such as HTML, CSS, and JavaScript, he brings our website and web applications to life, ensuring an intuitive and seamless user experience.</p></div>
              </article>
              <article class="savana" tabindex="0">
                <figure class="namee">
                  <img src={savana} alt="a cute kitten" />
                  <figcaption>Savana</figcaption>
                </figure>
                <div class="descr">
                  <h2 class="tit">Hi, She is Savana!</h2>
                  <p class="tex">Savana is known for translating complex ideas into elegant and functional websites. Her attention to detail and commitment to delivering high-quality code ensure that our websites not only look visually appealing but also perform flawlessly across different devices and browsers.</p></div>
              </article>
              <article class="savana" tabindex="0">
                <figure class="namee">
                  <img src={laith} alt="a cute kitten" />
                  <figcaption>Laith</figcaption>
                </figure>
                <div class="descr">
                  <h2 class="tit">Hi, He is Laith</h2>
                  <p class="tex">Laith is an excellent team Leader, collaborating closely with designers, content creators, and other developers to bring projects to fruition. His effective communication skills and ability to understand and interpret client requirements contribute to successful project outcomes.</p></div>
              </article>
              <article class="savana" tabindex="0">
                <figure class="namee">
                  <img src={alaa} alt="a cute kitten" />
                  <figcaption>Ala</figcaption>
                </figure>
                <div class="descr">
                  <h2 class="tit">Hi, He is Ala</h2>
                  <p class="tex">Ala is a highly skilled and innovative web developer who brings a wealth of experience to our team. With a strong background in front-end and back-end development,he possesses a deep understanding of the entire web development process.</p></div>
              </article>
            </section>
          </div>
        </div>
      </div>


    </>
  );
}

export default About;