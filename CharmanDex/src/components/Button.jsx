import React from 'react';
import PropTypes from 'prop-types';

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
                    className="w-96"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                    {label}
                </span>
            </div>
        </div>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    imageSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default Button;
