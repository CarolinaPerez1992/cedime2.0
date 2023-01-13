import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Hero from "./components/Hero/Hero.jsx"
import Nosotros from  "./components/Nosotros/Nosotros.jsx"
import Galeria from "./components/Galeria/Galeria.jsx"
import Colaboradores from "./components/Colaboradores/Colaboradores.jsx"
import Servicios from "./components/Servicios/Servicios.jsx"
import Contacto from "./components/Contacto/Contacto.jsx"

function App() {
  return (
    <div className="App">
       <Hero/>
       <Nosotros/>
       <Galeria/>
       <Colaboradores/>
       <Servicios/>
      <Contacto/> 
    </div>
  );
}

export default App;
