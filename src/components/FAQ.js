import React from 'react';

function FAQ() {
  const faqs = [
    {
      question: 'Le baume est-il efficace pour les douleurs musculaires ?',
      answer: 'Oui ! Notre baume a été formulé avec des huiles essentielles reconnues pour leurs vertus apaisantes et relaxantes (arnica, menthe poivrée, pin maritime, hélichryse italienne). Ces actifs sont traditionnellement utilisés pour soutenir la récupération et favoriser la sensation de détente après un effort.'
    },
    {
      question: 'Comment intégrer le baume dans ma routine ?',
      answer: 'Très facilement ! Intégrez-le à vos moments de bien-être. Utilisez-le avant une séance de yoga, de méditation, ou simplement pour vous offrir une parenthèse de calme. Appliquez-le sur vos poignets, votre nuque ou votre thorax tout en respirant profondément.'
    },
    {
      question: 'Comment conserver le baume ?',
      answer: 'Conserve ton baume à l\'abri de la chaleur et de la lumière directe pour préserver toutes les propriétés des plantes. Sa texture peut légèrement évoluer avec les saisons, c\'est normal et c\'est le signe d\'une formule 100% naturelle. Tu peux le conserver au frigo pour un effet fraîcheur.'
    },
    {
      question: 'Le baume convient-il à tous ?',
      answer: 'Notre baume est formulé pour accompagner au quotidien et convient à la plupart des personnes. Cependant, si vous avez une peau sensible ou des allergies, nous vous recommandons de tester d\'abord une petite quantité.'
    }
  ];

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">Questions fréquentes</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h4>{faq.question} ➤</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
