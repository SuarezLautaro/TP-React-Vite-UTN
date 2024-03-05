/*Coloco los imports*/
import React, { useState } from 'react'; /*Empleo dicho hook para poder usar el estado del formulario */
import './Formulario.css'; /*Importo el css del respectivo Formulario*/

/*Actualizo los estados del contacto, teniendo en cuenta que inician vacíos*/
const Formulario = ({ agregarContacto }) => { 
  const [nombre, setNombre] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');

  /*Función que verifica que los campos estén completos antes de agregar un contacto*/
  const buttonAgregarContacto = e => {
    e.preventDefault(); /*Evito que la página se recargue al pulsar el botón*/
    if (!nombre.trim() || !celular.trim() || !email.trim()) return; /*Verifico que los input no estén vacíos*/
    agregarContacto({ id: Date.now(), nombre, celular, email });  /*Agrego un contacto con un id único gracias a Date.now */
    /*Reseteo los input del formulario una vez agregado el contacto*/
    setNombre('');
    setCelular('');
    setEmail('');
  };

  return (
    <form onSubmit={buttonAgregarContacto} className="formulario-agregar-contacto">
      {/*Input del nombre del contacto*/}
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)} //Evento para actualizar el state con el valor del input
        maxLength={25} // Limito el nombre a ingresar por 25 caracteres
        className="input-formulario"
      />
      {/*Input del numero de celular del contacto*/}
      <input
        type="tel"
        placeholder="Celular"
        value={celular}
        onChange={e => setCelular(e.target.value)}  //Evento para actualizar el state con el valor del input
        maxLength={25} // Limito el número a ingresar por 25 caracteres
        className="input-formulario"
      />
      {/*Input de email del contacto*/}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}  //Evento para actualizar el state con el valor del input
        className="input-formulario"
      />
      <button type="submit" className="button-formulario">Agregar Contacto</button> {/*Botón para agregar el contacto*/}
    </form>
  );
};

export default Formulario;




