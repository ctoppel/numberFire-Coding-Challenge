import React from 'react';

const Footer = () => (
  <div id="footer">
    <div className="bottom">
      <div className="bar card-2">
        <header>
          <div className="sport-option selected-sport">
            NBA
          </div>
          <div className="sport-option">MLB</div>
          <div className="sport-option">NCAAF</div>
        </header>
        <div id="footer-games">
          <div className="arrow-left">&lt;</div>
          <div className="game-option selected-game">
            <div className="team-scores-container">
              <div className="teams">
                <div>WARRIORS</div>
                <div>THUNDER</div>
              </div>
              <div className="scores">
                <div>96</div>
                <div>81</div>
              </div>
              <div className="team-stats-container">
                <div className="team">
                  GSW
                </div>
                <div className="top-player">
                  <div className="name">
                    S. Curry, PG
                  </div>
                  <div className="stats">
                    23 points, 6 assists
                  </div>
                </div>
                <div className="team">
                  OKC
                </div>
                <div className="top-player">
                  <div className="name">
                    K. Durant, SF
                  </div>
                  <div className="stats">
                    30 points, 9 rebounds
                  </div>
                </div>
              </div>
            </div>
            <div className="info">
              <span>7:34 4th</span><span> TV: ESPN</span>
            </div>
          </div>
          <div className="game-option">
            <div className="team-scores-container">
              <div className="teams">
                <div>CHI</div>
                <div>BOS</div>
              </div>
              <div className="scores">
                <div>56</div>
                <div>54</div>
              </div>
            </div>
            <div className="info">
              <span className="time">6:33 3rd</span><span className="station"> TV: ESPN</span>
            </div>
          </div>
          <div className="game-option">
            <div className="team-scores-container">
              <div className="teams">
                <div>ATL</div>
                <div>MEM</div>
              </div>
              <div className="scores">
                <div>26</div>
                <div>24</div>
              </div>
            </div>
            <div className="info">
              <span className="time">12:00 2nd</span><span className="station"> TV: ESPN</span>
            </div>
          </div>
          <div className="arrow-right">&gt;</div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
