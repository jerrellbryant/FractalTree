import React from 'react';
import {render} from 'react-dom';
// import './index.css';
import App from './App';
import { GlobalStyles } from './componentStyles/globalStyles'

const root = document.getElementById('root');

render(
  <React.StrictMode>
      <GlobalStyles/>
          <App />
  </React.StrictMode>,
  root
);