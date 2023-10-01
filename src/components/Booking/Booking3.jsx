import './booking3.scss'

import service1 from "../../assets/service-1.jpg"
import service2 from "../../assets/service-2.jpg"
import service3 from "../../assets/service-3.jpg"

export default function Booking() {

    return (

        <>

            <div className='ccss'>

                <section class="package" id="package">
                    <h2 className="headline-1 section-title">Booking List</h2>
                    <div class="container">
                        <ul class="package-list">
                            <li>
                                <div class="package-card">

                                    <figure class="card-banner">
                                        <img src={service1} alt="Experience The Great Holiday On Beach" loading="lazy" />
                                    </figure>

                                    <div class="card-content">

                                        <h3 class="h3 card-title">Restaurant 1</h3>

                                        <p class="card-text">
                                            Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                                            cras, aspernatur.
                                        </p>

                                        <ul class="card-meta-list">

                                            <li class="card-meta-item">
                                                <div class="meta-box">
                                                    <ion-icon name="time"></ion-icon>

                                                    <p class="text">7D/6N</p>
                                                </div>
                                            </li>

                                            <li class="card-meta-item">
                                                <div class="meta-box">
                                                    <ion-icon name="people"></ion-icon>

                                                    <p class="text">pax: 10</p>
                                                </div>
                                            </li>

                                            <li class="card-meta-item">
                                                <div class="meta-box">
                                                    <ion-icon name="location"></ion-icon>

                                                    <p class="text">Malaysia</p>
                                                </div>
                                            </li>

                                        </ul>

                                    </div>

                                    <div class="card-price">

                                        <div class="wrapper">
                                            <time className="publish-date label-2" dateTime="2022-09-15">
                                                ⭐⭐⭐⭐
                                            </time>
                                            {/* <p class="reviews">(25 reviews)</p> */}
                                        </div>

                                        <p class="price">
                                            $750
                                            <span>/ per person</span>
                                        </p>

                                        <button class="btn btn-secondary">Cancel</button>

                                    </div>

                                </div>
                            </li>

                            <li>
                                <div class="package-card">

                                    <figure class="card-banner">
                                        <img src={service2} alt="Summer Holiday To The Oxolotan River" loading="lazy" />
                                    </figure>

                                    <div class="card-content">

                                        <h3 class="h3 card-title">Summer Holiday To The Oxolotan River</h3>

                                        <p class="card-text">
                                            Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                                            cras, aspernatur.
                                        </p>

                                        <ul class="card-meta-list">

                                            <li class="card-meta-item">
                                                <div class="meta-box">
                                                    <ion-icon name="time"></ion-icon>

                                                    <p class="text">7D/6N</p>
                                                </div>
                                            </li>

                                            <li class="card-meta-item">
                                                <div class="meta-box">
                                                    <ion-icon name="people"></ion-icon>

                                                    <p class="text">pax: 10</p>
                                                </div>
                                            </li>

                                            <li class="card-meta-item">
                                                <div class="meta-box">
                                                    <ion-icon name="location"></ion-icon>

                                                    <p class="text">Malaysia</p>
                                                </div>
                                            </li>

                                        </ul>

                                    </div>

                                    <div class="card-price">

                                        <div class="wrapper">

                                            <p class="reviews">(20 reviews)</p>

                                            <div class="card-rating">
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                            </div>

                                        </div>

                                        <p class="price">
                                            $520
                                            <span>/ per person</span>
                                        </p>

                                        <button class="btn btn-secondary">Book Now</button>

                                    </div>

                                </div>
                            </li>

                            <li>
                                <div class="package-card">

                                    <figure class="card-banner">
                                        <img src={service3} alt="Santorini Island's Weekend Vacation" loading="lazy" />
                                    </figure>

                                    <div class="card-content">

                                        <h3 class="h3 card-title">Santorini Island's Weekend Vacation</h3>

                                        <p class="card-text">
                                            Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                                            cras, aspernatur.
                                        </p>

                                        <ul class="card-meta-list">

                                            <li class="card-meta-item">
                                                <div class="meta-box">
                                                    <ion-icon name="time"></ion-icon>

                                                    <p class="text">7D/6N</p>
                                                </div>
                                            </li>

                                            <li class="card-meta-item">
                                                <div class="meta-box">
                                                    <ion-icon name="people"></ion-icon>

                                                    <p class="text">pax: 10</p>
                                                </div>
                                            </li>

                                            <li class="card-meta-item">
                                                <div class="meta-box">
                                                    <ion-icon name="location"></ion-icon>

                                                    <p class="text">Malaysia</p>
                                                </div>
                                            </li>

                                        </ul>

                                    </div>

                                    <div class="card-price">

                                        <div class="wrapper">

                                            <p class="reviews">(40 reviews)</p>

                                            <div class="card-rating">
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                            </div>

                                        </div>

                                        <p class="price">
                                            $660
                                            <span>/ per person</span>
                                        </p>

                                        <button class="btn btn-secondary">Book Now</button>

                                    </div>

                                </div>
                            </li>

                        </ul>
                    </div>
                </section>
            </div>

        </>
    )
}