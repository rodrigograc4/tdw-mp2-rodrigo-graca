import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './pokemonApi';

const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
});

export default store;
