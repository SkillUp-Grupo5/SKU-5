import React from 'react';

import { LayoutPage } from '../../home';

import '../../../styles/globals.css';
import '../../../styles/application/home/pages/Home.css';

export const Home = () => {
  return (
    <div className="App">
      <LayoutPage>
        <header className="App-header">
          <img src={'./alkemy_logo.svg'} className="App-logo" alt="logo" />
          <p>Bienvenido a AlkyBank</p>
        </header>
      </LayoutPage>
    </div>
  );
};
