/*Coloco los imports de los componentes que utilizaré*/
import React from 'react';
import Contacto from '../Contactos/Contacto';
import './ListaContactos.css';

/*Utilizo las props para mostrar la lista de contactos y eliminar o actualizar los datos de un contacto luego de editar*/
const ListaContactos = ({ contactos, eliminarContacto, actualizarContacto }) => {
  return (
    <div className="lista-contactos">
      {contactos.map((contacto, index) => ( //Realizo un mapeo en la lista de contactos para poder mostrarlos todos
        <Contacto
          key={contacto.id}   //Identifico el elemento en la lista por su id
          contacto={contacto} //Utilizo la propiedad para pasar datos del contacto al componente
          eliminarContacto={eliminarContacto} //Le paso la función para poder eliminar un contacto
          actualizarContacto={actualizarContacto} //Le paso la función para poder editar un contacto y almacenar dicha información
        />
      ))}
    </div>
  );
};

export default ListaContactos;






