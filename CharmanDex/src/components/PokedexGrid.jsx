import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import SkeletonCard from './Skeletons/SkeletonCard';
import { useGetPokemonDocumentsQuery } from '../redux/pokemonFirestore';
import PropTypes from 'prop-types';

const PokedexGrid = ({ pokemons, isLoading, searchTerm, selectedType }) => {
    const [loadedImages, setLoadedImages] = useState({});

    useGetPokemonDocumentsQuery();
    const caught = useSelector((state) => state.caught);

    const handleImageLoad = (id) => {
        setLoadedImages((prev) => ({ ...prev, [id]: true }));
    };

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
                            <PokemonCard
                                key={pokemon.id}
                                pokemon={pokemon}
                                isCaught={isCaught}
                                handleImageLoad={handleImageLoad}
                                loadedImages={loadedImages}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

PokedexGrid.propTypes = {
    pokemons: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    searchTerm: PropTypes.string.isRequired,
    selectedType: PropTypes.string.isRequired,
};

export default PokedexGrid;
