import React, { useState } from 'react';
import { useGetPokemonsQuery } from '../pokemonApi';

const Pokedex = () => {
    const { data: pokemons = [], isLoading } = useGetPokemonsQuery(); // RTK Query hook
    const [searchTerm, setSearchTerm] = useState('');

    // Função para lidar com o input de busca
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtrar Pokémon com base no termo de busca
    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Skeleton card para o carregamento
    const SkeletonCard = () => (
        <div className="bg-white rounded-lg shadow-md border border-gray-300 flex items-center p-2">
            <div className="w-[5.25em] aspect-square mx-4 rounded bg-gray-300 animate-pulse"></div>
            <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            <div className="h-8 w-12 bg-gray-300 rounded mx-4 animate-pulse"></div>
        </div>
    );

    return (
        <div className="relative w-2/3 h-[70vh] bg-red-600 rounded-lg border-2 border-black flex flex-col mt-20">
            {/* Topo */}
            <div className="flex items-center justify-between px-12 py-4 border-b-2 border-black">
                <img className="h-16" src="luzes.svg" alt="Botão azul" />
                <input
                    type="text"
                    placeholder="Search your Pokémon"
                    className="w-1/2 py-2 px-4 rounded text-xl"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            {/* Grid Scroll */}
            <div className="flex-grow overflow-auto p-4 scrollbar-hide">
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                    {isLoading
                        ? Array.from({ length: 18 }).map((_, index) => (
                            <SkeletonCard key={index} />
                        ))
                        : filteredPokemons.map((pokemon) => (
                            <div
                                key={pokemon.id}
                                className="bg-white rounded-lg shadow-md border border-gray-300 flex items-center"
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
        </div>
    );
};

export default Pokedex;
