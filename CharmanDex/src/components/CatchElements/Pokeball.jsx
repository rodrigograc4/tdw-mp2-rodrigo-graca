import React from 'react';

function Pokeball({ position, isShaking, attemptingCapture, captured, onClick }) {
    return (
        <div
            className={`z-10 absolute cursor-pointer ${isShaking ? 'animate-shake' : ''}`}
            style={{
                ...position,
                position: 'absolute',
                transition: 'all 0.2s ease',
            }}
            onClick={onClick}
        >
            <img
                className={`h-16 w-16 ${attemptingCapture ? 'spin' : ''} ${captured ? 'shadow-[0px_0px_20px_10px_rgba(255,200,30,0.7)] rounded-full' : ''
                    }`}
                src="../pokeball.png"
                alt="Pokébola"
            />
        </div>
    );
}

export default Pokeball;
