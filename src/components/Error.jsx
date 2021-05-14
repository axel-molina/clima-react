import React from 'react'
import PropTypes from 'prop-types';

export const Error = ({mensaje}) => {
    return ( 
                 <p className="alert alert-danger">{mensaje}</p>    
    )
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}