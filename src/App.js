import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from "./components/Inicio/Inicio.jsx"
import Nosotros from "./components/Nosotros/Nosotros.jsx"
import Filosofia from './components/Filofosia/Filosofia';
import Galeria from "./components/Galeria/Galeria.jsx"
import Colaboradores from "./components/Colaboradores/Colaboradores.jsx"
import Servicios from "./components/Servicios/Servicios.jsx"
import Contacto from "./components/Contacto/Contacto.jsx"
import Equipo from './components/Equipo/Equipo';

function App() {
  return (
    <div className="App">
      <Inicio />
      <Nosotros />
      <Filosofia /> 
      <Equipo />
      <Colaboradores />
      <Galeria />
      <Servicios />
      <Contacto />
    </div>
  );
}

export default App;
