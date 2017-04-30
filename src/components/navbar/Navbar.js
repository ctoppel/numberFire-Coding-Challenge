import React from 'react';
import { Link } from 'react-router-dom';
import path from 'path';

const Navbar = () => (
  <header role="banner" id="navbar">
    {/* Navbar (sit on top) */}
    <div className="w3-top">
      <div className="w3-bar w3-card-2">
        <logo role="img" title="MedCircle logo">
          <Link role="link" to="/" title="MedCircle logo" id="logo" className="w3-bar-item">
            <img
              alt="MedCircle logo"
              height="100%"
              src={path.join(__dirname, 'assets', 'img', 'MedCircle_logo(white_on_red).svg')}
            />
          </Link>
        </logo>
        <Link
          to="/topics"
          className="w3-bar-item w3-right"
          style={{ position: 'relative', top: '8px' }}
        >
          TOPICS
        </Link>
      </div>
    </div>
  </header>
);

export default Navbar;
