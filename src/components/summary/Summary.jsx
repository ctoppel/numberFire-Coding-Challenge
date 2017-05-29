import React from 'react';

const Summary = () => (
  <div id="summary">
    <header>
      <div className="team gsw">
        <div className="team-city">
          GOLDEN STATE
        </div>
        <div className="team-name bold">
          WARRIORS
        </div>
      </div>
      <div className="score-plus">
        <div className="score gsw">
          96
        </div>
        <div className="time-plus">
          <div className="time">
            7:34 4th
          </div>
          <div className="venue">
            Oracle Arena
          </div>
          <div className="location">
            Oakland, CA
          </div>
        </div>
        <div className="score okc">
          81
        </div>
      </div>
      <div className="team okc">
        <div className="team-city">
          OKLAHOMA CITY
        </div>
        <div className="team-name bold">
          THUNDER
        </div>
      </div>
    </header>
    <div id="alert-bar">
      LAST PLAY: TV TIMEOUT. GO GET A SNACK.
    </div>
    <main>
      <header>
        SHOW: <span>RECENT SHOTS</span><span> &or;</span>
      </header>
      <section>
        <div className="stats gsw">
          <div className="fg">
            <div>
              FG%
            </div>
            <div>
              57.7%
            </div>
          </div>
          <div className="ft">
            <div>
              FT%
            </div>
            <div>
              60.0%
            </div>
          </div>
          <div className="tp">
            <div>
              3P%
            </div>
            <div>
              55.5%
            </div>
          </div>
        </div>
        <div id="shot-chart" />
        <div className="stats okc">
          <div className="fg">
            <div>
              FG%
            </div>
            <div>
              47.1%
            </div>
          </div>
          <div className="ft">
            <div>
              FT%
            </div>
            <div>
              80.0%
            </div>
          </div>
          <div className="tp">
            <div>
              3P%
            </div>
            <div>
              36.4%
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
);

export default Summary;
