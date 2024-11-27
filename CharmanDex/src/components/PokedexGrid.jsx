import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokedexGrid = ({ pokemons, isLoading, searchTerm, selectedType, caught }) => {
    const navigate = useNavigate();
    const [loadedImages, setLoadedImages] = useState({});

    const handleImageLoad = (id) => {
        setLoadedImages((prev) => ({ ...prev, [id]: true }));
    };

    const SkeletonCard = () => (
        <div className="p-1 bg-white rounded-lg shadow-md border border-gray-300 flex items-center cursor-pointer">
            <div className="w-[5.25em] h-[5.25em] mx-4 flex items-center justify-center relative">
                <div className="absolute w-full h-full rounded bg-gray-300 animate-pulse"></div>
            </div>
            <div className="flex-grow">
                <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            </div>
            <div className="w-12 h-8 bg-gray-300 rounded mx-4 animate-pulse"></div>
        </div>
    );

    const filteredPokemons = pokemons.filter((pokemon) => {
        const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === '' || pokemon.types.includes(selectedType.toLowerCase());
        return matchesSearch && matchesType;
    });

    return (
        <div className="flex-grow overflow-auto p-4 custom-scrollbar">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                {isLoading
                    ? Array.from({ length: 21 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                    : filteredPokemons.map((pokemon) => {
                        const isCaught = caught.includes(pokemon.name.toLowerCase());

                        return (
                            <div
                                key={pokemon.id}
                                onClick={() => navigate(`/pokedex/${pokemon.id}`)}
                                className="p-1 bg-white rounded-lg shadow-md border border-gray-300 flex items-center cursor-pointer hover:shadow-lg transition"
                            >
                                <div className="w-[5.25em] h-[5.25em] mx-4 relative">
                                    {!loadedImages[pokemon.id] && (
                                        <div className="absolute w-full h-full rounded bg-gray-300 animate-pulse"></div>
                                    )}
                                    <img
                                        src={pokemon.image}
                                        alt={pokemon.name}
                                        className={`absolute w-full h-full object-contain transition-opacity duration-300 ${loadedImages[pokemon.id] ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        onLoad={() => handleImageLoad(pokemon.id)}
                                    />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-3xl text-black flex items-center">
                                        {pokemon.name}
                                        {isCaught && (
                                            <img
                                                src="/pokeball.png"
                                                alt="Pokébola"
                                                className="w-6 h-6 ml-2 mt-0.5"
                                            />
                                        )}
                                    </p>
                                </div>
                                <p className="mx-4 text-gray-400 text-3xl">{`#${pokemon.id}`}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default PokedexGrid;
