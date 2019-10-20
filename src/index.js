import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas,
  faRulerVertical,
  faWeight,
  faCandyCane,
  faClock,
  faEgg,
  faDiceSix,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import App from './components/App';
import reducers from './reducers';

library.add(
  fas,
  faRulerVertical,
  faWeight,
  faCandyCane,
  faClock,
  faEgg,
  faDiceSix,
  faSearch
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
