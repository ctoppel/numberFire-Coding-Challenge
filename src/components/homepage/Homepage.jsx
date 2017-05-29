import React from 'react';
import Summary from '../summary/Summary.jsx';
import Plays from '../plays/Plays.jsx';
import Stats from '../stats/Stats.jsx';
import Scoring from '../scoring/Scoring.jsx';

const Homepage = () => (
  <div id="homepage">
    <div className="container">
      <div id="left-col">
        <Summary />
        <Plays />
        <Stats />
      </div>

      <div id="right-col">
        <Scoring />
      </div>

    </div>
  </div>
);

export default Homepage;
