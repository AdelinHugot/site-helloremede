import React from 'react';

function HowToUse() {
  const steps = [
    {
      number: '1',
      title: 'Prélève une noisette',
      description: 'Fais fondre une petite quantité de baume dans le creux de la main.'
    },
    {
      number: '2',
      title: 'Masse doucement',
      description: 'Applique sur la zone souhaitée en effectuant des mouvements lents et enveloppants.'
    },
    {
      number: '3',
      title: 'Profite',
      description: 'Laisse le baume faire son effet et remercie-toi pour ce moment que tu t\'accordes.'
    }
  ];

  return (
    <section className="how-to-use" id="utilisation">
      <div className="container">
        <h2 className="section-title">Comment l'utiliser ?</h2>
        <p className="section-subtitle">En 3 étapes simples</p>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <p style={{textAlign: 'center', marginTop: '3rem', color: '#666'}}>À renouveler plusieurs fois par jour si besoin</p>
      </div>
    </section>
  );
}

export default HowToUse;
