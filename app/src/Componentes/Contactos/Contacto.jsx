/*Coloco los imports*/
import React, { useState } from 'react';
import { FaBrush } from 'react-icons/fa'; //Import del icono de pintar con react icons
import './Contacto.css';  //Import del respectivo css

const Contacto = ({ contacto, eliminarContacto, actualizarContacto }) => {  //Muestra la información  del contacto y permite editarla o eliminarla.
  /*Manipulo los datos del contacto*/
  const [nombre, setNombre] = useState(contacto.nombre);
  const [celular, setCelular] = useState(contacto.celular);
  const [email, setEmail] = useState(contacto.email);
  /*Modificiación del contacto*/
  const [editando, setEditando] = useState(false);  //Controlo la edición del contacto
  const [colorIndex, setColorIndex] = useState(0);     //Indice para el color del fondo
  const colores = ['white', '#dddfa3d9', '#ffa4c2ba', '#7cd27cc4', '#1111119c']; //Array con los posibles colores para el fondodel contacto

  /*Guardo los datos del contacto editado*/
  const guardarDato = () => {
    setEditando(false); //Finalizo la edición
    actualizarContacto(contacto.id, nombre, celular, email);  //Actualizo los datos del contacto
  };
  /*Cambio el color de fondo del contacto*/
  const cambiarColorFondo = () => {
    const nuevoIndex = (colorIndex + 1) % colores.length; //Calculo el inidice para volver a repetir el ciclo desde el inicio
    setColorIndex(nuevoIndex); //Asigno el nuevo índice al contador
  };

  return (
     //Utilizo un div para manipular a cada contacto y le paso el estilo de background de colores para que cambie conforme a su index
    <div className="contacto-card" style={{ backgroundColor: colores[colorIndex] }}>
      <span className='contact-color'><p>Nombre</p></span>  {/*Indico que lo que irá debajo será el nombre*/}
      {editando ? ( //Verifico si editando es true o false para editar o mostrar los datos del contacto
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="contact-input" />
      ) : (
        <div className='contact-border'><p>{nombre}</p></div> //Muestro el nombre del contacto
      )}
      <span className='contact-color'><p>Celular</p></span>
      {editando ? ( //Verifico si editando es true o false para editar o mostrar los datos del contacto
        <input type="text" value={celular} onChange={(e) => setCelular(e.target.value)} className="contact-input" />
      ) : (
        <div className='contact-border'><p>{celular}</p></div>  //Muestro el número de celular del contacto
      )}
      <span className='contact-color'><p>Email</p></span>
      {editando ? ( //Verifico si editando es true o false para editar o mostrar los datos del contacto
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="contact-input" />
      ) : (
        <div className='contact-email'><p>{email}</p></div> //Muestro el correo electrónico del contacto
      )}
      <div className="contact-icon"> {/*Utilizo la class para darle una posición al icono con respecto de los botones*/}
        {editando ? ( //Verifico si editando es true o false para guardar los datos o iniciar la edición u eliminar al contacto
          <button className="orange" onClick={guardarDato}>Guardar</button>
        ) : (
          <>
            <button className="red" onClick={() => eliminarContacto(contacto.id)}>Eliminar</button>
            <button className="orange" onClick={() => setEditando(true)}>Editar</button>
          </>
        )}
        <div> {/*Icono que cambia el color de fondo del contacto por el evento onClick*/}
          <FaBrush className="icon-brush" onClick={cambiarColorFondo} />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
























