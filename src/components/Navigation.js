import React, { useState } from 'react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="container">
        <a href="#home" className="logo">Hello Remède</a>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
          <li><a href="#produit" onClick={closeMenu}>Produit</a></li>
          <li><a href="#ingredients" onClick={closeMenu}>Ingrédients</a></li>
          <li><a href="#utilisation" onClick={closeMenu}>Comment l'utiliser</a></li>
          <li><a href="#avis" onClick={closeMenu}>Avis</a></li>
          <li><a href="#contact" className="cta-button" style={{display: 'block', textAlign: 'center'}} onClick={closeMenu}>Commander</a></li>
        </ul>
        <div className={`menu-burger ${isMenuOpen ? 'active' : ''}`} id="menuBurger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="#contact" className="cta-button">Commander</a>
      </div>
    </nav>
  );
}

export default Navigation;
