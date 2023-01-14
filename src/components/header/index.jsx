import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './index.css'

function Header() {
    return (
      <Navbar expand="lg" fixed="top" className='header'>
        <Container>
          <Navbar.Brand href="#home" className='header-heading'>Zarkus</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about" className='header-links'>About</Nav.Link>
              <Nav.Link href="#link" className='header-links'>Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Header;