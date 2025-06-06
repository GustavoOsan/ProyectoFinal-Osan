import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/Navbar.css"
import CartWidgetReactIcons from './CartWidgetReactIcons';
import { NavLink } from 'react-router-dom';

function NavbarReactBootstrap() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img src='../sleep-token-logo.png' alt='logo' className='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Principal</Nav.Link>
                        <NavDropdown title="Shop" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to='/category/clothes'>Clothes</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/category/Discos'>Records</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/category/Merch'>Merch</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <NavLink to="/cart">
                    <CartWidgetReactIcons/>
                    </NavLink>
                    
            </Container>
        </Navbar>
    );
}

export default NavbarReactBootstrap; 