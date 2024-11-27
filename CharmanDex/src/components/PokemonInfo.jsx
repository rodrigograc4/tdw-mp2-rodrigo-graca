import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonDetailsQuery } from '../pokemonApi';
import SkeletonPokemonInfo from './SkeletonPokemonInfo';

const PokemonInfo = () => {
    const { id } = useParams();
    const { data: pokemon, isLoading, error } = useGetPokemonDetailsQuery(id);

    if (isLoading) {
        return <SkeletonPokemonInfo />;
    }

    if (error) {
        return <div className='px-6 py-4 text-3xl text-white'>Error fetching Pokémon details.</div>;
    }

    if (!pokemon) {
        return <div className='px-6 py-4 text-3xl text-white'>No Pokémon found</div>;
    }

    const maxStat = 160;

    return (
        <div className="flex-grow overflow-auto p-4 custom-scrollbar">
            <div className="p-6 bg-white rounded-lg grid grid-cols-1 xl:grid-cols-2 gap-12">
                {/* Row 1 */}
                <div className="flex justify-center items-center bg-gray-100 rounded-lg">
                    <img
                        src={pokemon.sprites.default}
                        alt={`${pokemon.name} official artwork`}
                        className="w-80 h-80 object-contain"
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
                    <div className="grid grid-cols-3 gap-4 md:grid-cols-6 h-auto">
                        {pokemon.stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col items-center">
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

                {/* Row 3 - Regular Sprites */}
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Regular Sprites</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                            <img
                                src={pokemon.sprites.frontGif}
                                alt={`${pokemon.name} front gif`}
                                className="mx-auto w-40 h-40 object-contain"
                            />
                            <p className="mt-2 text-sm">Front</p>
                        </div>
                        <div className="text-center">
                            <img
                                src={pokemon.sprites.backGif}
                                alt={`${pokemon.name} back gif`}
                                className="mx-auto w-40 h-40 object-contain"
                            />
                            <p className="mt-2 text-sm">Back</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Shiny Sprites</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                            <img
                                src={pokemon.sprites.shinyFront}
                                alt={`${pokemon.name} shiny front gif`}
                                className="mx-auto w-40 h-40 object-contain"
                            />
                            <p className="mt-2 text-sm">Shiny Front</p>
                        </div>
                        <div className="text-center">
                            <img
                                src={pokemon.sprites.shinyBack}
                                alt={`${pokemon.name} shiny back gif`}
                                className="mx-auto w-40 h-40 object-contain"
                            />
                            <p className="mt-2 text-sm">Shiny Back</p>
                        </div>
                    </div>
                </div>

                {/* Row 4 - Moves */}
                <div className="col-span-2">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Moves</h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {/* Verifique se pokemon.moves existe antes de mapear */}
                        {pokemon.moves && pokemon.moves.length > 0 ? (
                            pokemon.moves.map((move) => (
                                <span
                                    key={move.name}
                                    className="bg-gray-100 text-gray-600 px-6 py-2 rounded-full text-xl capitalize"
                                >
                                    {move.name}
                                </span>
                            ))
                        ) : (
                            <p className="text-xl text-center">No moves available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonInfo;
