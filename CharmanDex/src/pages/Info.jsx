import React from 'react';

const Section = ({ title, children }) => (
    <div className="mt-20">
        <span className="flex items-center justify-center text-white text-5xl p-2 rounded-lg bg-[#43719e] mb-10">{title}</span>
        <div className="flex flex-col md:flex-row items-center">{children}</div>
    </div>
);

const ExtraSection = ({ children }) => (
    <div>
        <div className="flex flex-col md:flex-row items-center">{children}</div>
    </div>
);

const TextBlock = ({ children }) => (
    <div className="w-full md:w-1/2 p-4">
        <p className="text-2xl text-black text-center">{children}</p>
    </div>
);

const FullText = ({ children }) => (
    <div className="w-full p-4">
        <p className="text-2xl text-black text-center">{children}</p>
    </div>
);

const ImageBlock = ({ src, alt }) => (
    <div className="w-full md:w-1/2 p-4 flex justify-center">
        <img src={src} alt={alt} className="p-4" />
    </div>
);

function Info() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center mt-[9rem] relative">
            <div className='w-full md:w-2/3 p-10 rounded-lg border-2 border-black bg-white mb-20'>
                {/* Title */}
                <div className="flex items-center justify-center text-black text-8xl">
                    Pokemon for Dummies
                </div>

                {/* First Row */}
                <Section title="The Pokémon World">
                    <TextBlock>
                        The Pokémon world is fascinating, full of amazing creatures that coexist with humans.
                        <br />
                        Each Pokémon is unique, with characteristics that differentiate them, such as types, abilities, moves, and even evolutionary forms.
                        <br />
                        These elements not only make each Pokémon special but are also essential for battle strategies and building bonds with trainers.
                    </TextBlock>
                    <ImageBlock src='InfoPage/pokemons.png' alt="pokemons" />
                </Section>

                {/* Pokémon Types */}
                <Section title="Pokémon Types">
                    <FullText>
                        Types are one of the most important aspects of a Pokémon.
                        <br />
                        Each Pokémon has at least one type, but some may have two, which directly affects their strengths and weaknesses in battles.
                        <br />
                        There are a total of 18 different types, such as Fire, Water, Electric, Grass, Dragon, Ghost, Fairy, and many others.
                        <br />
                        These types create a system of advantages and disadvantages, similar to the game "rock, paper, scissors."
                    </FullText>
                </Section>

                {/* Examples of Pokémon Types */}
                <ExtraSection>
                    <TextBlock>
                        For example:
                        <br />
                        Water is strong against Fire but weak against Electric and Grass.
                        <br />
                        Dragon is super effective against itself but weak against Fairy type.
                        <br />
                        Ghost is immune to Normal-type attacks.
                        <br />
                        This system encourages trainers to build balanced teams that can face different types of opponents.
                    </TextBlock>
                    <ImageBlock src='InfoPage/types.png' alt="types" />
                </ExtraSection>

                {/* Pokémon Abilities */}
                <Section title="Pokémon Abilities">
                    <FullText>
                        Each Pokémon has a unique ability that provides advantages both inside and outside of battles.
                        <br />
                        Some abilities directly affect performance in combat, while others have subtler effects.
                        <br />
                        A Pokémon generally has one of two or three possible abilities, with some being "Hidden Abilities," available only in special situations.
                        <br />
                        This adds an extra level of customization, allowing trainers to adapt their strategies based on the abilities.
                    </FullText>
                </Section>

                {/* Examples of Abilities */}
                <ExtraSection>
                    <ImageBlock src='InfoPage/abilities.png' alt="abilities" />
                    <TextBlock>
                        For example:
                        <br />
                        Levitate makes the Pokémon immune to Ground-type attacks.
                        <br />
                        Poison Heal heals the Pokémon instead of damaging it when it is poisoned.
                    </TextBlock>
                </ExtraSection>

                {/* Moves */}
                <Section title="Moves">
                    <FullText>
                        Moves are the actions that Pokémon use in battles.
                        <br />
                        Each Pokémon can carry up to four moves at a time, which requires strategy when choosing which ones to use.
                        <br />
                        There are three main types:
                        <br />
                        Physical: Dependent on the user's physical attack (e.g., Earthquake).
                        <br />
                        Special: Based on the user's special attack (e.g., Thunderbolt).
                        <br />
                        Status: Change attributes or cause conditions like paralysis or sleep (e.g., Swords Dance).
                    </FullText>
                </Section>

                {/* Evolutions */}
                <Section title="Evolutions">
                    <TextBlock>
                        Evolving is an important part of a Pokémon's growth, increasing its stats and sometimes changing types or abilities.
                        <br />
                        There are several ways to evolve, such as:
                        <br />
                        By Level: The most common method, achieved by gaining experience.
                        <br />
                        By Items: Special stones, like the Thunder Stone, help with certain evolutions.
                        <br />
                        By Friendship or Specific Conditions: Some Pokémon evolve by building strong bonds with the trainer or in unique situations.
                        <br />
                        By Trade: Some Pokémon evolve when traded between trainers.
                        <br />
                        Evolving a Pokémon is strategic, as it can affect the moves learned and the battle style.
                    </TextBlock>
                    <ImageBlock src='InfoPage/evolution.png' alt="evolutions" />
                </Section>

                {/* Conclusion */}
                <Section title="Conclusion">
                    <FullText>
                        The Pokémon universe is full of complexity and possibilities, making each journey unique.
                        <br />
                        From capturing and training to choosing the best moves and strategies, the Pokémon world offers endless opportunities for exploration and fun.
                        <br />
                        Whether you are a beginner or a veteran trainer, there is always something new to learn or experience.
                    </FullText>
                </Section>
            </div>
        </div>
    );
}

export default Info;
