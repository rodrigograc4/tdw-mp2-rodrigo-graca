import React from 'react';

function PokemonDisplay({ visible, sprite, name }) {
    if (!visible) return null;

    return (
        <div className="absolute top-1/3 left-3/4 transform -translate-y-1/2 transition-opacity duration-500">
            <img src={sprite} alt={name} className="h-48 w-48 m-auto object-contain" />
        </div>
    );
}

export default PokemonDisplay;
