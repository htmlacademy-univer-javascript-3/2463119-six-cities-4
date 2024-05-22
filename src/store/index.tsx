import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import {createAPI} from '../services/api.ts';
import {redirect} from './middlewares/redirect.ts';

const api = createAPI();

export const store = configureStore({

  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }).concat(redirect)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;