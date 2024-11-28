import React from 'react';

const Sprites = ({ pokemon }) => {

    return (
        <div className='p-6 pb-0 grid grid-cols-1 xl:grid-cols-2 gap-12'>
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
        </div>
    );

}

export default Sprites;