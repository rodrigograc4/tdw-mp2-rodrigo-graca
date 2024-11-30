import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon, isCaught, handleImageLoad, loadedImages }) => {
    const navigate = useNavigate();

    return (
        <div
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
                    className={`absolute w-full h-full object-contain transition-opacity duration-300 ${loadedImages[pokemon.id] ? 'opacity-100' : 'opacity-0'}`}
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
};

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    isCaught: PropTypes.bool.isRequired,
    handleImageLoad: PropTypes.func.isRequired,
    loadedImages: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default PokemonCard;
