import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid'
// Componentes
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer';
// Importación de la información inicial/local
import ListaColaboradores from './data/Colaboradores'
import ListaEquipos from './data/Equipos';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState(ListaColaboradores)
  const [equipos, actualizarEquipos] = useState(ListaEquipos);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar equipo
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  // Acualizar color del equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }

      return equipo;
    })

    actualizarEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  const likeColab = (id) => {
    const colaboradoresFavs = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }

      return colaborador
    })

    actualizarColaboradores(colaboradoresFavs)
  }

  return (
    <div className="App">
      <Header />

      {
        mostrarFormulario &&
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => <Equipo
        datos={equipo}
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        likeColab={likeColab}
      />)}

      <Footer />

    </div>
  );
}

export default App;