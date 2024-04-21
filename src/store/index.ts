import { configureStore } from '@reduxjs/toolkit'

import carrinhoFavoritoReducer from './reducers/carrinhoFavorito'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinhoFavorito: carrinhoFavoritoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
