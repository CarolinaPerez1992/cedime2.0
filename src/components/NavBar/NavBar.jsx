import React, { useState } from 'react'
import Logo from '../../Assets/logo-3cx.png'
import "./NavBar.css"
import Bars from '../../Assets/bars.png'
import { Link } from 'react-scroll'


const NavBar = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className='navbar'><img src={Logo} className="logo" alt="logo_cedime" />
            {menuOpened === false && mobile === true ? (
                <div style={{ backgroundColor: 'violet', padding: '1rem', borderRadius: '5px' }}

                    onClick={() => setMenuOpened(true)}
                >
                    <img src={Bars} alt='menu_bars' style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
            ) : (
                <ul className='navbar-menu'>
                    <li>
                        <Link onClick={() => setMenuOpened(false)}
                            activeClass='active'
                            to='inicio'
                            span={true}
                            smooth={true}>Inicio</Link></li>
                    <li ><Link onClick={() => setMenuOpened(false)}
                        to='nosotros'
                        span={true}
                        smooth={true}>Nosotros</Link></li>
                    <li ><Link onClick={() => setMenuOpened(false)}
                        to='filosofia'
                        span={true}
                        smooth={true}>Filosofía</Link></li>
                    <li ><Link onClick={() => setMenuOpened(false)}
                        to='servicios'
                        span={true}
                        smooth={true}>Servicios</Link></li>
                    <li ><Link onClick={() => setMenuOpened(false)}
                        to='galeria'
                        span={true}
                        smooth={true}>Galería</Link></li>
                    <li ><Link onClick={() => setMenuOpened(false)}
                        to='equipo'
                        span={true}
                        smooth={true}>Equipo Profesional</Link></li>
                    <li ><Link onClick={() => setMenuOpened(false)}
                        to='blog'
                        span={true}
                        smooth={true}>Blog</Link></li>
                    <li ><Link onClick={() => setMenuOpened(false)}
                        to='colabo'
                        span={true}
                        smooth={true}>Colaboradores</Link></li>
                    <li ><Link onClick={() => setMenuOpened(false)}
                        to='contacto'
                        span={true}
                        smooth={true}>Contacto</Link></li>
                </ul>
            )}
        </div>
    )
}

export default NavBar