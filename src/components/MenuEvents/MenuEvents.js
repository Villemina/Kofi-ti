import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";



const MenuEvents = () => {
    return (
        <Navbar bg="success" expand="lg" className="z-1 navbar-light   bg-opacity-0.5 ">
            <Container>
                <Navbar.Brand href="/">Kofi&ti</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link href="/"> Strona Główna
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