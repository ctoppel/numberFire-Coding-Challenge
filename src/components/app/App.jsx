import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navbar from '../navbar/Navbar.jsx';
import Homepage from '../homepage/Homepage.jsx';
import Footer from '../footer/Footer.jsx';

const App = () => (
  <Router>
    <div id="app">
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Footer />
    </div>
  </Router>
);

export default App;
