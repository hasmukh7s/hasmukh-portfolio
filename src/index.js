import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './sass/style.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux-Saga/Store';




const root = ReactDOM.createRoot(document.getElementById('root'));
console.warn(store)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


