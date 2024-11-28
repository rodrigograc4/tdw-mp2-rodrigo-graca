import { createSlice } from '@reduxjs/toolkit';
import { pokemonFirestore } from './pokemonFirestore';

const caughtSlice = createSlice({
    name: 'caught',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            pokemonFirestore.endpoints.getPokemonDocuments.matchFulfilled,
            (state, action) => {
                return action.payload.map((doc) => doc.id);
            }
        );
    },
});

export default caughtSlice.reducer;
