import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/Navbar.css"
import CartWidgetReactIcons from './CartWidgetReactIcons';

function NavbarReactBootstrap() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img src='../sleep-token-logo.png' alt='logo' className='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Principal</Nav.Link>
                        <NavDropdown title="Shop" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Clothes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Records</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Merch</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidgetReactIcons />    
            </Container>
        </Navbar>
    );
}

export default NavbarReactBootstrap; 