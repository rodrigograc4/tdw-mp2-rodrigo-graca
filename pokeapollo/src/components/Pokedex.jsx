import React, { useEffect, useState } from "react";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);

    // Função para buscar dados dos Pokémon
    const fetchPokemonData = async () => {
        const fetchedPokemons = [];

        // Buscando Pokémon de 1 a 400
        for (let i = 1; i <= 151; i++) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await response.json();
            const formattedName = data.name.charAt(0).toUpperCase() + data.name.slice(1);

            fetchedPokemons.push({
                id: i,
                name: formattedName,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
            });
        }

        setPokemons(fetchedPokemons);
    };

    // Chamar a função de fetch quando o componente for montado
    useEffect(() => {
        fetchPokemonData();
    }, []);

    return (
        <div className="relative w-2/3 h-[66vh] bg-red-600 rounded-lg border-2 border-black p-4 overflow-auto scrollbar-hide">
            {/* Topo */}
            <img className="absolute top-2 left-10 h-12" src="luzes.svg" alt="Botão azul" />
            <div className="absolute top-16 left-0 w-full h-0.5 bg-black"></div>

            {/* Grid de Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
                {pokemons.map((pokemon) => (
                    <div
                        key={pokemon.id}
                        className="bg-white rounded-lg shadow-md border border-gray-300 flex items-center"
                    >
                        {/* Imagem do Pokémon */}
                        <img
                            src={pokemon.image}
                            alt={pokemon.name}
                            className="h-20 w-20 mx-4 object-contain"
                        />

                        {/* Nome do Pokémon */}
                        <div className="flex-grow">
                            <p className="text-2xl font-bold text-black">{pokemon.name}</p>
                        </div>

                        {/* Número do Pokémon */}
                        <p className="mx-4 text-gray-400 text-2xl font-semibold">{`#${pokemon.id}`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pokedex;
