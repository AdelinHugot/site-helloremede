import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      text: '"On adore l\'odeur dans la famille. Très agréable et facile à appliquer. Et surtout, les résultats sont là ! Une diminution importante des douleurs quelques heures seulement après l\'application."',
      author: 'Client satisfait'
    },
    {
      stars: 5,
      text: '"J\'utilise le baume pour une douleur chronique à la cheville, il me soulage beaucoup. L\'odeur est incroyable, la texture aussi, il pénètre facilement et ne laisse pas la peau grasse."',
      author: 'Un adepte du baume'
    },
    {
      stars: 5,
      text: '"Étant ostéopathe moi-même, j\'étais très curieuse de tester le baume. Je l\'ai testé d\'abord sur moi et j\'en suis très contente. Il m\'a beaucoup soulagée après de longues journées."',
      author: 'Un professionnel'
    }
  ];

  const renderStars = (count) => {
    return '⭐'.repeat(count);
  };

  return (
    <section className="testimonials" id="avis">
      <div className="container">
        <h2 className="section-title">Ce qu'ils en pensent</h2>
        <p className="section-subtitle">Les avis de nos clients heureux</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="stars">{renderStars(testimonial.stars)}</div>
              <p>{testimonial.text}</p>
              <p className="testimonial-author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
