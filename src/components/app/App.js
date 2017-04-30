import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Articles from '../articles/Articles';
import Topics from '../topics/Topics';

const App = () => (
  <Router>
    <div id="app">
      <Navbar />
      <Route exact path="/" component={Articles} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default App;
