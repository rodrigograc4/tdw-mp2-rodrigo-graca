import React from 'react';

const SkeletonCard = () => (
    <div className="p-1 bg-white rounded-lg shadow-md border border-gray-300 flex items-center cursor-pointer">
        <div className="w-[5.25em] h-[5.25em] mx-4 flex items-center justify-center relative">
            <div className="absolute w-full h-full rounded bg-gray-300 animate-pulse"></div>
        </div>
        <div className="flex-grow">
            <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>
        </div>
        <div className="w-12 h-8 bg-gray-300 rounded mx-4 animate-pulse"></div>
    </div>
);


export default SkeletonCard;