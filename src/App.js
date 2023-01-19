import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from "./components/Inicio/Inicio.jsx"
import Nosotros from "./components/Nosotros/Nosotros.jsx"
import Filosofia from './components/Filofosia/Filosofia';
import Blog from './components/Blog/Blog.jsx'
import Colaboradores from "./components/Colaboradores/Colaboradores.jsx"
import Galeria from './components/Galeria/Galeria.jsx';
import Servicios from "./components/Servicios/Servicios.jsx"
import Contacto from "./components/Contacto/Contacto.jsx"
import Equipo from './components/Equipo/Equipo'
import BackToTopButton from './components/BackToTopButton/BackToTopButton'
// import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="App">
        <Inicio />
        <Nosotros />
        <Filosofia />
        <Servicios />
        <Contacto />
        <Equipo /> 
        <Galeria />
        <Blog />
        <Colaboradores />
      </div>
      <BackToTopButton />
      <Footer />
    </>
  );
}

export default App;
