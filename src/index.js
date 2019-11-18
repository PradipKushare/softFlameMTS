import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
// import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose  } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import reducer from './reducers';

const middleware = [ thunk ];
let store;
  if (process.env.NODE_ENV === 'production') {
    middleware.push(createLogger());
     store = createStore(reducer, compose(applyMiddleware(...middleware)))
  }else{
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
     store = createStore(reducer, composeEnhancers(
     applyMiddleware(...middleware)))
}

ReactDOM.render(
    <Provider store={store}>
       <App />
      </Provider>,
    document.getElementById("root")
  );