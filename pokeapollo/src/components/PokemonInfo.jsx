import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonDetailsQuery } from '../pokemonApi';

const PokemonInfo = () => {
    const { id } = useParams();
    const { data: pokemon, isLoading, error } = useGetPokemonDetailsQuery(id);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching Pokémon details.</div>;
    }

    if (!pokemon) {
        return <div>No Pokémon found</div>;
    }

    const maxStat = 160; // Definindo valor máximo para normalizar as barras.

    return (
        <div className="flex-grow overflow-auto p-4 scrollbar-hide">
            <div className="p-6 bg-white rounded-lg grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* Row 1 */}
                <div className="flex justify-center items-center bg-gray-100 rounded-lg">
                    <img
                        src={pokemon.sprites.default}
                        alt={`${pokemon.name} official artwork`}
                        className="w-80 h-80"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-6xl text-gray-800 text-center">{pokemon.name}</h1>
                    <p className="text-4xl text-gray-400 text-center mb-4">#{pokemon.id}</p>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-semibold mb-4 text-left">Types</h2>
                        <div className="flex flex-wrap gap-2 capitalize mb-4">
                            {pokemon.types.map((type) => (
                                <span
                                    key={type}
                                    className="bg-purple-100 text-purple-600 px-8 py-2 rounded-full text-3xl"
                                >
                                    {type}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-3xl"><strong>Height:</strong> {pokemon.height / 10} m</p>
                    <p className="text-3xl"><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col justify-center bg-gray-300 rounded-lg p-4">
                    <h2 className="text-3xl font-bold mb-4 text-center">Stats</h2>
                    {/* Alterei h-48 para h-auto */}
                    <div className="grid grid-cols-3 gap-4 md:grid-cols-6 h-auto">
                        {pokemon.stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col items-center">
                                {/* Contêiner da barra com fundo */}
                                <div className="relative w-8 h-24 bg-white rounded-lg overflow-hidden">
                                    <div
                                        className="absolute bottom-0 w-full bg-blue-500"
                                        style={{
                                            height: `${(stat.value / maxStat) * 100}%`,
                                        }}
                                    />
                                </div>
                                <p className="mt-2 text-sm font-medium text-center capitalize">
                                    {stat.name.replace('-', '\n')}
                                </p>
                                <p className="text-sm">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>



                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold mb-4 text-left">Abilities</h2>
                    <div className="flex flex-wrap gap-2 capitalize">
                        {pokemon.abilities.map((ability) => (
                            <span
                                key={ability}
                                className="bg-green-100 text-green-600 px-8 py-2 rounded-full text-3xl"
                            >
                                {ability}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Row 3 */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">Regular Sprites</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                            <img
                                src={pokemon.sprites.frontGif}
                                alt={`${pokemon.name} front gif`}
                                className="mx-auto w-40 h-40"
                            />
                            <p className="mt-2 text-sm ">Front</p>
                        </div>
                        <div className="text-center">
                            <img
                                src={pokemon.sprites.backGif}
                                alt={`${pokemon.name} back gif`}
                                className="mx-auto w-40 h-40"
                            />
                            <p className="mt-2 text-sm ">Back</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">Shiny Sprites</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                            <img
                                src={pokemon.sprites.shinyFront}
                                alt={`${pokemon.name} shiny front gif`}
                                className="mx-auto w-40 h-40"
                            />
                            <p className="mt-2 text-sm ">Shiny Front</p>
                        </div>
                        <div className="text-center">
                            <img
                                src={pokemon.sprites.shinyBack}
                                alt={`${pokemon.name} shiny back gif`}
                                className="mx-auto w-40 h-40"
                            />
                            <p className="mt-2 text-sm ">Shiny Back</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonInfo;
