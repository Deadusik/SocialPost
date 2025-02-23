import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';

const Navbar = () => {
    return (
        <BootstrapNavbar bg="dark" data-bs-theme="dark">
            <Container>
                <BootstrapNavbar.Brand href="#home">Social Post</BootstrapNavbar.Brand>
                <Nav>
                    <Nav.Link href="#features">Login</Nav.Link>
                    <Nav.Link href="#pricing">Registration</Nav.Link>
                </Nav>
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar