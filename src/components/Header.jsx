import React from 'react'
import PropTypes from 'prop-types';

export const Header = ({titulo}) => {
    return (
        <nav>
            <h1 className="text-white text-center mt-3">{titulo}</h1>
        </nav>
    )
}

Header.propTypes = {
    titulo:PropTypes.string.isRequired
}