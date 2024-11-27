import React from 'react';

function Button({ onClick, imageSrc, label }) {
    return (
        <div
            className="relative group cursor-pointer"
            onClick={onClick}
        >
            <div className="transform group-hover:scale-125 transition-transform duration-200">
                <img
                    src={imageSrc}
                    alt={`Botão ${label}`}
                    className="w-96 h-48"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                    {label}
                </span>
            </div>
        </div>
    );
}

export default Button;
