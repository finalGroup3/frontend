import React from 'react';

import './activities.scss';

export default function Activities() {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Custom Coding</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/path/to/your/styles.css" /> {/* Include your external CSS file */}
      </head>
      <body>
        <header>
          <a href="#"> Mountain Travel</a>
          <nav>
            <li><a href="#">Main</a></li>
            <li><a href="#">404</a></li>
            <li><a href="#">Contact</a></li>
          </nav>
        </header>

        <section className="hero">
          <div className="background-image" style={{ backgroundImage: 'url(https://wallpaper-house.com/data/out/7/wallpaper2you_139824.jpg)' }}></div>
          <div className="hero-content-area">
            <h1>Mountain Travel</h1>
            <h3>Unmissable Adventure Tours Around the World</h3>
            <a href="#" className="btn">Contact Us</a>
          </div>
        </section>

        <section className="destinations">
          <h3 className="title">Rest information will go here:</h3>
          <p>blah blash blahs blahs blahss</p>
          <hr />
        </section>

        <section className="contact">
          <h3 className="title">Join our newsletter</h3>
          <p>Information will go here (if any)</p>
          <hr />

          <form>
            <input type="email" placeholder="Email" />
            <a href="#" className="btn">Subscribe now</a>
          </form>
        </section>
      </body>
    </html>
  );
}
