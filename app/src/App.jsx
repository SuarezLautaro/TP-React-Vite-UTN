/*Coloco los import*/
import React, { useState } from 'react';
//Componentes que voy a usar en este archivo
import ListaContactos from './Componentes/Lista/ListaContactos';
import Formulario from './Componentes/Formulario/Formulario';
import Filtro from './Componentes/Filtro/Filtro';
import './App.css'; //Import del respectivo css

const App = () => {
  const [contactos, setContactos] = useState([]); //Guardo los contactos y los actualizo
  const [contactosFiltrados, setContactosFiltrados] = useState([]); //Guardo los contactos filtrados por el usuario
  const [mostrarTodos, setMostrarTodos] = useState(true);  //Muestra todos los contactos o solo los filtrados por nombre u apellido
  const [filtro, setFiltro] = useState(''); //Guarda el valor del filtro

  /*Agrego un nuevo contacto*/
  const agregarContacto = nuevoContacto => {
    setContactos([...contactos, nuevoContacto]);  //Agrego un nuevo contacto
    if (mostrarTodos) {
      setContactosFiltrados([...contactos, nuevoContacto]); //Muestro al nuevo contacto incluso si encaja en la buqueda del filtro
    }
  };
  /*Elimino un contacto*/
  const eliminarContacto = id => {
    setContactos(contactos.filter(contacto => contacto.id !== id)); //Filtramos para no mostrarlo al negar su respectivo id
    setContactosFiltrados(contactosFiltrados.filter(contacto => contacto.id !== id)); //Elimino al contacto incluso si se muestra en el apartado de busqueda del filtro
  };
  /*Filtro contactos por nombre o apellido*/
  const filtrarContactos = filtro => {
    const contactosFiltrados = contactos.filter(contacto => {
      return contacto.nombre.toLowerCase().includes(filtro.toLowerCase()); //Filtra los contactos sin distinción de mayúsculas o minusculas
    });
    setContactosFiltrados(contactosFiltrados); //Cambio el estado para mostrar solo los contactos filtrados
    setMostrarTodos(false); //Con el valor booleano de false muestro solo los contactos filtrados
    setFiltro(filtro); //Actualizo el valor del filtro con lo que se buscó
  };
  /*Devuelve todos los contactos sin filtrar*/
  const mostrarTodosContactos = () => {
    setContactosFiltrados(contactos);  //Limpio la lista de contactos filtrados
    setMostrarTodos(true);  //Pongo el valor booleano a true para que vuelva a mostrarse todos los contactos
    setFiltro(''); //Limpio el input de filtro
  };
  //Manipulo el array de contactos para editarlos
  const actualizarContacto = (id, nombre, telefono, direccion) => { 
    const contactosActualizados = contactos.map(contacto => {
      if (contacto.id === id) { //Verifico que los id de los contactos sean estrictamente iguales
        return { ...contacto, nombre, telefono, direccion }; //Si coinciden los id, actualizo los datos del contacto
      }
      return contacto; //En caso de no coincidir los id por el if, devuelvo el contacto como estaba
    });
    setContactos(contactosActualizados); //Actualizo el state con los contactos actualizados
    setContactosFiltrados(contactosActualizados); //Actualizo también la lista de contactos filtrados
  };

  /*Estructura de la página*/
  return (
    <div className="background">
      <div className="container-general"> {/*Container principal*/}
        <h1>Lista de Contactos</h1> {/*Título de la aplicación*/}
        <div className="header-right">  
          <div className="container-filtro">  {/*Container para acomodar a la izquierda y derecha los div hijos*/}
            <div className="boton-mostrar-todos"> {/*div container del botón oculto/visible al filtrar contactos*/}
                {!mostrarTodos && ( 
                  <button className="MostrarContactos" onClick={mostrarTodosContactos}> 
                    Mostrar Todos los Contactos
                  </button>
                )}
              </div>
              <div className='posicionar-filtro'> {/*className para posicionar el input y botón de busqueda al final*/}
                <Filtro filtrarContactos={filtrarContactos} /> {/*Muestro el input y botón de busqueda del filtro*/}
              </div>
        </div>
          </div>
          

        <Formulario agregarContacto={agregarContacto} /> {/*Formulario para agregar un nuevo contacto*/}
        
        <ListaContactos
          contactos={contactosFiltrados}  //Muestro los contactos filtrados
          eliminarContacto={eliminarContacto}   //Función para eliminar un contacto
          actualizarContacto={actualizarContacto}   //Función para editar un contacto
        />
      </div>
    </div>
  );
};

export default App;









