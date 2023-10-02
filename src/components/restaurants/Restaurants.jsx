import "./restaurants.scss";

import service1 from "../../assets/service-1.jpg";
import service2 from "../../assets/service-2.jpg";
import service3 from "../../assets/service-3.jpg";
import shape1 from "../../assets/shape-1.png";
import shape2 from "../../assets/shape-2.png";
import event2 from "../../assets/event-2.jpg";
import jubran from "../../assets/jubran.jpg";
import burger from "../../assets/burger.jpg";
import rest2 from "../../assets/rest2.png";
import rest4 from "../../assets/rest4.jpg";
import mansaf2 from "../../assets/mansaf4.jpg";

export default function Restaurants() {
  return (
    <>
      {/* --------------------------------- TOP resturants------------------------------------- */}
      <div className="bbb">
        
      
      <section
        className="section service bg-black-10 text-center "
        aria-label="service"
      >
        <div className="container-top-three-resturants">
          <br />
          <h2 className="headline-1 section-title">Top Resturants</h2>
          <p className="section-subtitle2 label-2">Flavors For Royalty</p>
          <p className="section-subtitle"></p>
          <br />
          <br />

          <ul className="grid-list">
            <li>
              <div className="service-card">
                <a href="#" className="has-before hover:shine">
                  <figure
                    className="card-banner img-holder"
                    style={{ "--width": "285", "--height": "336" }}
                  >
                    <img
                      src={service1}
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
                    <a href="#">Breakfast</a>
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
                      src={service2}
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
                    <a href="#">Appetizers</a>
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
                      src={service3}
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
                    <a href="#">Drinks</a>
                  </h3>
                  <a href="#" className="btn-text hover-underline label-2">
                    Book now
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <img
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
          />
        </div>
      </section>

      {/* --------------------------------- cards resturants------------------------------------- */}

      <div className="header">
        <h2 className="headline-1 section-title">Our Resturants</h2>
        <p className="section-subtitle"></p>
      </div>
      <div className="container">
        <div className="item">
          <div className="item-image">
            <img src="https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80" alt="Délicieux Bénédicte" />
          </div>
          <div className="item-text">
            <p className="item-meal-type">⭐⭐⭐⭐</p>
            <h2 className="item-title">Cardano</h2>
            <p className="item-body">Eggs Benedict with hollandaise sauce, crispy bacon, and an assortment of garden herbs.</p>
            <a href="#" className="btn-text hover-underline label-2">
                    Book now
                  </a>
          </div>
          <div className="item-price">15JD</div>
        </div>

        <div className="item">
          <div className="item-image">
            <img src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1769&q=80" alt="Du bœuf Burger" />
          </div>
          <div className="item-text">
            <p className="item-meal-type">⭐⭐⭐⭐</p>
            <h2 className="item-title">Du Burger</h2>
            <p className="item-body">A beef burger with wholewheat patty, juicy lettuce, and a side of gluten-free fries</p>
            <a href="#" className="btn-text hover-underline label-2">
                    Book now
                  </a>
          </div>
          <div className="item-price">10JD</div>
        </div>

        <div className="item">
          <div className="item-image">
            <img src={jubran} alt="Soupe à l’oignon" />
          </div>
          <div className="item-text">
            <p className="item-meal-type">⭐⭐⭐⭐</p>
            <h2 className="item-title">jubran</h2>
            <p className="item-body">The traditional Lebanon soup made with onions and beef with a dollop of garlic and saffron mayonnaise.</p>
            <a href="#" className="btn-text hover-underline label-2">
                    Book now
                  </a>
          </div>
          <div className="item-price">20JD</div>
        </div>
        <div className="item">
          <div className="item-image">
            <img src={burger} alt="Soupe à l’oignon" />
          </div>
          <div className="item-text">
            <p className="item-meal-type">⭐⭐⭐⭐</p>
            <h2 className="item-title">Fire fly</h2>
            <p className="item-body">The traditional Jordan burger made with onions and beef with a dollop of garlic and saffron mayonnaise.</p>
            <a href="#" className="btn-text hover-underline label-2">
                    Book now
                  </a>
          </div>
          <div className="item-price">20JD</div>
        </div>
        <div className="item">
          <div className="item-image">
            <img src={mansaf2} alt="Soupe à l’oignon" />
          </div>
          <div className="item-text">
            <p className="item-meal-type">⭐⭐⭐⭐</p>
            <h2 className="item-title">Mansaf</h2>
            <p className="item-body">The traditional Jordan soup made with onions and beef with a dollop of garlic and saffron mayonnaise.</p>
            <a href="#" className="btn-text hover-underline label-2">
                    Book now
                  </a>
          </div>
          <div className="item-price">20JD</div>
        </div> <div className="item">
          <div className="item-image">
            <img src={rest2} alt="Soupe à l’oignon" />
          </div>
          <div className="item-text">
            <p className="item-meal-type">⭐⭐⭐⭐</p>
            <h2 className="item-title">Hashem</h2>
            <p className="item-body">The traditional Jordan soup made with onions and beef with a dollop of garlic and saffron mayonnaise.</p>
            <a href="#" className="btn-text hover-underline label-2">
                    Book now
                  </a>
          </div>
          <div className="item-price">20JD</div>
        </div>
      </div>
    </div>
    </>
  );
}
