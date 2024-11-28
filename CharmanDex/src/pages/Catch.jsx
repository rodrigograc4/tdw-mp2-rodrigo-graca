import React, { useState } from 'react';
import { useGetPokemonDetailsQuery } from '../redux/pokeApi';
import { useAddPokemonDocumentMutation } from '../redux/pokemonFirestore';

function Catch() {
    const [pokemonId] = useState(Math.floor(Math.random() * 149) + 1); // Pokémon aleatório entre 1 e 149
    const { data: pokemon, isLoading } = useGetPokemonDetailsQuery(pokemonId);
    const [addPokemonDocument] = useAddPokemonDocumentMutation();
    const [captured, setCaptured] = useState(false);
    const [isShaking, setIsShaking] = useState(false);
    const [attemptingCapture, setAttemptingCapture] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [pokemonVisible, setPokemonVisible] = useState(true);

    const [pokeballPosition, setPokeballPosition] = useState({
        bottom: '5rem',
        left: '40%',
        transform: 'translate(-50%, 0)',
    });

    const handlePokeballClick = async () => {
        if (attemptingCapture) return; // Evita múltiplos cliques
        setAttemptingCapture(true);

        // Definições da trajetória de arco
        const steps = 50;
        const startBottom = 5;
        const endBottom = 70;
        const peakHeight = 80;
        const startLeft = 40;
        const endLeft = 82;

        for (let i = 0; i <= steps; i++) {
            const progress = i / steps;

            const interpolatedLeft = startLeft + (endLeft - startLeft) * progress;
            const interpolatedBottom =
                startBottom +
                peakHeight * (1 - Math.pow((progress - 0.5), 2));

            setPokeballPosition({
                bottom: `${interpolatedBottom}%`,
                left: `${interpolatedLeft}%`,
                transform: 'translate(-50%, 50%)',
            });

            await new Promise((resolve) => setTimeout(resolve, 12));
        }

        setPokemonVisible(false);

        await new Promise((resolve) => setTimeout(resolve, 300));

        // Faz a Pokébola cair
        setPokeballPosition((prev) => ({
            ...prev,
            bottom: '55%',
        }));

        await new Promise((resolve) => setTimeout(resolve, 1000));

        for (let i = 0; i < 3; i++) {
            setIsShaking(true);
            await new Promise((resolve) => setTimeout(resolve, 500));

            setIsShaking(false);
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Verifica se o Pokémon foge 
            if (Math.random() < 0.2) {
                setPokemonVisible(true);
                setPokeballPosition({ bottom: '5rem', left: '40%', transform: 'translate(-50%, 0)' });
                setAttemptingCapture(false);
                return;
            }
        }

        setCaptured(true);

        // Adiciona ao Firestore caso ainda não exista
        try {
            const response = await addPokemonDocument({ id: pokemon.name.toLowerCase() }).unwrap();
            console.log('Pokémon capturado com sucesso:', response);
        } catch (error) {
            console.error('Erro ao adicionar Pokémon capturado:', error);
        }

        await new Promise((resolve) => setTimeout(resolve, 1500));
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
                className="relative w-2/3 h-[80vh] bg-menu-yellow rounded-lg border-2 border-black flex flex-col mt-[6rem] bg-cover bg-center"
                style={{ backgroundImage: 'url(Arena.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {/* Pokébola animada */}
                <div
                    className={`z-10 absolute cursor-pointer ${isShaking ? 'animate-shake' : ''} `}
                    style={{
                        ...pokeballPosition,
                        position: 'absolute',
                        transition: 'all 0.2s ease',
                    }}
                    onClick={handlePokeballClick}
                >
                    <img
                        className={`h-16 w-16 ${attemptingCapture ? 'spin' : ''} ${captured ? 'shadow-[0px_0px_20px_10px_rgba(255,200,30,0.7)] rounded-full' : ''}`}
                        src="../pokeball.png"
                        alt="Pokébola"
                    />
                </div>

                {/* Pokémon */}
                {!captured && pokemonVisible && (
                    <div className="absolute top-1/3 left-3/4 transform -translate-y-1/2 transition-opacity duration-500">
                        <img
                            src={pokemon.sprites.frontGif}
                            alt={pokemon.name}
                            className="h-48 w-48 m-auto object-contain"
                        />
                    </div>
                )}

                {/* Congratulations */}
                {captured && (
                    <div className="absolute mt-32 left-1/2 transform -translate-x-1/2 text-white text-4xl">
                        Congratulations!
                    </div>
                )}
            </div>
        </div>
    );
}

export default Catch;
