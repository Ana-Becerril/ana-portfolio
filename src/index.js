import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home'
import reportWebVitals from './reportWebVitals';
import './index.css'
import NavBar from './components/NavBar';




ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();