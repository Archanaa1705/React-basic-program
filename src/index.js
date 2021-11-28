import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';
 


ReactDOM.render(<Counters/> // creates a virtual DOM and real DOM tree
,
  document.getElementById('root')
);



reportWebVitals();
