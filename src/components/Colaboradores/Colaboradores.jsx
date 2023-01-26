import React from 'react'
import "../Colaboradores/Colaboradores.css"
import colaboradores from "../../Assets/team-png.png"
import unido from '../../Assets/corazon.png'

const Colaboradores = () => {
  return (
    <div className='Colaboradores' id='colaboradores'>
  <div className='contenedor_titulo'>
      <div className='blob4'></div>
      <h2 className="titulo_colaboradores">Colaboradores</h2>
      </div>
        <h3>CEDIME agradece la desinteresada colaboración de las siguientes personas:</h3>
        <div className='cajacol'>
        <div className="colaboradores">
<li> <img src={unido} width="20" alt="" /> FUNDADOR: Sr. Raúl Oscar Woites</li>
<li> <img src={unido} width="20" alt="" /> Analista en Sistemas. Lautaro Woites</li>
<li> <img src={unido} width="20" alt="" /> Alicia María Botto Hernández</li>
<li> <img src={unido} width="20" alt="" /> Cámara de comercio de Ezeiza</li>
<li> <img src={unido} width="20" alt="" /> Dr. Virgilio Andrés Cáceres</li>
<li> <img src={unido} width="20" alt="" /> Lic. Francisco Quesada</li>
<li> <img src={unido} width="20" alt="" /> Profesora Mariela Roxana Agüero</li>
<li> <img src={unido} width="20" alt="" /> Sanatorio Nuevos Aires S.A.</li>
<li> <img src={unido} width="20" alt="" /> Sr. Gastón Granados (Jefe de Gabinete <br /> Municipalidad de Ezeiza)</li>
<li> <img src={unido} width="20" alt="" /> Sr. Damián Bocaccio (Secretario de Gobierno,<br /> Municipalidad  de Ezeiza)</li>
<li> <img src={unido} width="20" alt="" /> Sr. Juan Arrigoni (Sub Secretario de Obras <br />Particulares,  Municipalidad de Ezeiza)</li>
<li> <img src={unido} width="20" alt="" /> Sr. Concejal del H. Concejo Deliberante de Ezeiza,<br /> Juan Carlos Casero</li>
<li> <img src={unido} width="20" alt="" /> Sr. Director de Entidades de Bien Público de la <br />Municipalidad  de Ezeiza, Rafael Buticce</li>

        </div>
        <div className="colaboradores">
<li><img src={unido} width="20" alt="" /> Sr. Eduardo Woites</li>
<li><img src={unido} width="20" alt="" /> Sr. Juan Domingo Agüero</li>
<li><img src={unido} width="20" alt="" /> Sr. Subsecretario de Obras Públicas de la Municipalidad de Ezeiza,<br /> Arq. Alejandro Carballo</li>
<li><img src={unido} width="20" alt="" /> Sr. Julián Scocozza, Secretaria de Obras Públicas</li>
<li><img src={unido} width="20" alt="" /> Sra. Ana María Aguirre</li>
<li><img src={unido} width="20" alt="" /> Srta. Daiana Micaela Isendor Cantelmi de la empresa Emergencias</li>
<li><img src={unido} width="20" alt="" /> Lic. Yanina Casal</li>
<li><img src={unido} width="20" alt="" /> Kgo. Federico Puzzo</li>
<li><img src={unido} width="20" alt="" /> Laura Basualdo</li>
<li><img src={unido} width="20" alt="" /> Prof. Carlota Guerrero</li>
<li><img src={unido} width="20" alt="" /> Contador Marcelo Duarte</li>
<li><img src={unido} width="20" alt="" /> Contadora Carolina Méndez</li>
<li><img src={unido} width="20" alt="" /> Prof. Daniela Vernenko</li>
<li><img src={unido} width="20" alt="" /> Lic. María Cecilia Romero</li>
<li><img src={unido} width="20" alt="" /> Carolina Alonso</li>
<li> <img src={unido} width="20" alt="" /> Contadora Miryam Lhithitx</li>
        </div>
        </div>
        <div className="colaboradores2">
<img src={colaboradores} alt="" />

        </div>

        </div>
  )
}

export default Colaboradores