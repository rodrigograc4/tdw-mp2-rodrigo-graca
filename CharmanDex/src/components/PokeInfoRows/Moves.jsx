import React from 'react';

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

export default Moves;