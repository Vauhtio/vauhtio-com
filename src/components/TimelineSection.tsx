import React from 'react';
import TimelineCard from './TimelineCard';

const TimelineSection = () => {
  return (
    <section className="timeline-section">
      <div className="container">
        <h2>Miten homma kokonaisuutena toimii?</h2>
        <div className="timeline">
          <div className="timeline-cards">
            <TimelineCard
              header="1. Haastattelu"
              paragraphs={[
                'Haastattelussa selvitetään sinun omat tavoitteet ja edellytykset onboardingille.',
              ]}
            />
            <TimelineCard
              header="2. Onboarding"
              paragraphs={[
                'Tässä vaiheessa koodataan harjoitusprojekti, joka on räätälöity oman suuntautumisesi mukaan. Projekti tehdään omatoimisesti mutta siihen sisältyy istunnot mentorin kanssa. Projektityön lisäksi onboardingissa voi olla myös muuta asiaan liittyvää itseopiskelua.',
                'Onboardingin harjoitellaan myös käytännnön tilanteita kuten asiakashaastatteluja ja työskentelytapoja.',
                'Onboarding hyväksytään työharjoitteluna koulujen opinto-ohjelmissa!',
                'Lopputuloksena on ammattimaisesti rakennettu projekti, joka jää sinulle työnäytteeksi.',
              ]}
            />
            <TimelineCard
              header="3. Etsitään sinulle asiakasprojekti"
              paragraphs={[
                'Tässä vaiheessa työskentelet Vauhtion konsulttina asiakasprojektissa. Tämä antaa sinulle mahdollisuuden oppia työssä tekemisen kautta. Vauhtion Mentorit ovat tukenasi tässäkin vaiheessa.',
              ]}
            />
          </div>
          <div className="label-container">
            <div className="label">Aloitus!</div>
            <div className="label label--end">Maalissa!</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
