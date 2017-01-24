import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
//Webpack can import css...   :o   awesome!
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);

