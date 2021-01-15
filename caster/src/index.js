import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <App />
    </Router>,
  document.getElementById('root')
);


reportWebVitals();
