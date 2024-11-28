import React from 'react';

const SkeletonPokemonInfo = () => (
    <div className="flex-grow overflow-auto p-4 custom-scrollbar">
        <div className="p-6 bg-white rounded-lg grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Row 1 */}
            <div className="flex justify-center items-center bg-gray-100 rounded-lg">
                <div className="w-80 h-80 bg-gray-300 animate-pulse rounded-lg"></div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="h-12 bg-gray-300 animate-pulse w-2/3 mx-auto mb-4 rounded"></div>
                <div className="h-8 bg-gray-300 animate-pulse w-1/6 mx-auto mb-4 rounded"></div>
                <div className="flex flex-col justify-center">
                    <div className="h-8 bg-gray-300 animate-pulse w-1/6 mb-4 rounded"></div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {[...Array(2)].map((_, index) => (
                            <div key={index} className="bg-gray-300 animate-pulse h-12 w-28 rounded-full"></div>
                        ))}
                    </div>
                </div>
                <div className="h-8 bg-gray-300 animate-pulse w-1/3 mb-2 rounded"></div>
                <div className="h-8 bg-gray-300 animate-pulse w-1/3 mb-2 rounded"></div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col justify-center bg-gray-300 rounded-lg p-4">
                <div className="h-8 bg-gray-300 animate-pulse w-2/3 mx-auto mb-4 rounded"></div>
                <div className="grid grid-cols-3 gap-4 md:grid-cols-6 h-auto">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative w-8 h-24 bg-gray-300 animate-pulse rounded-lg"></div>
                            <div className="h-4 bg-gray-300 animate-pulse mt-2 w-2/3 mb-1 rounded"></div>
                            <div className="h-4 bg-gray-300 animate-pulse w-1/2 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <div className="h-8 bg-gray-300 animate-pulse w-1/6 mb-4 rounded"></div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="bg-gray-300 animate-pulse h-12 w-28 rounded-full"></div>
                    ))}
                </div>
            </div>

            {/* Row 3 - Regular Sprites */}
            <div>
                <div className="h-8 bg-gray-300 animate-pulse w-1/3 mx-auto mb-4 rounded"></div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                        <div className="w-40 h-40 bg-gray-300 animate-pulse mx-auto rounded-lg"></div>
                        <div className="h-4 bg-gray-300 animate-pulse mt-2 w-1/3 mx-auto rounded"></div>
                    </div>
                    <div className="text-center">
                        <div className="w-40 h-40 bg-gray-300 animate-pulse mx-auto rounded-lg"></div>
                        <div className="h-4 bg-gray-300 animate-pulse mt-2 w-1/3 mx-auto rounded"></div>
                    </div>
                </div>
            </div>
            <div>
                <div className="h-8 bg-gray-300 animate-pulse w-1/3 mx-auto mb-4 rounded"></div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                        <div className="w-40 h-40 bg-gray-300 animate-pulse mx-auto rounded-lg"></div>
                        <div className="h-4 bg-gray-300 animate-pulse mt-2 w-1/3 mx-auto rounded"></div>
                    </div>
                    <div className="text-center">
                        <div className="w-40 h-40 bg-gray-300 animate-pulse mx-auto rounded-lg"></div>
                        <div className="h-4 bg-gray-300 animate-pulse mt-2 w-1/3 mx-auto rounded"></div>
                    </div>
                </div>
            </div>

            {/* Row 4 - Moves */}
            <div className="col-span-2">
                <div className="h-8 bg-gray-300 animate-pulse w-1/6 mx-auto mb-4 rounded"></div>
                <div className="flex flex-wrap gap-4 justify-center">
                    {[...Array(72)].map((_, index) => (
                        <div key={index} className="bg-gray-300 animate-pulse h-10 w-28 rounded-full"></div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default SkeletonPokemonInfo;