import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonDetailsQuery } from '../redux/pokeApi';
import SkeletonPokemonInfo from './Skeletons/SkeletonPokemonInfo';
import ImageAndName from './PokeInfoRows/ImageAndName';
import StatsAndAbilities from './PokeInfoRows/StatsAndAbilities';
import Sprites from './PokeInfoRows/Sprites';
import Moves from './PokeInfoRows/Moves';

const PokemonInfo = () => {
    const { id } = useParams();
    const { data: pokemon, isLoading, error } = useGetPokemonDetailsQuery(id);


    if (isLoading) {
        return <SkeletonPokemonInfo />;
    }

    if (error) {
        return <div className='px-6 py-4 text-3xl text-white'>Error fetching Pokémon details.</div>;
    }

    if (!pokemon) {
        return <div className='px-6 py-4 text-3xl text-white'>No Pokémon found</div>;
    }

    return (
        <div className="flex-grow overflow-auto p-4 custom-scrollbar">
            <div className="bg-white rounded-lg">
                {/* Row 1 */}
                <ImageAndName pokemon={pokemon} />

                {/* Row 2 */}
                <StatsAndAbilities pokemon={pokemon} />

                {/* Row 3 */}
                <Sprites pokemon={pokemon} />

                {/* Row 4 */}
                <Moves pokemon={pokemon} />

            </div>
        </div>
    );
};

export default PokemonInfo;
