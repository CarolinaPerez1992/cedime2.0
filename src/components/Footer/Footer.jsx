import React from 'react'
import "./Footer.css"
import facebook from "../../Assets/facebook.png"
import instagram from "../../Assets/instagram.png"
import whatsapp from "../../Assets/whatsapp.png"
import logo from "../../Assets/logo100.png"
import tienda from "../../Assets/tienda.png"
import llamada from "../../Assets/llamada.png"
import marcador from "../../Assets/marcador-de-posicion.png"
import email from "../../Assets/email.png"


const Footer = () => {
    return (
        <div className='Footer' id='footer'>
            <footer className="footer-container">
                <div className="footer pt-1">
                    <div className="logo-footer-container">
                        <img className="logo-footer" src={logo} alt="logo cedime" />
                        <h4 className="map-text text-white">Seguinos:</h4>
                        <div className="socialmedia-container ">
                            <a href="https://web.whatsapp.com/"><img className="redes-img" src={whatsapp}
                                alt="whatsapp logo" /></a>
                            <a href="https://www.instagram.com/"><img className="redes-img" src={instagram}
                                alt="instagram logo" /></a>
                            <a href="https://www.facebook.com/"><img className="redes-img" src={facebook}
                                alt="facebook logo" /></a>
                        </div>
                    </div>

                    <div className="map-text ">
                        <h3 className="text-white">Contactanos:</h3>
                        <div className='div-icon'>
                            <img className='img-icon' src={tienda} alt="" />
                            <p className='pt'>Monday-Friday: 7:00 a.m. a 6:00 p.m.</p>
                        </div>
                        <div className='div-icon'>
                            <img className='img-icon' src={llamada} alt="" />
                            <p className='pt'>Phone number: +57 321 984 8497</p>
                        </div >
                        <div className='div-icon'>
                            <img className='img-icon' src={marcador} alt="" />
                            <p className='pt'>Adress: Bogotá, Colombia</p>
                        </div>
                        <div className='div-icon'>
                            <img className='img-icon' src={email} alt="" />
                            <p className='pt'>smoky.vaping@gmail.com</p>
                        </div>
                    </div>

                    <div className="text-location">
                        <h3 className="text-white">Ubicacion:</h3>
                        <iframe class="map-img"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3977.1004259840356!2d-74.13734962540892!3d4.575979886435537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1671167599751!5m2!1ses!2sco"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className="footer-warning">
                    <h6>Cedime® 2023
                        Developed by Mauro y Andres, nadie mas</h6>
                </div>

            </footer>

        </div>
    );
};

export default Footer