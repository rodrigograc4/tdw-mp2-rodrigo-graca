import React, { useState } from 'react';
import { useGetPokemonsQuery } from '../pokemonApi';
import PokedexGrid from '../components/PokedexGrid';

function Pokedex() {
    const { data: pokemons = [], isLoading } = useGetPokemonsQuery();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="relative w-2/3 h-[70vh] bg-red-600 rounded-lg border-2 border-black flex flex-col mt-20">
                {/* Top Section */}
                <div className="flex items-center justify-between px-12 py-4 border-b-2 border-black">
                    <img className="h-16" src="../luzes.svg" alt="Botão azul" />
                    <input
                        type="text"
                        placeholder="Search your Pokémon"
                        className="w-1/2 py-2 px-4 rounded text-xl focus:outline-none"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>

                {/* Grid Scroll */}
                <PokedexGrid pokemons={pokemons} isLoading={isLoading} searchTerm={searchTerm} />
            </div>
        </div>
    );
}

export default Pokedex;
