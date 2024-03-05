/*Coloco los import*/
import React, { useState } from 'react';
import './Filtro.css';  //Respectivo css del Filtro

const Filtro = ({ filtrarContactos }) => {
  const [filtro, setFiltro] = useState(''); //Inicializo el filtro vacío pero que puede cambiar su estado gracias a la función "setFiltro"

  /*Actualizo el valor del filtro*/
  const datoFiltro = e => {
    setFiltro(e.target.value);  //Contiene el valor actual del input en cuestión
  };

  const filtrar = e => {
    e.preventDefault(); //Evito que se recargue la página al filtrar
    filtrarContactos(filtro); //Le doy el valor actual del filtro a través de la función
    setFiltro('');  //Vuelvo a poner vacío el campo para poder buscar otra vez de ser necesario
  };

  return (
    <div className="filtro">
      <form onSubmit={filtrar}> {/*Formulario para buscar los contactos a filtrar por nombre o apellido*/}
      {/*Input de busqueda*/}
        <input
          type="text"
          placeholder="Filtrar contactos.."
          value={filtro}
          onChange={datoFiltro} //Aplica la función "datoFiltro" cada vez que cambia el valor del input
          className="input-filtro"
        />
        <button type="submit" className="button-filtro">Buscar</button> {/*Botón de busqueda (envía el formulario)*/}
      </form>
    </div>
  );
};

export default Filtro;






