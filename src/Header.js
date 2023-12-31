import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand href="#home">Fantasy Predictor</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Join A League</NavDropdown.Item>
                            <NavDropdown.Item href="action/3.2">Start A League</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header