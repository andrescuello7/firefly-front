import "../../values/styles/navbarComponent.css";
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom";

const NavbarLoginComponent = () => {
    return (
        <Navbar expand="lg" className="navbarBody sticky-top">
            <Container>
                <Navbar.Brand>
                    <div className="btn btn-light navbarFont">
                        <img className="imagenLogoNavbar" src={require('../../values/icons/firefly.png')} />
                        <b>Luciernaga</b>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light text-success" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbarItems">
                        <Nav.Link>
                            <Link className="btn btn-light navbarFont" to="/login">
                                Sing In
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="navbarFont btn btn-success w-100" to="/register">
                                Sing Up
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarLoginComponent;