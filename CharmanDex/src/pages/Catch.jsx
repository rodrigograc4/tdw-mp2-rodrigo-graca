import React, { useState } from 'react';
import { useGetPokemonDetailsQuery, useAddPokemonDocumentMutation } from '../pokemonApi';

function Catch() {
    const [pokemonId] = useState(Math.floor(Math.random() * 149) + 1); // Pokémon aleatório entre 1 e 149
    const { data: pokemon, isLoading } = useGetPokemonDetailsQuery(pokemonId);
    const [addPokemonDocument] = useAddPokemonDocumentMutation(); // Hook da mutação para Firestore
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
        const steps = 50; // Número de etapas da animação
        const startBottom = 5; // Posição inicial em porcentagem
        const endBottom = 70; // Posição final em porcentagem
        const peakHeight = 80; // Altura máxima da curva
        const startLeft = 40; // Posição inicial horizontal em porcentagem
        const endLeft = 82; // Posição final horizontal em porcentagem

        for (let i = 0; i <= steps; i++) {
            const progress = i / steps;

            // Interpolação linear para o eixo horizontal (esquerda)
            const interpolatedLeft = startLeft + (endLeft - startLeft) * progress;

            // Interpolação parabólica para o eixo vertical (altura)
            const interpolatedBottom =
                startBottom +
                peakHeight * (1 - Math.pow((progress - 0.5), 2));

            setPokeballPosition({
                bottom: `${interpolatedBottom}%`,
                left: `${interpolatedLeft}%`,
                transform: 'translate(-50%, 50%)',
            });

            await new Promise((resolve) => setTimeout(resolve, 12)); // Controla a suavidade da animação
        }

        // Esconde o Pokémon após a Pokébola chegar ao centro
        setPokemonVisible(false);

        await new Promise((resolve) => setTimeout(resolve, 300)); // Espera o término da animação (0.5s)

        // Faz a Pokébola "cair" um pouco
        setPokeballPosition((prev) => ({
            ...prev,
            bottom: '55%', // Ajuste para queda
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
                setPokeballPosition({ bottom: '5rem', left: '40%', transform: 'translate(-50%, 0)' }); // Retorna a Pokébola à posição inicial
                setAttemptingCapture(false);
                return; // Pokémon escapa
            }
        }

        // Se chegou aqui, captura foi bem-sucedida
        setCaptured(true);

        // Adiciona ao Firestore caso ainda não exista
        try {
            const response = await addPokemonDocument({ id: pokemon.name.toLowerCase() }).unwrap();
            console.log('Pokémon capturado com sucesso:', response);
        } catch (error) {
            console.error('Erro ao adicionar Pokémon capturado:', error);
        }

        await new Promise((resolve) => setTimeout(resolve, 1500)); // Espera 1 segundo antes de redirecionar
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
                style={{ backgroundImage: 'url(Arena.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {/* Pokébola animada */}
                <div
                    className={`z-10 absolute cursor-pointer ${isShaking ? 'animate-shake' : ''}`}
                    style={{
                        ...pokeballPosition,
                        position: 'absolute',
                        transition: 'all 0.2s ease', // Suaviza a animação de movimento
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
                    <div className="absolute top-1/3 left-3/4 transform -translate-y-1/2 transition-opacity duration-500">
                        <img
                            src={pokemon.sprites.frontGif}
                            alt={pokemon.name}
                            className="h-48 w-48 m-auto object-contain"
                        />
                    </div>
                )}

                {/* Texto de Parabéns */}
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
