// Hotel.jsx
import React from 'react';
import './Hotel.scss';
// import homeBg from '../../assets/homeBg.jpg';
import { Link as ScrollLink } from 'react-scroll';

const Hotel = () => {
  return (
    <div className="hotel-container">
      <div className="parallax-bg hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p>LIVE THE EXPERIENCE</p>
            <h1>MAKE YOURSELF AT HOME</h1>
                    <div className="view-rooms-button">
                        <ScrollLink to="cards-section" smooth={true} duration={500}>
                        VIEW OUR ROOMS
                        </ScrollLink>
                    </div>
          </div>
        </div>
      </div>
      <div className="parallax-bg cards-section" id="cards-section">
      <article className="custom-card">
  <img
    className="custom-card__background"
    src="https://i.imgur.com/QYWAcXk.jpeg"
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div className="custom-card__content | custom-flow">
    <div className="custom-card__content--container | custom-flow">
      <h2 className="custom-card__title">Colombia</h2>
      <p className="custom-card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button className="custom-card__button">BOOK NOW</button>
  </div>
</article>

      </div>
      <div className="parallax-bg cards-section" id="cards-section">
      <article className="custom-card">
  <img
    className="custom-card__background"
    src="https://i.imgur.com/QYWAcXk.jpeg"
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div className="custom-card__content | custom-flow">
    <div className="custom-card__content--container | custom-flow">
      <h2 className="custom-card__title">Colombia</h2>
      <p className="custom-card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button className="custom-card__button">BOOK NOW</button>
  </div>
</article>

      </div>
      <div className="parallax-bg cards-section" id="cards-section">
      <article className="custom-card">
  <img
    className="custom-card__background"
    src="https://i.imgur.com/QYWAcXk.jpeg"
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div className="custom-card__content | custom-flow">
    <div className="custom-card__content--container | custom-flow">
      <h2 className="custom-card__title">Colombia</h2>
      <p className="custom-card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button className="custom-card__button">BOOK NOW</button>
  </div>
</article>

      </div>
    </div>
  );
};

export default Hotel;
