import React, { useState, useEffect } from 'react';
import { useGetPokemonsQuery } from '../pokemonApi';
import PokedexGrid from '../components/PokedexGrid';

function Pokedex() {
    const { data: pokemons = [], isLoading } = useGetPokemonsQuery();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [caught, setCaught] = useState([]);

    useEffect(() => {
        fetch('/caught.json')
            .then((response) => response.json())
            .then((data) => {
                const caughtLowerCase = data.caught.map((pokemon) => pokemon.toLowerCase());
                setCaught(caughtLowerCase);
            })
            .catch((error) => console.error('Error loading caught.json:', error));
    }, []);


    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const uniqueTypes = [
        ...new Set(pokemons.flatMap((pokemon) => pokemon.types)),
    ].sort();

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="relative w-2/3 h-[80vh] bg-red-600 rounded-lg border-2 border-black flex flex-col mt-[6rem]">

                {/* Top Section */}
                <div className="flex items-center justify-between px-8 py-4 border-b-2 border-black">
                    <img className="h-16 mr-4" src="../luzes.svg" alt="Botão azul" />

                    {/* Filtros */}
                    <div className='w-full space-x-4 flex justify-end'>

                        {/* Search */}
                        <input
                            type="text"
                            placeholder="Search your Pokémon"
                            className="md:w-1/2 w-full py-2 px-4 rounded text-xl focus:outline-none"
                            value={searchTerm}
                            onChange={handleSearch}
                        />

                        {/* Dropdown */}
                        <select
                            className="py-3 px-4 rounded text-xl focus:outline-none hidden md:block"
                            value={selectedType}
                            onChange={handleTypeChange}
                        >
                            <option value="">All Types</option>
                            {uniqueTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Grid Scroll */}
                <PokedexGrid
                    pokemons={pokemons}
                    isLoading={isLoading}
                    searchTerm={searchTerm}
                    selectedType={selectedType}
                    caught={caught}
                />
            </div>
        </div>
    );
}

export default Pokedex;
