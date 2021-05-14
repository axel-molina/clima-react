import React, {Fragment, useState, useEffect} from 'react';
import './App.css';
import { Clima } from './components/Clima';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { Error } from './components/Error';



function App() {

  // state del formulario
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: '',
  });

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);

  const {ciudad, pais} = busqueda;

  useEffect(() => {
    const consultarAPI =async () => {

      if(consultar){
        const appId = 'd5651a8922769c01417dc1ba0b0ed329';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      setResultado(resultado)
      setConsultar(false);
      
      // Detecta si hubo resultados correctos en la consulta
      if(resultado.cod === "404"){
        setError(true);
      }else{
        setError(false);
      }     
    }    
    }
    consultarAPI();
    }, [consultar, pais, ciudad]);

    let componente;
    if(error) {
      componente = <Error mensaje='No hay resultados' />
    } else {
      componente = <Clima resultado = {resultado} />
    }
    
  return (
    <Fragment>
      <Header
      titulo='Clima React'
      ></Header>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
          <Formulario
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          setConsultar={setConsultar}
          ></Formulario>
          </div>
          <div className="col-sm-12 col-md-6">
            {componente}
          </div>
        </div>
      </div>
    </Fragment>    
  )
}

export default App;
