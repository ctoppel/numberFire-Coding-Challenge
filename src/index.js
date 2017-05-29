// Import react
import React from 'react';
import { render } from 'react-dom';

// Import router
import { BrowserRouter as Router } from 'react-router-dom';

// Import css
import './main.scss';

// Import components
import App from './components/app/App.jsx';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
