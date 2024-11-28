import React from 'react';
import { useSelector } from 'react-redux';
import { useGetPokemonDocumentsQuery } from '../../redux/pokemonFirestore';

const ImageAndName = ({ pokemon }) => {

    const getDocs = useGetPokemonDocumentsQuery();
    const caught = useSelector((state) => state.caught);
    const isCaught = pokemon && caught.includes(pokemon.name?.toLowerCase());

    return (
        <div className='p-6 pb-0 grid grid-cols-1 xl:grid-cols-2 gap-12'>
            <div className="flex justify-center items-center bg-gray-100 rounded-lg">
                <img
                    src={pokemon.sprites.default}
                    alt={`${pokemon.name} official artwork`}
                    className="w-80 h-80 object-contain"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h1 className="text-6xl text-gray-800 text-center flex items-center justify-center">
                    {pokemon.name}
                    {isCaught && (
                        <img
                            src="/pokeball.png"
                            alt="Pokébola"
                            className="w-10 h-10 ml-4 mt-1"
                        />
                    )}
                </h1>
                <p className="text-4xl text-gray-400 text-center mb-4">#{pokemon.id}</p>
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold mb-4 text-left">Types</h2>
                    <div className="flex flex-wrap gap-2 capitalize mb-4">
                        {pokemon.types.map((type) => (
                            <span
                                key={type}
                                className="bg-purple-100 text-purple-600 px-8 py-2 rounded-full text-3xl"
                            >
                                {type}
                            </span>
                        ))}
                    </div>
                </div>
                <p className="text-3xl"><strong>Height:</strong> {pokemon.height / 10} m</p>
                <p className="text-3xl"><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
            </div>
        </div>
    );

}

export default ImageAndName;