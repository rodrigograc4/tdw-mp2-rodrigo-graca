import { configureStore } from '@reduxjs/toolkit';
import { pokeApi } from './pokeApi';
import { pokemonFirestore } from './pokemonFirestore';
import caughtReducer from './caughtSlice';

const store = configureStore({
    reducer: {
        [pokeApi.reducerPath]: pokeApi.reducer,
        [pokemonFirestore.reducerPath]: pokemonFirestore.reducer,
        caught: caughtReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokeApi.middleware, pokemonFirestore.middleware),
});


export default store;
