import { createApi } from '@reduxjs/toolkit/query/react';
import { db } from './firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export const pokemonFirestore = createApi({
    reducerPath: 'pokemonFirestore',
    baseQuery: async () => { },
    endpoints: (builder) => ({
        getPokemonDocuments: builder.query({
            async queryFn() {
                try {
                    const querySnapshot = await getDocs(collection(db, 'caught'));
                    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                    return { data };
                } catch (error) {
                    return { error: error.message };
                }
            },
        }),
        addPokemonDocument: builder.mutation({
            async queryFn(newPokemon) {
                try {
                    const docRef = await addDoc(collection(db, 'caught'), newPokemon);
                    return { data: { id: docRef.id, ...newPokemon } };
                } catch (error) {
                    return { error: error.message };
                }
            },
        }),
    }),
});

export const { useGetPokemonDocumentsQuery, useAddPokemonDocumentMutation } = pokemonFirestore;
