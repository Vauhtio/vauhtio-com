import React from 'react';

import checkMark from '../../pages/check-circle.png';

const features = [
  {
    title: 'Hyvä asenne',
    description:
      'Meille tärkein vaatimus on kova motivaatio koodaamiseen ja kyky oma-aloitteisesti etsiä vastauksia haasteisiin.',
  },
  {
    title: 'Viimeisen vuoden AMK- tai yliopisto-opiskelija',
    description:
      'Opintojen tulee olla vähintään loppusuoralla, sillä Vauhtion onboarding on työharjoittelua vastaava vaihe, johon pitää pystyä satsaamaan aikaa.',
  },
  {
    title: 'Työkokemus ei pakollista!',
    description:
      'Työkokemusta ei ole pakko olla, joten on hyvä jos pystyt tuomaan nykyistä osaamistasi esille esim koulu tai vapaa-ajan projektien avulla.',
  },
];

const WhoFitsSection = () => {
  return (
    <section className="who-fits-section">
      <div className="container">
        <div className="who-fits-container">
          <div>
            <h2>Kuka sopii ohjelmaan?</h2>
            <p>
              Vauhtio on ensisijaisesti tarkoitettu nuorille ensimmäistä IT-alan
              työpaikka hakeville sovelluskehittäjille.
            </p>
            <p>
              Myös muulla alan koulutuksella voi päästä mukaan, oma asenne ja
              henkilökohtaiset edellytyksen ratkaisevat!
            </p>
          </div>
          <div>
            {features.map(feature => {
              return (
                <div className="feature">
                  <div className="feature__title">
                    <img src={checkMark} alt="Checkmark" />
                    {feature.title}
                  </div>
                  <div className="feature__description">
                    {feature.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoFitsSection;
