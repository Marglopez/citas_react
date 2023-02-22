import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  // useEffect(() => {
  //   const obtenerLocalStorage = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //     setPacientes(pacientesLS);
  //   }

  //   obtenerLocalStorage();
  // },[]);

  // Local storage
  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes]);

  // Eliminar paciente
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id  !== id );
    setPacientes(pacientesActualizados);
  }

  // const imprime2mas2 = () => {
  //   console.log(2+2);
  // }

  return (
    <div className="container mx-auto mt-20">
      <Header
        // numeros = {1}
        // isAdmin = {false}
        // fn = {imprime2mas2}
      />
      
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes = {pacientes}
          setPacientes={setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    
    </div>
  )
}

export default App
