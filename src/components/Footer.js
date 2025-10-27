import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <a href="#mentions">Mentions légales</a>
          <a href="#cgu">Conditions générales</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Hello Remède. Tous les droits réservés. Formulé avec ❤️ en France.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
