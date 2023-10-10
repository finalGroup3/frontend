import "./FavHero.scss";

const FavHero = () => {
  return (
    <> <div className="heroooooo">
      <div className="hero-one"></div>
      <div className="hero-two"></div>
      <h1 className="header-title">
        <span className="header-primary">
          <div className="favhero">Favorites</div>
        </span>
        <span className="header-sub">save what you like most</span>
      </h1>
     
    </div>
    <svg
          className='waves333'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28'
          preserveAspectRatio='none'
          shapeRendering='auto'>
          <defs>
            <path
              id='gentle-wave'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            />
          </defs>
          <g className='parallax'>
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='0'
              fill='rgba(0, 18, 25,0.7)'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='3'
              fill='rgba(0, 18, 25,0.5)'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='5'
              fill='rgba(0, 18, 25,0.3)'
            />
            <use xlinkHref='#gentle-wave' x='48' y='7' fill='#001319 ' />
          </g>
        </svg>
    </>
   
  );
};

export default FavHero;
