import React from 'react';

function Info() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center mt-[9rem] relative">
            <div className='w-full md:w-2/3 p-10 rounded-lg bg-[#383040] mb-20'>
                {/* Título */}
                <span className="flex items-center justify-center text-white text-8xl">
                    Pokemon for Dummies
                </span>

                {/* Primeira linha */}
                <div className="flex flex-col md:flex-row items-center mt-10">
                    <div className="w-full md:w-1/2 py-4">
                        <p className="text-2xl text-white text-center">
                            O mundo Pokémon é fascinante, repleto de criaturas incríveis que coexistem com os humanos.
                            <br />
                            Cada Pokémon é único, com características que o diferenciam, como tipos, habilidades, movimentos e até mesmo formas evolutivas.
                            <br />
                            Esses elementos não apenas tornam cada Pokémon especial, mas também são essenciais para estratégias de batalha e o desenvolvimento de laços com os treinadores.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 py-4 flex justify-center">
                        <img src='InfoPage/pokemons.png' alt="pokemons" />
                    </div>
                </div>

                {/* Sub Título */}
                <span className="flex items-center justify-center text-white text-4xl mt-20">
                    Tipos Pokémon
                </span>

                {/* Segunda linha */}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full p-4">
                        <p className="text-2xl text-white text-center">
                            Os tipos são um dos aspectos mais importantes de um Pokémon.
                            <br />
                            Cada Pokémon tem pelo menos um tipo, mas alguns podem ter dois, o que afeta diretamente suas forças e fraquezas em batalhas.
                            <br />
                            No total, existem 18 tipos diferentes, como Fogo, Água, Elétrico, Planta, Dragão, Fantasma, Fada e muitos outros.
                            <br />
                            Esses tipos criam um sistema de vantagens e desvantagens, parecido com o jogo "pedra, papel e tesoura".
                        </p>
                    </div>
                </div>

                {/* Terceira linha */}
                <div className="flex flex-col md:flex-row items-center mt-10">
                    <div className="w-full md:w-1/2 p-4">
                        <p className="text-2xl text-white text-center">
                            Por exemplo:
                            <br />

                            Água é forte contra Fogo, mas fraco contra Elétrico e Planta.
                            <br />
                            Dragão é super eficaz contra si mesmo, mas fraco contra o tipo Fada.
                            <br />
                            Fantasma é imune a ataques do tipo Normal.
                            <br />
                            Esse sistema incentiva os treinadores a montarem equipes equilibradas, capazes de enfrentar diferentes tipos de adversários.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 p-4 flex justify-center">
                        <img src='InfoPage/types.png' alt="types" className='p-4' />
                    </div>
                </div>

                {/* Sub Título */}
                <span className="flex items-center justify-center text-white text-4xl mt-20">
                    Habilidades dos Pokémons
                </span>

                {/* Quarta linha */}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full p-4">
                        <p className="text-2xl text-white text-center">
                            Cada Pokémon possui uma habilidade única, que oferece vantagens tanto dentro quanto fora das batalhas.
                            <br />
                            Algumas habilidades afetam diretamente o desempenho em combate, enquanto outras têm efeitos mais sutis.
                            <br />
                            Um Pokémon geralmente pode ter uma de duas ou três habilidades possíveis, sendo que algumas delas são "Habilidades Ocultas", disponíveis apenas em situações especiais.
                            <br />
                            Isso adiciona um nível extra de personalização, permitindo aos treinadores adaptarem suas estratégias com base nas habilidades.
                        </p>
                    </div>
                </div>

                {/* Quinta linha */}
                <div className="flex flex-col md:flex-row items-center mt-10">
                    <div className="w-full md:w-1/2 p-4 flex justify-center">
                        <img src='InfoPage/abilities.png' alt="abilities" className='p-4' />
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <p className="text-2xl text-white text-center">
                            Por exemplo:
                            <br />
                            Levitate torna o Pokémon imune a ataques do tipo Terra.
                            <br />
                            Poison Heal cura o Pokémon ao invés de causar dano quando está envenenado.
                        </p>
                    </div>
                </div>

                {/* Sub Título */}
                <span className="flex items-center justify-center text-white text-4xl mt-20">
                    Moves
                </span>

                {/* Sexta linha */}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full p-4">
                        <p className="text-2xl text-white text-center">
                            Os movimentos, ou moves, são as ações que os Pokémon utilizam em batalhas.
                            <br />
                            Cada Pokémon pode carregar até quatro movimentos por vez, o que exige estratégia ao escolher quais usar.
                            <br />
                            Existem três tipos principais:
                            <br />
                            Físicos: Dependem do ataque físico do usuário (ex.: Earthquake).
                            <br />
                            Especiais: Baseiam-se no ataque especial do usuário (ex.: Thunderbolt).
                            <br />
                            De Status: Alteram atributos ou causam condições, como paralisia ou sono (ex.: Swords Dance).
                        </p>
                    </div>
                </div>

                {/* Sub Título */}
                <span className="flex items-center justify-center text-white text-4xl mt-20">
                    Evoluçöes
                </span>

                {/* Sétima linha */}
                <div className="flex flex-col md:flex-row items-center mt-10">
                    <div className="w-full md:w-1/2 p-4">
                        <p className="text-2xl text-white">
                            Evoluir é uma parte importante do crescimento de um Pokémon, aumentando seus atributos e, às vezes, mudando tipos ou habilidades.
                            <br />
                            <br />
                            Existem diversas formas de evolução, como:
                            <br />
                            <br />
                            Por Nível: O método mais comum, alcançado ao ganhar experiência.
                            <br />
                            Por Itens: Pedras especiais, como a Thunder Stone, ajudam em certas evoluções.
                            <br />
                            Por Amizade ou Condições Específicas: Alguns Pokémon evoluem ao atingir laços fortes com o treinador ou em situações únicas.
                            <br />
                            Por Troca: Certos Pokémon evoluem ao serem trocados entre treinadores.
                            <br />
                            <br />
                            Evoluir um Pokémon é estratégico, pois pode afetar os movimentos aprendidos e o estilo de batalha.

                        </p>
                    </div>
                    <div className="w-full md:w-1/2 p-4 flex justify-center">
                        <img src='InfoPage/evolution.png' alt="evolutions" className='p-4' />
                    </div>
                </div>

                {/* Sub Título */}
                <span className="flex items-center justify-center text-white text-4xl mt-20">
                    Conclusäo
                </span>

                {/* Oitava linha */}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full p-4">
                        <p className="text-2xl text-white text-center">
                            O universo Pokémon é repleto de complexidade e possibilidades, tornando cada jornada única.
                            <br />
                            Desde capturar e treinar, até escolher os melhores movimentos e estratégias, o mundo Pokémon oferece infinitas oportunidades de exploração e diversão.
                            <br />
                            Sejas tu um treinador iniciante ou veterano, há sempre algo novo para aprender ou experimentar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
