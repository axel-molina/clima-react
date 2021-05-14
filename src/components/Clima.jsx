import React from 'react';
import PropTypes from 'prop-types';

export const Clima = ({resultado}) => {

    // Extraer los valores
    const {name, main} = resultado;

    if(!name) return null;

    // Grados kelvin
    const kelvin = 273.15;

    return (
        <div className="card text-center mt-3">
            <div className="card-body">
            <h5 className="card-title">El clima de {name} es: </h5>
            <h1 className="mt-3 mb-3">{parseFloat(main.temp - kelvin).toFixed(1)} &#x2103;</h1>
            <p className="card-subtitle">Temperatura máxima</p>
            <strong>{parseFloat(main.temp_max - kelvin).toFixed(1)} <span>&#x2103;</span> </strong>
            <p className="card-subtitle">Temperatura mínima</p>
            <strong>{parseFloat(main.temp_min - kelvin).toFixed(1)} <span>&#x2103;</span> </strong>
            </div>
        </div>
    )
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}