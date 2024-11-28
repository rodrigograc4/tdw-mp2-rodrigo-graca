import React from 'react';

const StatsAndAbilities = ({ pokemon }) => {

    const maxStat = 160;

    return (
        <div className='p-6 pb-0 grid grid-cols-1 xl:grid-cols-2 gap-12'>
            <div className="flex flex-col justify-center bg-gray-300 rounded-lg p-4">
                <h2 className="text-3xl font-bold mb-4 text-center">Stats</h2>
                <div className="grid grid-cols-3 gap-4 md:grid-cols-6 h-auto">
                    {pokemon.stats.map((stat) => (
                        <div key={stat.name} className="flex flex-col items-center">
                            <div className="relative w-8 h-24 bg-white rounded-lg overflow-hidden">
                                <div
                                    className="absolute bottom-0 w-full bg-blue-500"
                                    style={{
                                        height: `${(stat.value / maxStat) * 100}%`,
                                    }}
                                />
                            </div>
                            <p className="mt-2 text-sm font-medium text-center capitalize">
                                {stat.name.replace('-', '\n')}
                            </p>
                            <p className="text-sm">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-semibold mb-4 text-left">Abilities</h2>
                <div className="flex flex-wrap gap-2 capitalize">
                    {pokemon.abilities.map((ability) => (
                        <span
                            key={ability}
                            className="bg-green-100 text-green-600 px-8 py-2 rounded-full text-3xl"
                        >
                            {ability}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default StatsAndAbilities;