import React from "react";
import "../Servicios/Servicios.css";
import check from "../../Assets/check-green.png";
import personas from '../../Assets/image.png'

const Servicios = () => {
  return (
    <div className="Servicios" id="servicios">
      <div className='contenedor_titulo'>
      <div className='blob4'></div>
      <h2 className="titulo_servicios">Servicios</h2>
      </div>


      
      <div className='contenedor_servicios'>
        <div className='img_personas'>
          <img className='personasimg' src={personas} alt="" />
        </div>
        
     <div className="columpadre">
        <div className="column_servicio">
          <div>
            <img className="img_check" src={check} alt="" />
            <span>Psicología</span>
          </div>
          <div>
            <img className="img_check" src={check} alt="" />
            <span>Musicoterapia</span>
          </div>
          <div>
            <img className="img_check" src={check} alt="" />
            <span>Terapia ocupacional</span>
          </div>
          <div>
            <img className="img_check" src={check} alt="" />
            <span>Kinesiología</span>
          </div>
          <div>
            <img className="img_check" src={check} alt="" />
            <span>Enfermería</span>
          </div>
        </div>
        <div className="column_servicio">
          <div>
            <img className="img_check" src={check} alt="" />
            <span>Médico</span>
          </div>
          <div>
            <img className="img_check" src={check} alt="" />
            <span>Nutricionista</span>
          </div>
          <div>
            <img className="img_check" src={check} alt="" />
            <span>Educación física</span>
          </div>
          <div>
            <img className="img_check" src={check} alt="" />
            <span>Talleres ocupacionales</span>
          </div>
          <div>
            <img className="img_check" src={check} alt="" />
            <span>Talleres de arte</span>
          </div>
        </div>
        <div className="column_servicio">
          <div>
            <img className="img_check" src={check} alt="" />
            <span>Talleres recreativos</span>
          </div>
          <div>
            <img className="img_check" src={check} alt="" />
            <span>Asambleas de convivencia</span>
          </div>
          <div>
            <img className="img_check" src={check} alt="" />
            <span>Salidas a la comunidad</span>
          </div>
          <div>
            <img className="img_check" src={check} alt="" />
            <span>Caminatas barriales</span>
          </div>
          <div>
            <img className="img_check" src={check} alt="" />
            <span>Reuniones multifamiliares</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Servicios;
