import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import './MenuEvents.css'


const MenuEvents = () => {
    return (
        <Navbar expand="lg" >
            <Container className="flex">
                <Navbar.Brand href="/" className="brand">Kofi&ti</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto ">
                        <Nav.Link href="/" className="nav-link"> Strona Główna
                        </Nav.Link>
                        <Nav.Link href="/menu"> Menu
                       </Nav.Link>
                        <Nav.Link href="/events"> Wydarzenia
                        </Nav.Link>
                        <Nav.Link href="/contact"> Kontakt
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default MenuEvents;