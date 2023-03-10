import React from 'react'
import Paciente from './Paciente'

import { useState, useEffect } from 'react'

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

  useEffect( () => {
    if(pacientes.length > 0) {
      console.log("NUEVO PACIENTE");
    }
  }),[pacientes];

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      {pacientes.length > 0 ? (
          <>
            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
              Administra tus {''}
              <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
            </p>
      
            {/* iterar pacientes */}
            { pacientes.map((paciente) => {
              return(
                <Paciente
                  key = {paciente.id}
                  paciente = {paciente}
                  setPaciente = {setPaciente}
                  eliminarPaciente = {eliminarPaciente}
                />
              )
            })}
          </>

      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Comienza agregando pacientes {''}
            <span className='text-indigo-600 font-bold'>y aparecerán en este lugar.</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes