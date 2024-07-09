import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg';

function OffcanvasPro() {
  return (
    <>
    <Navbar expand="lg" className="custom-nav my-2">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#about"><span data-hover="About Me">About Me</span></Nav.Link>
            <Nav.Link href="#skill"><span data-hover="Skills">Skills</span></Nav.Link>
            <Nav.Link href="#project"><span data-hover="Projects">Projects</span></Nav.Link>
            <Nav.Link href="#experience"><span data-hover="Experience">Experience</span></Nav.Link>
            <Nav.Link href="#contact"><span data-hover="Contact Me">Contact Me</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default OffcanvasPro;