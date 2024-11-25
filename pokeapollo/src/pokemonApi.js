import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Configuração do serviço do RTK Query
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemons: builder.query({
            query: () => `pokemon?limit=151`,
            transformResponse: (response) =>
                response.results.map((pokemon, index) => ({
                    id: index + 1,
                    name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                })),
        }),
    }),
});

// Exporta o hook gerado automaticamente
export const { useGetPokemonsQuery } = pokemonApi;
