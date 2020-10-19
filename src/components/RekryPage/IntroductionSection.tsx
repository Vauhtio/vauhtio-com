import React from 'react';

const paragraphs = [
  'Miten lähestyä työnantajia? Kuinka olla vakuuttava työhaastattelussa? Entä mitä tapahtuu työhaastattelun jälkeen? Mitä minulta odotetaan, olenko tarpeeksi hyvä?',
  'Me täällä Vauhtiolla tunnistetaan sun ongelma!',
  'Usein juuri ensimmäisen työpaikan saaminen on haasteellista kun kokemusta tai näyttöjä ei ole juuri kertynyt. Olet ehkä jo hakenut muutamiin koodarin työtehtäviin tai tehnyt vapaa-ajan koodausprojekteja. Sinulla on paljon intoa koodata mutta et tiedä mitä kannattaa tehdä seuraavaksi, jotta pääset seuraavalle tasolle.',
  'Vauhtion oma valmennusohjelma Onboarding kuljettaa sinut omatoimisesti mutta ohjatusti tehdyn koodausprojektin kautta valokeilaan, josta Vauhtion konsulttina toimimalla voit ponnistaa IT-uralle.',
  'Vauhtion konkarit toimivat mentorinasi tarjoten kokemuksensa niin teknologiasta kuin käytännön työelämästä. Mentorin kanssa tehdään yhdessä ammattimainen työnäyte, etsitään asiakasprojekti, käydään haastattelussa, aloitetaan työt ja opitaan tekemisen kautta.',
];

const IntroductionSection = () => {
  return (
    <section className="introduction-section">
      <div className="container">
        <h2>Haluatko vauhtia hyppyysi opiskelijasta IT-ammattilaiseksi?</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default IntroductionSection;
