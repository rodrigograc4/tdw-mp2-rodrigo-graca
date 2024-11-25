// PokemonGrid.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PokedexGrid = ({ pokemons, isLoading, searchTerm }) => {
    const navigate = useNavigate();

    const SkeletonCard = () => (
        <div className="bg-white rounded-lg shadow-md border border-gray-300 flex items-center p-2">
            <div className="w-[5.25em] aspect-square mx-4 rounded bg-gray-300 animate-pulse"></div>
            <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            <div className="h-8 w-12 bg-gray-300 rounded mx-4 animate-pulse"></div>
        </div>
    );

    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex-grow overflow-auto p-4 scrollbar-hide">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                {isLoading
                    ? Array.from({ length: 18 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                    : filteredPokemons.map((pokemon) => (
                        <div
                            key={pokemon.id}
                            onClick={() => navigate(`/pokedex/${pokemon.id}`)}
                            className="bg-white rounded-lg shadow-md border border-gray-300 flex items-center cursor-pointer hover:shadow-lg transition"
                        >
                            <img
                                src={pokemon.image}
                                alt={pokemon.name}
                                className="h-20 w-20 mx-4 object-contain"
                            />
                            <div className="flex-grow">
                                <p className="text-3xl text-black">{pokemon.name}</p>
                            </div>
                            <p className="mx-4 text-gray-400 text-3xl">{`#${pokemon.id}`}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default PokedexGrid;
