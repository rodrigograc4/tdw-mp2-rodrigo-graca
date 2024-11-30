import React from 'react';
import PropTypes from 'prop-types';

function Message({ captured }) {
    if (!captured) return null;

    return (
        <div className="absolute mt-32 left-1/2 transform -translate-x-1/2 text-white text-4xl">
            Congratulations!
        </div>
    );
}

Message.propTypes = {
    captured: PropTypes.bool.isRequired,
};

export default Message;
