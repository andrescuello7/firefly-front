import "../../values/styles/navbarComponent.css";
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom";
import Variables from '../../values/api';

const NavbarComponent = () => {
    const { token, admin } = Variables();
    return (
        <Navbar expand="lg" className="navbarBody">
            <Container>
                <Navbar.Brand href="/">
                    <img className="imagenLogoNavbar" src={require('../../values/icons/firefly.png')} />
                    <b>Luciernaga</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light text-success" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbarItems">
                        <Nav.Link>
                            <Link className="btn btn-light" to="/profile">
                                Perfil
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="btn btn-light" to="/status">
                                Estado
                            </Link>
                        </Nav.Link>
                        {admin ?
                            <Nav.Link>
                                <Link className="btn btn-light" to="/admin">
                                    Administrador
                                </Link>
                            </Nav.Link>
                            :
                            <div></div>
                        }
                        {token === null ?
                            <Nav.Link>
                                <Link className="btn btn-success" to="/login">
                                    Sing In
                                </Link>
                            </Nav.Link>
                            :
                            <div></div>
                        }
                        {token === null ?
                            <Nav.Link>
                                <Link className="btn btn-dark" to="/register">
                                    Sing Up
                                </Link>
                            </Nav.Link>
                            :
                            <div></div>
                        }
                        {token ?
                            <Nav.Link>
                                <Link className="btn btn-success w-100" to="/login">
                                    Cerrar Sesion
                                </Link>
                            </Nav.Link>
                            :
                            <div></div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;