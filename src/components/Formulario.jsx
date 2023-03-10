import React from 'react';
import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ( {pacientes, setPacientes, paciente, setPaciente} ) => {

  // El state siempre debe ser declarado en la parte superior del componente antes del return
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error,setError] = useState(false);

  // Use Effect
  useEffect( () => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }

  },[paciente]);

  // Funcion para generar id
  const generarID = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')) {
      	console.log("Hay al menos un campo vacio");
        setError(true);
        return;
    }

    setError(false);

    // Objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if(paciente.id) { //Significa que estamos editando
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

      setPacientes(pacientesActualizados);
      setPaciente({});
    }
    else { //Nuevo registro
      objetoPaciente.id = generarID();
      // Crear copia de arreglo original para agragar nuevos pacientes
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='mt-5 text-center mb-10'>
        A??ade Pacientes y {''}
        <span className='text-indigo-600 font-bold text-lg'>Administralos.</span>
      </p>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit} 
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'>

          {/* {error && <Error
            mensaje = "Mensaje de error"
          />} */}

        {error && <Error> <p>Todos los campos son obligatorios</p> </Error>}
      
        
        <div className='mb-5'> {/* Campo formulario */}
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
            Nombre Mascota
          </label>
          <input 
            id='mascota'
            type="text"
            placeholder='Nombre de la mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange = { (e) => setNombre(e.target.value) }
          />
        </div>

        <div className='mb-5'> {/* Campo formulario */}
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>
            Nombre Propietario
          </label>
          <input 
            id='propietario'
            type="text"
            placeholder='Nombre del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange = { (e) => setPropietario(e.target.value) }
          />
        </div>
        
        <div className='mb-5'> {/* Campo formulario */}
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
            Email
          </label>
          <input 
            id='email'
            type="email"
            placeholder='Email contacto'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange = { (e) => setEmail(e.target.value) }
          />
        </div>

        <div className='mb-5'> {/* Campo formulario */}
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
            Alta
          </label>
          <input 
            id='alta'
            type="date"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange = { (e) => setFecha(e.target.value) }
          />
        </div>

        <div className='mb-5'> {/* Campo formulario */}
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
            S??ntomas 
          </label>
          <textarea
          id='sintomas'
          placeholder='Escribe los s??ntomas'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={sintomas}
          onChange = { (e) => setSintomas(e.target.value) }
          />
        </div>

        <input 
          type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointe r transition-colors'
          value={ paciente.id ? 'Editar Paciente': 'Agregar Paciente' }
        />
      
      </form>

    </div>
  )
}

export default Formulario


