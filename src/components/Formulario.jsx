import React, { useState } from "react";
import { Error } from "./Error";
import PropTypes from 'prop-types';

export const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

  const [error, seterror] = useState(false);

  // extraer ciudad y pais
  const { ciudad, pais } = busqueda;

  // Funcion que coloca los elementos en el state
  const handleChange = e => {
      // actualizar el state
      setBusqueda({
          ...busqueda,
          [e.target.name] : e.target.value
      });
  }

  // Cuando el usuario da submit
  const handleSubmit = e => {
      e.preventDefault();

      // validar
      if(ciudad.trim() === '' || pais.trim() === ''){
          seterror(true);
          return;
      }

      seterror(false)

      

      //pasarlo al componente principal
      setConsultar(true);

  }

  return (
    <form  className="form-group" onSubmit={handleSubmit}>
      <div className="col-12">
        <label htmlFor="ciudad" className="form-label text-white">
          Ciudad:
        </label>
        <input
          className="form-control"
          type="text"
          name="ciudad"
          id="ciudad"
          placeholder="Ciudad"
          value={ciudad}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-12 mt-1">
        <label htmlFor="pais" className="form-label text-white">
          País:
        </label>
        <select 
        className="form-select" 
        name="pais" 
        id="pais" 
        value={pais}
        onChange={handleChange}
        >
          <option value="">Seleccione un país</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
      </div>
      <button
      type="submit"
      className="btn btn-warning col-12 mt-2 mb-2"
      value="Buscar Clima"
      >
          Buscar Clima
      </button>
        {error ? <Error mensaje="Ambos campos son obligatorios"/> : null }
        <p className="text-center text-white ">Creado por: Axel Iván Molina</p>
    </form>
  );
};

Formulario.propTypes = {
    busqueda:PropTypes.object.isRequired,
    setBusqueda:PropTypes.func.isRequired,
    setConsultar:PropTypes.func.isRequired
}