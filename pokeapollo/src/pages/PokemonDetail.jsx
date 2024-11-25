import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PokemonInfo from '../components/PokemonInfo';

const PokemonDetail = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="relative w-2/3 h-[80vh] bg-red-600 rounded-lg border-2 border-black flex flex-col mt-[6rem]">
                {/* Top Section */}
                <div className="flex items-center justify-between px-12 py-4 border-b-2 border-black">
                    <img className="h-16" src="../luzes.svg" alt="Botão azul" />
                    <button
                        onClick={() => navigate('/pokedex')}
                        className="text-white hover:text-gray-300 transition"
                        aria-label="Go Back"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                    </button>
                </div>

                <PokemonInfo />
            </div>
        </div>
    );
};

export default PokemonDetail;
