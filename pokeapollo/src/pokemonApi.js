import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
                })),
        }),
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
            }),
        }),
    }),
});

export const { useGetPokemonsQuery, useGetPokemonDetailsQuery } = pokemonApi;
