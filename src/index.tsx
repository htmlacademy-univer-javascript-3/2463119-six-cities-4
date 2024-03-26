import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {Settings} from './const.ts';
import {mockOffersShort} from './moks/offers-short.ts';
import {mockFavorites} from './moks/favorites.ts';
import mockOffersDetailed from './moks/offers-detailed.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      rentOffersCount={Settings.rentOffersCount}
      offersShort={mockOffersShort}
      offersDetailed={mockOffersDetailed}
      allFavorites={mockFavorites}
    />
  </React.StrictMode>
);
