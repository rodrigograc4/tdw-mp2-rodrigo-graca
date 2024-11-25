import React, { useEffect, useState } from "react";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

    // Função para buscar dados dos Pokémon
    const fetchPokemonData = async () => {
        const fetchedPokemons = [];

        // Buscando Pokémon de 1 a 151
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
        setIsLoading(false); // Finaliza o carregamento
    };

    // Chamar a função de fetch quando o componente for montado
    useEffect(() => {
        fetchPokemonData();
    }, []);

    // Skeleton card para o carregamento
    const SkeletonCard = () => (
        <div className="bg-white rounded-lg shadow-md border border-gray-300 flex items-center p-2">
            <div className="w-[5.25em] aspect-square mx-4 rounded bg-gray-300 animate-pulse"></div>
            <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse "></div>
            <div className="h-8 w-12 bg-gray-300 rounded mx-4 animate-pulse "></div>
        </div>
    );

    return (
        <div className="relative w-2/3 h-[66vh] bg-red-600 rounded-lg border-2 border-black p-4 overflow-auto scrollbar-hide">
            {/* Topo */}
            <img className="absolute top-2 left-10 h-12" src="luzes.svg" alt="Botão azul" />
            <div className="absolute top-16 left-0 w-full h-0.5 bg-black"></div>

            {/* Grid de Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
                {isLoading
                    ? Array.from({ length: 18 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                    : pokemons.map((pokemon) => (
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
