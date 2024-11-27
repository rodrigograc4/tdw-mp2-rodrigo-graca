import React, { useState, useEffect } from 'react';
import { useGetPokemonDetailsQuery } from '../pokemonApi'; // Assumindo que o hook já foi exportado corretamente

function Catch() {
    const [pokemonId, setPokemonId] = useState(Math.floor(Math.random() * 149) + 1); // Pokémon aleatório entre 1 e 149
    const { data: pokemon, isLoading } = useGetPokemonDetailsQuery(pokemonId);
    const [captured, setCaptured] = useState(false);
    const [isShaking, setIsShaking] = useState(false);
    const [attemptingCapture, setAttemptingCapture] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [pokeballPosition, setPokeballPosition] = useState({ bottom: '2rem', left: '50%', transform: 'translate(-50%, 0)' });


    const handlePokeballClick = async () => {
        if (attemptingCapture) return; // Evita múltiplos cliques
        setAttemptingCapture(true);

        // Move Pokébola até o Pokémon
        setPokeballPosition({ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' });

        await new Promise((resolve) => setTimeout(resolve, 500)); // Tempo de deslocamento

        // Começa a balançar
        setIsShaking(true);

        for (let i = 0; i < 3; i++) {
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Pausa de 1 segundo entre balanços
            if (Math.random() < 0.1) {
                // 10% de chance de falha
                setIsShaking(false);
                setAttemptingCapture(false);
                setPokeballPosition({ bottom: '2rem', left: '50%' }); // Retorna à posição inicial
                return; // O Pokémon escapa
            }
        }

        // Se chegou aqui, captura foi bem-sucedida
        setIsShaking(false);
        setCaptured(true);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera 1 segundo antes de redirecionar
        setRedirect(true);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (redirect) {
        window.location.href = `/pokedex/${pokemon.id}`;
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div
                className="relative w-2/3 h-[80vh] bg-green-600 rounded-lg border-2 border-black flex flex-col mt-[6rem] bg-cover bg-center"
                style={{ backgroundImage: 'url(catch_background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {/* Pokébola centralizada */}
                <div
                    className={`absolute cursor-pointer ${isShaking ? 'animate-shake' : ''
                        } `}
                    style={{
                        position: 'absolute',
                        ...pokeballPosition,
                        transition: 'all 0.5s ease',
                    }}
                    onClick={handlePokeballClick}
                >
                    <img
                        className={`h-16 w-16 ${captured ? 'shadow-[0px_0px_20px_10px_rgba(255,200,30,0.7)] rounded-full' : ''
                            }`}
                        src="../pokeball.png"
                        alt="Pokébola"
                    />
                </div>

                {/* Pokémon na tela */}
                {!captured && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img
                            src={pokemon.sprites.frontGif}
                            alt={pokemon.name}
                            className={`h-40 w-40 transition-opacity duration-500 ${isShaking ? 'opacity-0' : 'opacity-100'}`}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Catch;
