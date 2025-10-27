import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Soulage tes tensions <span>naturellement</span></h1>
          <p>Découvre le baume de bien-être formulé par une ostéopathe. 100% naturel, sans chimie, sans conservateurs. À glisser partout avec toi.</p>
          <a href="#contact" className="cta-button">Découvrir le produit</a>
        </div>
        <div className="hero-image">
          <img src="/packshot-6180.webp" alt="Hello Remède Baume" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
