import React from 'react';

function Message({ captured }) {
    if (!captured) return null;

    return (
        <div className="absolute mt-32 left-1/2 transform -translate-x-1/2 text-white text-4xl">
            Congratulations!
        </div>
    );
}

export default Message;
