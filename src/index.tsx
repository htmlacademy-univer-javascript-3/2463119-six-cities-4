import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {AvailableCities, Settings} from './const.ts';
import {mockFavorites} from './moks/favorites.ts';
import mockOffersDetailed from './moks/offers-detailed.ts';
import {mockCities} from './moks/cities.ts';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        rentOffersCount={Settings.rentOffersCount}
        offersDetailed={mockOffersDetailed}
        allFavorites={mockFavorites}
        city={mockCities[AvailableCities.Paris]}
      />
    </Provider>
  </React.StrictMode>
);
