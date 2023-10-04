import React from 'react';
import savana from "./savanna.png"
import laith from "./laith.png"
import nour from "./nour.jpeg"
import alaa from "./ALA.jpg"
import amro from "./amroo.jpg"
import "./test1.scss";
import Test from './Test'


function About() {
    return (

        <>
            <div className='allcom'>

                <div className='bg'>
                    <h1 className='ti'>
                        ABOUT US
                    </h1>
                </div>

            </div>

            <div class="text-picture">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 module-text">
                            <div class="panel-title">
                                <p><strong class="underline-event"><span class="underlined underline-clip">Welcome </span> To Our Platform!</strong></p>
                            </div>
                            <p class="sub-title"></p>
                            <p class="text">We are a trusted online reservation service that connects travelers with a wide selection of hotels, restaurants, and activities.
                                Our mission is to simplify and enhance the travel experience by providing a convenient and reliable platform for making reservations. We understand that finding the perfect accommodation, dining options, and activities can be time-consuming, so we've curated a diverse range of options to cater to every traveler's needs.<br />
                                &nbsp;</p>
                        </div>
                        <div class="col-sm-6 module-pic">
                            <p>
                                <img alt="Image" class="img-responsive" src="https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_960_720.jpg" />

                                <img alt="Image" class="img-responsive" src="https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_1280.jpg" />

                                <img alt="Image" class="img-responsive1" src="https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_960_720.jpg" />
                                <img alt="Image" class="img-responsive1" src="https://cdn.pixabay.com/photo/2016/11/30/14/08/cafe-1872888_960_720.jpg" />

                            </p>                        </div>
                    </div>
                </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br>


            <div class="text-picture">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 module-pic">
                            {/* <img alt="Image" class="img-responsive" src="https://via.placeholder.com/500x400C/343a40/" /> */}
                            <p>
                                <img alt="Image" class="img-responsive2" src="https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_960_720.jpg" />

                                <img alt="Image" class="img-responsive2" src="https://cdn.pixabay.com/photo/2022/08/06/20/46/coffee-shop-7369404_960_720.jpg" />

                                <img alt="Image" class="img-responsive" src="https://cdn.pixabay.com/photo/2017/08/07/07/06/lobby-2600880_960_720.jpg" />
                                <img alt="Image" class="img-responsive" src="https://cdn.pixabay.com/photo/2019/07/30/14/12/woman-4373078_960_720.jpg" />

                            </p>
                        </div>
                        <div class="col-sm-6 module-text">
                            <div class="panel-title">
                                <p><strong class="underline-event">At our <span class="underlined underline-clip">Core,</span></strong></p>
                            </div>
                            <p class="sub-title"></p>
                            <p class="text">We believe in delivering exceptional customer service. Our team is dedicated to ensuring that you have a seamless booking experience and can focus on creating unforgettable memories during your travels.
                                Whether you're planning a family vacation, a romantic getaway, or a business trip, our platform offers a user-friendly interface that allows you to search, compare, and book with ease. We provide detailed information, including reviews and ratings, to help you make informed decisions.<br />
                                &nbsp;</p>

                        </div>

                    </div>
                </div>
            </div>

            <div className='hightt'>
                <div className="aboutss" id="abouts">
                    <br></br>
                    {/* <h1 className="titles">About Us</h1> */}
                    <p className="titles">

                    </p>


                    <div className="aboutss" id="abouts">
                        <br>
                        </br>
                        <h1 className="underline-event"><span class="underlined underline-clip">Small Teams Big Results</span></h1>
                    </div>
<br></br>
<br></br>
                </div>
                <div id="aaapp">
                    <div id="profiles">
                        <div class="profile">
                            <div class="profile-content">
                                <div class="profile-pic">
                                    <img class="profile-pic-image" src={savana} />
                                </div>
                                <h3 class="profile-name">Savana</h3>
                            </div>
                        </div>
                        <div class="profile">
                            <div class="profile-content">
                                <div class="profile-pic">
                                    <img class="profile-pic-image" src={alaa} />
                                </div>
                                <h3 class="profile-name">ALA'</h3>
                            </div>
                        </div>
                        <div class="profile">
                            <div class="profile-content">
                                <div class="profile-pic">
                                    <img class="profile-pic-image" src={laith} />
                                </div>
                                <h3 class="profile-name">Laith</h3>
                            </div>
                        </div>
                        <div class="profile">
                            <div class="profile-content">
                                <div class="profile-pic">
                                    <img class="profile-pic-image" src={nour} />
                                </div>
                                <h3 class="profile-name">Nour</h3>
                            </div>
                        </div>
                        <div class="profile">
                            <div class="profile-content">
                                <div class="profile-pic">
                                    <img class="profile-pic-image" src={amro} />
                                </div>
                                <h3 class="profile-name">Amro</h3>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>

           

            
            <div className="aboutss" id="abouts">
                <br>
                </br>
                <h1 className="underline-event"><span class="underlined underline-clip">OUR REVIEWS</span></h1>
            </div>
            <Test />
        </>
    )
}
export default About;
{/* <span class="underlined underline-clip">Sell</span> */}