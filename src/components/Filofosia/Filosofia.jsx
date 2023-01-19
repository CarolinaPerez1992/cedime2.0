import React from "react";
import Imagen1 from '../../Assets/imagen3-removebg-preview.png'
// import Imagen2 from '../../Assets/clipat.jpg'
import "../Filofosia/Filosofia.css";
import Imagen2 from "../../Assets/equipo.ideas.png"
import Imagen3 from "../../Assets/personas.felices.png"

const Filosofia = () => {
  return (
    <div className="Filosofia" id="filosofia">
      <div className='contenedor_titulo'>
        <div className='blob'></div>
        <h2 className='titulo_filo'>Filosofía</h2>
      </div>
      <div className='filosofia1'>
        <div className='contenedor__imagen'>
            <img src={Imagen1} className='imagen1' alt="" />
        </div>
        <div className='parrafo1'>
        <p>
          En Cedime, estamos convencidos de que la persona con discapacidad no
          se define por su diagnostico, sino como fenómeno social, producto de
          la interrelación entre la determinación biológica/orgánica , y su
          entorno (familia, instituciones, sociedad, etc). Esto lo define como
          un sujeto singular y único, con toda la importancia y la
          responsabilidad que esto implica. Lograr una vida de calidad, basada
          en la propias preferencias y deseos, es un objetivo compartido por
          todos los sujetos, pero las personas con discapacidad suelen
          encontrarse mas obstáculos que el resto en el camino para alcanzarlo.
        </p>
        </div>
      </div>
      <div className='filosofia2'>
      <div className='contenedor__imagen'>
            <img src={Imagen2} className='imagen2' alt="" />
        </div>
        <div className='parrafo2'>
        <p>
          La idea de felicidad es algo que se construye a lo largo de toda la
          trayectoria vital de cada persona. En ella se van generando redes que
          hacen a la propia existencia, la cual construimos con otros a partir
          de relaciones significativas, en las que damos y recibimos, siempre en
          búsqueda de aquello que consideramos «una vida realizada». Para ello,
          se necesitan organizaciones responsables y comprometidas, que aseguren
          las relaciones y apoyos necesarios para que todas las personas con
          discapacidad puedan desarrollar su propio proyecto de felicidad,
          independientemente de las condiciones que acompañen su vida.
        </p>
        </div>
      </div>
      <div className='filosofia1'>
      <div className='contenedor__imagen'>
            <img src={Imagen3} className='imagen3' alt="" />
          
        </div>
        <div className='parrafo1'>
        <p>
          Por todo lo dicho anteriormente, entendemos que la felicidad tiene un
          valor diferente para cada sujeto. No puede ser impuesta desde afuera
          ni definirse como igual para todos. Es por ello, que nos proponemos
          acompañar e intentar brindar el apoyo necesario en el proceso
          orientado a construir y adquirir las herramientas para un acercamiento
          a ese ideal de felicidad u óptima calidad de vida. Hallar la felicidad
          parece sumamente ambicioso, pero ¿ que proyecto de vida no lo es?. En
          Cedime, creemos que esa meta debe ser un horizonte hacia el cual
          dirigir todo nuestro trabajo, apoyos e intervenciones, entendiendo que
          no estamos solos en este recorrido, siendo el trabajo conjunto con la
          familia, el eje principal de este ambicioso proyecto.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Filosofia;
