import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

//Props
import { useState } from "react";
import { useEffect } from "react";

function App() {
  {
    /* Crea los pacientes */
  }
  const [pacientes, setPacientes] = useState([]);

  {
    /* Modifica los pacientes */
  }
  const [paciente, setPaciente] = useState({});

  {
    /* Guarda en el localStorage */
  }

  useEffect(() => {
    const obtenerLocalStorage = () => {
      const pacientesLocalStorage =
        JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLocalStorage);
    };
    obtenerLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  {
    /* Elimina los pacientes */
  }
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          //Agrega los pacientes
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
