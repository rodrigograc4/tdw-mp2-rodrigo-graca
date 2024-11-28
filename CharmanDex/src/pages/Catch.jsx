import React, { useState } from 'react';
import { useGetPokemonDetailsQuery } from '../pokemonApi'; // Assumindo que o hook já foi exportado corretamente

function Catch() {
    const [pokemonId] = useState(Math.floor(Math.random() * 149) + 1); // Pokémon aleatório entre 1 e 149
    const { data: pokemon, isLoading } = useGetPokemonDetailsQuery(pokemonId);
    const [captured, setCaptured] = useState(false);
    const [isShaking, setIsShaking] = useState(false);
    const [attemptingCapture, setAttemptingCapture] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [pokemonVisible, setPokemonVisible] = useState(true);

    const [pokeballPosition, setPokeballPosition] = useState({
        bottom: '2rem',
        left: '50%',
        transform: 'translate(-50%, 0)',
    });

    const handlePokeballClick = async () => {
        if (attemptingCapture) return; // Evita múltiplos cliques
        setAttemptingCapture(true);

        // Inicia a animação da Pokébola até o centro
        setPokeballPosition({
            bottom: '50%',
            left: '50%',
            transform: 'translate(-50%, 50%)',
        });

        await new Promise((resolve) => setTimeout(resolve, 500)); // Espera o término da animação (0.5s)

        // Esconde o Pokémon após a Pokébola chegar ao centro
        setPokemonVisible(false);


        await new Promise((resolve) => setTimeout(resolve, 200)); // Espera o término da animação (0.5s)

        // Faz a Pokébola "cair" um pouco
        setPokeballPosition((prev) => ({
            ...prev,
            bottom: 'calc(50% - 5rem)', // Ajuste para queda
        }));

        await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera a Pokébola cair

        // Lógica de shake e chance de escape
        for (let i = 0; i < 3; i++) {
            // Inicia o shake
            setIsShaking(true);
            await new Promise((resolve) => setTimeout(resolve, 500)); // Duração do shake

            // Termina o shake
            setIsShaking(false);
            await new Promise((resolve) => setTimeout(resolve, 500)); // Pausa antes do próximo shake

            // Verifica se o Pokémon escapa (20% de chance)
            if (Math.random() < 0.2) {
                setPokemonVisible(true); // Reaparece o Pokémon
                setPokeballPosition({ bottom: '2rem', left: '50%', transform: 'translate(-50%, 0)' }); // Retorna a Pokébola à posição inicial
                setAttemptingCapture(false);
                return; // Pokémon escapa
            }
        }

        // Se chegou aqui, captura foi bem-sucedida
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
                {/* Pokébola animada */}
                <div
                    className={`z-10 absolute cursor-pointer ${isShaking ? 'animate-shake' : ''}`}
                    style={{
                        ...pokeballPosition,
                        position: 'absolute',
                        transition: 'all 0.5s ease', // Suaviza a animação de movimento
                    }}
                    onClick={handlePokeballClick}
                >
                    <img
                        className={`h-16 w-16 ${captured ? 'shadow-[0px_0px_20px_10px_rgba(255,200,30,0.7)] rounded-full' : ''}`}
                        src="../pokeball.png"
                        alt="Pokébola"
                    />
                </div>

                {/* Pokémon na tela */}
                {!captured && pokemonVisible && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500">
                        <img
                            src={pokemon.sprites.frontGif}
                            alt={pokemon.name}
                            className={`h-40`}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Catch;
