import React from 'react';
import './activities.scss';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import $ from 'jquery';

export default function Activities() {
    /* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  
    return (
        <>
            <Header />
            
            {/* <a class="Me" href="https://bit.ly/m/JordanDey" target="_top">CodePen by Jordan Dey</a> */}

            <div className="bbb">
                <section
                    className="section service bg-black-10 text-center "
                    aria-label="service"
                >
                    <div className="container-top-three-resturants">
                        <br />
                        <h2 className="headline-1 section-title">Top Activities</h2>
                        <p className="section-subtitle2 label-2">Your Dream Vacation Destinations</p>
                        <p className="section-subtitle"></p>
                        <br />
                        <br />

            <div className='acthed'>

                <figure class="snip1432">
                    <img src="https://jordantraveler.com/wp-content/uploads/2022/05/Amman-Itinerary-Hero.png" alt="sample36" />
                    <figcaption>
                        <div>
                            <h3>Discover the Heart of Jordan</h3>
                            <h3>where ancient history meets modern vibrancy</h3>
                        </div>
                        <div>
                            <h2>Amman</h2>
                        </div>
                    </figcaption>
                    <a href="#"></a>
                </figure>
                <figure class="snip1432"><img src="https://media.meer.com/attachments/5594c4d91edbe7f4e0cf444ebca76b5447aba597/store/fill/860/645/ab222a80768bae72a4c3025f24abff06bab861b36cb7dc55fa1343678810/Camping-site-at-Wadi-Rum-Jordan.jpg" alt="sample83" />
                    <figcaption>
                        <div>
                            <h3>Desert Adventures Await</h3>
                            <h3>Where Desert Dreams Begin</h3>
                        </div>
                        <div>
                            <h2>Wadi Rum</h2>
                        </div>
                    </figcaption>
                    <a href="#"></a>
                </figure>
                <figure class="snip1432"><img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/363631744.jpg?k=d3c1fbc114b0e85bb9e59931d6b83cc26a3a404eed01f1e4889a3c66394a5bc2&o=&hp=1" />
                    <figcaption>
                        <div>
                            <h3>Beach Bliss and Beyond</h3>
                            <h3>Where Adventure Meets Tranquility</h3>
                        </div>
                        <div>
                            <h2>Aqaba</h2>
                        </div>
                    </figcaption>
                    <a href="#"></a>
                </figure>
            </div>
                        {/* <ul className="grid-list">
                            <li>
                                <div className="service-card">
                                    <a href="#" className="has-before hover:shine">
                                        <figure
                                            className="card-banner img-holder"
                                            style={{ "--width": "285", "--height": "336" }}
                                        >
                                            <img
                                                src="https://jordantraveler.com/wp-content/uploads/2022/05/Amman-Itinerary-Hero.png"
                                                width={285}
                                                height={336}
                                                loading="lazy"
                                                alt="Breakfast"
                                                className="img-cover"
                                            />
                                        </figure>
                                    </a>
                                    <div className="card-content">
                                        <h3 className="title-4 card-title">
                                            <a href="#">Amman</a>
                                        </h3>
                                        <a href="#" className="btn-text hover-underline label-2">
                                            Book now
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="service-card">
                                    <a href="#" className="has-before hover:shine">
                                        <figure
                                            className="card-banner img-holder"
                                            style={{ "--width": "285", "--height": "336" }}
                                        >
                                            <img
                                                src="https://media.meer.com/attachments/5594c4d91edbe7f4e0cf444ebca76b5447aba597/store/fill/860/645/ab222a80768bae72a4c3025f24abff06bab861b36cb7dc55fa1343678810/Camping-site-at-Wadi-Rum-Jordan.jpg"
                                                width={285}
                                                height={336}
                                                loading="lazy"
                                                alt="Appetizers"
                                                className="img-cover"
                                            />
                                        </figure>
                                    </a>
                                    <div className="card-content">
                                        <h3 className="title-4 card-title">
                                            <a href="#">Wadi Rum</a>
                                        </h3>
                                        <a href="#" className="btn-text hover-underline label-2">
                                            Book now
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="service-card">
                                    <a href="#" className="has-before hover:shine">
                                        <figure
                                            className="card-banner img-holder"
                                            style={{ "--width": "285", "--height": "336" }}
                                        >
                                            <img
                                                src="https://digital.ihg.com/is/image/ihg/intercontinental-aqaba-4008417344-16x9?"
                                                width={285}
                                                height={336}
                                                loading="lazy"
                                                alt="Drinks"
                                                className="img-cover"
                                            />
                                        </figure>
                                    </a>
                                    <div className="card-content">
                                        <h3 className="title-4 card-title">
                                            <a href="#">Aqaba</a>
                                        </h3>
                                        <a href="#" className="btn-text hover-underline label-2">
                                            Book now
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul> */}
                        {/* <img
              src={shape1}
              width={246}
              height={412}
              loading="lazy"
              alt="shape"
              className="shape shape-1 move-anim"
            />
            <img
              src={shape2}
              width={343}
              height={345}
              loading="lazy"
              alt="shape"
              className="shape shape-2 move-anim"
            /> */}
                    </div>
                </section>

                {/* --------------------------------- cards resturants------------------------------------- */}

                <div className="header">
                    <h2 className="headline-1 section-title">
                        {/* <p className="steak"></p> */}
                        Our Activities
                        {/* <p className="steak"></p> */}
                    </h2>
                    <p className="section-subtitle"></p>
                </div>
                <div className="container">
                    <div className="item">
                        <div className="item-image">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/laith-5d196.appspot.com/o/pictuers%2FAqabaDivingAdventure.jpg?alt=media&token=a2a7b5d8-43dc-4c5c-901e-65b89fd28c58&_gl=1*17qmwmj*_ga*MzIzNDg5NTc3LjE2ODYxNTk2MzI.*_ga_CW55HF8NVT*MTY5NjQwOTYxOS43LjEuMTY5NjQxMzQ3OS42MC4wLjA."
                                alt="Délicieux Bénédicte"
                            />
                        </div>
                        <div className="item-text">
                            <p className="item-meal-type">⭐⭐⭐</p>
                            <h2 className="item-title">Aqaba Diving</h2>
                            <p className="item-body">
                                Dive into the crystal-clear waters of the Red Sea in Aqaba.
                            </p>
                            <a href="#" className="btn-text hover-underline label-2">
                                Book now
                            </a>
                        </div>
                        <div className="item-price">80JD</div>
                    </div>
                    <div className="item">
                        <div className="item-image">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/laith-5d196.appspot.com/o/pictuers%2FTheDuke%E2%80%99sDiwan.jpg?alt=media&token=254867bd-15ee-4a89-8a04-bfdcd8aeaab5&_gl=1*2bw7ot*_ga*MzIzNDg5NTc3LjE2ODYxNTk2MzI.*_ga_CW55HF8NVT*MTY5NjQwOTYxOS43LjEuMTY5NjQxMzU1My42MC4wLjA."
                                alt="Du bœuf Burger"
                            />
                        </div>
                        <div className="item-text">
                            <p className="item-meal-type">⭐⭐⭐⭐</p>
                            <h2 className="item-title">The Duke’s Diwan</h2>
                            <p className="item-body">
                                Built in 1924, step inside one of Amman’s oldest homes where you can browse through the collection of art pieces, and literally walk through the city’s history.
                            </p>
                            <a href="#" className="btn-text hover-underline label-2">
                                Book now
                            </a>
                        </div>
                        <div className="item-price">5JD</div>
                    </div>
                    <div className="item">
                        <div className="item-image">
                            <img src="https://firebasestorage.googleapis.com/v0/b/laith-5d196.appspot.com/o/pictuers%2FBalloonRideoverWadiRum.png?alt=media&token=d56e371a-e102-492f-9780-6aae0222e66b&_gl=1*1m1g83j*_ga*MzIzNDg5NTc3LjE2ODYxNTk2MzI.*_ga_CW55HF8NVT*MTY5NjQwOTYxOS43LjEuMTY5NjQxMzU4NC4yOS4wLjA." alt="Soupe à l’oignon" />
                        </div>
                        <div className="item-text">
                            <p className="item-meal-type">⭐⭐⭐⭐</p>
                            <h2 className="item-title">Balloon Ride over Wadi Rum</h2>
                            <p className="item-body">
                                Soar high above Wadi Rum in a hot air balloon for a unique perspective.
                            </p>
                            <a href="#" className="btn-text hover-underline label-2">
                                Book now
                            </a>
                        </div>
                        <div className="item-price">120JD</div>
                    </div>
                    <div className="item">
                        <div className="item-image">
                            <img src="https://firebasestorage.googleapis.com/v0/b/laith-5d196.appspot.com/o/pictuers%2FGreco-Roman-ruins-of-Jerash-Jordan.jpg?alt=media&token=9a95a5e9-fa93-410f-9450-f667dff3b53c&_gl=1*9af0z8*_ga*MzIzNDg5NTc3LjE2ODYxNTk2MzI.*_ga_CW55HF8NVT*MTY5NjQwOTYxOS43LjEuMTY5NjQxMzYzMy42MC4wLjA." alt="Soupe à l’oignon" />
                        </div>
                        <div className="item-text">
                            <p className="item-meal-type">⭐⭐⭐⭐</p>
                            <h2 className="item-title">Roman city trip in Jerash</h2>
                            <p className="item-body">
                                Roman city where Roman athletes exercised and entertained thousands of spectators in gladiator games and chariot races.
                            </p>
                            <a href="#" className="btn-text hover-underline label-2">
                                Book now
                            </a>
                        </div>
                        <div className="item-price">20JD</div>
                    </div>
                    <div className="item">
                        <div className="item-image">
                            <img src="https://firebasestorage.googleapis.com/v0/b/laith-5d196.appspot.com/o/pictuers%2FMagic-Land-Amman.jpg?alt=media&token=a86be685-66ac-490a-8b53-2d07c02d6e9f&_gl=1*ymgk0m*_ga*MzIzNDg5NTc3LjE2ODYxNTk2MzI.*_ga_CW55HF8NVT*MTY5NjQwOTYxOS43LjEuMTY5NjQxMzY1OS4zNC4wLjA." alt="Soupe à l’oignon" />
                        </div>
                        <div className="item-text">
                            <p className="item-meal-type">⭐⭐⭐⭐</p>
                            <h2 className="item-title">Enjoy the fun at Magic Land</h2>
                            <p className="item-body">
                                Magic Land has a host of different games and activities for people of all ages, from bumper cars to exciting roller coasters, mechanical swingsets, the swinging pirate ship, and children’s roller coasters.
                            </p>
                            <a href="#" className="btn-text hover-underline label-2">
                                Book now
                            </a>
                        </div>
                        <div className="item-price">30JD</div>
                    </div>{" "}
                    <div className="item">
                        <div className="item-image">
                            <img src="https://firebasestorage.googleapis.com/v0/b/laith-5d196.appspot.com/o/pictuers%2FAmmanWavesWaterPark.jpg?alt=media&token=bfdb9d4b-89a1-4e02-807a-c42efafabcd5&_gl=1*2of0v2*_ga*MzIzNDg5NTc3LjE2ODYxNTk2MzI.*_ga_CW55HF8NVT*MTY5NjQwOTYxOS43LjEuMTY5NjQxMzcyMS4zOS4wLjA." alt="Soupe à l’oignon" />
                        </div>
                        <div className="item-text">
                            <p className="item-meal-type">⭐⭐</p>
                            <h2 className="item-title">Amman Waves Water Park</h2>
                            <p className="item-body">
                                Slide down and splash around through the different water attractions, from slides to pools, and lazy rivers.
                            </p>
                            <a href="#" className="btn-text hover-underline label-2">
                                Book now
                            </a>
                        </div>
                        <div className="item-price">20JD</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}
