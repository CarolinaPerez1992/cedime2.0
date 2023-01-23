import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from '../../Assets/logo100.png';
/* import { HashLink } from 'react-router-hash-link'; */
import {
  BrowserRouter as Router
} from "react-router-dom";

function NavBar() {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" >
            <img src={logo} alt="Logo" style={{ width: '4rem'}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Nosotros" className='nosotros' id="basic-nav-dropdown">
                <NavDropdown.Item href="#filosofia">Filosofia</NavDropdown.Item>
                <NavDropdown.Item href="#equipo">Equipo Profesional</NavDropdown.Item>
                <NavDropdown.Item href="#colaboradores">Colaboradores</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#servicios" className={activeLink === 'servicios' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('servicios')}>Servicios</Nav.Link>
              <Nav.Link href="#galeria" className={activeLink === 'galeria' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('galeria')}>Galeria</Nav.Link>
              <Nav.Link href="#blog" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blog')}>Blog</Nav.Link>
              <Nav.Link href="#contacto" className={activeLink === 'contacto' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contacto')}>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
export default NavBar
