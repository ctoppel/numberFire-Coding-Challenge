import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Navbar from '../navbar/Navbar.jsx';
import Articles from '../articles/Articles.jsx';
import Topics from '../topics/Topics.jsx';

const App = () => {
  return (
    <Router>
      <div id="app">
        <Navbar />
        <Route exact path="/" component={Articles} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
};

export default App;
