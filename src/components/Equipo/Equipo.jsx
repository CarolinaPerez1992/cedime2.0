import React from 'react'
import "../Equipo/Equipo.css"
import Carousel from "../Carrousel/Carrousel" 


const Equipo = () => {
    return (
        <div className='Equipo' id='equipo'>
            <div className='contenedor_titulo'>
            <div className='blob1'></div>
            <h2 className='titulo_equipo'>Equipo Profesional</h2>
            </div>
            <Carousel/>
        </div>
    );
};

export default Equipo