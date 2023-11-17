import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './js/Main';
import GameSettings from './js/settings/GameSettings';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);