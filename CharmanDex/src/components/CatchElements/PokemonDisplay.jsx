import React from 'react';
import PropTypes from 'prop-types';

function PokemonDisplay({ visible, sprite, name }) {
    if (!visible) return null;

    return (
        <div className="absolute top-1/3 left-3/4 transform -translate-y-1/2 transition-opacity duration-500">
            <img src={sprite} alt={name} className="h-48 w-48 m-auto object-contain" />
        </div>
    );
}

PokemonDisplay.propTypes = {
    visible: PropTypes.bool.isRequired,
    sprite: PropTypes.string,
    name: PropTypes.string,
};

export default PokemonDisplay;
