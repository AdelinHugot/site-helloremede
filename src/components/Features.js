import React from 'react';

function Features() {
  const features = [
    {
      icon: '🌿',
      title: '100% Naturel',
      description: 'Formulé sans camphre synthétique, sans pétrochimie. Juste la puissance de la nature.'
    },
    {
      icon: '🇫🇷',
      title: 'Fabriqué en France',
      description: 'Conçu et produit en France par une ostéopathe passionnée par le bien-être.'
    },
    {
      icon: '✨',
      title: 'Efficace & Doux',
      description: 'Une texture et une odeur incroyablement douce qui pénètre facilement la peau.'
    },
    {
      icon: '❤️',
      title: 'Pour Tous',
      description: 'Végan, sans test sur les animaux. Respectueux de ton corps et de la planète.'
    },
    {
      icon: '🎒',
      title: 'Pratique au Quotidien',
      description: 'Parfait à glisser dans ton sac, ton tiroir ou ta routine. Sport, travail, maison.'
    },
    {
      icon: '⚡',
      title: 'Résultats Rapides',
      description: 'Soulagement des douleurs et tensions en quelques heures seulement.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Pourquoi choisir Hello Remède ?</h2>
        <p className="section-subtitle">Une alternative clean & efficace</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
