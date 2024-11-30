import React from 'react';
import PropTypes from 'prop-types';

const Moves = ({ pokemon }) => {

    return (
        <div className='p-6 grid grid-cols-1 xl:grid-cols-2 gap-12'>
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
    );
}

Moves.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(PropTypes.string).isRequired,
        abilities: PropTypes.arrayOf(PropTypes.string).isRequired,
        stats: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                value: PropTypes.number.isRequired,
            })
        ).isRequired,
        height: PropTypes.number.isRequired,
        weight: PropTypes.number.isRequired,
        sprites: PropTypes.shape({
            default: PropTypes.string.isRequired,
            frontGif: PropTypes.string.isRequired,
            backGif: PropTypes.string.isRequired,
            shinyFront: PropTypes.string.isRequired,
            shinyBack: PropTypes.string.isRequired,
        }).isRequired,
        moves: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};


export default Moves;