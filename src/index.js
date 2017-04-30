// Import react
import React from 'react';
import { render } from 'react-dom';

// Import router
import { BrowserRouter as Router } from 'react-router-dom';

// Import redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// Import css
import './main.scss';

// Import components
import App from './components/app/App';

// Create redux store
const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
