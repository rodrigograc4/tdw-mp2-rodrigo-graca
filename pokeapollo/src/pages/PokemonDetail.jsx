import React from 'react';
import { useNavigate } from 'react-router-dom';
import PokemonInfo from '../components/PokemonInfo';

const PokemonDetail = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="relative w-2/3 h-[70vh] bg-red-600 rounded-lg border-2 border-black flex flex-col mt-20">
                {/* Top Section */}
                <div className="flex items-center justify-between px-12 py-4 border-b-2 border-black">
                    <img className="h-16" src="../luzes.svg" alt="Botão azul" />
                    <button
                        onClick={() => navigate('/pokedex')}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                        Go Back
                    </button>
                </div>

                <PokemonInfo />
            </div>
        </div>
    );
};

export default PokemonDetail;
