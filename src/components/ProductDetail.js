import React from 'react';

function ProductDetail() {
  const ingredients = [
    'Arnica',
    'Menthe poivrée',
    'Pin maritime',
    'Hélichryse italienne',
    'Huiles essentielles',
    'Cires naturelles'
  ];

  return (
    <section className="product-detail" id="produit">
      <div className="container">
        <div className="product-images">
          <img src="/packshot-6257.webp" alt="Baume Hello Remède" />
          <img src="/packshot-6271.webp" alt="Baume Hello Remède détail" />
          <img src="/helloremede-baume-naturelle-massage.webp" alt="Baume Hello Remède packaging" />
          <img src="/hello-remede-baume-de-soin-naturel-packaging_11.webp" alt="Baume Hello Remède présentation" />
        </div>
        <div className="product-info">
          <h2>Le Baume Bien-être</h2>
          <p>Formulé avec passion par une ostéopathe, ce baume est conçu pour accompagner ton quotidien. Que ce soit après le sport, au travail, en déplacement ou à la maison, Hello Remède est là pour soulager tes tensions avec douceur et simplicité.</p>

          <div className="ingredients" id="ingredients">
            <h4>🌿 Ingrédients naturels puissants</h4>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <p><strong>Composition 100% d'origine naturelle</strong></p>
          <p>Stimule ta circulation, fait du bien à ton corps et à tes muscles grâce aux actifs naturels puissants à l'intérieur.</p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
