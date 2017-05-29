import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header id="navbar">
    <div className="top">
      <div className="bar card-2">
        <div className="container">
          <Link to="/" title="numberFire logo" id="logo" className="bar-item">
            <span>number</span><span>Fire</span>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;
