import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { db } from './firebaseConfig'; // Importa a configuração do Firestore
import { collection, getDocs, addDoc } from 'firebase/firestore';

// API combinando PokeAPI e Firestore
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        // Endpoint para obter Pokémons da PokeAPI
        getPokemons: builder.query({
            query: () => `pokemon?limit=151`,
            transformResponse: async (response) => {
                const resultsWithTypes = await Promise.all(
                    response.results.map(async (pokemon, index) => {
                        const detailsResponse = await fetch(pokemon.url).then((res) => res.json());
                        return {
                            id: index + 1,
                            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
                            types: detailsResponse.types.map((typeInfo) => typeInfo.type.name),
                            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
                        };
                    })
                );
                return resultsWithTypes;
            },
        }),
        // Endpoint para obter detalhes de um Pokémon
        getPokemonDetails: builder.query({
            query: (id) => `pokemon/${id}`,
            transformResponse: (response) => ({
                id: response.id,
                name: response.name.charAt(0).toUpperCase() + response.name.slice(1),
                types: response.types.map((typeInfo) => typeInfo.type.name),
                abilities: response.abilities.map((abilityInfo) => abilityInfo.ability.name),
                stats: response.stats.map((stat) => ({
                    name: stat.stat.name,
                    value: stat.base_stat,
                })),
                height: response.height,
                weight: response.weight,
                sprites: {
                    default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.id}.png`,
                    frontGif: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${response.id}.gif`,
                    backGif: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${response.id}.gif`,
                    shinyFront: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${response.id}.gif`,
                    shinyBack: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/${response.id}.gif`,
                },
                moves: response.moves.map((move) => ({
                    name: move.move.name,
                    url: move.move.url,
                })),
            }),
        }),
        // Endpoint para obter documentos da coleção "caught" no Firestore
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
        // Endpoint para adicionar um documento à coleção "caught" no Firestore
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

export const {
    useGetPokemonsQuery,
    useGetPokemonDetailsQuery,
    useGetPokemonDocumentsQuery,
    useAddPokemonDocumentMutation,
} = pokemonApi;
