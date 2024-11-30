import React from 'react';
import PropTypes from 'prop-types';

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

Pokeball.propTypes = {
    position: PropTypes.shape({
        bottom: PropTypes.string.isRequired,
        left: PropTypes.string.isRequired,
        transform: PropTypes.string.isRequired,
    }).isRequired,
    isShaking: PropTypes.bool.isRequired,
    attemptingCapture: PropTypes.bool.isRequired,
    captured: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Pokeball;
